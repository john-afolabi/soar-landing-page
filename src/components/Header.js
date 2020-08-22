import logo from "../img/svg/logo.svg";

export const Header = (open) => {
	const template = `
    <div class="mobile-nav">
			<nav class="links-nav">
				<ul>
					<li><a href="#about">About</a></li>
					<li><a href="#packages">Growth Packages</a></li>
					<li><a href="#schedule">Schedule Strategy Call</a></li>
					<li><a href="#blog">Blog</a></li>
				</ul>

				<button class="nav-cta">Sign Up</button>
			</nav>
			<button class="hamburger">menu</button>
		</div>

		<header id="home">
			<div class="header">
				<nav class="nav">
					<img src="${logo}" class="brand-logo" />

					<ul>
						<li class="nav__list">
							<a href="#about" class="nav-link">About</a>
						</li>
						<li class="nav__list">
							<a href="#packages" class="nav-link"
								>Growth Packages</a
							>
						</li>
						<li class="nav__list">
							<a href="#schedule" class="nav-link"
								>Schedule Strategy Call</a
							>
						</li>
						<li class="nav__list">
							<a href="#blog" class="nav-link">Blog</a>
						</li>
					</ul>

					<button class="nav-cta">Sign Up</button>
				</nav>

				<div class="hero-text">
					Grow with world-class Reddit marketing services
					<p>
						Achieve your marketing goals on Reddit. Go viral,
						improve your reputation & more
					</p>
					<button>Get Started</button>
				</div>

				<div class="brands">
					<img src="" alt="verge" />
					<img src="" alt="slack" />
					<img src="" alt="google" />
				</div>
				<div class="summary-text">
					<span>Start for free</span>
					<span>Add users for $10/month</span>
					<span>Add Powerful Features for less than $10/month</span>
				</div>
				<img src="" alt="reddit boost" class="hero-image" />
			</div>
		</header>
    `;

	return template;
};
