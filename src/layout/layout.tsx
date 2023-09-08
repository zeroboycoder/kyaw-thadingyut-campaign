import React from 'react';
import NavBar from '../components/NavBar/navBar';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return <>
  <NavBar />
  {props.children}
  </>
}

export default Layout;