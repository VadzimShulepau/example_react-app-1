import vk from '../../img/icons/vk.svg';
import instagram from '../../img/icons/instagram.svg';
import twitter from '../../img/icons/twitter.svg';
import gitHub from '../../img/icons/gitHub.svg';
// import gitHubBlack from '../../img/icons/gitHub-black.svg';
import linkedIn from '../../img/icons/linkedIn.svg';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item"><a href="#!"><img src={vk} alt="vkontakte" /></a></li>
              <li className="social__item"><a href="#!"><img src={instagram} alt="instagram" /></a></li>
              <li className="social__item"><a href="#!"><img src={twitter} alt="twitter" /></a></li>
              <li className="social__item"><a href="#!"><img src={gitHub} alt="gitHub" /></a></li>
              <li className="social__item"><a href="#!"><img src={linkedIn} alt="linkedIn" /></a></li>
            </ul>
            <div className="copyright">
              <p>© 2022 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;