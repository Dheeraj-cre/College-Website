import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>About UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehesive educatioon program. Our cutting-edge curriculam is dedigned to empower studetns with the knowledge, skills and experience needed to excel inthe dynamic field of education.</p>
            <p>With a ficus on innovation, hands-on learning and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classroom, schools and commonities,</p>
            <p>Wheather you aspire to become a teacher, administrator, conseltor or educaional leader, our diverse range of program offers the perfect pathway to achive your goal and unlock your full potential in shaping the future if education.</p>
        </div>
      
    </div>
  )
}

export default About
