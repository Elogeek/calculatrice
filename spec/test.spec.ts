import "jasmine";

describe("vérification que la calculatrice à bien 18 touches", function()  {
    const btnsAll = 18;
    const numberA = 19.19;
    const numberB = 145;

    it("numberA doit être proche de btnsAll", function() {
        expect(numberA).toBeCloseTo(btnsAll,2)
    });

    it ('btnsAll doit être plus grand que numberB', function() {
        expect(btnsAll).toBeGreaterThan(numberB);
    });

    it("nickel, c'est correct", function() {
        expect(btnsAll).toEqual(18);
    });
});
