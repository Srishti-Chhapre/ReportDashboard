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
const salesRevenueCtx = document.getElementById('salesRevenueChart').getContext('2d');
new Chart(salesRevenueCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Sales (Lakhs)',
            data: [10, 50, 100, 150, 200],
            backgroundColor: '#7A55D9',
            borderRadius:3,
        }]
    },
    options: {
        responsive: true,
        hover: {
            mode: null
          },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false}
        },
        scales: {
            x: {
                ticks: {
                    color: '#B8B8B8',
                    padding: 10 , 
                },
                grid: {
                    drawOnChartArea: false,
                }
            },
            y: {
                ticks: {
                    color: '#B8B8B8',
                    padding: 10 ,  
                },
                grid: {
                    color: '#3D3D3D',
                     
                }
            }
        }
    }
});


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