import {tftools} from '../constants/TFTools';
class tfUtils {
  /**
   * buildModuleAreaLinks
   * @param {*} apps 
   */
  static buildModuleAreaLinks(apps) {
    let premTFtools = [];
    apps.forEach(function(app) {
      if (app.id == "73b9a516-c0ca-43c0-b0ae-190e08d77bcc") {
        app.accessIds.forEach(function(access) {
          if (access.id == "162ebe14-8d87-44e1-a786-c9365c9d5cd8" && access.visible == true) {
            premTFtools = tftools.filter(tftool => { if (app.permissions.hasOwnProperty(tftool.value)) return tftool} );
          }
        });
      }
    });
    return premTFtools;
  }
  /**
   * setPerms
   * @param {*} perm 
   */
  static setPerms(perm) {
    let appperm = {
      VIEW: perm[0] == 1 ? true : false,
      SAVE: perm[1] == 1 ? true : false,
      DELETE: perm[2] == 1 ? true : false,
      RUN: perm[3] == 1 ? true : false,
      AUDIT: perm[4] == 1 ? true : false
    };
    return appperm;
  }
}
export default tfUtils;