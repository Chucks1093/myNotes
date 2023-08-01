

export default function getLocalStorage() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    const data = localStorage.getItem("COURSES") ? JSON.parse(localStorage.getItem("COURSES")): [];
    console.log(data)
    return Object.values(data);
}