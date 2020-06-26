import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import DrImg from "../images/dr-lee.jpg"

const IndexPage = () => (
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
        <Banner
          titleSmall="S. James Lee, MD, FACS"
          subtitle="Hawaii Ear, Nose and Throat Consultants Otolaryngology-Head and Neck Surgery"
        >
          <AniLink fade to="/contact">
            <Button>CONTACT DR. LEE</Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section id="information" style={{ margin: "4rem auto" }}>
      <div style={{ display: "flex" }}>
        <div>
          <img src={DrImg} alt="dr. lee" width="200px" />
        </div>
        <div>
          <p style={{ padding: "0rem 2rem" }}>
            <strong>Dr. S. James Lee</strong> completed his medical school
            training at the University of Illinois in Chicago and completed five
            years of further training in Otolaryngology Head and Neck surgery at
            the prestigious Johns Hopkins Medical Center. Dr. S. James Lee is
            board certified by American Board of Otolaryngology Head and Neck
            Surgery and is a fellow of the American College of Surgeons. Dr. S.
            James Lee's areas of expertise include; disorder of ear, nose,
            throat, and related structure of the head and neck. Dr. S. James Lee
            also has extensive expertise in facial cosmetic surgery. Dr. S.
            James Lee also provides services for Hearing Testing, VNG (Balance)
            Testing and Hearing Aid Dispensing. If you would like further
            information regarding any of these services, please inquire with the
            office staff. The office staff speaks a variety of languages to
            offer better service including; English, Korean, Japanese, Ilocano,
            and Tagalog.
          </p>
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
