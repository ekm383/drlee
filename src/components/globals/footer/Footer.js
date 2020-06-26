import React, { Component } from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/restaurantmarketinghawaii",
      },
      {
        id: 3,
        icon: <FaGoogle className="icon google-icon" />,
        path: "https://www.google.com/restaurantmarketinghawaii",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/restaurantmarketinghawaii",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="container">
          <div>
            <p>
              <strong>S. James Lee, MD, FACS</strong> <br />
              Hawaii Ear, Nose and Throat Consultants
              <br />
              Otolaryngology-Head and Neck Surgery <br />
              OFFICE: (808) 951-4900
              <br />
              FAX: (808) 951-4908
              <br />
            </p>
          </div>
          <div>
            <p>
              <strong>ALA MOANA LOCATION</strong>
              <br />
              1441 KAPIOLANI BLVD. STE#1300
              <br />
              HONOLULU, HI 96814
              <br />
            </p>
          </div>
          <div>
            <p>
              <strong>AIEA LOCATION</strong>
              <br />
              98-1247 KAAHUMANU ST. STE#222
              <br />
              AIEA HI 96701
              <br />
            </p>
          </div>
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  background: var(--gray);
  color: var(--white);
  .container {
    width: 80%;
    display: flex;
    margin: 0rem auto;
    padding: 4rem 0rem;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    .container {
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      div {
        flex-basis: 100%;
        margin: 1rem auto;
        text-align: center;
      }
    }
  }
`

export default Footer
