import { Fragment } from "react";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';
import Modal from "../components/Modal";
import UpButton from "../components/UpButton";
import PopUp from "../components/PopUp";


function SharedLayout() {

    return(
        <Fragment>
            <Modal></Modal>
            <Header/>
            <main>
                <Outlet />
                {/* <PopUp /> */}
                <UpButton />
            </main>
        </Fragment>
    )
};
    

export default SharedLayout;