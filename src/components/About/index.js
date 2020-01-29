import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'
import AboutTitle from './styled/AboutTitle'

export default class About extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {}
	}

	getYears = () => {
		let today = new Date();
		var year = today.getFullYear();
		year = year - 2017;
		return year;
	}

	render() {
		let years = this.getYears();

		return (
			<Outer>
				<AboutTitle>The Man, the Myth, the Developer</AboutTitle>
			</Outer>
		)
	}
}
