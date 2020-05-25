/**
 * @description 右下图表配置
*/
export function getRightTopOption (xName,zhfnumbersm,ldfnumbersm,jyfnumbers){
    return {
        legend: {
            textStyle: {
                color: "#fff",
                padding: [3, 0, 0,0]
            },
            left: 350,
            top: 6,
            itemWidth:30,
            itemHeight:3,
            itemGap:20,
            data: [{name: '综合分', icon: "rect"}, {name: '劳动分', icon: "rect"}, {name: "教育分", icon: "rect"}]
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: 60,
            top: 40,
            bottom: 40,
            right: 60
        },
        xAxis: {
            data: xName,
            axisLabel: {
                color: "#fff",
                interval: 0
            },
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: "#008d98"
                }
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: ["#01495a"]
                }
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: "#fff",
                formatter: function (value) {
                    return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                }
            }
        },
        series:[
            {
                type:'line',
                name: "综合分",
                itemStyle:{
                    color:"#00ffff"
                },
                smooth:true,
                data: zhfnumbersm
            },
            {
                type:'line',
                name: "劳动分",
                itemStyle:{
                    color:"#00ff55"
                },
                smooth:true,
                data: ldfnumbersm
            },
            {
                type:'line',
                name: "教育分",
                itemStyle:{
                    color:"#177dff"
                },
                smooth:true,
                data: jyfnumbers
            }
        ]
    }
}
