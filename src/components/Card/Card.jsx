import React from 'react'
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-white'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-white"> ... </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-white"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;