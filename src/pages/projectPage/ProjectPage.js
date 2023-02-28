import { useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import projectsList from '../../helpers/projectsList';

const ProjectPage = () => {
  const { id } = useParams();
  const { title, skills, imgBig, gitHubLink } = [...projectsList].find((p) => +p.id === +id);

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{title}</h1>

          <img src={imgBig} alt="githubBigImage" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {skills}</p>
          </div>
          {gitHubLink && <Button link={gitHubLink} />}
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;