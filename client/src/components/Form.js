import React, {useState} from 'react'
import axios from 'axios';
import styles from './form.module.css'

const Form = (props) => {
    const {products, setProducts} = props
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    
    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title: title,
            price: price,
            description: description,
        })
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                
                setTitle("")
                setPrice("")
                setDescription("")
                setProducts([...products, res.data])
            })
            .catch((err)=>{
                console.log(err)
            })
        console.log(title)

    }
  return (
    <>
        <h1>Product Manager</h1>
        <form onSubmit ={submitHandler}>
            <div className={styles.formdiv}>
                {/* use value like in authors */}
                <label htmlFor='title' className={styles.formlabel}>Title:</label>
                <input name='title' type='text' onChange = {(e)=>setTitle(e.target.value)}></input>
            </div>
            <div className={styles.formdiv}>
                <label htmlFor='price' className={styles.formlabel}>Price:</label>
                <input name='price' type='number' onChange = {(e)=>setPrice(e.target.value)}></input>
            </div>
            <div className={styles.formdiv}>
                <label htmlFor='description' className={styles.formlabel}>Description:</label>
                <input name='description' type='text' onChange = {(e)=>setDescription(e.target.value)}></input>
            </div>
            <input type="submit" className={styles.formbutton} value='Add Product'></input>
        </form>
    </>
  )
}

export default Form