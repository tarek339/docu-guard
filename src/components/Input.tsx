import { useState } from "react";
import colors from "../assets/theme/colors";

type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

const Input = (props: {
  value: string;
  onChange: InputChangeHandler;
  labelChildren: React.ReactNode;
}) => {
  const [onHover, setOnHover] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  const main = {
    height: "53px",
    width: "99.5%",
    outline: "none",
    marginBottom: "30px",
    borderRadius: "10px",
    border: `1px solid #d3d3d3cc`,
    transition: "0.1s",
    fontSize: "14px",
    fontWeight: 500,
    textIndent: "15px",
    color: colors.text.black,
    boxSizing: "border-box" as any,
    paddingTop: "19px",
  };
  const hover = {
    border: "1px solid lightgrey",
    outline: "none",
  };
  const focus = {
    border: "1px solid transparent",
    outline: `3px solid ${colors.button.contained}`,
  };
  return (
    <div style={{ position: "relative" }}>
      <label
        style={{
          color: onFocus ? colors.text.purple : colors.text.grey,
          fontSize: "14px",
          fontFamily: "Inter, sans-serif",
          position: "absolute",
          top: 10,
          left: 15,
        }}
      >
        {props.labelChildren}
      </label>
      <input
        style={
          onHover
            ? { ...main, ...hover }
            : onFocus
            ? { ...main, ...focus }
            : main
        }
        onMouseEnter={() => {
          onFocus ? setOnHover(false) : setOnHover(true);
        }}
        onMouseLeave={() => setOnHover(false)}
        onChangeCapture={() => setOnFocus(false)}
        onClick={() => {
          setOnHover(false);
          setOnFocus(true);
        }}
        onBlur={() => setOnFocus(false)}
        tabIndex={0}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
