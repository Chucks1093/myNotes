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
     icon.setAttribute("src", "/books-logo.svg");
     icon.setAttribute("alt", "book-icon");
     const courseName = document.createElement('p');
     courseName.classList.add('course-name');
     const size = name.length < 21 ? "small-text" : "long-text";
     courseName.classList.add(size);
     courseName.textContent = name;
     const courseNo = document.createElement('p');
     courseNo.classList.add('no-course-sections');
     const courselink = document.createElement('img');
     courselink.setAttribute("src", "/d-link-1.svg");
     courseNo.append(courselink);
     args[0]?courseNo.innerHTML = `${args[0]}<span>cards<span>`: null;
     course.append(link, icon, courseName, courseNo);
     course.addEventListener("click", getCourseName)
     args[2].appendChild(course);
}

export default createCourseUI;