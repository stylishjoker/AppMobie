import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { store } from "./src/App/store";
import Login from "./src/Views/login";
import Register from "./src/Views/register";
import Home from "./src/Views/home";
import HomeMain from "./src/Views/homeMain";
import SearchProducts from "./src/Views/SearchProducts";
import InfoProduct from "./src/Views/InfoProduct";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeMain"
            component={HomeMain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchProducts"
            component={SearchProducts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoProduct"
            component={InfoProduct}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
