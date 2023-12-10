import Cards from 'react-credit-cards-2'

export default function Tarjeta({card}){
    return(
        <Cards
            number={card.nro_tarjeta}
            expiry="****"
            cvc={card.cvv}
            name={card.cliente.first_name}
            focused={"name"}
            preview={true}
            issuer={card.banco}
        />
    )
}