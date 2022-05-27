import { useState } from "react";
import "./App.css";

import UserCtx from "./UserContext";

import Article from "./components/Article";
import Comments from "./components/Comments";

function App() {
  const userState = useState({
    firstName: "Homer",
    familyName: "Simpson",
  });

  return (
    <UserCtx.Provider value={userState}>
      <div className="App">
        <Article>
          <Comments>Marge</Comments>
          <Comments>Bart</Comments>
          <Comments>Maggy</Comments>
        </Article>
        <Article>
          <Comments>Homer</Comments>
          <Comments>Lizza</Comments>
        </Article>
        <button
          onClick={() =>
            userState[1]({ firstName: "Bart", familyName: "Simpson" })
          }
        >
          Next Generation
        </button>
      </div>
    </UserCtx.Provider>
  );
}

export default App;
