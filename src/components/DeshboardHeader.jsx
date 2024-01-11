import Help from './Dashboard_Resources/Help.svg';
import Search from './Dashboard_Resources/search.svg';
import Menu from './Dashboard_Resources/Menu.svg';
import './DashboardHeader.css';
export default function DeshboardHeader() {
  return (
    <div className="dashboard_header">
      <div className="frame1">
        <div className="frame1_h5">Payouts</div>
        <div className="frame1_help">
          <img src={Help} alt="Help" />
          <span>How it works</span>
        </div>
      </div>

      {/* Search */}
      <div className="frame2">
        <img src={Search} alt="search"></img>
        <input type="text" placeholder="Search features, tutorials, etc." />
      </div>

      {/* Last Frame */}
      <div className="frame3">
        <div className="frame3_icon">
          <img src={Menu} height={32} alt='Menu'></img>
        </div>
        <div className="frame3_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_103686_4441)">
              <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
              <path
                d="M21.1109 25.5021C20.5156 26.1582 19.4844 26.1582 18.8891 25.5021L13.6151 19.689C12.7406 18.7251 13.4245 17.1811 14.726 17.1811L25.274 17.1811C26.5755 17.1811 27.2594 18.7251 26.3849 19.689L21.1109 25.5021Z"
                fill="#4D4D4D"
              />
            </g>
            <defs>
              <clipPath id="clip0_103686_4441">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
