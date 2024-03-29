// js 
// user input elemnents

let userNameEl =document.querySelector(".input-text-first-name input")
let userLastNameEl =document.querySelector(".input-text-last-name input")
let emailEl =document.querySelector(".input-text-email input")
let passwordEl =document.querySelector(".input-text-password input")
let passwordCheckEl =document.querySelector(".password-check input")
// other html elements

let userData ={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    where:"login"
}
let condition ={
    passwordLength8 :false,
    passwordMatch :false,
    
}
//create event to go to signup where:"signup" logcheck()
function goesToSignupPage(){
    userData.where ="signup"
    logcheck()
    userNameEl =document.querySelector(".input-text-first-name input")
    userLastNameEl =document.querySelector(".input-text-last-name input")
    emailEl =document.querySelector(".input-text-email input")
    passwordEl =document.querySelector(".input-text-password input")
    passwordCheckEl =document.querySelector(".password-check input")
}
// event listener on submit  in signup page 
function signupSubmitButton(event){
    event.preventDefault()
    userData ={
        firstName:userNameEl.value,
        lastName:userLastNameEl.value,
        email:emailEl.value,
        password:passwordEl.value,
        where:""
    }
    
    // gives erorr if eny of the inputs are empty or incorrect
    if(userNameEl.value &&userLastNameEl.value && emailEl.value&&passwordEl.value&&passwordCheckEl.value&& condition.passwordLength8&&condition.passwordMatch  ){
        userData.where="dashboard"
        document.querySelector(".submit-error-on-top").textContent =""
        logcheck()
        
        
    }
    else{
        userData.where="signup"
        logcheck()
        document.querySelector(".submit-error-on-top").innerText ="please fill the inputs correctly"
    }
    saveUserData(userData)
    console.log(getUserData(userData.email))
    
    
}


// event listener that checks if the passwords match eachother

function passwordMatching(){
    if(passwordCheckEl.value ===passwordEl.value){
        condition.passwordMatch =true
        document.querySelector(".password-check p").textContent=""
        
    }
    else{
        condition.passwordMatch =false
        document.querySelector(".password-check p").textContent="password dosen't match"
        
    }

}

// checks if the password is 8  charecter or more 

function passwordLength(){
    if(passwordEl.value.length >=8 ){
        condition.passwordLength8=true
        document.querySelector(".input-text-password p").textContent=""
    }
    else{
        condition.passwordLength8=false
        document.querySelector(".input-text-password p").textContent="password should have length of 8 or more "
    }
}

function saveUserData(dataObject){
    localStorage.setItem(`${dataObject.email}`,JSON.stringify(dataObject))
}
function getUserData(userKey){
    return JSON.parse(localStorage.getItem(`${userKey}`))
}
function logcheck(){
    if(userData.where ==="dashboard"){
        document.body.innerHTML=`
        <h2 class="user">${userData.firstName} <img src="./images/icons/user-account.png" alt=""></h2>
        <button  class="logout"  onclick="logout()">logout</button>
        <script src="script.js"></script>`
    }else if (userData.where ==="signup"){
        document.body.innerHTML=`
    
        <div class="container">
        
        <div class="container-inner">
            <p class="account">don't Have an account? <a href="signup.html" class="link" onclick="">Sign up</a></p>
            
            <h1>Welcome to AOP</h1>
            <p>a wounder land to track your Business growth</p>

            <form action="">
                <p class="loginerror"></p>
                <div class="input-text-email input">
                    <input type="email" placeholder="email" class="loging-email">
                </div>
                <p id="" class="error-message hidden"></p>
                
                <div class="input-text-password input">
                    <input type="password" placeholder="Password" class="login-password">
                    <p class="password-error-message hidden"></p>
                </div>
                <p id="" class="error-message hidden"></p>

                <button onclick="loginButton(event)">Submit</button>
            </form>
            
        </div>

    </div>

    <script src="script.js"></script>





        `
    }else if (userData.where ==="login"){
        document.body.innerHTML = `
            
    <div class="container">
        
    <div class="container-inner">
        <p class="account">don't Have an account? <a href="signup.html" class="link" onclick="">Sign up</a></p>
        
        <h1>Welcome to AOP</h1>
        <p>a wounder land to track your Business growth</p>

        <form action="">
            <p class="loginerror"></p>
            <div class="input-text-email input">
                <input type="email" placeholder="email" class="loging-email">
            </div>
            <p id="" class="error-message hidden"></p>
            
            <div class="input-text-password input">
                <input type="password" placeholder="Password" class="login-password">
                <p class="password-error-message hidden"></p>
            </div>
            <p id="" class="error-message hidden"></p>

            <button onclick="loginButton(event)">Submit</button>
        </form>
        
    </div>

</div>

<script src="script.js"></script>
    
    
    
    `
    }
}
function logout(){
    userData.where ="login"
    logcheck()
}
 
function loginButton(event){
    event.preventDefault()
    
    
    if(getUserData(document.querySelector(".loging-email").value)) {
        if(getUserData(document.querySelector(".loging-email").value).password === document.querySelector(".login-password").value){
            userData.where="dashboard"
            
            document.body.innerHTML=`
            <h2 class="user">${getUserData(document.querySelector(".loging-email").value).firstName} <img src="./images/icons/user-account.png" alt=""></h2>
            <button  class="logout"  onclick="logout()">logout</button>
            <script src="script.js"></script>`
        }else{
            document.querySelector(".loginerror").textContent = "email or password is incorrect"
        }

    }
    else{
        document.querySelector(".loginerror").textContent = "first create and account! 😉"
    }
    
   
    
}
// localStorage.clear()







