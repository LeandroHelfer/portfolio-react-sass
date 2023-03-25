import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Central from "../../components/central/central";
import Footer from "../../components/footer/footer";


const home = () => {
    return (
        <div>
           <Navbar />
           <Central />
           <Footer />
        </div>
    )
}

export default home;