import { useContext } from "react";
import UserCtx from "../../UserContext";

const Comments = ({ children }) => {
  const [user, setUser] = useContext(UserCtx);
  return (
    <div>
      <h3>Comment</h3>
      <span>{user.firstName}</span>
      <span>{user.familyName}</span>

      <button
        onClick={() => setUser({ firstName: children, familyName: "Simpson" })}
      >
        {children}
      </button>
    </div>
  );
};

export default Comments;
