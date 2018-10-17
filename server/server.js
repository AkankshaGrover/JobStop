var firebase = require("firebase");


var config = {
    apiKey: "AIzaSyBhSkNA4Z6Pv_zWxpJfCpQ0_KotoaPA-rk",
    authDomain: "codeslayers-jobstop.firebaseapp.com",
    databaseURL: "https://codeslayers-jobstop.firebaseio.com/",
    storageBucket: "gs://codeslayers-jobstop.appspot.com",
};
firebase.initializeApp(config);
// var db = firebase.firestore();


var db = firebase.database();
var phoneNumber = "8197770091"
var email = "inderjotpujara@gmail.com"
var password = "kuchbhildaskjcx"
var name = "inderjot"
var areaofInterest = "computer science"
var study =[]
var qualification = []
var location = "bangalore"
var projects = []
var address = "aghvhsdcbjksdcbnkjn"
var long_term_goal = "kuch krenge"
var technical_skills = [];
pu();

function pu() {
    projects.push("abhi kuch nahi hai")
    technical_skills.push("putai")
    qualification.push({
        "cgpa": "9.0",
        "degree":"class 10th",
        "year of passing": "2011",
        "college":"Khalsa Academy"
    })
    projects.push("abhi bhi kuch nahi hai")
    technical_skills.push("kuch nahi aata")
    qualification.push({
        "cgpa": "7.3",
        "degree": "class 12th",
        "year of passing": "2015",
        "college": "Khalsa Academy"
    })
    console.log(qualification)

}
var signIn = firebase.auth().signInWithEmailAndPassword(email, password);
// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://codeslayers-jobstop.firebaseio.com"
// });


// sign-up method:-

// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;

//     console.log(errorCode +":->"+errorMessage)
//     // ...
// });



// sign-in method:-

// firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;

//     console.log(errorCode + ":->" + errorMessage)

// });


var promiseSignIn = new Promise(function (resolve, reject) {

    resolve(signIn);

});

promiseSignIn.then(function (result) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("User is signed in with email address :-> " + JSON.stringify(user.email))

            //Important method :- updating user's profile

            user.updateProfile({
                displayName: "inderjot pujara",
                photoURL: "https://example.com/jane-q-user/profile.jpg",
                // type: "applicant"
            })
            .then(function () {
                // console.log("successfully Updated")
                console.log("User data is as follows :->" + JSON.stringify(user))

                user.providerData.forEach(function (profile) {
                    // console.log("Sign-in provider: " + profile.providerId);
                    // console.log("  Provider-specific UID: " + profile.uid);
                    // console.log("  Name: " + profile.displayName);
                    // console.log("  Email: " + profile.email);
                    // console.log("  Type " + profile.type);

                    // console.log(profile);
                    // db.collection("userData").add({
                    //     name: profile.displayName
                    // }).then(function (docRef) {
                    //     console.log("Document written with ID: ", docRef.id);
                    // })

                    // db.collection("userData").doc(profile.displayName).set(docData).then(function () {
                    //     console.log("Document successfully written!");
                    // });


                    // firebase.database().ref('/candidate').push({
                    //     // candidate: "type",
                    //     email: "inderjot",
                    //     // type: "applicant"
                    //     // email: "test@mail.com"
                    // })

                   firebase.database().ref('/candidate').child(profile.displayName.replace(" ","")+phoneNumber)
                   .set({
                      name: profile.displayName,
                      email:profile.email,
                      contact:phoneNumber,
                      qualifications:qualification,
                      tech_skills:technical_skills,
                      areaofInterest:areaofInterest,
                      location:location,
                      projects:projects,
                      address:address,
                      long_term_goal:long_term_goal,
                      tech_skills:technical_skills
                   })
                });
            })
            .catch(function (error) {
                console.log( error);

            });


        } else {
            console.log("User is not signed in.")
        }
    });

})

var company_name = "MountBlue"
var company_email = "mountblue@gmail.com"
var company_contact = "HR 9876543210"
var jobs =[]
var companyInfo= "provides tech training"
addToCompany();
function addToCompany(){
    jobs.push({
        "Job Title": "full stack web",
        "postDesc":"sdghcags",
        "skills required":"JS, MEAN Stack",
        "package_offered": "6 lpa",
        "location": "bangalore"
    })
    jobs.push({
        "Job title": "Java developer",
        "postDesc": "Pandit",
        "package_offered": "4 lpa",
        "skills required": "Java Core/Advanced",
        "location": "delhi"
    })
}

firebase.database().ref('/company').child(company_name)
    .set({
        name:company_name,
        email: company_email,
        contact_details:company_contact,
        location: location,
        jobs: jobs
    })


//check for currently signed in user :-
// there are 2 methods for this but I have written here the one with observables..
// because it gets updated as the state changes.. example can be seen by running node server.js

// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         console.log("User is signed in with email address :-> " + JSON.stringify(user.email))
//     } else {
//         // No user is signed in.
//         console.log("User is not signed in.")
//     }
// });