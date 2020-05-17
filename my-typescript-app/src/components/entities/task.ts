// @ts-ignore
class Task {
    public constructor(name: string = "") {
        this._id = Math.round(1000 * Math.random());
        this._name = name;
    }

    /**
     * bloque -> 1 variable, getter y/o setter
     * */

    private _id: number;
    public get id (): number {
        return this._id;
    }

    private _name: string;
    public get name (): string {
        return this._name;
    }
    public set name (name: string) {
        this._name = name;
    }
}
export default Task;