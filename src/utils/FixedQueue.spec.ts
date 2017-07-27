// tslint:disable-next-line:no-unused-variable

import {FixedQueue} from './FixedQueue';
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

      fixedQueue.push(element);

      expect(fixedQueue.getQueue()).toEqual(expectedQueue);
    });

    it('should push an object to the end of the queue and remove exceeding elements if the size is over maxsize', () => {
      fixedQueue = new FixedQueue<number>([1], 1);
      let element = 0;
      const expectedQueue = [element];

      fixedQueue.push(element);

      expect(fixedQueue.getQueue()).toEqual(expectedQueue);
    });

    describe('push 3 elements consecutively on a fixedQueue of size 2', () => {
      const firstElement = 1;
      const secondElement = 2;
      const thirdElement = 3;

      beforeAll(() => {
        fixedQueue = new FixedQueue<number>([], 2);
      });

      it('should add the first element in the queue', () => {
        fixedQueue.push(firstElement);

        expect(fixedQueue.getQueue()).toEqual([firstElement]);
      });

      it('should add the second element at the end of the queue', () => {
        fixedQueue.push(secondElement);

        expect(fixedQueue.getQueue()).toEqual([firstElement, secondElement]);
      });

      it('should add the third element at the end of the queue and remove the first element', () => {
        fixedQueue.push(thirdElement);

        expect(fixedQueue.getQueue()).toEqual([secondElement, thirdElement]);
      });
    });
  });

  describe('remove', () => {
    describe('at index', () => {
      it('should remove the element at position x', () => {
        fixedQueue = new FixedQueue<number>([1, 2, 3]);
        const expectedQueue = [2, 3];

        fixedQueue.removeAtIndex(0);

        expect(fixedQueue.getQueue()).toEqual(expectedQueue);
      });

      it('should not remove an element out of bounds', () => {
        fixedQueue = new FixedQueue<number>([1, 2, 3]);
        expect(() => {
          fixedQueue.removeAtIndex(10);
        }).not.toThrow();
      });
    });

    describe('specified element', () => {

      it('should remove a specific element from the queue', () => {
        fixedQueue = new FixedQueue<number>([1, 2, 3]);
        const expectedQueue = [1, 3];

        fixedQueue.removeElement(2);

        expect(fixedQueue.getQueue()).toEqual(expectedQueue);
      });

      it('should not remove an element that does not exist', () => {
        fixedQueue = new FixedQueue<number>([1, 2, 3]);
        expect(() => {
          fixedQueue.removeElement(5);
        }).not.toThrow();
      });
    });

    describe('last element', () => {

      it('should remove last element if it exists', () => {
        fixedQueue = new FixedQueue<number>([1, 2, 3]);
        const expectedQueue = [1, 2];

        fixedQueue.removeLastElement();

        expect(fixedQueue.getQueue()).toEqual(expectedQueue);
      });

      it('should not remove last element if the queue is empty', () => {
        fixedQueue = new FixedQueue<number>();
        const expectedQueue: Array<number> = [];

        fixedQueue.removeLastElement();

        expect(fixedQueue.getQueue()).toEqual(expectedQueue);
      });
    });
  });

  describe('contains', () => {
    it('should return true if the element is present in the array', () => {
      fixedQueue = new FixedQueue<number>([1, 2, 3]);

      expect(fixedQueue.contains(1)).toBe(true);
    });

    it('should return false if the element is not present in the array', () => {
      fixedQueue = new FixedQueue<number>([1, 2, 3]);

      expect(fixedQueue.contains(5)).toBe(false);
    });
  });

  describe('contains element with properties', () => {
    it('should return true if an element of the array contains the supplied properties', () => {
      const elementId = 'element_id';
      const element = {id: elementId, anotherProperty: true};
      fixedQueue = new FixedQueue<any>([element]);

      expect(fixedQueue.containsElementWithProperties({id: elementId})).toBe(true);
    });

    it('should return false if no element of the array contains the supplied properties', () => {
      const element = {id: 'element_id', anotherProperty: true};
      fixedQueue = new FixedQueue<any>([element]);

      expect(fixedQueue.containsElementWithProperties({anotherProperty: false})).toBe(false);
    });
  });
});
