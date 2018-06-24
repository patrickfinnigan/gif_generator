$(document).ready(()=>{


$("form").submit((event)=>{
    event.preventDefaul()
    console.log(event.target[0].value);
})



});