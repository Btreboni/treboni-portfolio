import React, { PureComponent } from 'react'

//styled
import Outer from './styled/Outer'
import Inner from './styled/Inner'

export default class Footer extends PureComponent {
	render() {
		return (
			<Outer>
				<Inner>
					<ul>
						<li>
							<a href="https://www.facebook.com/profile.php?id=12332416" className="fa fa-facebook" />
						</li>
						<li>
							<a href="https://www.linkedin.com/in/burke-treboni-39573666/" className="fa fa-linkedin" />
						</li>
						<li>
							<a href="https://github.com/Btreboni?tab=repositories" className="fa fa-github" />
						</li>
					</ul>
				</Inner>
			</Outer>
		)
	}
}