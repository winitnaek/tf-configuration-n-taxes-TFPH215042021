import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./base/config/configureStore";
import * as rname from "./base/constants/RenderNames";
import {Progress} from "bsiuilib";
import * as manifest from "../build/_manifest";
import * as c from "./base/constants/IndexConstants";
import { makeNavs, makeSearch } from "./base/template/navGenerator";
import TFHome from "./app/home/home.js";
import { closeForm, setFormData } from "./app/actions/formActions";
import { setFilterFormData } from "./app/actions/filterFormActions";
import TestHarness from './app/test/TestHarness';
import * as fieldData from "./app/metadata/fieldData";
let store = configureStore();
export default store;
let MOCK = process.env.NODE_ENV === 'development' ? true:false;
setIsMock(MOCK);
import {
  buildModuleAreaLinks,
  openHelp,
  setPerms,
  compMetaData,
  compPermissions,
  buildGridDataInput
} from "./base/utils/tfUtils";
import { setModuleAreas } from "./app/home/actions/moduleLinksActions";
import CustomGrid from "./app/components/CustomGrid";
import ReusablePage from './app/components/ReusablePage';
import { UI_COMP, UI_PAGE, UI_TEST, tftools } from "./base/constants/TFTools";
import griddataAPI from "./app/api/griddataAPI";
//Temporary set user in session:======Comment this when deployed with MAC======
if (!sessionStorage.getItem("up")) {
  var userProfile =
    '{\r\n   "userId":"TF11",\r\n   "firstName":"Isreal",\r\n   "lastName":"Fullerton",\r\n   "dataset":"VINIT",\r\n   "securitytokn":"fhfh484jer843je848rj393jf",\r\n   "branding":"base64ImageData",\r\n   "userTheme":"Default",\r\n   "roles":[\r\n      "ER"\r\n   ],\r\n   "applications":[\r\n      {\r\n         "id":"73b9a516-c0ca-43c0-b0ae-190e08d77bcc",\r\n         "name":"TFTools",\r\n         "accessIds":[\r\n            {\r\n               "id":"162ebe14-8d87-44e1-a786-c9365c9d5cd8",\r\n               "visible":true\r\n            }\r\n         ],\r\n         "permissions":{\r\n            "CF":[\r\n               1,\r\n               1,\r\n               1,\r\n               1,\r\n               0\r\n            ],\r\n            "CT":[\r\n               1,\r\n               1,\r\n               1,\r\n               1,\r\n               0\r\n            ],\r\n            "CP":[\r\n               1,\r\n               1,\r\n               1,\r\n               1,\r\n               0\r\n            ],\r\n            "UQ":[\r\n               1,\r\n               1,\r\n               1,\r\n               1,\r\n               0\r\n            ]\r\n         }\r\n      }\r\n   ],\r\n   "themeList":[\r\n      {\r\n         "id":"Default",\r\n         "name":"Default"\r\n      },\r\n      {\r\n         "id":"HighContrast",\r\n         "name":"High Contrast"\r\n      },\r\n      {\r\n         "id":"WhiteOnBlack",\r\n         "name":"White On Black"\r\n      },\r\n      {\r\n         "id":"BlackOnWhite",\r\n         "name":"Black On White"\r\n      }\r\n   ]\r\n}';
  var userdata = JSON.parse(userProfile);
  if(isMock()){
    let thPerm =[1,1,1,1,0];
    let noOfPerm = Object.keys(userdata.applications[0].permissions).length;
    userdata.applications[0].permissions["TH"] = thPerm;
    let up = JSON.stringify(userdata)
    sessionStorage.setItem("up", up);
  }else{
    sessionStorage.setItem("up", userProfile);
  }
}
//==============================================================================
let usrobj = JSON.parse(sessionStorage.getItem("up"));

var dataset = usrobj.dataset;
var userId = usrobj.userId;
setModulePermissions(usrobj.applications);
let moduleAreas = buildModuleAreaLinks(usrobj.applications);

/**
 * renderW2AdmApplication TEST
 * master branch
 * @param {*} elem
 * @param {*} renderName
 */
function renderTFApplication(elem, renderName, child) {
  setAppAnchor(elem);
  setAppUserIDAndDataset(dataset, userId);
  if (renderName === rname.RN_TF_HOME) {
    showPrgress(elem);
    store.dispatch(setModuleAreas(moduleAreas));
    setTimeout(
      function() {
        renderTFHome(elem);
      }.bind(this),
      600
    );
  } else if (renderName && renderName.type == UI_COMP) {
    renderComponent(elem, renderName.id, renderName.value, child);
  } else if (renderName && renderName.type == UI_PAGE) {
    renderNewPage(elem, renderName.id, renderName.value);
  } else if (renderName && renderName.type == UI_TEST) {
    renderTestHarness(elem, renderName.id, renderName.value, child);
  }
}
/**
 * renderComponent 
 * @param {*} elem
 */
