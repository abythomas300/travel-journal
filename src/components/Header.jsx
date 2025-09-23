import GlobeImage from "./../assets/globe.png"

function Header() {
    return (
        <>
            <div className="header-container">
                <img src={GlobeImage} alt="globe image" />
                <h1>MyTravelJournal</h1>
            </div>
        </>
    )
}

export default Header