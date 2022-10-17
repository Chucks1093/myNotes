import data from "./data/courses";
import createCourseUI from "./components/createCourseUI";

const courseContainer = document.querySelector('main');

const sectionsUrl = "./sections/index.html";


Object.keys(data).map(name => {
     createCourseUI(name, data[name], sectionsUrl,courseContainer);
});
