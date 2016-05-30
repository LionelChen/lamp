/*
 * Function to draw the gauge
 */
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

/*
 * Just for the example: change the value every 2 seconds
 */
setInterval(function () {
    var chart = $('#container-gauge').highcharts(),
        point,
        newVal,
        inc;

    if (chart) {
        point = chart.series[0].points[0];
        inc = (Math.random() - 0.5) / 50 ;
        newVal = point.y + inc;

        if (newVal < 0.475 || newVal > 0.525) {
            newVal = point.y - inc;
        }

        point.update(newVal);
    }

}, 50);


/*
 * Call the function to built the chart when the template is rendered
 */
Template.Gauge.rendered = function () {
    builtGauge();
}