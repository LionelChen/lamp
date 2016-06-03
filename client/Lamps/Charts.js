function builtGauge() {

    $('#container-gauge').highcharts({
        chart: {
            type: 'gauge',
            plotBorderWidth: 1,
            plotBackgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF4C6'],
                    [0.3, '#FFFFFF'],
                    [1, '#FFF4C6']
                ]
            },
            plotBackgroundImage: null,
            height: 200
        },

        credits:{
          enabled: false
        },

        exporting:{
            enabled:false
        },

        title: {
            text: '输出功率'
        },

        pane: [{
            startAngle: -45,
            endAngle: 45,
            background: null,
            center: ['50%', '145%'],
            size: 300
        }],

        tooltip: {
            enabled: false
        },

        yAxis: [{
            min: 0,
            max: 1,
            minorTickPosition: 'outside',
            tickPosition: 'outside',
            labels: {
                rotation: 'auto',
                distance: 20
            },
            plotBands: [{
                from: 0.7,
                to: 1,
                color: '#C02316',
                innerRadius: '100%',
                outerRadius: '105%'
            }],
            pane: 0,
            title: {
                text: 'LED 实时功率<br/><span style="font-size:8px">Channel A</span>',
                y: -40
            }
        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: false
                },
                dial: {
                    radius: '100%'
                }
            }
        },


        series: [{
            name: 'LED Power',
            data: [0.5],
            yAxis: 0
        }]
    });
}

function builtSpline() {


    $('#container-spline').highcharts({
        chart: {
            type: 'areaspline',
            plotBorderWidth: 1,
            backgroundColor: null,
            style: {
                fontFamily: "Dosis, sans-serif"
            },
            plotBackgroundImage: null,
            height: 220
        },
        colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
            "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        title: {
            text: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'rgba(219,219,216,0.8)',
            shadow: false
        },

        legend: {
            enabled: false
        },
        xAxis: {
            gridLineWidth: 1,
            labels: {
                style: {
                    fontSize: '12px'
                }
            },
            type: 'datetime'

        },
        plotOptions: {
            candlestick: {
                lineColor: '#404048'
            }
        },
        background2: '#F0F0EA',


        yAxis: {
            title: {
                enabled: false
            },
            visible: false,

        },

        series: [{
            data: [0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75],
            pointStart: false,
            pointInterval: 3600 * 1000
        }]
    });
}

var data1= new Array(70);
for(var i=0;i<data1.length;i++)
    data1[i] = new Array(2);

var data2 = new Array(70);
for(var i=0; i<data2.length;i++)
    data2[i] = new Array(2);

function builtScatter() {


    $('#container-scatter').highcharts({
        chart: {
            type: 'scatter',
            plotBorderWidth: 1,
            plotBackgroundImage: null,
            height: 220
        },
        title: {
            text: false
        },

        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },

        plotOptions: {
            scatter: {
                marker: {
                    radius: 3,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                }
            }
        },
        xAxis: {
            min:0,
            max:100,
            visible: false
        },

        yAxis: {
            min:0,
            max:1,
            visible: false
        },
        legend: {
            enabled: false
        },

        series: [{
            name: 'system',
            color: '#CCCCCC',
            data: data1

        }, {
            name: 'Lamp',
            color: '#0000CC',
            data: data2
        }]
    });
}

setInterval(function () {
    var chart = $('#container-gauge').highcharts(),
        point,
        newVal,
        inc;

    var tempStatus = Lamp.findOne({_id:"hpnC6neKCbs2QtuFq"}).tempStatus;
    if (chart) {
        point = chart.series[0].points[0];
        var centerValue;
        if(tempStatus==2){
            centerValue = 0.75;
            point.update(centerValue);
        }
        if(tempStatus==1){
            centerValue = 0.5;
            point.update(centerValue);
        }
        if(tempStatus==0){
            centerValue = 0.25;
            point.update(centerValue);
        }
        point = chart.series[0].points[0];
        inc = (Math.random() - 0.5) / 500 ;
        newVal = point.y + inc;

        if (newVal < (centerValue-0.025) || newVal > (centerValue+0.025)) {
            newVal = point.y - inc;
        }

    }

}, 50);

setInterval(function () {
    var chart = $('#container-spline').highcharts();

    var spline_data = chart.series[0];
    var tempStatus = Lamp.findOne({_id:"hpnC6neKCbs2QtuFq"}).tempStatus;
    var spline_data0 = [0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25];
    var spline_data1 = [0.5,0.5,0.5,0.5,0.5,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.5,0.9,0.9,0.75];
    var spline_data2 = [0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75];
    if(tempStatus == 2){
        for(i=0;i<24;i++){
            chart.series[0].data[i].update(spline_data2[i],false)
        }
    }else if(tempStatus == 1){
        for(i=0;i<24;i++){
            chart.series[0].data[i].update(spline_data1[i],false)
        }
    }else if(tempStatus == 0){
        for(i=0;i<24;i++){
            chart.series[0].data[i].update(spline_data0[i],false)
        }
    }
    chart.redraw();



}, 500);

setInterval(function () {
    var chart = $('#container-scatter').highcharts()

    var dataSys = chart.series[0];
    var dataLamp = chart.series[1];

    for(var i=0;i<data1.length;i++){
        data1[i][0] = i;
        data1[i][1]=0.5+(Math.random()-0.5)/3;
    }

    for(var i=0;i<data2.length-1;i++){
        data2[i][0]=i;
        data2[i][1]=data2[i+1][1];
    }
    data2[69][0]=69;
    data2[69][1]=0.5+(Math.random()-0.5)/10;

    dataSys.update(data1, false);
    dataLamp.update(data2,false);
    chart.redraw();

}, 500);

Template.Gauge.rendered = function () {
    builtGauge();
    builtSpline();
    builtScatter();

};
