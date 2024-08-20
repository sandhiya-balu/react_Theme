import React, { useContext } from 'react'
import './Hello.css'
import i2 from './i10.png'
import { colorContext } from './Logo'



const Hello = () => {
  const theme = useContext(colorContext);

  const image1 ={
    height : "450px",
    width : "500px",
    marginTop : "20px",
    borderRadius : "15px"
  }
  const container ={
    display : "flex",
  }
  const container2 ={
    marginLeft : "40px",
    width : "700px"
  }
  const text ={
    fontSize : "17px",
    lineHeight :"1.5",
    color : "black"
  }
  const contact ={
    backgroundColor: theme === 'light' ? "#cacafc" : "#6d30fc",
    padding : "10px",
    borderRadius : "10px"
  }
  const footer ={
    backgroundColor: theme === 'light' ? "#cacafc" : "#4b0fd6",
    color: theme === 'light' ? "black" : "white",
    position: "fixed",
    bottom : "0px",
    height : "120px",
    width :"100%",
    textAlign : "center"
  }
  const main ={
    marginTop : "100px",
    position : "fixed",

  }
  return (
    <div style={main}>
      <div style={container}>
        <div><img src={i2} style={image1} className='image1'/></div>
        <div style={container2}>
          <h2 style={{color :"black"}}>About us :</h2>
          <p style={text}> Med School University, part of the University 
            of Oxford, is renowned for its world-class education and 
            research in the medical sciences. With a rich history dating 
            back centuries, it stands at the forefront of medical innovation, 
            offering cutting-edge facilities and a curriculum that blends
             traditional knowledge with modern practices.
              The university attracts some of the brightest 
              minds from around the globe, fostering an 
              environment of intellectual rigor and collaborative research.
               Oxford's medical graduates are highly respected,
                known for their exceptional clinical skills and
                 contributions to the field of medicine.</p>
          <div style={contact} className='contact'>
             <h2>Contact Us :</h2>
             <b>Med School university</b>
             <p>California , United States</p>
             <p>1234556 | medschool@gmail.com</p>
          </div>
        </div>
      </div>
      <div style={footer} className='footer'>
        <p>© | All Rights reserved</p>
        <p>Med School University</p>
        <p>California , USA</p>
        


      </div>
      
       
    </div>
  )
}

export default Hello



