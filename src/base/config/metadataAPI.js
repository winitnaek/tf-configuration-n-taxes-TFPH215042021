import {metadatamap} from '../constants/TFTools';
export async function getMetaData(pageid) {
        let metadataMap = metadatamap.find(metadatam => { if (pageid == metadatam.id) return metadatam});
        console.log('metadataMap');
        console.log(metadataMap);
        const response = await fetch(metadataMap.metadata);
        const json = await response.json();
        return json;
}
export default getMetaData;