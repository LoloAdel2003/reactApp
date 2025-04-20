import React from 'react'

const Break = (props) => {
  return (
    <>
    <section class="dark d-flex mt-5 mb-5   justify-content-center align-items-center">
  
  <div class="  fs-4  w-75 pt-4 pb-4 text-center fs-3 fw-normal ">
    <span> {props.one}
    </span><br />
  
{props.two}  </div>
  </section>
    </>
  )
}

export default Break
