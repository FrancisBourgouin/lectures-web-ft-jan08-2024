const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

const createBlogPostBad = (postData) => {
  const { id, title, body, userId } = postData;

  return `
    <article>
      <h1>Post #${id}: ${title}</h1>
      <p>${body}</p>
      <p>By: ${userId}</p>
    </article>
  `;
};

const createBlogPostGood = (postData) => {
  const { id, title, body, user } = postData;

  const $post = $("<article>");
  const $title = $("<h1>");
  const $body = $("<p>");
  const $author = $("<p>");

  $title.text(`Post #${id}: ${title}`);
  $body.text(body);
  $author.text(`By: ${user.name}`);

  $post.append($title);
  $post.append($body);
  $post.append($author);

  $post.on("click", (event) => {
    const color = generateColor();
    $(event.currentTarget).css("background", color);
  });

  return $post;
};

const renderBlogPosts = (postList) => {
  for (const post of postList) {
    const newPost = createBlogPostGood(post);
    // const newPost = createBlogPostBad(post);

    $("main").append(newPost);
  }
};
const renderBlogPostsV2 = (posts, users) => {
  for (const post of posts) {
    post.userId = Number(post.userId);

    post.user = users.find((user) => user.id === post.userId);
    const newPost = createBlogPostGood(post);
    // const newPost = createBlogPostBad(post);

    $("main").append(newPost);
  }
};

const fetchPostsFromAPI = () => {
  // $.ajax({
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   method: "GET",
  // });

  return $.get("https://jsonplaceholder.typicode.com/posts");
};

const fetchUsersFromAPI = () => {
  return $.get("https://jsonplaceholder.typicode.com/users");
};

const fetchAllDataFromAPI = () => {
  return Promise.all([fetchPostsFromAPI(), fetchUsersFromAPI()]);
};

const populateSelectField = () => {
  fetchUsersFromAPI()
    .then((users) => {
      for (const user of users) {
        const $option = $("<option>");

        $option.text(user.name);
        $option.attr("value", user.id);

        $("form select").append($option);
      }
    })
    .catch((err) => console.log(err));
};
