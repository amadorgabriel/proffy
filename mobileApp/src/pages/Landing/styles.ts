import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },
    banner:{
        width: '100%', //se n é setado o valor da imagem
        resizeMode: 'contain' //mostra a img sem cortar
    },
    title:{
        color: '#FFF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        lineHeight:30,
        marginTop: 30
    },
    titleBold:{
        fontFamily: 'Poppins_600SemiBold',
    },
    buttonsContainer:{
        marginTop: 40,
        justifyContent: 'space-between'
    },
    button:{
        height: 70,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#333',
        borderRadius: 8,
        alignItems: 'center',
        padding: 24,
    },
    buttonPrimary:{
        backgroundColor: '#9871f5'
    },
    buttonSecondary:{
        backgroundColor: '#04d361',
        marginTop: 10         
    },
    buttonText:{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
        marginLeft: 20,
    },
    totalConnections:{
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 300,
        marginTop: 30
    }
    



});

export default styles;