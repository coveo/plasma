// tslint:disable-next-line:no-unused-variable

import { FixedQueue } from './FixedQueue';
describe('FixedQueue', () => {
  let fixedQueue: FixedQueue<number>;

  it('should initialize without errors', () => {
    expect(() => {
      fixedQueue = new FixedQueue<number>();
    }).not.toThrow();
  });

  it('should initialize with default values', () => {
    const expectedQueue = [1, 3];
    fixedQueue = new FixedQueue<number>(expectedQueue);

    const initialQueue = fixedQueue.getQueue();

    expect(initialQueue).toEqual(expectedQueue);
  });

  it('should initialize with trimmed array if the maxsize is smaller than the length of the initial array', () => {
    const initialQueue = [1, 2, 3, 4, 5];
    const expectedQueue = [3, 4, 5];
    const queueMaxSize = 3;

    fixedQueue = new FixedQueue<number>(initialQueue, queueMaxSize);

    expect(fixedQueue.getQueue()).toEqual(expectedQueue);
  });

  it('should initialize with empty array if no initial values are passed', () => {
    const expectedQueue: Array<number> = [];

    fixedQueue = new FixedQueue<number>();

    expect(fixedQueue.getQueue()).toEqual(expectedQueue);
  });

  describe('push', () => {
    it('should push an object to the end of the queue', () => {
      fixedQueue = new FixedQueue<number>();
      const element = 0;
      const expectedQueue = [element];

      const updatedQueue = fixedQueue.push(element);

      expect(updatedQueue.getQueue()).toEqual(expectedQueue);
    });

    it('should push an object to the end of the queue and remove exceeding elements if the size is over maxsize', () => {
      fixedQueue = new FixedQueue<number>([1], 1);
      let element = 0;
      const expectedQueue = [element];

      const updatedQueue = fixedQueue.push(element);

      expect(updatedQueue.getQueue()).toEqual(expectedQueue);
    });

    describe('push 3 elements consecutively on a fixedQueue of size 2', () => {
      const firstElement = 1;
      const secondElement = 2;
      const thirdElement = 3;

      beforeAll(() => {
        fixedQueue = new FixedQueue<number>([], 2);
      });

      it('should add the first element in the queue', () => {
        const updatedQueue = fixedQueue.push(firstElement);

        expect(updatedQueue.getQueue()).toEqual([firstElement]);
      });

      it('should add the second element at the end of the queue', () => {
        const updatedQueue = fixedQueue.push(firstElement).push(secondElement);

        expect(updatedQueue.getQueue()).toEqual([firstElement, secondElement]);
      });

      it('should add the third element at the end of the queue and remove the first element', () => {
        const updatedQueue = fixedQueue.push(firstElement).push(secondElement).push(thirdElement);

        expect(updatedQueue.getQueue()).toEqual([secondElement, thirdElement]);
      });
    });
  });

  describe('remove', () => {
    describe('last element', () => {

      it('should remove last element if it exists', () => {
        fixedQueue = new FixedQueue<number>([1, 2, 3]);
        const expectedQueue = [1, 2];

        const updatedQueue = fixedQueue.removeLastElement();

        expect(updatedQueue.getQueue()).toEqual(expectedQueue);
      });

      it('should not remove last element if the queue is empty', () => {
        fixedQueue = new FixedQueue<number>();
        const expectedQueue: Array<number> = [];

        fixedQueue.removeLastElement();

        expect(fixedQueue.getQueue()).toEqual(expectedQueue);
      });
    });

    describe('element with properties', () => {
      it('should remove all elements with the supplied properties', () => {
        const element1 = { id: 1, anotherProperty: true };
        const element2 = { id: 2, anotherProperty: true };
        const element3 = { id: 3, anotherProperty: false };

        fixedQueue = new FixedQueue<any>([element1, element2, element3]);

        const expectedQueue: Array<any> = [element3];

        expect(fixedQueue.removeElementsWithProperties({ anotherProperty: true }).getQueue()).toEqual(expectedQueue);
      });
    });
  });

  describe('contains element with properties', () => {
    it('should return true if an element of the array contains the supplied properties', () => {
      const elementId = 'element_id';
      const element = { id: elementId, anotherProperty: true };
      fixedQueue = new FixedQueue<any>([element]);

      expect(fixedQueue.containsElementWithProperties({ id: elementId })).toBe(true);
    });

    it('should return false if no element of the array contains the supplied properties', () => {
      const element = { id: 'element_id', anotherProperty: true };
      fixedQueue = new FixedQueue<any>([element]);

      expect(fixedQueue.containsElementWithProperties({ anotherProperty: false })).toBe(false);
    });
  });

  describe('get first element', () => {
    it('should return the first element in the array', () => {
      fixedQueue = new FixedQueue<number>([1, 2, 3]);

      expect(fixedQueue.getFirstElement()).toBe(1);
    });

    it('should not throw if the array is empty', () => {
      fixedQueue = new FixedQueue<number>([]);

      expect(() => {
        fixedQueue.getFirstElement();
      }).not.toThrow();
    });
  });
});
