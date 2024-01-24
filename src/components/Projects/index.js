import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From React Js to Express. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
{/*           {toggle === 'Bootstrap' ?
            <ToggleButton active value="Bootstrap" onClick={() => setToggle('bootstrap')}>Bootstrap</ToggleButton>
            :
            <ToggleButton value="Bootstrap" onClick={() => setToggle('bootstrap')}>Bootstrap</ToggleButton>
          }
          <Divider /> */}
          {toggle === 'Express' ?
            <ToggleButton active value="Express" onClick={() => setToggle('express')}>Express</ToggleButton>
            :
            <ToggleButton value="Express" onClick={() => setToggle('express')}>Express</ToggleButton>
          }
          <Divider />
          {toggle === 'Sass' ?
            <ToggleButton active value="Sass" onClick={() => setToggle('sass')}>Sass</ToggleButton>
            :
            <ToggleButton value="Sass" onClick={() => setToggle('sass')}>Sass</ToggleButton>
          }
          <Divider />
          {toggle === 'React Js' ?
            <ToggleButton active value="React Js" onClick={() => setToggle('react js')}>React Js</ToggleButton>
            :
            <ToggleButton value="React Js" onClick={() => setToggle('react js')}>React Js</ToggleButton>
          }
          <Divider />
          {toggle === 'React Js' ?
            <ToggleButton active value="apis" onClick={() => setToggle('apis')}>API's</ToggleButton>
            :
            <ToggleButton value="apis" onClick={() => setToggle('apis')}>API's</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects