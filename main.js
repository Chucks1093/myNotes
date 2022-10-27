import Barba from "@barba/core";
import homeFunctions from "./script";
import sectionsFuntions from "./sections/script";
import questionsFunction from "./questions/script"


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
          // {
          //      name: "homePage",
          //      to: {
          //           namespace: ["homePage"]
          //      },
          //      beforeEnter(data) {
          //           homeFunctions();
          //      }
          // },
          // {
          //      name: "sectionsPage",
          //      to: {
          //           namespace: ["sectionsPage"]
          //      },
          //      beforeEnter(data) {
          //           sectionsFuntions();
          //      }
          // }
     ]
})