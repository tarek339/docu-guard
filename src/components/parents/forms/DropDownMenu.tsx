import { Block } from "../container";
import { CustomTextField, errorStyle } from ".";
import { IDropDownMenu } from "../../../types/interfaces/components";

const DropDownMenu = (props: IDropDownMenu) => {
  return (
    <Block style={{ position: "relative" }}>
      <CustomTextField
        name={props.name}
        label={props.label}
        variant="filled"
        fullWidth
        value={props.value}
        onChange={props.onChange}
        error={props.error}
        InputProps={{ disableUnderline: true }}
        select
        margin="normal"
      >
        {props.menuItems}
      </CustomTextField>
      <Block style={errorStyle}>{props.children}</Block>
    </Block>
  );
};

export default DropDownMenu;
