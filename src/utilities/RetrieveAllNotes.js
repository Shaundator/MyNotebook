import { AsyncStorage } from 'react-native'

export default async function retrieveAllNote(){
    try {
      const keys = await AsyncStorage.getAllKeys()
      const values = await AsyncStorage.multiGet(keys)
      return values
    } catch (error) {
      console.log(error)
    }
}