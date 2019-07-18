import React from "react"
import Fade from "react-reveal/Fade"

function ServiceItem({ src, title }) {
  return (
    <Fade bottom>
      <div className="col-lg-3 my-4 col-sm-12">
        <img src={src} width="128px" />
        <h3 className="mt-5">{title}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          harum eum odit tempore quos dolor nesciunt rerum est totam alias.
        </p>
      </div>
    </Fade>
  )
}

export default ServiceItem
