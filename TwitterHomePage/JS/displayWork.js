
let currentComment;
let cntPost = 0;

class Post{
    constructor(post,comment,like,id,commentCollections){
      this.post=post;
      this.comment=comment;
      this.like=like;
     this.id=id;
     this.commentCollections=commentCollections;
    }
}



//For Diplaying The post/Tweet
class UI{
static displayPost(){
const storePost=[];

const posts = Storage.getPosts();

cntPost = posts.length;

// console.log("cnt post "+cntPost);

// console.log(cntPost);

posts.forEach((post)=> UI.addPostToList(post));

}

//Print function
static addPostToList(post){
const list = document.querySelector('.post-list');
const row = document.createElement('div');
const L= document.createElement('div');


let tble =document.createElement('tr');
tble.classList="tableClass";


// let cnt=0, cntC=0;
tble.innerHTML=`
<td><button class="btnLike btn btnNew" type="button" onclick='UI.myFunLike(this,${post.id})'>${post.like}</button></td>
<td><button class="btnComment btn btnNew" type="button" onclick='UI.myFuncomment(this,${post.id})'>${post.comment} ${post.commentCollections.length}</button></td>
`;
L.className="line";
row.className= "displayBlock";
row.innerHTML=`${post.post}`;

list.append(row);
list.append(tble);
list.append(L);

}



static commentDisplayFromStorge(currentComment,idPost){
  let actualPost,pos;
  let comments;
  let post=Storage.getPosts();
  const list = document.querySelector('.comment-list');
  list.innerHTML="";
  for(let i=0;i<post.length;i++){
    if(post[i].id == idPost){
      // console.log(idPost); 
  actualPost=post[i].post;
  // tktk=post[i].id;

  //Show the original post top of the comment sections
  document.querySelector('.showPost').innerHTML=actualPost;
  comments=post[i].commentCollections;
  

  //For showing the store comments
  for(let j=0;j<comments.length;j++){
    const row = document.createElement('div');
    row.innerHTML=comments[j];
    row.className="diplsyComment";
    // document.querySelector(".diplsyComment").overflow-wrap = "break-word";
    list.append(row);
  }
  break;
    }
    
  }
}


///For Handling the comment section
static myFuncomment(id,idPost){
  currentComment=idPost;
// console.log("idpost   "  +idPost+"   "+id);
  
  //pop up window
  document.getElementById('modal-wrapper').style.display='block';

  
  UI.commentDisplayFromStorge(currentComment,idPost);
  // console.log(comments);
    
 //Handle new comments, store ,post.

 document.querySelector('.replyBtn').addEventListener('click',(e)=>{
    const value = document.querySelector('.commentReplyInput').value;
    if(value!=""){
     let list = document.querySelector('.comment-list');
       const row = document.createElement('div');
       row.className="displayComment";
      row.innerHTML=value;
      list.append(row); 
      // show comment'
      let post=Storage.getPosts();
      for(let i=0;i<post.length;i++){
        if(post[i].id==currentComment){
          // console.log("idpost "+idPost+ " current Comment "+currentComment);
          
          // console.log("pos " +post[i].id+"   idPost "+idPost+"  tktk"+tktk);
          // document.querySelector('.btnComment').innerHTML= `${post.comment} ${post.commentCollections.length}';          
          let postPos=post[i].commentCollections;
          postPos.push(value);
          let p = new Post(post[i].post,post[i].comment,post[i].like,post[i].id,postPos); 
          post.splice(i,1,p);
          localStorage.clear();
          post.forEach(el=>{
            Storage.addPost(el);
          });
      break;
        }
      }   
        
  
    }
///Clear fields
document.querySelector('.commentReplyInput').value="";
});
// document.querySelector('.commentReplyInput').value="";
}

//Handle Likes
static myFunLike(id,idPost){
  
  let temp=id.innerHTML;
  let res=temp.split(" ");
  console.log(res[1]);
  let res1=parseInt(res[1]);

res1++;
  
  console.log(temp);
  
 id.innerHTML=res[0]+" "+res1;
console.log("idpost" +idPost);

 let post=Storage.getPosts();
 for(let i=0;i<post.length;i++){
   if(post[i].id===idPost){
     let p= new Post(post[i].post,post[i].comment,'Like '+res1,post[i].id,post[i].commentCollections); 
     post.splice(i,1,p);
     localStorage.clear();
     post.forEach(el=>{
       Storage.addPost(el);
     });
    //  Storage.addPost(post);
     break;
   }
 }

}
}

// displayPost();
document.addEventListener('DOMContentLoaded',UI.displayPost);


//Handle tweet 
document.querySelector('.tweetBtn').addEventListener('click',(e)=>{
    const value = document.querySelector('.textArea').value;

    if(value!=""){
      let commentCollections=[];
      let post = new Post(value,"Comment","Like 0",cntPost++,commentCollections);
UI.addPostToList(post);    
Storage.addPost(post);
    }

///Clear fields
document.querySelector('.textArea').value="";
})


//Storage
class Storage{
    static getPosts() {
      let posts;
      if(localStorage.getItem('posts') === null) {
        posts = [];
      } else {
        posts = JSON.parse(localStorage.getItem('posts'));
      }
  
      return posts;
    }
  
    static addPost(post) {
      const posts = Storage.getPosts();
      posts.push(post);
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  
} 
  



