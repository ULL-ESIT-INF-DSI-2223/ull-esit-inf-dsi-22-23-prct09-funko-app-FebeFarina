import "mocha";
import { expect } from "chai";
import {FilterMapSubReduce} from "../../src/PE101/filter_map_sub_reduce.js";

describe("Filter Map Sub Reduce", () => {
    it("Se debe poder crear una instancia de FilterMapSubReduce", () => {
        const filterMapSubReduce = new FilterMapSubReduce([1, 2, 3, 4, 5]);
        expect(filterMapSubReduce).to.be.an.instanceOf(FilterMapSubReduce);
    });
    it("Se debe poder ejecutar el algoritmo", () => {
        const filterMapSubReduce = new FilterMapSubReduce([1, 2, 3, 4, 5]);
        const result = filterMapSubReduce.run();
        expect(result).to.be.equal(-12);
    });
});