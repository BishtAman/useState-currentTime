import React from 'react'
const Static = () => {
    const [count, setCount] = React.useState(0)
function counting(){
    setCount(prev=> prev+1)  //this is a function that will be called every time the count state changes
}
  return (
    <section>
    <h1 className='text-[30px]'>This is a Static Counter</h1>
    <section className='space-x-5'>
        <span className='text-[30px]'>{count}</span>
        <button className='text-[25px] bg-slate-900 w-8' onClick={counting}>+</button>
    </section>
    </section>
  )
}
export default Static
