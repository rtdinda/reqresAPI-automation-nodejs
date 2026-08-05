import {updateUser} from '../endpoint/updateUser';
import * as schema from '../schema/updateUser';
import respStatus from '../base/responseStatus';
import * as er from '../base/expectResp';
import {jest} from '@jest/globals';

describe.only('Update User -- Positive Case', () => {
  test('I can update existing user', async () => {
    const response = await updateUser('2', { name: 'John Doe', job: 'Engineer' });
    er.expectStatus(response, respStatus.statusSuccessful);
    er.expectSchema(response, schema.updateUser);
    er.expectSnapshot(response);
  });

  test('I can update name of existing user', async () => {
    const response = await updateUser('2', { name: 'John Doe' });
    er.expectStatus(response, respStatus.statusSuccessful);
    er.expectSchema(response, schema.updateName);
    er.expectSnapshot(response);
  });

  test('I can update job of existing user', async () => {
    const response = await updateUser('2', { job: 'Manager' });
    er.expectStatus(response, respStatus.statusSuccessful);
    er.expectSchema(response, schema.updateJob);
    er.expectSnapshot(response);
  });
});
