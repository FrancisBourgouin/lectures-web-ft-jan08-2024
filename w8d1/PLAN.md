# Slow Chat

A slow chat with messages! (Polling)

## Data

### User

```jsx
const user = {
  id: 1,
  profile_url: "",
  name: "",
  username: "",
  bio: "",
};
```

### Users

```jsx
const users = { 1: user, 2: user }; // Easier to target a single user

const users = [user, user];
```

### Message

```jsx
const message = {
  id: 1,
  type: "",
  content: "",
  datePosted: "",
  userId: 1,
};
```

### Messages

```jsx
const messages = [message, message]; // Show messages in order

const messages = { 1: message, 2: message };
```

## Mock Data

View files in data/ folder

## Structure

### Packages

- Axios (fetch)
- Sass

### HTML

### Components

### Component Data
