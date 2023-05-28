const users = [    { name: "John", age: 25, occupation: "gardener" },    
                   { name: "Lenny", age: 51, occupation: "programmer" },    
                   { name: "Andrew", age: 43, occupation: "teacher" },    
                   { name: "Peter", age: 81, occupation: "teacher" },    
                   { name: "Anna", age: 43, occupation: "teacher" },    
                   { name: "Albert", age: 76, occupation: "programmer" },    
                   { name: "Adam", age: 47, occupation: "teacher" },    
                   { name: "Robert", age: 72, occupation: "driver" },];



// When you window loads use window.onload
window.onload = (event) => {
    document.getElementById("header").innerText = "This is the new header";
  const clicked = (event) =>{
    const temp = event.target;
    console.log(event.target)
    if(event.target.checked){
        document.getElementById("header").innerText = "it is checked";
    }else{
        document.getElementById("header").innerText = "it is not checked";
    }
    console.log("This is clicked");
  }
}

function main(){


const root=document.getElementById("root");
// add h1 element
let h1 = document.createElement("h1");
//give text of freelancer 
h1.innerHTML =`_____________________`;
root.appendChild(h1)

const list = document.getElementById("list");

function showUsers(){
  list.innerHTML="";

if(document.getElementById("show-users").checked){
for (let i = 0; i < users.length;++i){
    let li = document.createElement("li");
    li.innerText = `${users[i].name},${users[i].age},${users[i].occupation}`;
    list.appendChild(li);
}
}
}
document.getElementById("show-users").addEventListener("click",showUsers);
}

main();
