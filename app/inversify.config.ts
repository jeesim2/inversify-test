import "reflect-metadata";
import {TestSiblingNamed} from "./test-sibling-named";
import {Container} from "inversify";
import {TestSibling} from "./test-sibling";

const TYPES = {
    TestSibling: Symbol.for("TestSibling"),
    TestSiblingNamed: Symbol.for("TestSiblingNamed")
};

const container = new Container();
container.bind<TestSibling>(TYPES.TestSibling).to(TestSibling);
container.bind<TestSiblingNamed>(TYPES.TestSiblingNamed).to(TestSiblingNamed);

export {TYPES, container};
