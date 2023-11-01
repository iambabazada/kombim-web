import '../Button/Button.css'

const Button = ({ children, bgColor = "transparent", textColor }) => {

  const btnStyle = {
    backgroundColor: bgColor,
    borderRadius: "5px",
    color: textColor,
    padding: "15px 20px",
    fontSize: "14px",
    border: "1px solid #fff",
    cursor: "pointer",
    transition: '.3s all'
  };

  return <button className="button" style={btnStyle}>{children}</button>;
};

export default Button;
