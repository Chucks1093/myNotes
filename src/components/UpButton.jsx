import { useEffect, useRef } from "react";

function UpButton() {
    const upLink = useRef(null);
    const handleScroll = () => {
        const position = window.scrollY;
        console.log(position)
        if (position > 220) {
            upLink.current.style.animation = "showUpLink .2s ease-in forwards";
        } else {
            upLink.current.style.animation = "hideUpLink .2s ease-in forwards";
        }
    };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
	return <a ref={upLink} href="#" className="up__button"><img src="upArrow.svg" alt="" /></a>;
}
export default UpButton;
