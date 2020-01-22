import React from 'react'
import { connect } from 'react-redux'
import ImgCard from './ImgCard'
import { MainHeader } from './styles'

const Place = ({ match, photos }) => {
  const { place } = match.params
  console.log(photos)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MainHeader>{place}</MainHeader>
      {photos.map(p => {
        return (
          <div key={p.url}>
            <ImgCard url={p.url} title={p.title} description={p.description} />
          </div>
        )
      })}
    </div>
  )
}

const mapState = state => {
  const {
    view: { photos },
  } = state
  return { photos }
}

export default connect(mapState)(Place)
