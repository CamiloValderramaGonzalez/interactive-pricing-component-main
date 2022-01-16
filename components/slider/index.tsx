export default function Slider(props: any) {
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: number = parseInt(e.target.value);
    props.onChange(value);
  };
  return (
    <input
      type="range"
      name="range"
      className="slider"
      id="range"
      aria-label="input"
      onChange={HandleChange}
      style={{ background: props.style }}
      />
  );
}
