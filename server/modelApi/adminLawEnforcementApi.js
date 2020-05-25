let {url} = require(pathRoot + '/config/config');
let Http = require(pathRoot + '/lib/axios.js');
const httpAxios = new Http(url);
module.exports = {
    //行政执法首页
    getAdminLawEnforcement: () => {
        return httpAxios.axioseRquest({
            method: "get",
            url: "/lawenfo/"
        })
    },
};
