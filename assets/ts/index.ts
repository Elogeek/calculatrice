let result = document.getElementById("result");
const buttons = document.querySelectorAll('#calculator :not(#delete, #equal)');

for(let but of buttons) {
    //delete space
    but.addEventListener('click', function () {

        console.log("hello")
    })
}

