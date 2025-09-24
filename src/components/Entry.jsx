import mountFuji from '../assets/mount-fuji.jpeg'

function Entry() {
    return(
        <div className="entry-container">
            <div className="entry-image">
                <img src={mountFuji} alt="destination image" />
            </div>
            <div className="entry-content">
                <div className="destination-metadata">
                    <span>Japan</span>
                    <span><a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View place on Google Map</a></span>
                </div>
                <div className="destination-name">
                    <h2>Mount Fuiji</h2>
                </div>
                <div className="destination-date">
                    <p>12 Jan, 2021 - 24 Jan, 2021</p>
                </div>
                <div className="destination-description">
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </div>
    )
}

export default Entry