import React from 'react'
import Container from './Container'
import img1 from "../assets/images/bajaj.jpg"
import img2 from "../assets/images/jawa.jpg"
import img3 from "../assets/images/ktm.png"
import img4 from "../assets/images/royal.jpeg"
import img5 from "../assets/images/yamaha.jpg"
function Search() {
    var users = [
        {
      
          name: "Bajaj",
          msg: "Im Demon ! Bajaj Dominar 400 - Pulsar NS 400 ",
          time:"11:52",
          pic:img1
        },
        {
          name: "Jawa",
          msg: "Im the range of classic !42Bobber - Perak.",
          time:"11:00",
          pic:img2
        },
        {
          name: "Ktm",
          msg: "Im the monster, Always ready to race ! Duke.390-duke.200",
          time:"11:30",
          pic:img3
        },
        {
          name: "Royal Enfield",
          msg: "Im the Leading one of the All bikes -!Himalayan 411, Scram 411",
          time:"11:52",
          pic:img4
        },
        {
          name: "Yamaha",
          msg: "IM the fastest and Coolest Monster !-R15 -MT08-MT14",
          time:"12:00",
          pic:img5
        }
      ]
      
  return (
    <div className='box'>
<div className='inbox'>
<input type='text' placeholder='search'></input>


</div>

{users.map((value)=>{
    return <Container value={value}/>
})

}

    </div>
  )
}

export default Search