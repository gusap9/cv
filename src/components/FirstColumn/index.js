import github from '../../img/github.png';
import location from '../../img/location.png';
import email from '../../img/mail.png';
import mainPhoto from '../../img/myface.jpg';
import phone from '../../img/phone.png';
import telegram from '../../img/telegram.png';

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
					{strings.hardSkills.map((el, index) => (
						<li key={index} className="hard-skills__list">
							{el}
						</li>
					))}
				</ul>
			</div>
			<div className="container__soft-skills">
				<div className="container__title">Soft Skills:</div>
				<ul>
					{strings.softSkills.map((el, index) => (
						<li key={index} className="hard-skills__list">
							{el}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
