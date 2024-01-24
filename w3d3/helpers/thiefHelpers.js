// HoF => Higher Order Function
// A function that takes in a function as a parameter
// A function that return a function definition
// Callbacks => Okay friend

const generateThiefHelpers = (thieves) => {
  const fetchUserByEmail = (email) => {
    const user = thieves[email];
    let output;

    if (user) {
      output = { user: user, error: undefined };
    } else {
      output = { user: undefined, error: "Email not found" };
    }

    return output;
  };

  const authenticateUser = (email, password) => {
    const { user, error } = fetchUserByEmail(email);

    if (error) {
      return { error: "Email is invalid", user: undefined };
    }

    if (user.password !== password) {
      return { error: "Password is invalid", user: undefined };
    }

    return { error: null, user };
  };

  const createUser = (userInfo) => {
    const newUser = { ...userInfo };
    newUser.id = Object.values(thieves).length + 1;

    if (!userInfo.name || !userInfo.imagePath || !userInfo.password || !userInfo.email) {
      return { error: "One of the fields was empty", user: undefined };
    }

    const { user, err } = fetchUserByEmail(userInfo.email);

    if (user) {
      return { error: "User already exists", user: undefined };
    }

    thieves[newUser.email] = newUser;

    return { user: newUser, error: undefined };
  };

  return { fetchUserByEmail, authenticateUser, createUser };
};

module.exports = generateThiefHelpers;
