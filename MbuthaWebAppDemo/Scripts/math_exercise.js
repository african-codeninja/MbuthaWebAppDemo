﻿$('.carousel').carousel({
    interval: 2000
})  


//Start of Math Exercises javacsript

$("#code5").hide();

$("#showToggleMath").click(function () {
    $("#code5").toggle();

    if ($("#showToggleMath").text() == "Show Code")
    {
        $("#showToggleMath").text("Hide Code");
    }
    else {
        $("#showToggleMath").text("Show Code");
    }
});

            $("#btn1").click(function () {
            //Step 1: get the user data
            var num1 = Number($("#mathNum1").val());
            //getting the value from user input from an input element
                var num2 = Number($("#mathNum2").val());//
                var num3 = Number($("#mathNum3").val());
                var num4 = Number($("#mathNum4").val());
                var num5 = Number($("#mathNum5").val());

            //Step 2: Do something with the data in this case add and multiply
            //perform some operation
            //var sum = num1 + num2 + num3 + num4 + num5;
            //var product = num1 * num2 * num3 * num4 * num5;
            //var average = sum / 5;

            $("#least").text("The smallest number is: " + Math.min(num1, num2, num3, num4, num5));
            $("#greatest").text("The largest number is: " + Math.max(num1, num2, num3, num4, num5));
            $("#sum").text("The sum of the numbers is: " + (num1 + num2 + num3 + num4 + num5));
            $("#product").text("The product of numbers is: " + (num1 * num2 * num3 * num4 * num5));
            $("#mean").text("The average of numbers is: " + (num1 + num2 + num3 + num4 + num5)/5);


            //Step 3 display the results
            //$("#greatest").text("The largest number is: " + largest);
            //$("#mean").text("The sum of the numbers is: " + sum);
            //$("#sum").text("The product of the numbers is: " + product);
            //$("#product").text("The average of the numbers is: " + average);
            })

            //step 4 button to clear the results
            $("#clearBtn").click(function () {
            $("#mathNum1,#mathNum2,#mathNum3,#mathNum4,#mathNum5").val("");
            
            $("#least, #greatest, #mean, #sum, #product",).text("");

            })
//End of math exercise code


//Beggining of Factoral javascript code
$("#code4").hide();

$("#showToggleFact").click(function () {
    $("#code4").toggle();

    if ($("#showToggleFact").text() == "Show Code") {
        $("#showToggleFact").text("Hide Code");
    }
    else {
        $("#showToggleFact").text("Show Code");
    }
});

        $("#btnFact").click(function () {
            //Step 1: Get User data
             var number = +$("#fact").val();


        //we are trying to make sure the user does not enter numbers greater than 170
        if (number > 170) {
            alert("Please enter positive numbers less than 171");
            $("#fact").val('');
            return;//return satement used to kick out the click anonymous function
        }

         else {
               //Step 2:Calculate the factorial
               for (var loop = number - 1; loop > 1; loop--) {
                //How do we calculate the factorial
                number *= loop;
            }

         }
        //Step: Show the result
        $("#factOut").text(number);
        })

        //Clear the text
        $("#btnClearFact").click(function () {

        $("#fact").val('');

        })
//End of Fizz buzz Javascript code

// Start of Fizz buzz code
$("#code3").hide();

$("#showToggleFiz").click(function ()
{
    $("#code3").toggle();

    if ($("#showToggleFiz").text() == "Show Code") {
        $("#showToggleFiz").text("Hide Code");
    }
    else {
        $("#showToggleFiz").text("Show Code");
    }
});

$("#btnFizzBuzz").click(function () {

    var num1 = +$("#fbInput1").val();
    var num2 = +$("#fbInput2").val();
    var output = " ";
    var space = " ";

    //var fizzbuzzbuzzEntry = "<span class='fizzbuzz'>Fii-Buzz</span>";

    for (var counter = 1; counter <= 100; counter++) {

        if (counter % num1 == 0 && counter % num2 == 0) {

            output += "<span class='fizzbuzz'>Fizz-Buzz" + space + "</span>";
        }

        else if (counter % num1 == 0) {

            output += "<span class='fizz'>Fizz" + space + "</span>";
        }

        else if (counter % num2 == 0) {

            output += "<span class='buzz'>Buzz" + space + "</span>";
        }
        else {
            output += "<span>" + counter + space + "</span>";
        }


    }

    output = output.substr(0, output.length - 2);

    $("#fizzBuzzOut").html(output);
    //clear text

    $("#btnClearBuzz").click(function () {

        $("#fizzBuzzOut").val('');

        $("#fbInput1").val('');

        $("#fbInput2").val('');

    })
})
//end of Fizz-Buzz Code coding exercise


