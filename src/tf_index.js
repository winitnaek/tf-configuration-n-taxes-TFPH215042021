import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './base/config/configureStore';
import * as rname from './base/constants/RenderNames';
import Progress from './app/common/Progress';
import * as manifest from '../build/_manifest';
import * as c from './base/constants/IndexConstants';
import {makeNavs,makeSearch} from './base/template/navGenerator';
import TFHome from './app/home/home.js';
let store = configureStore()    
export default store;
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './app/home/Sidebar';

//Temporary set user in session:======Comment this when deployed with MAC======
if (!sessionStorage.getItem('up')) {
    var userProfile ="{\r\n            \"userId\": \"001907\",\r\n            \"firstName\": \"Isreal\",\r\n            \"lastName\": \"Fullerton\",\r\n            \"dataset\": \"00_CFWD_002\",\r\n            \"securitytokn\": \"fhfh484jer843je848rj393jf\",\r\n            \"branding\": \"base64ImageData\",\r\n            \"userTheme\": \"Default\",\r\n            \"roles\": [\r\n                \"EE\"\r\n            ],\r\n            \"applications\": [\r\n                {\r\n                    \"id\": \"610bbc96-10dc-4874-a9fc-ecf0edf4260b\",\r\n                    \"name\": \"YearEndFactory\",\r\n                    \"accessIds\": [\r\n                        {\r\n                            \"id\": \"b9f6848d-30a7-451d-d2fa-86f3afa4df67\",\r\n                            \"visible\": true\r\n                        }\r\n                    ],\r\n                    \"permissions\": {\r\n                        \"viewDocument\": [\r\n                            1,\r\n                            0,\r\n                            0,\r\n                            0,\r\n                            0\r\n                        ]\r\n                    }\r\n                },\r\n                {   \r\n                \"id\": \"dd4282b1-0544-4ad1-8e0b-6a8d278ffd5c\",\r\n                \"name\": \"eeAdminFactory\",\r\n                \"accessIds\": [\r\n                    {\r\n                        \"id\": \"b55f51a1-0273-4457-8226-013a35d32080\",\r\n                        \"visible\": true\r\n                    }\r\n                ],\r\n                \"permissions\": {\r\n                    \"viewDocument\": [\r\n                        1,\r\n                        0,\r\n                        0,\r\n                        0,\r\n                        0\r\n                    ]\r\n                }\r\n            }\r\n            ],\r\n            \"themeList\": [\r\n                {\r\n                    \"id\": \"Default\",\r\n                    \"name\": \"Default\"\r\n                },\r\n                {\r\n                    \"id\": \"HighContrast\",\r\n                    \"name\": \"High Contrast\"\r\n                },\r\n                {\r\n                    \"id\": \"WhiteOnBlack\",\r\n                    \"name\": \"White On Black\"\r\n                },\r\n                {\r\n                    \"id\": \"BlackOnWhite\",\r\n                    \"name\": \"Black On White\"\r\n                }\r\n            ]\r\n        }"
    var userdata = JSON.parse(userProfile);
    console.log('setUserProfile userdata');
    console.log(userdata);
    sessionStorage.setItem("up", userProfile);
}
//==============================================================================
let usrobj = JSON.parse(sessionStorage.getItem('up'));
//console.log('setUserProfile usrobj');
//console.log(usrobj);
var dataset = usrobj.dataset;
var empId = usrobj.userId;
/**
 * renderW2AdmApplication TEST
 * master branch
 * @param {*} elem 
 * @param {*} renderName 
 */
function renderTFApplication(elem, renderName) {
    setAppAnchor(elem);
    setAppDataset(dataset);
    if(renderName===rname.RN_TF_HOME){
       ReactDOM.render(<Provider store={store}><Progress/></Provider>,document.querySelector('#'+elem));
       //store.dispatch(getTransmitters(dataset)).then((result) => {
        setTimeout(function() {    
            renderTFHome(elem);
        }.bind(this), 600)
       //}).catch((error) => {
         //   throw new SubmissionError({_error:  error });
       //});
    }
}
/**
 * renderTFHome
 * @param {*} elem 
 */

