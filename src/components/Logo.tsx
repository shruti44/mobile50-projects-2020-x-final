import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logo.jpg')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 0,
    marginTop:20,
  },
});

export default memo(Logo);
