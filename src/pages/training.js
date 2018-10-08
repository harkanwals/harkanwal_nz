import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const TrainingContainer = styled.div`
  width: 90%;
  max-width: 760px;
  line-height: 2;

  @media (max-width: 760px) {
    flex-direction: column;
  }
  a {
    color: darkgreen;
  }
  p {
    font-family: "Merriweather";
  }

  iframe {
    margin-bottom: 50px;
  }
`;

const BlockQuoteWrapper = styled.div`
  margin-bottom: 60px;
  cite {
    margin-left: 2%;
    font-size: 1rem;
    font-style: normal;
  }
`;

export default () => (
  <Layout>
    <TrainingContainer>
      <div>
        <h2>Data Visualisation for Impact</h2>
        <p>
          Data analysis should lead to better decision-making and understanding
          of the data.
        </p>
        <p>Yet, it does not happen always.</p>
        <p>
          <em>
            There is a difference between understanding data and communicating
            that understanding.
          </em>
        </p>
        <p>
          Just as in written communication, we use language to persuade and
          delight. In case, of communicating with data, the predominant language
          is visualisation.
        </p>
        <p>
          You can register for{" "}
          <a
            href="https://elements-data-visualisation-workshop.lilregie.com/booking/attendees/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Auckland workshops here
          </a>
          . If your organisation would like to book mutliple seats,{" "}
          <a
            href="mailto:harkanwal@elementsdata.studio"
            rel="noopener noreferrer"
          >
            please get in touch for discounted pricing
          </a>
          .
        </p>
        <p>
          If you would like to be notified for Wellington workshop registration,
          please fill out{" "}
          <a
            href="https://goo.gl/forms/TfUgsKguLTufGNrt2"
            target="_blank"
            rel="noopener noreferrer"
          >
            the form here
          </a>
          .
        </p>
        <h2>Data & Narratives</h2>
        <p>
          This workshop enables to create more effective and memorable
          visualisations and make sure your insights are not lost in
          translation.
        </p>
        <h3>What will I get out of it</h3>
        <p>Your visualisations will be more effective.</p>
        <p>
          If you have created charts that excite you but don’t excite your
          audience, then this workshop will change that.
        </p>
        <p>
          You will have a better understanding of how to design visualisations
          for the audience, apply narrative structure to telling a ‘story’ with
          data, gain conceptual knowledge of how to construct visualisations,
          master concepts like colour usage, and walk away with set of practical
          tips and toolset that you can apply next day on the job.
        </p>
        <br />

        <h3>What past attendees have said</h3>

        <BlockQuoteWrapper>
          <blockquote class="twitter-tweet" data-lang="en">
            <p lang="en" dir="ltr">
              I’m not quite sure how you did it but one of the best things about
              your workshop was how you made learning about technical things
              seem fun and non-threatening.
            </p>
            &mdash; Aaron Schiff (@aschiff){" "}
            <a href="https://twitter.com/aschiff/status/1005977634260389889?ref_src=twsrc%5Etfw">
              June 11, 2018
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
        </BlockQuoteWrapper>

        <BlockQuoteWrapper>
          <blockquote>
            <p>
              As somebody familiar with many of the best practise approaches, I
              got introduced to new tools for visualisation and processes to
              conceptualise a new project from the start.
            </p>
          </blockquote>
          <cite>– Alex Waleczek, CoreLogic</cite>
        </BlockQuoteWrapper>

        <BlockQuoteWrapper>
          <blockquote>
            <p>
              What I've learned has already saved me time and made my knowledge
              more transferrable to my institution.
            </p>
          </blockquote>
          <cite>– Michael Lascarides, National Library of New Zealand</cite>
        </BlockQuoteWrapper>

        <BlockQuoteWrapper>
          <blockquote>
            <p>
              Harkanwal presents an incredible range of useful tools and
              inspiring examples with great clarity and passion. Unmissable if
              you care about data and good communication.
            </p>
          </blockquote>
          <cite>– Liza Bolton, University of Auckland</cite>
        </BlockQuoteWrapper>

        <BlockQuoteWrapper>
          <blockquote>
            <p>
              Introduced me to concepts that I was unfamiliar with, and was a
              fantastic stepping-stone to then continue further learning on my
              own.
            </p>
          </blockquote>
          <cite>– Marcus Buckland</cite>
        </BlockQuoteWrapper>


        <BlockQuoteWrapper>
        <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/datavisualization?src=hash&amp;ref_src=twsrc%5Etfw">#datavisualization</a> huge thanks to  <a href="https://twitter.com/opendatanz?ref_src=twsrc%5Etfw">@opendatanz</a> and <a href="https://twitter.com/kamal_hothi?ref_src=twsrc%5Etfw">@kamal_hothi</a> for an excellent immersive workshop.</p>&mdash; Anya Duxfield (@ADux) <a href="https://twitter.com/ADux/status/991572333616742400?ref_src=twsrc%5Etfw">May 2, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        </BlockQuoteWrapper>

        <p>
          <a
            href="https://www.data.govt.nz/blog/data-visualisation-workshop-success/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more on OpenDataNZ blog about data visualisation workshop
            success.
          </a>
        </p>

        <br />
        <br />
        <br />

        <h2>R Programming and Shiny</h2>
        <p>
          A solid basis for R programming with tidyverse and developing data
          visualisation for Shiny.
        </p>
        <p>
          If you are still using BI software for analysing data, this workshop
          is set up to get you started with R and gain a deeper knowledge of
          what it is capable of doing. The data visualisation focus is on
          creating exploratory charts and using Shiny.
        </p>
        <h3>What will I get out of it</h3>
        <p>A pathway to be a better programmer with R.</p>
        <p>
          R has been the predominant tool for me, and it is easy to get stuck in
          the first steps of data analysis without exploring its full
          capabilities.
        </p>
        <p>
          Become aware of functional programming aspect of R and also design
          better dashboards with Shiny.
        </p>

        <br />
        <br />
        <br />

        <h2>An introduction to D3.js</h2>
        <p>
          D3.js is the javascript library which fundamentally changed how
          interactive visualisations happen on the web.
        </p>
        <p>
          This workshop is taught using Observable Notebooks, so the focus is on
          learning D3 to build visualisations quickly.
        </p>
        <h3>What will I get out of it</h3>
        <p>
          You can get started with creating visualisations in the browser after
          this workshop.
        </p>
        <p>
          The workshop is designed to be a complete overview of different
          aspects of D3.js - you will understand how to read data into the
          browser, create custom visualisations and understand how to create
          animated transition using D3.
        </p>
      </div>
    </TrainingContainer>
  </Layout>
);
