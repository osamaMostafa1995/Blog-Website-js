let url = window.location.href;
let id = url.substring(url.lastIndexOf('?') + 1);

let save = document.getElementById("save");



for (var i = 0; i < posts.length; i++) {
    if (posts[i].id == id) {
        document.getElementById("title").value = posts[i].title;
        document.getElementById("body").value = posts[i].body

        let x = i


        save.addEventListener("click", () => {
            posts[x].title = document.getElementById("title").value;
            posts[x].body = document.getElementById("body").value;
            localStorage.setItem("posts", JSON.stringify(posts))
        })
    }
}