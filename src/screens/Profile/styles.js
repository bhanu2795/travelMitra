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
        flex: 1,
        backgroundColor: '#fafafa',
        paddingVertical: indent
    },

    profilePicContainer: {
        marginVertical: halfIndent
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    circle: {
        width: width / 4,
        height: width / 4,
        backgroundColor: '#fff',
        borderRadius: (width / 4) / 2
    },

    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'grey',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 3,
            },
        })
    },

    detailContainer: {
        backgroundColor: '#fff',
        padding: indent
    }

});

export default styles;
