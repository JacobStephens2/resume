import React from "react"
import "./remedy.css"
import "./style.css"
import Seo from "../components/seo"

const ResumePage = () => {
  return (
    <>
      <Seo
        title="Jacob Stephens Resume"
        description="Jacob Stephens Resume"
        image="../images/stewardgoods-icon.png"
        pathname="/"
      />

      <section className="content">
        <h1>Jacob Stephens</h1>
        <p>
          <a href="https://stewardgoods.com">stewardgoods.com</a>
           | 
          <a href="mailto:jacob@stewardgoods.com">jacob@stewardgoods.com</a>
           | 
          <a href="tel:484-356-7773">484.356.7773</a>
        </p>

        <h2>Work</h2>

        <h3>Full-Stack Web Developer</h3>
        <p>
          <a href="https://stewardgoods.com/">Steward Goods</a> | Mar 2020 –
          Present
        </p>
        <ul>
          <li>
            <a href="https://dana4wvt.com">Developed</a> progressive web app for
            a township supervisor campaign with&nbsp;React.js
          </li>
          <li>
            <a href="https://stewardgoods.com">Optimized</a> sites, attaining
            perfect scores on Google's Core Web Vitals Lighthouse
            8.5.1&nbsp;tests
          </li>
          <li>
            <a href="https://chestercounty-life.com">Implemented</a> PCI
            compliant subscription functionality on website with&nbsp;Stripe
          </li>
          <li>
            <a href="https://goodnesscreative.gatsbyjs.io">Refined</a> a
            parallax effect in web design brainstorming with&nbsp;SASS
          </li>
          <li>
            <a href="https://biomasscontrols.com">Expanded</a> pages, sections,
            and content on sites
          </li>
          <li>
            <a href="https://brandywineoak.com">Improved</a> text readability of
            web apps by following WCAG
          </li>
          <li>
            <a href="https://artifacts.stewardgoods.com">Engineered</a> a
            content management system using PHP and&nbsp;MySQL 
          </li>
          <li>
            <a href="https://jacobcstephens.com">Increased</a> the performance
            of a WordPress site 60% by making it headless with&nbsp;Gatsby.js
          </li>
          <li>
            <a href="https://15east.gatsbyjs.io">Creating</a> web app to match
            company style&nbsp;guide
          </li>
          <li>
            <a href="https://coachscall.gatsbyjs.io">Producing</a> a progressive
            web app for an athletic mentoring program with&nbsp;Bootstrap
          </li>
        </ul>
        <h3 id="graphic-designer">Graphic Designer</h3>
        <p>
          <a href="https://stewardgoods.com/">Steward Goods</a> | Sep 2019 –
          Present
        </p>
        <ul>
          <li>
            <a href="https://stewardgoods.com/corsage-removal-with-photoshop/">
              Edited
            </a>{" "}
            photos with Photoshop, making photos usable in new&nbsp;contexts
          </li>
          <li>
            <a href="https://stewardgoods.com/two-person-agile-product-development-flowchart/">
              Planned
            </a>{" "}
            content layouts with InDesign, capturing complex ideas
            in&nbsp;diagrams
          </li>
          <li>
            <a href="https://stewardgoods.com/montgomery-school-map/">Drew</a>{" "}
            illustrations with Illustrator, making spaces more&nbsp;navigable
          </li>
          <li>
            <a href="https://chestercounty-life.com/past-issues/#pdf-chester-county-life-september-october-2021/1/">
              Designed
            </a>{" "}
            products according to style guides, keeping branding consistent
            through&nbsp;materials
          </li>
        </ul>

        <h3>Ecommerce Business Owner</h3>
        <p>
          <a href="https://stewardgoods.com/">Steward Goods</a> | May 2018 – Mar
          2020
        </p>
        <ul>
          <li>
            Bought items in bulk from people liquidating their&nbsp;possessions
          </li>
          <li>Sold items individually through online&nbsp;retail</li>
          <li>
            Operated an online store and facilitated over $35,000 of board game
            sales, plus more in other&nbsp;categories
          </li>
        </ul>

        <h3>Computer Support Analyst</h3>
        <p>Alvernia University | May 2018 – Nov 2018</p>
        <ul>
          <li>Fixed people's computer problems remotely and&nbsp;on-site</li>
          <li>Maintained campus computers through&nbsp;re-imaging</li>
          <li>Managed technology&nbsp;inventory</li>
        </ul>

        <h3>Computer Technician</h3>
        <p>Kingdom Supply | Jan 2018 – Sep 2018</p>
        <ul>
          <li>Refurbished electronics</li>
          <li>
            Collected and analyzed refurbishing department data using&nbsp;Excel
          </li>
          <li>
            Created imaging process to speed up new employee computer&nbsp;setup
          </li>
        </ul>

        <h3>Sales Associate</h3>
        <p>Weaver's Orchard Farm Market | Jun 2010 – Nov 2016</p>
        <ul>
          <li>
            Created data driven system to aid in market stand
            product&nbsp;selection
          </li>
          <li>Sold produce</li>
          <li>Cared for plants</li>
          <li>Reorganized storage to increase ease of&nbsp;use</li>
        </ul>

        <h2>Education</h2>

        <h3>DevOps Engineer Certificate</h3>
        <p>LinkedIn Learning | In Progress</p>

        <h3>Full-Stack Developer Certificate</h3>
        <p>LinkedIn Learning | Oct 2021</p>

        <h3>CompTIA A+ IT Technician Certification</h3>
        <p>Berks Technical Institute | Aug 2017 – Nov 2017</p>

        <h3>Bachelor of Arts in Sociology</h3>
        <p>Gordon College | Aug 2012 – Aug 2017</p>

        <h2>Skills</h2>
        {/* 15 skills (limit to 15) */}
        <section className="skill-list">
          <li>JavaScript (ES6+)</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React.js</li>
          <li>SQL</li>
          <li>Gatsby.js</li>
          <li>PHP</li>
          <li>Git</li>
          <li>WordPress</li>
          <li>Core Web Vitals</li>
          <li>PCI compliance</li>
          <li>WCAG</li>
          <li>Photoshop</li>
          <li>InDesign</li>
          <li>Illustrator</li>
        </section>
      </section>
    </>
  )
}

export default ResumePage
