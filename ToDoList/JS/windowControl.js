
//comment section
var modal = document.getElementById('modal-wrapper');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
document.querySelector('.Cancel').addEventListener('click',(e)=>{
	modal.style.display = "none";
});
