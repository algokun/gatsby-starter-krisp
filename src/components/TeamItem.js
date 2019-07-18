import React from "react"
import { SocialIcon } from "react-social-icons"
import Fade from "react-reveal/Fade"

function TeamItem({ src, title }) {
  return (
    <Fade bottom>
      <div className="col-lg-4 my-4 col-sm-12">
        <img src={src} className="img-fluid rounded-circle" width="200px" />
        <h3 className="mt-5">{title}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          harum eum odit tempore quos dolor nesciunt rerum est totam alias,
          suscipit,
        </p>
        <SocialIcon className="mr-4" url={"http://twitter.com/" + title} />
        <SocialIcon className="mr-4" url={"http://github.com/" + title} />
        <SocialIcon className="mr-4" url={"http://facebook.com/" + title} />
      </div>
    </Fade>
  )
}

export default TeamItem
