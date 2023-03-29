import "mocha";
import { expect } from "chai";
import {FilterMapAddReduce} from "../../src/PE101/filter_map_add_reduce.js";

describe("Filter Map Add Reduce", () => {
    it("Se debe poder crear una instancia de FilterMapAddReduce", () => {
        const filterMapAddReduce = new FilterMapAddReduce([1, 2, 3, 4, 5]);
        expect(filterMapAddReduce).to.be.an.instanceOf(FilterMapAddReduce);
    });
    it("Se debe poder ejecutar el algoritmo", () => {
        const filterMapAddReduce = new FilterMapAddReduce([1, 2, 3, 4, 5]);
        const result = filterMapAddReduce.run();
        expect(result).to.be.equal(18);
    });
});