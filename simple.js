const crypto = require("crypto");

class HashTable {
    constructor(arrayLength = 10000) {
        this.buckets = new Array(arrayLength);
    }

    set(key, value) {
        const index = this.getIndex(key);
        this.buckets[index] = value;
    }

    get(key) {
        const index = this.getIndex(key);
        return this.buckets[index];
    }

    hash(key) {
        return crypto.createHash("md5").update(key).digest("hex");
    }

    getIndex(key) {
        const hashAsNumber = parseInt(this.hash(key), 10);
        return hashAsNumber % this.arrayLength;
    }
}

module.exports = HashTable;
