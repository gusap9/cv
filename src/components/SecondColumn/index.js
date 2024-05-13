export const SecondColumn = ({ strings }) => {
  return (
    <section className='second__column'>
      <div className='container__name'>
        <div className='container__name-title'>{strings.myName}</div>
        <div className='container__name-subtitle'>Front-End Developer</div>
      </div>
      <div className='container__about'>
        <div className='container__about-title container__title'>
          {strings.aboutTitle}
        </div>
        <div className='container__about-text'>{strings.aboutInner}</div>
      </div>
      <div className='container__projects'>
        <div className='container__projects-title container__title'>
          {strings.projectsTitle} &nbsp;
          <span className='container__bold-upper-subname'>
            ({strings.projectsSubtitle})
          </span>
        </div>
        <ul className='container__projects-text'>
          <li className='project-inner'>
            <span className='container__bold-upper-name'>
              <a
                className='project-inner-link'
                href='https://github.com/gusap9/aston-react-app'
                target='_blank'
                rel='noreferrer'
              >
                Recipe Finder &nbsp;
                <span className='container__bold-upper-subname'>
                  | React (RTK + RTK Query + Firebase)
                </span>
              </a>
            </span>
          </li>
          <li className='project-inner'>
            <span className='container__bold-upper-name'>
              <a
                className='project-inner-link'
                href='https://github.com/gusap9/simple-hotels-search'
                target='_blank'
                rel='noreferrer'
              >
                Hotels Search &nbsp;
                <span className='container__bold-upper-subname'>| React</span>
              </a>
            </span>
          </li>
          <li className='project-inner'>
            <span className='container__bold-upper-name'>
              <a
                className='project-inner-link'
                href='https://github.com/gusap9/gem-puzzle'
                target='_blank'
                rel='noreferrer'
              >
                Gem-Puzzle &nbsp;
                <span className='container__bold-upper-subname'>
                  | HTML, CSS, JavaScript
                </span>
              </a>
            </span>
          </li>
          <li className='project-inner'>
            <span className='container__bold-upper-name'>
              <a
                className='project-inner-link'
                href='https://github.com/gusap9/todo'
                target='_blank'
                rel='noreferrer'
              >
                To-Do List &nbsp;
                <span className='container__bold-upper-subname'>| React</span>
              </a>
            </span>
          </li>
          <li className='project-inner'>
            <span className='container__bold-upper-name'>
              <a
                className='project-inner-link'
                href='https://github.com/gusap9/audioplayer'
                target='_blank'
                rel='noreferrer'
              >
                Audioplayer &nbsp;
                <span className='container__bold-upper-subname'>
                  | HTML, CSS, JavaScript
                </span>
              </a>
            </span>
          </li>
          <li className='project-inner'>
            <span className='container__bold-upper-name'>
              <a
                className='project-inner-link'
                href='https://github.com/gusap9/online-zoo'
                target='_blank'
                rel='noreferrer'
              >
                Online Zoo &nbsp;
                <span className='container__bold-upper-subname'>
                  | HTML, CSS, JavaScript
                </span>
              </a>
            </span>
          </li>
          <li className='project-inner'>
            <span className='container__bold-upper-name'>
              <a
                className='project-inner-link'
                href='https://github.com/gusap9/portfolio_rsschool'
                target='_blank'
                rel='noreferrer'
              >
                Artist Portfolio &nbsp;
                <span className='container__bold-upper-subname'>
                  | HTML, CSS, JavaScript
                </span>
              </a>
            </span>
          </li>
          <li className='project-inner'>
            <span className='container__bold-upper-name'>
              <a
                className='project-inner-link'
                href='https://github.com/gusap9/page_about_CSS'
                target='_blank'
                rel='noreferrer'
              >
                First Project &nbsp;
                <span className='container__bold-upper-subname'>
                  | HTML, CSS, JavaScript
                </span>
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className='container__work'>
        <div className='container__work-title container__title'>
          {strings.workExperienceTitle}
        </div>
        <div className='container__work-text'>
          <div className='container__work-inner'>
            <div className='container__bold-upper-name'>
              {strings.workFirstName} &nbsp;
              <span className='container__bold-upper-subname'>
                | {strings.workFirstPlace}
              </span>
            </div>
            <div className='container__period'>({strings.workFirstTime})</div>
          </div>
          <div className='container__work-inner'>
            <div className='container__bold-upper-name'>
              {strings.workSecName} &nbsp;
              <span className='container__bold-upper-subname'>
                | {strings.workSecPlace}
              </span>
            </div>
            <div className='container__period'>({strings.workSecTime})</div>
          </div>
          <div className='container__work-inner'>
            <div className='container__bold-upper-name'>
              {strings.workThirdName} &nbsp;
              <span className='container__bold-upper-subname'>
                | {strings.workThirdPlace}
              </span>
            </div>
            <div className='container__period'>({strings.workThirdTime})</div>
          </div>
          <div className='container__work-inner'>
            <div className='container__bold-upper-name'>
              {strings.workFourthName} &nbsp;
              <span className='container__bold-upper-subname'>
                | {strings.workFourthPlace}
              </span>
            </div>
            <div className='container__period'>({strings.workFourthTime})</div>
          </div>
        </div>
      </div>
      <div className='container__education'>
        <div className='container__education-title container__title'>
          {strings.educationTitle}
        </div>
        <div className='container__education-text container__work-text'>
          <div className='container__education-inner'>
            <div className='container__bold-upper-name'>
              {strings.educationFirstName} &nbsp;
              <span className='container__bold-upper-subname'>
                | {strings.educationFirstPlace}
              </span>
            </div>
            <div className='container__period'>(2017 – 2021)</div>
          </div>
          <div className='container__education-inner'>
            <div className='container__bold-upper-name'>
              {strings.educationSecName} &nbsp;
              <span className='container__bold-upper-subname'>
                | {strings.educationSecPlace}
              </span>
            </div>
            <div className='container__period'>(2017 – 2021)</div>
          </div>
        </div>
      </div>
      <div className='container__courses'>
        <div className='container__courses-title container__title'>
          {strings.coursesTitle}
        </div>
        <div className='container__courses-text container__work-text'>
          <div className='container__education-inner'>
            <div className='container__bold-upper-name'>
              JavaScript/Front-End &nbsp;
              <span className='container__bold-upper-subname'>| RSschool</span>
            </div>
            <div className='container__period'>({strings.coursesSecTime})</div>
          </div>
          <div className='container__education-inner'>
            <div className='container__bold-upper-name'>
              JavaScript/Front-End Pre-School &nbsp;
              <span className='container__bold-upper-subname'>| RSschool</span>
            </div>
            <div className='container__period'>
              ({strings.coursesFirstTime})
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
