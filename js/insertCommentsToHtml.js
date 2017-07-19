fetch('https://jsonplaceholder.typicode.com/comments')
  .then((resp) => resp.json())
  .then((comments) => {
    comments.forEach((comment) => {
      var li = document.createElement("li");
      li.textContent = comment.body;
      document.body.append(li);
    })
  })
