import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const SpeakingContainer = styled.div`
  
  width: 90%;
  max-width: 760px;
  line-height: 2.5;
  h3 {
    font-family: "Montserrat";
  }
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export default () => (
  <Layout>
    <SpeakingContainer>
      <div>
        <h1>Talks & Interviews </h1>
        </div>
      <div>
        <p>
          I enjoy talking and promoting data literacy, whether through visualisation or journalism.
        </p>
        <p>
          This page is a subset of talks or interviews over the years.
        </p>
        <p>
         For any upcoming public talks on data visualisation/jounrlism, I will add the slides to this page.
        </p>
        <h3>Ihaka Public Lecture at UoA</h3>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/hLVlZpi4azw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="1"></iframe>
        <h3>National Digital Forum Keynote</h3>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/U4qv3xqg3FI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="2"></iframe>
        <h3>Open Data Showcase held at the Parliament</h3>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Cv-2sCmYnYs?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="3"></iframe> 
         <h2>Interviews</h2>
        <p><a href="https://www.radionz.co.nz/national/programmes/mediawatch/audio/201762824/mining-for-meaning-in-the-age-of-digitised-data">Mining for meaning in the age of data - RadioNZ</a></p>
        <p>On my data journalism experience in New Zealand media</p>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/V2KMhs--UZk?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="4"></iframe>
      </div>
    </SpeakingContainer>
  </Layout>
);
