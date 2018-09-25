import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const SpeakingContainer = styled.div`
  width: 90%;
  max-width: 760px;
  line-height: 2;
  h3 {
    font-family: "Montserrat";
  }
  @media (max-width: 760px) {
    flex-direction: column;
  }
  a {
    color: black;
  }
`;

const TitleContainer = styled.p`
  font-size: 1.2rem;
  font-family: "Montserrat";
  line-height: 1.3;
`;

const TitleContainer2 = styled.p`
  font-size: 1.2rem;
  font-family: "Montserrat";
  line-height: 1.3;
  font-weight: bold;
`;

export default () => (
  <Layout>
    <SpeakingContainer>
      <div>
        <TitleContainer2>Talks & Interviews </TitleContainer2>
      </div>
      <div>
        <p>
          I enjoy talking and promoting data literacy, whether through
          visualisation or journalism.
        </p>
        <p>This page is a subset of talks or interviews over the years.</p>
        <p>
          For any upcoming public talks on data visualisation/jounrlism, I will
          add the slides to this page.
        </p>
        <TitleContainer>Ihaka Public Lecture at UoA</TitleContainer>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/hLVlZpi4azw?rel=0&amp;controls=0&amp;showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="1"
        />
        <TitleContainer>National Digital Forum Keynote</TitleContainer>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/U4qv3xqg3FI?rel=0&amp;controls=0&amp;showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="2"
        />
        <TitleContainer>
          Open Data Showcase held at the Parliament
        </TitleContainer>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Cv-2sCmYnYs?rel=0&amp;controls=0&amp;showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="3"
        />
        <TitleContainer2>Interviews</TitleContainer2>
        <TitleContainer>
          <a href="https://www.radionz.co.nz/national/programmes/mediawatch/audio/201762824/mining-for-meaning-in-the-age-of-digitised-data">
            Mining for meaning in the age of data - RadioNZ
          </a>
        </TitleContainer>
        <TitleContainer>NZ newsroom experience at Orcon IRL</TitleContainer>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/V2KMhs--UZk?rel=0&amp;controls=0&amp;showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="4"
        />
      </div>
    </SpeakingContainer>
  </Layout>
);
