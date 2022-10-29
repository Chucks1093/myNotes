import Barba from "@barba/core";
import homeFunctions from "./script";
import sectionsFuntions from "./sections/script";
import questionsFunction from "./questions/script";
import showCards from "./showCards";


Barba.init({
     views:[
          {
               namespace:"homePage",
               beforeEnter({next}){
                    homeFunctions(next.container);
               }

          },
          {
               namespace: "sectionsPage",
               beforeEnter({next}){
                    sectionsFuntions(next.container);
               }    
          },
          {
               namespace: "questionsPage",
               beforeEnter({next}){
                    questionsFunction(next.container);
               }
          }

          
     ],
     transitions: [
          {
               once({next}){
                    showCards(next.container.children[2])
               },
               enter({next}) {
                    showCards(next.container.children[2])
               }

          },
     ]
})