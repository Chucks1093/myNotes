import courses from "../data/courses";

function getCourseName (element) {
     const data = Object.keys(courses)
     let elementID = element.currentTarget.children[2].textContent;
     data.includes(elementID)? localStorage.setItem("name", elementID) : localStorage.setItem("section", elementID); 
};

function createCourseUI(name ,...args) {
     const course = document.createElement('article');
     course.classList.add('course');
     const link = document.createElement('a');
     link.setAttribute('href', args[1]);
     const icon = document.createElement('img');
     icon.setAttribute("src", "/book.svg");
     icon.setAttribute("alt", "book-icon");
     const courseName = document.createElement('p');
     courseName.classList.add('course-name');
     courseName.textContent = name;
     const courseNo = document.createElement('p');
     course.classList.add('no-course-sections');
     courseNo.textContent = args[0];
     course.append(link, icon, courseName, courseNo);
     course.addEventListener("click", getCourseName)
     args[2].appendChild(course);
}

export default createCourseUI;