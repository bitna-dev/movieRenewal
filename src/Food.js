import React from "react"
// import PropTypes, { number, string } from "prop-types"

function Food({food}){
    console.log(food)
    return(
        <ul>
            {food.map((x) => <li key={x.id}><div>
                <img src={x.image} alt={x.name} width="200px"/>
                </div>
                <h2>{x.name}</h2>
                <h3>{x.raiting}/5.0</h3>
                </li>)}
        </ul>
    )
}
// Food.propTypes = {
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     raiting: PropTypes.number.isRequired,
// }

export default Food;



