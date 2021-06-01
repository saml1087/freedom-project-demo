var db = firebase.firestore();

var userDoc = sessionStorage.getItem("document");
var userName = sessionStorage.getItem("name");

var content = document.querySelector("#content");

console.log("Username: " + userName);
console.log("DocumentID: " + userDoc);
// DOM
var assignmentText = document.querySelector("input[name='input-text']");
var enterBtn = document.querySelector("#enter-button");
var ul = document.querySelector("ul");
var displayID = document.querySelector("#id-display");

var userDocument = db.collection("users").doc(userDoc);
userDocument.get().then((doc) => {
    //js
    if (doc.data().assignments.length != 0){
        (doc.data().assignments).forEach(function(assignment){
            console.log("Assignment Added: " + assignment);
            // create li from saved document data
            var li = document.createElement("li");
            li.addEventListener("click", function(){
                li.remove();
            });
            li.innerHTML = assignment;
            ul.appendChild(li);
        });
    } else {
        console.log("No assignments");
    }
});

function addLi (){
    if (assignmentText.value != ""){
        console.log(assignmentText.value);
        var li = document.createElement("li");
        li.addEventListener("click", function(){
            li.remove();
        });
        li.innerHTML = assignmentText.value;
        ul.appendChild(li);
        assignmentText.value = "";

        content.style.height = "100%"
    } else {
        console.log("There's no items");
    }
}
enterBtn.addEventListener("click", addLi);
document.addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        addLi();
    }
});


    // var assignmentLi = document.createElement("li");
displayID.innerHTML = "DocumentID: " + userDocument.id; // USER DOCUMENT

    // ul.appendChild(assignmentLi);

// SAVE FEATURE
var saveButton = document.querySelector("#save");

console.log(userDocument);
saveButton.addEventListener("click", function(){
    var listItems = document.querySelectorAll("li");
    var userAssignments = [];
    listItems.forEach(function(li){
        userAssignments.push(li.innerHTML);
    });
    (userDocument).set({ // USER DOCUMENT
        assignments: userAssignments
    }, {merge: true});
    console.log(userAssignments);
});
