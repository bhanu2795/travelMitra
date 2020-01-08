import { StyleSheet } from 'react-native';
import colors from './colors';
import { indent, doubleIndent, headerHeight, halfIndent } from './dimensions';

const styles = StyleSheet.create({
  blockStyle: {
    backgroundColor: colors.white,
  },

  containerStyle: {
    paddingLeft: doubleIndent,
    paddingRight: doubleIndent,
  },

  formInputStyle: {
    color: colors.primaryText,
  },

  headerIconStyle: {
    fontSize: 30,
    color: colors.greyDarker,
  },

  logoContainer: {
    marginHorizontal: halfIndent,
    // width: '100%'
  },

  tabBarLabel: {
    fontSize: 10,
    color: '#FFFFFF',
    marginBottom: halfIndent / 3,
  },

  navBarTitle: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: '400',
  },

  headerStyle: {
    ...Platform.select({
      ios: {
        shadowColor: colors.bexPrimary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
    // borderBottomColor: colors.greyOpacity,
    backgroundColor: colors.bexPrimary,
  },

  headerTextStyle: {
    fontSize: 16,
  },

  iconStyle: {
    fontSize: 24,
    color: colors.secondaryText,
  },

  rootStyle: {
    flex: 1,
  },

  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  withMarginBottom: {
    marginBottom: indent,
  },

  withMarginTop: {
    marginTop: indent,
  },

  withoutMargins: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },

  withVerticalMargin: {
    marginTop: indent,
    marginBottom: indent,
  },

  withVerticalPadding: {
    paddingTop: indent,
    paddingBottom: indent,
  },

  tabBar: {
    height: headerHeight,
    backgroundColor: '#212B40', // TabBar background
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabLabelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    }),
  },
});

export default styles;
