import './index.css'
import React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import pages from '../../utils/pages'
import dam from './dam.jpg'
import { Container } from '@mui/system';

function Header(props) {
    
    return (
        <>
            <div className="phil-header">
                <div className="phil-navbar-container">
                    <div className="phil-navbar">
                            {pages.map((page,idx) => {
                                return (
                                    <Link 
                                        key={idx} 
                                        to={page.link} 
                                        style={{textDecoration:'inherit', color:'inherit'}} >
                                        <Button variant="text">
                                            {page.title}
                                        </Button>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
                    

                <div className="title-text">
                        Hi, I'm Phil
                </div>
                
                <img className="bg-img" src={dam} alt="pic of a dam"></img>
                    
            </div>
            
            
        </>
    )

}


export default Header;