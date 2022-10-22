// import Swup from "swup";
import data from "./data/courses";
import createCourseUI from "./components/createCourseUI";
import createDevModal from "./components/createDevModal";
import openModal from "./openModal";
// const swup = new Swup();

const courseContainer = document.querySelector('main');
const notificationBtn = document.querySelector('#notification-btn');
const devInfo = document.querySelector("#dev-info");
const sectionsUrl = "/sections/index.html";

createDevModal(devInfo);

openModal(devInfo,notificationBtn);

Object.keys(data).map(name => {
     createCourseUI(name, false, sectionsUrl,courseContainer);
});
