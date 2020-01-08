import React from 'react';
// import T from 'prop-types';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Text, Card } from '../../components';
import s from './styles';
import { ScrollView } from 'react-native-gesture-handler';
data = [
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    }
];

const JourneyList = ({
    _journeyHandler,
    ...props
}) => (
        <View style={s.root}>
            <SafeAreaView />
            <ScrollView>
                <View style={s.screenContainer}>
                    <View style={s.center}>
                        <View style={{ width: '100%' }}>
                            {
                                data.length ?
                                    data.map(({ airline, from, to, date, derparture, arrival }) => (
                                        <View style={{ marginBottom: 10, marginHorizontal: 8 }}>
                                            <TouchableOpacity onPress={() => _journeyHandler()}>
                                                <Card style={{ width: '100%' }}>
                                                    <Text>Airline: {airline}</Text>
                                                    <Text>From: {from}</Text>
                                                    <Text>To: {to}</Text>
                                                    {/* <Text>Date: {JSON.stringify(date)}</Text> */}
                                                    <Text>Derparture: {derparture}</Text>
                                                    <Text>Arrival: {arrival}</Text>
                                                </Card>
                                            </TouchableOpacity>
                                        </View>
                                    ))
                                    : null
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );

JourneyList.navigationOptions = ({ navigation }) => ({
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
    title: 'Journey List'
});

JourneyList.propTypes = {
    // onSignIn: T.func,
};

export default JourneyList;