const consultationCtx = document.getElementById('consultationChart').getContext('2d');
new Chart(consultationCtx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [100, 50, 10],
            backgroundColor: ['rgba(122, 85, 217, 1)', 'rgba(33, 206, 128, 1)', 'rgba(242, 182, 42, 1)'],
            borderWidth: 0,
        }]
    },
    options: { responsive: true,
        hover: {
            mode: null
          }
     }
});


// Monthly Sales Revenue Chart
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawSalesRevenueChart);

function drawSalesRevenueChart() {
    const data = google.visualization.arrayToDataTable([
        ['Month', 'Sales (Lakhs)', { role: 'style' },{ role: 'annotation' }],
        ['Jan', 30, 'color: #7A55D9; stroke-width: 0;','7 Lakhs'],
        ['Feb', 50, 'color: #7A55D9; stroke-width: 0;','7 Lakhs'],
        ['Mar', 100, 'color: #7A55D9; stroke-width: 0;','7 Lakhs'],
        ['Apr', 150, 'color: #7A55D9; stroke-width: 0;','7 Lakhs'],
        ['May', 200, 'color: #7A55D9; stroke-width: 0;','7 Lakhs']
    ]);

    const options = {
        backgroundColor: 'transparent',
        legend: { position: 'none' },
        chartArea: { width: '85%', height: '75%' },
        hAxis: {
            textStyle: { color: '#B8B8B8' },
            gridlines: { color: 'none' },
        },
        vAxis: {
            textStyle: { color: '#B8B8B8' },
            gridlines: { color: '#3D3D3D' },
        },
        bar: { groupWidth: '70%' }
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('salesRevenueChart'));
    chart.draw(data, options);
}


// Team Conversion Rate Chart

// Monthly Consultation Report Chart
google.charts.setOnLoadCallback(drawConsultationChart);

function drawConsultationChart() {
    const data = google.visualization.arrayToDataTable([
        ['Category', 'Value'],
        ['Total Appointment', 30],
        ['Meeting Not Done', 30],
        ['Deal Closing', 40],
        ['Total Meeting Done', 50]
    ]);

    const options = {
        pieHole: 0,
        backgroundColor: 'transparent',
        chartArea: { 
            left: 20,
            top: 20,
            width: '100%',
            height: '65%'
        },
        colors: ['#2DB488', '#DB9942', '#E65695', '#605DC8'],
        legend: {
            position: 'bottom',
            textStyle: {
                color: '#B8B8B8',
                fontSize: 14
            },
            maxLines: 4,
            alignment: 'start',
            textPosition: 'start',
            pageSize: 4
        },
        tooltip: {
            trigger: 'focus'
        },
        pieSliceBorderColor: 'none',
        pieSliceText: 'percentage',
        pieSliceTextStyle: {
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold'
        }
    };

    for (let i = 0; i < data.getNumberOfRows(); i++) {
        let label = data.getValue(i, 0);
        let value = data.getValue(i, 1);
        data.setValue(i, 0, `${label} (${value})`);
    }

    const chart = new google.visualization.PieChart(document.getElementById('consultationReportChart'));
    chart.draw(data, options);
}


//Team Progress Report
const ctx = document.getElementById('horizontalBarChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [{
            data: [6, 8, 4, 7],
            backgroundColor: '#21CE80 ',
            borderColor: '#388E3C',
            borderWidth: 0,
            borderRadius: 3,
        }]
    },
    options: {
        hover: {
            mode: null
        },
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 14
                },
                align: 'center',
                anchor: 'center',
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#3B3B3B'
                },
                ticks: {
                    color: '#B8B8B8',
                    stepSize: 2,
                    min: 0,
                    max: 8,
                    callback: function(value) {
                        if (value === 0 || value === 2 || value === 4 || value === 6 || value === 8) {
                            return value;
                        }
                    }
                },
                beginAtZero: true
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#B8B8B8'
                }
            }
        },
    }
});