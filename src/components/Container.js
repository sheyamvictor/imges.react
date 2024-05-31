import React from 'react'

function Container(props) {
  return (
    <div className='contbox'>
        <div className='innerbox'>
            <div className='photo'>
                <img src={props.value.pic} alt='pic'></img>
                <div>
                <h1>{props.value.name}</h1>
                <p>{props.value.msg}</p>
            </div>



            </div>
            <div className='con-para'>
    <p>{props.value.time}</p>
    <p>⭐</p>
</div>
        </div>




    </div>
  )
}

export default Container