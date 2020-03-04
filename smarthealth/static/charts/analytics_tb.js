var SalesChart = (function () {

    // Variables

    var $chart = $('#analytics-tb');


    // Methods

    function init($this) {
        var salesChart = new Chart($this, {
            type: 'line',
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: Charts.colors.gray[200],
                            zeroLineColor: Charts.colors.gray[200]
                        },
                        ticks: {
                            beginAtZero: false,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Human Population',
                            fontSize: 15
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Year',
                            fontSize: 15
                        }
                    }]
                }
            },
            data: {
                labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Infected',
                    data: [531, 535, 539, 543, 546, 550, 554, 554, 554, 590],
                    borderColor: Charts.colors.theme['danger'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['danger'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                }]
            }
        });

        // Save to jQuery object

        $this.data('chart', salesChart);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();