import "./App.scss";
import Header from "./components/Header";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

import { messages as initialMessages } from "./data/messageData";
import useChat from "./hooks/useChat";

function App() {
  const { messages, userId, isLoading, getInitialData, sendMessage } = useChat([]);

  return (
    <>
      <Header />
      <button onClick={getInitialData}>Fetch Messages</button>
      <main>
        {isLoading && <div>LOADING...</div>}
        {!isLoading && <MessageList messages={messages} userId={userId} />}
        <MessageForm onSubmit={sendMessage} />
      </main>
    </>
  );
}

export default App;
