import React, { useEffect, useState } from 'react'
import styles from './display.module.css'
import axios from 'axios'
import { Link} from 'react-router-dom'


const Display = (props) => {
    const{products, setProducts} = props
    // const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
           
            .then((res)=>{
                // console.log("RESDATA", res.data)
              
                setProducts(res.data)
            })
            .catch((err)=>{console.log(err)})
    }, [])
    // console.log("PRODUCTS", products)
  return (
    <div>
        <h1>All Products</h1>
        {
            products.map((product, index)=>(
                <div key="index" className={styles.product}>
                    <Link to={`/${product._id}`} className={styles.detail_link}>{product.title}</Link>
                    <Link to={`/edit/${product._id}`} className={styles.edit_link}>Edit</Link>
                </div>

            ))
        }
        {/* {products.map((product, index) =>{
            {console.log(product)}
                <div key={index}> 
                {product.description}
                {product.description}
                    <Link to={`/${product._id}`}>{product.title}</Link>
                </div>
        })
        } */}
    </div>
  )
}

export default Display