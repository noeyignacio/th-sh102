var DoughnutChart = (function () {

    // Variables

    var $chart = $('#analytics-dengue');


    // Methods

    function init($this) {

        var doughnutChart = new Chart($this, {
            type: 'doughnut',
            data: {
                labels: [
                    'Dau',
                    'Atlu Bola',
                    'Balibago',
                    'Mabiga',
                    'Mauaque'
                ],
                datasets: [{
                    data: [
                        13, 43, 32, 25, 33
                    ],
                    backgroundColor: [
                        Charts.colors.theme['danger'],
                        Charts.colors.theme['warning'],
                        Charts.colors.theme['success'],
                        Charts.colors.theme['primary'],
                        Charts.colors.theme['info'],
                    ],
                    label: 'Dataset 1'
                }],
            },
            options: {
                cutoutPercentage: 50,
                responsive: true,
                legend: {
                    position: 'top',
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });

        // Save to jQuery object

        $this.data('chart', doughnutChart);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();