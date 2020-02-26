import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./base/config/configureStore";
import * as rname from "./base/constants/RenderNames";
import Progress from "./app/common/Progress";
import * as manifest from "../build/_manifest";
import * as c from "./base/constants/IndexConstants";
import { makeNavs, makeSearch } from "./base/template/navGenerator";
import TFHome from "./app/home/home.js";
let store = configureStore();
export default store;
import Welcome from './app/home/Welcome';
import TFUtils from './base/utils/tfUtils';
import {setModuleAreas} from './app/home/moduleLinksActions';
import ReusableGrid from "./app/components/ReusableGrid";
import UserDataQueries from "./app/components/UserDataQueries";
import HelpPage from './app/home/HelpPage';
import {metadatamap,UI_COMP,UI_PAGE} from './base/constants/TFTools';
//Temporary set user in session:======Comment this when deployed with MAC======
if (!sessionStorage.getItem("up")) {
  var userProfile ='{\r\n   \"userId\":\"001907\",\r\n   \"firstName\":\"Isreal\",\r\n   \"lastName\":\"Fullerton\",\r\n   \"dataset\":\"EPI_VINIT\",\r\n   \"securitytokn\":\"fhfh484jer843je848rj393jf\",\r\n   \"branding\":\"base64ImageData\",\r\n   \"userTheme\":\"Default\",\r\n   \"roles\":[\r\n      \"ER\"\r\n   ],\r\n   \"applications\":[\r\n      {\r\n         \"id\":\"73b9a516-c0ca-43c0-b0ae-190e08d77bcc\",\r\n         \"name\":\"TFTools\",\r\n         \"accessIds\":[\r\n            {\r\n               \"id\":\"162ebe14-8d87-44e1-a786-c9365c9d5cd8\",\r\n               \"visible\":true\r\n            }\r\n         ],\r\n         \"permissions\":{\r\n            \"CT\":[\r\n               1,\r\n               1,\r\n               1,\r\n               1,\r\n               0\r\n            ],\r\n            \"CP\":[\r\n               1,\r\n               1,\r\n               1,\r\n               1,\r\n               0\r\n            ],\r\n            \"UQ\":[\r\n               1,\r\n               1,\r\n               1,\r\n               1,\r\n               0\r\n            ]\r\n         }\r\n      }\r\n   ],\r\n   \"themeList\":[\r\n      {\r\n         \"id\":\"Default\",\r\n         \"name\":\"Default\"\r\n      },\r\n      {\r\n         \"id\":\"HighContrast\",\r\n         \"name\":\"High Contrast\"\r\n      },\r\n      {\r\n         \"id\":\"WhiteOnBlack\",\r\n         \"name\":\"White On Black\"\r\n      },\r\n      {\r\n         \"id\":\"BlackOnWhite\",\r\n         \"name\":\"Black On White\"\r\n      }\r\n   ]\r\n}';
  var userdata = JSON.parse(userProfile);
  console.log("setUserProfile userdata");
  console.log(userdata);
  sessionStorage.setItem("up", userProfile);
}
//==============================================================================
let usrobj = JSON.parse(sessionStorage.getItem("up"));
//console.log('setUserProfile usrobj');
//console.log(usrobj);
var dataset = usrobj.dataset;
var userId = usrobj.userId;
setModulePermissions(usrobj.applications);
let moduleAreas = TFUtils.buildModuleAreaLinks(usrobj.applications);
console.log('moduleAreas');
console.log(moduleAreas);
/**
 * renderW2AdmApplication TEST
 * master branch
 * @param {*} elem
 * @param {*} renderName
 */
function renderTFApplication(elem, renderName) {
  setAppAnchor(elem);
  setAppUserIDAndDataset(dataset, userId);
  console.log("elem");
  console.log(elem);
  console.log("renderName");
  console.log(renderName);
  console.log("moduleAreas");
  console.log(moduleAreas);
  if (renderName === rname.RN_TF_HOME) {
    ReactDOM.render(
      <Provider store={store}>
        <Progress />
      </Provider>,
      document.querySelector("#" + elem)
    );
    store.dispatch(setModuleAreas(moduleAreas));
    setTimeout(
      function() {
        renderTFHome(elem);
      }.bind(this),
      600
    );
  }else if(renderName && renderName.type==UI_COMP){
    renderComponent(elem,renderName.id,renderName.value);
  }else if(renderName && renderName.type==UI_PAGE){
    renderPage(elem,renderName.id,renderName.value);
  }
}
/**
 * renderComponent
 * @param {*} elem
 */
