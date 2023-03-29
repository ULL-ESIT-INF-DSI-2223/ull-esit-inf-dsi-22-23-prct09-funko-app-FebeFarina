import "mocha";
import { expect } from "chai";
import {FilterMapProdReduce} from "../../src/PE101/filter_map_prod_reduce.js";

describe("Filter Map Prod Reduce", () => {
    it("Se debe poder crear una instancia de FilterMapProdReduce", () => {
        const filterMapProdReduce = new FilterMapProdReduce([1, 2, 3, 4, 5]);
        expect(filterMapProdReduce).to.be.an.instanceOf(FilterMapProdReduce);
    });
    it("Se debe poder ejecutar el algoritmo", () => {
        const filterMapProdReduce = new FilterMapProdReduce([1, 2, 3, 4, 5]);
        const result = filterMapProdReduce.run();
        expect(result).to.be.equal(15000);
    });
});