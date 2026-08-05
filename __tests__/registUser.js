import {registUser} from '../endpoint/registerUser';
import * as schema from '../schema/registUser';
import respStatus from '../base/responseStatus';
import * as er from '../base/expectResp';
import {jest} from '@jest/globals';

describe('User Register -- Positive Case', () => {
  test('I can register new user', async () => {
    const response = await registUser({ email: 'eve.holt@reqres.in', password: 'pistol' });
    er.expectStatus(response, respStatus.statusSuccessful);
    er.expectSchema(response, schema.registUserSuccess);
    er.expectSnapshot(response);
  });
});

describe('User Register -- Negative Case', () => {
  test("I can't register new user, if the user doesn't defined yet", async () => {
    const response = await registUser({ email: 'jane.doe@reqres.in', password: 'jane123' });
    er.expectStatus(response, respStatus.statusBadRequest);
    er.expectContain(response, response.body.error, 'Note: Only defined users succeed registration');
    er.expectSchema(response, schema.registUserFailed);
    er.expectSnapshot(response);
  });
});
