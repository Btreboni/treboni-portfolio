import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//logos
import AngularJSLogo from './angularjs-logo.svg'
import AzureLogo from './azure-logo.png'
import CLogo from './c-logo.png'
import GitLogo from './GitHub-Logo.png'
import JavaLogo from './java-logo.png'
import ReactLogo from './react-logo.png'
import SqlLogo from './sql-logo.png'
import JSLogo from './js-logo.png'
import HtmlLogo from './html-logo.svg'


export default class Skills extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Outer>
                <h1>SKILLS</h1>
                <ul>
                    <li>
                        <img src={ReactLogo} id="react-logo" alt="logo" />
                    </li>
                    <li>
                        <img src={CLogo} id="c-logo" alt="logo" />
                    </li>
                    <li>
                        <img src={JavaLogo} id="java-logo" alt="logo" />
                    </li>
                    <li>
                        <img src={HtmlLogo} id="html-logo" alt="logo" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={AngularJSLogo} id="ang-logo" alt="logo" />
                    </li>
                    <li>
                        <img src={JSLogo} id="js-logo" alt="logo" />
                    </li>
                    <li>
                        <img src={SqlLogo} id="sql-logo" alt="logo" />
                    </li>
                    <li>
                        <img src={AzureLogo} id="azure-logo" alt="logo" />
                    </li>
                </ul>
            </Outer>
        )
    }
}