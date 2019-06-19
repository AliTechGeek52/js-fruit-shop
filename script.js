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

//     function increaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number').value = value;
// }

// function decreaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number').value = value;
// }

// // for second product
//     function increaseValueTwo() {
//   var value = parseInt(document.getElementById('number-two').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number-two').value = value;
// }

// function decreaseValueTwo() {
//   var value = parseInt(document.getElementById('number-two').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number-two').value = value;
// }

// // For third product
// function increaseValueThree() {
//   var value = parseInt(document.getElementById('number-three').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number-three').value = value;
// }

// function decreaseValueThree() {
//   var value = parseInt(document.getElementById('number-three').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number-three').value = value;
// }

var val = 0, purchase = 0, count_ap = 0, count_ban = 0, count_org = 0, total_purchase = 0;
function values() {
    val = document.querySelector("input").value;
}
function result() {
    document.querySelector("strong").innerHTML = total_purchase;
}
function increaseValue() {

    if (val >= 10) {
        count_ap += 1;
        purchase += 10;
        val = val - purchase;
        total_purchase = purchase + total_purchase;
        purchase = 0;
        document.querySelector("#number").value = count_ap;
        result();

    }
    else {
        alert("Not Enough Money to buy Apple")
    }
}
function increaseValueTwo() {

    if (val >= 15) {
        count_org += 1;
        purchase += 15;
        val = val - purchase;
        total_purchase = purchase + total_purchase;
        purchase = 0;
        document.querySelector("#number-two").value = count_org; console.log(val);
        result();

    }
    else {
        alert("Not Enough Money to buy Orange")
    }
}
function increaseValueThree() {
    if (val >= 7) {
        count_ban += 1;
        purchase += 7;
        val = val - purchase;
        total_purchase = purchase + total_purchase;
        purchase = 0;
        document.querySelector("#number-three").value = count_ban; console.log(val);
        result();

    }
    else {
        alert("Not Enough Money to buy Banana")
    }
}
function decreaseValue() {
    if (total_purchase > 0 && count_ap > 0) {
        count_ap -= 1;
        purchase += 10;
        val = val + purchase;
        total_purchase = total_purchase - purchase;
        purchase = 0;
        document.querySelector("#number").value = count_ap;
        result();
    }

}
function decreaseValueTwo() {
    if (total_purchase > 0 && count_org > 0) {
        count_org -= 1;
        purchase += 15;
        val = val + purchase;
        total_purchase = total_purchase - purchase;
        purchase = 0;
        document.querySelector("#number-two").value = count_org;
        result();
    }

}
function decreaseValueThree() {
    if (total_purchase > 0 && count_ban > 0) {
        count_ban -= 1;
        purchase += 7;
        val = val + purchase;
        total_purchase = total_purchase - purchase;
        purchase = 0;
        document.querySelector("#number-three").value = count_ban;
        result();
    }
}



