import React from 'react'
type CountryCardProp={
    name:string,
    capital:string,
}
const CountryCard = ({name,capital}:CountryCardProp) => {
return (
    <>
    <h3 >{name},{capital}</h3>
</>
  )
}

export default CountryCard