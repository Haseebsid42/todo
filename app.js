// // let inp=document.querySelector("input")

// // inp.addEventListener("keydown",function(e){
// //     console.log(e.code); 
// //     if(e.code=="ArrowUp" ){
// //         console.log("upar badho");
// //     }
// //     else if(e.code=="ArrowDown")
// //     {
// //         console.log("niche jao");
// //     }
// //     else if(e.code=="ArrowLeft")
// //     {
// //         console.log("Left jao");
// //     }
// //     else if(e.code=="ArrowRight"){
// //         console.log("Right Jao");
// //     }

// // })


// // let form=document.querySelector("form");

// // form.addEventListener("submit",function(e){
// //     e.preventDefault();
// //     // alert("submit hogaya bhai")

// //     // let user=document.querySelector("#user")
// //     // let pass=document.querySelector("#pass")
   
// //     // console.log(user.value);
// //     // console.log(pass.value);      
// // });

// // let user=document.querySelector("#user")
// // user.addEventListener("change",function(){
// //     console.log("input changed");
// //     console.log("final value =",user.value);
// // })

// //     console.log("input changed");
// //     console.log("final value =",user.value);
// // })


// let input=document.querySelector("#text");
// let p=document.querySelector("p")

// input.addEventListener("input",function(){
//     console.log(input.value);
//     p.innerText=input.value;
// })


////////////////////////////to do app using DOM ///////////
let inp=document.querySelector("input");
let btn=document.querySelector("button")
let ul=document.querySelector("ul")

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn)
    ul.appendChild(item); 
    inp.value="";
});

ul.addEventListener("click",function(e){
    if(e.target.nodeName=="BUTTON"){
        let listItem=e.target.parentElement;
        listItem.remove();
    }    
})



//   let delBtns=document.querySelectorAll(".delete");
//   for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement; 
//         par.remove();
//     })
//   }
  






 