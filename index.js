var user_input = prompt("Enter your desire one : \n\n Table  \n Forward Counting \n Backward Counting \n Even Counting \n Odd Counting")

//---------- Tables ----------------------------

if (user_input === "Table") {


    var tableOf = +prompt("Enter table number what you want")
    var startNumber = +prompt("Enter a start number.");
    var endNumber = +prompt("Enter an end number.");


    document.write('<div style="text-align: center;">');
    document.write('<h2>Table  of ' +  tableOf + "  from " + startNumber + ' to ' + endNumber + '</h2>');

    for (var i = startNumber; i <= endNumber; i++) {
        document.write(tableOf + "  X  " + i + " = " + (tableOf * i) + "</br>")
    }

    document.write('</div>');
}


//------------- Forwards Counting ----------------

else if (user_input === "Forward Counting") {

    var startNumber = +prompt("Enter a start number.")
    var endNumber = +prompt("Enter an end number.")

    document.write('<div style="text-align: center;">');
    document.write('<h2>Forward Counting from ' + startNumber + ' to ' + endNumber + '</h2>');

    for (var i = startNumber; i <= endNumber; i += 10) {
        for (var j = i; j < i + 10; j++) {
            document.write("  " + j + "  ")

        }

    }

    document.write('</div>');
}


//------------- Backward Counting ----------------

else if (user_input === "Backward Counting") {

    var startNumber = +prompt("Enter a start number.");
    var endNumber = +prompt("Enter an end number.");

    document.write('<div style="text-align: center;">');
    document.write('<h2>Backward Counting from ' + startNumber + ' to ' + endNumber + '</h2>');

    for (var i = startNumber; i >= endNumber; i -= 10) {

        for (var j = i; j > i - 10; j--) {
            document.write(" " + j + " ");
        }

    }

    document.write('</div>');
}

//-------------------------- Even Counting -------

else if(user_input === "Even Counting"){

    var startNumber = +prompt("Enter a start number.");
    var endNumber = +prompt("Enter an end number.");

    document.write('<div style="text-align: center;">');
    document.write('<h2>Even Counting from ' + startNumber + ' to ' + endNumber + '</h2>');
 
    for(var i=startNumber; i<=endNumber;i++ ){
       
    if(i % 2 == 0){
        document.write(" " + i + " ");
  }

    }
    document.write('</div>');
}

//-------------------------- Odd Counting -------

else if(user_input === "Odd Counting"){

    var startNumber = +prompt("Enter a start number.");
    var endNumber = +prompt("Enter an end number.");

    document.write('<div style="text-align: center;">');
    document.write('<h2>Odd Counting from ' + startNumber + ' to ' + endNumber + '</h2>');
 
    for(var i=startNumber; i<=endNumber;i++ ){
       
    if(i % 2 !== 0){
        document.write(" " + i + " ");
  }

    }
    document.write('</div>');
}


//----------------------------------------------

else {
    document.write(`<h5 class="text-center"> OPPS! You put unvalid data.</h5>
        `)
}