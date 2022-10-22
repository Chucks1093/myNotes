
import createQuizUI from "../components/createQuizUI";
import createDevModal from "../components/createDevModal";
import openModal from "../openModal";


const title = document.querySelector('header > p');
const courseContainer = document.querySelector('main');
const devInfo = document.querySelector("#dev-info");
const notificationBtn = document.querySelector("#notification-btn");

const dataName = localStorage.getItem("name").toLowerCase();
const sectionName = localStorage.getItem("section");
const data = await import(`../data/${dataName}.json`);
title.textContent = `${sectionName}`;

createDevModal(devInfo);
openModal(devInfo, notificationBtn);

data.default[sectionName].map(name=> {
     createQuizUI(name["question"], name["answer"], courseContainer);
});