function renderComponent(elem, pageid, pid) {
  ReactDOM.unmountComponentAtNode(document.querySelector("#" + elem));
  showPrgress(elem);
  let gridInput = buildGridDataInput(pageid, store);

const state = store.getState()
const dispatch = store.dispatch

const renderGrid =  renderTFApplication
const gridProps = { state, dispatch, closeForm, setFormData, setFilterFormData, renderGrid}
const fieldDataX = fieldData[pageid];
let metaData = compMetaData(pageid);
  griddataAPI  
    .getGridData(pageid, gridInput) 
    .then(response => response)
    .then(griddata => {
      ReactDOM.render(
        <Provider store={store}>
          <CustomGrid
            pageid={pageid}
            metadata={compMetaData}
            pid={pid}
            permissions={compPermissions}
            griddata={griddata}
            help={openHelp}
            gridProps={gridProps}
            fieldData={fieldDataX}
            formMetaData={metaData}
          />
        </Provider>,
        document.querySelector("#" + elem)
      );
    });
}
/**
 * renderTestHarness
 * @param {*} elem 
 * @param {*} pgid 
 * @param {*} pid 
 */
function renderTestHarness(elem, pgid, pid) {
  ReactDOM.render(
    <Provider store={store}>
      <TestHarness pgid={pgid}/>          
    </Provider>,
    document.querySelector("#" + elem)
  );
}
/**
 * renderPage
 * @param {*} elem
 */
function renderTestComponent(elem, tool, metadata,mockdata,fieldData) {
  setMockMetadata(metadata);
  const state = store.getState()
  const dispatch = store.dispatch
  const renderGrid =  renderTFApplication
  const gridProps = { state, dispatch, closeForm, setFormData, setFilterFormData, renderGrid}
  ReactDOM.render(
    <Provider store={store}>
      <CustomGrid
        pageid={tool.id}
        metadata={testMetaData}
        pid={tool.value}
        permissions={compPermissions}
        griddata={mockdata}
        help={openHelp}
        gridProps={gridProps}
        fieldData={fieldData}
        formMetaData={metadata}
      />
    </Provider>,
    document.querySelector("#" + elem)
  );
}
export function testMetaData(pgid) {
  return getMockMedata();
}
/**
 * renderPage
 * @param {*} elem
 */
function renderNewPage(elem, pgid, pid) {
    const help = openHelp;
    ReactDOM.render(
      <Provider store={store}>
        <ReusablePage pgid={pgid} help={help} />          
      </Provider>,
      document.querySelector("#" + elem)
    );
}

/**
 * showPrgress
 * @param {*} elem
 */
function showPrgress(elem) {
  ReactDOM.render(
    <Provider store={store}>
      <Progress />
    </Provider>,
    document.querySelector("#" + elem)
  );
}

/**
 * renderTFHome
 * @param {*} elem
 */
function renderTFHome(elem) {
  ReactDOM.render(
    <Provider store={store}>
      <TFHome />
    </Provider>,
    document.querySelector("#" + elem)
  );
}

var APP_ANCHOR;
function setAppAnchor(elem) {
  APP_ANCHOR = elem;
  ReactDOM.unmountComponentAtNode(document.querySelector("#" + elem));
}
function appAnchor() {
  return APP_ANCHOR;
}
var APP_DATASET, APP_USERID,IS_MOCK,METADATA_MOCK;
function appDataset() {
  return APP_DATASET;
}
function appUserId() {
  return APP_USERID;
}
function isMock() {
  return IS_MOCK;
}
function setIsMock(mock) {
  IS_MOCK = mock;
}
function getMockMedata() {
  return METADATA_MOCK;
}
function setMockMetadata(metadata) {
  METADATA_MOCK = metadata;
}
function setAppUserIDAndDataset(dataset, userid) {
  APP_DATASET = dataset;
  APP_USERID = userid;
}
var CP_RIGHTS,
  CT_RIGHTS,
  CF_RIGHTS,
  CFC_RIGHTS,
  WS_RIGHTS,
  UQ_RIGHTS,
  ALL_RIGHTS;
function setCPRights(perm) {
  CP_RIGHTS = setPerms(perm);
}
function hasCPRights() {
  return CP_RIGHTS;
}
function setCTRights(perm) {
  CT_RIGHTS = setPerms(perm);
}
function hasCTRights() {
  return CT_RIGHTS;
}
function setCFRights(perm) {
  CF_RIGHTS = setPerms(perm);
}
function hasCFRights() {
  return CF_RIGHTS;
}
function setCFCRights(perm) {
  CF_RIGHTS = setPerms(perm);
}
function hasCFCRights() {
  return CF_RIGHTS;
}
function setWSRights(perm) {
  WS_RIGHTS = setPerms(perm);
}

function hasWSRights() {
  return WS_RIGHTS;
}
function setUQRights(perm) {
  UQ_RIGHTS = setPerms(perm);
}

