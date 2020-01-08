import React from 'react';
// import T from 'prop-types';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Text, Card } from '../../components';
import s from './styles';

const Journey = ({
    // onSignIn,
    data,
    ...props
}) => (
        <View style={s.root}>
            <SafeAreaView />
            <View style={s.screenContainer}>
                <View style={s.center}>
                    <Card>
                        <Text>Airline: {data.airline}</Text>
                        <Text>From: {data.from}</Text>
                        <Text>To: {data.to}</Text>
                        {/* <Text>Date: {JSON.stringify(date)}</Text> */}
                        <Text>Derparture: {data.derparture}</Text>
                        <Text>Arrival: {data.arrival}</Text>
                    </Card>
                </View>
            </View>
        </View>
    );

Journey.navigationOptions = ({ navigation }) => ({
    headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
        >
            <Feather
                name={'chevron-left'}
                size={25}
                color={'#000'}
            />
        </TouchableOpacity>
    ),
    headerLeftContainerStyle: {
        paddingHorizontal: 10,
    },
    headerTitleStyle: {
        textTransform: 'uppercase'
    },
    headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitleAllowFontScaling: true,
    title: 'Journey'
});

Journey.propTypes = {
    // onSignIn: T.func,
};

export default Journey;