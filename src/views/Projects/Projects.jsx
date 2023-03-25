import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import MyProjects from '../../components/MyProjects/MyProjects';
import Footer from "../../components/footer/footer";

const projects = () => {
  return (
    <div>
      <Navbar />
      <MyProjects />
      <Footer />
    </div>
  )
}

export default projects;