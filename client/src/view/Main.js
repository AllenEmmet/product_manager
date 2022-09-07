import React from 'react'
import { useState } from 'react'
import Form from '../components/Form'
import Display from '../components/Display'

const Main = () => {
    const [products, setProducts] = useState([])
  return (
    <div>
        <Form products={products} setProducts={setProducts}/>
        <Display products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Main