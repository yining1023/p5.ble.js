'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var connect = function connect(serviceUuid, callback) {
  var options = {
    filters: [{
      services: [serviceUuid]
    }]
  };

  console.log('Requesting Bluetooth Device...');

  return navigator.bluetooth.requestDevice(options).then(function (device) {
    console.log('Got device ' + device.name);
    return device.gatt.connect();
  }).then(function (server) {
    console.log('Getting Service...');
    return server.getPrimaryService(serviceUuid);
  }).then(function (service) {
    console.log('Getting Characteristics...');
    return service.getCharacteristics();
  }).then(function (characteristics) {
    console.log('Got Characteristic');
    callback(null, characteristics);
  }).catch(function (error) {
    console.log('Error: ' + error);
    callback(error);
  });
};

var read = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(characteristic, callback) {
    var value;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return characteristic.readValue();

          case 2:
            value = _context.sent;
            return _context.abrupt('return', callback(null, value.getUint8(0)));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function read(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var write = function write(characteristic, inputValue) {
  var bufferToSend = Uint8Array.of(inputValue);
  characteristic.writeValue(bufferToSend);
  console.log('Writing ' + inputValue + ' to Characteristic...');
};

module.exports = {
  connect: connect,
  read: read,
  write: write
};