class Task {
    @param {number|string} id
    @param {string} title
    @param {boolean} completed

    constructor(id, title, completed = false){
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false
            configurable: false,
            enumerable: true
        });
        this.title = title;
        this.completed = completed;
    }

    

}