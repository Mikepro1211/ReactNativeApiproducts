import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=20&limit=10');
      const data = await response.json();
      setProducts(data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign:'center',
    
  },
});

export default ProductList;
