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