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
        <ButtonPrimary href="/" className="btn-home" buttonText="Back to Homepage" />
      </div>
    </div>
  </div>
}