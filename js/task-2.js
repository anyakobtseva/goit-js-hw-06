
class Storage {
    items = []
    constructor(arr) {
        this.items = arr;
    }
    getItems() {
        return this.items;
    }
    addItem(value) {
        this.items.push(value)
    }
    removeItem(value) {
        this.items = this.items.filter(item => item != value)
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]