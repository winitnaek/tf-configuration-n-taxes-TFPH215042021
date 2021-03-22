import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./base/config/configureStore";
import * as rname from "./base/constants/RenderNames";
import { Progress } from "bsiuilib";
import * as manifest from "../build/_manifest";
import * as c from "./base/constants/IndexConstants";
import { makeNavs, makeSearch } from "./base/template/navGenerator";
import TFHome from "./app/home/home.js";
import { closeForm, setFormData } from "./app/actions/formActions";
import { setFilterFormData } from "./app/actions/filterFormActions";
import TestHarness from "./app/test/TestHarness";
import CustomComp from "./app/components/CustomComp";
import MessageViewerContainer from "./app/components/MessageViewerContainer";
import * as fieldData from "./app/metadata/fieldData";
import { getFavoriteLinks } from "./app/home/actions/favoriteLinksActions";
let store = configureStore();
export default store;
let MOCK = process.env.NODE_ENV === "development" ? false : false;
setIsMock(MOCK);
import {
  buildModuleAreaLinks,
  openHelp,
  setPerms,
  compMetaData,
  getMetaData,
  compPermissions,
  buildGridDataInput,
  decorateData,
  formatFieldData
} from "./base/utils/tfUtils";
import { setModuleAreas } from "./app/home/actions/moduleLinksActions";
import CustomGrid from "./app/components/CustomGrid";
import ReusablePage from "./app/components/ReusablePage";
import { UI_COMP, UI_PAGE, UI_TEST, tftools } from "./base/constants/TFTools";
import griddataAPI from "./app/api/griddataAPI";
//Temporary set user in session:======Comment this when deployed with MAC======
if (!sessionStorage.getItem("up")) {
  var userProfile = '{"userId":"vinit","dataset":"VINIT","securitytokn":"6d976b4e3ef843119dc1b66017160837","branding":"base64ImageData","userTheme":"Default","roles":["ER"],"applications":[{"id":"73b9a516-c0ca-43c0-b0ae-190e08d77bcc","name":"TaxFactory","accessIds":[{"id":"162ebe14-8d87-44e1-a786-c9365c9d5cd8","visible":true}],"permissions":{"TT":[1,1,1,1,0],"CPO":[1,1,1,1,0],"DBC":[1,1,1,1,0],"PT":[1,1,1,1,0],"LR":[1,1,1,1,0],"YA":[1,1,1,1,0],"YB":[1,1,1,1,0],"YC":[1,1,1,1,0],"YD":[1,1,1,1,0],"YE":[1,1,1,1,0],"YF":[1,1,1,1,0],"YG":[1,1,1,1,0],"HW":[1,1,1,1,0],"YH":[1,1,1,1,0],"YI":[1,1,1,1,0],"YJ":[1,1,1,1,0],"YK":[1,1,1,1,0],"QF":[1,1,1,1,0],"MF":[1,1,1,1,0],"AO":[1,1,1,1,0],"UP":[1,1,1,1,0],"UQ":[1,1,1,1,0],"UR":[1,1,1,1,0],"MS":[1,1,1,1,0],"MV":[1,1,1,1,0],"WQF":[1,1,1,1,0],"ET":[1,1,1,1,0],"RB":[1,1,1,1,0],"RO":[1,1,1,1,0],"NX":[1,1,1,1,0],"BT":[1,1,1,1,0],"WM":[0,1,1,1,0],"GC":[1,1,1,1,0],"CB":[1,1,1,1,0],"GF":[1,1,1,1,0],"CC":[0,0,0,0,0],"GG":[1,1,1,1,0],"CF":[1,1,1,1,0],"CGF":[1,1,1,1,0],"OR":[1,1,1,1,0],"CG":[1,1,1,1,0],"PQF":[1,1,1,1,0],"GO":[1,1,1,1,0],"CR":[1,1,1,1,0],"TC":[1,1,1,1,0],"TD":[1,1,1,1,0],"CT":[1,1,1,1,0],"CP":[1,1,1,1,1],"PA":[1,1,1,1,0],"PC":[1,1,1,1,0],"PD":[1,1,1,1,0],"TH":[1,1,1,1,0],"LB":[1,1,1,1,0],"TL":[1,1,1,1,0],"DB":[1,1,1,1,0],"DO":[1,1,1,1,0],"PN":[1,1,1,1,0],"TR":[1,1,1,1,0],"PO":[1,1,1,1,0],"MT":[1,1,1,1,0]}}],"themeList":[{"id":"Default","name":"Default"},{"id":"HighContrast","name":"HighContrast"},{"id":"WhiteOnBlack","name":"WhiteOnBlack"},{"id":"BlackOnWhite","name":"BlackOnWhite"}]}';
  var userdata = JSON.parse(userProfile);
  if (isMock()) {
    let thPerm = [1, 1, 1, 1, 0];
    let noOfPerm = Object.keys(userdata.applications[0].permissions).length;
    userdata.applications[0].permissions["TH"] = thPerm;
    userdata.applications[0].permissions["SP"] = thPerm;
    userdata.applications[0].permissions["DF"] = thPerm;
    let up = JSON.stringify(userdata);
    sessionStorage.setItem("up", up);
  } else {
    sessionStorage.setItem("up", userProfile);
  }
}
//==============================================================================
let usrobj = JSON.parse(sessionStorage.getItem("up"));
let thPerm = [1, 1, 1, 1, 0];
var dataset = usrobj.dataset;
var userId = usrobj.userId;
usrobj.applications[0].permissions["MT"] = thPerm;
setModulePermissions(usrobj.applications);
let moduleAreas = buildModuleAreaLinks(usrobj.applications);

