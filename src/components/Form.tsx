type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;

const Form = (props: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onSubmit: FormSubmitHandler;
}) => {
  return (
    <form style={props.style} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
