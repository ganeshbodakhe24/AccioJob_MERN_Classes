class car{
    constructor(name,engineCC){
        this.name=name;
        this.engine=new Engine(engineCC);
    }
    drive(){
        this.engine.start();
        console.log(`${this.name}car is moving having engine cc ${this.engine.engineCC} `);
    }
}
class Engine{
    constructor(engineCC){
        this.engineCC=engineCC;
    }
    start(){
        console.log(`engine start with engine cc ${this.engineCC}`)
    }
}

let suzuki=new car("suzuki",333);
suzuki.drive();