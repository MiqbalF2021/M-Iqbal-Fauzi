import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    progress: 'Finished',
    title: 'Coffeess',
    imageUrl: "/img/coffeess.png",
    description: 'This is a coffee ordering application, namely a full-stack website application project using MERN stack',
    techStack: [
      { name: 'React js', imageUrl: "/img/react.png" },
      { name: 'Tailwind CSS', imageUrl: "img/tailwind.png" },
      { name: 'express', imageUrl: "/img/express.png" },
      { name: 'mongo db', imageUrl: "img/mongo.png" },
    ],
    link: "/project/coffeess",
  },
  {
    id: 2,
    progress: 'In Progress',
    title: 'Caloriest Burn Predictions',
    imageUrl: '/img/home.png',
    description: 'A website application to detect the amount of burned calories using a machine learning approach.',
    techStack: [
      { name: 'React js', imageUrl: "/img/react.png" },
      { name: 'Tailwind CSS', imageUrl: "img/tailwind.png" },
      { name: 'express', imageUrl: "/img/express.png" },
      { name: 'mongo db', imageUrl: "img/mongo.png" },
      
    ],
    link: "/project/caloriest-burn-predictions",
  },
  {
    id: 3,
    progress: 'In Progress',
    title: 'Modern Web Profile : SPS AR-RAHMA',
    imageUrl: 'https://via.placeholder.com/300',
    description: 'A website application to detect the amount of burned calories using a machine learning approach.',
    techStack: [
      { name: 'Vue', imageUrl: 'https://via.placeholder.com/50' },
      { name: 'Bootstrap', imageUrl: 'https://via.placeholder.com/50' },
    ],
  },
  // Tambahkan lebih banyak proyek sesuai kebutuhan
];

const ProjectCard = ({ project }) => (
  <div className=" max-w-xs overflow-hidden shadow-lg bg-gradient-to-r from-second to-bg rounded-lg pb-5 flex flex-col">
  <Link to={project.link} className="flex flex-col h-full">
  <img className="w-full rounded-md p-3" src={project.imageUrl} alt={project.title} />
    <div className="px-6 py-1">
      <div className="font-bold text-lg mb-2 text-primary">{project.title}</div>
      <p className="text-sm text-light">{project.description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {project.techStack.map((tech) => (
        <img
          key={tech.name}
          src={tech.imageUrl}
          alt={tech.name}
          className="inline-block h-6 w-6 mr-2 mb-2"
        />
      ))}
    </div>
    <h1 className="mt-auto flex justify-end mr-10 text-primary font-medium text-sm">{project.progress}</h1>
  </Link>
</div>

);

const Projects = () => (  
  <div className=" bg-bg flex flex-col justify-center p-6">
  <h1 className='text-primary text-xs mt-3 self-center lg:text-sm'>Project</h1>
  <p className='text-light font-bold text-xl lg:text-2xl self-center'>What I have <span className='text-primary'>worked on</span></p>
  <hr className='w-1/4 lg:w-1/6 text-primary mt-2 self-center'/>
  <div className=" bg-bg flex flex-wrap justify-center gap-6 p-6">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
  <h1 className='self-end text-primary font-medium text-sm mt-1 hover:text-light lg:mr-20'>
    <Link to="/project">Show all</Link>
  </h1>
  </div>
);

export default Projects;