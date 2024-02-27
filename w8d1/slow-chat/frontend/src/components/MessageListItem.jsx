export default function MessageListItem(props) {
  const { content, type, user, userId } = props;

  let classNames = "MessageListItem";
  type === "message" && user === userId && (classNames += " self");
  type === "message" && user !== userId && (classNames += " other");
  type === "announcement" && (classNames += " announcement");

  return <li className={classNames}>{content}</li>;
}
