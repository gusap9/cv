import mainPhoto from "../../img/myface.jpg"
import location from "../../img/location.png"
import telegram from '../../img/telegram.png';
import github from '../../img/github.png';
import phone from '../../img/phone.png';
import email from '../../img/mail.png';

export const FirstColumn = ({ strings }) => {
  return (
    <section className="first__column">
      <figure className="photo__main">
        <img className="photo__main-img" src={mainPhoto} alt="Main" />
      </figure>
      <div className="container__name-small">
        <div className="container__name-title">{strings.myName}</div>
        <div className="container__name-subtitle">Front-End Developer</div>
      </div>
      <div className="container__about-small">
        <div className="container__about-title container__title">
          {strings.aboutTitle}
        </div>
        <div className="container__about-text">{strings.aboutInner}</div>
      </div>
      <div className="container__contacts">
        <div className="container__title">{strings.contactsTitle}</div>
        <div className="contacts__text">
          <div className="contacts__link">
            <img src={location} alt="location" className="contacts__link-img" />
            <div>: {strings.contactsLocation}</div>
          </div>
          <a href="https://t.me/gusap9" className="contacts__link">
            <img src={telegram} alt="telegram" className="contacts__link-img" />
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
        <div className="container__title">Hard Skills:</div>
        <ul className="hard-skills__box">
          <li className="hard-skills__list">React</li>
          <li className="hard-skills__list">JavaScript</li>
          <li className="hard-skills__list">HTML5</li>
          <li className="hard-skills__list">CSS3</li>
          <li className="hard-skills__list">Swift</li>
          <li className="hard-skills__list">{strings.hardSkillsRus}</li>
          <li className="hard-skills__list">{strings.hardSkillsGer}</li>
          <li className="hard-skills__list">{strings.hardSkillsEng}</li>
        </ul>
      </div>
      <div className="container__soft-skills">
        <div className="container__title">Soft Skills:</div>
        <ul>
          <li className="soft-skills__list">{strings.softSkillsEngineer}</li>
          <li className="soft-skills__list">
            {strings.softSkillsMathematician}
          </li>
          <li className="soft-skills__list">{strings.softSkillsAnalyst}</li>
          <li className="soft-skills__list">{strings.softSkillsAssiduity}</li>
          <li className="soft-skills__list">{strings.softSkillsTeamwork}</li>
          <li className="soft-skills__list">{strings.softSkillsPlanning}</li>
        </ul>
      </div>
    </section>
  );
};
