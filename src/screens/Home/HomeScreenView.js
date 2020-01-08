import React from 'react';
// import T from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Card } from '../../components';
import s from './styles';

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

const Home = ({
    _viewMoreHandler,
    _journeyHandler,
    ...props
}) => (
        <View style={s.root}>
            <SafeAreaView />
            <ScrollView>
                <View style={s.screenContainer}>
                    <View style={[s.optionsContainer]}>
                        <View>
                            <TouchableOpacity>
                                <FontAwesome
                                    name={'train'}
                                    size={35}
                                    color={'#fff'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <FontAwesome5
                                    name={'plane-departure'}
                                    size={35}
                                    color={'#fff'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <FontAwesome
                                    name={'bus'}
                                    size={35}
                                    color={'#fff'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <FontAwesome
                                    name={'cab'}
                                    size={35}
                                    color={'#fff'}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ textTransform: 'capitalize', fontSize: 25 }}>Today's Journey</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => _viewMoreHandler()}>
                                <Text style={{ textTransform: 'uppercase' }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            data.length ?
                                data.map(({ airline, from, to, date, derparture, arrival }) => (
                                    <View style={{ marginBottom: 10, marginHorizontal: 8 }}>
                                        <TouchableOpacity onPress={() => _journeyHandler({ airline, from, to, date, derparture, arrival })}>
                                            <Card>
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
            </ScrollView>
        </View>
    );

Home.navigationOptions = ({ navigation }) => ({
    headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.openDrawer()}
        >
            <Feather
                name={'menu'}
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
    // headerTitleContainerStyle: {
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    headerTitleAllowFontScaling: true,
    title: 'Home'
});

Home.propTypes = {
    // onSignIn: T.func,
};

export default Home;