import { View, Text, TextInput, Image} from 'react-native';
import styles from '../HomeHeaderStyle';
import React from 'react'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} placeholder='Search recipes' />
      <Image style={styles.headerImage} source={require('../../Asset/MaazDp.jpg')} />
    </View>
  )
}

export default HomeHeader;