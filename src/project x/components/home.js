import React from 'react'

export function Home(props) {
  const{hobby} = props
  return (
    <div className='contain'>
        <p>
          your name is {props.name} and your age is {props.age} and your hobby is {hobby.hobby1}
        </p>
       <button className='btn'>yooooooo</button>
    </div>
  )
}

export default Home