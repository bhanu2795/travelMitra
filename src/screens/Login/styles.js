import { StyleSheet, Dimensions, Platform } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';
import { doubleIndent } from '../../styles/dimensions';

const { width, height } = Dimensions.get('window');
const { indent, halfIndent, verticalIndent } = dimensions;


const styles = StyleSheet.create({

    imageBackground: {
        width,
        height,
        padding: indent,
        // backgroundColor: '#212B40'
    },

    root: {
        flex: 1
    },

    loginContainer: {
        alignItems: 'center',
        flex: 1,
        width: '100%',
        padding: indent
    },

    container: {
        width: '100%',
        marginTop: 2 * doubleIndent,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    title: {
        fontSize: 32,
        textAlign: 'center',
        textTransform: 'uppercase'
    },

    text: {
        color: '#fff'
    },

    form: {
        alignItems: 'center',
        width: '100%',
        marginTop: 3 * indent
    },

    secondContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7774D1',
        borderRadius: 8
    },

    forgetText: {
        color: '#148BEE',
        fontSize: 12
    },

    rememberText: {
        fontSize: 12
    },

    formOptions: {
        flexDirection: 'row',
        marginVertical: indent / 2,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    loginBtn: {
        flex: 1,
        height: dimensions.verticalIndent * 3,
        borderRadius: 8
    },

    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    btnText: {
        padding: indent,
        fontWeight: '900',
        fontSize: 18
    },

    other: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: indent * 2
    },

    contact: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: indent
    },

    icons: {
        color: '#fff'
    },

    iconContainer: {
        backgroundColor: '#3A3897',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 3.8 * indent,
        height: 3.8 * indent,
        padding: indent
    },

    noteContainer: {
        marginVertical: dimensions.verticalIndent / 2,
        width: '100%'
    },

    input: {
        width: '100%'
    }

});

export default styles;