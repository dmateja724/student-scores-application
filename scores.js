"use strict";
var $ = function (id) { 
    return document.getElementById(id); 
};

var scores = [];
var nameScores = [];

var displayScores = function () {   
    
};



var addScore = function () {
    
    if (!isNaN($("score").value )) {
        scores.push($("score").value);
        nameScores.push(($("first_name").value) + ", " + ($("last_name").value) + " : " + ($("score").value));
    }
    
    alert(nameScores);
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("score").value = "";
    $("first_name").focus();
    
};

var clearScores = function () {   
    
    scores = [];
    nameScores = [];
    
    // remove the score data from the web page
    $("average_score").value = "";
    $("first_name").value = "";
    $("last_name").value = "";
    $("scores").value = "";
    $("score").value = "";
    $("first_name").focus();
};

var sortScores = function () {   
     
};

window.onload = function () {
    $("add_button").onclick = addScore;
    $("clear_button").onclick = clearScores;    
    $("sort_button").onclick = sortScores;    
    $("first_name").focus();
};