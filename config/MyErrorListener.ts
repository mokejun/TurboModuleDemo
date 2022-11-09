import {ErrorListener, Exception, SagaGenerator} from "../core-native-project/src";

export default class MyErrorListener implements ErrorListener {
    *onError(error: Exception): SagaGenerator {
        console.log(`error.message--> + ${error.message}`);
    }
}
