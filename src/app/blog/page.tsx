import React from "react";
import "../../sass/main.sass";

export default function page() {
  return (
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
        For the pitch website go to{" "}
        <a href="For the pitch website see https://glace.earth" target="_blank">
          For the pitch website see https://glace.earth
        </a>
      </p>
      <section className="section1">
        <h2>Section 1 – Topic Finding</h2>
        <h3>Team Selection</h3>
        <p>
          Manfredi and I decided early on that we would work together because we
          knew our interests aligned and we functioned well together as a team,
          bouncing ideas off each other and challenging our individual
          perspectives. Manfredi brings valuable expertise in UI design, honed
          through his work on Fundvis, a fintech startup dedicated to digitizing
          the fund industry, as well as Weply, a sports marketplace app he
          co-founded.
        </p>
        <h3>Topic Finding</h3>
        <p>
          Recognizing the chance to devote several months to a single subject,
          we understood the importance of selecting the right topic. (As with
          most projects on this MA, looking back the choice of direction seems
          like a piece of cake in hindsight but was one of the most challenging
          aspects of the process)
        </p>
        <p>My personal priorities for the project were the following:</p>
        <ul>
          <li>The outcome would be useful in a real world application.</li>
          <li>It could run as a potentially profitable business.</li>
          <li>The process would showcase our skills in our portfolio.</li>
          <li>The project would follow principles of sustainability.</li>
        </ul>
        <p>
          We gathered an overview of trends and developments or the 2020s decade
          as an inspiration for topics. Those trends included an increased share
          of elderly people in the population, a rise of generative AI and
          Augmented Reality devices as well as the increasingly urgent demand
          for sustainable alternatives.
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
            Reworking online comments from the traditional list view into a new
            network visualisation, enabling more intuitive understanding of
            comments’ connections, similarities and popularity as well as online
            opinion in general
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
          change and sustainability within our own generation, Gen Z, surpassing
          the levels observed in previous generations. Having worked on climate
          change-related topics in previous projects, I noticed a saturation of
          awareness and educational campaigns, leaving people feeling largely
          overwhelmed by the issue. So we decided to approach it from a
          different angle.{" "}
        </p>
        <p>
          Using his background in the fund industry, Manfredi highlighted a
          growing shift towards sustainability in the realm of finance. Despite
          the increasing interest among Generation Z in investment
          opportunities, driven by online brokers and the surge in
          cryptocurrencies, we noticed a lack of awareness regarding the
          potential positive impact of investing money. We found ourselves
          within a generation genuinely committed to making a difference, poised
          to become the next wave of investors, yet many were unaware of the
          transformative impact their investment choices could bring.
        </p>
      </section>
      <section className="section2">
        <h2>Section 2 – Background Research & Literature Review</h2>
        <p>So we arrived at our research question:</p>
        <p>
          <b>
            How might we employ design to inspire Generation Z to use the power
            of money for sustainable impact?
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
          vision was to redirect the focus towards the impact and the notion of
          care, employing techniques such as storytelling, vibrant
          visualization, and gamification. Our intention was to craft a design
          that resonated with those unfamiliar with finance, offering a seamless
          entry point through fixed subscription plans or remarkably low initial
          investment amounts.
        </p>
        <p>
          We started approaching the topic through literature and online
          research to gain a more profound understanding of the context we were
          addressing.
        </p>
        <h3>
          Financial research – For full research see the{" "}
          <a
            href="https://www.notion.so/manfredidesign/Financial-Background-Research-4d23258714a34077956e9084e3fa9677?pvs=4"
            target="_blank"
          >
            Notion
          </a>
        </h3>
        <p>
          We wanted to get a sufficient sense of how the financial
          back-structure of the platform could work. I set out to evaluate a few
          different investment vehicles we could use, including beyond the
          traditional stocks, funds and bonds also sustainable start-ups, solar
          parks, wind farms, agricultural projects and peer-to-peer funding for
          residential solar energy. Considering company stocks, some of the most
          innovative companies were truly fascinating to me, such as{" "}
          <a href="https://lanzatech.com/" target="_blank">
            LanzaTech
          </a>{" "}
          who transform captured carbon into fuels, chemicals and clothing or{" "}
          <a href="https://3xn.com/" target="_blank">
            3XN
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
          criticized for arbitrariness and bureaucratic complexity. However, we
          found a growing industry seeks to enhance the reliability and
          trustworthiness of sustainability ratings. Firms include{" "}
          <a href="https://clarity.ai/" target="_blank">
            Clarity AI
          </a>
          ,{" "}
          <a href="https://www.refinitiv.com/" target="_blank">
            Refinitiv
          </a>{" "}
          ,{" "}
          <a href="http://truvaluelabs.com/" target="_blank">
            Truvalue Labs
          </a>{" "}
          and{" "}
          <a href="https://www.esgbook.com/" target="_blank">
            ESG Book
          </a>
          . We were particularly impressed with Clarity AI because it offers
          data on both funds and companies, assessing their alignment with the
          UN Sustainable Development Goals and tracking CO2 emission. It also
          provides a nuanced evaluation of portfolio impact, visualising it in
          tangible measures such as equivalent flights saved or equivalent
          household water consumption saved.
        </p>
        <h3>
          Competitor Analysis – full documentation{" "}
          <a
            href="https://www.notion.so/manfredidesign/Competitors-Inspirations-0b819b85a8e54e3981903bf4d2373e1e?pvs=4"
            target="_blank"
          >
            Notion
          </a>
        </h3>
        <p>
          To understand the existing sustainability finance landscape, we looked
          at existing solutions. Those were investment platforms of different
          types: direct crowdfunding for sustainable energy projects,
          traditional brokers with sustainability features, platforms targeted
          to specific user groups (e.g. female-focussed investment) up to fully
          automated robo-advisors. We evaluated both their financial blueprint
          and their front end design.
        </p>
        <p>All firms we looked at:</p>
        <ul>
          <li>
            <a href="https://www.tomorrow.one/" target="_blank">
              Tomorrow Bank
            </a>
          </li>
          <li>
            <a href="https://en.moniflo.com/" target="_blank">
              Moniflo{" "}
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
            href="https://www.notion.so/manfredidesign/Gen-Z-and-Relation-to-Climate-Change-9b6cccd5b8a6470d9502c3505691844d?pvs=4 "
            target="_blank"
          >
            here
          </a>{" "}
          and{" "}
          <a
            href="https://www.notion.so/manfredidesign/Value-of-Money-for-Gen-Z-a1dd9b6b369c402cbb24f6f18cfa5af7?pvs=4 "
            target="_blank"
          >
            here
          </a>
        </h3>
        <p>
          Generation Z, born between 1995 and 2010, constitutes around 26% of
          the global population. They are distinguished by their status as
          digital natives immersed in the internet, mobile technology, apps, and
          social networks. Research confirmed our initial impression that this
          generation was generally more active in sustainable behaviours and
          willing to pay more for eco-friendly products.
        </p>
      </section>
    </div>
  );
}
