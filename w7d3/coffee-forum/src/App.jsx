import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import ReplyForm from "./components/ReplyForm";
import ReplyList from "./components/ReplyList";

// Import point should be the highest in the three that is relevant

import { forumPost as initialPostData } from "./data/postData";
import { usersObj } from "./data/userData";
import { addPostReply, addReplyLike } from "./helpers/postHelpers";

function App() {
  const [forumPost, setForumPost] = useState(initialPostData);

  const [users, setUsers] = useState(usersObj);

  const replies = forumPost.replies;
  const forumPostAuthor = users[forumPost.authorId];

  const addReply = (formData) => {
    const updatedForumPost = addPostReply(forumPost, formData.comment);

    setForumPost(updatedForumPost);
  };

  const addReplyLikeOfPost = (replyId) => {
    const updatedForumPost = addReplyLike(forumPost, replyId);

    setForumPost(updatedForumPost);
  };
  return (
    <>
      <Header />
      <main>
        <section>
          <header>
            <h1>{forumPost.question}</h1>
            <h2>
              <img src={forumPostAuthor.profile_url} alt="" />
              <span>By: {forumPostAuthor.name}</span>
            </h2>
          </header>
          <main>
            <ReplyList
              replies={replies}
              users={users}
              addReplyLikeOfPost={addReplyLikeOfPost}
            />
          </main>
          <footer>
            <ReplyForm onSubmit={addReply} />
          </footer>
        </section>
      </main>
    </>
  );
}

export default App;
