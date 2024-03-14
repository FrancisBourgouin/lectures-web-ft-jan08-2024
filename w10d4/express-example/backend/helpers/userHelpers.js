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

const getAllUsers = () => {
  return userList;
};

const getUserById = (userId) => {
  return userList.find((user) => user.id === userId);
};

module.exports = { getAllUsers, getUserById };
