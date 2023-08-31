import { Box, Typography } from "@mui/material";
import { Section } from "../Section";

function ExpItem({ title, company, startDate, endDate, children }) {
  return (
    <>
      <Box>
        <Typography variant="subtitle1" component="h3">
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {company} | {startDate} - {endDate || "Present"}
        </Typography>
        <Box>
          {children}
        </Box>
      </Box>
    </>
  );
}

export function Experience() {
  return (
    <Section title="Experience">
      <ExpItem title="Senior Web Developer" company="The Institutes" startDate="Oct 2017">
        <Typography variant="body2">
          Leading provider of risk management and property-casualty insurance education
        </Typography>
        <ul>
          <li>Developed inventory-management application with React/Typescript and an ExpressJS API to replace a mission-critical legacy application</li>
          <li>Developed e-commerce, marketing, and e-learning websites in Drupal 9 and 10 that interface with a Java API and an ExpressJS API on top of an Oracle database to meet needs of various departments</li>
          <li>Developed and migrated existing Drupal sites to a standard automated deployment process, greatly simplifying deployments while allowing repos to be located in on-prem Bitbucket instance without disrupting developers</li>
          <li>Provided technical leadership on large projects with cross-departmental teams consisting of PM, BA, Devs, QA, Design, and Marketing to deliver revenue-generating products</li>
          <li>Served as a Lead Developer on several agile teams, providing mentorship on code quality and industry best practices while fostering an environment for collaboration and growth</li>
          <li>Managed fleet of over 100 Drupal websites: PHP upgrades, major Drupal version migrations, Drupal Security updates, monitoring, documentation</li>
          <li>Researched, vetted, presented, and championed a variety of process-improvement efforts including living style guides with Knyle Style Sheets (KSS), automated visual regression testing with BackstopJS, automated QA testing with Cypress, cloud-based hosting with Pantheon, local development with Lando, Drupal security monitoring with Lumturio, BDD with Gherkin and CucumberStudio</li>
        </ul>
      </ExpItem>
      <ExpItem
        title="Web Developer"
        company="Drupal Connect"
        startDate="Nov 2015"
        endDate="Oct 2017"
      >
        <Typography variant="body2">
          Full-Service Drupal firm offering Drupal development, design, and theming
        </Typography>
        <ul>
          <li>Developed e-commerce, marketing, and e-learning websites in Drupal 7 and 8 that interface with a legacy Oracle + PL/SQL backend</li>
          <li>Collaborated with an agile team to gather requirements, architect solutions, design UIs, write and refine tickets, estimate timelines, plan sprints, develop and test features, write developer and end-user documentation, demo changes to stakeholders, and deploy changes to production environments</li>
          <li>Directed sessions for onboarding, brainstorming, pair programming, code review, and knowledge sharing to produce gelled development teams with high velocity and code quality</li>
          <li>Managed projects developed by agencies and third-party contractors to ensure code quality and consistency</li>
        </ul>
      </ExpItem>
      <ExpItem
        title="Web Developer"
        company="D'Vinci Interactive"
        startDate="Aug 2014"
        endDate="Aug 2015"
      >
        <Typography variant="body2">
          E-Learning Solutions Provider for government, medical, non-profit, and K-12 markets
        </Typography>
        <ul>
          <li>Developed and maintained an array of educational websites built in a variety of PHP frameworks including Drupal 7, CodeIgniter, Wordpress, and Laravel</li>
          <li>Created custom features, modules, themes and UI-kits to meet specific client needs</li>
          <li>Gathered project requirements, provided project plans and estimates, created wireframes and mockups, met with clients to review active development efforts</li>
        </ul>
      </ExpItem>
    </Section>
  );
}
