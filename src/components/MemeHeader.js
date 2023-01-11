import logo from "../logo.svg";
import "../Meme.css";

export default function MemeHeader(props) {
  return (
    <nav className={`memeHead ${props.darkMode ? "dark" : ""}`}>
      <img src={logo} alt="logo" />
      <h3 className="memeHead_title">Meme Generator</h3>
      <h4 className="memeHead_desc">Made using React</h4>
      <div className="memeHead_toggle">
        <p className="toggle_light">Light</p>
        <div className="toggle_slide" onClick={props.toggleDark}>
          <div className="toggle_slide_circle"></div>
        </div>
        <p className="toggle_dark">Dark</p>
      </div>
    </nav>
  );
}
