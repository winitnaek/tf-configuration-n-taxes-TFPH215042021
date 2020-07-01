"use strict";
const __assign =
  (this && this.__assign) ||
  Object.assign ||
  function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
const es6Promise = require("es6-promise");
const path = require("path");
const fs = require("fs");
const _ = require("lodash");

const UTF8_ENCODING = "utf8";
const allowedExtensions = ".json";
class AssetGenerator {
  constructor(options) {
    this.options = options;
    this.options.encoding = this.options.encoding != null ? this.options.encoding : UTF8_ENCODING;
    this.logger = new Logger(this.options.debug);
    this.init = true;
    this.apply = compiler => {
      const beforeCompile = (compilation, done) => {
        this.logger.debug("AssetGeneratorPlugin beforeCompile started...");
        this.options.compilation = compilation;
        let sourceFolders = this.options.sourceFolders;
        let groupBy = this.options.groupBy;

        const files = [];
        sourceFolders.forEach(folderPath => {
          this.getAllFiles(folderPath, files);
        });

        //2. Group all files
        files.forEach(file => {
          groupBy.forEach(({ pattern }, i) => {
            if (file.includes(pattern)) {
              if (!groupBy[i].files) {
                groupBy[i].files = [];
              }
              groupBy[i].files.push(file);
            }
          });
        });

        if (groupBy && this.init) {
          let groupByPromises = groupBy.map(glob => {
            return new es6Promise.Promise((resolve, reject) => {
              this.processFiles(glob, resolve, reject);
            });
          });

          es6Promise.Promise.all(groupByPromises)
            .then(opsResponse => {
              if (this.init) {
                opsResponse.forEach(({ filepath, content, copyFile }) => {
                  if (copyFile) {
                    const contents = content;
                    contents.forEach(({ fileContent, file }) => {
                      const index = file.lastIndexOf("\\") + 1;
                      const filename = file.substr(index);
                      const fileDestination = filepath + filename;
                      try {
                        fs.writeFileSync(fileDestination, `${JSON.stringify(fileContent)}`);
                      } catch (err) {
                        console.log(err);
                      }
                    });
                  } else {
                    fs.writeFileSync(filepath, content);
                  }
                });
                this.init = false;
              }
              done();
            })
            .catch(err => {
              this.handleErrors(compilation, err, done);
            });
        }

        this.logger.debug("AssetGeneratorPlugin beforeCompile completed...");
      };

      const plugin = "AssetGenerator";
      if (compiler.hooks) {
        compiler.hooks.beforeCompile.tapAsync(plugin, beforeCompile);
      } else {
        compiler.plugin("before-compile", beforeCompile);
      }
    };
    this.processFiles = ({ files, fileName: outputPath, exportSingleObject, copyFile }, resolve, reject) => {
      console.log("processFiles>>>>>", outputPath);
      let readFiles = files.map(f => {
        return new es6Promise.Promise((res, rej) => {
          this.readFile(f, res, rej);
        });
      });
      es6Promise.Promise.all(readFiles)
        .then(contents => {
          if (!copyFile) {
            const tools = contents.map(({ fileContent, file }) => {
              let pageId = _.get(fileContent, "pgdef.pgid", null);

              if (!pageId) {
                const regex = /(?<=\_).+?(?=\_)/;
                const index = file.lastIndexOf("\\") + 1;
                const filename = file.substr(index);
                const regexResults = regex.exec(filename);
                if (regexResults && regexResults[0]) {
                  pageId = regexResults[0];
                } else {
                  this.logger.error(`AssetGenerator: file name format is wrong ${file}`);
                }
              }

              if (!exportSingleObject && pageId) {
                const pgid = pageId.replace("/", "");
                return `export const ${pgid}=${JSON.stringify(fileContent)}`;
              } else {
                return `${JSON.stringify(fileContent)}`;
              }
            });

            if (!exportSingleObject) {
              resolve(new Response(outputPath, tools.join(";")));
            } else {
              const screens = `export default [${tools.join(",")}];`;
              resolve(new Response(outputPath, screens));
            }
          } else {
            resolve(new Response(outputPath, contents, copyFile));
          }
        })
        .catch(error => {
          reject(error);
        });
    };
    this.readFile = (f, resolve, reject) => {
      console.log("readFile>>>>>", f);
      f = f.trim();
      const extn = path.extname(f).toLowerCase();

      if (extn !== allowedExtensions) {
        this.logger.error(`${f} doesn't contain a valid file extention,trying to load it contents.`);
      }

      let entryData = undefined;
      try {
        entryData = fs.readFileSync(f, "utf8");
      } catch (e) {
        this.logger.error(`AssetGenerator: File missing [ ${f}] in path or assets `, e);
        reject(`AssetGenerator: Unable to locate file ${f}`);
        return;
      }

      if (!entryData) {
        this.logger.error(`AssetGenerator: Data appears to be empty in file [${f}]`);
        reject(`AssetGenerator: Data appears to be empty in file [ ${f} ]`);
      }
      if (entryData.charCodeAt(0) === 0xfeff) {
        entryData = entryData.slice(1);
      }

      let entryDataAsJSON = {};

      try {
        let fileContent = JSON.parse(entryData);
        entryDataAsJSON = fileContent;
      } catch (e) {
        this.logger.error(`AssetGenerator: Error parsing the json file [ ${f} ] and error is `, e);
        reject(`AssetGenerator: Error parsing the json file [${f}] `, e);
        return;
      }

      if (typeof entryDataAsJSON !== "object") {
        this.logger.error(`AssetGenerator: Not a valid object , file  [ ${f} ]`);
        reject(`AssetGenerator: Not a valid object , file  [${f} ]`);
        return;
      }

      resolve({ fileContent: entryDataAsJSON, file: f });
    };

    this.getAllFiles = (dirPath, arrayOfFiles = []) => {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
          arrayOfFiles = this.getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
          arrayOfFiles.push(path.join(dirPath, "/", file));
        }
      });
      return arrayOfFiles;
    };

    this.handleErrors = (compilation, error, done) => {
      compilation.errors.push(error);
      done();
    };
  }
}
class Response {
  constructor(filepath, content, copyFile) {
    this.filepath = filepath;
    this.content = content;
    this.copyFile = copyFile;
  }
}
class Logger {
  constructor(isDebug) {
    this.isDebug = false;
    this.debug = msg => {
      // if (this.isDebug) console.log(msg);
    };
    this.error = (msg, e) => {
      console.error("====Error===");
      console.error(msg, e != undefined ? e : "");
    };
    this.isDebug = isDebug;
  }
}
module.exports = AssetGenerator;
