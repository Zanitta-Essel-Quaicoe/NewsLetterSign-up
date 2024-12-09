const subscribeBtn = document.getElementById("subscribe-btn");
const email = document.getElementById("email");
const subscribeEmail = document.getElementById("subscribe-email");
const main = document.getElementById("main");
const successMain = document.getElementById("success-main");
const dismissBtn = document.getElementById("dismiss-btn");
const succesEmail =  document.getElementById('success-email')

let typedEmail = ''


function hideSubscriptionPage(){
     main.style.display = 'none'
}

function showSuccessPage(){
     successMain.style.display ='flex'
}
email.addEventListener('change',(event)=>{
    typedEmail = event.target.value 
})
subscribeBtn.addEventListener('click',()=>{
   
   if(email.value)
   {
    
    if (typedEmail.includes( "#"||"/"||')')) {
        document.getElementById('error').style.display= 'flex'
        email.style.border = '2px solid red'
    }

    else{
    succesEmail.innerText = typedEmail;
     showSuccessPage()
     hideSubscriptionPage()
    }

   }
   else{
    email.style.border = '2px solid red'
   }

})


dismissBtn.addEventListener("click", () => {});
