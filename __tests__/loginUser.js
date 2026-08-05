import {loginUser} from '../endpoint/loginUser';
import * as schema from '../schema/loginUser';
import respStatus from '../base/responseStatus';
import * as er from '../base/expectResp';
import {jest} from '@jest/globals';

describe('User Login -- Positive Case', () => {
  test('I can login existing user', async () => {
    const response = await loginUser({ email: 'eve.holt@reqres.in', password: 'cityslicka' });
    er.expectStatus(response, respStatus.statusSuccessful);
    er.expectSchema(response, schema.loginSuccess);
    er.expectSnapshot(response);
  });
});

describe('User Login -- Negative Case', () => {
  test("I can't login user, if the email is invalid", async () => {
    const response = await loginUser({ email: 'eve.holt@reqres', password: 'cityslicka' });
    er.expectStatus(response, respStatus.statusBadRequest);
    er.expectContain(response, response.body.error, 'user not found');
    er.expectSchema(response, schema.loginFailed);
    er.expectSnapshot(response);
  });

    test("I can't login user, if the email is empty string", async () => {
    const response = await loginUser({ email: '', password: 'cityslicka' });
    er.expectStatus(response, respStatus.statusBadRequest);
    er.expectContain(response, response.body.error, 'Missing email or username');
    er.expectSchema(response, schema.loginFailed);
    er.expectSnapshot(response);
  });

    test("I can't login user, if the email is empty null", async () => {
    const response = await loginUser({ email: null, password: 'cityslicka' });
    er.expectStatus(response, respStatus.statusBadRequest);
    er.expectContain(response, response.body.error, 'Missing email or username');
    er.expectSchema(response, schema.loginFailed);
    er.expectSnapshot(response);
  });

    test("I can't login user, if the password is empty string", async () => {
    const response = await loginUser({ email: 'eve.holt@reqres.in', password: '' });
    er.expectStatus(response, respStatus.statusBadRequest);
    er.expectContain(response, response.body.error, 'Missing password');
    er.expectSchema(response, schema.loginFailed);
    er.expectSnapshot(response);
  });

    test("I can't login user, if the password is null", async () => {
    const response = await loginUser({ email: 'eve.holt@reqres.in', password: null });
    er.expectStatus(response, respStatus.statusBadRequest);
    er.expectContain(response, response.body.error, 'Missing password');
    er.expectSchema(response, schema.loginFailed);
    er.expectSnapshot(response);
  });
});
