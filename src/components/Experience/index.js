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
const sgRoles = [
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development, But here is another test to see what happens."
    + " Going to keep going until i can figure out if this is working or not.",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development",
    "An intensive, fast-paced, immersive software bootcamp focused on full-stack Java development"
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
                    textList={sgRoles}>
                </Company>

                <Company link={tosLink} 
                    image={TosLogo} 
                    id={"tos-logo"}
                    alt={"logo"}
                    toDate={"10/2018"}
                    fromDate={"01/2020"}
                    textList={sgRoles}>
                </Company>                           

                <Company link={homesideLink}
                    image={HomesideLogo} 
                    id={"homeside-logo"} 
                    alt={"logo"} 
                    toDate={"09/2017"} 
                    fromDate={"10/2018"}
                    textList={sgRoles}>
                </Company>

                <Company link={sgLink} 
                    image={SoftwareGuildLogo} 
                    id={"sg-logo"} 
                    alt={"logo"} 
                    toDate={"05/2017"} 
                    fromDate={"08/2017"}
                    textList={sgRoles}>
                </Company>
            </Outer>
        )
    }
}