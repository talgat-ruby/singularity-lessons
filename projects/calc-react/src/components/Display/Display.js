function Display({ value, changeHandler }) {
  return (
    <div className="Display">
      <input value={value} readOnly />
    </div>
  );
}

export default Display;
