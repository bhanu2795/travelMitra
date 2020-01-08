import { StyleSheet, Dimensions } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';
import { doubleIndent } from '../../styles/dimensions';

const { indent, halfIndent } = dimensions;
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

    root: {
        flex: 1
    },

    screenContainer: {
        margin: indent
    },

    optionsContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: doubleIndent,
        paddingVertical: indent,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#7774D1',
        borderRadius: 5
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }





});

export default styles;
