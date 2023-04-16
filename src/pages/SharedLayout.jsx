import { Fragment, useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from 'react-router-dom';
import Modal from "../components/Modal";
import openModal from "../animations/openModal";
import { useRef } from "react";
import showCards from "../animations/showCards";
import { CSSPlugin, gsap } from "gsap";

function SharedLayout() {
    const allCards = useRef(null);
    const location = useLocation();
    useEffect(()=>{
        console.log(location.pathname)
        console.log("it cahns")
        // allCards.current.children.ma(child => {
        //     showCards(child)
        // })
        showCards(allCards.current)
        console.log(allCards.current.children);

        return () => {
            allCards.current.style.opacity = 0;
            allCards.current.style.top = "60px";

        }
    },[location])

    return(
        <Fragment>
            <Modal></Modal>
            <Header/>
            <main ref={allCards}>
                <Outlet />
            </main>
        </Fragment>
    )
};

export default SharedLayout;