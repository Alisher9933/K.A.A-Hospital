import React, { useState } from 'react';
import './DoctorsPage.css';

const DoctorsPage = () => {
  const [showAll, setShowAll] = useState(false);
  const doctorsPerRow = 4;

  const doctors = [
    { 
      id: 1, 
      name: "Dr. Jason Roy", 
      specialty: "Stomatolog ",
      image: "/img/Doctor4.jpg" 
    },
    { 
      id: 2, 
      name: "Dr. Nadim Kamal", 
      specialty: "Oftalmolog ",
      image: "/img/Doctor5.jpg" 
    },
    { 
      id: 3, 
      name: "Dr. Zinia Zara", 
      specialty: "Kardiolog",
      image: "/img/Doctor6.jpg" 
    },
    { 
      id: 4, 
      name: "Dr.Anna Zara", 
      specialty: "Nevropatolog ",
      image: "/img/Doctor7.jpg" 
    },
    { 
      id: 5, 
      name: "Dr. Mark Willy", 
      specialty: "Pediatr ",
      image: "/img/Doctor8.jpg" 
    },
    { 
      id: 6, 
      name: "Dr. Tina Rahman", 
      specialty: "Associate Eye",
      image: "/img/Doctor9.jpg" 
    },
    { 
      id: 7, 
      name: "Dr. Steven Roy", 
      specialty: "Urolog ",
      image: "/img/Doctor4.jpg" 
    },
    { 
      id: 8, 
      name: "Dr. Maria", 
      specialty: "Ginekolog",
      image: "/img/Doctor5.jpg" 
    },
    { 
      id: 9, 
      name: "Dr. Johora Roy", 
      specialty: "LOR ",
      image: "/img/Doctor6.jpg" 
    },
    { 
      id: 10, 
      name: "Dr. Steven Roy", 
      specialty: "Dermatolog ",
      image: "/img/Doctor7.jpg" 
    },
    { 
      id: 11, 
      name: "Dr. Nadim Kamal", 
      specialty: "Travmatolog ",
      image: "/img/Doctor8.jpg" 
    },
    { 
      id: 12, 
      name: "Dr. Rihana Roy", 
      specialty: "Terapevt ",
      image: "/img/Doctor9.jpg" 
    }
  ];

  const visibleDoctors = showAll ? doctors : doctors.slice(0, doctorsPerRow);

  return (
    <div className="doctors-container">
      <br /><br /><br /><br />
      <h2 className="doctors-title">Bizning Mutaxassislarimiz</h2>
      <p className="doctors-subtitle">Bizning Turli Xil Sog'liqni Saqlash Mutaxassislarimiz.</p>
      
      <div className="doctors-grid">
        {visibleDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-image-container">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="doctor-image1"
              />
            </div>
            <div className="doctor-info">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons-container">
        {!showAll && doctors.length > doctorsPerRow && (
          <button className="doctors-btn" onClick={() => setShowAll(true)}>
            See All Doctors
          </button>
        )}
        {showAll && (
          <button className="doctors-btn" onClick={() => setShowAll(false)}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;