import './Navbar.css';
import wallet from './Navbar_Resources/wallet.svg'

import componyIcon from './Navbar_Resources/1.svg'
import downArrow from './Navbar_Resources/Chevron Down.png'
import a1 from './Navbar_Resources/2.svg';
import a2 from "./Navbar_Resources/3.svg";
import a3 from "./Navbar_Resources/4.svg";
import a4 from "./Navbar_Resources/12.svg";
import a5 from "./Navbar_Resources/5.svg";
import a6 from "./Navbar_Resources/6.svg";
import a7 from './Navbar_Resources/7.svg';
import a8 from "./Navbar_Resources/8.svg";
import a9 from "./Navbar_Resources/9.svg";
import a10 from "./Navbar_Resources/10.svg";
import a11 from "./Navbar_Resources/11.svg";

export default function Navbar() {
    return (
      <div className="navbar">
        <div className="Navtop">
          {/* Company Icon */}
          <img
            src={componyIcon}
            alt="Nishyan Logo"
            className="companylogo"
          ></img>
          <div style={{ height: "42px" }}>
            <p className="companyName_Navtop">Nishyan</p>
            <a href="" className="companyLink_Navtop">
              Visit store
            </a>
          </div>
          <img
            src={downArrow}
            alt="arrow"
            height={20}
            width={20}
            style={{ marginLeft: "30px" }}
          ></img>
        </div>
        <div className="Pages">
          <div className="Base_Nav_Button">
            <img src={a4} alt="home"></img>
            <span>Home</span>
          </div>
          <div className="Base_Nav_Button">
            {/* Svg */}
            <img src={a1} alt="home"></img>
            <span>Orders</span>
          </div>
          <div className="Base_Nav_Button">
            {/* Svg */}
            <img src={a2} alt="home"></img>
            <span>Products</span>
          </div>
          <div className="Base_Nav_Button">
            {/* Svg */}
            <img src={a3} alt="home"></img>
            <span>Delivery</span>
          </div>
          <div className="Base_Nav_Button">
            {/* Svg */}
            <img src={a5} alt="home"></img>
            <span>Marketing</span>
          </div>
          <div className="Base_Nav_Button">
            {/* Svg */}
            <img src={a6} alt="home"></img>
            <span>Analitics</span>
          </div>
          <div className="Base_Nav_Button Nav_Active">
            {/* Svg */}
            <img src={a7} alt="home"></img>
            <span>Payouts</span>
          </div>
          <div className="Base_Nav_Button">
            {/* Svg */}
            <img src={a8} alt="home"></img>
            <span>Discounts</span>
          </div>
          <div className="Base_Nav_Button">
            {/* Svg */}
            <img src={a9} alt="home"></img>
            <span>Audience</span>
          </div>
          <div className="Base_Nav_Button">
            {/* Svg */}
            <img src={a10} alt="home"></img>
            <span>Appearance</span>
          </div>
          <div className="Base_Nav_Button">
            {/* Svg */}
            <img src={a11} alt="home"></img>
            <span>Plugins</span>
          </div>
        </div>
        <div className="Base_Nav_Bottom_Main">
          {/* Svg */}
          <div className="Base_Nav_Bottom">
            <img src={wallet} alt="wallet"></img>
            <div>
              <div className="Base_Nav_Text1">Available credits</div>
              <div className="Base_Nav_Text2">222.10</div>
            </div>
          </div>
        </div>
      </div>
    );
}