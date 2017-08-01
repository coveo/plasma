import * as _ from 'underscore';

export class FixedQueue<T> {

  private queue: Array<T>;
  private maxLength: number;

  constructor(initialValues: Array<T> = [], maxLength: number = Number.MAX_VALUE) {
    this.maxLength = maxLength;
    this.queue = initialValues;
    this.trimQueue();
  }

  push(object: any): FixedQueue<T> {
    const queue: Array<T> = [...this.queue, object];
    return new FixedQueue<T>(queue, this.maxLength);
  }

  removeLastElement(): FixedQueue<T> {
    const queue: Array<T> = [...this.queue];
    if (this.queue.length > 0) {
      queue.pop();
    }
    return new FixedQueue<T>(queue, this.maxLength);
  }

  removeElementsWithProperties(properties: any): FixedQueue<T> {
    const elementsWithoutProperties: Array<T> = _.reject(this.queue, properties);
    return new FixedQueue<T>(elementsWithoutProperties);
  }

  getFirstElement(): T {
    return this.queue[0];
  }

  containsElementWithProperties(properties: any) {
    return _.findWhere(this.queue, properties) !== undefined;
  }

  getQueue(): Array<T> {
    return this.queue;
  }

  private trimQueue() {
    if (this.queue.length > this.maxLength) {
      this.queue.splice(0, this.queue.length - this.maxLength);
    }
  }
}
