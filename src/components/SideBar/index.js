//react
import React from 'react'
import { slide as Menu } from 'react-burger-menu';

//styled
import Outer from './styled/Outer'
import SubMenuItem from './styled/subMenuItem'

export default props => {
	return (
		<Outer>
			<Menu>
				<a className="menu-item" href="/">Home</a>
				<a className="menu-item" href="/about">About Me</a>
				<a className="menu-item" href="/experience">Experience</a>
				<a className="menu-item" href="/katas">Coding Katas</a>
				<SubMenuItem>
					<a className="menu-item" href="/katas/babysitter">Baby Sitter Kata</a>
				</SubMenuItem>
			</Menu>
		</Outer>
	);
};

