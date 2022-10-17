import createQuizUI from "../components/createQuizUI";

const title = document.querySelector('header > p');
const courseContainer = document.querySelector('main');

const dataName = localStorage.getItem("name").toLowerCase();
const sectionName = localStorage.getItem("section");
const data = await import(`../data/${dataName}.json`);
title.textContent = sectionName;


data.default[sectionName].map(name=> {
     createQuizUI(name["question"], name["answer"], courseContainer);
})