//Start of Palindrome coding eaxercise
$("#code2").hide();

$("#showTogglePal").click(function ()
{
    $("#code2").toggle();

    if ($("#showTogglePal").text() == "Show Code") {
        $("#showTogglePal").text("Hide Code");
    }
    else {
        $("#showTogglePal").text("Show Code");
    }
});

//Palindrome Code
 $("#btnPal1").click(function () {
        //Step 1: Get the word
        var word = $("#palIn").val();

        var reverseWord = "";
        var nonSpaceWord = "";

        nonSpaceWord = word.replace(/\s+/g, "").toLowerCase();
        //nonSpaceRev = Reverse(nonSpaceWord).toLowerCase();
        //Step2: Reverse the word
        //Decrementing for loop in conjuction with the subtr command and the += operator to produce the reverse word
        //reverseWord = Reverse(word);

        for (var i = word.length - 1; i >= 0; i--) {
            reverseWord += nonSpaceWord.substr(i, 1);
            }
            var valMessage = "";

            if (nonSpaceWord === reverseWord) {
            valMessage = nonSpaceWord + " is the same as " + reverseWord + " therefore " + word + " is a palindrome"
            }
            else {
            valMessage = nonSpaceWord + " is not the same as " + reverseWord + " therefore " + word + " is not a palindrome"
            }
        //Show the reversed word

        $("#palOut").text(valMessage);

    })
//palindrome
$("#btnPal2").click(function () {
    var word2 = $("#palIn").val();

    var array = word2.split("");

    var revArray = array.reverse();

    var revWord = revArray.join("");

    var message = "";

    if (word2 == revWord) {

        message = word2 + " is the same as " + revWord + " therefore " + word2 + " is a palindrome"

    }
    else {
        message = word2 + " is not the same as " + revWord + " therefore " + word2 + " is not a palindrome"
    }
    //Show the reversed word

    $("#palOut2").text(message); l;

    
})

//clear text
$("#btnClearPal").click(function () {

    $("#palOut").val("");

})
//ending code palindrome

//--Beggining code for Sum of All fears


$("#code1").hide();

$("#showToggle").click(function ()
{   
    $("#code1").toggle();

    if ($("#showToggle").text() == "Show Code")
    {
        $("#showToggle").text("Hide Code");
    }
    else {
        $("#showToggle").text("Show Code");
    }
});


$("#soafRun").click(function () {

    var userKvalue = $("#kValue").val();
    var firstNumber;
    var secondNumber;

    var user = [
        +$("#soafNum1").val(),
        +$("#soafNum2").val(),
        +$("#soafNum3").val(),
        +$("#soafNum4").val(),
        +$("#soafNum5").val(),
        +$("#soafNum6").val()
    ];

    //Loop through the array and add the adjacent number and check for the answer

    for (var varArray = 0; varArray < user.length; varArray++) {
        //This inner loop cycles through the rest of the adjacent numbers trying to find a valid number
        for (var innerLoop = varArray + 1; innerLoop < user.length - 1; innerLoop++) {
            //this inner inner loop checks a condition that meets the value knm
            if (userKvalue == user[varArray] + user[innerLoop]) {
                firstNumber = user[varArray];
                secondNumber = user[innerLoop];

                break;//for loop control mechanism, comes out of the foreloop when the condition is met
            }
            else {
                $("#KValueAfter").html("<b>K value was not found</b>");
            }
        }
    }
    //output values to display

   
    valMessage = userKvalue + " was found by adding " + firstNumber + " and " + secondNumber + "."

    $("#soafAns").text(valMessage);  

    //clear text for new entries
});

$("#btnClearSof").click(function ()
{
    $("#soafNum1").val('');
    $("#soafNum2").val('');
    $("#soafNum3").val('');
    $("#soafNum4").val('');
    $("#soafNum5").val('');
    $("#soafNum6").val('');
});

 