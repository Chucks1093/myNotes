

export default function getLocalStorage() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    const data = localStorage.getItem("COURSES") ? JSON.parse(localStorage.getItem("COURSES")): [];
    return Object.values(data);
}