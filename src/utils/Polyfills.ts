/**
 * Some Polyfills required for cross browser compatibility.
 */

// IE does not support outerHTML property on SVGElement
// http://stackoverflow.com/questions/12592417/outerhtml-of-an-svg-element
Object.defineProperty(SVGElement.prototype, 'outerHTML', {
  get: function (this: Node) {
    let $temp = document.createElement('div');
    let $node = this.cloneNode(true);
    $temp.appendChild($node);
    return $temp.innerHTML;
  },
  enumerable: false,
  configurable: true
});

/* tslint:disable:interface-name */
interface SVGElement {
  outerHTML: string;
}
/* tslint:enable:interface-name */
