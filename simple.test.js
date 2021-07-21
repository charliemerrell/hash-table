const HashTable = require("./simple");

describe("basic tests", () => {
    it("should be creatable", () => {
        new HashTable();
    });
    it("should respect length argument", () => {
        const tiny = new HashTable(10);
        expect(tiny.buckets.length).toBe(10);
    });
    it("should allow setting", () => {
        const table = new HashTable();
        table.set("blah", 5);
    });
    it("should recover correct set data", () => {
        const table = new HashTable();
        table.set("blah", "0798432408");
        table.set("foo", "9999999999");
        table.set("aaa", "1111111111");
        expect(table.get("blah")).toBe("0798432408");
    });
});
