import * as _ from 'underscore';

export class FixedQueue<T> {

  private queue: Array<T>;
  private maxLength: number;

  constructor(initialValues: Array<any> = [], maxLength: number = Number.MAX_VALUE) {
    this.maxLength = maxLength;
    this.queue = initialValues;
    this.trimQueue();
  }

  getQueue(): Array<T> {
    return this.queue;
  }

  push(object: any): FixedQueue<T> {
    this.queue.push(object);
    this.trimQueue();
    return new FixedQueue<T>(this.queue, this.maxLength);
  }

  getFirstElement(): T {
    return this.queue[0];
  }

  contains(element: T): boolean {
    return this.queue.indexOf(element) != -1;
  }

  containsElementWithProperties(properties: any) {
    return _.findWhere(this.queue, properties) != undefined;
  }

  removeAtIndex(index: number) {
    this.queue.splice(index, 1);
  }

  removeElement(element: any) {
    const index = this.queue.indexOf(element);
    this.removeAtIndex(index);
  }

  removeLastElement(): FixedQueue<T> {
    if (this.queue.length > 0) {
      this.queue.pop();
    }
    return new FixedQueue<T>(this.queue, this.maxLength);
  }

  private trimQueue() {
    this.queue.splice(0, this.queue.length - this.maxLength);
  }
}
