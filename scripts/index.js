function addDefinition(element) {
    element.remove();
};

function log(button) {
    if (button.innerText === "Login"){
        button.innerText = "Logout";
    } else {
        button.innerText = "Login";
    }
};

var contador1 = 0;
var contador2 = 0;

function like(buttonNumber) {
    if (buttonNumber === 1) {
        contador1++;
        document.getElementById("likeCount-1").innerText = contador1;
    } else if (buttonNumber === 2) {
        contador2++;
        document.getElementById("likeCount-2").innerText = contador2;
    }

    const confirmation = confirm("Ninja was liked.");
}