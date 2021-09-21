import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projectItems = [
        {
            title: 'Startifacts',
            descr: 'Search for sci-fi, anime and fantasy memorabila using MySQL',
            image: 'startifacts.png',
            deployedLink: 'https://startifacts-online.herokuapp.com/index',
            repo: 'https://github.com/Mannyalfa/Startifacts',
        },
        {
            title: 'Weather Dashboard',
            descr: 'Get weather forecasts anywhere in the world by using multiple APIs',
            image: 'weather-dashboard.png',
            deployedLink: 'https://mannyalfa.github.io/weather-dashboard/',
            repo: 'https://github.com/Mannyalfa/weather-dashboard',
        },
        {
            title: 'MVC Tech Blog',
            descr: 'Post, review and comment using a secure login and cookies',
            image: 'mvc-tech-blog.png',
            deployedLink: 'https://gentle-bastion-78764.herokuapp.com/',
            repo: 'https://github.com/Mannyalfa/mvc-challenge-tech-blog',
        },
        {
            title: 'Tic Tac Toe',
            descr: 'JavaScript game with scoring & sound',
            image: 'tic-tac-toe.png',
            deployedLink: 'https://mannyalfa.github.io/tic-tac-toe/',
            repo: 'https://github.com/Mannyalfa/tic-tac-toe',
        },
        {
            title: 'Budget Tracker',
            descr: 'A MongoDB app that tabulates & graphs data, can be used offline',
            image: 'budget-tracker.jpg',
            deployedLink: 'https://mannys-budget-tracker.herokuapp.com/',
            repo: 'https://github.com/Mannyalfa/budget-tracker',
        },
        {
            title: 'Javascript Digital Clock',
            descr: 'A simple clock using HTML, CSS & JavaScript',
            image: 'digital-clock.jpg',
            deployedLink: 'https://mannyalfa.github.io/simple-digital-clock/',
            repo: 'https://github.com/Mannyalfa/simple-digital-clock',
        },
        {
            title: 'IOS-style timer',
            descr: 'My first attempt at a mobile UX/UI application',
            image: 'timer.png',
            deployedLink: 'https://mannyalfa.github.io/ios-style-timer/',
            repo: 'https://github.com/Mannyalfa/ios-style-timer',
        },
        {
            title: 'NETGET ISP Finder',
            descr: 'Search for internet service providers nationwide using Google APIs',
            image: 'netget.png',
            deployedLink: 'https://mannyalfa.github.io/netget-isp-finder/',
            repo: 'https://github.com/Mannyalfa/netget-isp-finder',
        },
        {
            title: 'Work Day Scheduler',
            descr: 'A saved daily task list using a time-update API ',
            image: 'work-day-scheduler.png',
            deployedLink: 'https://mannyalfa.github.io/work-day-scheduler/',
            repo: 'https://github.com/Mannyalfa/work-day-scheduler',
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
                        descr={project.descr}
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