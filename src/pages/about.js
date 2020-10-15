import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import styled from "styled-components"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="About me" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <H1>About me</H1>
            <div className="mt-4 leading-loose">
              <UL>
                <li>熊本出身，横浜在住。</li>
                <li>絵画，写真，音楽を気ままに，広く浅くやっています。</li>
              </UL>

              <br />
              <H2>Activities</H2>
              <UL>
                <li><CustomA href="https://kenchon.github.io/blog">ブログをつくりました</CustomA></li>
                <li>
                  <CustomA href="https://takumikodera.stores.jp/">
                    Takumi Kodera
                  </CustomA>
                  のアーティストを写真撮影しました。
                </li>
                {/* <li>
                  はっぽんミニフェス＠国立で演奏しました <CustomA href="https://www.youtube.com/watch?v=NOLdAhehQAg&feature=youtu.be">🎥</CustomA>
                </li> */}
              </UL>
            </div>
          </div>
          {/* <div className="w-full md:w-1/3 xl:w-2/5 md:pl-5">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="My Profile"
              className="rounded-md shadow-md"
            />
          </div> */}
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

const CustomA = styled.a`
  border-bottom: solid 3px #F29188;
`

const H1 = styled.h1`
  font-weight: 900;
  font-size: 35px;
  color: #2B5973;
`

const H2 = styled.h2`
  font-weight: 800;
  font-size: 25px;
  color: #2B5973;
`

const UL = styled.ul`
  list-style: disc;
  padding-left: 20px;
`

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
