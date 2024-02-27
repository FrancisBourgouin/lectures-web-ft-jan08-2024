import { useState, useEffect } from "react";
import axios from "axios";

export default function useChat(initialMessages) {
  const [userId, setUserId] = useState(Math.ceil(Math.random() * 5));
  const [messages, setMessages] = useState(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const pollMessages = () => {
      const intervalId = setInterval(() => {
        const lastMessage = messages[messages.length - 1];
        const query = `/api/messages?start_at=${lastMessage.id + 1}`;

        axios.get(query).then((res) => setMessages([...messages, ...res.data]));
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
      .then((res) => setMessages(res.data))
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
        setMessages([...messages, res.data]);
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
