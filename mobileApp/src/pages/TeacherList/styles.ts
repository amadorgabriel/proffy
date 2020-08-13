import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherList:{
        marginTop: -40
    },
    searchForm:{
        marginBottom: 28,
    },
    label:{
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },
    input:{
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputBlock:{
        width: '48%'
    },
    submitButton:{
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    submitButtonText:{
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
    filterButtonHeader:{
        alignItems: 'center',
        width: 40
    }
})

export default styles