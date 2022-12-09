// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPolarChart");
var myPieChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ["Piedra el peñol", "San Andres", "Tolu", "Punta Gallinas, La Guajira", "Caño Cristales, Meta", "Desierto de la Tatacoa,", "Río Claro"],
    datasets: [{
      data: [35, 40, 25, 40, 25, 15, 38],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#2cc22a', '#4619DF', "#3137ED", "#00FFD8"],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#1cc88a', '#36b9cc'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
      align : "center",
      position : "bottom",
    },
    cutoutPercentage: 80,
  },
});
