function getDataset(index, data) {
  return {
    x: index,
    y: data,
    data: data
  };
}

function barplot(text, x_col, y_col) {
  var iterator = 0;
  var a_labels = new Array();
  var c_array = new Array();
  var adder = 0;
  var c_adder = 0;

  let x_index;
  let y_index;
  let it = 0;
  let arrsa = [];

  d3.text(text, function(text) {
    var data1 = d3.csvParseRows(text).map(function(row, index) {
      return row.map(function(value, ind) {
        if (index === 0) {
          if (value.localeCompare(x_col) == 0) {
            arrsa[0] = 1;
            if (x_index == undefined) x_index = it;
          }

          if (value == y_col) {
            arrsa[1] = 2;
            if (y_index == undefined) y_index = it;
          }
        }
        it++;
      });
    });
  });

  let prev = 0;

  d3.text(text, function(text) {
    var data = d3.csvParseRows(text).map(function(row, index) {
      return row.map(function(value, ind) {
        if (ind === x_index) {
          a_labels[adder] = value;
          adder++;
        } else if (ind === y_index) {
          c_array[c_adder] = parseInt(value);
          c_adder++;
        }
        iterator++;
      });
    });

    c_array.reverse();
    a_labels.reverse();

    var obj = [];
    for (b = 0; b < c_array.length; b++) {
      obj.push(getDataset(a_labels[b], c_array[b]));
    }

    var ctx = document.getElementById("barChart").getContext("2d");

    {
      var myChart = new Chart(ctx, {
        type: "bar",

        //data: obj,
        data: {
          labels: a_labels,
          datasets: [
            {
              data: c_array,
              fill: false,
              borderColor: "#11a4ed",
              backgroundColor: "#11a4ed",
              borderWidth: 1
            }
          ]
        },
        options: {
          title: {
            display: false
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                  color: "black"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  color: "black",
                  borderDash: [2, 5]
                }
              }
            ]
          },
          responsive: false,
          maintainAspectRatio: false
        }
      });
    }
  });
}
