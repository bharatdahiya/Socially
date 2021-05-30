import React, { useState } from 'react';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import BackDrop from '../UI/BackDrop';

const MainNavigation = props => {
    const [drawerIsOpen, setSetDrawerIsOpen] = useState(false);

    const openSideDrawerHandler = () => {
        setSetDrawerIsOpen(true);
    }

    const closeSideDrawerHandler = () => {
        setSetDrawerIsOpen(false);
    }

    return (
        <React.Fragment>
            {drawerIsOpen && <BackDrop onClick={closeSideDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeSideDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openSideDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/" > Places</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;