import { StyleSheet, Dimensions } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';

const { width, height } = Dimensions.get('window');
const { indent, halfIndent } = dimensions;

const styles = StyleSheet.create({

    slide: {
        width,
        height,
        alignItems: 'center'
    },

    animContainer: {
        width: width / 1.2,
        height: height / 1.5,
        padding: indent
    },

    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
    },

    title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    },

});

export default styles;