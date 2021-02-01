import feathersClient, { makeServicePlugin, BaseModel } from '../../feathers-client';

class Board extends BaseModel {
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = 'Board'

  // Define default properties here
  static instanceDefaults() {
    return {
      img: 'https://picsum.photos/seed/picsum/768/1024',
      name: ''
    };
  }
}
const servicePath = 'boards';
const servicePlugin = makeServicePlugin({
  Model: Board,
  service: feathersClient.service(servicePath),
  servicePath
});

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});

export default servicePlugin;
