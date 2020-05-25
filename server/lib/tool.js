/**
 * 获取当前年月日
 *  date  new Date()
 * fmt输入"yyyy--mm--ddd--hh-ii-ss",也可以单个显示比如yyyy-mm-dd，符号自己可选
 * **/
exports.Format = function (date, fmt) {
    fmt = fmt || "yyyy-mm-dd";
    var o = {
        "m+": date.getMonth() + 1,//月份
        "d+": date.getDate(),//日
        "h+": date.getHours(),//小时
        "i+": date.getMinutes(),//分
        "s+": date.getSeconds()//秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
