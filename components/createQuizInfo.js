

function createQuizInfo(number, title, source){
     const container = document.createElement("div");
     const courseImg = document.createElement("img");
     courseImg.setAttribute("src", `/${source}.svg`);
     courseImg.setAttribute("alt", source);
     const totalNo = document.createElement("p");
     totalNo.innerHTML = `<span>${number}</span>${title}`;
     container.append(courseImg, totalNo);
     return container;
};

export default createQuizInfo;