import EssilorLogo from "./assets/essilor-logo.png";
import VariluxLogo from "./assets/varilux-logo.png";
import InstallIcon from "./assets/install-icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronCircleRight,
  faChevronRight,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="section">
      <header className="section__header">
        <div className="section__header__logos">
          <img src={EssilorLogo} alt="Essilor Logo" />
          <img src={VariluxLogo} alt="Varilux Logo" width="225" />
          <div className="section__header__options">
            <img src={InstallIcon} alt="Install Icon" />
            <span>{"|"}</span>
            <select>
              <option>EN</option>
              <option>CN</option>
              <option>FN</option>
            </select>
            {/* the EN span should be a dropdown box */}
          </div>
        </div>

        <div className="section__header__menu">
          <div className="section__header__menu__buttons">
            <button>Need Explorer</button>
            <button className="active-btn">Prescription</button>
            <button>Demonstration</button>
            <button>Conclusion</button>
          </div>
          <div className="section__header__menu__progress">
            <p className="">50%</p>
            <div className="progress-bar-container">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="section__form-section">
        <div className="section__form-section__container">
          <div className="flex item-1">
            <div className="helper">
              <p>Current progressive lenses *</p>
              <div className="line"></div>
            </div>
            <div className="input-container">
              <select>
                <option>Varilux&reg; Comfort</option>
              </select>
              <span className="arrow-down-container">
                <FontAwesomeIcon icon={faChevronDown} size={"2xs"} />
              </span>
            </div>
            <p className="required-msg">* required</p>
          </div>
          <div className="flex item-2">
            <div className="helper">
              <p>Sphere (SPH) *</p>
              <div className="line"></div>
              <div className="minus-plus">
                <span>
                  <FontAwesomeIcon icon={faMinus} size={"2xs"} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faPlus} size={"2xs"} />
                </span>
              </div>
            </div>
            <div className="two-input-container">
              <div className="input-one">
                <div className="input-container">
                  <div className="pink-box">
                    <h3>OD</h3>
                  </div>
                  <input type="text" value={"+4, 27"} />
                  <h3 className="letter-D">D</h3>
                </div>
                <p className="required-msg">* required</p>
              </div>

              <div className="input-two">
                <div className="input-container">
                  <div className="pink-box">
                    <h3>OS</h3>
                  </div>
                  <input type="text" value={"+1, 48"} />
                  <h3 className="letter-D">D</h3>
                </div>
                <p className="required-msg">* required</p>
              </div>
            </div>
          </div>
          <div className="flex item-3">
            <div className="helper">
              <p>Addition *</p>
              <div className="line"></div>
            </div>
            <div className="input-container">
              <input type="text" value={"+0, 29"} />
              <h3 className="letter-D">D</h3>
            </div>
            <p className="required-msg">* required</p>
          </div>
          <div className="flex item-4">
            <button>
              Skip
              <span>
                <FontAwesomeIcon
                  icon={faChevronRight} 
                  size={"xs"}
                  style={{
                    paddingLeft: "10px"
                  }}
                />
              </span>
            </button>
            <button>
              <p>Next</p>
              <p>
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  size={"lg"}  
                />
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
