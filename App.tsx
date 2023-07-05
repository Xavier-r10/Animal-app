import { Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { style } from './assets/style/styles';
import { listAnimals } from './assets/data/animals';
import { AnimalModel } from './models/animal.model';

export default function App() {

  return (
	<View style = {style.container}>
		<View style = {style.containerTextInput}>
			<TextInput style = {style.textInput}
				placeholder="Rechercher ..."
			/>
		</View>
		<View>
			<ScrollView horizontal = {true} style = {style.containerListImageRound}>
			{
				listAnimals.map((animal: AnimalModel) => (
					<View key = {animal.id} style = {style.elementImageRound}>
						<Image source = {{ uri: animal.image }}
							style = {style.imageRound} />
					</View>
				))
			}
			</ScrollView>
		</View>
		<View style = {style.containerAnimalLists}>
			<View style = {style.containerAnimalListsHeadText}>
				<Text style = {style.animalHeadText}>Liste d'animaux</Text>
			</View>
			<View>
				<ScrollView horizontal = {true} style = {style.containerCard}>
					{
						listAnimals.map((animal: AnimalModel) => (
							<View key = {animal.id} style = {style.elementCard}>
								<Image source = {{ uri: animal.image }}
									style = {style.imageCard} />
								<View style = {style.descriptionCard}>
									<Text style = {style.descriptionNomCard}>{animal.nom}</Text>
									<Text style = {style.containerDescriptionAutreCard}>
										<Text style = {style.descriptionAutreCard}>Couleur:</Text> {animal.couleur}
									</Text>
									<Text style = {style.containerDescriptionAutreCard}>
										<Text style = {style.descriptionAutreCard}>Type:</Text> {animal.type}
									</Text>
								</View>
								<View style = {style.containerEditBtn}>
									<TouchableOpacity style = {style.editBtn}>
										<Image source={require('./images/edit.png')}
											style = {style.imageEditBtn} 
										/>
									</TouchableOpacity>
									<TouchableOpacity style = {style.editBtn}>
										<Image source={require('./images/delete.png')}
											style = {style.imageEditBtn} 
										/>
									</TouchableOpacity>
								</View>
							</View>
						))
					}
				</ScrollView>
			</View>
		</View>
		<View style = {style.containerAddBtn}>
			<TouchableOpacity style = {style.addBtn}>
				<Text style = {style.textAddBtn}>+</Text>
			</TouchableOpacity>
		</View>
	</View>
  );
}

