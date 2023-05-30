import { useEffect, useState } from "react";
import Header from './Header'
import Section from './Section'

function Home(){
    const [cotacao, setCotacao] = useState(0);
    useEffect(() => {
        const url = "https://economia.awesomeapi.com.br/last/USD-BRL"
        fetch(url)
        .then((response) => response.json())
        .then((moeda) => {setCotacao(moeda)})
    },[])
    localStorage.setItem('@cotacao', JSON.stringify(cotacao));
    
    return(
        <>
           <Header/>
           <Section/>
        </>
    )
}

export default Home;