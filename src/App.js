import './css/normalize.css'
import './css/App.css';
import './css/fonts.css';


import React, { useState } from 'react';
import mainPhoto from './img/myface.jpg';
import telegramm from './img/telegram.png';
import phone from './img/phone.png';
import email from './img/mail.png';
import github from './img/github.png';
import location from './img/location.png';


function App() {

  let rusStrings = {
    "contactsTitle": "Контакты:",
    "contactsLocation": "г. Санкт-Петербург",
    "hardSkillsGer": "Немецкий язык – C1 (продвинутый)",
    "hardSkillsEng": "Английский язык – B1 (средний)",
    "hardSkillsRus": "Русский язык – C2 (родной)",
    "softSkillsEngineer": "Инженер",
    "softSkillsMathematician": "Математик",
    "softSkillsAnalyst": "Аналитик",
    "softSkillsAssiduity": "Усидчивость",
    "softSkillsTeamwork": "Командность",
    "softSkillsPlanning": "Планирование",
    "myName": "Асауляк Никита",
    "aboutTitle": "Обо мне:",
    "aboutInner": "Я аналитически мыслю и всегда стремлюсь находить логическое решение поставленным задачам. Люблю учиться новому и преодолевать трудности, не придумывая их на пустом месте. Неконфликтный и коммуникабельный. Из хобби могу выделить футбол и большой теннис. Также люблю велопрогулки, природу и компьютерные игры.",
    "workExperienceTitle": "Опыт работы:",
    "workFirstName": "Су-Шеф",
    "workFirstPlace": "Агастиар, Санкт-Петербург",
    "workFirstTime": "март 2021 – февраль 2022",
    "workSecName": "Инженер-проектировщик",
    "workSecPlace": "Вильдау, Германия",
    "workSecTime": "май 2021 – сентябрь 2021",
    "educationTitle": "Образование:",
    "educationFirstName": "Бакалавр инженер",
    "educationFirstPlace": "Вильдау, Германия",
    "educationSecName": "Бакалавр Менеджер",
    "educationSecPlace": "СПбПУ, Санкт-Петербург",
    "coursesTitle": "Курсы:",
    "coursesFirstTime": "декабрь 2021 – март 2022",
    "coursesSecTime": "сентябрь 2022 – январь 2022",
    "coursesThirdTime": "сентябрь 2022 – декабрь 2022",
    "projectsTitle": "Проекты:",
    "projectsSubtitle": "Для перехода нажмите на название",
    "lastUpdate": "Последнее обновление: октябрь 2023",
  }

  const [gerActive, setGerActive] = useState(false)
  const [rusActive, setRusActive] = useState(true)
  const [engActive, setEngActive] = useState(false)

  const [strings, setString] = useState(rusStrings)
  const changeLangOnRus = () => {
    setString(rusStrings)
    setGerActive(false)
    setEngActive(false)
    setRusActive(true)
  }


  const changeLangOnGer = () => {
    let gerStrings = {
      "contactsTitle": "Kontakte zur Kommunikation:",
      "contactsLocation": "Sankt Petersburg",
      "hardSkillsGer": "Deutsche Sprache – C1 (verhandlungssichere Sprachkenntnisse)",
      "hardSkillsEng": "Englische Sprache – B1 (gute Sprachkenntnisse)",
      "hardSkillsRus": "Russische Sprache – C2 (Muttersprache)",
      "softSkillsEngineer": "Ingenieur",
      "softSkillsMathematician": "Mathematiker",
      "softSkillsAnalyst": "Analytiker",
      "softSkillsAssiduity": "Ausdauer",
      "softSkillsTeamwork": "Zusammenarbeit",
      "softSkillsPlanning": "Planung",
      "myName": "Asauliak Nikita",
      "aboutTitle": "Über mich:",
      "aboutInner": "Ich habe analytischen Verstand und gebe mein Bestes, um die gestellten Aufgaben logisch zu lösen. Ich mag neue Dinge lernen und Schwierigkeiten überwinden, ohne sie aus dem Nichts zu erfinden. Ich bin konfliktfrei und kontaktfreudig. Zu meinen Hobbys gehören Fußball und Tennis. Außerdem mag ich Radfahren, die Natur und Computerspiele.",
      "workExperienceTitle": "Berufserfahrung:",
      "workFirstName": "Sous-Chef",
      "workFirstPlace": "Agastiar, Sankt Petersburg",
      "workFirstTime": "März 2021 – Februar 2022",
      "workSecName": "Konstrukteur (Entwicklungsingenieur)",
      "workSecPlace": "Wildau, Deutschland",
      "workSecTime": "Mai 2021 – September 2021",
      "educationTitle": "Studium:",
      "educationFirstName": "Bachelor im Ingenieurwesen",
      "educationFirstPlace": "TH Wildau, Deutschland",
      "educationSecName": "Bachelor in Geschäftsführung",
      "educationSecPlace": "St. Petersburger Polytechnische Universität Peter des Großen",
      "coursesTitle": "Kurse:",
      "coursesFirstTime": "Dezember 2021 – März 2022",
      "coursesSecTime": "September 2022 – Januar 2022",
      "coursesThirdTime": "September 2022 – Dezember 2022",
      "projectsTitle": "Projekte:",
      "projectsSubtitle": "Für Einzelheiten klicken Sie auf den Titel",
      "lastUpdate": "Aktualisiert im Oktober 2023",
    }
    setString(gerStrings)
    setGerActive(true)
    setEngActive(false)
    setRusActive(false)
  }
  const changeLangOnEng = () => {
    let engStrings = {
      "contactsTitle": "Contacts:",
      "contactsLocation": "Saint Petersburg",
      "hardSkillsGer": `German – C1 (business fluent skills)`,
      "hardSkillsEng": "English – B1 (good skills)",
      "hardSkillsRus": "Russian – C2 (native language)",
      "softSkillsEngineer": "Engineer",
      "softSkillsMathematician": "Mathematician",
      "softSkillsAnalyst": "Analyst",
      "softSkillsAssiduity": "Assiduity",
      "softSkillsTeamwork": "Teamwork",
      "softSkillsPlanning": "Planning",
      "myName": "Asauliak Nikita",
      "aboutTitle": "About me:",
      "aboutInner": "I have a clear, logical mind and always strive to find a solution to assigned tasks. I love learning new things and overcoming difficulties without making them up out of nowhere. I'm non-conflict and sociable. My hobbies include football and tennis. I also love cycling, nature and computer games.",
      "workExperienceTitle": "Work experience:",
      "workFirstName": "Sous Chef",
      "workFirstPlace": "Agastiar, St. Petersburg",
      "workFirstTime": "March 2021 – February 2022",
      "workSecName": "Konstrukteur (Development engineer)",
      "workSecPlace": "Wildau, Germany",
      "workSecTime": "May 2021 – September 2021",
      "educationTitle": "Studies:",
      "educationFirstName": "Bachelor of Engineering",
      "educationFirstPlace": "TH Wildau, Germany",
      "educationSecName": "Bachelors in Business Management",
      "educationSecPlace": "St. Petersburg Polytechnic University of Peter the Great",
      "coursesTitle": "Courses:",
      "coursesFirstTime": "December 2021 – March 2022",
      "coursesSecTime": "September 2022 – January 2022",
      "coursesThirdTime": "September 2022 – December 2022",
      "projectsTitle": "Projects:",
      "projectsSubtitle": "Click on the title for details",
      "lastUpdate": "Last update: october 2023",
    }
    setString(engStrings)
    setGerActive(false)
    setEngActive(true)
    setRusActive(false)
  }

  return (
    <div className="body">

      {/* Header start */}

      <header className="header">
        <div className="header__title">CV Front-End Developer</div>
        <div className="header__languages">
          <div className=
            {engActive ? "languages-active" : "languages-item"}
            onClick={() => changeLangOnEng()}>eng</div>
          &nbsp;|&nbsp;
          <div className=
            {rusActive ? "languages-active" : "languages-item"}
            onClick={() => changeLangOnRus()}>rus</div>
          &nbsp;|&nbsp;
          <div className=
            {gerActive ? "languages-active" : "languages-item"}
            onClick={() => changeLangOnGer()}>ger</div>
        </div>
      </header>

      {/* Header end */}

      <main className="main">

        {/* First column start */}

        <section className="first__column">
          <figure className='photo__main'>
            <img className="photo__main-img" src={mainPhoto} alt="Main photo" />
          </figure>
          <div className="container__name-small">
            <div className="container__name-title">
              {strings.myName}
            </div>
            <div className="container__name-subtitle">
              Front-End Developer
            </div>
          </div>
          <div className="container__about-small">
            <div className="container__about-title container__title">
              {strings.aboutTitle}
            </div>
            <div className="container__about-text">
              {strings.aboutInner}
            </div>
          </div>
          <div className="container__contacts">
            <div className="container__title">
              {strings.contactsTitle}
            </div>
            <div className="contacts__text">
              <a className="contacts__link" style={{ cursor: "inherit", }}>
                <img src={location} alt="location" className="contacts__link-img" />
                <div>: {strings.contactsLocation}</div>
              </a>
              <a href="https://t.me/gusap9" className="contacts__link">
                <img src={telegramm} alt="telegram" className="contacts__link-img" />
                <div>: @gusap9</div>
              </a>
              <a href="https://github.com/gusap9" className="contacts__link">
                <img src={github} alt="github" className="contacts__link-img" />
                <div>: @gusap9</div>
              </a>
              <a href="tel:+79313132327" className="contacts__link">
                <img src={phone} alt="phone" className="contacts__link-img" />
                <div>: +79313132327</div>
              </a>
              <a href="mailto:nikitaasauleak@gmail.com" className="contacts__link">
                <img src={email} alt="gmail" className="contacts__link-img" />
                <div>: nikitaasauleak@gmail.com</div>
              </a>
            </div>
          </div>
          <div className="container__hard-skills">
            <div className="container__title">
              Hard Skills:
            </div>
            <ul className="hard-skills__box">
              <li className="hard-skills__list">HTML5</li>
              <li className="hard-skills__list">CSS3</li>
              <li className="hard-skills__list">JavaScript</li>
              <li className="hard-skills__list">React</li>
              <li className="hard-skills__list">Swift</li>
              <li className="hard-skills__list">{strings.hardSkillsGer}</li>
              <li className="hard-skills__list">{strings.hardSkillsEng}</li>
              <li className="hard-skills__list">{strings.hardSkillsRus}</li>
            </ul>
          </div>
          <div className="container__soft-skills">
            <div className="container__title">
              Soft Skills:
            </div>
            <ul>
              <li className="soft-skills__list">{strings.softSkillsEngineer}</li>
              <li className="soft-skills__list">{strings.softSkillsMathematician}</li>
              <li className="soft-skills__list">{strings.softSkillsAnalyst}</li>
              <li className="soft-skills__list">{strings.softSkillsAssiduity}</li>
              <li className="soft-skills__list">{strings.softSkillsTeamwork}</li>
              <li className="soft-skills__list">{strings.softSkillsPlanning}</li>
            </ul>
          </div>
        </section>

        {/* First column end */}

        {/* Second column start */}

        <section className="second__column">
          <div className="container__name">
            <div className="container__name-title">
              {strings.myName}
            </div>
            <div className="container__name-subtitle">
              Front-End Developer
            </div>
          </div>
          <div className="container__about">
            <div className="container__about-title container__title">
              {strings.aboutTitle}
            </div>
            <div className="container__about-text">
              {strings.aboutInner}
            </div>
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
                  <a className="project-inner-link" href="https://github.com/gusap9/simple-hotels-search">
                    Hotels Search &nbsp;
                    <span className="container__bold-upper-subname">
                      | React, Rest API
                    </span>
                  </a>
                </span>
              </li>
              <li className="project-inner">
                <span className="container__bold-upper-name">
                  <a className="project-inner-link" href="https://github.com/gusap9/gem-puzzle">
                    Gem-Puzzle &nbsp;
                    <span className="container__bold-upper-subname">
                      | HTML, CSS, JavaScript
                    </span>
                  </a>
                </span>
              </li>
              <li className="project-inner">
                <span className="container__bold-upper-name">
                  <a className="project-inner-link" href="https://github.com/gusap9/todo">
                    To-Do List &nbsp;
                    <span className="container__bold-upper-subname">
                      | React Native
                    </span>
                  </a>
                </span>
              </li>
              <li className="project-inner">
                <span className="container__bold-upper-name">
                  <a className="project-inner-link" href="https://github.com/gusap9/audioplayer">
                    Audioplayer &nbsp;
                    <span className="container__bold-upper-subname">
                      | HTML, CSS, JavaScript
                    </span>
                  </a>
                </span>
              </li>
              <li className="project-inner">
                <span className="container__bold-upper-name">
                  <a className="project-inner-link" href="https://github.com/gusap9/online-zoo">
                    Online Zoo &nbsp;
                    <span className="container__bold-upper-subname">
                      | HTML, CSS, JavaScript
                    </span>
                  </a>
                </span>
              </li>
              <li className="project-inner">
                <span className="container__bold-upper-name">
                  <a className="project-inner-link" href="https://github.com/gusap9/portfolio_rsschool">
                    Artist Portfolio &nbsp;
                    <span className="container__bold-upper-subname">
                      | HTML, CSS, JavaScript
                    </span>
                  </a>
                </span>
              </li>
              <li className="project-inner">
                <span className="container__bold-upper-name">
                  <a className="project-inner-link" href="https://github.com/gusap9/page_about_CSS">
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
              {strings.workExperienceTitle}
            </div>
            <div className="container__work-text">
              <div className="container__work-inner">
                <div className="container__bold-upper-name">
                  {strings.workFirstName} &nbsp;
                  <span className="container__bold-upper-subname">
                    | {strings.workFirstPlace}
                  </span>
                </div>
                <div className="container__period">
                  ({strings.workFirstTime})
                </div>
              </div>
              <div className="container__work-inner">
                <div className="container__bold-upper-name">
                  {strings.workSecName} &nbsp;
                  <span className="container__bold-upper-subname">
                    | {strings.workSecPlace}
                  </span>
                </div>
                <div className="container__period">
                  ({strings.workSecTime})
                </div>
              </div>
            </div>
          </div>
          <div className="container__education">
            <div className="container__education-title container__title">
              {strings.educationTitle}
            </div>
            <div className="container__education-text container__work-text">
              <div className="container__education-inner">
                <div className="container__bold-upper-name">
                  {strings.educationFirstName} &nbsp;
                  <span className="container__bold-upper-subname">
                    | {strings.educationFirstPlace}
                  </span>
                </div>
                <div className="container__period">
                  (2017 – 2021)
                </div>
              </div>
              <div className="container__education-inner">
                <div className="container__bold-upper-name">
                  {strings.educationSecName} &nbsp;
                  <span className="container__bold-upper-subname">
                    | {strings.educationSecPlace}
                  </span>
                </div>
                <div className="container__period">
                  (2017 – 2021)
                </div>
              </div>
            </div>
          </div>
          <div className="container__courses">
            <div className="container__courses-title container__title">
              {strings.coursesTitle}
            </div>
            <div className="container__courses-text container__work-text">
              <div className="container__education-inner">
                <div className="container__bold-upper-name">
                  JavaScript/Front-End Pre-School &nbsp;
                  <span className="container__bold-upper-subname">
                    | RSschool
                  </span>
                </div>
                <div className="container__period">
                  ({strings.coursesFirstTime})
                </div>
              </div>
              <div className="container__education-inner">
                <div className="container__bold-upper-name">
                  JavaScript/Front-End &nbsp;
                  <span className="container__bold-upper-subname">
                    | RSschool
                  </span>
                </div>
                <div className="container__period">
                  ({strings.coursesSecTime})
                </div>
              </div>
              <div className="container__education-inner">
                <div className="container__bold-upper-name">
                  React &nbsp;
                  <span className="container__bold-upper-subname">
                    | RSschool
                  </span>
                </div>
                <div className="container__period">
                  ({strings.coursesThirdTime})
                </div>
              </div>
            </div>
          </div>
          
        </section>

        {/* Second column end */}

      </main>

      {/* Footer start */}

      <footer className="footer header">
        {strings.lastUpdate}
      </footer>

      {/* Footer end */}
    </div>
  );
}

export default App;
