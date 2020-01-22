import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import Lottie from 'react-lottie'
import animationData from '../lottie/circle.json'

const ImgCard = ({ description, title, url }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <LazyLoad
      loader={() => <div>FUCK</div>}
      height={window.innerHeight / 2}
      offset={100}
    >
      <div>
        {!loaded && (
          <Lottie
            height={400}
            width={400}
            options={{ loop: true, autoplay: true, animationData }}
          />
        )}
        <img
          alt="forg"
          style={{ display: loaded ? 'block' : 'none' }}
          src={url}
          width="100%"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
        <div style={{ fontFamily: 'Arial' }}>{title}</div>
        <div style={{ fontFamily: 'Euclid' }}>{description}</div>
      </div>
    </LazyLoad>
  )
}

export default ImgCard
