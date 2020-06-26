import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import Contact from "../components/ContactForm"
import Map from "../components/map"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Dr. S. James Lee completed his medical school training at the University of Illinois in Chicago and completed five years of further training in Otolaryngology Head and Neck surgery at the prestigious Johns Hopkins Medical Center.`,
      author: `@doctorleehawaii"
      keywords={[
        `Hawaii Doctor`,
        `Hawaii Dr. Lee`,
        `Dr. Lee Hawaii`,
        `Ear, Nose, & Throat`,
      ]}
    />
    <HeaderIndex style={{ padding: "4rem 0rem" }}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner titleSmall="contact"></Banner>
      </Section>
    </HeaderIndex>
    <Section style={{ margin: "4rem auto" }}>
      <Map
        location="Ala Moana Location"
        street="1441 Kapiolani Blvd. Suite 1300"
        city="Honolulu, HI 96814"
        day1="Mon: 7:30am - 4:30pm"
        day2="Thur: 7:30am - 1:00pm"
        day3="Sat (2nd, 4th, 5th): 8:30am - 12:30pm"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29739.924288399696!2d-157.843288!3d21.291625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006df0088cc7ab%3A0x2367ee1d6961420a!2s1441%20Kapiolani%20Blvd%20%231300%2C%20Honolulu%2C%20HI%2096814!5e0!3m2!1sen!2sus!4v1593129617853!5m2!1sen!2sus"
          width="100%"
          height="350"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </Map>
      <Map
        location="Aiea Location"
        street="98-1247 Kaahumanu St. Suite 222"
        city="Aiea, HI 96701"
        day1="Wed: 8:00am - 6:00pm"
        day2="Fri: 7:30am - 4:30pm"
        day3="Sat (1st & 3rd): 8:30am - 12:30pm"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29720.192129399715!2d-157.953291!3d21.388959000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0066003c7b18ad%3A0x1bb71699fd55d26e!2s98-1247%20Kaahumanu%20St%20STE%20222%2C%20Aiea%2C%20HI%2096701!5e0!3m2!1sen!2sus!4v1593130148999!5m2!1sen!2sus"
          width="100%"
          height="350"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </Map>
    </Section>
    <Section id="information" style={{ margin: "4rem auto" }}>
      <Contact />
    </Section>
  </Layout>
)

export default ContactPage
