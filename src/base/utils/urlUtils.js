const svcpath = '/tfws/';
const apiversion = 'v1';
const apir = 'r/';
const apiprefix ='/api'
class urlUtils {
  static buildURL(urlin) {
    let url = `${apiprefix}${svcpath}${apir}${apiversion}${urlin}`; return url;
  }
}
export default urlUtils;