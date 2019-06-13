// function for add button

// var a = 0;
//     function add() {
//         a++;
//         document.getElementById('add').value = a;
//     }

// // function for minus

// var i = 0;
//     function minus() {
//         i--;
//         document.getElementById('minus').value = i;
//     }

    // for first product

    function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

// for second product
    function increaseValueTwo() {
  var value = parseInt(document.getElementById('number-two').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number-two').value = value;
}

function decreaseValueTwo() {
  var value = parseInt(document.getElementById('number-two').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number-two').value = value;
}

// For third product
function increaseValueThree() {
  var value = parseInt(document.getElementById('number-three').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number-three').value = value;
}

function decreaseValueThree() {
  var value = parseInt(document.getElementById('number-three').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number-three').value = value;
}

// Rates Variables

// var Apple = 10;
// var Orange = 15;
// var Banana = 7;

var total_items = 4;

function CalculateItemsValue() {
    var total = 0;
    for (i=1; i<=total_items; i++) {
         
        itemID = document.getElementById("number"+i);
        if (typeof itemID === 'undefined' || itemID === null) {
            alert("No such item - " + "number"+i);
        } else {
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
         
    }
    document.getElementById("ItemsTotal").innerHTML = "$" + total;
     
}

