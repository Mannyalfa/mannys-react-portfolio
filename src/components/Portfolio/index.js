import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projectItems = [
        {
            title: 'Startifacts',
            image: 'startifacts.png',
            deployedLink: 'https://startifacts-online.herokuapp.com/index',
            repo: 'https://github.com/Mannyalfa/Startifacts',
        },
        {
            title: 'NETGET ISP Finder',
            image: 'netget.png',
            deployedLink: 'https://mannyalfa.github.io/netget-isp-finder/',
            repo: 'https://github.com/Mannyalfa/netget-isp-finder',
        },
        {
            title: 'Work Day Scheduler',
            image: 'work-day-scheduler.png',
            deployedLink: 'https://mannyalfa.github.io/work-day-scheduler/',
            repo: 'https://github.com/Mannyalfa/work-day-scheduler',
        },
        {
            title: 'mvc-challenge-tech-blog',
            image: 'mvc-tech-blog.png',
            deployedLink: 'https://stark-journey-61935.herokuapp.com/',
            repo: 'https://github.com/Mannyalfa/mvc-challenge-tech-blog',
        },
        {
            title: 'Weather Dashboard',
            image: 'weather-dashboard.png',
            deployedLink: 'https://mannyalfa.github.io/weather-dashboard/',
            repo: 'https://github.com/Mannyalfa/weather-dashboard',
        },
        {
            title: 'IOS-style timer',
            image: 'timer.png',
            deployedLink: 'https://mannyalfa.github.io/ios-style-timer/',
            repo: 'https://github.com/Mannyalfa/ios-style-timer',
        },
    ];
    return (
        <section
            id='project-section'
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
            }}
        >
            {projectItems.map((project) => {
                return (
                    <Project
                        title={project.title}
                        image={project.image}
                        deployedLink={project.deployedLink}
                        repo={project.repo}
                        key={project.title}
                    />
                );
            })}
        </section>
    );
}
export default Portfolio;