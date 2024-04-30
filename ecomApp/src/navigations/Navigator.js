import { NavigationContainer } from "@react-navigation/native"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Login from "../screens/Login"
import Register from "../screens/Register"
import Profile from "../screens/Profile"


const Navigator=()=>{
    const Stack =createNativeStackNavigator();
    const Tab =createBottomTabNavigator();
    const Drawer =createDrawerNavigator();

    const BottomTabs =()=>{
        return(
            <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name='Home' component={Home}/>
                <Tab.Screen name='Profile' component={Profile}/>
            </Tab.Navigator>
        )
    }

    const StackNavigator =()=>{
        return(
            <Stack.Navigator initialRouteName="Register" screenOptions={{headerShown:false}}>
                <Stack.Screen name='Main' component={BottomTabs}/>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Register' component={Register}/>

            </Stack.Navigator>
        )
    }
    const RootDrawerNavigator= ()=>{
        <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="MainDrawer" component={StackNavigator}/>
         
         </Drawer.Navigator>
    }
    return(
       <NavigationContainer>
        <RootDrawerNavigator />
       </NavigationContainer>
    )
}

export default Navigator