import MessageListItem from "./MessageListItem";

export default function MessageList(props) {
  const { messages, userId } = props;

  const parsedMessages =
    Array.isArray(messages) &&
    messages.map((message) => (
      <MessageListItem key={message.id} {...message} user={userId} />
    ));

  return (
    <ul className="MessageList">
      {/* <MessageListItem type="other" message="OTHER PPL MESSAGE" />
      <MessageListItem type="announcement" message="ANNOUNCEMENT MESSAGE" />
      <MessageListItem type="self" message="SELF MESSAGE" /> */}

      {parsedMessages}
    </ul>
  );
}
