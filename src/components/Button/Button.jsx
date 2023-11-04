import "../Button/Button.css";


const Button = ({
  children,
  bgColor = "transparent",
  textColor,
  borderColor = "#fff",
  textSize = "14px",
  icon,
  href
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
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  };

  return (
    <a href={href}>
      <button className="button" style={btnStyle}>
        {icon && <img src={icon} alt="" />} {children}
      </button>
    </a>
  );
};

export default Button;
