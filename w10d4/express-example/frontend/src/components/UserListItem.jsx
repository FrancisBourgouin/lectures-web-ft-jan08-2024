export default function UserListItem(props) {
  const { id, name, icon, isAdmin } = props;
  return (
    <div>
      <h1>
        {icon} - {name}
      </h1>
      {isAdmin && <button>Demote to user</button>}
      {!isAdmin && <button>Promote to admin</button>}
    </div>
  );
}
