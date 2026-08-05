import * as endpoint from '../endpoint/deleteUser';
// import * as schema from '../schema/getUser';
import respStatus from '../base/responseStatus';
import * as er from '../base/expectResp';
import {jest} from '@jest/globals';

describe('Delete User -- Positive Case', () => {
  test('I can delete existing user', async () => {
    const response = await endpoint.deleteUser(2);
    er.expectStatus(response, respStatus.statusNoContent);
    er.expectSnapshot(response);
  });
});
