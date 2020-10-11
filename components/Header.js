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
  

  return (
    <React.Fragment>
      <Navbar color="dark" light expand="md">
        <Link href="/">
          <NavLink style={{ cursor: 'pointer' }} className="font-weight-bold">
            {<img src={`/static/images/inbrief.png`} alt="In Brief" />}
          </NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
             {/* <NavItem>
              <a href="/search" className="btn btn-outline-warning mr-2" style={{cursor: 'pointer'}}>
                <i class="fa fa-search"></i>
              </a>
            </NavItem> */}
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
                  <a href="/admin/crud/blog" className="btn btn-outline-warning" style={{ cursor: 'pointer' }}>Write Blog</a>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <div className="container mb-2"></div>
      {/* <Search /> */}
    </React.Fragment>
  );
};

export default Header;