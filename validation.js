// function alertclicks(){
//     alert("djjdj");
//     console.log("ututu")
// }
// alertclicks();




const inputs = document.querySelectorAll('input');
const invalidli = document.querySelectorAll(".invalid");
const patterns = {
    name: /^[a-zA-Z]+$/,
    telephone: /^\d{11}$/,
    number: /^[0-9]{10}$/,
    email: /^[\w]+@[\w]+\.[a-z]{1,4}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
};
function validate(field, regex, place){
    
    if(regex.test(field.value)){
        place.className = "valid";
        } else {
        place.className = "invalid";
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
         validate(e.target, patterns[e.target.attributes.name.value], e.target.parentNode);
})
});
console.log(invalidli); 
// window.addEventListener('click', (e) => {
//     invalidli.forEach((invalidspan) => {invalidspan.className = "red"})
// })
