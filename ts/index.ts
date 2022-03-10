import { Dog } from "./dog";
import { CliOutput } from "./cli-output";

class DogService {
    creatDog() {
        const output = new CliOutput();
        const dog = new Dog(output);
        dog.bark("af-af-ts");
    }

}

const dog = new DogService();
dog.creatDog();