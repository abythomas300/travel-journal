import Header from "./components/Header"
import Entry from "./components/Entry"
import places from "./places.json"

const entryElementsTogether = places.map((place)=>{
    return <Entry 
            key = {place.locationName}
            country = {place.country}
            LocationGoogleMapLink = {place.LocationGoogleMapLink}
            locationName = {place.locationName}
            date = {place.date}
            description = {place.description}
            img = {place.img[0]}
           />
})

function App() {
    return (
        <>
            <Header />
            {entryElementsTogether}
        </>
    )
}

export default App