import React, {useState, useEffect} from 'react'
import {Navigate, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const Detail = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [thisProduct, setThisProduct] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            
            setThisProduct(res.data)
            
        })
        .catch((err)=> {console.log(err)})
    })
    const deleteProduct = () =>{
      axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
      navigate('/')
    }
    
  return (
    <div>
        
        <h1></h1>
        <h1>{thisProduct.title}</h1>
        <h2>Price: ${thisProduct.price}</h2>
        <h3>Description: {thisProduct.description}</h3>
        <button onClick={(e)=>{deleteProduct(thisProduct._id)}}>Delete</button>
    </div>
  )
}

export default Detail