



    let boxValue=[3,3,3,3,3,3,3,3,3];

function init(){
   for(let i=0;i<boxValue.length;i++){
       boxValue[i]=3;
   }
   for(let i=0;i<9;i++){
    document.getElementById("wb"+i).src="whiteBackground.jpg";
   }
    playerOne();
}

// boxValue[2]=5;
// console.log(boxValue);
init();
// console.log(boxValue);

function checkWinner(id){

}

function playerOne(){
    console.log(boxValue);
    
    document.getElementById("wb0").addEventListener("click",function(){
       
        if(boxValue[0]!=3){
            playerOne();
        }
        else{
            console.log("player 2 te jabe?");
            
        document.getElementById("wb0").src="crossImage.jpg";
        boxValue[0]=1;
        playerTwo();
        }
    });
    document.getElementById("wb1").addEventListener("click",function(){
        if(boxValue[1]!=3){
            playerOne();
        }
        else{
            boxValue[1]=1;
        playerTwo();
        document.getElementById("wb1").src="crossImage.jpg";
        
    }
    });
    document.getElementById("wb2").addEventListener("click",function(){
        if(boxValue[2]!=3){
            playerOne();
        }
        else{
        document.getElementById("wb2").src="crossImage.jpg";
        boxValue[2]=1;
        playerTwo();    
    }
    });
    document.getElementById("wb3").addEventListener("click",function(){
        if(boxValue[3]!=3){
            playerOne();
        }
        else{
        document.getElementById("wb3").src="crossImage.jpg";
        boxValue[3]=1;
        playerTwo();    
    }
    });
    document.getElementById("wb4").addEventListener("click",function(){
        if(boxValue[4]!=3){
            playerOne();
        }
        else{
        document.getElementById("wb4").src="crossImage.jpg";
        boxValue[4]=1;
        playerTwo();    
    }
    });
    document.getElementById("wb5").addEventListener("click",function(){
        if(boxValue[5]!=3){
            playerOne();
        }
        else{
        document.getElementById("wb5").src="crossImage.jpg";
        boxValue[5]=1;
        playerTwo();    
    }
    });
    document.getElementById("wb6").addEventListener("click",function(){
        if(boxValue[6]!=3){
            playerOne();
        }

        else{
        document.getElementById("wb6").src="crossImage.jpg";
        boxValue[6]=1;
        playerTwo();    
    }
    });
    document.getElementById("wb7").addEventListener("click",function(){
        if(boxValue[7]!=3){
            playerOne();
        }
        else{
        document.getElementById("wb7").src="crossImage.jpg";
        boxValue[7]=1;
        playerTwo();    
    }
    });
    document.getElementById("wb8").addEventListener("click",function(){
        if(boxValue[8]!=3){
            playerOne();
        }

        else{
            boxValue[8]=1;
        playerTwo();
        document.getElementById("wb8").src="crossImage.jpg";
        }
    });
}

//     checkWinner(1);
//     playerTwo();



 function playerTwo(){
     console.log(boxValue);
     console.log("player 2 te asche?");
     
    document.getElementById("wb0").addEventListener("click",function(){
        // let el = document.getElementById("wb0");
        if(boxValue[0]!=3){
            playerTwo();
        }
        else{
            console.log("hi");
            
        document.getElementById("wb0").src="zeroImage.jpg";
        boxValue[0]=2;
        playerOne();
        }
    });
    document.getElementById("wb1").addEventListener("click",function(){
        if(boxValue[1]!=3){
            playerTwo();
        }
        else{
            boxValue[1]=2;
        playerOne();
        document.getElementById("wb1").src="zeroImage.jpg";
    }
    });
    document.getElementById("wb2").addEventListener("click",function(){
        if(boxValue[2]!=3){
            playerTwo();
        }
        else{
        document.getElementById("wb2").src="zeroImage.jpg";
        boxValue[2]=2;
        playerOne();    
    }
    });
    document.getElementById("wb3").addEventListener("click",function(){
        if(boxValue[3]!=3){
            playerTwo();
        }
        else{
        document.getElementById("wb3").src="zeroImage.jpg";
        boxValue[3]=2;
        playerOne();    
    }
    });
    document.getElementById("wb4").addEventListener("click",function(){
        if(boxValue[4]!=3){
            playerTwo();
        }
        else{
        document.getElementById("wb4").src="zeroImage.jpg";
        boxValue[4]=2;
        playerOne();    
    }
    });
    document.getElementById("wb5").addEventListener("click",function(){
        if(boxValue[5]!=3){
            playerTwo();
        }
        else{
        document.getElementById("wb5").src="zeroImage.jpg";
        boxValue[5]=2;
        playerOne();    
    }
    });
    document.getElementById("wb6").addEventListener("click",function(){
        if(boxValue[6]!=3){
            playerTwo();
        }

        else{
        document.getElementById("wb6").src="zeroImage.jpg";
        boxValue[6]=2;
        playerOne();    
    }
    });
    document.getElementById("wb7").addEventListener("click",function(){
        if(boxValue[7]!=3){
            playerTwo();
        }
        else{
        document.getElementById("wb7").src="zeroImage.jpg";
        boxValue[7]=2;
        playerOne();    
    }
    });
    document.getElementById("wb8").addEventListener("click",function(){
        if(boxValue[8]!=3){
            playerTwo();
        }

        else{
            boxValue[8]=2;
        playerOne();
        document.getElementById("wb8").src="zeroImage.jpg";
        }
    });
// checkWinner(2);
 }
 let playersTurnMessage = ()=>{
    let text;
    if(cnt%2===0){
        text=`Its player 1 turn`;
    }
    else{
        text=`Its player 2 turn`
    }
    document.getElementById("id2").innerHTML=text;

}
