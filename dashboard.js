/* globals Chart:false, feather:false */

// window.onload = function () {

//   var chart = new CanvasJS.Chart("chartContainer", {
//     theme: "light1", // "light2", "dark1", "dark2"
//     animationEnabled: false, // change to true		
//     title:{
//       text: "Basic Column Chart"
//     },
//     data: [
//     {
//       // Change type to "bar", "area", "spline", "pie",etc.
//       type: "column",
//       dataPoints: [
//         { label: "apple",  y: 10  },
//         { label: "orange", y: 15  },
//         { label: "banana", y: 25  },
//         { label: "mango",  y: 30  },
//         { label: "grape",  y: 28  }
//       ]
//     }
//     ]
//   });
//   chart.render();
  
//   }

const ctx = document.getElementById('myChart');
const Red = document.getElementById('Red');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// (function () {
//   'use strict'

//   feather.replace({ 'aria-hidden': 'true' })

//   // Graphs
//   var ctx = document.getElementById('myChart')
//   // eslint-disable-next-line no-unused-vars
//   var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: [
//         'الأحد',
//         'الإثنين',
//         'الثلاثاء',
//         'الأربعاء',
//         'الخميس',
//         'الجمعة',
//         'السبت'
//       ],
//       datasets: [{
//         data: [
//           15339,
//           21345,
//           18483,
//           24003,
//           23489,
//           24092,
//           12034
//         ],
//         lineTension: 0,
//         backgroundColor: 'transparent',
//         borderColor: '#007bff',
//         borderWidth: 4,
//         pointBackgroundColor: '#007bff'
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: false
//           }
//         }]
//       },
//       legend: {
//         display: false
//       }
//     }
//   })
// })()
  