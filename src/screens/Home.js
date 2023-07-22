import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, }}>
                <ImageBackground source={require('../Image/bg.jpg')} style={{ flex: 1, paddingBottom: 100}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#e6e6e6', padding: 5, borderRadius: 20 }}>
                            <Text style={{ color: 'purple', fontFamily: 'BookAntiqua', fontWeight: 'bold', fontSize: 18 }}>Santrisehat.com</Text>
                        </View>
                        <Image source={require('../Image/user.jpg')} style={{ borderWidth: 2, borderColor: '#30d5c8', width: 50, height: 50, borderRadius: 50, }} />
                    </View>
                    <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Welcome back</Text>
                    <Text style={{ color: 'black', fontSize: 30,fontWeight: 'bold', marginLeft: 10, }}>Hi, Maera Swana</Text>
                    <View style={{ justifyContent: 'space-between', width: '100vw', height: 330, alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: '#30d5c8', width: 300, height: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Data Santri Sakit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#30d5c8', width: 300, height: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Data Santri Sembuh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#30d5c8', width: 300, height: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Data Penyakit Santri</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

export default Home;