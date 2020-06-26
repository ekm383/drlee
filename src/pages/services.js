import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"

const ServicesPage = () => (
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
        <Banner titleSmall="services"></Banner>
      </Section>
    </HeaderIndex>
    <Section
      id="information"
      style={{
        margin: "4rem auto",
        textTransform: "Capitalize",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "2rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <h4>Languages</h4>
            <ul style={{ marginLeft: "2rem" }}>
              <li>English</li>
              <li>Korean</li>
              <li>Japanese</li>
              <li>Filipino</li>
            </ul>
          </div>
          <div>
            <h4>Accepted Insurance</h4>
            <ul style={{ marginLeft: "2rem" }}>
              <li>HMSA</li>
              <li>HMAA</li>
              <li>BCBS</li>
              <li>AETNA</li>
              <li>CIGNA</li>
              <li>UHA</li>
              <li>AARP</li>
              <li>United Health Care</li>
              <li>Japanese Overseas Insurance</li>
            </ul>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: "1rem" }}>
            <h4>Specialty</h4>
            <ul style={{ marginLeft: "2rem" }}>
              <li>Otolaryngology (Ent)</li>
              <li>Head and Neck Surgery</li>
            </ul>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h4>Special Expertise</h4>
            <ul style={{ marginLeft: "2rem" }}>
              <li>
                Disorder of ear, nose, throat, and related structure of the head
                and neck
              </li>
              <li>Minor cosmetic procedures</li>
            </ul>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h4>Additional Services</h4>
            <ul style={{ marginLeft: "2rem" }}>
              <li>hearing testing</li>
              <li>videonystagnography (balance) testing</li>
              <li>hearing aid dealer and fitter</li>
              <li>free consultation for hearing aids</li>
              <li>post fitting care follow up</li>
            </ul>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h4>Common Conditions Treated</h4>
            <ul style={{ marginLeft: "2rem" }}>
              <li>
                Hearing loss, dizziness, sinusitis, voice disorders, swallowing
                disorders, head, neck, and thyroid tumors
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
)

export default ServicesPage
