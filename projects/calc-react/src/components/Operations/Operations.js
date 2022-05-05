function Operations({ clickHandler }) {
  return (
    <div className="Operations">
      <button data-operation="+" onClick={clickHandler}>
        +
      </button>
      <button data-operation="-" onClick={clickHandler}>
        -
      </button>
      <button data-operation="/" onClick={clickHandler}>
        /
      </button>
      <button data-operation="*" onClick={clickHandler}>
        *
      </button>
      <button data-operation="=" onClick={clickHandler}>
        =
      </button>
    </div>
  );
}

export default Operations;
