import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'
import BioHolder from './styled/BioHolder'

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
				<BioHolder>
					<h4>
						Out of highschool, I did not have much direction as far as what I wanted to do in terms of a career. Growing
						up, trade and service jobs became my niche, and I enjoyed working with people, so I thought I would try my hand
						at Business Management. I was lucky enough to land a position at a local bar as a cook, and began slowly working
						my way up the management ladder. Within 2 years, I was promoted to Bar Manager, and within 3 years, I was promoted
						to General Manager.
        		    </h4>
					<br />
					<h4>
						After a long 8 years in the bar business, and a total of 16 years in the service industry, I decided it was time to
						make a change. I had outgrown the lifestyle of the industry. I felt like I needed to grow, and challenge myself. I
						struggled for years trying to decided what career path would best suite me and my skills.
					</h4>
					<br />
					<h4>
						Finally, a good friend introduced me to HTML and Javascript, noting that I may enjoy it. I decided to check out a
						school up in Akron, Ohio called The Software Guild, and enrolled in their Intro to Web Development program to test
						the waters of what software development had to offer.
					</h4>
					<br />
					<h4>
						I instantly fell in love. The structure of the syntax, the difficult problem solving, and best of all, I was having fun
						doing it. What looks like chinese to others soon turned into a video game for me; play by the rules of the code and
						you win!
					</h4>
					<br />
					<h4>
						I decided to take the leap, and {years} years ago, I quit my job, moved from Columbus to Akron, and enrolled in
						the Java Development cohort at The Software Guild. What followed was 12 weeks of 6am-12pm coding sessions where I felt
						like I was drinking from a firehose. I was lucky enough to have a mentor throughout the process, and he helped me keep
						my head above water during my 3 months of madness. This was by far the hardest thing I've ever done, but hands down
						the best decision I ever made.
 		      		</h4>
				</BioHolder>
			</Outer>
		)
	}
}