function renderTFHome(elem) {
    console.log(elem)
    ReactDOM.render(
        <Provider store={store}>
            <TFHome/>
        </Provider>,
       document.querySelector('#'+elem));
}
var APP_ANCHOR;
function setAppAnchor(elem){
   APP_ANCHOR = elem;
   ReactDOM.unmountComponentAtNode(document.querySelector('#'+elem));
}
function appAnchor(){
   return APP_ANCHOR;
}
var APP_DATASET;
function setAppDataset(dataset){
    APP_DATASET = dataset;
}
function appDataset(){
   return APP_DATASET;
}
function onloadPdfData(id) {
    var w2data = {
        loadeew2: true,
        eew2id: id
    }
    store.dispatch(loadPdfData(w2data));
}
function onloadCompData(id){
    var compdata = {
        loadcomp: true,
        compid: id
    }
    store.dispatch(loadCompData(compdata));
}

const resolveTemplates = async () => {
    let response = await fetch('templates.html');
    let templates = await response.text();
    console.debug('templates => ');
    console.debug(templates);
    return templates;
};

const initIndexPage = (templData) => {
    let mnfst = manifest._manifest;
    console.debug('manifest =>', mnfst);

    if (!mnfst) {
        console.error('ERROR: Manifest not found!');
        throw new Error('Manifest not found!');
    }

    if (!mnfst.name || !mnfst.desc) {
        console.error('ERROR: Manifest missing application name and/or application description!');
        throw new Error('Application name and/or application description not found!');
    }
    $('#' + c.appTitleId).html($('#' + c.appTitleId).html() + ' ' + mnfst.desc);
    $('#' + c.appNameId).html($('#' + c.appNameId).html() + ' ' + mnfst.desc);
    checkIfAreasDefined(mnfst.areas);
    let visAreas = getVisibleAreas(mnfst);

    if (visAreas && visAreas.length) {
        let navInput = {
            'areas': visAreas,
            'rf': mnfst.renderFunction,
            'anchorId': c.appContentId
        };
        document.body.insertAdjacentHTML('afterend', templData);
        makeNavs(navInput);
    }
    let search = getSearchData(mnfst);
    if(search){
        let searchInput = {
            'id': search[0].id,
            'renderName': search[0].rendername,
            'entities': search[0].entities,
            'rf': mnfst.renderFunction,
            'anchorId': c.appContentId
        };
        console.log(searchInput);
        makeSearch(searchInput);
    }else{
        //Hide Search Input
    }
};

const getVisibleAreas = (mnfst) => {
    let visibleAreas = mnfst.areas.filter((a) => {
        return a.visible === true;
    });
    console.debug('visible areas =>', visibleAreas);

    if (!visibleAreas || !visibleAreas.length) {
        console.warn('No visible areas specified!');
        $('#noVsblAreasAlrt').removeClass('d-none').show();
    } else {
        $('#noVsblAreasAlrt').removeClass('d-none').hide();
    }

    return visibleAreas;
};

const getSearchData = (mnfst) => {
    console.debug('search data =>', mnfst.search);
    let searchdata = mnfst.search;
    return searchdata;
};

const checkIfAreasDefined = (areas) => {
    if (!areas) {
        console.error('ERROR: At least one area must be defined in manifest!');
        throw new Error('No areas defined in manifest!');
    }
};

const renderWelcomePage = (elem) => {
    document.getElementById(elem).innerHTML = "<h3>Welcome to the Application Module Test Page. Please click on the links to load your single page application.</h3>";
};

const unMountNMountContainerNode = () => {
    $("div").remove("#" + c.appContentId);
    $('<div id="' + c.appContentId + '" class="main-content p-5 m-5"></div>').insertAfter($("#" + c.navId));
};

module.exports = renderTFApplication;
window.renderTFApplication = renderTFApplication;

module.exports = appDataset;
window.appDataset = appDataset;

module.exports = appAnchor;
window.appAnchor = appAnchor;

module.exports = onloadPdfData;
window.onloadPdfData = onloadPdfData;

module.exports = onloadCompData;
window.onloadCompData = onloadCompData;

let w2aIndex = {
    'resolveTemplates': resolveTemplates,
    'init': initIndexPage,
    'reloadContent': unMountNMountContainerNode,
    'renderWelcomePage': renderWelcomePage,
    'nameId': c.appNameId,
    'contentId': c.appContentId
};

window.w2aIndex = w2aIndex;