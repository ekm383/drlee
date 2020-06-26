import React from "react"
import styled from "styled-components"

const map = ({ location, street, city, day1, day2, day3, children }) => {
  return (
    <MapWrapper>
      <div className="map">{children}</div>
      <div className="info">
        <h4>{location}</h4>
        <p>
          {street}
          <br />
          {city}
        </p>
        <br />
        <h4>Schedule</h4>
        <ul>
          <li>{day1}</li>
          <li>{day2}</li>
          <li>{day3}</li>
        </ul>
      </div>
    </MapWrapper>
  )
}

const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem auto;
  .map {
    width: 70%;
  }
  .info {
    padding-left: 1rem;
    ul {
      list-style-type: none;
      font-size: 0.8rem;
      li {
        line-height: 1.5rem;
      }
    }
  }
`

export default map
