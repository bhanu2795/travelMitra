import { StyleSheet, Dimensions, Platform } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';

const { width, height } = Dimensions.get('window');
const { indent, halfIndent, doubleIndent } = dimensions;


const styles = StyleSheet.create({

    root: {
        flex: 1
    },

    container: {
        width: '100%',
        marginVertical: doubleIndent,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    secondContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7774D1',
        borderRadius: 8
    },

    imageBackground: {
        width: '100%',
        height: '100%'
    },

    registerContainer: {
        alignItems: 'center',
        width: '100%',
        flex: 1,
        padding: 2 * indent
    },


    title: {
        fontSize: 32,
        textAlign: 'center',
        textTransform: 'uppercase'
    },

    text: {
        color: '#fff'
    },

    rowInputs: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },

    twoInputs: {
        flex: 1
    },

    noteContainer: {
        marginVertical: dimensions.verticalIndent / 2,
        width: '100%'
    },

    form: {
        // alignItems: 'center',
        width: '100%'
    },

    input: {
        width: '100%',
        flexDirection: 'row'
    },

    selector: {
        alignItems: 'center',
        borderRadius: 4,
    },

    registerBtn: {
        marginVertical: dimensions.verticalIndent,
        height: 50,
        backgroundColor: colors.bexSecondaryText,
        borderRadius: 4
    },

    selectorContainer: {
        marginBottom: dimensions.verticalIndent,
    },

    bold: {
        fontWeight: '900',
        marginVertical: dimensions.verticalIndent
    },

    iconStyle: {
        borderRightWidth: 1,
        borderRightColor: colors.bexPrimaryText
    },

    textButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    formOptions: {
        flexDirection: 'row',
        marginVertical: indent / 2,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    rememberText: {
        fontSize: 12
    },

    forgetText: {
        color: '#148BEE',
        fontSize: 12
    },

    signinBtn: {
        flex: 1,
        height: dimensions.verticalIndent * 3,
        borderRadius: 8
    },

    btnText: {
        padding: indent,
        fontWeight: '900',
        fontSize: 18
    },

    icons: {
        color: '#fff'
    },

    codeInput: {
        flex: 1,
        flexGrow: 1
    },

    phoneInput: {
        flex: 1,
        flexGrow: 2
    }

});

export default styles;