/**
 * renderTFConfigNTaxes TEST
 * master branch
 * @param {*} elem
 * @param {*} renderName
 */
function renderTFConfigNTaxes(elem, renderName, renderCtx) {
  setAppAnchor(elem);
  setAppUserIDAndDataset(dataset, userId);
  if (renderName === rname.RN_TF_HOME) {
    showPrgress(elem);
    usrobj = JSON.parse(sessionStorage.getItem("up"));
    dataset = usrobj.dataset;
    userId = usrobj.userId;
    setAppUserIDAndDataset(dataset, userId);
    setModulePermissions(usrobj.applications);
    moduleAreas = buildModuleAreaLinks(usrobj.applications);
    store.dispatch(setModuleAreas(moduleAreas));
    store.dispatch(getFavoriteLinks(userId,2));
    setTimeout(
      function () {
        renderTFHome(elem);
      }.bind(this),
      600
    );
    if (renderCtx) {
      setTimeout(
        function () {
          renderTFConfigNTaxes("pageContainer", renderCtx);
        }.bind(this),
        600
      );
    }
  } else if (renderName && renderName.type == UI_COMP) {
    if (renderName.id === "messageViewer" || renderName.id === "messagesViewer") {
      renderMessageViewer(elem, renderName.id, renderName.value);
    } else {
      renderComponent(elem, renderName.id, renderName.value);
    }
  } else if (renderName && renderName.type == UI_PAGE) {
    renderNewPage(elem, renderName.id, renderName.value, null);
  } else if (renderName && renderName.type == UI_TEST) {
    renderTestHarness(elem, renderName.id, renderName.value);
  } else if (renderName && renderName === rname.RN_TF_CSTMCOMP) {
    renderCustomComponent(elem, renderName);
  }
}

/**
 * renderMessageViewer
 * @param {*} elem
 */

function renderMessageViewer(elem, pageid, pid) {
  ReactDOM.unmountComponentAtNode(document.querySelector("#" + elem));
  const gridInput = buildGridDataInput(pageid, store);
  const state = store.getState();
  const dispatch = store.dispatch;
  const fieldDataX = formatFieldData(fieldData[pageid], pageid, appUserId());
  const gridProps = {
    state,
    dispatch,
    closeForm,
    setFormData,
    setFilterFormData,
    renderGrid: renderTFConfigNTaxes
  };
  const metadata = compMetaData(pageid);
  ReactDOM.render(
    <Provider store={store}>
      <MessageViewerContainer
        pageid={pageid}
        metadata={metadata}
        pid={pid}
        permissions={compPermissions}
        help={openHelp}
        gridProps={gridProps}
        fieldData={fieldDataX}
        formMetaData={metadata}
        getGridData={griddataAPI.getGridData}
        gridInput={gridInput}
      />
    </Provider>,
    document.querySelector("#" + elem)
  );
}

const getGridData = ({ pgid, showSummary }) => {
  let gridInput = buildGridDataInput(pgid, store);
  gridInput.showSummary = showSummary;
  return griddataAPI.getGridData(pgid, gridInput).then(response => response);
};

/**
 * renderComponent
 * @param {*} elem
 */
