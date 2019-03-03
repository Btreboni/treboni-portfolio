import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//images
import SoftwareGuildLogo from './software-guild-logo.png'
import HomesideLogo from './homeside-logo.jpg'
import HMBLogo from './hmb-logo.png'
import TosLogo from './tos-logo.png'

const sgLink = "https://www.thesoftwareguild.com/gateway/?utm_medium=ppc&utm_source=google&tid=2805597&utm_campaign=Gateway_B_Search&utm_term=the%20software%20guild&utm_content=c_g_e_64082140246_329155038136&gclid=Cj0KCQiAk-7jBRD9ARIsAEy8mh6PqoEpxWNYzWel7TwgONptJN0oMWQFK9LWkorSnb0IxJJTY3JPMaIaAn-wEALw_wcB";
const hmbLink = "https://www.hmbnet.com/";
const homesideLink = "https://www.gohomeside.com/";
const tosLink = "https://opcs.ohio.gov/";

export default class Experience extends PureComponent {
    render() {
        return (
            <Outer>
                <h2>Experience</h2>
                <ul>
                    <li>
                        <a href={sgLink}><img src={SoftwareGuildLogo} id="sg-logo" alt="logo" /></a>
                    </li>
                    <li>
                        <a href={hmbLink}><img src={HMBLogo} id="hmb-logo" alt="logo" /></a>
                    </li>
                    <li>
                        <a href={homesideLink}><img src={HomesideLogo} id="homeside-logo" alt="logo" /></a>
                    </li>
                    <li>
                        <a href={tosLink}><img src={TosLogo} id="tos-logo" alt="logo" /></a>
                    </li>
                </ul>

            </Outer>
        )
    }
}