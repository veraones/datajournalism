
var dom = document.getElementById("pic2.1");
var myChart2_1 = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        // text: "空难中乘客生还率统计",
         subtext: "*** 乘客生还率 = 乘客死亡人数 / 航班乘客总人数 ***",
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
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['100%','99%--50%','49%--1%','0%','无记录']
    },
    series : [
        {
            name: '所有空难事故中',
            type: 'pie',
            radius : ['40%', '65%'],
            center: ['50%', '60%'],
            
            data:[
                {value:129, name:'100%'},
                {value:13, name:'99%--50%'},
                {value:14, name:'49%--1%'},
                {value:27, name:'0%'},
                {value:33, name:'无记录'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};;
myChart2_1.setOption(option);