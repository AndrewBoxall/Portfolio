import React from 'react';
import './ProjectInfo.css';

//TODO//
//Implement a database to retrieve this information from.
//This works fine while project count is small.
const lamodeSummary = <div className="project-information">
  <p>Lamode Clothing is a fully functioning online clothing store.<br />
  Including user sessions and customer cart data.</p>
</div>;

const lamodeDetailed = <div className="project-information">
  <p><em>LaMode clothing</em> is an online retail clothing store.<br /><br />
  The goal of this project was to learn React JS, as well as what technologies and securities are behind creating
   and operating an online store.
  </p>
  <p>Including:</p>
  <ul className="project-goals">
    <li>The use of cookies to store a session id to match customers to their secure cart.</li>
    <li>The use of authentication and encryption methods to protect customer information.</li>
    <li>Database technology to manage orders and store purchase history.</li>
  </ul>
  <p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, CSS & Javascript.</li>
    <li>Node JS with Express.</li>
    <li>Mongo DB.</li>
    <li>AWS lightsail server with custom domain.</li>
  </ul>
</div>;

const tustinPilatesSummary = <div className="project-information">
  <p>A business website for an individual pilates instructor or small practice.<br /><br />
  Used to increase online presence and advertise class offers to clients.</p>
</div>;

const tustinPilatesDetailed = <div className="project-information">
  <p><em>Tustin Pilates</em> is a pilates website to drive business and clients to an independant instructor
  or small practice.<br /><br />
  The goal of this project was to create a single page application using Angular,
  and host the project through an AWS s3 bucket.
  </p>
  <p>Including:</p>
  <ul className="project-goals">
    <li>Using an AWS CI/CD pipe to deploy code from Github to an AWS s3 bucket.</li>
    <li>Learn Angular and SCSS.</li>
  </ul>
  <p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, SCSS & Javascript.</li>
    <li>Angular</li>
    <li>AWS CodeBuild & s3.</li>
  </ul>
</div>;

const studioTustinSummary = <div className="project-information">
  <p>A fully featured web application to be used by staff to manage a small physical therapy business.<br /><br />
  Store client information to a database. Schedule appointments to a calendar. Login and manage user profiles.</p>
</div>;

const studioTustinDetailed = <div className="project-information">
  <p><em>Studio Tustin</em> is a web application used to manage a small physical therapy business.<br /><br />
  The goal of this project was to make a real world backend business application that could be used in a work place.
  </p>
  <p>Including:</p>
  <ul className="project-goals">
    <li>CI/CD from Github to Azure App Services.</li>
    <li>Calandar model to book clients.</li>
    <li>Authentication and encryption tools to protect customer and staff information.</li>
    <li>Database technology to manage logins.</li>
    <li>Account management and privileges.</li>
  </ul>
  <p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, SCSS & Javascript.</li>
    <li>.NET & Angular</li>
    <li>Azure App Services.</li>
    <li>MS SQL DB.</li>
  </ul>
</div>;

const teacherSubHubSummary = <div className="project-information">
  <p>A mobile application used to help schools reach relief teachers
  for empty classes quickly and stress free.</p>
</div>;

export {
  lamodeSummary,
  lamodeDetailed,
  tustinPilatesSummary,
  tustinPilatesDetailed,
  studioTustinSummary,
  studioTustinDetailed,
  teacherSubHubSummary
}
