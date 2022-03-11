import {injectable} from "inversify";

@injectable()
export class TestSiblingNamed {
    public run(): string {
        return 'my name is TestSiblingNamed';
    }
}
