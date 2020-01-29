import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//components
import Company from './components/Company/'
import FancyTitle from '../../styled/FancyTitle'

//images
import SoftwareGuildLogo from './images/software-guild-logo.png'
import HomesideLogo from './images/homeside-logo.jpg'
import HMBLogo from './images/hmb-logo.png'
import TosLogo from './images/tos-logo.png'

const sgLink = "https://www.thesoftwareguild.com/gateway/?utm_medium=ppc&utm_source=google&tid=2805597&utm_campaign=Gateway_B_Search&utm_term=the%20software%20guild&utm_content=c_g_e_64082140246_329155038136&gclid=Cj0KCQiAk-7jBRD9ARIsAEy8mh6PqoEpxWNYzWel7TwgONptJN0oMWQFK9LWkorSnb0IxJJTY3JPMaIaAn-wEALw_wcB";
const hmbLink = "https://www.hmbnet.com/";
const homesideLink = "https://www.gohomeside.com/";
const tosLink = "https://opcs.ohio.gov/";

export default class Experience extends PureComponent {
    render() {
        return (
            <Outer>
                <FancyTitle>Experience</FancyTitle>
                <Company link={sgLink} image={SoftwareGuildLogo} id={"sg-logo"} alt={"logo"}>
                    Testing Testing Testing
                </Company>
                <Company link={hmbLink} image={HMBLogo} id={"hmb-logo"} alt={"logo"}/>
                <Company link={homesideLink} image={HomesideLogo} id={"homeside-logo"} alt={"logo"}/>
                <Company link={tosLink} image={TosLogo} id={"tos-logo"} alt={"logo"}/>
            </Outer>
        )
    }
}