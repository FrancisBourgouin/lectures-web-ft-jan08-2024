import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { replies, users, addReplyLikeOfPost } = props;

  const parsedReplies =
    Array.isArray(replies) &&
    replies.map((reply) => (
      <ReplyListItem
        key={reply.id}
        {...reply}
        user={users[reply.authorId]}
        addReplyLikeOfPost={() => addReplyLikeOfPost(reply.id)}
      />
    ));

  return (
    <section className="ReplyList">
      <h1>Replies:</h1>
      {parsedReplies}
    </section>
  );
}
