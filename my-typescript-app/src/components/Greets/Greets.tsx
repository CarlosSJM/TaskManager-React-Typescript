import * as React from "react";
/** Pasamos los tipos por las props usando interfaces*/
interface GreetsState {
    message : string
}

class Greets extends React.Component<any, GreetsState>{
    public constructor(props: any) {
        super(props);
        this.state = {
          message: "this is a greet"
        };
    }

    private doSomething(){
        this.setState({message: "I was Clicked"});
        /**probar a aplicar un contador -> despues que se guarde en redux y nos lo muestre */
    }
    public render():React.ReactNode {
        return (
            <div className="Greets" onClick={() => this.doSomething()}>
                {this.state.message}
            </div>
        );
    }

}
export default Greets;