import DrupalSerializerClass, { DrupalJSONAPISource } from '../src/index.js';
import JSONAPISource, { JSONAPISerializer } from '@orbit/jsonapi';

import schema from './mocks/schema';
import Orbit from '@orbit/data';
import fetch from 'fetch';
Orbit.fetch = fetch;

const settings = {
  schema,
  name: 'remote',
  // namespace: 'jsonapi',
  // host: 'http://intercept.test'
};
const testSource = new DrupalJSONAPISource(settings);
// const testSerializer = new DrupalSerializerClass();

describe('DrupalJSONAPISource', () => {
  it('Instantiates', () => {
    expect(testSource).toBeInstanceOf(DrupalJSONAPISource);
    expect(testSource).toBeInstanceOf(JSONAPISource);
  });

  it('Returns the correct path', () => {
    expect(testSource.resourcePath('node--location')).toBe('node/location');
    expect(testSource.resourcePath('node--location', 400)).toBe('node/location/400');
  });
});
