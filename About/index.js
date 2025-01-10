import React from 'react';  
import './index.css';  

const About = () => {  
  return (  
    <div className='aboutme-section' id="about">  
      <div className='aboutme-container'>  
        <h1>About Me</h1>  
        <h2>My Introduction</h2>  
        <p className='paragraph'>  
          I am a web developer with extensive knowledge and years of experience   
          in web technologies and UI/UX design, delivering quality work.  
        </p>  
      </div>  
      <div className='aboutme-image'>  
        <img   
          src="https://img.freepik.com/free-photo/alluring-young-african-american-female-with-dark-curly-hairstyle-smiling-determined-motivated-cross-arms-chest-confident-pose-smiling-daring-camera-white-wall_176420-35065.jpg"  
          alt="A confident young African American woman"  
        />  
      </div>  
      <div className='about-me-experience'>  
        <p className='experience-item'>  
          <span className='experience-duration'>02+</span>   
          <span className='label experience'> Years of Experience</span>  
        </p>  
        <p className='experience-item'>  
          <span className='projects-completed'>10</span>   
          <span className='label'> Completed Projects</span>  
        </p>  
        <p className='experience-item'>  
          <span className='companies-worked'>01</span>   
          <span className='label'> Company Worked At</span>  
        </p>  
      </div>  
      <div className='aboutme-button'>  
        <button type='button'>Download CV</button>  
      </div>  
    </div>  
  );  
};  

export default About;