function renderComponent(elem,pageid,pid){
  ReactDOM.unmountComponentAtNode(document.querySelector('#' + elem));
  ReactDOM.render(
    <Provider store={store}>
      <ReusableGrid pageid={pageid} metadata={compMetaData} pid={pid} permissions={compPermissions} dataurl={dataURL}/>
    </Provider>,
    document.querySelector("#" + elem)
  );
}

/**
 * renderPage
 * @param {*} elem
 */
function renderPage(elem, pageid,pid) {
  if (pageid == "userDataQueries") {
    ReactDOM.render(
      <Provider store={store}>
        <UserDataQueries />
      </Provider>,
      document.querySelector("#" + elem)
    );
  }
}

/**
 * compMetaData
 * @param {*} pageid 
 */
function compMetaData(pageid){
  let metadataMap = metadatamap.find(metadatam => { if (pageid == metadatam.id) return metadatam});
  return metadataMap.metadata;
}
/**
 * compPermissions
 * @param {*} pid 
 */
function compPermissions(pid) {
  let perms = getAllRights();
  if (perms.hasOwnProperty(pid)) {
    return TFUtils.setPerms(perms[pid]);
  }
}
/**
 * dataURL
 */
function dataURL(pageid){
  let gridDataUrl;
  switch (pageid) {
    case "allBSIPlans":
      gridDataUrl = "./ALL_BSI_PLANS_MOCKDATA.json";
      break;
    case "customPayments":
      gridDataUrl = "./CUSTOM_PAYMENTS_MOCKDATA.json";
      break;
    case "customTaxCodes":
      gridDataUrl = "./CUSTOM_TAX_PAYMENT_MOCKDATA.json";
      break;
    case "populateV3States":
      gridDataUrl = "./POPULATE_V3_STATES_MOCKDATA.json";
      break;
    default:
      break;
  }
  return gridDataUrl;
}


function editClick(index) {
  console.log(index)
//    This index is an array that contains the page id and row index that was clicked

}

/**
 * renderTFHome
 */

function renderNewPage(page){
  ReactDOM.render(
    <Provider store={store}>
      <Welcome />
    </Provider>,
    document.querySelector("#" + elem)
  );
}


function renderTFHome(elem) {
  ReactDOM.render(
    <Provider store={store}>
      <TFHome />
    </Provider>,
    document.querySelector("#" + elem)
  );
}

function renderWelcome(elem) {
  ReactDOM.render(
    <Provider store={store}>
      <Welcome />
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
var APP_DATASET, APP_USERID;
function appDataset(){
   return APP_DATASET;
}
function appUserId() {
    return APP_USERID;
}
function setAppUserIDAndDataset(dataset, userid) {
    APP_DATASET = dataset;
    APP_USERID = userid;
}
var CP_RIGHTS,CT_RIGHTS,UQ_RIGHTS,ALL_RIGHTS;
function setCPRights(perm){
  CP_RIGHTS=TFUtils.setPerms(perm);
}
function hasCPRights(){
    return CP_RIGHTS;
}
function setCTRights(perm){
  CT_RIGHTS=TFUtils.setPerms(perm);
}
function hasCTRights(){
    return CT_RIGHTS;
}
function setUQRights(perm){
  UQ_RIGHTS=TFUtils.setPerms(perm);
}
function hasUQRights(){
    return UQ_RIGHTS;
}
function setAlRights(perm){
  ALL_RIGHTS=perm;
}
function getAllRights(){
  return ALL_RIGHTS;
}
function setModulePermissions(apps){
  apps.forEach(function(app) {
      if(app.id=="73b9a516-c0ca-43c0-b0ae-190e08d77bcc"){
          app.accessIds.forEach(function(access) {
              if(access.id=="162ebe14-8d87-44e1-a786-c9365c9d5cd8" && access.visible==true){
                  setCPRights(app.permissions.CP);
                  setCTRights(app.permissions.CT);
                  setUQRights(app.permissions.UQ);
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
    console.log(searchInput);
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

module.exports = editClick;
window.editClick = editClick


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

module.exports = hasUQRights;
window.hasUQRights = hasUQRights;

module.exports = onloadPdfData;
window.onloadPdfData = onloadPdfData;

module.exports = onloadCompData;
window.onloadCompData = onloadCompData;

let w2aIndex = {
  resolveTemplates: resolveTemplates,
  init: initIndexPage,
  reloadContent: unMountNMountContainerNode,
  renderWelcomePage: renderWelcomePage,
  nameId: c.appNameId,
  contentId: c.appContentId
};

window.w2aIndex = w2aIndex;
