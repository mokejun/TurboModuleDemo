/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {RootState} from "../config/RootState";
import {Loading, loadingAction, Module, register, SagaGenerator, showLoading, useLoadingStatus} from "../core-native-project/src";
import {app} from "../core-native-project/src/app";
import Login from "../pages/Login";

const show = () => {
    app.store.dispatch(loadingAction(true, "login"));
};
const hint = () => {
    app.store.dispatch(loadingAction(false, "login"));
};

class LoginModule extends Module<RootState, "login", object> {
    *onEnter(routeParameters: object): SagaGenerator {
        console.log(`onEnter`);
        console.log(`onEnter this.state().userName-->${this.state.userName}`);
    }

    *goLogin(navigation: any, userName: string, pwd: string): SagaGenerator {
        console.log(`goLogin 修改前的this.state().userName-->${this.state.userName}`);
        this.setState({userName, pwd});
        console.log(`goLogin 修改后的this.state().userName-->${this.state.userName}`);
        navigation?.push("TaskList");
    }

    *handleTurboModuleOne(a: number, b: string, c: boolean): SagaGenerator {
        Loading("login");
        // show();
        // console.log(`showLoading-->` + showLoading(this.rootState, "login"));
        // console.log(`handleTurboModuleOne-->${a}-->${b}-->${c}`);
        // setTimeout(() => {
        //     hint();
        //     console.log(`showLoading-->` + showLoading(this.rootState, "login"));
        // }, 2000);
    }

    *handleTurboModuleTwo(a: number, b: string, c: boolean): SagaGenerator {
        console.log(`handleTurboModuleTwo-->${a}-->${b}-->${c}`);
    }

    *handleTurboModuleThree(data: {key: number}): SagaGenerator {
        console.log(`handleTurboModuleThree-->${data.key}`);
    }
}

const module = register(new LoginModule("login", {userName: "sven", pwd: "1222"}));
const LoginView = module.attachLifecycle(Login);
export const loginActions = module.getActions();
export default LoginView;
