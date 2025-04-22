import { Link, Outlet } from "react-router-dom";
import "./SecondPage.css";
import Doctor2 from "/public/img/Doctor2.png";

const SecondPage = () => {
  return (
    <div className="hero">
      <div className="left">
        <img src={Doctor2} alt="Doctor" className="doctorImg" />
      </div>
      <div className="center">
        <h1>
          K.A.A-ga xush kelibsiz. <br />
          Markaziy kasalxona
        </h1>
        <p>
          K.A.A Hospital — bu sog‘ligingiz haqida chin dildan qayg‘uradigan joy.
          Biz uchun har bir bemor muhim, shuning uchun sizni oddiy raqam
          sifatida emas, inson sifatida qabul qilamiz. Bu yerda sizni iliq
          muhit, e’tiborli shifokorlar va samimiy g‘amxo‘rlik kutmoqda.Tajribali
          jamoamiz har kuni sog‘ligingizni tiklash va yaxshilash uchun jonbozlik
          bilan ishlaydi. K.A.A Hospitalda siz o‘zingizni yolg‘iz his etmaysiz — biz
          siz bilan birgamiz, har qadamda.
        </p>
        <div className="DocName">Robert Smith.</div>
      </div>
      <div className="right">
        <Link to={"/contact"}>
        <button className="actionBtn">
          <h4> Uchrashuvni Belgilash</h4>
          <span></span>
        </button>
        </Link>
        <Link to={"/doctors"}>
        <button className="actionBtn">
          <h4> Mutaxassislarni Kurish </h4>
        </button>
        </Link>
        <Link to={"/>contact"}>
        <button className="actionBtn">
          <h4> Kasalxona Topish </h4>
          <span></span>
        </button>
        </Link>
        <Link to={"/contact"}>
        <button className="actionBtn">
          <h4> Favqulodda aloqa</h4>
          <span></span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SecondPage;
