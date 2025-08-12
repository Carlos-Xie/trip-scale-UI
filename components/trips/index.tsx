import React,{Fragment} from 'react';
import Header from "@/components/trips/header";
import {TripCardList} from "@/components/trips/card";

const Index = () => {
    return (
        <Fragment><Header/>
            <TripCardList />
        </Fragment>
    );
};

export default Index;