function hasUQRights() {
  return UQ_RIGHTS;
}
function setAlRights(perm) {
  ALL_RIGHTS = perm;
}
function getAllRights() {
  return ALL_RIGHTS;
}
function setModulePermissions(apps) {
  apps.forEach(function(app) {
    if (app.id == "73b9a516-c0ca-43c0-b0ae-190e08d77bcc") {
      app.accessIds.forEach(function(access) {
        if (
          access.id == "162ebe14-8d87-44e1-a786-c9365c9d5cd8" &&
          access.visible == true
        ) {
          // setCPRights(app.permissions.CP);
          // setCTRights(app.permissions.CT);
          // setCFRights(app.permissions.CF)
          // setUQRights(app.permissions.UQ);
          setWSRights(app.permissions);
          setAlRights(app.permissions);
        }
      });
    }
  });
}
function onloadPdfData(id) {
  var w2data = {
    loadeew2: true,
    eew2id: id
  };
  store.dispatch(loadPdfData(w2data));
}
function onloadCompData(id) {
  var compdata = {
    loadcomp: true,
    compid: id
  };
  store.dispatch(loadCompData(compdata));
}

const resolveTemplates = async () => {
  let response = await fetch("templates.html");
  let templates = await response.text();
  console.debug("templates => ");
  console.debug(templates);
  return templates;
};

const initIndexPage = templData => {
  let mnfst = manifest._manifest;
  console.debug("manifest =>", mnfst);

  if (!mnfst) {
    console.error("ERROR: Manifest not found!");
    throw new Error("Manifest not found!");
  }

  if (!mnfst.name || !mnfst.desc) {
    console.error(
      "ERROR: Manifest missing application name and/or application description!"
    );
    throw new Error(
      "Application name and/or application description not found!"
    );
  }
  $("#" + c.appTitleId).html($("#" + c.appTitleId).html() + " " + mnfst.desc);
  $("#" + c.appNameId).html($("#" + c.appNameId).html() + " " + mnfst.desc);
  checkIfAreasDefined(mnfst.areas);
  let visAreas = getVisibleAreas(mnfst);

  if (visAreas && visAreas.length) {
    let navInput = {
      areas: visAreas,
      rf: mnfst.renderFunction,
      anchorId: c.appContentId
    };
    document.body.insertAdjacentHTML("afterend", templData);
    makeNavs(navInput);
  }
  let search = getSearchData(mnfst);
  if (search) {
    let searchInput = {
      id: search[0].id,
      renderName: search[0].rendername,
      entities: search[0].entities,
      rf: mnfst.renderFunction,
      anchorId: c.appContentId
    };
    makeSearch(searchInput);
  } else {
    //Hide Search Input
  }
};

const getVisibleAreas = mnfst => {
  let visibleAreas = mnfst.areas.filter(a => {
    return a.visible === true;
  });
  console.debug("visible areas =>", visibleAreas);

  if (!visibleAreas || !visibleAreas.length) {
    console.warn("No visible areas specified!");
    $("#noVsblAreasAlrt")
      .removeClass("d-none")
      .show();
  } else {
    $("#noVsblAreasAlrt")
      .removeClass("d-none")
      .hide();
  }

  return visibleAreas;
};

const getSearchData = mnfst => {
  console.debug("search data =>", mnfst.search);
  let searchdata = mnfst.search;
  return searchdata;
};

const checkIfAreasDefined = areas => {
  if (!areas) {
    console.error("ERROR: At least one area must be defined in manifest!");
    throw new Error("No areas defined in manifest!");
  }
};

const renderWelcomePage = elem => {
  document.getElementById(elem).innerHTML =
    "<h3>Welcome to the Application Module Test Page. Please click on the links to load your single page application.</h3>";
};

const unMountNMountContainerNode = () => {
  $("div").remove("#" + c.appContentId);
  $(
    '<div id="' + c.appContentId + '" class="main-content p-5 m-5"></div>'
  ).insertAfter($("#" + c.navId));
};

module.exports = renderTFApplication;
window.renderTFApplication = renderTFApplication;

module.exports = appDataset;
window.appDataset = appDataset;

module.exports = appUserId;
window.appUserId = appUserId;

module.exports = appAnchor;
window.appAnchor = appAnchor;

module.exports = hasCPRights;
window.hasCPRights = hasCPRights;

module.exports = hasCTRights;
window.hasCTRights = hasCTRights;

module.exports = hasCFRights;
window.hasCFRights = hasCFRights;

module.exports = hasUQRights;
window.hasUQRights = hasUQRights;

module.exports = getAllRights;
window.getAllRights = getAllRights;

module.exports = onloadPdfData;
window.onloadPdfData = onloadPdfData;

module.exports = onloadCompData;
window.onloadCompData = onloadCompData;

module.exports = isMock;
window.isMock = isMock;

module.exports = renderTestComponent;
window.renderTestComponent = renderTestComponent;

let w2aIndex = {
  resolveTemplates: resolveTemplates,
  init: initIndexPage,
  reloadContent: unMountNMountContainerNode,
  renderWelcomePage: renderWelcomePage,
  nameId: c.appNameId,
  contentId: c.appContentId
};

window.w2aIndex = w2aIndex;
