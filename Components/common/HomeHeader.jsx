import { View, Text, TextInput, Image} from 'react-native';
import styles from '../HomeHeaderStyle';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeHeader = () => {
  return (
    < TouchableOpacity style={styles.container}>
      <Image style={styles.headerImage} source={require('../../Asset/MaazDp.jpg')} />
    </ TouchableOpacity>
  )
}

export default HomeHeader;