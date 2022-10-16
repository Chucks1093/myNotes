import data from "./data/courses.json"
const courseContainer = document.querySelector('main');
console.log(data[1]);

function createCourseUI(name , page) {
     const course = document.createElement('article');
     course.classList.add('course');
     const link = document.createElement('a');
     link.setAttribute('href', `./${page}/index.html`);
     const icon = document.createElement('img');
     icon.setAttribute("src", "/book.svg");
     icon.setAttribute("alt", "book-icon");
     const courseName = document.createElement('p');
     courseName.classList.add('course-name');
     courseName.textContent = name;
     const courseNo = document.createElement('p');
     course.classList.add('no-course-sections');
     courseNo.textContent = "23";
     course.append(link, icon, courseName, courseNo);
     courseContainer.appendChild(course);
}

data.map(name => {
     createCourseUI(name, "sections");
});




// createCourseUI();
// createCourseUI();