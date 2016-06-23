$( document ).ready(function() {

    $('a').smoothScroll();

    $(".progress").each(function(){

       var size = $(this).find(".progress-bar").attr("aria-valuenow");

       var blank = 100 - size;

       var myCanvas = $("<canvas height='120px'></canvas>");

       var data = {
          labels: [
          ],
          datasets: [
            {
                data: [blank, size],
                backgroundColor: [
                    "#FFFFFF",
                    "#36A2EB"
                    
                ],
                borderColor: [
                    "#FFFFFF",
                    "#36A2EB"
                ],
                hoverBackgroundColor: [
                    "#FFFFFF",
                    "#033c73"
                    
                ],
                hoverBorderColor: [
                    "#FFFFFF",
                    "#033c73"
                ]
            }]
    };



       $(this).replaceWith( myCanvas );

       var myDoughnutChart = new Chart(myCanvas, {
        type: 'doughnut',
        data: data,
        options: {
             tooltips:{enabled:false}
          }
        });

    });



});