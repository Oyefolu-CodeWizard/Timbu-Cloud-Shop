import "./Footer.css";
import VisaBadge from "../../assets/VisaBadge.svg";
import MasterCardBadge from "../../assets/MasterCardBadge.svg";
import PayPalBadge from "../../assets/PayPalBadge.svg";
import ApplePayBadge from "../../assets/ApplePayBadge.svg";
import GooglePayBadge from "../../assets/GogglePayBadge.svg";

function Footer() {
  return (
    <footer>
      <p>SOUNDR © 2020-2024, All Rights Reserved</p>
      <div>
        <img src={VisaBadge} alt="VisaBadge" />
        <img src={MasterCardBadge} alt="MasterCardBadge" />
        <img src={PayPalBadge} alt="PayPalBadge" />
        <img src={ApplePayBadge} alt="ApplePayBadge" />
        <img src={GooglePayBadge} alt="GooglePayBadge" />
      </div>
    </footer>
  );
}

export default Footer;
