import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'
import AboutBio from './styled/AboutBio'
import AboutTitle from './styled/AboutTitle'

//components
import FancyTitle from '../../styled/FancyTitle'

export default class About extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {}
	}

	getYears = () => {
		let today = new Date();
		var year = today.getFullYear();
		return year - 2017;
	}

	render() {
		let years = this.getYears();

		return (
			<Outer>
				<FancyTitle>The Man, the Myth, the Developer</FancyTitle>
				<AboutTitle>What do I do?</AboutTitle>
				<AboutBio>I am a full stack web developer located out of Columbus, Ohio. Over the last {years} years, 
					working in both the private and public sectors, I have primarily worked with C#/.NET & Core web API, React, and AngularJS. 
				</AboutBio>
				<AboutTitle>What do I do in my free time?</AboutTitle>
				<AboutBio>
					I absolutely love to cook. My favorite dish has to be Chicken Marsala. This dish has simple
					ingredients, but the final product is delicious.
				</AboutBio>
				<AboutBio>
					I also enjoy playing the guitar. I am self taught (which means not very good), and my favorite guitarist
					is John Frusciante of the Red Hot Chili Peppers. His playing style has always fascinated me, because he uses
					the triad chord progression; which is the same playing style used by Jimi Hendrix and John Mayor.
				</AboutBio>
			</Outer>
		)
	}
}
