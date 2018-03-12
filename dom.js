var MInput = (function () {
    var inputOne = document.querySelector('.js-input-one');
    var inputTwo = document.querySelector('.js-input-two');
    return {
        One: inputOne,
        Two: inputTwo
    }
}());

var MBroadcast = (function () {
    var inputSubject = document.getElementById('input-subject');
    var btnSubject = document.getElementById('btn-subject');
    return {
        inputSubject: inputSubject,
        btnSubject: btnSubject
    }
}());

var MPrint = (function () {
    var observerArea = document.getElementById('observer-area');
    var _mycollection = arguments[0];
    function showCollection(_mycollection) {
        observerArea.innerHTML = Array.prototype.map.call(_mycollection, function (e) {
            if (e.name) {
                return "&#13;" + 'observerId: ' + e.observerId + " - " + e.name + ": " + e.message;
            } else {
                return "&#13;" + 'observerId: ' + e.observerId + " - " + e.message;
            }
        }).join(" ");
    }
    return {
        showCollection: showCollection
    }
}());