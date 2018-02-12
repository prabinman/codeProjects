// // Get modal element
var modal = document.getElementById('chairmanModal');

// // Get open modal button
var modalBtn = document.getElementById('modalBtn');

// // Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// // Listen for open click
modalBtn.addEventListener('click', openModal);

// // Listen for close click
closeBtn.addEventListener('click', closeModal);

// // Listen for outside click
window.addEventListener('click', outsideClick);

// // Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// // Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// // Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// var btn = document.getElementsByClassName("modal");
// // console.log(btn);

// function newFunction() {
//     for (var i = 0; i < btn.length; i++) {
//         var thisBtn = btn[i];
//         thisBtn.addEventListener("click", function () {
//             var modal = document.getElementById(this.dataset.modal);
//             modal.style.display = "block";
//         }, false);
//     }
// }
