var EventEmitter = require('events');

class Violin extends EventEmitter {
    constructor() {
            super();
            let self = this;
            setInterval(function () {
            self.emit('note');
        }, 1000);
    }
}

const violinObject = new Violin();
violinObject.on('note', function () {
    console.log("Violin Is Playing Music");
});