import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { MainHeader } from './styles'

const PlaceHeader = styled.div`
  font-family: Arial;
  font-size: 5rem;
  text-align: center;
`

const Home = ({ history, loading, previews }) => {
  if (loading)
    return (
      <div>
        <div>loading...</div>
      </div>
    )
  console.log(previews)
  return (
    <div>
      <MainHeader>CERES</MainHeader>
      {previews.map(p => {
        return (
          <div>
            <img
              key={p.title}
              src={p.url}
              width={500}
              onClick={() => history.push(`/place/${p.folder}`)}
            />
            <PlaceHeader>{p.folder}</PlaceHeader>
          </div>
        )
      })}
    </div>
  )
}

const mapState = state => {
  const {
    view: { loading, previews },
  } = state
  return { loading, previews }
}

export default connect(mapState)(Home)
