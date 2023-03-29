import "mocha";
import { expect } from "chai";
import {FilterMapDivReduce} from "../../src/PE101/filter_map_div_reduce.js";

describe("Filter Map Div Reduce", () => {
    it("Se debe poder crear una instancia de FilterMapDivReduce", () => {
        const filterMapDivReduce = new FilterMapDivReduce([1, 2, 3, 4, 5]);
        expect(filterMapDivReduce).to.be.an.instanceOf(FilterMapDivReduce);
    });
    it("Se debe poder ejecutar el algoritmo", () => {
        const filterMapDivReduce = new FilterMapDivReduce([1, 2, 3, 4, 5]);
        const result = filterMapDivReduce.run();
        expect(result).to.be.equal(1);
    });
});