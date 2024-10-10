export const SecondColumn = ({ strings }) => {
	return (
		<section className="second__column">
			<div className="container__name">
				<div className="container__name-title">{strings.myName}</div>
				<div className="container__name-subtitle">Front-End Developer</div>
			</div>
			<div className="container__about">
				<div className="container__about-title container__title">
					{strings.aboutTitle}
				</div>
				<div className="container__about-text">{strings.aboutInner}</div>
			</div>
			<div className="container__projects">
				<div className="container__projects-title container__title">
					{strings.projectsTitle} &nbsp;
					<span className="container__bold-upper-subname">
						({strings.projectsSubtitle})
					</span>
				</div>
				<ul className="container__projects-text">
					<li className="project-inner">
						<span className="container__bold-upper-name">
							<a
								className="project-inner-link"
								href="https://github.com/gusap9/aston-react-app"
								target="_blank"
								rel="noreferrer"
							>
								Recipe Finder &nbsp;
								<span className="container__bold-upper-subname">
									| React (RTK + RTK Query + Firebase)
								</span>
							</a>
						</span>
					</li>
					<li className="project-inner">
						<span className="container__bold-upper-name">
							<a
								className="project-inner-link"
								href="https://github.com/gusap9/simple-hotels-search"
								target="_blank"
								rel="noreferrer"
							>
								Hotels Search &nbsp;
								<span className="container__bold-upper-subname">| React</span>
							</a>
						</span>
					</li>
					<li className="project-inner">
						<span className="container__bold-upper-name">
							<a
								className="project-inner-link"
								href="https://github.com/gusap9/gem-puzzle"
								target="_blank"
								rel="noreferrer"
							>
								Gem-Puzzle &nbsp;
								<span className="container__bold-upper-subname">
									| HTML, CSS, JavaScript
								</span>
							</a>
						</span>
					</li>
					<li className="project-inner">
						<span className="container__bold-upper-name">
							<a
								className="project-inner-link"
								href="https://github.com/gusap9/todo"
								target="_blank"
								rel="noreferrer"
							>
								To-Do List &nbsp;
								<span className="container__bold-upper-subname">| React</span>
							</a>
						</span>
					</li>
					<li className="project-inner">
						<span className="container__bold-upper-name">
							<a
								className="project-inner-link"
								href="https://github.com/gusap9/audioplayer"
								target="_blank"
								rel="noreferrer"
							>
								Audioplayer &nbsp;
								<span className="container__bold-upper-subname">
									| HTML, CSS, JavaScript
								</span>
							</a>
						</span>
					</li>
					<li className="project-inner">
						<span className="container__bold-upper-name">
							<a
								className="project-inner-link"
								href="https://github.com/gusap9/online-zoo"
								target="_blank"
								rel="noreferrer"
							>
								Online Zoo &nbsp;
								<span className="container__bold-upper-subname">
									| HTML, CSS, JavaScript
								</span>
							</a>
						</span>
					</li>
					<li className="project-inner">
						<span className="container__bold-upper-name">
							<a
								className="project-inner-link"
								href="https://github.com/gusap9/portfolio_rsschool"
								target="_blank"
								rel="noreferrer"
							>
								Artist Portfolio &nbsp;
								<span className="container__bold-upper-subname">
									| HTML, CSS, JavaScript
								</span>
							</a>
						</span>
					</li>
					<li className="project-inner">
						<span className="container__bold-upper-name">
							<a
								className="project-inner-link"
								href="https://github.com/gusap9/page_about_CSS"
								target="_blank"
								rel="noreferrer"
							>
								First Project &nbsp;
								<span className="container__bold-upper-subname">
									| HTML, CSS, JavaScript
								</span>
							</a>
						</span>
					</li>
				</ul>
			</div>
			<div className="container__work">
				<div className="container__work-title container__title">
					{strings.workTitle}
				</div>
				<div className="container__work-text">
					{strings.workItems.map((el, index) => (
						<div key={index} className="container__work-inner">
							<div className="container__bold-upper-name">
								{el.name} &nbsp;
								<span className="container__bold-upper-subname">
									{el.stack && `| ${el.stack}`}
								</span>
							</div>
							<div className="container__bold-upper-subname">{el.place}</div>
							<div className="container__period">({el.range})</div>
						</div>
					))}
				</div>
			</div>
			<div className="container__education">
				<div className="container__education-title container__title">
					{strings.educationTitle}
				</div>
				<div className="container__education-text container__work-text">
					{strings.educationItems.map((el, index) => (
						<div key={index} className="container__education-inner">
							<div className="container__bold-upper-name">
								{el.name} &nbsp;
								<span className="container__bold-upper-subname">
									{el.place && `| ${el.place}`}
								</span>
							</div>
							<div className="container__period">{el.range}</div>
						</div>
					))}
				</div>
			</div>
			<div className="container__courses">
				<div className="container__courses-title container__title">
					{strings.coursesTitle}
				</div>
				<div className="container__courses-text container__work-text">
					{strings.coursesItems.map((el, index) => (
						<div key={index} className="container__education-inner">
							<div className="container__bold-upper-name">
								{el.name} &nbsp;
								<span className="container__bold-upper-subname">
									{el.place && `| ${el.place}`}
								</span>
							</div>
							<div className="container__period">({el.range})</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
