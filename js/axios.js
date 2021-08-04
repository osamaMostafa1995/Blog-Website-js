axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    let posts = response.data
    console.log(posts);
    localStorage.setItem("posts", JSON.stringify(posts));
  })