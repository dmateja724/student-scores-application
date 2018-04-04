"use strict";
var $ = function (id) { 
    return document.getElementById(id); 
};

var scores = [];
var nameScores = [];
var i = 0;
var sum = 0;

var displayScores = function () {   
    
    // loop to display scores and add up the sum of all entries
    while (i < nameScores.length) {
        $("scores").value += nameScores[i] + "\n";
        sum += parseFloat(scores[i]);
        i++;
    }
    
    // calculates and displays average scores
    var average = sum / nameScores.length;
    $("average_score").value = average;
};


var addScore = function () {
    
    // sends a message if the scores value entered is invalid
    if (isNaN($("score").value) || $("score").value < 0) {
        alert("Please enter a valid number");
    }
    
    // sends a message if first/last name values entered are blank
    if ($("first_name").value == "" || $("last_name").value == "") {
        alert("Please enter a valid name ");
    }
    
    // validates and pushes data into the array
    // validates for a numeric value entry, if the number is positive, and if the first and last name entries are blank 
    if (!isNaN($("score").value) && $("score").value >= 0 && $("first_name").value != "" && $("last_name").value != "") {
        parseFloat(scores.push($("score").value));
        nameScores.push(($("last_name").value) + ", " + ($("first_name").value) + " : " + ($("score").value));
        displayScores();
    } 

    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("score").value = "";
    $("first_name").focus();
    
};

var clearScores = function () {   
    
    // clears the arrays of any data
    scores = [];
    nameScores = [];
    
    // remove the score data from the web page
    $("average_score").value = "";
    $("first_name").value = "";
    $("last_name").value = "";
    $("scores").value = "";
    $("score").value = "";
    
    // brings cursor back to first name entry text box
    $("first_name").focus();
};

var sortScores = function () { 
    
    // clears value of text box before showing the sorted array
    $("scores").value = "";
    
    // creates a variable that has the sorted array
    var sort = nameScores.sort();
    
    // loop to display newly sorted list
    for (i = 0; i < nameScores.length; i++) {
        $("scores").value += sort[i] + "\n";
    }
    
};

window.onload = function () {
    $("add_button").onclick = addScore;
    $("clear_button").onclick = clearScores;    
    $("sort_button").onclick = sortScores;    
    $("first_name").focus();
};