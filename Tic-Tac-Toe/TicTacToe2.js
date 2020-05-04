var arr=[3,3,3,3,3,3,3,3,3];
function init(){
//    for(let i=0;i<boxValue.length;i++){
//        boxValue[i]=3;
//    }
   for(let i=0;i<9;i++){
    document.getElementById("wb"+i).src="whiteBackground.jpg";
   }
    playerOne();
}

init();

function playerOne(){
    let f=0,w=0;
    for(let i=0;i<9;i++){    
        
        document.getElementById("wb"+i).addEventListener("click",function(){     
          
           document.getElementById("wb"+i).src="crossImage.jpg";
            arr[i]=1;
            // if(checkWinner(1)){
            //     console.log("Player one is winner");
            //     w=1;
            // }
            f=1;
           
        });
        if(f===1)break;
    }
    if(w===0)playerTwo();
}


function playerTwo(){
    let f=0,w=0;
    for(let i=0;i<9;i++){
        
        
        document.getElementById("wb"+i).addEventListener("click",function(){     
           f=1;
            document.getElementById("wb"+i).src="zeroImage.jpg";
            arr[i]=2;   
            // if(checkWinner(2)){
            //     console.log("Player two is winner");
            //     w=1;
            //      }
            
        });
        if(f==1)break;
    }
    if(w===0)playerOne();
}

function  checkWinner(id){
    console.log(id);
    
    if(arr[0]===arr[1]===arr[2]===id)return true;
    if(arr[3]===arr[4]===arr[5]===id)return true;
    if(arr[6]===arr[7]===arr[8]===id)return true;
    if(arr[0]===arr[4]===arr[7]===id)return true;
    if(arr[1]===arr[5]===arr[8]===id)return true;
    if(arr[2]===arr[6]===arr[9]===id)return true;
    if(arr[0]===arr[5]===arr[9]===id)return true;
    if(arr[2]===arr[5]===arr[7]===id)return true;
return false;
}
//     playerTwo();