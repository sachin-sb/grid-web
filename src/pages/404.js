// 404.js
import ButtonPrimary from '../common/buttonPrimary'

export default function FourOhFour() {
  return <div className='error-page-style'>
    <video
      className="video-full"
      loop
      autoPlay
      muted
      playsInline
      width="100%"
      height="100%">
      <source src="/video/error.mp4"
        type="video/mp4" />
      Sorry, your browser doesn&apos;t support embedded videos.
    </video>

    <div className='content-sec'>
      <h1 className='error-text'>404</h1>
      <div className='overtext'>
        <p className='description'>Seems like you have come off the grid.</p>
        <div className='button-section align-center-style'>
          <a href="/" className="btn-link-red">
            <span>Back to Homepage</span>
            <img src="/img/long-right-arrow.svg" className="img-style" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
}