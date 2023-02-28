import gitHubIcon from '../../img/icons/gitHub-black.svg';
import './Button.css';

const Button = ({ link }) => {
  return (
    <a href={link} target='_blank' className='btn-outline' rel="noreferrer">
      <img src={gitHubIcon} alt="github" />
      GitHub repo
    </a>
  );
}

export default Button;