function renderComponent(elem, pageid, pid) {
  ReactDOM.unmountComponentAtNode(document.querySelector("#" + elem));
  showPrgress(elem);
  let gridInput = buildGridDataInput(pageid, store);

  const state = store.getState();
  const dispatch = store.dispatch;

  const renderGrid = renderTFConfigNTaxes;
  const gridProps = {
    state,
    dispatch,
    closeForm,
    setFormData,
    setFilterFormData,
    renderGrid
  };

  griddataAPI
    .getGridData(pageid, gridInput)
    .then(response => response)
    .then(griddata => {
      const metaData = getMetaData(pageid);
      let griddatanew = decorateData(griddata, pageid);
      const fieldDataX = formatFieldData(fieldData[pageid], pageid, appUserId());
      const isSingleTable = !(metaData instanceof Array);
      if (isSingleTable && griddatanew[0] instanceof Array) {
        griddatanew = griddatanew[0];
      }
      
      ReactDOM.render(
        <Provider store={store}>
          <Fragment>
            {!isSingleTable ? (
              griddatanew.map((data, key) => (
                <CustomGrid
                  pageid={pageid}
                  metadata={compMetaData(pageid, key)}
                  pid={pid}
                  permissions={compPermissions}
                  griddata={data}
                  help={openHelp}
                  gridProps={gridProps}
                  fieldData={fieldDataX}
                  className={key !== 0 ? "mt-3" : ""}
                  getDataForChildGrid={getGridData}
                />
              ))
            ) : (
              <CustomGrid
                pageid={pageid}
                metadata={compMetaData(pageid)}
                pid={pid}
                permissions={compPermissions}
                griddata={griddatanew}
                help={openHelp}
                gridProps={gridProps}
                fieldData={fieldDataX}
                getDataForChildGrid={getGridData}
              />
            )}
          </Fragment>
        </Provider>,
        document.querySelector("#" + elem)
      );
      // }
    });
}

/**
 * renderTestHarnesscccccc
 * @param {*} elem
 * @param {*} pgid
 * @param {*} pid
 */
function renderTestHarness(elem, pgid, pid) {
  ReactDOM.render(
    <Provider store={store}>
      <TestHarness pgid={pgid} />
    </Provider>,
    document.querySelector("#" + elem)
  );
}
/**
 * renderPage
 * @param {*} elem
 */
