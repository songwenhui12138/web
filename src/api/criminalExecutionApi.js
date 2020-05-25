import Http from "@/lib/axios"
import {URL} from "./config";

const httpAxios = new Http(URL);
//监狱
export const criminalPrison = (data) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/sdcm/criminalExecution/criminalPrison',
        params: data
    })
};
//监狱详情
export const criminalPrisonDetails = (data) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/sdcm/criminalExecution/criminalPrisonDetails',
        params: data
    })
};
//罪犯信息
export const criminalInfo = (data) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/sdcm/criminalExecution/criminalInfo',
        params: data
    })
}
//获取关注人员
export const attentionPersonnel = (data) => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/sdcm/criminalExecution/attentionPersonnel',
        params: data
    })
}
