import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from "./TabNavigater"
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

    const DrawerNavigator =()=>{
        return(
            <Drawer.Navigator>
                <Drawer.Screen name="HOME" component={TabNavigator} />
                <Drawer.Screen name="PROFILE" component={Profile}/>
            </Drawer.Navigator>
        );
    };
    export default DrawerNavigator