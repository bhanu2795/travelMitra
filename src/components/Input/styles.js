import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';
import { halfIndent } from '../../styles/dimensions';

const { indent, verticalIndent } = dimensions;

export default StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        height: verticalIndent * 2.8,
        paddingLeft: indent,
        borderColor: colors.third,
        borderWidth: 3,
        borderRadius: 4,
    },
    input: {
        flex: 5,
        color: colors.fourth,
        fontSize: fontSizes.medium,
        justifyContent: 'center',
        height: '100%',
    },
    icon: {
        paddingLeft: indent / 1.3,
        paddingRight: indent / 1.3,
    },
    label: {
        paddingBottom: indent / 2,
        paddingTop: indent / 2,
        fontSize: fontSizes.medium,
        fontWeight: '700',
    },
    error: {
        fontSize: fontSizes.small,
        marginTop: halfIndent,
        marginLeft: halfIndent,
        color: colors.error,
        lineHeight: fontSizes.small,
    },
    prefix: {
        paddingLeft: indent,
        paddingRight: indent,
        color: colors.primary,
        fontSize: fontSizes.medium,
        fontWeight: '700',
    },
    isNotValid: {
        borderWidth: 3,
        borderColor: colors.error,
    },
});