function renderTestComponent(elem, tool, metadata, mockdata, fieldData) {
  setMockMetadata(metadata);
  const state = store.getState();
  const dispatch = store.dispatch;
  const renderGrid = renderTFConfigNTaxes;
  const gridProps = {
    state,
    dispatch,
    closeForm,
    setFormData,
    setFilterFormData,
    renderGrid
  };
  ReactDOM.render(
    <Provider store={store}>
      <CustomGrid
        pageid={tool.id}
        metadata={getMockMedata()}
        pid={tool.value}
        permissions={compPermissions}
        griddata={mockdata}
        help={openHelp}
        gridProps={gridProps}
        fieldData={fieldData}
        formMetaData={getMockMedata()}
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
function renderNewPage(elem, pgid, pid, initialProps) {
  const help = openHelp;
  ReactDOM.render(
    <Provider store={store}>
      <ReusablePage pgid={pgid} help={help} initialProps={initialProps} pid={pid} />
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
/**
 * renderTFHome
 * @param {*} elem
 */
function renderCustomComponent(elem) {
  ReactDOM.unmountComponentAtNode(document.querySelector("#" + elem));
  showPrgress(elem);
  ReactDOM.render(
    <Provider store={store}>
      <CustomComp />
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
var APP_DATASET, APP_USERID, IS_MOCK, METADATA_MOCK;
function appDataset() {
  return APP_DATASET;
}
function appUserId() {
  return APP_USERID;
}
export function isMock() {
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
var CP_RIGHTS, CT_RIGHTS, CF_RIGHTS, CFC_RIGHTS, WS_RIGHTS, UQ_RIGHTS, ALL_RIGHTS;
//************Right & Permissions******************/
var BT_RIGHTS,CC_RIGHTS,NX_RIGHTS,OR_RIGHTS,UR_RIGHTS,WM_RIGHTS,GC_RIGHTS,GO_RIGHTS,
PO_RIGHTS,RO_RIGHTS,CG_RIGHTS,GG_RIGHTS,DO_RIGHTS,GF_RIGHTS,CGF_RIGHTS,CPO_RIGHTS,
PT_RIGHTS,TL_RIGHTS,ET_RIGHTS,AO_RIGHTS,TC_RIGHTS,TT_RIGHTS,PC_RIGHTS,TD_RIGHTS, MT_RIGHTS;
function setBTRights(perm) {
  BT_RIGHTS = setPerms(perm['BT']);
}
function hasBTRights() {
  return BT_RIGHTS;
}
function setCCRights(perm) {
  CC_RIGHTS = setPerms(perm['CC']);
}
function hasCCRights() {
  return CC_RIGHTS;
}
function setNXRights(perm) {
  NX_RIGHTS = setPerms(perm['NX']);
}
function hasNXRights() {
  return NX_RIGHTS;
}
function setORRights(perm) {
  OR_RIGHTS = setPerms(perm['OR']);
}
function hasORRights() {
  return OR_RIGHTS;
}
function setURRights(perm) {
  UR_RIGHTS = setPerms(perm['UR']);
}
function hasURRights() {
  return UR_RIGHTS;
}
function setWMRights(perm) {
  WM_RIGHTS = setPerms(perm['WM']);
}
function hasWMRights() {
  return WM_RIGHTS;
}
function setGCRights(perm) {
  GC_RIGHTS = setPerms(perm['GC']);
}
function hasGCRights() {
  return GC_RIGHTS;
}
function setGORights(perm) {
  GO_RIGHTS = setPerms(perm['GO']);
}
function hasGORights() {
  return GO_RIGHTS;
}
function setPORights(perm) {
  PO_RIGHTS = setPerms(perm['PO']);
}
function hasPORights() {
  return PO_RIGHTS;
}
function setRORights(perm) {
  RO_RIGHTS = setPerms(perm['RO']);
}
function hasRORights() {
  return RO_RIGHTS;
}
function setCGRights(perm) {
  CG_RIGHTS = setPerms(perm['CG']);
}
function hasCGRights() {
  return CG_RIGHTS;
}
function setGGRights(perm) {
  GG_RIGHTS = setPerms(perm['GG']);
}
function hasGGRights() {
  return GG_RIGHTS;
}
function setDORights(perm) {
  DO_RIGHTS = setPerms(perm['DO']);
}
function hasDORights() {
  return DO_RIGHTS;
}
function setGFRights(perm) {
  GF_RIGHTS = setPerms(perm['GF']);
}
function hasGFRights() {
  return GF_RIGHTS;
}
function setCPRights(perm) {
  CP_RIGHTS = setPerms(perm['CP']);
}
function hasCPRights() {
  return CP_RIGHTS;
}
function setCTRights(perm) {
  CT_RIGHTS = setPerms(perm['CT']);
}
function hasCTRights() {
  return CT_RIGHTS;
}
function setCFRights(perm) {
  CF_RIGHTS = setPerms(perm['CF']);
}
function hasCFRights() {
  return CF_RIGHTS;
}
function setCGFRights(perm) {
  CGF_RIGHTS = setPerms(perm['CGF']);
}
function hasCGFRights() {
  return CGF_RIGHTS;
}
function setCPORights(perm) {
  CPO_RIGHTS = setPerms(perm['CPO']);
}
function hasCPORights() {
  return CPO_RIGHTS;
}
function setPTRights(perm) {
  PT_RIGHTS = setPerms(perm['PT']);
}
function hasPTRights() {
  return PT_RIGHTS;
}
function setTLRights(perm) {
  TL_RIGHTS = setPerms(perm['TL']);
}
function hasTLRights() {
  return TL_RIGHTS;
}
function setETRights(perm) {
  ET_RIGHTS = setPerms(perm['ET']);
}
function hasETRights() {
  return ET_RIGHTS;
}
function setAORights(perm) {
  AO_RIGHTS = setPerms(perm['AO']);
}
function hasAORights() {
  return AO_RIGHTS;
}
function setTCRights(perm) {
  TC_RIGHTS = setPerms(perm['TC']);
}
function hasTCRights() {
  return TC_RIGHTS;
}
function setTTRights(perm) {
  TT_RIGHTS = setPerms(perm['TT']);
}
function hasTTRights() {
  return TT_RIGHTS;
}
function setPCRights(perm) {
  PC_RIGHTS = setPerms(perm['PC']);
}
function hasPCRights() {
  return PC_RIGHTS;
}
function setTDRights(perm) {
  TD_RIGHTS = setPerms(perm['TD']);
}
function hasTDRights() {
  return TD_RIGHTS;
}
function setMTRights(perm) {
  MT_RIGHTS = setPerms(perm['MT']);
}
function hasMTRights() {
  return MT_RIGHTS;
}
function setAlRights(perm) {
  ALL_RIGHTS = perm;
}
function getAllRights() {
  return ALL_RIGHTS;
}
//************Right & Permissions******************/
function setModulePermissions(apps) {
  apps.forEach(function (app) {
    if (app.id == "73b9a516-c0ca-43c0-b0ae-190e08d77bcc") {
      app.accessIds.forEach(function (access) {
        if (access.id == "162ebe14-8d87-44e1-a786-c9365c9d5cd8" && access.visible == true) {
          setBTRights(app.permissions);
          setCCRights(app.permissions);
          setNXRights(app.permissions);
          setORRights(app.permissions);
          setURRights(app.permissions);
          setWMRights(app.permissions);
          setGCRights(app.permissions);
          setGORights(app.permissions);
          setPORights(app.permissions);
          setRORights(app.permissions);
          setCGRights(app.permissions);
          setGGRights(app.permissions);
          setDORights(app.permissions);
          setGFRights(app.permissions);
          setCPRights(app.permissions);
          setCTRights(app.permissions);
          setCFRights(app.permissions);
          setPTRights(app.permissions);
          setTLRights(app.permissions);
          setETRights(app.permissions);
          setAORights(app.permissions);
          setTCRights(app.permissions);
          setTTRights(app.permissions);
          setPCRights(app.permissions);
          setTDRights(app.permissions);
          setMTRights(app.permissions);
          setCGFRights(app.permissions);
          setCPORights(app.permissions);
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
    console.error("ERROR: Manifest missing application name and/or application description!");
    throw new Error("Application name and/or application description not found!");
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
    $("#noVsblAreasAlrt").removeClass("d-none").show();
  } else {
    $("#noVsblAreasAlrt").removeClass("d-none").hide();
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
  $('<div id="' + c.appContentId + '" class="main-content"></div>').insertAfter($("#" + c.navId));
};

module.exports = renderTFConfigNTaxes;
window.renderTFConfigNTaxes = renderTFConfigNTaxes;

module.exports = appDataset;
window.appDataset = appDataset;

module.exports = appUserId;
window.appUserId = appUserId;

module.exports = appAnchor;
window.appAnchor = appAnchor;
//************Right & Permissions******************/
module.exports = hasBTRights;
window.hasBTRights = hasBTRights;
module.exports = hasCCRights;
window.hasCCRights = hasCCRights;
module.exports = hasNXRights;
window.hasNXRights = hasNXRights;
module.exports = hasORRights;
window.hasORRights = hasORRights;
module.exports = hasURRights;
window.hasORRights = hasURRights;
module.exports = hasWMRights;
window.hasWMRights = hasWMRights;
module.exports = hasGCRights;
window.hasGCRights = hasGCRights;
module.exports = hasGORights;
window.hasGORights = hasGORights;
module.exports = hasPORights;
window.hasPORights = hasPORights;
module.exports = hasRORights;
window.hasRORights = hasRORights;
module.exports = hasCGRights;
window.hasCGRights = hasCGRights;
module.exports = hasGGRights;
window.hasGGRights = hasGGRights;
module.exports = hasDORights;
window.hasDORights = hasDORights;
module.exports = hasGFRights;
window.hasGFRights = hasGFRights;
module.exports = hasCPRights;
window.hasCPRights = hasCPRights;
module.exports = hasCTRights;
window.hasCTRights = hasCTRights;
module.exports = hasCFRights;
window.hasCFRights = hasCFRights;
module.exports = hasCGFRights;
window.hasCGFRights = hasCGFRights;
module.exports = hasCPORights;
window.hasCPORights = hasCPORights;
module.exports = hasPTRights;
window.hasPTRights = hasPTRights;
module.exports = hasTLRights;
window.hasTLRights = hasTLRights;
module.exports = hasETRights;
window.hasETRights = hasETRights;
module.exports = hasAORights;
window.hasAORights = hasAORights;
module.exports = hasTCRights;
window.hasTCRights = hasTCRights;
module.exports = hasTTRights;
window.hasTTRights = hasTTRights;
module.exports = hasPCRights;
window.hasPCRights = hasPCRights;
module.exports = hasTDRights;
window.hasTDRights = hasTDRights;
module.exports = hasMTRights;
window.hasMTRights = hasMTRights;
//************Right & Permissions******************/
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
