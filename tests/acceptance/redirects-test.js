import { currentURL, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | redirects', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(
      currentURL(),
      `/ember/release`,
      'routes to the latest version of the project'
    );
    assert.dom('h1').hasText('Ember.js API Documentation');
  });

  test('visiting /ember-data', async function (assert) {
    await visit('/ember-data');
    assert.equal(
      currentURL(),
      `/ember-data/release/modules/ember-data`,
      'routes to the first page of ember data'
    );
    assert.dom('h1').hasText('Package ember-data');
  });

  test('visiting pre-2.16 version', async function(assert) {
    await visit('/ember/1.0');

    assert.equal(
      currentURL(),
      '/ember/1.0/modules/ember',
      'routes to the first module of the project-version'
    );
  });
});
