
let currentComment;
let cntPost = 0;
let flag = 0;
let type = 0;

class Post {
  constructor(post, comment, id, complete) {
    this.post = post;
    this.comment = comment;
    this.id = id;
    this.complete = complete;
  }
}

//For Diplaying The post
class UI {

  //Initial the field, clear previous data
  static initial() {
    const list = document.querySelector('.post-list');
    list.innerHTML = "";
  }

  //default display function
  static defaultDisplay() {
    const list = document.querySelector('.post-list');
    const defaultDiv = document.createElement('div');
    const defaultSpan = document.createElement('SPAN');
    defaultSpan.innerHTML = "No data found...";
    defaultDiv.className = "default";
    defaultSpan.className="noData";
    defaultDiv.append(defaultSpan);
    list.append(defaultDiv);
  }

  //Update the sum
  static totalSumUpdate(size) {
    console.log(size);
    
    let sum = document.querySelector('.total-sum').innerHTML;
    let numeric = sum.split(" ");
    console.log(numeric[1]);
    numeric[1] = size;
    document.querySelector('.total-sum').innerHTML = numeric[0] + " " + numeric[1];
  }

  static displayPost() {
    UI.initial();

    const storePost = [];

    const posts = Storage.getPosts();

    let M = -1;
    posts.forEach((e) => {
      M = Math.max(M, e.id);
    });
    cntPost = M + 1;

    if (posts.length === 0) {
      UI.defaultDisplay();
    }

    //sorting the posts
    posts.sort((a, b) => {
      var x = a.post.toLowerCase();
      var y = b.post.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });

    //calling t0 calculate total sum
let cnt=0;
posts.forEach((el)=>{
  if(el.complete==true)cnt++;
});


let nonComplete = posts.length-cnt;
let sizePost;
if(type==1){
  sizePost = cnt;
}
else if(type==2){
  sizePost = nonComplete;
}
else if(type==0){
  sizePost = posts.length;
}

    UI.totalSumUpdate(sizePost);

    for (let i = 0; i < posts.length; i++) {
      if (type == 1) {
        if (posts[i].complete == true) {

          UI.addPostToList(posts[i]);

        }
      }
      if (type == 2) {
        if (posts[i].complete == false) {

          UI.addPostToList(posts[i]);
        }
      }
      if (type == 0) {
        UI.addPostToList(posts[i]);
      }
    }

  }

  //Print function
  static addPostToList(post) {
    const list = document.querySelector('.post-list');
    const row = document.createElement('div');
    row.className = "displayBlock";
    const forTitle = document.createElement('SPAN');
    forTitle.className = "titleClassName";
    forTitle.innerHTML = `Title: ${post.post}`;
    if (post.complete == true) {
      forTitle.style.textDecoration = "line-through";
    }

    const forCheckBox = document.createElement('SPAN');
    forCheckBox.className = "checkBoxClass";
    if (post.complete == true) {
      forCheckBox.innerHTML = `<input type="checkbox" checked name="" id="" class="" onclick="myCheckBox.statusChange(${post.id})">`
    }
    else {
      forCheckBox.innerHTML = `<input type="checkbox"  name="" id="" class="" onclick="myCheckBox.statusChange(${post.id})">`
    }
    const forOther = document.createElement('SPAN');
    forOther.className = "otherClassName";



    forOther.innerHTML = `<td><label for="" class="editClass" onclick="editClass.editFun(${post.id})">Edit</label><span class="divideStick">|</span><label for="" class="deleteClass" onclick="deleteClass.deleteFun(${post.id})">Delete</label><br>`

    const forDescription = document.createElement('div');
    forDescription.className = "descriptionClass";
    forDescription.innerHTML = `<td style="float: left;">Description: ${post.comment}</td></tr>`;

    row.append(forTitle);
    row.append(forOther);
    row.append(forCheckBox);
    row.append(forDescription);

    list.append(row);

  }


