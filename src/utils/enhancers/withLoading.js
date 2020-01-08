import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
// import LottieView from 'lottie-react-native';
// import loading from '../../assets/anim/loading.json';
import { Text } from '../../components';

const s = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 150,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative'
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2
      },
      android: {
        elevation: 6
      },
    })
  }
});

export default (propName = 'isLoading') => BaseComponent => props => (
  <React.Fragment>
    <BaseComponent {...props} />
    <Modal
      transparent={true}
      animationType={'none'}
      visible={props[propName]}
      onRequestClose={() => { console.log('close modal') }}>
      <View style={[s.modalBackground, s.shadow]}>
        <View style={s.activityIndicatorWrapper}>
          {/* <LottieView
            source={loading}
            autoPlay loop
          /> */}
          <Text style={{ position: 'absolute', bottom: 10 }}>Please Wait...</Text>
        </View>
      </View>
    </Modal>
  </React.Fragment>
);