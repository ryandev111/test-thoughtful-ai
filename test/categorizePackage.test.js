const categorizePackage = require("../src/utils/categorizePackage"); // Adjust the path as needed

describe("categorizePackage", () => {
    test("should categorize as STANDARD when neither bulky nor heavy", () => {
        expect(categorizePackage(100, 100, 100, 10)).toBe("STANDARD");
    });

    test("should categorize as SPECIAL when bulky only by volume", () => {
        expect(categorizePackage(100, 100, 100, 15)).toBe("SPECIAL");
    });

    test("should categorize as SPECIAL when bulky by dimension", () => {
        expect(categorizePackage(150, 100, 100, 15)).toBe("SPECIAL");
    });

    test("should categorize as SPECIAL when heavy only", () => {
        expect(categorizePackage(100, 100, 100, 20)).toBe("SPECIAL");
    });

    test("should categorize as REJECTED when both bulky and heavy", () => {
        expect(categorizePackage(200, 200, 200, 30)).toBe("REJECTED");
    });

    test("should throw error for negative dimensions", () => {
        expect(() => categorizePackage(-100, 100, 100, 10)).toThrow(
            "width must be a positive number."
        );
    });

    test("should throw error for non-number inputs", () => {
        expect(() => categorizePackage("100", 100, 100, 10)).toThrow(
            "width must be a positive number."
        );
    });
});
