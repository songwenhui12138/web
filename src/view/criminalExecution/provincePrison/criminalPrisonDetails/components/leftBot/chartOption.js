import echarts from 'echarts'

/**
 * @description 左下图表配置
 */
export function getLeftOption(yName, value) {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: '{b0}: {c0}人'
        },
        grid: {
            left: '10%',
            top: '0%',
            right: '15%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine: {
                show: false
            },
            axisLabel: {
                fontSize: 12,
                color: "#fff",
                formatter: function (value) {
                    return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                }
            },
            splitLine: {
                lineStyle: {
                    color: ["#4f9efa"],
                    opacity: 0.3,
                }
            }
        },
        yAxis: {
            type: 'category',
            data: yName,
            axisLine: {
                lineStyle: {
                    color: '#4f9efa',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: 16,
                color: "#fff",
                lineHeight: 26,
                formatter: function (value) {
                    let sStr = value.slice(0, 7);
                    let eStr = value.slice(7);
                    return `${sStr}\n${eStr}`
                }
            }
        },
        series: {
            type: 'bar',
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#00b5b6' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#11ebbf' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                barBorderRadius: [0, 8, 8, 0],
            },
            barWidth: 16,
            label: {
                show: true,
                position: "right",
                color: "#fff",
                fontSize: 14,
            },
            data: value
        }
    }
}

/**
 * @description 右上图表配置(左)
 */
export function getRightTopLOption(data) {
    return {
        tooltip: {
            formatter: '{b}: {c}人, 占比{d}%'
        },
        series:
            {
                type: 'pie',
                color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                radius: ['12%', '65%'],
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#011b30',
                        borderWidth: 3,
                    },
                },
                label: {
                    formatter: "{b}{d}%\n({c})",
                    color: "#fff",
                    fontSize: 14,
                },
                labelLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                },
                hoverOffset: 5,
                selectedOffset: 5,
                data: data,
            },
    }
}

/**
 * @description 右上图表配置(右)
 */
export function getRightTopROption(data, yName) {
    let color = ["#00ffd0", "#00ff55", "#177dff"], max = 10;//外面边框需要最大值
    data = data.map((item, index) => {
        return {
            value: item,
            itemStyle: {
                color: color[index]
            }
        }
    });
    max = Math.ceil(Math.max(...data) * 1.2);//取数据最大值的1.2倍并进行向上取整数
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: '{b}: {c}所'
        },
        grid: {
            left: '40px',
            right: '40px',
            bottom: '40px',
            top: '40px',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: "#00fefe",
                    width: 1
                }
            },
            axisLabel: {
                color: "#fff",
                interval: 0
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: ["#4f9efa"],
                    opacity: 0.3,
                }
            }
        },
        yAxis: [{
            data: yName,
            axisLine: {
                lineStyle: {
                    color: "#00fefe",
                    width: 1
                }
            },
            axisLabel: {
                color: "#fff",
                interval: 0
            },
            axisTick: {
                show: false
            }
        }, {
            axisTick: 'none',
            axisLine: 'none',
            data: []
        }],
        series: [{
            yAxisIndex: 0,
            barWidth: 14,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: "#fff",
                    padding: [2, 0, 0, 0]
                }
            },
            itemStyle: {
                barBorderRadius: [0, 7, 7, 0]
            },
            data: data
        }, {
            barGap: '-100%',
            type: 'bar',
            data: [max, max, max],
            barWidth: 22,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00fefe',
                    borderWidth: 1,
                    barBorderRadius: [0, 11, 11, 0]
                }
            },
            z: 0
        }]
    }
}

/**
 * @description 右下图表配置
 */
export function getRightBotOption(xName,CriminalCount,JzzCount,Gyrl) {
    return {
        legend: {
            textStyle: {
                color: "#fff"
            },
            left: 'center',
            top: 6,
            data: [{name: '罪犯数量', icon: "rect"}, {name: '净增长数', icon: "rect"}, {name: "关押容量", icon: "rect"}]
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
                    color: "#01ffff"
                }
            },
        },
        yAxis: [
            {
                name: "罪犯数量",
                nameTextStyle: {
                    color: "#00ffff"
                },
                splitLine: {
                    lineStyle: {
                        color: ["#007a77"]
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
            {
                name: '净增长数',
                type: 'value',
                splitLine: {
                    show: false
                },
                nameTextStyle: {
                    color: "#f76b64"
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
            }
        ],
        series: [
            {
                name: "罪犯数量",
                type: 'bar',
                barWidth: 20,
                label: {
                    show: true,
                    position: "top",
                    color: "#fff",
                    fontSize: 14,
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#008fc2" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#40ddfe" // 100% 处的颜色
                    }], false),
                    barBorderRadius: [4, 4, 0, 0],
                    shadowBlur: 10,
                    shadowColor: '#40ddfe',
                    shadowOffsetX: 5,
                    shadowOffsetY: -5,
                },
                data: CriminalCount
            },
            {
                type: 'line',
                name: "净增长数",
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(0,255,208,1)'
                        }, {
                            offset: 1, color: 'rgba(0,255,208,0)'
                        }]
                    }
                },
                itemStyle: {
                    color: "#00ff55"
                },
                yAxisIndex: 1,
                smooth: true,
                data: JzzCount
            },
            {
                type: 'line',
                name: "关押容量",
                itemStyle: {
                    color: "#177dff"
                },
                smooth: true,
                data: Gyrl
            }
        ]
    }
}
