console.log(posts);
function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}
let home = paginate(posts, 20, 1);
console.log(paginate(posts, 20, 1));
for (let post of home) {


  let col = document.createElement("div");
  col.setAttribute("id", post.id);
  col.className = "col-md-12 blogs";
  let card = document.createElement("div");
  card.className = "card ";
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  let title = document.createElement("h4");
  title.innerText = post.title;
  title.className = "card-title";
  let subtitle = document.createElement("h6");
  subtitle.innerHTML = '<p>Last updated on July 21st, 2021 by <span>OSAMA MOSTAFA</span></p> ';
  subtitle.className = "card-subtitle";
  let text = document.createElement("p");

  text.innerHTML = post.body.replace("<br>", " ").substr(0, 150) + "  " + ".....";

  text.className = "card-text";

  cardBody.appendChild(title);
  cardBody.appendChild(subtitle);
  cardBody.appendChild(text);

  card.appendChild(cardBody);
  col.appendChild(card);


  title.addEventListener("click", () => {
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id == post.id) {
        localStorage.setItem("posts", JSON.stringify(posts));
        location.href = "./singlePost.html?" + post.id;
      }
    }
  });
  document.getElementById("pills-home").appendChild(col);
}

let profile = paginate(posts, 20, 2);
console.log(paginate(posts, 20, 2));
for (let post of profile) {


  let col = document.createElement("div");
  col.setAttribute("id", post.id);
  col.className = "col-md-12 blogs";
  let card = document.createElement("div");
  card.className = "card ";
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  let title = document.createElement("h4");
  title.innerText = post.title;
  title.className = "card-title";
  let subtitle = document.createElement("h6");
  subtitle.innerHTML = '<p>Last updated on July 21st, 2021 by <span>OSAMA MOSTAFA</span></p> ';
  subtitle.className = "card-subtitle";
  let text = document.createElement("p");

  text.innerHTML = post.body.replace("<br>", " ").substr(0, 150) + "  " + ".....";

  text.className = "card-text";

  cardBody.appendChild(title);
  cardBody.appendChild(subtitle);
  cardBody.appendChild(text);

  card.appendChild(cardBody);
  col.appendChild(card);


  title.addEventListener("click", () => {
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id == post.id) {
        localStorage.setItem("posts", JSON.stringify(posts));
        location.href = "./singlePost.html?" + post.id;
      }
    }
  });
  document.getElementById("pills-profile").appendChild(col);
}






let contact = paginate(posts, 20, 3);
console.log(paginate(posts, 20, 3));
for (let post of contact) {


  let col = document.createElement("div");
  col.setAttribute("id", post.id);
  col.className = "col-md-12 blogs";
  let card = document.createElement("div");
  card.className = "card ";
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  let title = document.createElement("h4");
  title.innerText = post.title;
  title.className = "card-title";
  let subtitle = document.createElement("h6");
  subtitle.innerHTML = '<p>Last updated on July 21st, 2021 by <span>OSAMA MOSTAFA</span></p> ';
  subtitle.className = "card-subtitle";
  let text = document.createElement("p");

  text.innerHTML = post.body.replace("<br>", " ").substr(0, 150) + "  " + ".....";

  text.className = "card-text";

  cardBody.appendChild(title);
  cardBody.appendChild(subtitle);
  cardBody.appendChild(text);

  card.appendChild(cardBody);
  col.appendChild(card);


  title.addEventListener("click", () => {
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id == post.id) {
        localStorage.setItem("posts", JSON.stringify(posts));
        location.href = "./singlePost.html?" + post.id;
      }
    }
  });
  document.getElementById("pills-contact").appendChild(col);
}



















