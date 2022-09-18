let form = document.getElementById("form");
let fname = document.getElementById("fn");
let lname = document.getElementById("ln");
let email = document.getElementById("email");
let mobile = document.getElementById("number");
let gender =document.forms['form']["exampleRadios"].value;
let fnerror = document.getElementById("fn-error");
let lnerror = document.getElementById("ln-error");
let emailerror = document.getElementById("email-error");
let mobileerror = document.getElementById("mobile-error");
var alpha = /^[a-zA-Z\s]*$/;


const Tablefilled = () => {
    // Fetches the data from localStorage and parses it to be used in code
    if (localStorage.getItem('Details') !== null) {
        const details = JSON.parse(localStorage.Details);
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = '';
        console.log("I AM here")
        details.forEach(detail => {
            tableBody.innerHTML += `
        <td>${detail.FirstName} ${detail.LastName}</td>
        <td>${detail.Gender}</td>
        <td>${detail.Email}</td>
        <td>${detail.Mobile}</td>
        `
        })
    }
  }











form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
    let returnval = true;
    fnerror.innerHTML = "";
    lnerror.innerHTML = "";
    emailerror.innerHTML = "";
    mobileerror.innerHTML = ""
console.log(gender);

    if (fname.value === '') {
        returnval = false;
        fnerror.innerHTML = "Name is required"
    }
    if (!fname.value.match(alpha)) {
        fnerror.innerHTML = "*Only Alphabets"
        returnval = false;
    }
  

    if (lname.value === '') {
        returnval = false;
        lnerror.innerHTML = "Name is required"
    }
    if (!lname.value.match(alpha)) {
        lnerror.innerHTML = "*Only Alphabets"
        returnval = false;
    }


    if (email.value.length == 0) {
        emailerror.innerHTML = "**Email Required"
        returnval = false;
    }

    else if (email.value.indexOf('@') <= 0) {
        emailerror.innerHTML = "**Invalid @ Position"
        returnval = false;
    }
    if(mobile.value.length===0){
        mobileerror.innerHTML = "*Phone Number is required!"
        returnval = false;
    }
    else if (isNaN(mobile.value)) {
        mobileerror.innerHTML = "*Phone number should have only digits!"
        returnval = false;
    }
    else if (mobile.value.length > 0 && mobile.value.length < 10) {
        mobileerror.innerHTML = "*Phone number should be of 10 digits!"
        returnval = false;
    }

if(returnval){
    addData();
    Tablefilled();
}


}
let data=[];
let addData=()=>{
   let Data={
    FirstName: fname.value,
    LastName:lname.value,
    Email: email.value,
    Mobile: mobile.value,
    Gender:gender
   }
   data.push(Data);
    
   localStorage.setItem('Details', JSON.stringify(data));
   

   form.reset();
}