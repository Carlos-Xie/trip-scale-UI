import React from 'react';
import Trips from "@/components/trips";
import { SafeAreaView } from 'react-native-safe-area-context';

const Explore = () => {
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'white'}}><Trips/></SafeAreaView>
    );
};

export default Explore;
