export class FixedQueue<T> {

  private queue: Array<T>;
  private maxLength: number;

  constructor(initialValues?: Array<any>, maxLength: number = Infinity) {
    this.maxLength = maxLength;
    this.queue = initialValues ? initialValues : [];
    this.trimQueue();
  }

  getQueue(): Array<T> {
    return this.queue;
  }

  push(object: any) {
    this.queue.push(object);
    this.trimQueue();
  }

  removeAtIndex(index: number) {
    this.queue.splice(index, 1);
  }

  removeElement(element: any) {
    const index = this.queue.indexOf(element);
    this.removeAtIndex(index);
  }

  private trimQueue() {
    this.queue.splice(0, this.queue.length - this.maxLength);
  }
}
