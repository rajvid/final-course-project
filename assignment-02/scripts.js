myArray = [40,20,70,60,10];

$(function () {
    // Set up some data and variables
        array1 = myArray.slice();
        input1 = $('.input-1'),
        submit1 = $('.submit-1'),
        resultSum = $('.sum-1');
    // Click event on the submit input
    submit1.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input1.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Add our new number to the data array
          array1.push(num);
          // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
          const sum = array1.reduce((acc, curr) => acc + curr);
          // Add our new total to the page
          resultSum.text(sum);
          // Reset the input value to nothing
          input1.val('');
        }
    });

    // Set up some data and variables
        array2 = myArray.slice();
        newArray2 = [];
        input2 = $('.input-2'),
        submit2 = $('.submit-2'),
        returnMyArray2 = $('.returnedArray-1');
    // Click event on the submit input
    submit2.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input2.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Use to get value and key of each element
          array2.forEach(function(value, key){
            newArray2.push(value+num);
          });
          // Replace Current Array with New Array to keep the values updated
          array2 = newArray2;
          returnMyArray2.text(newArray2);
          // Reset the input and new array value to nothing
          input2.val('');
          newArray2 = [];
        }
    });
    // Set up some data and variables
        newArray = [];
        input3 = $('.input-3'),
        submit3 = $('.submit-3'),
        returnMyArray3 = $('.returnedArray-2');
    // Click event on the submit input
    submit3.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input3.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Use filter to filter out array elements greater than entered number
          newArray = array2.filter(function(value){
            return value > num;
          });
          // Condition to see if there is any element satisfying the criteria.
          if (newArray.length == 0){
            returnMyArray3.text("No Element is greater than entered Number.");
          }
          else{
            returnMyArray3.text(newArray);
          }
          // Reset the input and new array value to nothing
          input3.val('');
          newArray = [];
        }
    });
    // Set up some data and variables
        newArray = [];
        input4 = $('.input-4'),
        submit4 = $('.submit-4'),
        returnMyArray4 = $('.returnedArray-3');
    // Click event on the submit input
    submit4.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input4.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Use to divide entire array with entered number
          let results = array2.map(function(value){
            return (value/num);
          });
          //filter out whole numbers from the array
          newArray = results.filter(function(value){
            return (value % 1 == 0);
          });
          //recalculate the original number by multiplying the divided number with entered number
          newArray = newArray.map(function(value){
            return value*num;
          });
          // Condition to see if there is any element satisfying the criteria.
          if (newArray.length == 0){
            returnMyArray4.text("No Element is greater than entered Number.");
          }
          else{
            returnMyArray4.text(newArray);
          }
          // Reset the input and new array value to nothing
          input4.val('');
          newArray = [];
        }
    });
});
