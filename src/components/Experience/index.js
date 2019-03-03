import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//images
import SoftwareGuildLogo from './software-guild-logo.png'
import HomesideLogo from './homeside-logo.jpg'
import HMBLogo from './hmb-logo.png'


export default class Experience extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Outer>
                <h2>Experience</h2>
                <ul>
                    <li>
                        <img src={SoftwareGuildLogo} id="sg-logo" alt="logo" />
                    </li>
                    <li>
                        <img src={HMBLogo} id="hmb-logo" alt="logo" />
                    </li>
                    <li>
                        <img src={HomesideLogo} id="homeside-logo" alt="logo" />
                    </li>
                </ul>

            </Outer>
        )
    }
}