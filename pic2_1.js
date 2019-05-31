
var dom = document.getElementById("pic2_1");
var myChart2_1 = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        subtext: '*** 生还率 = 生还人数 / 航班总人数 ***',
        x: 'center'
    },
    /*tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : 事故数{c}起 (占比{d}%)"
    },*/
    legend: {
        x : 'center',
        y : 'bottom',
        data:['100','50至99','1至49','0']
    },
    calculable : true,
    color:['#33313b', '#145374','#4592af','#fad284'],
    series: [        {
        name:'生还率',
        type:'pie',
        radius : [50, 200],
        roseType : 'area',
        labelLine: {  
            lineStyle: {
                width:2.5,
            }
                         
        },
        label: {
            normal: {
                show:true,
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}起  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#33313b',
                borderWidth: 2,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#ffffff',
                        lineHeight: 22,
                        align: 'center',
                        //fontWeight: 'bold'
                    },
                    abg: {
                        backgroundColor: '#393e46',
                        width: '100%',
                        align: 'right',
                        height: 22,
                        borderRadius: [4, 4, 0, 0]
                    },
                    hr: {
                        borderColor: '#33313b',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                    },
                    b: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
        },

        data:[
            {value:9, name:'0%'},
            {value:2, name:'1%至49%'},
            {value:5, name:'50%至99%'},
            {value:22, name:'100%'},
        ]
    
    }]
};;
myChart2_1.setOption(option);