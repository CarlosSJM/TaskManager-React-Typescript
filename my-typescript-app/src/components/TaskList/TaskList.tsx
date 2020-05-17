import * as React from "react";
import Task from "../entities/task";
import Form from "./Form/Form";
import Api from "../entities/Api";
import TaskComponent from "./TaskComponent/TaskComponent";

interface TaskLIstProps {
    api: Api
}

interface TaskListState {
    shownForm: boolean
    tasks: Task[]
}

class TaskList extends React.Component<TaskLIstProps, TaskListState> {
    public constructor(props: TaskLIstProps) {
        super(props);
        this.state = {
            shownForm: false,
            tasks: []
        };
    }
    componentDidMount() {
        this.getTasks()
    }

    /**utils function */
    private getTasks(){
        const tasks = this.props.api.findAll();
        this.setState({tasks});
    };
    private toggleForm (){
        this.setState({shownForm: !this.state.shownForm});
    }
    /**Data handler function*/
    private add({name}:Task){
        this.props.api.add({name} as Task);
        this.toggleForm();
        this.getTasks()
    }
    private update(task : any){
        /**evento entrante segun phpstome-> task: Task Ojo que no funcionaba hay que añadirle task:any*/
        this.props.api.update(task);
        this.getTasks();
    }

    private remove(id :any){
        this.props.api.remove(id);
        this.getTasks()
    }

    public render(): React.ReactNode {
        return (
            <div>
                <h3>
                    Tasks : {this.state.tasks.length}
                </h3>
                {
                    this.state.tasks.map(task =>
                        <TaskComponent
                            key={task.id}
                            task={task}
                            onUpdate={this.remove.bind(this)}
                            onRemove={this.update.bind(this)}/>
                    )
                }
                <div>
                    <a href="javascript:void(0)" onClick={this.toggleForm.bind(this)}>
                        Add new task
                    </a>
                </div>
                {this.state.shownForm && <Form onUpdate={this.add.bind(this)}/>}
            </div>
        );
    }
}
export default TaskList;