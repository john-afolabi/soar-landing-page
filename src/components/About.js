import book from "../img/png/book.png";

export const About = (open) => {
	const template = `
    <section class="about">
    <div class="how-it-works">
        <h3>Features</h3>
        <h2>How it Works</h2>
        <div class="steps">
            <div class="step-1">
                <span>1</span>
                <h3>
                    Research & Identity
                </h3>
                <p>
                    A discovery process where we find the communities
                    that have the highest potential, and overlap with
                    your target audience.
                </p>
            </div>
            <div class="step-2">
                <span>2</span>
                <h3>
                    Plan & Target
                </h3>
                <p>
                    A planning phase where we develop a plan to
                    effectively reach the target audience across the
                    communities discovered.
                </p>
            </div>
            <div class="step-3">
                <span>3</span>
                <h3>
                    Execute Campaigns
                </h3>
                <p>
                    The implementation phase. We implement and execute
                    our marketing campaigns per the plan & target
                    community list
                </p>
            </div>
            <div class="step-4">
                <span>4</span>
                <h3>
                    Measure & Verify
                </h3>
                <p>
                    The evaluation pase. We measure the organic impact
                    we've made on the subreddit & ensure that we've
                    achieved our goal.
                </p>
            </div>
        </div>

        <button class="btn-primary">Get Started</button>
    </div>

    <div class="success-story">
        <div>
            <i></i>
            <h3>Read a success story</h3>
            <p>
                See how we drove more than 2500 users to a dating app
                with a single post
            </p>
            <i></i>
            <i></i>
            <p>Check out our Facebook & LinkedIn</p>
        </div>

        <img src="${book}" alt="testimonial-book"/>
    </div>
</section>
    `;

	return template;
};
