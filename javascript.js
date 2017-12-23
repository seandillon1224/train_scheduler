  var config = {
    apiKey: "AIzaSyCIA8ZOPA0B1fbhMngvapFnuxCGG6XCqoc",
    authDomain: "spdrutgers1213.firebaseapp.com",
    databaseURL: "https://spdrutgers1213.firebaseio.com",
    projectId: "spdrutgers1213",
    storageBucket: "spdrutgers1213.appspot.com",
    messagingSenderId: "8541838027"
  };
  firebase.initializeApp(config);


    // Create a variable to reference the database

    var database = firebase.database()

var trainName
var destination
var firstTrain
var frequency



$(".submittal").on("click", function(){
    event.preventDefault();

      // YOUR TASK!!!

      // Code in the logic for storing and retrieving the most recent user.
    
      trainName =$("#trainName").val().trim()
      destination =$("#destination").val().trim()
      //first train is meant to be in military time but having issues using moment.js to get the information
      firstTrain=$("#firstTrain").val()
      frequency= $("#frequency").val()


        database.ref().set({
          trainName: trainName,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency
        })
  
database.ref().on("child_added", function(childSnapshot) {

  var newStuff = childSnapshot
  console.log(newStuff)
  //coding in the logic to grab the "child_added" snapshot as the information is entered and created the table elements dynamically

      // console.log(newStuff);
      // console.log(newStuff.trainName);
      // console.log(newStuff.destination);
      // console.log(newStuff.firstTrain);
      // console.log(newStuff.frequency);

      // var tbltemplate = `<tr>
      //                    <td>newStuff.trainName</td>
      //                    <td>newStuff.destination</td>
      //                    <td>newStuff.firstTrain</td>
      //                    <td>newStuff.frequency</td>
      //                    </tr>`

      // $("#traintable").append(tbltemplate);

    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
    });

// ref.on("child_added", function(snapshot, pre gvChildKey) {
//   var newPost = snapshot.val();
//   console.log("Author: " + newPost.author);
//   console.log("Title: " + newPost.title);
