export const addPostReply = (forumPost, content) => {
  const newReply = {
    id: forumPost.replies.length + 1,
    authorId: Math.ceil(Math.random() * 6),
    content,
    likes: 0,
  };

  const updatedForumPost = { ...forumPost };
  const updatedReplies = [...forumPost.replies, newReply];

  updatedForumPost.replies = updatedReplies;

  return updatedForumPost;
};

export const addReplyLike = (forumPost, replyId) => {
  const updatedForumPost = { ...forumPost };
  const updatedReplies = [...forumPost.replies];
  const replyIndex = updatedReplies.findIndex((reply) => reply.id === replyId);
  const updatedReply = { ...updatedReplies[replyIndex] };

  updatedReply.likes++;

  updatedForumPost.replies = updatedReplies;
  updatedReplies[replyIndex] = updatedReply;

  return updatedForumPost;
};
