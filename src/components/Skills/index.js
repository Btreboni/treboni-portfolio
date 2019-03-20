import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'

//logos
import AngularJSLogo from './images/angularjs-logo.svg'
import AzureLogo from './images/azure-logo.png'
import CLogo from './images/c-logo.png'
import JavaLogo from './images/java-logo.png'
import ReactLogo from './images/react-logo.png'
import SqlLogo from './images/sql-logo.png'
import JSLogo from './images/js-logo.png'
import HtmlLogo from './images/html-logo.svg'


export default class Skills extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Outer>
                <h1>SKILLS</h1>
                <ul id="rowOne">
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
                <ul id="rowTwo">
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