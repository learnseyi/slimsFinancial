import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css'

const FooterPage = () => {
  return (
    <MDBFooter color='indigo darken-4' className="font-small pt-4">
      <MDBContainer fluid className=" text-md-left">
        <MDBRow>
          <MDBCol md="6" >
            <div className="footer-title">
            <h5 >About Slim's Financial</h5>
            <ul>
              <li>
                <a href='#!'>Who We Are</a>
              </li>
              <li>
              <a href='#!'>What we do</a>
              </li>
              <li>
              <a href='#!'>Where we are</a>
              </li>
            </ul>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div className='footer-title'>
            <h5 >our services</h5>
            <MDBRow>
            <MDBCol md="6">
            <ul>
              <li >
                <a href="#!">&mdash; &nbsp;banking</a>
              </li>
              <li >
                <a href="#!">&mdash; &nbsp;investment management</a>
              </li>
              <li >
                <a href="#!">&mdash; &nbsp;insurance</a>
              </li>
            </ul>
            </MDBCol>
            <MDBCol md="6">
            <ul>
              <li >
                <a href="#!">&mdash; &nbsp;Investor & Treasury Services</a>
              </li>
              <li >
                <a href="#!">&mdash; &nbsp;wealth management</a>
              </li>
              <li >
                <a href="#!">&mdash; &nbsp;capital markets</a>
              </li>
            </ul>
            </MDBCol>
            </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 grey darken-4">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#Home"> Slim's Financial </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;