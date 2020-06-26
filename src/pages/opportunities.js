import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"

const JobsPage = () => (
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
        <Banner titleSmall="opportunities"></Banner>
      </Section>
    </HeaderIndex>
    <Section id="information" style={{ margin: "4rem auto" }}>
      <p>
        Outstanding opportunity in Honolulu, Hawaii for a  BC/BE
        otolaryngologist to join an established practice.  Competitive base
        salary plus production bonus. Great income potential.  Opportunity for
        partnership track.  In office audiology, hearing aid dispensing, and
        videostroboscopy.  The practice serves the greater Honolulu area and
        Pearl City.  Honolulu has many of the benefits of a major metropolis
        while you are living in the ocean paradise that is Hawaii.
      </p>
      &nbsp;
      <p>
        Application Instructions: Submit copy of resume and CV in either "pdf"
        or "doc" format via email: ilarvicky@gmail.com, via fax to 808-951-4908,
        or by mail to 1441 Kapiolani Blvd., Ste. 1300 Honolulu Hi 96814."
      </p>
    </Section>
  </Layout>
)

export default JobsPage
