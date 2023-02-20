import User from "./components/User";
import config from "./config";

function App() {
  const fetchUser = async () => {
    const response = await fetch(`${config.apiBaseUrl}/users`);
    const user = await response.json();
    console.log(user);
  };
  fetchUser();
  return <User userName="user1" email="user1@gmial.com" />;
}

export default App;
