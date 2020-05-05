//Inially Array Declare
let arr = [];
for(let i=0;i<9;i++){
    arr.push(3);
}
let cnt=0,flag=0;


//Initial Function
let init = ()=>{
    for(let i=0;i<9;i++){
        arr[i]=3;
    }
    for(let i=0;i<9;i++){
        document.getElementById("wb"+i).src="whiteBackground.jpg";
       }
    let element=document.getElementById("id1");
   element.innerHTML=``;
    element.style.color="";
    element.style.border="";
    
    cnt=0;
    flag=0;
}

//Determine which type of image will be used
let imageType = ()=>{
    let imgName;
    if(cnt%2===0){
        imgName="zeroImage.jpg";
    }
    else{
        imgName="crossImage.jpg";
    }
    cnt++;
    return imgName;
}

//Set the image
let setImage = (id) =>{
    let imgName=imageType();
    document.getElementById("wb"+id).src=imgName;
    arr[id]=cnt%2;
     if(checkWinner(cnt%2)){
         console.log("Winner "+id);
         winningFunction(cnt%2);
        flag=1;
     }
     if(arr.indexOf(3)===-1 && flag===0){
         drawFunction();
     }
     console.log(arr);
}


//Print the final message
let printItems = (text,element,id)=>{

    element.innerHTML=text;
    if(id)
    element.style.color="red";
    else{
        element.style.color="green";  
    }
    element.style.border="solid";
    element.style.fontSize="20px";
    element.style.width="15%";
    element.style.margin="auto";
    element.style.padding="10px";
}


//Winning function 
let winningFunction=(id)=>{
    for(let i=0;i<9;i++){
        arr[i]=2;
    }
    let player=(id===0)?2:1;
    let element=document.getElementById("id1");
    let text=`Winner is Player ${player}`;
    printItems(text,element,true);  
     
}


//Draw function
let drawFunction=()=>{
    let element=document.getElementById("id1");
    let text=`It's a Draw`;
    printItems(text,element,false);
   
}


//DOM method for every images
for(let i=0;i<9;i++){

    document.getElementById("wb"+i).addEventListener("click",function(){     

        if(arr[i]===3){   
            setImage(i); 
        }
     });
}

//Check winning condition
    let checkWinner=(id)=>{
        console.log(id);
        
        if(arr[0]===id && arr[1]===id && arr[2]===id)return true;
        if(arr[3]===id && arr[4]===id && arr[5]===id)return true;
        if(arr[6]===id && arr[7]===id && arr[8]===id)return true;
        if(arr[0]===id && arr[3]===id && arr[6]===id)return true;
        if(arr[1]===id && arr[4]===id && arr[7]===id)return true;
        if(arr[2]===id && arr[5]===id && arr[8]===id)return true;
        if(arr[0]===id && arr[4]===id && arr[8]===id)return true;
        if(arr[2]===id && arr[4]===id && arr[6]===id)return true;
    return false;
    }