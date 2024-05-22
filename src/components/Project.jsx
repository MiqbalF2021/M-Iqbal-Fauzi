import React from 'react';

// Contoh data proyek
const projects = [
  {
    id: 1,
    title: 'Coffeess',
    imageUrl: "../assets/images/coffeess.png",
    description: 'This is a coffee ordering application, namely a full-stack website application project that I created to fulfill the final assignment for the web programming course in the 5th semester.',
    techStack: [
      { name: 'React', imageUrl: 'https://via.placeholder.com/50' },
      { name: 'Tailwind CSS', imageUrl: 'https://via.placeholder.com/50' },
    ],
  },
  {
    id: 2,
    title: 'Caloriest Burn Predictions',
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
  <div className="max-w-xs overflow-hidden shadow-lg bg-gradient-to-r from-second to-bg rounded-lg">
    <img className="w-full p-3" src={project.imageUrl} alt={project.title} />
    <div className="px-6 py-1">
      <div className="font-bold text-lg mb-2 text-primary">{project.title}</div>
      <p className=" text-sm text-light">{project.description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {project.techStack.map((tech) => (
        <img
          key={tech.name}
          src={tech.imageUrl}
          alt={tech.name}
          className="inline-block h-12 w-12 mr-2 mb-2 "
        />
      ))}
    </div>
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
    <a href="/project">Show All</a>
  </h1>
  </div>
);

export default Projects;