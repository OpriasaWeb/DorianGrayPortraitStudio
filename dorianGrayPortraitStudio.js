// Instructions: The Dorian Gray Portrait Studio charges its customers based on the number of subjects who post for a portrait. The fee schedule is as follows:

/*
 Subjects in Portrait        Base Price
         1                       $100
         2                       $130
         3                       $150
         4                       $165
         5                       $175
         6                       $180
       7 or more                 $185
*/

// Portrait sittings on Saturday or Sunday cost 20 percent more than the base price.

// Design a flowchart or psuedocode for a program that accepts the following data: the last name of the family sitting for the portrait, the number of subjects in the portrait, and the scheduled day of the week. Display all the input data as well as the calculated sitting fee.

$('#submit').click(function(){
  var lastname = $('#lastname').val();
  
  var day = $('#day').val();
  // Make it a new date format in JS
  const inputDate = new Date(day);
  // Set an array of weeks
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // Get the day only using the getDay() built-in function
  const dayOfWeekIndex = inputDate.getDay();
  // New variable containing the day in weeks
  var dayOfWeek = daysOfWeek[dayOfWeekIndex];

  // console.log(subjects);
  var subjects = $('#subjects').val();
  
  var sittingFee = 0;
  switch(subjects){
    case "1":
      sittingFee = sittingFee + 100;
      break;
    case "2":
      sittingFee = sittingFee + 130;
      break;
    case "3":
      sittingFee = sittingFee + 150;
      break;
    case "4":
      sittingFee = sittingFee + 165;
      break;
    case "5":
      sittingFee = sittingFee + 175;
      break;
    case "6":
      sittingFee = sittingFee + 180;
      break;
    case "7":
      sittingFee = sittingFee + 185;
      break;
    default:
      sittingFee = sittingFee + 185;
      break;
  }


  
  $('#portrait').append(`<p>Welcome, ${lastname}</p>`);
  $('#portrait').append(`<p>Number of subject in the portrait is ${subjects}</p>`);

  var weekendsSittingFee = sittingFee * 0.2;

  if(dayOfWeek == "Saturday" || dayOfWeek == "Sunday"){
    $('#portrait').append(`<p>Total sitting fee is ${weekendsSittingFee}</p>`);
  } else{
    $('#portrait').append(`<p>Total sitting fee is ${sittingFee}</p>`);
  }

  
  
  
  
})
