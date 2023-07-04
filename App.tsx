import { Button, Text, TextInput, View, Image } from 'react-native';
import { style } from './style/styles';
import { listAnimals } from './data/animals';
import { AnimalModel } from './models/animal.model';

export default function App() {

  return (
    <View style={style.container}>
     <View style={style.containerTextInput}>
      <TextInput style={style.textInput}
        placeholder="Recherche..."
      />
     </View>

     {/* <View> */}
      <View>
        <Image source={{ uri: "https://i.pinimg.com/originals/69/2e/64/692e6421912e29184674dd58ef9f5e18.jpg" }} />
      </View>
     {/* </View> */}
    </View>
  );
}

