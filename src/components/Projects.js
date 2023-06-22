import React from 'react'
import './Projects.css'
import {useNavigate} from 'react-router-dom'


function Projects() {
  const navigate = useNavigate();

  const navigateToDetailprojects = () => {
    navigate('/Detailprojects');
  };
  return (
    <div id='projects'>
        <h1>Projects</h1>
        <div className='project-description'>
            <p>
            Throughout my journey as a frontend developer, I have had the opportunity to work on a diverse range of projects that have allowed me to explore my creativity and technical expertise. One of my most rewarding projects involved creating a sleek and modern portfolio website for a local artist, showcasing their artwork in an aesthetically pleasing and interactive manner. Another challenging yet rewarding endeavor was developing a responsive and intuitive user interface for a healthcare application, ensuring seamless navigation and efficient data input. Additionally, I contributed to a team effort where we built a dynamic and visually appealing e-learning platform, incorporating engaging multimedia elements and interactive quizzes. These projects have allowed me to refine my skills in HTML, CSS, JavaScript, and frameworks such as React Js, empowering me to deliver impactful and user-centered frontend solutions.</p>
        </div>
        <button onClick={navigateToDetailprojects}>Explore My Projects</button>
    </div>
  )
}

export default Projects