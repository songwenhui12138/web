import Http from "@/lib/axios"
import {URL} from "./config";

const httpAxios = new Http(URL);
//主大屏
export const getMainScreen = () => {
    return httpAxios.axioseRquest({
        method: "get",
        url: '/api/sdcm/mainScreen'
    })
};