  ///For Handling the new post section
  static myFuncomment(id, idPost) {
    currentComment = idPost;
    //pop up window
    document.getElementById('modal-wrapper').style.display = 'block';
    document.querySelector('.Create').addEventListener('click', (e) => {
      const titleValue = document.querySelector('.title-input').value;
      const descriptionValue = document.querySelector('.description-input').value;
      let p = Storage.getPosts();

      let f = 0;
      for (let i = 0; i < p.length; i++) {
        // console.log(id+" "+p.id);
        if (p[i].post == titleValue) {
          f = 1;
        }
      }
      if (titleValue != "" && flag == 0 && f == 0) {

        let post = new Post(titleValue, descriptionValue, cntPost++, false);
        // UI.addPostToList(post);    
        Storage.addPost(post);
        UI.displayPost();
        document.querySelector('.title-input').value = "";
        document.querySelector('.description-input').value = "";
      }

    });
  }

}

// displayPost();
document.addEventListener('DOMContentLoaded', UI.displayPost);


//Handle post 
document.querySelector('.add-new').addEventListener('click', UI.myFuncomment);



//Storage
class Storage {
  static getPosts() {
    let posts;
    if (localStorage.getItem('posts') === null) {
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

///Checkbox

class myCheckBox {
  static statusChange(id) {
    console.log(id);
    let p = Storage.getPosts();


    for (let i = 0; i < p.length; i++) {
      // console.log(id+" "+p.id);
      if (p[i].id == id) {
        console.log(p[i].id + "  " + id);
        if (p[i].complete == true) {
          p[i].complete = false;
        }
        else {
          p[i].complete = true;
        }


        let post = new Post(p[i].post, p[i].comment, p[i].id, p[i].complete);

        p.splice(i, 1, post);
        localStorage.clear();
        p.forEach(el => {
          Storage.addPost(el);
        });

        break;
      }
    }
    UI.displayPost();
  }
}

class deleteClass {
  static deleteFun(id) {
    console.log(id);
    let p = Storage.getPosts();


    for (let i = 0; i < p.length; i++) {
      if (p[i].id == id) {
        p.splice(i, 1);
        localStorage.clear();
        p.forEach(el => {
          Storage.addPost(el);
        });

        break;
      }
    }
    UI.displayPost();
  }
}

class editClass {
  static editFun(id) {
    flag = 1;
    currentComment = id;
    document.getElementById('modal-wrapper').style.display = 'block';
    document.querySelector('.create-update').innerHTML = "Update List";
    document.querySelector('.Create').innerHTML = "Update";

    let p = Storage.getPosts();
    for (let i = 0; i < p.length; i++) {
      if (p[i].id == id) {
        document.querySelector('.title-input').value = p[i].post;
        document.querySelector('.description-input').value = p[i].comment;
        break;
      }
    }

    document.querySelector('.Create').addEventListener('click', (e) => {
      const titleValue = document.querySelector('.title-input').value;
      const descriptionValue = document.querySelector('.description-input').value;

      if (titleValue != "") {

        for (let i = 0; i < p.length; i++) {
          if (currentComment == p[i].id) {
            let post = new Post(titleValue, descriptionValue, p[i].id++, p[i].complete);
            p.splice(i, 1, post);
            localStorage.clear();
            p.forEach(el => {
              Storage.addPost(el);
            });
            UI.displayPost();
            break;
          }
        }


      }



    });
  }
}
class addPost {
  static myFunAddNew() {
    document.getElementById('modal-wrapper').style.display = 'block';
    document.querySelector('.create-update').innerHTML = "Create ToDo";
    document.querySelector('.replyBtn').innerHTML = "Create";
    document.querySelector('.title-input').value = "";
    document.querySelector('.description-input').value = "";
    flag = 0;
  }
}


class radioBtn {

  static myFunDoneShow() {
    type = 1;
    UI.displayPost();

  }

  static myFunPendingShow() {
    type = 2;
    UI.displayPost();

  }

  static myFunAllShow() {
    type = 0;
    UI.displayPost();
  }
}
//search

document.querySelector('.search-button').addEventListener('click', (e) => {
  const searchValue = document.querySelector('.search-input').value;
  let p = Storage.getPosts();
  let cnt = 0;
  for (let i = 0; i < p.length; i++) {
    let str = p[i].post;
    console.log(str);
    let re = new RegExp(searchValue, "g")
    let res = str.match(re);
    if (res) {
      cnt++;
      if (cnt == 1) {
        UI.initial();
      }
      UI.addPostToList(p[i])

    }

  }
  document.querySelector('.search-input').value = "";

});