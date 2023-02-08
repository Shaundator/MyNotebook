// Newer ones
import Index from "./src/Index"

export default function App() {
  return Index()
}

// for future use:
/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

options={{
            headerRight: (navigation) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("NewNotepad")}
              >
                <Text style={{ fontSize: 20 }}>+</Text>
              </TouchableOpacity>
            ),
          }}
    */