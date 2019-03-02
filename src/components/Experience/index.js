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
                        <img src={SoftwareGuildLogo} width={'200px'} height={'200px'}/>
                    </li>
                    <li>
                        <img src={HMBLogo} id="hmb-logo"/>
                    </li>
                    <li>
                        <img src={HomesideLogo} id="homeside-logo" />
                    </li>
                </ul>
                
            </Outer>
        )
    }
}