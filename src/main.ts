let show = document.getElementById("show") as HTMLButtonElement;
let cancel = document.getElementById("cancel") as HTMLButtonElement;

show.onclick = function() {
    console.log("Hell yeah!");
}

cancel.onclick = function() {
    console.log("Hell no!");
}