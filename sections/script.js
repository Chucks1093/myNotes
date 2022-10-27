import createCourseUI from "../components/createCourseUI";
import createDevModal from "../components/createDevModal";
import openModal from "../openModal";





async function getData(component, header){
     const questionsUrl = "/questions/index.html";
     const title = header.querySelector('#title');
     const dataName = localStorage.getItem("name").toLowerCase();
     const data = await import(`../data/${dataName}.json`);
     title.textContent = dataName.toUpperCase();
     Object.keys(data.default).map(name => {
          createCourseUI(name, data.default[name].length, questionsUrl, component);
     });
}

function sectionsFunctions(page) {
     const [devInfo, header, courseContainer] = page.children;
     createDevModal(devInfo);
     openModal(devInfo,header.children[2]);
     getData(courseContainer, header);
};

export default sectionsFunctions;








