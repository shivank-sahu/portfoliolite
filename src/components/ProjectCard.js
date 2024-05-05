import React from 'react'
import { Col } from 'react-bootstrap'

export const ProjectCard = ({title,description,imgUrl,rl}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a href={rl} style={{color:'white'}}>
            <h4>{title}</h4>
          </a>

          <span>{description}</span>
        </div>
      </div>
    </Col>
  );

}
