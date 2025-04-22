import './FivePage.css';
import Doctors from "../../../public/Icons/Doctors.png"
import Doctor3 from "../../../public/Icons/Doctor3.png"
import Hospital from "../../../public/Icons/Hospital.png"
import Happy from "../../../public/Icons/Happy.png"

const FivePage = () => {
    return (
        <div className="stats-modern">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number" >340</div>
                <h3 className="stat-title">Professional shifokorlar</h3>
              </div>
              <div className="stat-icon">
                <img src={Doctors} alt="Doctor" />
              </div>
              <div className="stat-decoration"></div>
            </div>
    
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number" >113</div>
                <h3 className="stat-title">Zamonaviy laboratoriyalar</h3>
              </div>
              <div className="stat-icon">
                <img src={Hospital} alt="Lab" />
              </div>
              <div className="stat-decoration"></div>
            </div>
    
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number">212</div>
                <h3 className="stat-title">Sertifikatlangan shifokorlar</h3>
              </div>
              <div className="stat-icon">
                <img src={Doctor3} alt="Certified" />
              </div>
              <div className="stat-decoration"></div>
            </div>
    
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number" >5670</div>
                <h3 className="stat-title">Baxtli bemorlar</h3>
              </div>
              <div className="stat-decoration"></div>
              <div className="stat-icon">
                <img src={Happy} alt="Patient" />
              </div>
            </div>
          </div>
        </div>
      );
    };

export default FivePage;