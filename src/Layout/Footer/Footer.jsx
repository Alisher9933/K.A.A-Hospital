import { Link, Outlet } from "react-router-dom";
import './Footer.css';
import Logo from "/public/Icons/Logo2.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="section">
          <Link to={"/"}>
            <img className="main-logo" src={Logo} alt="" />
          </Link>
          <br /><br />
        <p className="description">
        Sog‘ligingiz va farovonligingiz yo‘lida biz sizga individual yondashuv asosida xizmat ko‘rsatamiz — bu sizni sog‘lom va baxtliroq qiladi.
        </p>
      
        <p className="contact">📞 +998 88 585 03 06</p>
        <p className="contact">✉️ kayumov.alisher02@gmail.com</p>
      </div>

      <div className="section">
        <h4 className="title">Ijtimoiy tarmoqlar</h4>
        <div className="socials">
        <a href="https://t.me/kayumov_alisher" target="_blank" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
            <path d="M9.993 16.2 9.73 19.72c.496 0 .711-.214.969-.472l2.328-2.263 4.825 3.519c.883.486 1.518.23 1.763-.817l3.198-14.97h.001c.28-1.297-.47-1.806-1.33-1.49L1.373 9.055C.108 9.53.118 10.262 1.08 10.56l5.364 1.68L18.246 5.3c.54-.337 1.034-.15.63.187"/>
          </svg>
        </a>

        <a href="https://github.com/Alisher9933" target="_blank" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 0 0 8.207 11.418c.6.111.82-.261.82-.582 0-.287-.01-1.046-.016-2.054-3.338.726-4.042-1.612-4.042-1.612a3.177 3.177 0 0 0-1.334-1.752c-1.09-.744.082-.729.082-.729a2.517 2.517 0 0 1 1.834 1.234 2.55 2.55 0 0 0 3.487 1 2.546 2.546 0 0 1 .762-1.6c-2.666-.304-5.467-1.333-5.467-5.93a4.64 4.64 0 0 1 1.236-3.215 4.314 4.314 0 0 1 .118-3.174s1.006-.322 3.3 1.23a11.418 11.418 0 0 1 6 0c2.294-1.552 3.298-1.23 3.298-1.23a4.31 4.31 0 0 1 .12 3.174 4.64 4.64 0 0 1 1.236 3.215c0 4.61-2.804 5.624-5.475 5.922a2.85 2.85 0 0 1 .814 2.213c0 1.6-.015 2.89-.015 3.284 0 .324.216.698.825.58A12.005 12.005 0 0 0 24 12c0-6.627-5.373-12-12-12Z"/>
          </svg>
        </a>

        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>        </a>
        </div>
      </div>

      <div className="section">
        <h4 className="title">Ish vaqti</h4>
        <ul className="hoursList">
          <li>Dushanba: 1:00 -  1:00</li>
          <li>Seshanba: 1:00 -  1:00</li>
          <li>Chorshanba: 1:00 -  1:00</li>
          <li>Payshanba: 1:00 -  1:00</li>
          <li>Friday: 1:00 -  1:00</li>
          <li>Shanba: 1:00 -  1:00</li>
          <li>Yakshanba: 1:00 -  1:00</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
