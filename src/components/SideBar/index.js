//react
import React, {PureComponent} from 'react'
import { slide as Menu } from 'react-burger-menu';

//styled
import Outer from './styled/Outer'
import SubMenuItem from './styled/subMenuItem'

export default class SideBar extends PureComponent {
	constructor(props){
		super(props)
		this.state={}
	}

	renderBabySitterKata(){
		this.props.babysitterKata();
	}

	render(){
		return (
			<Outer>
				<Menu>
					<a className="menu-item" href="/">Home</a>
					<a className="menu-item" href="/about">About Me</a>
					<a className="menu-item" href="/experience">Experience</a>
					<a className="menu-item" href="/katas">Coding Katas</a>
					<SubMenuItem>
						<a className="menu-item" href="/babySitterKata">Baby Sitter Kata</a>
						<a className="menu-item" href="/rockPaperScissorsKata">Rock Paper Scissors</a>
						<a className="menu-item" href="/stockPriceAvg">Average Stock Price Calculator</a>
					</SubMenuItem>
					<a className="menu-item" href="/risky">Risky Business</a>
				</Menu>
			</Outer>
		);	
	}
};

