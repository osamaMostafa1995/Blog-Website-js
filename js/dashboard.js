

// create cards with loop
for (let post of posts) {
  let col = document.createElement("div");
  col.className = "col-md-12";
  col.setAttribute("id", post.id);
  let card = document.createElement("div");
  card.className = "card ";
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  let title = document.createElement("h5");
  title.innerText = post.title;
  title.className = "card-title";
  let text = document.createElement("p");
  text.innerHTML = post.body.replace("<br>", " ");
  text.className = "card-text";
  let button1 = document.createElement("button");
  button1.innerText = "edit";
  button1.className = "card-link";
  var button2 = document.createElement("button");
  button2.innerText = "remove";
  button2.className = "card-link";
  cardBody.appendChild(title);
  cardBody.appendChild(text);
  cardBody.appendChild(button1);
  cardBody.appendChild(button2);
  card.appendChild(cardBody);
  col.appendChild(card);
  document.querySelector(".row").appendChild(col);

  //remove elements
  button2.addEventListener("click", () => {
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id == post.id) {
        posts.splice(i, 1);
        document.getElementById(post.id).style.display = "none";
        localStorage.setItem("posts", JSON.stringify(posts))
        console.log(posts);
      }
    }
  });
  button1.addEventListener("click", () => {
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id == post.id) {
        localStorage.setItem("posts", JSON.stringify(posts))
        location.href = './Edit.html?' + post.id;

      }
    }
  });
  //search for post
  function mySearch() {
    var input, filter, div, title, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

    div = document.querySelector(".row").getElementsByClassName("col-md-12");
    for (i = 0; i < div.length; i++) {
      title = div[i].getElementsByTagName("h5")[0];
      if (title) {
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          div[i].style.display = "";
        } else {
          div[i].style.display = "none";
        }
      }
    }
  }
}

