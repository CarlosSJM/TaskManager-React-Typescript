import * as React from "react";
import Task from "../../entities/task";
import Form from "../Form/Form";

interface TaskComponentProps {
    task: Task
    onUpdate: (task:Task) => void
    onRemove: (id:number) => void
}
/** on update onRemove punto redux? */

interface TaskComponentState{
    showForm: boolean
}

class TaskComponent extends React.Component<TaskComponentProps, TaskComponentState>{
    public constructor(props:TaskComponentProps) {
        super(props);
        this.state = {showForm:false};
    }

    private toggleForm(){
        /** punto redux ? */
        this.setState({showForm: !this.state.showForm});
    }
    private update ({name}:Task){
        /** punto redux ++? */
        if (name !==""){
            this.props.onUpdate({id: this.props.task.id, name} as Task);
            this.toggleForm();
        }
    }

    public render():React.ReactNode {
        return <div className="Task">
            <div className="Task-data">
                {this.props.task.id} - {this.props.task.name}
            </div>
            <div className="Task-controls">
            <button
               onClick={()=>this.toggleForm.bind(this)}>
               Update
            </button>
            <button
               onClick={()=>this.props.onRemove(this.props.task.id)}>
                Delete
            </button>
                {/*<a href="javascript:void(0)"*/}
                {/*   onClick={()=>this.toggleForm.bind(this)}>*/}
                {/*    Update*/}
                {/*</a>*/}
                {/*<a href="javascript:void(0)"*/}
                {/*   onClick={()=>this.props.onRemove(this.props.task.id)}>*/}
                {/*    Delete*/}
                {/*</a>    */}
            </div>
            {this.state.showForm && <Form onUpdate={this.update.bind(this)}/>}
        </div>;
    }
}
/** al importar primer Form y despues al utilizar nos crea la etiqueta con interface */
export default TaskComponent;
