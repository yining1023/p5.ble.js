// Copyright (c) 2018 p5ble
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import callCallback from './utils/callcallback';

class p5ble {
  constructor() {
    this.device = null;
    this.server = null;
    this.service = null;
    this.characteristics = [];
  }

  connect(serviceUuid, callback) {
    const options = {
      filters: [{
        services: [serviceUuid],
      }],
    };

    console.log('Requesting Bluetooth Device...');

    return callCallback(navigator.bluetooth.requestDevice(options)
      .then((device) => {
        this.device = device;
        console.log(`Got device ${device.name}`);
        return device.gatt.connect();
      })
      .then((server) => {
        this.server = server;
        console.log('Getting Service...');
        return server.getPrimaryService(serviceUuid);
      })
      .then((service) => {
        this.service = service;
        console.log('Getting Characteristics...');
        return service.getCharacteristics();
      })
      .then((characteristics) => {
        this.characteristics = characteristics;
        console.log('Got Characteristic');
        return characteristics;
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      }), callback);
  }

  async read(characteristic, callback) {
    const validChar = this.characteristics.find(char => char.uuid === characteristic.uuid);
    if (!validChar) return console.error('The characteristic does not exist.');

    return callCallback(characteristic.readValue().then(value => value.getUint8(0)), callback);
  }

  // readOnChange(characteristic, handleValueChanged) {

  // }

  write(characteristic, inputValue) {
    if (!characteristic || !characteristic.uuid) console.error('The characteristic does not exist.');
    const validChar = this.characteristics.find(char => char.uuid === characteristic.uuid);
    if (!validChar) return console.error('The characteristic does not exist.');

    const bufferToSend = Uint8Array.of(inputValue);
    console.log(`Writing ${inputValue} to Characteristic...`);
    return characteristic.writeValue(bufferToSend);
  }

  // startNotifications(characteristic, handleValueChanged) {

  // }

  // stopNotifications(characteristic) {

  // }

  disconnect() {
    if (!this.device) return;
    console.log('Disconnecting from Bluetooth Device...');
    if (this.device.gatt.connected) {
      this.device.gatt.disconnect();
    } else {
      console.log('> Bluetooth Device is already disconnected');
    }
  }

  onDisconnected(handleDisconnected) {
    if (!this.device) return console.error('There is no device connected.');
    return this.device.addEventListener('gattserverdisconnected', handleDisconnected);
  }

  isConnected() {
    if (!this.device) return false;
    if (this.device.gatt.connected) {
      return true;
    }
    return false;
  }
}

module.exports = p5ble;
