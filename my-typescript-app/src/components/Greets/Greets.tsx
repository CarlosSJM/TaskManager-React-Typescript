import * as React from "react";

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


}