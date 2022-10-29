import gsap from "gsap";

function showCards(element){
     return gsap.to(element, {autoAlpha:1, y: -60, duration: 2, ease: "Expo.easeInOut"})
};

export default showCards;