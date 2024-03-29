// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
var option = {
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '静态页面', max: 100},
            { name: '编程基础', max: 100},
            { name: 'Vue', max: 100},
            { name: 'React', max: 100},
            { name: '开发能力', max: 100},
            { name: '沟通能力', max: 100}
        ]
    },
    series: [{
        name: '能力雷达图',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [90, 90, 80, 70, 100, 90],
                name: '能力图'
            }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);