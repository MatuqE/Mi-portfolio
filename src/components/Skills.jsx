import React from 'react'
import  geoalt  from '../assets/geo-alt.svg'

export const Skills = ({ modo }) => {
  return (
    <div className={ modo ? 'mainSkill1' : 'mainSkill2'} >        
        <div className='container row'>
            <div className='col-7'>
                <h4>Sobre mi.</h4>
                <p>Soy un <strong>Desarrollador Web Junior</strong> enfocado en ser <strong>Full Stack. </strong>
                Actualmente estudiando <strong>Tecnicatura Universitaria en Programacion.</strong> 
                <br/>  Tucuman Argentina <img src={geoalt} alt="" /></p>
            </div>
            <div className='col-5'>
                <h4>Skills</h4>
                <div className='div_skills'>
                    <div className='skills_div'>HTML</div>
                    <div className='skills_div'>CSS</div>
                    <div className='skills_div'>JavaScript</div>
                    <div className='skills_div'>React</div>
                    <div className='skills_div'>GIT</div>
                    <div className='skills_div'>Github</div>
                    <div className='skills_div'>MySQL</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills