import { AsyncStorage } from 'react-native'


const retrieveNote = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value;
    } catch (error) {
      console.log(error)
    }
}