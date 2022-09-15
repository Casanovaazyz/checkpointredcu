// var test = document.getElementsByClassName("exemple");
// var querytest = document.querySelector(".exemple")
// var testall = document.querySelectorAll(".exemple")

// console.log(test,"test");
// console.log(querytest,"querytest");
// console.log(testall,"testall");



// partie 
var binnertext = document.querySelector(".innertext");
var binnerhtml = document.querySelector(".innerhtml");

var kaabechi =`<p>goblinnnnnn</p> <img src="https://picsum.photos/200/300" alt="random image">`
var contant = document.querySelector(".content")

console.log(binnertext,"innertext")
console.log(binnerhtml,"innerhtml")
console.log(contant,"content")



binnertext.addEventListener('click',()=>{
    contant.innerText = kaabechi
})

binnerhtml.addEventListener('click',()=>{
    contant.innerHTML = kaabechi
})