import data from "./data/courses";
import createCourseUI from "./components/createCourseUI";
import createDevModal from "./components/createDevModal";
import openModal from "./openModal";



function homeFunctions(page) {
     const sectionsUrl = "/sections/index.html";
     const [devInfo, header, courseContainer] = page.children;
     createDevModal(devInfo);
     openModal(devInfo,header.children[2]);
     Object.keys(data).map(name => {
          createCourseUI(name, false, sectionsUrl,courseContainer);
     });
}

export default homeFunctions;
