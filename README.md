# student scores application

In this exercise, you’ll develop an application that tracks student’s scores, tallies
the average of the entered scores, and sorts the entered students by last name.

1. Open the HTML and JavaScript files in this folder:
exercises_extra\ch09\scores\

2. In the JavaScript file, note that six functions are supplied. The $ function.
The start of a displayScores function. The start of an addScore function that
ends by clearing the add form and setting the focus on its first field. The start
of a clearScores function that ends by clearing the display area and setting
the focus on the first name field. The start of a sortScores function. And an
onload event handler that attaches the addScore, clearScores, and sortScores
functions to the click events of the appropriate buttons and sets the focus on
the first name field.

3. To start, code two global arrays, one to hold the score values and the other to
hold the strings that display the students’ names and scores.

4. In the displayScores function, add the code that calculates the average score of all
the scores in the first array, and stores it in the text box below the text area. Then,
add the code that gets the students’ names and scores in the second array and
displays it in the text area.

5. In the addScore function, use the push method to save the score in the first array
and to save the name and score string (as shown in the text box) in the second
array. Then, call the displayScores function to redisplay the updated data.

6. In the clearScores function, add code that clears both global arrays.

7. In the sortScores function, add code that sorts the students by last name and then
re-displays the score information.