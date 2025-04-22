import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className='main-dashboard'>
        <br /><br /><br /><br /><br /><br />
    <div className="dashboard">
      <aside className="dashboard-admin">
        <h2>🏥 K.A.A Admin</h2>
        <ul>
          <li>🏠 Dashboard</li>
          <li>👨‍⚕️ Doctors</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Xush kelibsiz, Admin!</h1>
        </header>

        <section className="cards">
          <div className="card glass">
            <h3>Shifokorlar</h3>
            <p>20</p>
          </div>
          <div className="card glass">
            <h3>Bemorlar</h3>
            <p>80</p>
          </div>
          <div className="card glass">
            <h3>Uchrashuvlar</h3>
            <p>30</p>
          </div>
          <div className="card glass">
            <h3>Departments</h3>
            <p>12</p>
          </div>
        </section>

        <section className="summary glass">
          <h2>🗓️ Today’s Schedule</h2>
          <ul>
            <li><strong>10:00</strong> - Dr. Smith - Surgery</li>
            <li><strong>11:30</strong> - Dr. Jane - Checkups</li>
            <li><strong>14:00</strong> - Dr. Alex - Dental</li>
            <li><strong>15:45</strong> - Dr. John - Consultation</li>
          </ul>
        </section>
      </main>
    </div>
    </div>
  );
};

export default DashboardPage;
