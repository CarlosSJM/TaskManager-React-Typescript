import React from 'react';
import logo from './logo.svg';
import './App.css';
/**entities/model */
import Api from "./components/entities/Api";
import Task from "./components/entities/task";
/** Tsx Views*/
import Greets from "./components/Greets/Greets"
import TaskList from "./components/TaskList/TaskList";

class App extends React.Component<any, any>{
  private _api: Api;

  public constructor({props}: { props: any }) {
    super(props);
    /**initial list mock & _api is instance of class Api  */
    const list: Task[] = [{id:1, name: "Just do"},{id:2, name: "Just chill"}] as Task[];
    // @ts-ignore
    this._api = new Api (list);
    console.log ("Created!: ", list);

  }

  public render(): React.ReactNode {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Task List
        </h1>
        <Greets/>
        <span className="App-intro">
          Here is your list
        </span>
        <TaskList api={this._api} />
      </header>
    </div>
  );
}
}
export default App;
