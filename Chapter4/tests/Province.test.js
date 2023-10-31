import Province from "../Province.js";
import sampleProvinceData from "../SampleProvinceData.js";

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
