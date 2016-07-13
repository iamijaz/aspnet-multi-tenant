var calcAge = require('./calcAge.js');

var xx = document.getElementsByTagName('body');
debugger;

document.getElementsByTagName('body')[0].onload = function() {
    document.body.innerHTML = 'The answer is:' + calcAge.gatesAge();
};