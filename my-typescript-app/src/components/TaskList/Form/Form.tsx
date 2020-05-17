import * as React from 'react';
import Task from "../../entities/task";

interface FormProps{
    task ? : Task
    // @ts-ignore
    onUpdate: (task) => void
}
interface FormState {
    name:string
}

class Form extends React.Component<FormProps, FormState>{
    public constructor(props: FormProps) {
        super(props);
        this.state = { name : props.task ? props.task.name : ""};
    }
    private updateTask (event: { target: { value: string; }; }) {
        this.setState({name: event.target.value})
    }

    private save(){
        if (this.state.name.trim() !==""){
            this.props.onUpdate({name : this.state.name});
            this.setState({name: ""});
        }
    }

    public render():React.ReactNode {
        return (
            <div className="Form">
                <section>
                    <label>
                        Task
                    </label>
                </section>
                <section>
                    <input type="text" onChange={this.updateTask.bind(this)} value={this.state.name}/>
                </section>
                <section>
                    <input type="button" value="Save" onClick={this.save.bind(this)}/>
                </section>
            </div>
        );
    }

}
export default Form;