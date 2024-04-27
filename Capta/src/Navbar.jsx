import React from 'react';
import {NavLink} from 'react-router-dom';
import './App'
function Navbar(props) {
    return (
      <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} bg-body-tertiary`} data-bs-theme={props.mode}>
    <div className="container-fluid ">
   <span className="navbar-brand mb-0 h1">{props.title}</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink  className={({isActive})=>`nav-link ${isActive?"active":""}`} 
             aria-current="page" to="/" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>`nav-link ${isActive?"active":""}`} to="about/">About</NavLink>
          </li>
        </ul>
       <div className="form-check form-switch d-flex">
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} for="flexSwitchCheckDefault">Enable {props.mode==="light"?"dark":"light"}mode</label>
</div>
      </div>
    </div>
  </nav>
  {/* <Link to="about/">About</Link> */}

  </>
    );
  }
  // Navbar.propTypes={
  //   title:PropTypes.string.isRequired
  // }
  // Navbar.defaultProps={
  //   title:"Enter title here"
  // }
  export default Navbar