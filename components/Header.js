import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress'
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import Search from './blog/Search';
import { useDarkMode } from 'next-dark-mode';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '.././node_modules/nprogress/nprogress.css';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { autoModeActive, darkModeActive, switchToAutoMode, switchToDarkMode, switchToLightMode } = useDarkMode()

  const findActive = (text) => {
    if (autoModeActive) return text === 'auto'
    else if (darkModeActive) return text === 'dark'
    else return text === 'light'
  }

  const toggleMode = (text) => {
    if (text === 'Auto') switchToAutoMode()
    if (text === 'Dark') switchToDarkMode()
    if (text === 'Light') switchToLightMode()
  }


  return (
    <React.Fragment>
      <Navbar color="dark" light expand="md">
        <Link href="/">
          <NavLink style={{ cursor: 'pointer' }} className="font-weight-bold">
            {<img src={`/static/images/technically.png`} alt="technically" style={{ width: '70%', height: '24px'}} />}
            </NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/* <React.Fragment>
              <button className="btn btn-warning mr-2">
                <i className ="fa fa-search" aria-hidden="true"></i>
              </button>
            </React.Fragment> */}
            <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink style={{ cursor: 'pointer', color: '#ffffff' }} >Blogs</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/signin">
                    <NavLink style={{ cursor: 'pointer', color: '#ffffff' }} >Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink style={{ cursor: 'pointer', color: '#ffffff' }} >Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink style={{ cursor: 'pointer', color: '#ffffff' }} >{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink style={{ cursor: 'pointer', color: '#ffffff' }} >{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink style={{ cursor: 'pointer', color: '#ffffff' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                  Signout
                </NavLink>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <Link href="/user/crud/blog">
                    <NavLink className="btn btn-primary text-light" style={{ cursor: 'pointer' }}>Write Blog</NavLink>
                  </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <a href="/admin/crud/blog" className="btn btn-warning" style={{ cursor: 'pointer' }}>Write Blog</a>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <Search />
    </React.Fragment>
  );
};

export default Header;