# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

Depends
[thief, thief]
{1:thief, 2:thief}
{"email":thief}

Easier to find in an object / reference
Relatively easy to convert an object to an array

```js
const thievesArr = [thief, thief];
const thievesObj = { 1: thief, 2: thief };

Object.values(thievesObj);
```

## Seed

```jsx
const thief1 = {
  id:1,
  name:"Arsène Lupin",
  email:"gentleman@cambrioleur.com",
  password:"tophat"
  imagePath:"arsene.gif"
}

const thief2 = {
  id:2,
  name:"Doug Judy",
  email:"pontiac@bandit.com",
  password:"rosa",
  imagePath:"doug.webp"
}


const thieves = {
  "gentleman@cambrioleur.com":thief1,
  "pontiac@bandit.com":thief2
}
```

## Structure

### Helpers!

#### fetchUserByEmail

```js
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

const { user, error } = fetchUserByEmail("some@email.com");

if (error) {
  console.log(error);
}
```

#### authenticateUser

```js
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
```

#### createUser

```js
const userInfo = {
  name: "Doug Judy",
  imagePath: "doug.webp",
  password: "rosa",
  email: "pontiac@bandit.com",
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

  thieves[newUser.id] = newUser;

  return { user: newUser, error: undefined };
};

createUser(userInfo);
```

### HTML
