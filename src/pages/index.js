import DarkTheme from '../layouts/Dark'
import Homepage2 from './home/home2-dark';

export default function Home(props) {
  return (
    <DarkTheme>
      <div className={`layout-primary-style ${props.className}`}>
        <div className="sidebar">
          <div className="logo">
            <img src='img/logo.svg' alt="" />
          </div>
          <div className="intro">
            <h4 className="intro-text">Intro</h4>
          </div>
          <div className="toggle">
            <img src='img/toggle.svg' alt="" />
          </div>
        </div>
        <div className="main-wrapper">
          <Homepage2 />
        </div>
      </div>
    </DarkTheme>
  )
}
