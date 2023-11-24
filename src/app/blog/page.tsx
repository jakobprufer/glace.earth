import React from "react";
import "../../sass/main.sass";
import TitleBar from "../components/TitleBar";
import Image from "next/image";

import Cube from "../../../public/blog/cube.webp";

export default function page() {
  return (
    <div>
      {/* <TitleBar scrollY={scrollY} /> */}
      <div className="blog">
        <h1>Glace - Jakob's Blog</h1>
        <p className="intro">
          This blog documents Final Major Project process of my course mate
          Manfredi and me, as we worked together to design a sustainable
          investment app of a new generation that visualises your impact in the
          amount of arctic ice saved.
        </p>
        <p className="intro">
          For full documentation see our{" "}
          <a
            href="https://www.notion.so/manfredidesign/Glace-7280a178c3a645749f3985dd9541c17a?pvs=4"
            target="_blank"
          >
            Notion
          </a>
        </p>
        <p className="intro">
          For the pitch website see{" "}
          <a
            href="For the pitch website see https://glace.earth"
            target="_blank"
          >
            https://glace.earth
          </a>
        </p>
        <section className="section1">
          <h2>Section 1 – Topic Finding</h2>
          <Image
            src={Cube}
            //   style={{
            //     transform: `scale(${70 + scrollY / 30}%) rotate(${0}deg)`,
            //   }}
            alt="A phone made out of ice"
            className="blogImg"
          />
          <h3>Team Selection</h3>
          <p>
            Manfredi and I decided early on that we would work together because
            we knew our interests aligned and we functioned well together as a
            team, bouncing ideas off each other and challenging our individual
            perspectives. Manfredi brings valuable expertise in UI design, honed
            through his work on Fundvis, a fintech startup dedicated to
            digitizing the fund industry, as well as Weply, a sports marketplace
            app he co-founded.
          </p>
          <h3>Topic Finding</h3>
          <p>
            Recognizing the chance to devote several months to a single subject,
            we understood the importance of selecting the right topic. (As with
            most projects on this MA, looking back the choice of direction seems
            like a piece of cake in hindsight but was one of the most
            challenging aspects of the process)
          </p>
          <p>My personal priorities for the project were the following:</p>
          <ul>
            <li>The outcome would be useful in a real world application.</li>
            <li>It could run as a potentially profitable business.</li>
            <li>The process would showcase our skills in our portfolio.</li>
            <li>The project would follow principles of sustainability.</li>
          </ul>
          <p>
            We gathered an overview of trends and developments or the 2020s
            decade as an inspiration for topics. Those trends included an
            increased share of elderly people in the population, a rise of
            generative AI and Augmented Reality devices as well as the
            increasingly urgent demand for sustainable alternatives.
          </p>
          <p>
            See the full list in our{" "}
            <a
              href="https://www.notion.so/manfredidesign/2020s-Relevant-Trends-7ee8a63d2d5f431bbbf586c360f747f6?pvs=4"
              target="_blank"
            >
              Notion
            </a>
          </p>
          <p>
            We discussed in-depth a few topics we ended up not pursuing. Those
            topics were:
          </p>
          <ul>
            <li>
              Reworking online comments from the traditional list view into a
              new network visualisation, enabling more intuitive understanding
              of comments’ connections, similarities and popularity as well as
              online opinion in general
            </li>
            <li>
              Creating a service through which people with spare rooms in cities
              could give creatives a temporary homestay in exchange for their
              specific skills, applied in collaborative work, or their works of
              art
            </li>
            <li>
              Designing a system of waste-free takeout packaging that could be
              returned in collection stations across offices and universities
            </li>
          </ul>
          <h3>What drove our final choice</h3>
          <p>
            What caught our attention was the heightened concern for climate
            change and sustainability within our own generation, Gen Z,
            surpassing the levels observed in previous generations. Having
            worked on climate change-related topics in previous projects, I
            noticed a saturation of awareness and educational campaigns, leaving
            people feeling largely overwhelmed by the issue. So we decided to
            approach it from a different angle.{" "}
          </p>
          <p>
            Using his background in the fund industry, Manfredi highlighted a
            growing shift towards sustainability in the realm of finance.
            Despite the increasing interest among Generation Z in investment
            opportunities, driven by online brokers and the surge in
            cryptocurrencies, we noticed a lack of awareness regarding the
            potential positive impact of investing money. We found ourselves
            within a generation genuinely committed to making a difference,
            poised to become the next wave of investors, yet many were unaware
            of the transformative impact their investment choices could bring.
          </p>
        </section>
        <section className="section2">
          <h2>Section 2 – Background Research & Literature Review</h2>

          <p>So we arrived at our research question:</p>

          <p>
            <b>
              How might we employ design to inspire Generation Z to use the
              power of money for sustainable impact?
            </b>
          </p>

          <p>
            Our expected outcome was a mobile platform that we gave the working
            title “Gaia”.
          </p>

          <p>
            From the outset, it became evident to us that existing investment
            platforms primarily presented data through numbers and graphs.
            Understanding finance was complicated by an abundance of jargon. Our
            vision was to redirect the focus towards the impact and the notion
            of care, employing techniques such as storytelling, vibrant
            visualization, and gamification. Our intention was to craft a design
            that resonated with those unfamiliar with finance, offering a
            seamless entry point through fixed subscription plans or remarkably
            low initial investment amounts.
          </p>

          <p>
            We started approaching the topic through literature and online
            research to gain a more profound understanding of the context we
            were addressing.
          </p>

          <h3>
            Financial research – For full research see{" "}
            <a
              href="https://www.notion.so/manfredidesign/Financial-Background-Research-4d23258714a34077956e9084e3fa9677?pvs=4"
              target="_blank"
            >
              here
            </a>
          </h3>

          <p>
            We wanted to get a sufficient sense of how the financial
            back-structure of the platform could work. I set out to evaluate a
            few different investment vehicles we could use, including beyond the
            traditional stocks, funds and bonds also sustainable start-ups,
            solar parks, wind farms, agricultural projects and peer-to-peer
            funding for residential solar energy. Considering company stocks,
            some of the most innovative companies were truly fascinating to me,
            such as{" "}
            <a href="https://lanzatech.com/" target="_blank">
              <b>LanzaTech</b>
            </a>{" "}
            who transform captured carbon into fuels, chemicals and clothing or{" "}
            <a href="https://3xn.com/" target="_blank">
              <b>3XN</b>
            </a>{" "}
            who up-cycle parts of old skyscrapers into modern buildings. For
            feasibility reasons we would later decide to focus purely on
            sustainably-focussed funds.
          </p>
          <p>
            Another purpose of this research was to determine how to assess
            investment sustainability, a critical aspect for the project if we
            wanted to have any credibility for actual impact. We discovered
            controversies surrounding existing instruments like ESG ratings,
            criticized for arbitrariness and bureaucratic complexity. However,
            we found a growing industry seeks to enhance the reliability and
            trustworthiness of sustainability ratings. Firms include{" "}
            <a href="https://www.clarity.ai/" target="_blank">
              <b>Clarity AI</b>
            </a>
            ,{" "}
            <a href="https://www.refinitiv.com/" target="_blank">
              <b>Refinitv</b>
            </a>
            ,{" "}
            <a href="http://truvaluelabs.com/" target="_blank">
              <b>Truevalue Labs</b>
            </a>{" "}
            <a href="https://www.esgbook.com/" target="_blank">
              <b>esg book</b>
            </a>
            . We were particularly impressed with Clarity AI because it offers
            data on both funds and companies, assessing their alignment with the
            UN Sustainable Development Goals and tracking CO2 emission. It also
            provides a nuanced evaluation of portfolio impact, visualizing it in
            tangible measures such as equivalent flights saved or equivalent
            household water consumption saved.
          </p>
          <h3>Speaking to climate and finance experts</h3>

          <h3>
            Competitor Analysis – full documentation{" "}
            <a
              href="https://www.notion.so/manfredidesign/Competitors-Inspirations-0b819b85a8e54e3981903bf4d2373e1e?pvs=4"
              target="_blank"
            >
              here
            </a>
          </h3>
          <p>
            To understand the existing sustainability finance landscape, we
            looked at existing solutions. Those were investment platforms of
            different types: direct crowdfunding for sustainable energy
            projects, traditional brokers with sustainability features,
            platforms targeted to specific user groups (e.g. female-focussed
            investment) up to fully automated robo-advisors. We evaluated both
            their financial blueprint and their front end design.
          </p>
          <p>All firms we looked at:</p>
          <ul>
            <li>
              <a href="https://www.tomorrow.one/" target="_blank">
                Tomorrow Bank
              </a>
            </li>
            <li>
              <a href="http://moniflo.com" target="_blank">
                Moniflo
              </a>
            </li>
            <li>
              <a href="https://www.bettervest.com/en/" target="_blank">
                Bettervest
              </a>
            </li>
            <li>
              <a href="https://ecoligo.com/en/" target="_blank">
                Ecoligo
              </a>
            </li>
            <li>
              <a href="https://www.climatize.earth/" target="_blank">
                Climatize
              </a>
            </li>
            <li>
              <a href="https://www.raisegreen.com/" target="_blank">
                Raise Green
              </a>
            </li>
            <li>
              <a href="https://www.wealthify.com/" target="_blank">
                Wealthify
              </a>
            </li>
            <li>
              <a
                href="https://www.nutmeg.com/socially-responsible-investing"
                target="_blank"
              >
                Nutmeg
              </a>
            </li>
            <li>
              <a href="https://impact.interactivebrokers.com" target="_blank">
                IMPACT
              </a>
            </li>
            <li>
              <a href="https://circa5000.com/" target="_blank">
                CIRCA5000
              </a>
            </li>
            <li>
              <a href="https://www.betterment.com/" target="_blank">
                Betterment
              </a>
            </li>
            <li>
              <a href="https://www.wealthfront.com/" target="_blank">
                Wealthfront
              </a>
            </li>
            <li>
              <a href="https://flitinvest.com/" target="_blank">
                Flitinvest
              </a>
            </li>
            <li>
              <a href="https://www.earthfolio.net/" target="_blank">
                Earthfolio
              </a>
            </li>
            <li>
              <a href="https://www.ellevest.com/" target="_blank">
                ELLEVEST
              </a>
            </li>
          </ul>
          <h3>
            Research on Target audience – Research and sources{" "}
            <a
              href="https://www.notion.so/manfredidesign/Gen-Z-and-Relation-to-Climate-Change-9b6cccd5b8a6470d9502c3505691844d?pvs=4"
              target="_blank"
            >
              here
            </a>{" "}
            and{" "}
            <a
              href="https://www.notion.so/manfredidesign/Value-of-Money-for-Gen-Z-a1dd9b6b369c402cbb24f6f18cfa5af7?pvs=4"
              target="_blank"
            >
              here
            </a>
          </h3>
          <p>
            Generation Z, born between 1995 and 2010, constitutes around 26% of
            the global population. They are distinguished by their status as
            digital natives immersed in the internet, mobile technology, apps,
            and social networks. Research confirmed our initial impression that
            this generation was generally more active in sustainable behaviors
            and willing to pay more for eco-friendly products.
          </p>
          <p>
            As for Gen Z’s relationship to spending, we found four important
            factors likely to play a role in their consumption behaviors.
          </p>
          <ul>
            <li>
              <b>Focus on innovation:</b> a strong inclination towards spending
              on technological and design-based innovations in the marketplace
            </li>
            <li>
              <b>Insistence on convenience:</b> reliance on convenience, seen in
              preferences for time-saving devices, easy-to-acquire retail
              channels, and products with simplified experiences
            </li>
            <li>
              <b>Desire for security:</b> Economic challenges shape Generation
              Z's focus on security, leading to an interest in saving and
              conservative spending
            </li>
            <li>
              <b>Tendency toward escapism:</b> prone to escapist consumption
              pursuits including entertainment (e.g., movies, music,
              video-games) and fostering social “tribes”, partly as a response
              to economic challenges
            </li>
          </ul>
          <p>
            For our project, mostly the first three aspects seemed relevant – we
            offered investing through on a mobile application, and innovative
            and highly convenient channel. We would also focus on creating the
            trust both in the financial security as well as ecological integrity
            of the mission.
          </p>
        </section>
        <section className="section3">
          <h2>Section 3 – Generative Research</h2>

          <p>
            We then commenced generative research to give us food for ideas for
            the final outcome.
          </p>

          <h3>
            Research Plan – full documentation{" "}
            <a
              href="https://www.notion.so/manfredidesign/Generative-User-Research-Plan-5a8373b039314c50b733f9e5e8290efc?pvs=4"
              target="_blank"
            >
              here
            </a>
          </h3>

          <p>
            The primary goals of the research were to understand Generation Z's
            perspectives on climate change, to explore their knowledge,
            attitudes, and barriers regarding investing and to examine the
            intersection of environmental and financial interests.
          </p>

          <p>
            We focused on individuals residing in European cities, namely
            London, Barcelona, Berlin, Milan and Paris, aligning the
            geographical scope with the intended target market of the platform.
            Within this limitation, however, we aimed to maximize diversity in
            ethnicity, educational background, gender, occupation. We also
            picked individuals with varying environmental interest and previous
            financial experience.
          </p>

          <p>
            As methodology, we chose in-depth interviews with subsequent
            affinity mapping and thematic analysis. These were chosen for their
            facilitation of open-ended discussions, providing rich qualitative
            data on the interviewee’s concerns and motivations. Affinity mapping
            and thematic analysis help organize and identify patterns within the
            gathered information, aiding in the synthesis of insights crucial
            for informing the user experience design based on the nuanced
            understanding.
          </p>

          <p>
            We initially aimed to confirm and expand the interview findings
            quantitively with a survey but decided to move the survey to a later
            date after submission because of time restrictions.
          </p>

          <p>
            Before starting the interviews, we reviewed the research plan with a
            senior user researcher of travel website eDreams, who provided us
            with some valuable feedback. Namely, he made clear that we should be
            very specific about the questions we aimed to answer. We
            consequently compiled a detailed list of research questions, which
            you can see with our findings in the next section.
          </p>

          <h3>
            Interviews and Analysis – full documentation{" "}
            <a
              href="https://www.notion.so/manfredidesign/Generative-User-Research-Interviews-a018eb1dc4a94b8a92de43cbb1c9c62e?pvs=4"
              target="_blank"
            >
              here
            </a>
          </h3>

          <p>
            We then conducted the interviews in person and on video call with 8
            participants, of equal parts male and female and of five different
            nationalities. Responses were generally very good, with interviews
            ranging from 20-45 minutes in length. We transcribed the recordings
            and, if necessary, translated the transcripts. To access the
            transcripts and the full list of interview questions, see our Notion{" "}
            <a
              href="https://www.notion.so/manfredidesign/Generative-User-Research-Interviews-a018eb1dc4a94b8a92de43cbb1c9c62e?pvs=4"
              target="_blank"
            >
              here
            </a>
            . There you can also see the profiles of the interviewees. To
            analyze and conceptualize the data, we color-coded themes in the
            interviews with markers, transferred them to pin it notes and
            grouped them by affinity.
          </p>

          <p>Below are our research questions with the findings.</p>

          <h3>Understand Gen Z’s readiness to act sustainably</h3>

          <ol>
            <li>
              <h4>How worried are Generation Z about climate change?</h4>
              <ul>
                <li>
                  Many people think about it due to extreme weather events
                </li>
                <li>Some people consider the consequences very far way</li>
                <li>
                  There is a strong sense of guilt in the worry (’we could do
                  more’) and a feeling of having to justify
                </li>
              </ul>
            </li>
            <li>
              <h4>What do Generation Z do to fight climate change?</h4>
              <ul>
                <li>
                  Every day behavior dominates (recycling, reducing electricity
                  consumption, changing consumption patterns, changing
                  transportation and travel behaviors, eating local and
                  meat-free)
                </li>
                <li>Tied to a self-schema (being conscious, eco-friendly)</li>
                <li>
                  People like small and easy things (ex. carbon offset charge)
                </li>
                <li>
                  Only one person mentioned donation and sustainable investing
                </li>
              </ul>
            </li>
            <li>
              <h4>
                What can move Generation Z to translate ambitions/concerns into
                action?
              </h4>
              <ul>
                <li>Belief that the action brings a personal benefit</li>
                <li>Education and celebrity voices that people can trust</li>
                <li>Norms</li>
                <li>
                  Ability to see the bigger picture (see the combination of
                  small actions into big impact)
                </li>
              </ul>
            </li>
            <li>
              <h4>
                What can keep Generation Z from translating ambitions/concerns
                into action? (new one)
              </h4>
              <ul>
                <li>
                  Mistrust of politicians, governments, and big corporations
                </li>
                <li>
                  Believe that climate change is too big to tackle or even
                  imagine
                </li>
                <li>“Fake news” and misinformation</li>
                <li>Financial reasons (lack of money)</li>
              </ul>
            </li>
            <li>
              <h4>
                How specific are young people’s environmental preferences?
              </h4>
              <ul>
                <li>Half of the people have no clear preference</li>
                <li>Some people have a preference based on their profession</li>
                <li>
                  Some people have a preference based on observed real-world
                  impact
                </li>
              </ul>
            </li>
            <li>
              <h4>
                What are the characteristics of those that are more
                environmentally active?
              </h4>
              <ul>
                <li>
                  Believe climate change will affect them and they are quite
                  pessimistic
                </li>
                <li>
                  Read a lot about it or deal with sustainability professionally
                </li>
                <li>Have traveled and seeing the real-world impact</li>
                <li>They are mostly not interested in finance</li>
                <li>Have doubts about having children</li>
                <li>Most of them are female</li>
              </ul>
            </li>
          </ol>

          <h3>Understand the investment behavior of Generation Z</h3>

          <ol>
            <li>
              <h4>
                How experienced are Generation Z in investing and finance?
              </h4>
              <ul>
                <li>
                  Most people did invest, through passive investment or through
                  an advisor
                </li>
              </ul>
            </li>
            <li>
              <h4>
                What are barriers that keep Generation Z from entering the
                investment space?
              </h4>
              <ul>
                <li>Perceived insufficient money to start investing</li>
                <li>
                  Insufficient time to learn or keep up to date with finance
                </li>
                <li>Unaware that they could contribute to a bigger Fund</li>
                <li>No influence from family education</li>
                <li>No interest</li>
              </ul>
            </li>
            <li>
              <h4>
                How much do Gen Z value control compared to convenience in
                investing?
              </h4>
              <ul>
                <li>Most people preferred convenience</li>
                <li>
                  People are divided when it comes to automatic AI driven
                  portfolios, there is a little trust
                </li>
                <li>
                  Control and transparency ultimately important, even with
                  automatic solutions
                </li>
              </ul>
            </li>
            <li>
              <h4>
                What doubts do Gen Z have about sustainable investing? What
                chances do they see in it?
              </h4>
              <ul>
                <li>
                  Doubt: Some people believe sustainable investing has a lower
                  success rate
                </li>
                <li>
                  Doubt: Most people perceive ESG as potential greenwashing
                </li>
                <li>
                  Chance: Some people perceive ESG as a good measure but with
                  room to be improved
                </li>
                <li>
                  Chance: Some people believe there is potential in sustainable
                  investing as a method to tackle climate change
                </li>
              </ul>
            </li>
            <li>
              <h4>What preferences do Gen Z have in sustainable investing?</h4>
              <ul>
                <li>
                  Startups are perceived to be more connected with real impact
                  but also more risky
                </li>
                <li>People want to make sure money goes to real impact</li>
                <li>People are split about choosing the location:</li>
                <ul>
                  <li>
                    Half of the people wouldn’t invest in corrupted countries or
                    would invest in low-income countries or specific markets
                  </li>
                  <li>
                    Half of the people don’t have a preference (’Climate doesn’t
                    stop at the border’)
                  </li>
                </ul>
                <li>Most of the people are risk-adverse</li>
                <li>
                  Some people would like to understand returns, annual growth
                  and risk to make a decision
                </li>
              </ul>
            </li>
          </ol>
        </section>
        <section className="section4">
          <h2>Section 4 – Ideation 1</h2>

          <p>
            We now started putting together the pieces from the background and
            generative research. To narrow down our focus we decided we would
          </p>
          <ol>
            <li>
              concentrate on individuals already expressing concern about
              climate change but lacking familiarity with finance, as
              traditional investors primarily driven by profit maximization
              might be challenging to engage, especially those with minimal
              concerns about climate
            </li>
            <li>
              concentrate on financed CO2 emissions as our central data to
              evaluate impact
            </li>
          </ol>

          <h3>Automatic Portfolio</h3>
          <p>
            A key insight from the financial research was the realization that
            my interest in investments grew only after grasping the underlying
            concepts. We recognized that many unfamiliar terms might seem
            uninteresting to those with little knowledge. Our initial concept,
            therefore, centered around an automated portfolio. This would be
            crafted based on user-friendly settings, resembling a robo-advisor.
            My vision for this was a clear settings page with a number of
            sliders and options to set preferences in sustainability targets,
            financial risk and focus. You would then be able to see a live
            updated overview of the automatically created mix of assets and the
            corresponding impact. Our financial investigation had indicated that
            establishing such an automated portfolio would be more feasible with
            funds rather than individual company stocks, so we decided to base
            the app on sustainably-focused funds.
          </p>

          <p>
            There were differences in opinion regarding certain settings. I
            believed it made sense to align with the format used by established
            wealth platforms in presenting financial information and to
            incorporate a risk element, allowing users to select their preferred
            level of risk for their portfolio. On the contrary, Manfredi
            preferred minimal user involvement, aiming for simplicity. This
            trend persisted throughout the project, with me advocating for user
            customizability and experimentation as a key part of the experience,
            while Manfredi aimed for a streamlined and minimalistic approach
            with a focus on clarity.
          </p>

          <h3>Data Visualization</h3>
          <p>
            At this point, we were still somewhat stuck on the data
            visualization, lacking a clear idea of how we could measure
            sustainability and what the size of the impact would be. Our ideas
            involved centering the app fully on a map view, showing water rise
            and consequent streams of refugees. Another idea was showing
            satellite-style animations of river deltas and coast-lines that
            would change depending on the level of impact. We also considered
            fully abstracted, Refik-Anadol-Style particle animations, for
            example to visualize CO2 emissions or international flights taken.
            We had set ourselves a tough challenge: finding a visualization that
            gave a clear message, could represent the impact of small-scale
            investments and would still send a strong message.
          </p>

          <p>
            Feedback in our tutorial was mixed. While the course team
            appreciated the depth of our research, they questioned the
            feasibility of the data visualization. While they could envision the
            creation of a visually appealing output, they sought a clearer
            comprehension of the tangible impact sizes, which was still unclear
            to us at that point. The team emphasized the importance of
            understanding and articulating the real-world implications of our
            work, urging us to delve deeper into the practical aspects to
            substantiate possible data sources.
          </p>
        </section>
        <section className="section5">
          <h2>Section 5 – Ideation 2</h2>

          <p>
            The uncertainties about the impact visualization we managed to
            overcome with two important steps.
          </p>

          <h3>Data Calculations</h3>
          <p>
            Firstly, we finally got a clearer picture of the data and possible
            impact of our project Initially, I had been striving to obtain
            access to data providers like Clarity AI as we had been making
            assumptions about impact sizes. However, Manfredi was hesitant,
            considering the considerable effort it would take to connect with
            and apply for full access from one of these providers. A pivotal
            moment occurred when we delved deeper into the issue and discovered
            the possibility of calculating some of this data ourselves. Using
            platforms such as fossilfreefunds.org and the publicly available
            Clarity Check from Clarity AI, we were able to conduct a comparative
            analysis of the financed emissions of various funds, including those
            earmarked as our selected green funds. Based on the data we found,
            we would assume an average reduction of 40 - 100g CO2 per 1 Dollar
            invested in our portfolio. The benchmark for this reduction is the
            MSCI ACWI Index (an index of the global economy). We believed that a
            reduction in comparison to this benchmark was sensible - the ACWI is
            a good estimate of how the money could be invested by the user’s
            bank if left in their current account. This CO2 reduction was
            consistent with a possible 25%-reduction for green funds mentioned
            on various online sources. I could be bigger if we included not just
            direct reduction of more sustainable business practices but also the
            aggregate effect of investing into sustainable development and
            innovation.
          </p>

          <p>
            See Notion{" "}
            <a
              href="https://www.notion.so/manfredidesign/CO2-Data-Fund-Selection-830a7e59949046429ba8e0f664f481f5?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            for the full data and selection of funds
          </p>

          <p>
            We also found scientific literature on CO2 emissions caused by other
            everyday behaviors such as living car-free, eating a plant-based
            diet or using a reusable shopping bag, enabling us to compare the
            investment impact to tangible actions.
          </p>

          <h3>Drawing Workshop</h3>
          <p>
            Secondly, we conducted a drawing workshop to collect people’s
            associations with CO2 Emissions. This was intended to help us
            generate ideas for the visualization. We asked 12 participants from
            12 countries, half of them from Asia, the other half from Europe, to
            draw their initial associations for the questions:
          </p>

          <ul>
            <li>If CO2 Emissions were an object, what would they be?</li>
            <li>What could be one consequence of reducing CO2 emissions?</li>
          </ul>

          <p>
            <strong>2 Possible Visualizations</strong>
          </p>

          <h4>Balloons as Visualization</h4>
          <p>
            One possibility was to visualize the volume of CO2 saved in the
            equivalent number of balloons filled with CO2. The estimates of CO2
            per 0.5 cubic foot balloon (a standard size for a party balloon)
            range from 28g to 30g.
          </p>

          <p>
            Working with 30g of CO2 per balloon, we would show the user the
            amount of balloons depending on their yearly impact. Using two
            example users with different investments, the visualization could
            be:
          </p>

          <ul>
            <li>
              <strong>USER 1</strong> ($0 start investment, $20/month top-up)
            </li>
            <ul>
              <li>after month 1: ca 3 balloons</li>
              <li>after 1 year: 216 balloons</li>
              <li>after 2 years: 616 balloons</li>
              <li>after 3 years: 1016 balloons</li>
            </ul>
            <li>
              <strong>USER 2</strong> ($5000 start investment, 0$/month top-up)
            </li>
            <ul>
              <li>8300 balloons</li>
            </ul>
          </ul>

          <h4>Ice as Visualization</h4>
          <p>
            Another possibility was the volume of ice melt prevented depending
            on the CO2 reduction. This was still somewhat abstract, but the ice
            seemed like a very impactful visual medium. To calculate the amount
            of ice melted per CO2 emitted, we can refer to a 2016
            Science-published paper by Notz & Stroeve, that establishes the
            relationship of 3 square meters melting with every 1 ton of CO2
            emitted. This is equivalent to 3 square millimeters per 1g CO2 or 30
            sq cm per 1 kg CO2.
          </p>

          <p>
            Based on this, we would show the user the following amount of ice
            they saved, as shown with the same example users:
          </p>

          <ul>
            <li>
              <strong>USER 1</strong> ($0 start investment, $20/month top-up)
            </li>
            <ul>
              <li>after month 1: 2.49cm2 of ice</li>
              <li>
                after 1 year: 195cm2 of ice (a bit smaller than an A5 paper)
              </li>
              <li>
                after 2 years: 555cm2 of ice (a bit smaller than an A4 paper)
              </li>
              <li>after 3 years: 915cm2 of ice (a 15-16inch MacBook)</li>
            </ul>
            <li>
              <strong>USER 2</strong> ($5000 start, 0$/month)
            </li>
            <ul>
              <li>0.75 m2 of ice (size of a 52’’ TV Screen)</li>
            </ul>
          </ul>

          <p>
            <strong>Reflections:</strong>
          </p>
          <p>
            A simple calculator is sometimes the most powerful tool. I was very
            happy that we had managed to get a clearer picture of our project's
            underlying data as soon as we just started digging and calculating.
            While there remained some uncertainty about the data estimates, we
            finally managed to get on grounds sufficient to further develop our
            design.
          </p>
        </section>
      </div>
    </div>
  );
}
