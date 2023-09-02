import React from 'react'

 const Dynamic = () => {
    const now = new Date().toLocaleTimeString();
     const [count, setCount] = React.useState(now)
    setTimeout(()=>{
        const now = new Date().toLocaleTimeString();
        setCount(now)
    },1000)

  return (
    <section>
    <h1 className='text-[30px]'>This is a Dynamic Date Counter</h1>
    <section>
        <span className='text-[27px]'>{count}</span>
    </section>
    </section>
  )
}
export default Dynamic