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
import {Module, register, SagaGenerator} from "../core-native-project/src";
import TaskDetail from "../pages/TaskDetail";

class TaskDetailModule extends Module<RootState, "taskDetail", object> {
    *onEnter(routeParameters: object): SagaGenerator {
        this.setState({detail: routeParameters});
    }
}

const module = register(new TaskDetailModule("taskDetail", {detail: {}}));
const TaskDetailView = module.attachLifecycle(TaskDetail);
export const taskDetailActions = module.getActions();
export default TaskDetailView;
