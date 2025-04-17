import * as React from "react";
import {lazy} from "react";
import data from '../../public/data.json'

const HeaderPortfolio = lazy(() => import('rqc-lib-react-portfolio/build/HeaderPortfolio'));
const SidesPortfolio = lazy(() => import('rqc-lib-react-portfolio/build/SidesPortfolio'));
const HomePortfolio = lazy(() => import('rqc-lib-react-portfolio/build/HomePortfolio'));
const AboutPortfolio = lazy(() => import('rqc-lib-react-portfolio/build/AboutPortfolio'));
const SkillsPortfolio = lazy(() => import('rqc-lib-react-portfolio/build/SkillsPortfolio'));
const ExperiencePortfolio = lazy(() => import('rqc-lib-react-portfolio/build/ExperiencePortfolio'));
const ProjectsPortfolio = lazy(() => import('rqc-lib-react-portfolio/build/ProjectsPortfolio'));
const ContactPortfolio = lazy(() => import('rqc-lib-react-portfolio/build/ContactPortfolio'));


const PortfolioComponent = () => {
    return (
        <div>
          <HeaderPortfolio
            logo={data.headerPortfolio.logo}
            menuHeader={data.headerPortfolio.menuHeader}
          />
          <SidesPortfolio left={data.sidesPortfolio.left} right={data.sidesPortfolio.right}/>
          <div className="content-center-sides">
            <HomePortfolio
              greeting={data.homePortfolio.greeting}
              name={data.homePortfolio.name}
              subtitle={data.homePortfolio.subtitle}
              content={data.homePortfolio.content}
              resume={data.homePortfolio.resume}
              img={data.homePortfolio.img}
            />
            <AboutPortfolio
              header={data.aboutPortfolio.header}
              image={data.aboutPortfolio.image}
              arrAbout={data.aboutPortfolio.arrAbout}
              arrThoughts={data.aboutPortfolio.arrThoughts}
            />
            <SkillsPortfolio
              header={data.skillsPortfolio.header}
              arrTech={data.skillsPortfolio.arrTech}
            />
            <ExperiencePortfolio
              header={data.experiencePortfolio.header}
              arrExp={data.experiencePortfolio.arrExp}
            />
            <ProjectsPortfolio
              header={data.projectsPortfolio.header}
              arrProjects={data.projectsPortfolio.arrProjects}
            />
            <ContactPortfolio
              header={data.contactPortfolio.header}
              phrase={data.contactPortfolio.phrase}
              content1={data.contactPortfolio.content1}
              content2={data.contactPortfolio.content2}
              buttonText={data.contactPortfolio.buttonText}
              signature={data.contactPortfolio.signature}
              buttonGoTo={data.contactPortfolio.buttonGoTo}
            />
          </div>
        </div>
    )
}

export default PortfolioComponent