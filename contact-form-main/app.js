
document.addEventListener("DOMContentLoaded", function(){
  
  let firstName = document.querySelector("#firstName")
  let lastName = document.querySelector("#lastName")
  let email = document.querySelector("#email");
  let message = document.querySelector("#message")
  const queryTypes = document.querySelectorAll('input[name="queryType"]');
    const submit = document.querySelector("#submit");
    const check = document.querySelector("#checkbox");

    
    const firstNameError = document.querySelector("#firstNameError");
    const lastNameError = document.querySelector("#lastNameError");
    const emailError = document.querySelector("#emailError");
    const queryError = document.querySelector("#queryError");
    const messageError = document.querySelector("#messageError");
    const tickError = document.querySelector("#tick")
    let toast = document.querySelector(".toast");
    
  firstName.addEventListener("focus", (e) => {
  e.target.style.border = "1px solid red"
  }) 

  check.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "green"
    }) 
  submit.addEventListener("click", function(){
    let hasError =  false;
    // Clear previous error messages
      firstNameError.textContent = "";
      lastNameError.textContent = "";
      emailError.textContent = "";
      queryError.textContent = "";
      messageError.textContent = "";
    
      if(firstName.value.trim() === ""){
        let para = "Enter firstname"
        hasError = true;
        firstNameError.textContent = para;
      }

      if(lastName.value.trim() === "" ){
        let para = "Enter last name"
        hasError = true;
        lastNameError.textContent = para;
      }


      function validateEmail(email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }

      if(email.value.trim() === ""){
        emailError.textContent = "Enter email"
        hasError = true;
      }
      else if(!validateEmail(email.value.trim())){
        email.textContent = "Enter a valid email"
        hasError = true;
      }

      //query Validation

      let queryTypeSelected = false;
      queryTypes.forEach(queryType => {
        if(queryType.checked){
          queryTypeSelected = true;
        }
      });
      if(!queryTypeSelected){
        queryError.textContent = "Select a query type"
        hasError = true;
      }


      if(message.value.trim() === ""){
        messageError.textContent = "Enter a message";
        hasError= true;
      }
       
      let  checkIn = false;
      if(check.checked){
          checkIn = true;
      }

      if(!checkIn){
        tickError.textContent ="To submit this form, please consent to be conatcted"
        hasError = true;
      }


      if(!hasError){
        showToast()
      }

      function showToast(){
        toast.className = "toast show"
        setTimeout(() => {
          toast.className = toast.className.replace("show", "")
        }, 3000);
      }


    firstName.value= "";
    lastName.value= "";
    email.value= "";
    message.value= "";
    queryTypes.forEach(queryType => {
      queryType.checked = false;
      });
      check.checked = false;

  })
})