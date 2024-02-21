# Coffee Forum App

View a forum post, like or reply to it.

## Data

## User

```jsx
const user = {
  id: 1,
  profile_url: "",
  name: "",
  username: "",
  bio: "",
};
```

## Users

```jsx
const users = [user, user]; // [].find()

const users = { id: user, id: user };
```

## Question

authorId should be between 1 and 6
that likes should always be 0,
the post id and reply id should be unique

```jsx
const question = {
  authorId: "1",
  id: "1",
  title: "",
  question: "",
  likes: 0,
  replies: [
    {
      id: "1",
      authorId: "",
      content: "",
      likes: 0,
    },
  ],
};
```

## Seed

View in file!

## Structure

### HTML

### Components

### Component Data

## Helpers

```jsx
// Add a forum post reply

const addPostReply = (forumPost, content) => {
  const newReply = {
    id: forumPost.replies.length + 1,
    authorId: Math.round(Math.random() * 6),
    content,
    likes: 0,
  };

  const updatedForumPost = { ...forumPost };
  const updatedReplies = [...forumPost.replies, newReply];

  updatedForumPost.replies = updatedReplies;

  return updatedForumPost;
};
```
