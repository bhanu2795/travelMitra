import { StyleSheet, Dimensions } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';

const { indent, halfIndent } = dimensions;

const styles = StyleSheet.create({

    root: {
        flex: 1
    },

    screenContainer: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingVertical: indent
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default styles;
