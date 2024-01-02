import React from 'react'

const TitleComponent = (props) => {
    return (
        <div>
            <div className='titles' id={props.titleID}>
                <h3 id="leftHeader" class="border-light text-light p-2">{props.title}</h3>
            </div>
        </div>
  )
}
export default TitleComponent