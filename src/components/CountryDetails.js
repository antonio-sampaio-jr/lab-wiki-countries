import { Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

function CountryDetails({ countries }) {
    const { countryId } = useParams()

    const foundCountry = countries.find((oneCountry) => {
        return oneCountry.alpha3Code === countryId;
    });
    
    const renderBorders = foundCountry.borders.map((country, index) => {
        console.log(country);
        let flag = "https://flagpedia.net/data/flags/icon/72x54/"+country.alpha2Code.toLowerCase()+".png";
        let link = "/countries/"+country.alpha3Code;
        return (
            <div className="col-5">
               <div className="list-group">
                 <Link to={link}><img src={flag} alt="" width="72" height="54"/>{country.name.common}</Link>
               </div>
            </div>     
        )
    })


    let flag = "https://flagpedia.net/data/flags/icon/72x54/"+foundCountry.alpha2Code.toLowerCase()+".png";
       
    return (
        <Card style={{ width: '90%', margin: 'auto' }}>
            <Card.Header><img src={flag} alt="" width="72" height="54"/>{foundCountry.name.common}</Card.Header>
            <Card.Body>
                <Card.Text>Capital: {foundCountry.capital}</Card.Text>
                <Card.Text>Area: {foundCountry.area}</Card.Text>
                <Card.Text>Borders: {foundCountry.borders}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CountryDetails;