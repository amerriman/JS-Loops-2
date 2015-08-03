// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});


var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

//Problem 1
for (var i = 0; i < students.length - 1; i++){
  console.log(students[i]);
}

//Problem 2
for (var i = 0; i <= students.length; i+=2) {
  console.log(students[i]);
}

//Problem 3
for (var i=students.length-1; i>=0; i--) {
  console.log(students[i]);
}

//Problem 4
for(var i = 0; i < students.length; i++) {
  if(students[i] === 'joe' || students[i] === 'lily'){
    console.log(students[i]);
  }
    else{
      for(var j = 0; j < 2; j++) {
        console.log(students[i]);
    }
  }
}
