import { Link } from "react-scroll";
import profileImg from "../assets/img/me.png";
import ParticlesBackground from "./ParticlesBackground";

const Header = () => {
  return (
    <header className="header">
      <ParticlesBackground />
      <div className="header-texts">
        <h1 className="header-title">Hi, I'm a Software<br />Engineer</h1>
        <h2 className="header-subtitle">I build web applications</h2>
        <Link to="contacts" smooth={true} duration={500}>
          <button className="btn">Contact me</button>
        </Link>
      </div>
      <div className="header-img">
        <img src={profileImg} alt="me-img" />
      </div>
    </header>
  );
};

export default Header;