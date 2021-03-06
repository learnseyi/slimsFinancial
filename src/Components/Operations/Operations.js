import './Operations.css';
import React from 'react';
import Credentials from '../Credentials/Credentials';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBox,
    MDBLink
}
from 'mdbreact';
import ImageUrl from './images/Images'
const Operations = ()=>{

    return <div >
        <MDBBox  className='wrapper'>
        <MDBContainer style={{padding:0}} >
            <MDBRow className=' pt-5 '>
                {ImageUrl.map((mainUrl,i)=>{
                    const {url,name,childLink} = mainUrl
                    return(
                        <MDBCol  key= {Date.now().toString()+ url} md='4' className='p-3 mb-3' >
                    <div   className='d-flex p-0'>
                        <img src={url}   alt = {name}  style={{width:'40px',marginRight:'15px'}}/>
                        <h4>{name}</h4>
                    </div>
                    <Router>
                        {childLink.map( (link,i) =>{
                            return(
                                <MDBLink to='!#' key={Date.now().toString()+ link}className='pl-5'>
                                    <p style ={{color:'#000',marginRight: '5px'}} >&mdash; {link}</p></MDBLink>
                            )
                        } )}
                    </Router>
                </MDBCol>
                    )
                })}
                
            </MDBRow>
        </MDBContainer>
        </MDBBox>
        <Credentials/>
    </div>
    
}

export default Operations;
