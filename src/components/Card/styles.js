import { StyleSheet, Platform } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

const { indent, halfIndent, verticalIndent, doubleIndent } = dimensions;

export default StyleSheet.create({

  containerStyle: {
    // padding: indent,
    borderRadius: 8,
    backgroundColor: '#28334A'
  },
  
  containerSize: {
    marginHorizontal: halfIndent,
    padding: halfIndent
    // width: doubleIndent * 3,
    // height: doubleIndent * 4
  },

  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: colors.bexPrimary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    })
  },

  titleStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    borderRadius: 8,
    paddingVertical: indent / 2,
    backgroundColor: colors.bexDark
  },

  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#FFFFFF'
  }

  // tableHeaderStyle: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   backgroundColor: colors.bexDark,
  //   paddingVertical: halfIndent / 2
  // },

  // recordStyle: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   // marginVertical: halfIndent / 4
  // },

  // recordBackodd: {
  //   backgroundColor: colors.bexAltDark
  // },

  // recordBackodd: {
  //   backgroundColor: colors.bexSecondary
  // },

  // headerText: {
  //   fontSize: 15,
  //   color: colors.bexPrimaryText
  // },

  // recordText: {
  //   fontSize: 10,
  //   color: colors.bexPrimaryText
  // },


});
