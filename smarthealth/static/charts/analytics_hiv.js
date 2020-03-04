var AnalyticsHIV = (function () {

    // Variables

    var $chart = $('#analytics-hiv');


    // Methods

    function init($this) {

        var AnalyticsHIV = new Chart($this, {
            type: 'doughnut',
            data: {
                labels: [
                    'With advnance Infection',
                    '15 y/o',
                    '15-24 y/o',
                    '24-34 y/o',
                    '35-49 y/o',
                    '50 y/o & above',
                    'Pregnant'
                ],
                datasets: [{
                    data: [
                        196, 1, 322, 519, 159, 37, 13
                    ],
                    backgroundColor: [
                        'rgba(218, 247, 166)',
                        'rgba(255, 195, 0)',
                        'rgba(255, 87, 51)',
                        'rgba(199, 0, 57)',
                        'rgba(144, 12, 63)',
                        'rgba(88, 24, 69)',
                        'rgba(51, 60, 255)',
                    ],
                    label: 'Dataset 1'
                }],
            },
            options: {
                cutoutPercentage: 50,
                responsive: true,
                legend: {
                    position: 'top',
                    reverse: true
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            },
        });

        // Save to jQuery object

        $this.data('chart', AnalyticsHIV);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();