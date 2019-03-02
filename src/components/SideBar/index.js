//react
import React from 'react'
import { slide as Menu } from 'react-burger-menu';

//styled
import Outer from './styled/Outer'

export default props => {
	return (
		<Outer>
			<Menu>
				<a className="menu-item" href="/">Home</a>

				<a className="menu-item" href="/about">About Me</a>

				<a className="menu-item" href="/skills">Skills</a>
			</Menu>
		</Outer>
	);
};

