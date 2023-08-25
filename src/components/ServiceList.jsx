import React from 'react'

const ServiceList = ({img, heading, paragraph}) => {
  return (
    <div>
        <img src ={img} alt='' />
        <h4>{heading}</h4>
        <p>{paragraph}</p>
    </div>
  )
}

export default ServiceList
