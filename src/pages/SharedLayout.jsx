import { Fragment } from "react";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';
import Modal from "../components/Modal";
import UpButton from "../components/UpButton";
import Advertisement from "../components/Advertisement";
import SeekingContrubutors from "../components/SeekingContrubutors";


function SharedLayout() {

    return(
        <Fragment>
            <Modal></Modal>
            <Header/>
            <main>
                <Outlet />
                {/* <Advertisement /> */}
                <SeekingContrubutors />
                <UpButton />
            </main>
        </Fragment>
    )
};
    

export default SharedLayout;