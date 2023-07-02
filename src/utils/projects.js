import { hackat1,boxoffice,pixel } from "./images"
const projects = [
    {
        "id": 1,
        "title": "Pixel Link",
        "duration": " March-May 2023",
        "point_1": "A full-stack image-sharing platform where users can post their photos.",
        "point_2": "Sanity is used for the backend and ReactJS is used on the front end of the website.",
        "tech": "ReactJS, TailwindCSS (Frontend), and Sanity (Backend).",
        "role": "Full-stack Developer",
        "link": "https://pixel-link.netlify.app/login",
        "image": pixel,
    },
    {
        "id": 2,
        "title": "BOX-OFFICE",
        "duration": "July-August 2022",
        "point_1": " A site where users can get information about any show or actor.",
        "point_2": "The website uses an API to retrieve information such as the number of episodes, a summary, and other details.",
        "tech": " ReactJS, TailwindCSS (Frontend) and Tvmaze API.",
        "role": "Frontend Developer",
        "link": "https://box-office-project.netlify.app/",
        "image": boxoffice,
    },
    {
        "id": 3,
        "title": "HACKAT1",
        "duration": "July-July 2022",
        "point_1": "Built a website that pulls information from an API and lists current and upcoming competitions from sites like Codechef, Leetcode, etc.",
        "point_2": "",
        "tech": "ReactJS, TailwindCSS (Frontend) and Kontests API.",
        "role": "Frontend Developer",
        "link": "https://hackat1.netlify.app/",
        "image": hackat1,
    },
]
export {projects}