import './index.css'
import pages from '../../utils/pages'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';


function SmallHeader(props) {
    
    return (
        <>
            <div className="phil-header">
                {/* classes here can be found in header's css file */}
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
                <img src={props.img} alt="skyline view" />
            </div>
            
            
        </>
    )
}

export default SmallHeader