$(document).ready(function() {
    function makeMadLib() {
        let noun = $("#noun").val()
        let adjective = $("#adjective").val()
        let person = $("#person").val()
        let sentence = "The " + noun + " shimmied up the " + adjective + " coil, slips and falls into the warm welcoming arms of " + person + ", how nice."
        console.log(sentence)
        $("#story").append(sentence)
    }
    $("button").click(function() {
        console.log("clicked")
		makeMadLib()
    });

});








// ) Add a script tag to the bottom of the page for your code.
// //     //jQuery tag
// //     //connect my custom js file
// <!--
// 1
// 2)In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that story to the empty div (like "Laura really likes pink cucumbers.")
//     //declare a function, call it makeMadLib
//     //inside the code block, create 3 variables for noun, adj, person
//     //set their values to whatever the user inputs
//         //select the input field and run the .val() method
//     //next inside the code block, select the empty div and find the method we will use to add the content to the div. You will use concatination.
//     //You can always start by getting the sentence to the console first, then figuring out a way to put it in the div
//3) Add an event listener to the button so that it calls a makeMadLib function when clicked.
//     //select the button
//     //add a click event
//     //inside the code block, call the makeMadLib function
// //  Bonus: Make an object with the list elements as keys and the inputs as values.  -->