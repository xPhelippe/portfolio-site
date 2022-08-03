import SmallHeader from '../small-header'
import './index.css'
import skyline from './skyline.jpeg'
import data from '../../utils/app-data/data'
import AppCard from '../app-card'

function Apps(props) {

    return (
        <>
            <SmallHeader img={skyline}/>
            <div className="app-Container">
                {data.map(data => {
                    return <AppCard data={data} />
                })}
            </div>
        </>
        
    )
}

export default Apps