var AnalyticsMeningococcal = (function () {

    // Variables

    var $chart = $('#analytics-meningococcal');


    // Methods

    function init($this) {

        var AnalyticsMeningococcal = new Chart($this, {
            type: 'doughnut',
            data: {
                labels: [
                    'Region I',
                    'Region II',
                    'Region III',
                    'Region IV-A',
                    'MIMAROPA',
                    'Region V',
                    'Region VI',
                    'Region VII',
                    'Region VIII',
                    'Region IX',
                    'Region X',
                    'Region XI',
                    'Region XII',
                    'ARMM',
                    'CAR',
                    'CARAGA',
                    'NCR',
                ],
                datasets: [{
                    data: [
                        0, 0, 10, 21, 6, 12, 6, 13, 3, 10, 6, 12, 0, 3, 1, 3, 24
                    ],
                    backgroundColor: [
                        'rgba(218, 247, 166)',
                        'rgba(255, 195, 0)',
                        'rgba(255, 87, 51)',
                        'rgba(199, 0, 57)',
                        'rgba(144, 12, 63)',
                        'rgba(88, 24, 69)',
                        'rgba(42, 117, 74)',
                        'rgba(117, 109, 42)',
                        'rgba(255, 30, 7)',
                        'rgba(168, 0, 246)',
                        'rgba(0, 246, 246)',
                        'rgba(0, 246, 149)',
                        'rgba(176, 131, 133)',
                        'rgba(236, 255, 0)',
                        'rgba(198, 182, 167)',
                        'rgba(129, 185, 219)',
                        'rgba(152, 129, 219)',

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

        $this.data('chart', AnalyticsMeningococcal);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();