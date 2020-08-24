import logo from "../img/svg/logo-white.svg";

export const Footer = (open) => {
	const template = `
	<footer>
			<div class="container">
				<div class="schedule">
					<div>
						<h2>Grow across Reddit 🚀</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Fugit amet dolores laboriosam impedit id
							accusamus itaque natus nemo ex.
						</p>
					</div>
					<button class="btn-primary">
						Schedule A Service Overview
					</button>
				</div>

				<div class="main-footer">
					<div>
						<img src="${logo}" alt="soar logo"/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Sequi.
						</p>
						<img />
					</div>
					<div>
						<h4>Partners</h4>
						<p>Service Updates</p>
						<p>Become a Publisher</p>
						<p>Become a Tasker</p>
					</div>
					<div>
						<h4>Popular Services</h4>
						<p>Content Marketing Service</p>
						<p>Guest Posting Service</p>
						<p>Reddit Marketing Service</p>
						<p>Quora Marketing Service</p>
						<p>Buy Reddit Upvotes</p>
					</div>
					<div>
						<h4>Popular Services</h4>
						<p>
							Traffic Hacking Reddit - A Case Study on How We
							Generated 18,335 Visits in 1 Day
						</p>
						<p>The Best Free Tools for Reddit User Analysis</p>
					</div>
				</div>
				<p>Made by a team from ...</p>
			</div>
		</footer>
    `;

	return template;
};
