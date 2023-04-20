import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ProductItem = ({product}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: product.images[1]}} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1F7870',
    borderRadius: 5,
    elevation: 5,
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  content: {
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    fontSize: 10,
    
  },
  price: {
    fontSize: 16,
    color: 'white',
  },
});

export default ProductItem;
