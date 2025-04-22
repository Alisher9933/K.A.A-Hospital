import "./DoctorsTime.css";

const DoctorsTime = () => {
  return (
    <div className="container">
      <h3>Qabul jadvali</h3>
      <h1>Shifokorlar vaqt jadvali</h1>

      <div className="grid">
        <div className="cell header">Vaqt</div>
        <div className="cell header">Dushanba</div>
        <div className="cell header">Seshanba</div>
        <div className="cell header">Chorshanba</div>
        <div className="cell header">Payshanba</div>
        <div className="cell header">Juma</div>
        <div className="cell header">Shanba</div>
        <div className="cell header">Yakshanba</div>

       

        <div className="cell time">1:00</div>
        <div className="cell"></div><div className="cell"></div><div className="cell"></div>
        <div className="cell active"><div>1:00 - 4:30</div><div>Dr. Nadim Kamal</div></div>
        <div className="cell"></div><div className="cell"></div><div className="cell"></div>


        <div className="cell time">4:30</div>
        <div className="cell active"><div>4:30 - 8:00</div><div>Dr. Nadim Kamal</div></div>
        <div className="cell"></div><div className="cell"></div>
        <div className="cell active"><div>4:30 - 8:00</div><div>Dr. Zinia Zara</div></div>
        <div className="cell"></div><div className="cell"></div><div className="cell"></div>



        <div className="cell time">8:00</div>
        <div className="cell active"><div>8:00 - 11:00</div><div>Dr. Jason Roy</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>8:00 - 10:30</div><div>Dr. Mark Willy</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>8:00 - 10:30</div><div>Dr. Maria</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>8:00 - 11:30</div><div>Dr. Zinia Zara</div></div>


        <div className="cell time">10:00</div>
        <div className="cell"></div>
        <div className="cell active"><div>10:00 - 12:30</div><div>Dr. Tina Rahman</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>10:00 - 12:00</div><div>Dr. Mark Willy</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>10:00 - 12:30</div><div>Dr. Jason Roy</div></div>
        <div className="cell"></div>

        <div className="cell time">12:00</div>
        <div className="cell"></div>
        <div className="cell active"><div>12:00 - 14:30</div><div>Dr. Jason Roy</div></div>
        <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>

        <div className="cell time">14:00</div>
        <div className="cell active"><div>14:00 - 16:30</div><div>Dr. Zinia Zara</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>14:00 - 16:00</div><div>Dr. Zinia Zara</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>14:00 - 15:30</div><div>Dr. Zinia Zara</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>14:00 - 16:30</div><div>Dr. Nadim Kamal</div></div>

        <div className="cell time">16:00</div>
        <div className="cell"></div>
        <div className="cell active"><div>16:00 - 19:30</div><div>Dr. Steven Roy</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>16:00 -19:00</div><div>Dr. Mark Willy</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>16:00 - 19:30</div><div>Dr. Mark Willy</div></div>
        <div className="cell"></div>

        <div className="cell time">19:00</div>
        <div className="cell active"><div>19:30 - 22:00</div><div>Dr. Steven Roy</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>19:00 - 22:00</div><div>Dr. Rihana Roy</div></div>
        <div className="cell active"><div>19:00 - 22:30</div><div>Dr. Jason Roy</div></div>
        <div className="cell active"><div>19:30 - 22:00</div><div>Dr. Johora Roy</div></div>
        <div className="cell"></div><div className="cell"></div>

        <div className="cell time">22:30</div>
        <div className="cell"></div>
        <div className="cell active"><div>22:30 - 1:00</div><div>Dr. Tina Rahman</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell active"><div>22:00 - 1:30</div><div>Dr. Nadim Kamal</div></div>
        <div className="cell"></div>
        <div className="cell active"><div>22:00 - 1:00</div><div>Dr. Nadim Kamal</div></div>
      </div>
    </div>
  );
};

export default DoctorsTime;
