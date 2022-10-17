import createCourseUI from "../components/createCourseUI";


const courseContainer = document.querySelector('main');
const questionsUrl = "../questions/index.html";
const dataName = localStorage.getItem("name").toLowerCase();
const data = await import(`../data/${dataName}.json`);

Object.keys(data.default).map(name => {
     createCourseUI(name, data.default[name].length, questionsUrl, courseContainer);
});


