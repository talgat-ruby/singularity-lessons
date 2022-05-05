import Numbers from "../Numbers";
import Operations from "../Operations";

function Control({ numberClickHandler, operationClickHandler }) {
  return (
    <div className="Control">
      <Numbers clickHandler={numberClickHandler} />
      <Operations clickHandler={operationClickHandler} />
    </div>
  );
}

export default Control;
