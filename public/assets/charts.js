function drawchart()
{
	var a=90;
	  //bar chart
    var ctx = document.getElementById( "barChart" );
    //    ctx.height = 200;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ "1996", "1998", "1999", "2004", "2009", "2014", "2017" ],
            datasets: [
                {
                    label: "Total voting percentage per year",
                    data: [ 57.94, 61.97, 59.99, 58.07, 58.17, 66.40, 68.04],
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                            },

                        ]
        },
        options: {
            scales: {
				xAxes: [{
                ticks: {
                        beginAtZero: true
                    },
						scaleLabel: {
						display: true,
						labelString: 'Years'
									}
            }],

                 yAxes: [{ticks: {
                        beginAtZero: true
                    },
						scaleLabel: {
						display: true,
						labelString: 'Percent  of  Votes'
									}
						}]

            }
        }
    } );

	//------------------------------------//

	//line chart
    var ctz = document.getElementById( "lineChart" );
    ctz.height = 150;
    var myChart = new Chart( ctz, {
        type: 'line',
        data: {
            labels: [ "1996", "1998", "1999", "2004", "2009", "2014" ,"2017"],
            datasets: [
                {
                    label: "Male Voters",
                    borderColor: "rgba(0,0,0,.09)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0,0,0,.07)",
                    data: [ 62.06, 65.86, 63.96, 61.98, 60.82, 67.09,71.02]
                            },
                {
                    label: "Female Voters",
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.5)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [ 53.41, 57.69, 55.63, 53.63, 55.82, 65.63 ,75.64]
                            }
                        ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
			 scales: {
				xAxes: [{
                ticks: {
                        beginAtZero: true
                    },
						scaleLabel: {
						display: true,
						labelString: 'Years'
									}
            }],

                 yAxes: [{ticks: {
                        beginAtZero: true
                    },
						scaleLabel: {
						display: true,
						labelString: 'Percent  of  Votes'
									}
						}]

            }

        }
    } );





}
  //>>-----------------------------<<\\
 //>>-------------------------------<<\\
//>>---------------------------------<<\\

var values=["8","40","22","11"]; //store json data in this array and pass it to data in pieChart
var partyname=["BJP","INC","BSP","AAP"];
var i;
function dynamicpiechart()
{

	//PERCENT OF AREA=(100*VOTES IN FAVOR)/TOTAL VOTES;


	 var ctv = document.getElementById( "pieChart" );
    ctv.height = 150;
    var myChart = new Chart( ctv, {
        type: 'pie',
        data: {
            datasets: [ {
                data: values,
                backgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                     "rgba(238, 93, 32, 0.8)",
                                    "rgba(255, 0, 0,0.8)",
                                    "rgba(56, 135, 86, 0.8)"
                                ],

                            } ],
            labels: [
               partyname[0],
						   partyname[1],
						   partyname[2],
						   partyname[3]
                        ]
        },
        options: {
            responsive: true
        }
    } );


    var ctage = document.getElementById( "ageChart" );
    //    ctx.height = 200;
    var myChart = new Chart( ctage, {
        type: 'bar',
        data: {
            labels: [ "18-24", "24-42", "42-60", "60 & above" ],
            datasets: [
                {
                    label: "Age group wise vote share",
                    data: [ 46,15,19,20],
                    borderColor: "rgba(254, 102, 17, 0.8)",
                    borderWidth: "0",
                    backgroundColor: "rgba(254, 102, 17, 0.6)"
                            },

                        ]
        },
        options: {
            scales: {
				xAxes: [{
                ticks: {
                        beginAtZero: true
                    },
						scaleLabel: {
						display: true,
						labelString: 'Age(Years)'
									}
            }],

                 yAxes: [{ticks: {
                        beginAtZero: true
                    },
						scaleLabel: {
						display: true,
						labelString: 'Number of  Votes'
									}
						}]

            }
        }
    } );





	}
