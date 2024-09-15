// src/pages/Home.tsx
import React from 'react';
import WorkExperience from './WorkExperience';
import ExperiencePage from './ExperiencePage';

const WorkExpereincePage: React.FC = () => {
    const workExperiences = [
        {
            companyName: 'Aubay | Critical TechWorks.',
            duration:'01/2024 - Present',
            entitle: 'Senior Consultant',
            location:'Lisbon, Portugal',
            companyLogo: '',
            projects: [
              {
                title: 'MCO - Multi channel Offers',
                role: 'Java Backend Developer with end-to-end responsibilities from development to deployment',
                details: [
                  'Independently developed the new microservice using Qurkus framework to onboard new channel in the MCO project.',
                  'implemented the Quarkus Cache mechanism to prevent redundant requests, improving application performance.',
                  'Conducted code reviews and implemented best practice with SOLID principles, leveraging static code analyzer via SonarQube.',
                  'Involved in AWS cost optimization, We leverage AWS cost optimization tools to scale down unused resources and reduce costs, all while ensuring that the existing application continued to run smoothly.',
                  'AWS: Automated the enabling of the AWS RDS `pgaudit` extension using Terraform, streamlining the process and enhancing our database auditing capabilities',
                  'Agile Methodology: Working in an Agile model with 2-week sprints, including sprint planning, sprint refinements, standups and retrospectives. Also responsible for presenting our work during the sprint reviews.',
                  'Worked on OpenTelemetry and Jaeger for distributed tracing and monitoring of our microservices. Was responsible for creating some regex patterns for our response payloads in our OpenTelemetry configuration so that we can only send the matrices what we want to see on the Splunk dashboard',
                  'We conduct some brainstorming sessions to understand underlying complexities of the tasks, identify bottlenecks, design, and implement solutions.',
                  'Frontend: Took on the challenge of implementing Cypress code coverage for the frontend and generated the report for integration with Sonar.',
                  'Optimized the frontend app using lightspeed devtool metrices.',
                ],
              },
              {
                title: 'Quarkus Migration',
                role: 'Java Developer',
                details: [
                  'Independently managed the migration of our services from Quarkus 2 to Quarkus 3 within one sprint..',
                  'Gracefully handled the major impact of Hibernate-ORM during this migration by following the migration guide.',
                  'Addressed a significant issue related to custom serialization/deserialization written using JSON-B binding, ensuring no impact on the current functionality of the application.',
                  'Fixed unit tests and integration tests associated with this change.',
                  'DevOps: Experienced with Docker and DevOps practices. I have used tools like Terraform to perform this on AWS for any resource modification/addition.'
                ],
              }
            ],
          },
        {
          companyName: 'Citicorp Services Private Ltd.',
          duration:'10/2019 - 01/2024',
          entitle: 'Java Fullstack developer',
          location:'Pune, India',
          companyLogo: '',
          projects: [
            {
              title: 'Citi Ventures',
              role: 'AVP',
              details: [
                'Migrated Angular application to React 16.',
                'Integrated Memcached distributed caching systems.',
                'Involved in creating the lightspeed jenkins pipeline to automate build and deployment.',
                'Involved in remediating vulnurablaities reported in BlackDuck and Sonarqube scan',
                'Optimized the frontend app using lightspeed devtool metrices.',
              ],
            }
          ],
        },
        {
          companyName: 'Mphasis',
          duration:'10/2018 - 10/2019',
          entitle: 'Module Lead',
          location:'Pune, India',
          companyLogo: '',
          projects: [
            {
              title: 'Alternative Investment services',
              role: 'Module Lead',
              details: [
                'Worked on enterprise applications.',
                'Enhanced user interfaces.',
                'Provided technical support.',
              ],
            },
          ],
        },
        {
            companyName: 'Accenture, India',
            duration:'01/2014 - 10/2018',
            entitle: 'Team Lead',
            location:'Pune, India',
            companyLogo: '',
            projects: [
              {
                title: 'COX & Communication',
                role: 'Team Lead',
                details: [
                  'Designed and developed the application using spring boot, spring data, oracle, Angular 2 framework along with HTML5, CSS3, Type Script, Java Script, Bootstrap, PrimeNG',
                  'Enhanced user interfaces.',
                  'Optimized backend services.',
                  'Involved in Architecturing the  Monotlithick application to Microservice based application'
                ],
              },
              {
                title: 'E-Licensing System Implementation, Massachusett',
                role: 'Senior Software Engineer(Accela developer)',
                details: [
                  'Designed and developed a Portal (KRDH) for the State of Karnataka to provide a resident data hub for the state citizens. It was designed to provide all the latest news and schemes introduced by the State Government. Feature implementations done on UI front for module demos.',
                  'Worked on E-Licensing System Implementation for State of Massachusett using a well known civic platform called Accela. Developed Scripts in JavaScript that helps Accela tools to generate SSN/License/Permit related records'
                ],
              },
            ],
          },
          {
            companyName: 'Entrata',
            duration:'07/2012 - 01/2014',
            entitle: 'Software Engineer',
            location:'Pune, India',
            companyLogo: '',
            projects: [
              {
                title: 'Rental Property Solution',
                role: 'Software Engineer',
                details: [
                  'Design & developed property solution web app, a Rental domain asset for property managers to automate the rental system for them.',
                ],
              },
            ],
          },
          {
            companyName: 'Smartdata Enterprises',
            duration:'06/2011 - 07/2012',
            entitle: 'Software Engineer',
            location:'Nagpur, India',
            companyLogo: '',
            projects: [
              {
                title: 'Vimbly',
                role: 'Software Engineer',
                details: [
                  'Designed & developed a project called "Vimbly" . This is designed to book the local activities happening in your city in a fastest way. It shows the available times for thousands of local activities, date ideas, and things to do any of which can be booked directly with a best price guarantee.',
                ],
              },
              {
                title: 'Easy 2 order',
                role: 'Software Engineer',
                details: [
                  'Worked in the domain of online food order management system Easy 2 order. Easy2 Order is an online web based tool that setup your own website and give your customers the opportunity to visit your store and place their orders through the internet. Like Pizza hut and Dominos that already receive their orders online.',
                ],
              },
            ],
          },
        // Add more experiences as needed
      ];
    
      return (
        <div>
         {/*  <WorkExperience experiences={workExperiences} /> */}
          <ExperiencePage />
        </div>
      );
    };

export default WorkExpereincePage;
