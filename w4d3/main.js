const sendFormInfo = (event) => {
  event.preventDefault();
  $(".loader").css("display", "flex");
  const encodedFormData = $(event.currentTarget).serialize();

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: encodedFormData,
  })
    .then((post) => {
      fetchUsersFromAPI().then((users) => {
        post.userId = Number(post.userId);
        post.user = users.find((user) => user.id === post.userId);
        const newPost = createBlogPostGood(post);

        setTimeout(() => {
          $(".loader").css("display", "none");

          $("main").prepend(newPost);
        }, 1500);
      });
    })
    .then(() => {
      $("form > *").val("");
    })
    .catch((err) => console.log(err));
};

$(document).ready(() => {
  fetchAllDataFromAPI()
    .then(([posts, users]) => {
      renderBlogPostsV2(posts, users);
    })
    .catch(([postErr, userErr]) => {
      console.log("Something happened");
      console.log(postErr, userErr);
    });

  $("form").on("submit", sendFormInfo);
  populateSelectField();
});
