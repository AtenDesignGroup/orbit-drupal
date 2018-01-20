import JSONAPISource, { JSONAPISerializer } from '@orbit/jsonapi';

export default class DrupalSerializerClass extends JSONAPISerializer {

  // eslint-disable-next-line class-methods-use-this
  resourceRelationship(type, relationship) {
    return relationship;
  }

  // eslint-disable-next-line class-methods-use-this
  resourceAttribute(type, attr) {
    return attr;
  }

  // eslint-disable-next-line class-methods-use-this
  recordType(resourceType) {
    return resourceType;
  }

  // eslint-disable-next-line class-methods-use-this
  recordAttribute(type, resourceAttribute) {
    return resourceAttribute;
  }

  // eslint-disable-next-line class-methods-use-this
  recordRelationship(type, resourceRelationship) {
    return resourceRelationship;
  }
}

export class DrupalJSONAPISource extends JSONAPISource {
  constructor(settings) {
    super(Object.assign({}, settings, {
      SerializerClass: DrupalSerializerClass
    }));
  }

  resourcePath(type, id) {
    const path = type.split('--');
    if (id) {
      const resourceId = this.serializer.resourceId(type, id);
      if (resourceId) {
        path.push(resourceId);
      }
    }
    return path.join('/');
  }
}
