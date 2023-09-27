const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";
document.querySelector("body").appendChild(h2);

const input = document.getElementById('Pretty Please Click Me');

function clickAlert() {
    alert('This is pointless');
}

input.addEventListener('click', clickAlert);