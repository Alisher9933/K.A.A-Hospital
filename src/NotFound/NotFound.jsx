import "./NotFound.css";
import { Link, Outlet } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Sahifa topilmadi</h2>
      <p className="notfound-description">
        Kechirasiz, siz qidirgan sahifa mavjud emas yoki o‘chirilgan.
      </p>
      <Link to={"/"}>
      <button className="notfound-button">Bosh sahifaga qaytish</button>
      </Link>
    </div>
  );
};

export default NotFound;
