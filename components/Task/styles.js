import { StyleSheet } from "react-native";

export default StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        justifyContent: 'space-between',
        marginBottom: 20,
        borderColor: '#F6F6F6',
        borderWidth: 1,
        shadowColor: '#000000',
        shadowRadius: 10

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {
        maxWidth: '80%',
    },
    square: {
        width: 24,
        height: 24,
        borderRadius: 5,
        marginRight: 15
    },
    circular: {
        width:12,
        height:12,
        borderColor: '#55BCF6',
        borderWidth:2,
        borderRadius:5,
    }
});