import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()


    useEffect ( ()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
                
    })
            .catch(err=> console.log(err))
    },[])

    const updateProduct = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}` ,{
            title: title,
            price: price,
            description: description
        })
            .then(res=>{
                navigate('/')
            })
            .catch(err=>console.log(err))
    }
  return (
    <div>
        <h1>Update this Product:</h1>
        {/* http not https for deployment */}
        <form onSubmit={(updateProduct)}>
            <div>
                <label htmlFor='title'></label>
                <input name="title" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            </div>
            <div>
                <label htmlFor='price'></label>
                <input name="price" type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
            </div>
            <div>
                <label htmlFor='description'></label>
                <input name="description" type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}></input>
            </div>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default Update