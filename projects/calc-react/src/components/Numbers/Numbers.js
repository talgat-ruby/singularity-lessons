function Numbers({ clickHandler }) {
  return (
    <div className="Numbers">
      <button data-number="1" onClick={clickHandler}>
        1
      </button>
      <button data-number="2" onClick={clickHandler}>
        2
      </button>
      <button data-number="3" onClick={clickHandler}>
        3
      </button>
      <button data-number="4" onClick={clickHandler}>
        4
      </button>
      <button data-number="5" onClick={clickHandler}>
        5
      </button>
      <button data-number="6" onClick={clickHandler}>
        6
      </button>
      <button data-number="7" onClick={clickHandler}>
        7
      </button>
      <button data-number="8" onClick={clickHandler}>
        8
      </button>
      <button data-number="9" onClick={clickHandler}>
        9
      </button>
      <button data-number="0" onClick={clickHandler}>
        0
      </button>
    </div>
  );
}

export default Numbers;
