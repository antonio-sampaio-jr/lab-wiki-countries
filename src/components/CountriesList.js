import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function CountriesList({countries, setCountries}) {
    
    const [isLogged, setIsLogged] = useState(true);

    if(!isLogged) {
        // Navigate é usado quando vamos redirecionar
        // Link é usado quando clicamos em botão ou em um link (ação feita pelo usuário)
        return <Navigate to="/erro" />
    }

    const renderCountries = countries.map((country, index) => {
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

    return (
        <Container>
            <Row>
                { renderCountries }
            </Row>
        </Container>
    )
}

export default CountriesList;