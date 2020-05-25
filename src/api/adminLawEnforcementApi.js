import Http from "@/lib/axios"
import {URL} from "./config";

const httpAxios = new Http(URL);

export const adminLawEnforcement = () => {
    return httpAxios.axioseRquest({
        method: "get",
        url: "/api/sdcm/adminLawEnforcement",
    })
};
