import Task from "./task";

class Api {
    private _data: Task[];

    constructor( data = []) {
        this._data= data;
    }

    public findAll (): Task[]{
        return this._data;
    }

    public findById (id: number): Task | undefined{
        return this._data.find (a => a.id === id);
    }

    public add ({name}: Task) {
        const task = new Task(name);
        this._data.push (task);
    }

    /*¿?*/
    public remove (id: number) {
        this._data = this._data.filter( a => a.id !==id);
    }

    public update (task: Task) {
        const index = this._data.findIndex(a => a.id === task.id);
        if(index > -1) {
            this._data[index] = task;
        }
    }

}

export default  Api;

/** formas de borrar un itm con ts o js
*1 Con filter
 * onDeleteItem(id: number) {
    this.list = this.list.filter(item => item.id !== id);
}
 *2 con .splice()
 * const index: number = functionToGetTheIndex();
 this.list.splice(index, 1);
 *pero necesitamos en index del array con splice necesitamos  obtenerlos
 * for(var i = 0; i < this.list.length; i++) {
   if(this.list[i].id === id) {
     return i;
   }
}
 * */