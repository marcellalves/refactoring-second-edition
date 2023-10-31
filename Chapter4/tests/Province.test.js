import Province from "../Province.js";
import sampleProvinceData from "../SampleProvinceData.js";
import assert from "assert";
import { expect } from "chai";

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });
  it("profit", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).equal(230);
  });
});
