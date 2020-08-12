import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding: 40,
        paddingHorizontal: 30,
        backgroundColor: '#8257e5'
    },
    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    title:{
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        marginVertical: 40,
        maxWidth: 160
    }
})

export default styles;