import React from 'react';
// import T from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import { View, SafeAreaView, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import { Text, HeaderTitle } from '../../components';
import s from './styles';
import { colors } from '../../styles';
import LinearGradient from 'react-native-linear-gradient';

import train from '../../assets/images/train.png';
import plane from '../../assets/images/plane.png';
import bus from '../../assets/images/bus.png';
import taxi from '../../assets/images/taxi.png';
import bg from '../../assets/images/bg.png';

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
                                <Image style={{ width: 50, height: 50 }} resizeMode={'contain'} source={train} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image style={{ width: 50, height: 50 }} resizeMode={'contain'} source={plane} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image style={{ width: 50, height: 50 }} resizeMode={'contain'} source={bus} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image style={{ width: 50, height: 50 }} resizeMode={'contain'} source={taxi} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ textTransform: 'capitalize', fontSize: 25, color: colors.second }}>Today's Journey</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => _viewMoreHandler()}>
                                <Text style={{ textTransform: 'uppercase', color: colors.second }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
                    </View>
                </View>
                <ScrollView decelerationRate={'fast'} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        data.length ?
                            data.map(({ airline, from, to, date, derparture, arrival }) => (
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => _journeyHandler({ airline, from, to, date, derparture, arrival })}>
                                        <LinearGradient style={{ marginHorizontal: 10, borderRadius: 10 }} colors={['#f9e5e4', '#e9a49f']}>
                                            <ImageBackground style={{ width: '100%', height: '100%' }} source={bg} keyboardShouldPersistTaps={'handled'}>
                                                <View style={{ padding: 10 }}>
                                                    <Text>Airline: {airline}</Text>
                                                    <Text>From: {from}</Text>
                                                    <Text>To: {to}</Text>
                                                    {/* <Text>Date: {JSON.stringify(date)}</Text> */}
                                                    <Text>Derparture: {derparture}</Text>
                                                    <Text>Arrival: {arrival}</Text>
                                                </View>
                                            </ImageBackground>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            ))
                            : null
                    }
                </ScrollView>
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
                color={colors.first}
            />
        </TouchableOpacity>
    ),
    headerLeftContainerStyle: {
        paddingHorizontal: 10,
    },
    headerStyle: {
        backgroundColor: colors.fourth,
    },
    headerTitleAllowFontScaling: true,
    headerTitle: <HeaderTitle title={'Home'} titleStyle={{
        textTransform: 'uppercase',
        color: colors.first
    }} />
    // title: 'Home'
});

Home.propTypes = {
    // onSignIn: T.func,
};

export default Home;