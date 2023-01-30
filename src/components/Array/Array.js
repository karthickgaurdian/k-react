import React from 'react'

const Array = () => {

    let ls=[3,5,7]
    let i= 2;
//case 1
    let lsmul2 = ls.map(item =>item * i) 

    //case2
    let jsxlist = ls.map((item,index) => <li key={index}>{item}</li>)

    let newlist = ls.map((item,index)=> <li key={item}>{index}</li>)
  return (
    <>
    
    <h1>
    {lsmul2}
    </h1>
    <h1>
    {jsxlist}
    </h1>
    <h1>
        {newlist}
    </h1>
    </>
  )
}

export default Array;