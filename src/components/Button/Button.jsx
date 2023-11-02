import "../Button/Button.css";

const Button = ({
  children,
  bgColor = "transparent",
  textColor,
  borderColor = "#fff",
  textSize = "14px"
}) => {
  const btnStyle = {
    backgroundColor: bgColor,
    borderRadius: "5px",
    color: textColor,
    padding: "15px 20px",
    fontSize: textSize,
    border: "1px solid #fff",
    cursor: "pointer",
    transition: ".3s all",
    borderColor: borderColor,
  };

  return (
    <button className="button" style={btnStyle}>
      {children}
    </button>
  );
};

export default Button;
