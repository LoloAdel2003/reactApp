import React from 'react'

const Title = (props) => {
  return (
    <div class="title light text-center fw-bold mb-4 fs-6 position-relative  mx-auto pt-5 pb-5 rounded-pill ">
            <span class="position-absolute  z-n1 shadow-lg rounded-circle "></span>
            <span class="position-absolute z-n1 shadow-lg rounded-circle"></span>


            <span class="fs-5 ">{props.title}</span>
          </div>
  )
}

export default Title
