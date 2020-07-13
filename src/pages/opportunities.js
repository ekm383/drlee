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
      <p style={{ marginBottom: "2rem" }}>
        Hawaii Ear, Nose, and Throat Consultants Corp. Honolulu, Hawaii
        <br />
        Physician – Otolaryngologist
      </p>
      <p>
        Among the duties include: Evaluate Otolaryngology patients prior to
        medical procedures to determine the medical treatment and care plan for
        Otolaryngology patients which may include head and neck surgery; Provide
        medical treatment and care to Otolaryngology patients and perform head
        and neck surgery; and Prepare reports of medical treatment and care
        provided to Otolaryngology patients. Among the requirements are: Doctor
        of Osteopathic Medicine Degree or Doctor of Medicine Degree or
        Educational Commission for Foreign Medical Graduates (ECMG)
        Certification, Current License to Practice Medicine in the State of
        Hawaii; 36 Months of Medical Residency Training in Otolaryngology or 36
        Months of Medical Fellowship Training in Otolaryngology; Current
        participation in Medical Fellowship Training Program in Otolaryngology
        Head and Neck Surgery; and Board Certified or Board Eligible in
        Otolaryngology Head and Neck Surgery by the American Board of
        Otolaryngology Head and Neck Surgery. Applicants may send resumes to
        Hawaii Ear, Nose, and Throat Consultants Corp.; Attn.: Dr. James Lee,
        1441 Kapiolani Boulevard, Suite 1300, Honolulu, Hawaii 96814
      </p>
    </Section>
  </Layout>
)

export default JobsPage
