interface IColors {
  background: {
    white: string;
    black: string;
  };
  text: {
    grey: string;
    black: string;
    white: string;
    purple: string;
  };
  button: {
    contained: string;
    text: string;
  };
}
const colors: IColors = {
  background: {
    white: "#FFF",
    black: "000",
  },
  text: {
    grey: "#6C737F",
    black: "#111927",
    white: "#FFF",
    purple: "rgb(99, 102, 241)",
  },
  button: {
    contained: "rgb(99, 102, 241)",
    text: "#FFF",
  },
};

export default colors;
