import { AsyncStorage } from 'react-native'

export default async function SaveNote(key, value){
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.log(error)
    }
}