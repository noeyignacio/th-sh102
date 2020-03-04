var AnalyticsLeptoR1 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r1');

    // Methods

    function init($this) {
        var AnalyticsLeptoR1 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [28, 148, 315, 432, 584, 11],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [8, 220, 47, 57, 72, 0],
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

        $this.data('chart', AnalyticsLeptoR1);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR2 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r2');


    // Methods

    function init($this) {
        var AnalyticsLeptoR2 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [59, 50, 64, 197, 115, 14],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [2, 3, 8, 20, 13, 1],
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

        $this.data('chart', AnalyticsLeptoR2);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR3 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r3');


    // Methods

    function init($this) {
        var AnalyticsLeptoR3 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [48, 333, 308, 235, 491, 7],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [2, 14, 19, 26, 34, 1],
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

        $this.data('chart', AnalyticsLeptoR3);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR4A = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r4a');


    // Methods

    function init($this) {
        var AnalyticsLeptoR4A = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [7, 56, 136, 137, 465, 39],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [1, 7, 16, 11, 48, 3],
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

        $this.data('chart', AnalyticsLeptoR4A);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR4B = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r4b');


    // Methods

    function init($this) {
        var AnalyticsLeptoR4B = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [5, 55, 33, 25, 57, 15],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [0, 5, 0, 6, 3, 0],
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

        $this.data('chart', AnalyticsLeptoR4B);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR5 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r5');


    // Methods

    function init($this) {
        var AnalyticsLeptoR5 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [16, 57, 58, 102, 102, 18],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [1, 7, 1, 11, 7, 3],
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

        $this.data('chart', AnalyticsLeptoR5);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR6 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r6');


    // Methods

    function init($this) {
        var AnalyticsLeptoR6 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [94, 196, 195, 651, 661, 1],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [3, 12, 18, 51, 67, 0],
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

        $this.data('chart', AnalyticsLeptoR6);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR7 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r7');


    // Methods

    function init($this) {
        var AnalyticsLeptoR7 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [9, 34, 28, 170, 103, 3],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [0, 2, 8, 23, 15, 0],
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

        $this.data('chart', AnalyticsLeptoR7);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR8 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r8');


    // Methods

    function init($this) {
        var AnalyticsLeptoR8 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [15, 47, 13, 112, 82, 1],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [1, 3, 0, 10, 8, 0],
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

        $this.data('chart', AnalyticsLeptoR8);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR9 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r9');


    // Methods

    function init($this) {
        var AnalyticsLeptoR9 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [25, 37, 19, 45, 107, 1],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [2, 5, 1, 5, 12, 0],
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

        $this.data('chart', AnalyticsLeptoR9);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR10 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r10');


    // Methods

    function init($this) {
        var AnalyticsLeptoR10 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [41, 47, 57, 84, 47, 1],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [1, 7, 2, 3, 7, 0],
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

        $this.data('chart', AnalyticsLeptoR10);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR11 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r11');


    // Methods

    function init($this) {
        var AnalyticsLeptoR11 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [23, 46, 39, 167, 128, 0],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [1, 3, 7, 6, 10, 0],
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

        $this.data('chart', AnalyticsLeptoR11);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoR12 = (function () {

    // Variables

    var $chart = $('#analytics-lepto-r12');


    // Methods

    function init($this) {
        var AnalyticsLeptoR12 = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [2, 7, 7, 8, 11, 0],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [0, 1, 2, 0, 2, 0],
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

        $this.data('chart', AnalyticsLeptoR12);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoARMM = (function () {

    // Variables

    var $chart = $('#analytics-lepto-armm');


    // Methods

    function init($this) {
        var AnalyticsLeptoARMM = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [4, 8, 2, 8, 9, 1],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [0, 1, 0, 0, 1, 1],
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

        $this.data('chart', AnalyticsLeptoARMM);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoCAR = (function () {

    // Variables

    var $chart = $('#analytics-lepto-car');


    // Methods

    function init($this) {
        var AnalyticsLeptoCAR = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [9, 20, 39, 76, 73, 2],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [0, 3, 0, 2, 6, 0],
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

        $this.data('chart', AnalyticsLeptoCAR);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoCARAGA = (function () {

    // Variables

    var $chart = $('#analytics-lepto-caraga');


    // Methods

    function init($this) {
        var AnalyticsLeptoCARAGA = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [35, 12, 19, 52, 192, 0],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [3, 2, 0, 4, 6, 0],
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

        $this.data('chart', AnalyticsLeptoCARAGA);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

var AnalyticsLeptoNCR = (function () {

    // Variables

    var $chart = $('#analytics-lepto-ncr');


    // Methods

    function init($this) {
        var AnalyticsLeptoNCR = new Chart($this, {
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
                },
            },
            data: {
                labels: [2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [{
                    label: 'Cases',
                    data: [64, 281, 440, 568, 1987, 172],
                    borderColor: Charts.colors.theme['primary'],
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: Charts.colors.theme['primary'],
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    lineTension: 0.1,
                },
                {
                    label: 'Death',
                    data: [5, 36, 48, 82, 194, 7],
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

        $this.data('chart', AnalyticsLeptoNCR);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

