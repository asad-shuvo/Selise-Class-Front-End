       let el=document.getElementById('pid5');
        el.addEventListener('click',function(){
            let val=document.getElementById('pid5').value;
            console.log(val);
            
        });
    // If user clicks anywhere outside of the modal, Modal will close
    
            document.getElementById('input11').addEventListener('click',function(){
                document.getElementById('p_4').style.color="#00acee";
            });
            document.getElementById('input12').addEventListener('click',function(){
                document.getElementById('p_5').style.color="#00acee";
            });
       
    var modal = document.getElementById('modal-wrapper');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
