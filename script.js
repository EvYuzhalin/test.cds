
function recalcSum() {
  let sum = 0;
  // reduce in reduce
  const lists = document.querySelectorAll('#listBlock');
  for (let i = 0; i < lists.length; i = i + 1) {
    const child = lists[i].children[1];
    const values = child.querySelectorAll('#value');
    const checks = child.querySelectorAll('#checkbox');
    // console.log(values);
    // console.log(checks);
    for (let j = 0; j < values.length; j = j + 1) {
      if (checks[j].checked) {
        sum += parseInt(values[j].textContent, 10);
      }
    }
  }
  console.log(sum);
}

function uncheck() {
  var uncheck = document.getElementsByTagName("input");
  for (var i = 0; i < uncheck.length; i++) {
    if (uncheck[i].type == "checkbox") {
      uncheck[i].checked = false;
    }
  }
}

$(document).ready(function() {
  $(".inputTestone").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $(".oneBlockContent p").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
  $(".inputTestTwo").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $(".twoBlockContent p").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
  $(".inputTestThree").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $(".threeBlockContent p").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
  $(".inputTestFour").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $(".fourBlockContent p").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});
