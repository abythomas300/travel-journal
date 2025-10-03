function Entry(props) {

    const {country, LocationGoogleMapLink, locationName, date, description, img} = props;
    console.log(img)
    
    return(
        <div className="entry-container">
            <div className="entry-image">
                <img src={img.imageURL} alt={img.alt} />
            </div>
            <div className="entry-content">
                <div className="destination-metadata">
                    <span>{country}</span>
                    <span><a href={LocationGoogleMapLink}>View place on Google Map</a></span>
                </div>
                <div className="destination-name">
                    <h2>{locationName}</h2>
                </div>
                <div className="destination-date">
                    <p>{date}</p>
                </div>
                <div className="destination-description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Entry