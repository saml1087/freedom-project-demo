// DOM
var assignmentText = document.querySelector("input[name='input-text']");
var enterBtn = document.querySelector("#enter-button");
var ul = document.querySelector("ul");

function addLi (){
    console.log(assignmentText.value);
    var assignmentLi = document.createElement("li");
    assignmentLi.innerHTML = assignmentText.value;
    ul.appendChild(assignmentLi);
    assignmentText.value = "";

}
enterBtn.addEventListener("click", addLi);
document.addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        addLi();
    }
});


// FIREBASE

// db.collection("users").add({
//     // Tbd (name)
// })
// .then((docRef) => {
//     //docRef.id = Document ID
// });

userDocument = db.collection("users").doc("Test"); // TEST DOCUMENT

    var assignmentLi = document.createElement("li");
    assignmentLi.innerHTML = userDocument.id; // USER DOCUMENT
    ul.appendChild(assignmentLi);
    assignmentText.value = "";
    var saveButton = document.querySelector("#save");

    saveButton.addEventListener("click", function(){
        var assignmentsArr = document.querySelectorAll("li");
        var userAssignments = [];
        assignmentsArr.forEach(function(li){
            userAssignments.push(li.innerHTML);
        });
        console.log(userAssignments);
        (userDocument).set({ // USER DOCUMENT
            name: "Saml1087",
            userID: userDocument.id, // USER DOCUMENT
            assignments: userAssignments
            // assignments: "text"
        }, {merge: true});
    });

document.addEventListener("click", function() {
    //code
});
// db.collection("users").get().then((querySnapshot) => {
// //     console.log(querySnapshot);
// });

