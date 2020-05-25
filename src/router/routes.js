export default [
    {
        path: "/",
        redirect: 'mainScreen',
    },
    {
        path: "/login",
        component: () => import("@/view/login/login.vue"),
        name: "login"
    },
    //主大屏
    {
        path: "/mainScreen",
        component: () => import("@/view/mainScreen/mainScreen.vue"),
        name: "mainScreen"
    },
    //工作台
    {
        path: "/workBench",
        component: () => import("@/view/workBench/workBench.vue"),
        name: "workBench"
    },
    //1,刑事执行-主大屏
    {
        path: "/criminalExecution",
        component: () => import("@/view/criminalExecution/criminalExecution.vue"),
        name: "criminalExecution"
    },
    //刑事执行-监狱
    {
        path: "/provincePrison",
        component: () => import("@/view/criminalExecution/provincePrison/provincePrison.vue"),
        name: "provincePrison",
        redirect: "/provincePrison/criminalPrison",
        children: [
            {//监狱
                path: "/provincePrison/criminalPrison",
                component: () => import("@/view/criminalExecution/provincePrison/criminalPrison/criminalPrison.vue"),
                name: "criminalPrison",
            },
            {//监狱详情
                path: "/provincePrison/criminalPrisonDetails/:dwdm",
                component: () => import("@/view/criminalExecution/provincePrison/criminalPrisonDetails/criminalPrisonDetails.vue"),
                name: "criminalPrisonDetails",
            },
            {//罪犯信息
                path: "/provincePrison/criminalInfo/:zfbh",
                component: () => import("@/view/criminalExecution/provincePrison/criminalInfo/criminalInfo.vue"),
                name: "criminalInfo",
            },
            {//罪犯档案
                path: "/provincePrison/criminalFiles",
                component: () => import("@/view/criminalExecution/provincePrison/criminalFiles/criminalFiles.vue"),
                name: "criminalFiles",
            }
        ]
    },
    //2,行政执法-主大屏
    {
        path: "/adminLawEnforcement",
        component: () => import("@/view/adminLawEnforcement/adminLawEnforcement.vue"),
        name: "adminLawEnforcement"
    },
    //行政执法-执法监督
    {
        path: "/LawEnforcementSupervision",
        component: () => import("@/view/adminLawEnforcement/LawEnforcementSupervision/LawEnforcementSupervision.vue"),
        name: "LawEnforcementSupervision",
        redirect: "/LawEnforcementSupervision/LawEnforSupPage",
        children: [
            { //人民监督员
                path: "/LawEnforcementSupervision/LawEnforSupPage",
                component: () => import("@/view/adminLawEnforcement/LawEnforcementSupervision/LawEnforSupPage/LawEnforSupPage.vue"),
                name: "LawEnforSupPage",
            }
        ]
    },
    //行政执法-仲裁
    {
        path: "/administrativeArbitration",
        component: () => import("@/view/adminLawEnforcement/administrativeArbitration/administrativeArbitration.vue"),
        name: "administrativeArbitration",
        redirect: "/administrativeArbitration/admtraArbitPage",
        children: [
            { //仲裁
                path: "/administrativeArbitration/admtraArbitPage",
                component: () => import("@/view/adminLawEnforcement/administrativeArbitration/admtraArbitPage/admtraArbitPage.vue"),
                name: "admtraArbitPage",
            }
        ]
    },
    //行政执法-执法&复议
    {
        path: "/reconsiderationLitigation",
        component: () => import("@/view/adminLawEnforcement/reconsiderationLitigation/reconsiderationLitigation.vue"),
        name: "reconsiderationLitigation",
        redirect: "/reconsiderationLitigation/recLitPage",
        children: [
            { //执法&复议
                path: "/reconsiderationLitigation/recLitPage",
                component: () => import("@/view/adminLawEnforcement/reconsiderationLitigation/recLitPage/recLitPage.vue"),
                name: "recLitPage",
            }
        ]
    },
    //行政执法-处罚&强制
    {
        path: "/mandatoryPunishment",
        component: () => import("@/view/adminLawEnforcement/mandatoryPunishment/mandatoryPunishment.vue"),
        name: "mandatoryPunishment",
        redirect: "/mandatoryPunishment/mandatoryPunishmentPage",
        children: [
            { //处罚&强制
                path: "/mandatoryPunishment/mandatoryPunishmentPage",
                component: () => import("@/view/adminLawEnforcement/mandatoryPunishment/mandatoryPunishmentPage/mandatoryPunishmentPage.vue"),
                name: "mandatoryPunishmentPage",
            }
        ]
    },
    //行政执法-行政许可
    {
        path: "/administrativeLicensing",
        component: () => import("@/view/adminLawEnforcement/administrativeLicensing/administrativeLicensing.vue"),
        name: "administrativeLicensing",
        redirect: "/administrativeLicensing/administrativeLicPage",
        children: [
            { //行政许可
                path: "/administrativeLicensing/administrativeLicPage",
                component: () => import("@/view/adminLawEnforcement/administrativeLicensing/administrativeLicPage/administrativeLicPage.vue"),
                name: "administrativeLicPage",
            }
        ]
    },
    //3,行政立法-主大屏
    {
        path: "/adminLegislation",
        component: () => import("@/view/adminLegislation/adminLegislation.vue"),
        name: "adminLegislation"
    },
    //行政立法-规章
    {
        path: "/rules",
        component: () => import("@/view/adminLegislation/rules/rules.vue"),
        name: "rules",
        redirect: "/rules/rulesPage",
        children: [
            { //规章
                path:  "/rules/rulesPage",
                component: () => import("@/view/adminLegislation/rules/rulesPage/rulesPage.vue"),
                name: "rulesPage",
            }
        ]
    },
    //行政立法-规章规范性文件
    {
        path: "/normativeDocuments",
        component: () => import("@/view/adminLegislation/normativeDocuments/normativeDocuments.vue"),
        name: "normativeDocuments",
        redirect: "/normativeDocuments/norDocumentsPage",
        children: [
            { //规章规范性文件
                path:  "/normativeDocuments/norDocumentsPage",
                component: () => import("@/view/adminLegislation/normativeDocuments/norDocumentsPage/norDocumentsPage.vue"),
                name: "norDocumentsPage",
            }
        ]
    },
    //行政立法-法规规章意见收集
    {
        path: "/opinionCollection",
        component: () => import("@/view/adminLegislation/opinionCollection/opinionCollection.vue"),
        name: "opinionCollection",
        redirect: "/opinionCollection/opCollectionPage",
        children: [
            { //法规规章意见收集
                path:  "/opinionCollection/opCollectionPage",
                component: () => import("@/view/adminLegislation/opinionCollection/opCollectionPage/opCollectionPage.vue"),
                name: "opCollectionPage",
            }
        ]
    },
    //4,公共法律服务-主大屏
    {
        path: "/publicLegalServices",
        component: () => import("@/view/publicLegalServices/publicLegalServices.vue"),
        name: "publicLegalServices"
    },
    //公共法律服务-人民监督员
    {
        path: "/peopleSupervisors",
        component: () => import("@/view/publicLegalServices/peopleSupervisors/peopleSupervisors.vue"),
        name: "peopleSupervisors",
        redirect: "/peopleSupervisors/peopleSupervisorsPage",
        children: [
            { //人民监督员
                path: "/peopleSupervisors/peopleSupervisorsPage",
                component: () => import("@/view/publicLegalServices/peopleSupervisors/peopleSupervisorsPage/peopleSupervisorsPage.vue"),
                name: "peopleSupervisorsPage",
            }
        ]
    },
    //公共法律服务 — 法律援助
    {
        path: "/legalAid",
        component: () => import("@/view/publicLegalServices/legalAid/legalAid.vue"),
        name: "legalAid",
        redirect: "/legalAid/legalAidPage",
        children: [
            { //法律援助
                path: "/legalAid/legalAidPage",
                component: () => import("@/view/publicLegalServices/legalAid/legalAidPage/legalAidPage.vue"),
                name: "legalAidPage",
            }
        ]
    },
    //公共法律服务 — 人员调解
    {
        path: "/peopleMediation",
        component: () => import("@/view/publicLegalServices/peopleMediation/peopleMediation.vue"),
        name: "peopleMediation",
        redirect: "/peopleMediation/peopleMediationPage",
        children: [
            { //人员调解
                path: "/peopleMediation/peopleMediationPage",
                component: () => import("@/view/publicLegalServices/peopleMediation/peopleMediationPage/peopleMediationPage.vue"),
                name: "peopleMediationPage"
            }
        ]
    },
    //公共法律服务 — 司法鉴定
    {
        path: "/judicialExpertise",
        component: () => import("@/view/publicLegalServices/judicialExpertise/judicialExpertise.vue"),
        name: "judicialExpertise",
        redirect: "/judicialExpertise/judicialExpertisePage",
        children: [
            { //司法鉴定
                path: "/judicialExpertise/judicialExpertisePage",
                component: () => import("@/view/publicLegalServices/judicialExpertise/judicialExpertisePage/judicialExpertisePage.vue"),
                name: "judicialExpertisePage",
            }
        ]
    },
    //公共法律服务 — 基层法律服务
    {
        path: "/basLevLegServices",
        component: () => import("@/view/publicLegalServices/basLevLegServices/basLevLegServices.vue"),
        name: "basLevLegServices",
        redirect: "/basLevLegServices/basLevLegServicesPage",
        children: [
            { //基层法律服务
                path: "/basLevLegServices/basLevLegServicesPage",
                component: () => import("@/view/publicLegalServices/basLevLegServices/basLevLegServicesPage/basLevLegServicesPage.vue"),
                name: "basLevLegServicesPage",
            }
        ]
    },
    {
        path: "*",
        component: () => import("@/view/error/error.vue"),
        name: "error"
    }
]
