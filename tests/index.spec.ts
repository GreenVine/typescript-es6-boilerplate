// tslint:disable:no-unused-expression
// tslint:disable:no-implicit-dependencies

import { expect, should } from 'chai';

import { hello } from '../src/index';

describe('Hello World', () => {
  it('should be a function', () => {
    expect(hello).is.a('function');
  });
});
