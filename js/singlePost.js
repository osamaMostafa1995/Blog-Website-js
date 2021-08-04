let url = window.location.href;
let id = url.substring(url.lastIndexOf('?') + 1);

let save = document.getElementById("save");



for (var i = 0; i < posts.length; i++) {
  if (posts[i].id == id) {
    document.getElementById("title").innerHTML = posts[i].title;
    document.getElementById("body").innerHTML = posts[i].body.repeat(10);

  }
}