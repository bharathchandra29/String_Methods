let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    document.getElementById("demo").innerHTML = "The length of the string is =  " + text.length;

    let text1 = "HELLO WORLD";
    document.getElementById("demo1").innerHTML = "The charAt() method returns the character at a given position in a string = " + text1.charAt(2) +
      "<br> The charCodeAt() method returns the unicode of the character at a given position in a string = " + text1.charCodeAt(1) +
      "<br> The at() method returns an indexed element from a string = " + text1.at(3) +
      "<br> The bracked notation [] returns an indexed element from a string = " + text1[3];

    let text2 = "Apple, Banana, Kiwi";
    let result = text2.slice(7, 13);
    document.getElementById("demo2").innerHTML = "The sliced (extracted) part of the string is = " + result + " <br> Extract a part of a string from position 7 = " + text2.slice(7) + " <br> Extract a part of a string counting from the end = " + text2.slice(-12) + " <br> Extract a part of a string and return the extracted parts in a new string = " + text2.slice(-12, -6);

    function myFunctionUpperCase() {
      let text = document.getElementById("demo3").innerHTML;
      document.getElementById("demo3").innerHTML =
        text.toUpperCase();
    }

    function myFunctionLowerCase() {
      let text = document.getElementById("demo4").innerHTML;
      document.getElementById("demo4").innerHTML =
        text.toLowerCase();
    }

    let text4 = "Hello";
    let text5 = "World!";
    let text6 = text4.concat(" ", text5);
    document.getElementById("demo5").innerHTML = text6;

    let text7 = "     Hello World!     ";
    let text8 = text1.trim();
    document.getElementById("demo6").innerHTML = "Length text1 = " + text7.length + "<br>Length text2 = " + text8.length;

    let text9 = "     Hello World!     ";
    let text10 = text9.trimStart();
    document.getElementById("demo7").innerHTML = "Length text1 = " + text9.length + "<br>Length text2 = " + text10.length;

    let text11 = "     Hello World!     ";
    let text12 = text11.trimEnd();
    document.getElementById("demo8").innerHTML = "Length text1 = " + text11.length + "<br>Length text2 = " + text12.length;

    let text13 = "5";
    text14 = text13.padStart(4,"0");
    document.getElementById("demo9").innerHTML = "It pads the string with another string (multiple times) until it reaches a given length.<br>"+ text14 +"<br>It pads the string with another string (multiple times) until it reaches a given length.<br>" + text13.padStart(4,"x");

    let text15 = "Hello world!";
    let result1 = text15.repeat(4);
    document.getElementById("demo10").innerHTML = result1;

    let text16 = "a,b,c,d,e,f";
    const myArray1 = text16.split(",");
    document.getElementById("demo11").innerHTML = "Split on commas (,) = " + myArray1[0];

    let text17 = "a b c d e f";
    const myArray2 = text17.split(" ");
    document.getElementById("demo12").innerHTML = 'Split on spaces (" ") = ' + myArray2[1];

    let text18 = "a|b|c|d|e|f";
    const myArray3 = text18.split("|");
    document.getElementById("demo13").innerHTML = "Split on pipe (|) = " + myArray3[2];

    let text19 = "Hello";
    const myArr = text19.split("");
    text19 = "";
    for (let i = 0; i < myArr.length; i++) {
      text19 += myArr[i] + "<br>"
    }
    document.getElementById("demo14").innerHTML = text19;