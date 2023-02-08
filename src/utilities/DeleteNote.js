import { AsyncStorage } from 'react-native'

export default DeleteNote = async (key) => {
    console.log('deleting note: (' + key + ')')
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        console.log(error)
    }
}