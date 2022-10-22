import createCourseUI from "../components/createCourseUI";
import createDevModal from "../components/createDevModal";
import openModal from "../openModal";


const courseContainer = document.querySelector('main');
const notificationBtn = document.querySelector('#notification-btn');
const devInfo = document.querySelector("#dev-info");


const title = document.querySelector('#title');
const questionsUrl = "/questions/index.html";
const dataName = localStorage.getItem("name").toLowerCase();
async function getData(){
     const data = await import(`../data/${dataName}.json`);
     title.textContent = dataName.toUpperCase();
     Object.keys(data.default).map(name => {
          createCourseUI(name, data.default[name].length, questionsUrl, courseContainer);
     });
     
}



createDevModal(devInfo);
openModal(devInfo,notificationBtn);
getData();






