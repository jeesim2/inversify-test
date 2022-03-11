import {inject, injectable} from "inversify";
import {TestSiblingNamed} from "./test-sibling-named";
import {TYPES} from "./inversify.config";

@injectable()
export class TestSibling {

    public constructor(@inject(TYPES.TestSiblingNamed)
                       private testSiblingNamed: TestSiblingNamed) {
    }

    public run(): string {
        return 'my name is TestSibling';
    }
};
