import { Platform, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: "#fcede9",
        width: "100%",
        height: "100%",
        position: "relative"
    },
    containerTextInput: {
        top: 31,
        width: "100%",
        padding: 31
    },
    textInput: {
        backgroundColor: "white",
        height: 47,
        borderRadius: 37,
        paddingTop: 11,
        paddingBottom: 11,
        paddingLeft: 19,
        paddingRight: 19,
        elevation: Platform.OS === 'android' ? 1 : 0
    },
    containerListImageRound: {
        marginTop: 57,
        marginLeft: 19,
        marginRight: 19
    },
    elementImageRound: {
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 50,
        width: 78,
        height: 78,
        margin: 13,
        elevation: Platform.OS === 'android' ? 3 : 0
    },
    imageRound: {
        width: 71,
        height: 71,
        borderRadius: 50
    },
    containerAnimalLists: {
        margin: 19
    },
    containerAnimalListsHeadText: {
        padding: 11
    },
    animalHeadText: {
        fontSize: 23,
        fontWeight: "bold",
        letterSpacing: 0.7,
        color: "#47456d"
    },
    containerCard: {
        marginTop: 27,
        marginLeft: 11,
        marginRight: 11
    },
    elementCard: {
        position: "relative",
        margin: 13,
        borderRadius: 27,
        backgroundColor: "#fff",
        elevation: Platform.OS === 'android' ? 3 : 0
    },
    imageCard: {
        width: 231,
        height: 231,
        borderTopRightRadius: 27,
        borderTopLeftRadius: 27
    },
    descriptionCard: {
        borderBottomRightRadius: 13,
        borderBottomLeftRadius: 13,
        padding: 9,
        paddingLeft: 17,
        paddingRight: 13,
    },
    descriptionNomCard: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#47456d",
        letterSpacing: 0.7,
        marginBottom: 9
    },
    containerDescriptionAutreCard: {
        marginLeft: 11,
        color: "#47456d", 
    },
    descriptionAutreCard: {
        fontWeight: "bold",
        color: "#47456dab", 
        opacity: 0.3, 
        letterSpacing: 0.7, 
        margin: 7
    },
    containerEditBtn: {
        position: "absolute",
        bottom: 13,
        right: 11
    },
    editBtn: {
        backgroundColor: "#fcede9",
        padding: 3,
        borderRadius: 7,
        marginTop: 5,
        marginBottom: 5,
        elevation: Platform.OS === 'android' ? 3 : 0
    },
    imageEditBtn: {
        width: 17,
        height: 17
    },
    containerAddBtn: {
        position: "absolute",
        bottom: 19,
        right: 19
    },
    addBtn: {
        width: 51,
        height: 51,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 17,
        backgroundColor: "#47456d",
        elevation: Platform.OS === 'android' ? 3 : 0
    },
    textAddBtn: {
        fontSize: 35,
        flex: 1,
        color: "#fff"
    }
});