import IProject from '../interfaces/IProject';

export const projects: IProject[] = [
    {
        id: 1,
        name: "My Covid Tracker",
        description: "My first project, our team used a web API which scrapes for data regarding COVID-19 statistics and geography. ",
        tools: ["HTML", "CSS", "JavaScript", "JQuery", "Materialize", "COVID-19API", "NY Times API"],
        image: "./images/my-covid-tracker.jpg",
        site: "https://cjlaflamme1.github.io/MyCovidTracker/",
        code: "https://github.com/cjlaflamme1/MyCovidTracker",
        group: "I worked on the back-end of this application, specifically with implementing the new third-party COVID-19 API."
    },
    {
        id: 2,
        name: "Progressive Budget",
        description: "A Progressive Web App to manage transactions in a budget, even when offline",
        tools: ["HTML", "CSS", "JavaScript", "express", "mongoose", "morgan"],
        image: "./images/progressive-budget.jpg",
        site: "http://secret-caverns-68109.herokuapp.com",
        code: "https://github.com/RisleyDwayne/progressive-budget",
        
    },
    {
        id: 3,
        name: "Employee Directory",
        description: "A React app to view a list of users. random sample data generated with Random User API",
        image: "./images/employee-directory.jpg",
        tools: ["HTML", "CSS", "JavaScript", "React.js", "Create React App", "Random User API"],
        site: "https://risleydwayne.github.io/employee-directory/",
        code: "https://github.com/RisleyDwayne/employee-directory",
    },

] 