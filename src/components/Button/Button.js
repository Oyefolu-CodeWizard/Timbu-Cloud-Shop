import "./Button.css";
import { useNavigate } from "react-router-dom";

function Button({ className, link = "/", children, text }) {
  const navigate = useNavigate();

  if (children.includes("Payment")) {
    return null;
  }
  switch (text) {
    case "Go to Checkout":
      link = "/checkout";
      break;
    case "Proceed to payment":
      link = "/payment";
      break;
    case "Complete order":
      link = "/successful";
      break;
    default:
      link = "/";
  }
  return (
    <button className={className} onClick={() => navigate(link)}>
      {children}
    </button>
  );
}

export default Button;
