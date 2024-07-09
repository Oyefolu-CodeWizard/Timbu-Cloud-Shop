import "./Button.css";
import { useNavigate } from "react-router-dom";

function Button({ className, link = "/", children, text }) {
  switch (text) {
    case "Go to Checkout":
      link = "/checkout";
      break;
    case "Proceed to Payment":
      link = "/";
      break;
    default:
      link = "/";
  }
  const navigate = useNavigate();
  return (
    <button className={className} onClick={() => navigate(link)}>
      {children}
    </button>
  );
}

export default Button;
