import Block from "../container/Block";
import { IInput } from "../../../types/interfaces";
import { CustomTextField, errorStyle } from ".";

const Input = (props: IInput) => {
  return (
    <Block style={{ position: "relative" }}>
      <CustomTextField
        name={props.name}
        InputProps={{ disableUnderline: true }}
        label={props.label}
        variant="filled"
        fullWidth
        value={props.value}
        onChange={props.onChange}
        error={props.error}
        margin="normal"
      />
      <Block style={errorStyle}>{props.children}</Block>
    </Block>
  );
};

export default Input;
