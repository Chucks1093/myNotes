// import Swup from 'swup';
import createCourseUI from "../components/createCourseUI";
import createDevModal from "../components/createDevModal";
import openModal from "../openModal";


// const swup = new Swup();
const courseContainer = document.querySelector('main');
const notificationBtn = document.querySelector('#notification-btn');
const devInfo = document.querySelector("#dev-info");


const title = document.querySelector('#title');
const questionsUrl = "/questions/index.html";
const dataName = localStorage.getItem("name").toLowerCase();

const data = await import(`../data/${dataName}.json`);
title.textContent = dataName.toUpperCase();

createDevModal(devInfo);

openModal(devInfo,notificationBtn);
// swup.on('contentReplaced', createDevModal(devInfo))
// swup.on('contentReplaced', openModal(devInfo,notificationBtn));

Object.keys(data.default).map(name => {
     createCourseUI(name, data.default[name].length, questionsUrl, courseContainer);
});






