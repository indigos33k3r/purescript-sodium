const Sodium = require("sodiumjs");

const Cell = Sodium.Cell;
const CellSink = Sodium.CellSink;
const CellLoop = Sodium.CellLoop;

const Stream = Sodium.Stream;
const StreamSink = Sodium.StreamSink;
const StreamLoop = Sodium.StreamLoop;

//Stream

exports.newStreamImpl = function() {
    return new StreamSink();
}

exports.newStreamSinkImpl = function(mergeFn) {
    return new StreamSink(mergeFn);
}

exports.toStreamImpl = function(streamSink) {
    return streamSink;
}

exports.mapStreamImpl = function (f, s) {
    return s.map(f);
}


exports.listenStreamImpl = function(stream, listener) {
    //stream.listen(function(value) { console.log("GOT [" + value + "]")});
    var unlistener = stream.listen(listener);

    return function() {
        //console.log("UNLISTENING");
        unlistener();
    }
}


exports.sendStreamImpl = function(a, streamSink) {
    //console.log("SENDING [" + a + "]");
    streamSink.send(a);
}
//Cell

exports.newCellImpl = function(x, s) {
    return new Cell(x, s);
}


exports.newCellSinkImpl = function(x, mergeFn) {
    return new CellSink(x, mergeFn);
}

exports.toCellImpl = function(cellSink) {
    return cellSink;
}

exports.mapCellImpl = function (f, c) {
    return c.map(f);
}

exports.listenCellImpl = function(c, listener) {
    //c.listen(function(value) { console.log("GOT [" + value + "]")});
    var unlistener = c.listen(listener);

    return function() {
        //console.log("UNLISTENING");
        unlistener();
    }
}


exports.sendCellImpl = function(a, cellSink) {
    //console.log("SENDING [" + a + "]");
    cellSink.send(a);
}