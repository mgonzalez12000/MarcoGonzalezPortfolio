import React from 'react'

const CardImageComponent = (props) => {
  return (
    <div class = "card" className = "card">
        <img class = "card-img-top" src = {props.imageSRC} alt =""/>
        <div class = "card-body">
            <h5 class="card-title">{props.cardTitle}</h5>
            <p class="card-text">{props.cardText}</p>
            <a href={props.buttonLink} class="btn btn-primary">{props.buttonText}</a>
        </div>
    </div>
  )
}
export default CardImageComponent