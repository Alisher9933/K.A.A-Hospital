import QuestionsPage from "../../Components/QuestionPage/QuestionsPage";
import Map from "../../Components/Map/Map"
import "./Contact.css"

function ContactPage() {
  return (
    <div>
      <br /><br /><br /><br /><br /><br />
      <div className="map1">
      <Map/>
      </div>
      <div className="contact">

      <QuestionsPage />
      
      </div>
    </div>
  );
}

export default ContactPage;
