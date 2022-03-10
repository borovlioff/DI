import { TYPES } from "./types";
import { mycontainer } from "./inversify.config";
import {Dog} from "./dog"

class Index {
    creatDog() {
        const dog = mycontainer.get<Dog>(TYPES.Dog)
        dog.bark("af-af-ts-inversify");
    }

}

const dog = new Index();
dog.creatDog();