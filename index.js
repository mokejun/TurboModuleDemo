/**
 * @format
 */
import {name as appName} from "./app.json";
import MyErrorListener from "./config/MyErrorListener";
import {startApp} from "./core-native-project/src";
import HomeView from "./module/HomeView";

startApp({
    registeredAppName: appName,
    componentType: HomeView,
    errorListener: new MyErrorListener(),
    beforeRendering: null,
});
