
var dom = document.getElementById("pic2.2");
var myChart2_2 = echarts.init(dom);
var app = {};
option = null;
// 关于“省优质幼儿园评选”的投票
var chartData = [10, 7, 7, 7, 6, 6, 6, 5];
var chartName = ['Boeing 737', 'Douglas C-47-DL (DC-3)', 'Douglas C-53 (DC-3)', 'Hawker Siddeley HS-121 Trident 2E', 'Curtiss C-46', 'DC-9-82 (MD-82)', 'Junkers Ju-52/3m', "Ilyushin Il-14"];
// var unit='亿元';
var myColor = ['#FFA483', '#F97F53', '#F45922'];
option = {
    //  title: {
    //     text: '单位:  '+unit,
    //     right:0,
    //     textStyle: {
    //         color: '#000',
    //         fontSize:14,
    //     }
    // },

    //backgroundColor: '#fff',
    title: {
       // text: "事故次数————机型排名",
        subtext: "***数字描述的是多年空难中该机型发生事故的次数***",
        textStyle: {
            color: "#F45922",
            fontSize: 26
        },
        subtextStyle: {
            color: "#6F6F6F",
            fontSize: 11
        },
        left: 'center',
        top: "3%"
    },
    grid: {
        left: '2%',
        right: '10%',
        bottom: '1%',
        //top: '10%',
        containLabel: true
    },
    xAxis: [{
            show: false,
        },
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        inverse: true,
        show: false
    },

    series: [

        //亮色条 百分比
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%',
            z: 2,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#444444',
                        fontSize: 25,
                        fontWeight: 'bold'
                    },
                    position: 'right',
                    formatter: function(data) {
                        return (' ' + chartData[data.dataIndex]) + ' times';
                    }
                }
            },
            data: chartData,
        },
        //年份
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度
            barGap: '-100%',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    barBorderRadius: 200,
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [0, '-20'],
                    textStyle: {
                        fontSize: 14,
                        color: '#333',
                    },
                    formatter: function(data) {
                        return chartName[data.dataIndex];
                    }
                }
            },
            data: chartData
        }
    ]
};;
myChart2_2.setOption(option);