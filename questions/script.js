
import createQuizUI from "../components/createQuizUI";
import createDevModal from "../components/createDevModal";
import openModal from "../openModal";


async function getData(component,header){
     const sectionName = localStorage.getItem("section");
     const dataName = localStorage.getItem("name").toLowerCase();
     const title = header.querySelector('#title');
     const data = await import(`../data/${dataName}.json`);
     title.textContent = `${sectionName}`;
     data.default[sectionName].map(name=> {
          createQuizUI(name["question"], name["answer"], component);
     });

};

function questionsFunctions(page){
     const [devInfo, header, courseContainer] = page.children;
     createDevModal(devInfo);
     openModal(devInfo, header.children[2]);
     getData(courseContainer, header);

};

export default questionsFunctions;
