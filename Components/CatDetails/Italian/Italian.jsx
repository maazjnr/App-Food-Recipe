import { View, Text, ScrollView, ActivityIndicator, Image} from 'react-native'
import GetData from '../../../Hook/getData';
import styles from './ItalianStyle';

const Italian = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    {isLoading ? (
      <ActivityIndicator size="large" color="#000" />
    ) : error ? (
      <Text>There's an error trying to fetchData</Text>
    ) : (
      data?.map((item) => (
        <TouchableOpacity style={styles.foodBtn} key={item.id}>
          <Text style={styles.titleText}> {item.title} </Text>
          <Image
            source={{ uri: `${item.image}` }}
            resizeMode="cover"
            style={styles.cardImage}
          />
        </TouchableOpacity>
      ))
    )}
  </ScrollView>
  )
}

export default Italian