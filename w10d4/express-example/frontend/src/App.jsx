import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import axios from "axios";

const userList = [
  {
    id: 1,
    name: "Little Chicken",
    icon: "🐔",
    isAdmin: false,
  },
  {
    id: 2,
    name: "Pequeno Fuego",
    icon: "🔥",
    isAdmin: true,
  },
];

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => res.data)
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header>
        <h1>Super List of Users!</h1>
      </header>
      <main>
        <UserList users={users} />
      </main>
    </>
  );
}

export default App;

// User should look like:

// const user = {
//   id: 1,
//   name: "Little Chicken",
//   icon: "🐔",
//   isAdmin: false,
// };
