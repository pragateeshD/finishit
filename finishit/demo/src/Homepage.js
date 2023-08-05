import React, { useEffect } from 'react';
import './Homepage.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { auth } from './Firebase';

function HomePage() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  }

  const logout = () => {
    auth.signOut().then(() => {
      // Sign-out successful
      window.location.href = '/';
    })
    .catch((error) => {
      // Handle sign-out error here
      console.error(error);
    });
  }
  useEffect(() => {
    const dropdownToggle = document.getElementById('configureDropdown');
    const dropdownMenu = document.getElementById('configureDropdownMenu');
  
    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
      });
  
      document.addEventListener('click', function (event) {
        const isDropdownToggle = dropdownToggle.contains(event.target);
        const isDropdownMenu = dropdownMenu.contains(event.target);
        if (!isDropdownToggle && !isDropdownMenu) {
          dropdownMenu.classList.remove('show');
        }
      });
    }
  }, []);
  

  return (
    <div className="scrollable-wrapper">
      <div className="overflow">
        <section>
          <div className="container" id="main-container">
            <div className="row">
              <div className="col-md-9 col-lg-6 col-xl-8">
                <h3 className="text-white p-3 text-center text-md-start">Finish it</h3>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-11 col-lg-11 col-xl-11 justify-content-center align-self-center">
                
              
                <div className="d-md-none">
                  <i className='fa fa-home ' style={{ fontSize: "60px", color: "white", paddingTop: "20px", position: "relative" }} data-bs-toggle="offcanvas" data-bs-target="#demo" ></i>
                </div>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 d-none d-md-block">
                <i className='fa fa-home' style={{ fontSize: "60px", color: "white", paddingTop: "150px", position: "absolute", paddingRight: "20px", right: "0" }} data-bs-toggle="offcanvas" data-bs-target="#demo" ></i>
              </div>
            </div>
          </div>
          <div className="offcanvas offcanvas-end" id="demo">
            <div className="offcanvas-header">
              <h1 className="offcanvas-title text-danger">Home</h1>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
           
          </div>

          <div className="row mt-3 justify-content-center">
            <div className="col-auto">
              <button type="submit" onClick={logout} className="btn btn-danger">Logout</button>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default HomePage;
