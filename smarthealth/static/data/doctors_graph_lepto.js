var Doctors_GraphLepto = (function () {

    //
    // Variables
    //

    var $chart = $('#doctors_graph_lepto');


    //
    // Methods
    //

    // Init chart
    function initChart($chart) {

        // Create chart
        var ordersChart = new Chart($chart, {
            type: 'horizontalBar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Infected',
                    data: [25, 20, 30, 22, 17, 29],
                    backgroundColor: 'orange'
                }],

            }
        });

        // Save to jQuery object
        $chart.data('chart', ordersChart);
    }


    // Init chart
    if ($chart.length) {
        initChart($chart);
    }

})();