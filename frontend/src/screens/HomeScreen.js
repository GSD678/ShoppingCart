import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Row, Col } from "react-bootstrap"
import Product from '../components/Product'
import {listProducts} from "../actions/productActions"
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
    
    const dispatch= useDispatch()
    const productList = useSelector((state) => state.productList)
    const {loading, error, products} = productList
    useEffect(() => {
       dispatch(listProducts())
    }, [dispatch])


  return (
      <>
          <h1>Latest Products</h1>
          {loading ? (
              <Loader />
          ): error ? (
              <Message variant="danger">{error}</Message>
          ) : (
              <Row>
              {products.map((p) => (
                  <Col key={p.id} sm={12} mdf={6} lg={4} xl={3}>
                      <Product product={p} />
                  </Col>
              ))}
             </Row>
          )}

      </>
  )
}

export default HomeScreen
