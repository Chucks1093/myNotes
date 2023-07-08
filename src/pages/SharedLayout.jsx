import { Fragment } from "react";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';
import Modal from "../components/Modal";

function SharedLayout() {

    return(
        <Fragment>
            <Modal></Modal>
            <Header/>
            <main>
                <Outlet />
                <a href="#" className="up__button"><img src="upArrow.svg" alt="" /></a>
            </main>
        </Fragment>
    )
};
    

export default SharedLayout;