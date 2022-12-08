import * as React from "react";
import data from '../../public/data.json'
import { lazy } from "react";

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
            <React.Suspense fallback="Loading...">
                <HeaderPortfolio
                    logo={data.headerPortfolio.logo}
                    menuHeader={data.headerPortfolio.menuHeader}
                />
            </React.Suspense>
            <React.Suspense fallback="Loading...">
                <SidesPortfolio left={data.sidesPortfolio.left} right={data.sidesPortfolio.right} />
            </React.Suspense>
            <React.Suspense fallback="Loading...">
                <div className="content-center-sides">
                    <React.Suspense fallback="Loading...">
                        <HomePortfolio
                            greeting={data.homePortfolio.greeting}
                            name={data.homePortfolio.name}
                            subtitle={data.homePortfolio.subtitle}
                            content={data.homePortfolio.content}
                            resume={data.homePortfolio.resume}
                            img={data.homePortfolio.img}
                        />
                    </React.Suspense>
                    <React.Suspense fallback="Loading...">
                        <AboutPortfolio
                            header={data.aboutPortfolio.header}
                            pathImage={data.aboutPortfolio.pathImage}
                            arrAbout={data.aboutPortfolio.arrAbout}
                            arrThoughts={data.aboutPortfolio.arrThoughts}
                        />
                    </React.Suspense>
                    <React.Suspense fallback="Loading...">
                        <SkillsPortfolio
                            header={data.skillsPortfolio.header}
                            arrTech={data.skillsPortfolio.arrTech}
                        />
                    </React.Suspense>
                    <React.Suspense fallback="Loading...">
                        <ExperiencePortfolio
                            header={data.experiencePortfolio.header}
                            arrExp={data.experiencePortfolio.arrExp}
                        />
                    </React.Suspense>
                    <React.Suspense fallback="Loading...">
                        <ProjectsPortfolio
                            header={data.projectsPortfolio.header}
                            arrProjects={data.projectsPortfolio.arrProjects}
                        />
                    </React.Suspense>
                    <React.Suspense fallback="Loading...">
                        <ContactPortfolio
                            header={data.contactPortfolio.header}
                            phrase={data.contactPortfolio.phrase}
                            content1={data.contactPortfolio.content1}
                            content2={data.contactPortfolio.content2}
                            buttonText={data.contactPortfolio.buttonText}
                            signature={data.contactPortfolio.signature}
                            buttonGoTo={data.contactPortfolio.buttonGoTo}
                        />
                    </React.Suspense>
                </div>
            </React.Suspense>
        </div>
    )
}

export default PortfolioComponent