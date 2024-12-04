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
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const data = google.visualization.arrayToDataTable([
        ['Month', 'Sales (Lakhs)', { role: 'style' },{ role: 'annotation' }],
        ['Jan', 30, 'color: #7A55D9; stroke-width: 0;','7 Lakhs'],
        ['Feb', 50, 'color: #7A55D9; stroke-width: 0;','7 Lakhs'],
        ['Mar', 100, 'color: #7A55D9; stroke-width: 0;','7 Lakhs'],
        ['Apr', 150, 'color: #7A55D9; stroke-width: 0;','7 Lakhs'],
        ['May', 200, 'color: #7A55D9; stroke-width: 0;','7 Lakhs']
    ]);

    const options = {
        backgroundColor: 'transparent', // Remove background color
        legend: { position: 'none' }, // Remove legend
        chartArea: { width: '85%', height: '75%' }, // Adjust chart area
        hAxis: {
            textStyle: { color: '#B8B8B8' },
            gridlines: { color: 'none' }, // Remove gridlines on x-axis
        },
        vAxis: {
            textStyle: { color: '#B8B8B8' },
            gridlines: { color: '#3D3D3D' }, // Add gridlines on y-axis
        },
        bar: { groupWidth: '70%' } // Set bar width
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('salesRevenueChart'));
    chart.draw(data, options);
}


// Team Conversion Rate Chart


// Monthly Consultation Report Chart

const consultationReportCtx = document.getElementById('consultationReportChart').getContext('2d');
new Chart(consultationReportCtx, {
    type: 'pie',
    data: {
        labels: ['Total Appointment', 'Meeting Not Done', 'Deal Closing', 'Total Meeting Done'],
        datasets: [{
            data: [30, 30, 40, 50], // Data percentages
            backgroundColor: ['#2DB488', '#DB9942', '#E65695', '#605DC8'], // Colors: Green, Yellow, Pink, Purple
            borderWidth: 0, // No border around the segments
            
        }]
    },
    options: {
        responsive: true,
        hover: {
            mode: null
          },
        plugins: {
            legend: {
                position: 'bottom', // Position the legend at the bottom
                align: 'start', // Align labels to the left
                labels: {
                    color: '#B8B8B8', // Set label color
                    usePointStyle: false,
                    padding: 20, // Adjust padding between legend items
                    boxWidth: 16, // Set legend box width
                    font: {
                        size: 14, // Adjust font size
                    },
                },
            },
            tooltip: {
                enabled: true, // Enable tooltips for better user interaction
            }
        },
        layout: {
            padding: {
                bottom: 20, // Add padding below the chart to prevent overlap
            },
        }
    }
});


//Team Progress Report
const ctx = document.getElementById('horizontalBarChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'], // Labels for each bar
        datasets: [{
            data: [6, 8, 4, 7], // Data values
            backgroundColor: '#21CE80 ', // Green color
            borderColor: '#388E3C', // Slightly darker green for border
            borderWidth: 0,
            borderRadius: 3, // Rounded bar edges
        }]
    },
    options: {
        hover: {
            mode: null // Disable hover effect
        },
        indexAxis: 'y', // Makes the chart horizontal
        responsive: true,
        plugins: {
            legend: {
                display: false // Hides the legend
            },
            datalabels: {
                color: '#fff', // Label color (white)
                font: {
                    weight: 'bold', // Bold font style
                    size: 14 // Font size for labels
                },
                align: 'center', // Center the label inside the bars
                anchor: 'center', // Center anchor point for labels
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#3B3B3B' // Gridline color
                },
                ticks: {
                    color: '#B8B8B8',
                    // Custom tick values
                    stepSize: 2, // Ensures we divide the axis by 2
                    min: 0, // Start from 0
                    max: 8, // End at 8
                    callback: function(value) {
                        if (value === 0 || value === 2 || value === 4 || value === 6 || value === 8) {
                            return value;
                        }
                    }
                },
                beginAtZero: true // Start axis at zero
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