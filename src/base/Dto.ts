import { Serializable } from 'ts-serializable';

export default class Dto {
  static populate<T extends Serializable>(Model: new () => T, data: Object) {
    return new Model().fromJSON(data);
  }
}
