let users=[];
let state=['Bengaluru','Delhi','Mumbai','Pune','Bhopal']



function addState(){
    let randomState=state[(Math.floor(Math.random() * state.length))];
    return randomState;
}

    

function addUser(userInput){
    let checkUser=users.filter((user)=>{
        return user.email==userInput.email;
    })
    if(checkUser.length == 0){
        users.push(userInput)
    }
    else{    
        alert('user already exist')
    }
}




function displayUsers(){
   let usersContainer=document.getElementById('users');
   usersContainer.innerHTML=" "
   users.map((a)=>{
       let userDiv=document.createElement('div');
       userDiv.classList.add('user')
       let nameElement=document.createElement('p');
       nameElement.innerText=a.name;
       let emailElement=document.createElement('p');
       emailElement.innerText=a.email;
       let stateOutput=document.createElement('p');
       stateOutput.innerText=addState();

       
       

  
       usersContainer.appendChild(userDiv);
       userDiv.appendChild(nameElement);
       userDiv.appendChild(emailElement );
       userDiv.appendChild(stateOutput);


})
}

function add(){

    
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    // let rState = addState();
    let resultState = document.getElementById('state');


    let user = {
        name: name.value,
        email: email.value,
        state: resultState,
    }
    
    
    
    
    addUser(user); 
    displayUsers();
    
    console.log(users)
}
