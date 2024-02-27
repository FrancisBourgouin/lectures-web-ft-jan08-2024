import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  currentUserId: Math.ceil(Math.random() * 5),
  messages: [],
};

const initializeMessages = (messages) => {
  return messages;
};

const appendMessages = (messages, newMessages) => {
  return [...messages, ...newMessages];
};

const appendSingleMessage = (message, newMessage) => {
  return [...messages, ...newMessages];
};

const chatReducerSwitch = (state, action) => {
  switch (action.type) {
    case "initialize":
      return { ...state, messages: initializeMessages(action.data.messages) };
    case "appendMultiple":
      return { ...state, messages: appendMessages(action.data.messages) };
    case "appendOne":
      return { ...state, messages: appendSingleMessage(action.data.message) };
    default:
      return state;
  }
};

const chatReducerObj = (state, action) => {
  const actions = {
    initialize: () => {
      const newMessages = initializeMessages(action.data.messages);
      return { ...state, messages: newMessages };
    },
    appendMultiple: () => {
      const updatedMessages = appendMessages(action.data.messages);
      return { ...state, messages: updatedMessages };
    },
    appendOne: () => {
      const updatedMessages = appendSingleMessage(action.data.message);
      return { ...state, messages: updatedMessages };
    },
  };

  return actions[action.type]();
};

export default function useChat(initialMessages) {
  const [state, dispatch] = useReducer(chatReducerObj, initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const pollMessages = () => {
      const intervalId = setInterval(() => {
        const lastMessage = messages[messages.length - 1];
        const query = `/api/messages?start_at=${lastMessage.id + 1}`;

        axios
          .get(query)
          .then((res) => dispatch("appendMultiple", { messages: res.data }))
          .catch((err) => console.log(err));
      }, 1000);

      return intervalId;
    };

    const intervalId = pollMessages();

    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/messages")
      .then((res) => dispatch("initialize", { messages: res.data }))
      .catch((err) => {
        console.log(err);
        setMessages([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const sendMessage = (formData) => {
    axios
      .post("/api/messages", { ...formData, userId })
      .then((res) => {
        dispatch("appendOne", { message: res.data });
      })
      .catch((err) => console.log(err));
  };

  const getInitialData = () => {
    axios.get("/api/messages").then((res) => setMessages(res.data));
  };

  return {
    messages,
    isLoading,
    userId,
    getInitialData,
    sendMessage,
  };
}
