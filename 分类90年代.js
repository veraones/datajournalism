
var dom = document.getElementById("分类90年代");
var myChart = echarts.init(dom);
var app = {};
option = null;
var data = [
    {
        name: '完全损毁',
        children: [
        {
            name:'军用',
            children:[
            {
                    name: '操作失误',
                    value: 1,
                }, {
                    name: '外部干扰',
                    value: 1,
                },
            ]
        },
        {
            name:'民用航空',
            children:[
            {
                    name: '操作失误',
                    value: 31,
                }, {
                    name: '劫机',
                    value: 1,
                }, 
            ]
        },
        {
            name: '通用航空',
            children:[
            {
                    name: '操作失误',
                    value: 2,
                },
            ]
        },
    ]}, 

    {
        name:'未损毁',
        children:[
            {
                name:'民用航空',
                children:[
                {name: '操作失误',
                    value: 2,
                }, {
                    name: '劫机',
                    value: 66,
                }
                ]
            },
        ]
    }
];

option = {
    visualMap: {
        type: 'continuous',
        min: 1,
        max: 80,
        inRange: {
            color: ['#4592af','#33313b',]
        }
    },
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '95%'],
        sort: null,
        levels: [{}, {
            r0: '15%',
            r: '35%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '35%',
            r: '70%',
            label: {
                align: 'right'
            }
        }, {
            r0: '70%',
            r: '72%',
            label: {
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }}
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
