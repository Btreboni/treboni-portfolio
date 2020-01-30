import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//components
import Company from './components/Company/'
import FancyTitle from '../../styled/FancyTitle'

//images
import SoftwareGuildLogo from './images/software-guild-logo-copy.png'
import HomesideLogo from './images/homeside-logo.png'
import HMBLogo from './images/hmb-logo.png'
import TosLogo from './images/tos-logo.png'

//image links
const sgLink = "https://www.thesoftwareguild.com/gateway/?utm_medium=ppc&utm_source=google&tid=2805597&utm_campaign=Gateway_B_Search&utm_term=the%20software%20guild&utm_content=c_g_e_64082140246_329155038136&gclid=Cj0KCQiAk-7jBRD9ARIsAEy8mh6PqoEpxWNYzWel7TwgONptJN0oMWQFK9LWkorSnb0IxJJTY3JPMaIaAn-wEALw_wcB";
const hmbLink = "https://www.hmbnet.com/";
const homesideLink = "https://www.gohomeside.com/";
const tosLink = "https://opcs.ohio.gov/";

//company role description arrays
const hmbRoles = [
    { key: 0, description: "As a Consultant, I had the opportunity to work with the Ohio Treasury on the Ohio Pooled Collateral System (OPCS)." },
    { key: 1, description: "A fast paced work environment, surrounded by industry professionals with an average of 10+ years experience." }
];

const tosRoles = [
    { key: 0, description: "OPCS allows local governments to have access to information regarding the collateral pledged by their participating financial institutions on a daily basis. OPCS seeks to reduce the administrative burden on local governments while protecting public deposits." }
];

const tosTech = [
    { key: 0, description: "C#" },
    { key: 1, description: "AngularJs" },
    { key: 2, description: "Sql Server" },
    { key: 3, description: "Rabbit MQ" },
    { key: 4, description: "Crystal Reports" },
    { key: 5, description: "Microsoft Azure" }
];

const hsRoles = [
    { key: 0, description: "As a Jr. Developer, my primary role is to work with business leaders to design and build new web services to improve efficiency." },
    { key: 1, description: "Mentored by the Slayer of Null Reference Exceptions, first of his name." },
    { key: 2, description: "Nominated to Homeside’s Employee Advisory Council to represent the Software Development & Design department." },
    { key: 3, description: "Worked with leadership to understand program requirements and translate those requirements into technical designs." },
    { key: 4, description: "Using React.js, C#/.NetCore, SqlServer, and REST Web API, designed and deployed a web service that served as an employee Portal (Launch). This web application was used to create Flyers for Realtors, and executed CRUD features for Homeside Branch, Employee, Company License, Realtor, and Leadership data." },
    { key: 5, description: "Using REST Web API, designed and deployed a Funding Manager web service that imported mortgage loan data from Encompass (our Loan Origination System), and built Warehouse Bank specific excel sheets and imports .pdfs that are sent to Warehouse Banks for mortgage loan detail approval." },
    { key: 6, description: "Designed database tables to supplement back end data and provide custom functionality." },
    { key: 7, description: "Wrote SQL, DAL, DAO, and business layer code to access, aggregate, and modify back end data." },
    { key: 8, description: "Worked in an agile environment with weekly design/architecture meetings for future projects." }
];

const hsTech = [
    { key: 0, description: "C#/.NetCore" },
    { key: 1, description: "React JS" },
    { key: 2, description: "Sql Server" },
    { key: 3, description: "Encompass API/SDK" },
    { key: 4, description: "Microsoft Azure" }
];

const sgRoles = [
    { key: 0, description: "http://treasurer.ohio.gov/OPCS" }
    
];

export default class Experience extends PureComponent {
    render() {
        return (
            <Outer>
                <FancyTitle>Experience</FancyTitle>
                <Company link={hmbLink} 
                    image={HMBLogo} 
                    id={"hmb-logo"} 
                    alt={"logo"} 
                    toDate={"10/2018"} 
                    fromDate={"Present"}
                    city={"Westerville"}
                    state={"Ohio"}
                    textList={hmbRoles}>
                </Company>

                <Company link={tosLink} 
                    image={TosLogo} 
                    id={"tos-logo"}
                    alt={"logo"}
                    toDate={"10/2018"}
                    fromDate={"01/2020"}
                    city={"Columbus"}
                    state={"Ohio"}
                    techList={tosTech}
                    textList={tosRoles}>
                </Company>                           

                <Company link={homesideLink}
                    image={HomesideLogo} 
                    id={"homeside-logo"} 
                    alt={"logo"} 
                    toDate={"09/2017"} 
                    fromDate={"10/2018"}
                    city={"New Albany"}
                    state={"Ohio"}
                    techList={hsTech}
                    textList={hsRoles}>
                </Company>

                <Company link={sgLink} 
                    image={SoftwareGuildLogo} 
                    id={"sg-logo"} 
                    alt={"logo"} 
                    toDate={"05/2017"} 
                    fromDate={"08/2017"}
                    city={"Akron"}
                    state={"Ohio"}
                    // techList={}
                    textList={sgRoles}>
                </Company>
            </Outer>
        )
    }
}