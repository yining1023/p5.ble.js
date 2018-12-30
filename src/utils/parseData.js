// Copyright (c) 2018 p5ble
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export default function parseData(data, t, encoding) {
  const type = t ? t.toLowerCase() : 'unit8';
  let result;
  let decoder;
  switch (type) {
    case 'unit8':
      result = data.getUint8(0);
      break;

    case 'uint16':
      result = data.getUint16(0);
      break;

    case 'uint32':
      result = data.getUint32(0);
      break;

    case 'int8':
      result = data.getInt8(0);
      break;

    case 'int16':
      result = data.getInt16(0);
      break;

    case 'int32':
      result = data.getInt32(0);
      break;

    case 'float32':
      result = data.getFloat32(0);
      break;

    case 'float64':
      result = data.getFloat64(0);
      break;

    case 'string':
      // TODO: have the ability to choose different string encoding: like utf16
      decoder = new TextDecoder(encoding || 'utf8');
      result = decoder.decode(data);
      break;

    default:
      result = data.getUint8(0);
      break;
  }
  return result;
}
