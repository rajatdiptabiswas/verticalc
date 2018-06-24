$(document).ready(function () {
    "use strict";
    
    // show the sidebar
    $('#menu').click(function () {
        $('.sidebar').addClass('sidebar-show');
    });
    // hide the sidebar
    $('#hide').click(function () {
        $('.sidebar').removeClass('sidebar-show');
    });
    
    // change theme
    // red
    $('#theme-red').click(function () {
        $('#main').css({"background": "linear-gradient(to bottom right, red, yellow"});
        $('.op').css({"color": "orange"});
        $('.num-button').css({"color": "orange"});
    });
    // blue
    $('#theme-blue').click(function () {
        $('#main').css({"background": "linear-gradient(to bottom right, blue, cyan"});
        $('.op').css({"color": "dodgerblue"});
        $('.num-button').css({"color": "dodgerblue"});
    });
    // green
    $('#theme-green').click(function () {
        $('#main').css({"background": "linear-gradient(to bottom right, mediumseagreen, springgreen"});
        $('.op').css({"color": "limegreen"});
        $('.num-button').css({"color": "limegreen"});
    });
});

var dec = false;
var operator = false;
var ansFound = false;
var accuracy = 2;

function autoScroll() {
    document.getElementById("result").scrollLeft = document.getElementById("result").scrollWidth;
}

function changePrecision(val) {
    accuracy = val;
}

function insert(value) {
    if (ansFound) {
        c();
    }
    if (value == '.') {
        if (dec || document.getElementById("result").innerHTML== '') {
            return;
        } else {
            dec = true; 
            document.getElementById("result").innerHTML += value;
            autoScroll();
        }
    } else if (value == '+' || value == '-' || value == '*' || value == '/') {
        if (operator || document.getElementById("result").innerHTML== '') {
            return;
        } else {
            operator = true;
            document.getElementById("result").innerHTML += value;
            dec = false;
            autoScroll();
        }
    } else {
        document.getElementById("result").innerHTML += value;
        autoScroll();
    }
}

function c() {
    dec = false;
    operator = false;
    ansFound = false;
    document.getElementById("result").innerHTML = "";
}

function findAns() {
    var ans = 0;
    var str = document.getElementById("result").innerHTML + '';
    
    if (str) {
        ans = eval(document.getElementById("result").innerHTML + '');
    }
    
    document.getElementById("result").innerHTML = parseFloat(ans).toFixed(accuracy);
    autoScroll();
    
    ansFound = true;
}