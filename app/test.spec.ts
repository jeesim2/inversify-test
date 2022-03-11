import 'reflect-metadata';
import {describe} from 'mocha';
import {assert} from 'chai'
import {container, TYPES} from "./inversify.config";

describe("Test", () => {
    it("TestAll", () => {
        assert.equal(
            container.get<any>(TYPES.TestSibling).run()
            , 'my name is TestSibling'
        );
    })
})
