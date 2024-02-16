import React from 'react'
import "../CSS/HomePage.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const HomePage = () => {

  const history = useHistory()

  return (
    <section className='shapedividers_com-2743'>

      <div className="left">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. fficiis vero nam quaerat beatae consequuntur eveniet?Officiis vero nam quaerat beatae consequuntur eveniet? Reprehenderit explicabo adipisci numquam eos facilis dolore </div>
        <div>Officiis vero nam quaerat beatae consequuntur eveniet? Reprehenderit explicabo adipisci numquam eos facilis dolore, nihil vitae aliquid optio quos totam, et perspiciatis!</div>
      </div>
      <div className="right">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis distinctio culpa cupiditate sint hic quam repudiandae ratione beatae dignissimos! <br />
          Ad dicta facere, repudiandae expedita ipsum dolore facilis. Corrupti, voluptates et.</div>

        <button onClick={()=>{history.push("/email")}} id='worm'>Enter Email</button>
      </div>
    </section>
  )
}

export default HomePage
