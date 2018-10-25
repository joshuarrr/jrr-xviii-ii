import React, { Component } from 'react'
import { withRouteData } from 'react-static'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Img } from '../../components/image-loader'


export class Lumen extends Component {
  render () {
    return (
      <div className="project project-content">

        <div className="project-cover-group">
          <div className="project-cover-image">
            <Img name="portfolio/lumen/lumen-cover" />
          </div>
          <h3 className="introduction">Lumen Learning uses open educational resources (OER) to create well-designed and low-cost course materials that replace expensive textbooks in order to make great learning opportunities available to all students.</h3>
          <dl className="project-role">
            <dt>Role:</dt>
            <dd>User Research, Usability Testing, & Wireframe UI Design</dd>
          </dl>
          <dl className="project-tech">
            <dt>Tech:</dt>
            <dd>Sketch, InVision, Silverback, Google Sheets</dd>
          </dl>
        </div>

        <ul className="toc">
          <li>
            <AnchorLink
              className="toc-link"
              href="#introduction">Introduction: The Challenge
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#ux-audit">Context: UX Audit
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#audience">User Research: The Audience
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#personas">User Research: Personas
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#card-sorting">User Research: Card Sorting
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#ac">Assessment Creator
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#qe">Question Editor
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#prototypes">Clickable Prototypes
            </AnchorLink>
          </li>
        </ul>


        <section id="introduction">
          <h2>INTRODUCTION: THE CHALLENGE</h2>
          <p>Lumen’s Open Homework Manager (OHM) application enables teachers to create interactive exams and courses. It has great content but is based on a decades old open source application that has not had much design thinking put in to it. It is difficult to use and error prone, and looked like this →</p>
          <Img
            className="bordered"
            name="portfolio/lumen/lumen-old-dashboard"
          />
          <p>I was hired by Lumen to reinvigorate the OHM platform’s core features that pertain to finding questions and adding them to assessments (the Assessment Creator), and the question editor where new questions are written and existing questions are edited (the Question Editor).</p>
          <p>To do this, I worked with Lumen through a human centered design process in order to ensure that the end result was not only elegant and user friendly, but also what users actually want.</p>
        </section>


        <section id="ux-audit">
          <h2>CONTEXT: UX AUDIT</h2>
          <p>The first thing I did was take an exhaustive UX audit to understand how the application was intended to function and identify likely trouble spots.</p>
          <p>Additionally, I discussed the app with key stakeholders to establish a firm understanding of the business objectives behind the project.</p>
          <Img
            name="portfolio/lumen/lumen-audit"
          />
        </section>


        <section id="audience">
          <h2>USER RESEARCH: THE AUDIENCE</h2>
          <p>To learn about the people who actually use the product while assessing the usability of the OHM application in its original state, I:</p>
          <ul className="arrow-list">
            <li>Surveyed teachers with varying levels of experience using OHM;</li>
            <li>Ran an ethnographic field study with teachers enrolled in an OHM workshop observing natural use behaviors as new users learned the software;</li>
            <li>Ran usability tests on Lumen customers and employees and quantified results using Single Ease questions and the System Usability Scale.</li>
          </ul>
          <div className="image-row two-up">
            <figure>
              <Img
                className="bordered"
                name="portfolio/lumen/lumen-research-01"
              />
              <figcaption className="caption">Part of a completed survey.</figcaption>
            </figure>
            <figure>
              <Img
                className="bordered"
                name="portfolio/lumen/lumen-research-02"
              />
              <figcaption className="caption">Usability scores synthesized and averaged (means) serve as a baseline against future revisions.</figcaption>
            </figure>
          </div>
          <figure>
            <Img
              className="bordered"
              name="portfolio/lumen/lumen-research-03"
            />
            <figcaption className="caption">Single ease questions charted against averages. Any question that doesn’t score at least 50 is considered severe usability obstacle.</figcaption>
          </figure>
        </section>


        <section id="personas">
          <h2>PERSONAS</h2>
          <Img name="portfolio/lumen/lumen-personas-01" />
          <p>Armed with experiences and observations of actual users, ethnographic data from Lumen’s database and Google Analytics, as well as extensive conversations with stakeholders, I developed a set of six key archetypes to guide the ideation phase of the interface design and serve as the voice of the user.</p>
          <Img name="portfolio/lumen/lumen-personas-02" />
        </section>


        <section id="card-sorting">
          <h2>USER RESEARCH: CARD SORTING</h2>
          <p>In order to better understand the featureset of the application from the users’ perspective and gain empathy for their needs, I ran several card sorting exercises.</p>
          <p>Shown here is a derivation of the game Buy a Feature, where users are asked to pay imaginary points to classify a feature as either a must have, a should have, or a could have. The results loosly translate into a MoSCoW priority sort that tells us how important our users find each feature of the product.</p>
          <p>The results from each user's sort order were synthesized into a spreadsheet and each feature was then weighted according to user’s needs.</p>
          <div className="image-row three-up">
            <Img
              className="bordered"
              name="portfolio/lumen/lumen-card-sorting-01"
            />
            <Img
              className="bordered"
              name="portfolio/lumen/lumen-card-sorting-02"
            />
            <Img
              className="bordered"
              name="portfolio/lumen/lumen-card-sorting-03"
            />
          </div>
        </section>


        <section id="ac">
          <Img
            className="bordered fright small"
            name="portfolio/lumen/lumen-ac-old"
          />
          <h2>ASSESSMENT CREATOR</h2>
          <p>When a teacher using OHM wants to create a new assessment, they can browse through already written questions from many libraries of open source content and add any questions that are appropriate.</p>
          <p>Unfortunately, the process for doing that was not intuitive, and requires a lot of trial and error to acomplish simple goals. In the picture shown, a user has selected all the libraries they want to browse, then run an empty search to get a list of all the questions in those libraries, of which there are thousands.</p>

          <h3>Wireframe Sketches</h3>
          <p> To jumpstart the ideation phase, I held a mini design studio and brainstorming session with the prod- uct manager to generate a bunch of ideas up front. I then took those and create an array of alter- natives.</p>
          <Img
            className="bordered"
            name="portfolio/lumen/lumen-wireframe-sketches"
          />

          <h3>High-Fidelity Wireframes</h3>
          <Img
            className="bordered"
            name="portfolio/lumen/lumen-ac-wireframes"
          />
          <p>Having chosen a direction I took feedback from the product manager and Chief Product Officer and generated high-fidelity wireframes.</p>
          <p>After user testing it became apparent that we could not just update the ‘add and remove questions’ feature. We needed to make assessment creation easier from A-Z. Thus was born the assessment creator.</p>
          <p>Creating a new assessment is now much simpler:</p>
          <ol>
            <li>search for questions</li>
            <li>select the ones you want to add</li>
            <li>preview, add details like the assessment title, and save</li>
          </ol>
          <div className="image-row two-up">
            <figure>
              <Img
                className="bordered"
                name="portfolio/lumen/lumen-ac-01"
              />
              <figcaption className="caption">Initial view of the Assessment Creator.</figcaption>
            </figure>
            <figure>
              <Img
                className="bordered"
                name="portfolio/lumen/lumen-ac-02"
              />
              <figcaption className="caption">The Assessment Creator after the user has added questions amd is ready to save.</figcaption>
            </figure>
          </div>
          <p>In OHM, thousands of open source assessment questions are sorted into myriad libraries, and it can be a challenge sorting through them to find what you are looking for. I redesined the interface to provide several search filters. Libraries as a filter works really great and you can even search for library terms for more granularity.</p>
          <Img
            className="bordered"
            name="portfolio/lumen/lumen-ac-03"
          />
        </section>


        <section id="qe">
          <Img
            className="bordered fright small medium"
            name="portfolio/lumen/lumen-qe-old"
          />
          <h2>QUESTION EDITOR</h2>
          <p>The question editor is where all the questions in the OHM platform are generated and edited. 99% of OHM users never use this ability, but they would if it were more accessible. In its current incarnation, you have to be comfortable coding PHP to write a new question from scratch, and in order to do it well, you need to know there is a library of custom OHM macro functions. Needless to say, this page did not perform well during usability testing.</p>
          <p>My goals for this part of the project were to make it easier for highly technical people to write questions (so adding code completion and linting), and to open the door up to people with less coding experience so that they might try writing simple questions.</p>

          <h3>Wireframe Sketches</h3>
          <p>In the legacy question editor, you have to click preview before you can see your question as it is displayed to students and before you can check for errors. I knew immediately that the UI would be dramatically improved with a live preview pane. Inspired by apps such as Codepen and JSFiddle, I designed a three paned application that provides users with helpful tools such as code completion, code linting, and easy access to the OHM macros. I also designed a feature called code helpers that help you write required and optional functions.</p>
          <Img
            className="bordered"
            name="portfolio/lumen/lumen-wireframe-sketches"
          />

          <h3>High-Fidelity Wireframes</h3>
          <Img
            className="bordered"
            name="portfolio/lumen/lumen-qe1"
          />
          <p>Having chosen a direction I took feedback from the product manager and Chief Product Officer and generated high-fidelity wireframes.</p>
          <p>The question editor is now a lot easier to use, due to the inclusion of a live preview pane, code completion, error reporting, and easy access to helpers and macros.</p>
          <div className="image-row two-up">
            <figure>
              <Img
                className="bordered"
                name="portfolio/lumen/lumen-wireframe-01-qe"
              />
              <figcaption className="caption">The Question Editor initial view.</figcaption>
            </figure>
            <figure>
              <Img
                className="bordered"
                name="portfolio/lumen/lumen-wireframe-02-code-completion"
              />
              <figcaption className="caption">Code completion courtesy of the 21st century.</figcaption>
            </figure>
          </div>
          <div className="image-row two-up">
            <figure>
              <Img
                className="bordered"
                name="portfolio/lumen/lumen-wireframe-03-helpers"
              />
              <figcaption className="caption">Helpers expedite common tasks.</figcaption>
            </figure>
            <figure>
              <Img
                className="bordered"
                name="portfolio/lumen/lumen-wireframe-04-macros"
              />
              <figcaption className="caption">This macros panel enables people to research macros without the context shift of opening a new window or tab.</figcaption>
            </figure>
          </div>
          <figure>
            <Img
              className="bordered"
              name="portfolio/lumen/lumen-wireframe-05-preview"
            />
            <figcaption className="caption">A completed question showing live preview, in full-screen mode.</figcaption>
          </figure>
        </section>


        <section id="prototypes">
          <h3>CLICKABLE PROTOTYPES</h3>
          <p>After user testing the new designs, I used Marvelapp to generate a set of clickable wireframes to prototype the interactions and test their efficacy.</p>
          <div className="image-row two-up">
            <a href="https://marvelapp.com/3dbjif8/screen/35799213" target="blank" rel="noopener noreferrer">
              <Img
                className="bordered rounded"
                name="portfolio/lumen/lumen-ac-prototype"
              />
            </a>
            <a href="https://marvelapp.com/331e4h4/screen/35799284" target="blank" rel="noopener noreferrer">
              <Img
                className="bordered rounded"
                name="portfolio/lumen/lumen-qe-prototype"
              />
            </a>
          </div>
        </section>


        <section>
          <h3>RESULTS</h3>
          <p>The new designs were better than the old ones.</p>
        </section>
      </div>
    )
  }
}

export default withRouteData(Lumen)
