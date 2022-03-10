import {Container} from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { IOutput } from "./interface";
import { CliOutput } from "./cli-output";
import { Dog } from "./dog";

const mycontainer = new Container();
mycontainer.bind<IOutput>(TYPES.IOutput).to(CliOutput);
mycontainer.bind<Dog>(TYPES.Dog).to(Dog);

export { mycontainer };
