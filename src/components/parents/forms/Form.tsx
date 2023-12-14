import { IForm } from "../../../types/interfaces";

const Form = (props: IForm) => {
  return (
    <form style={props.style} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
