import * as endpoint from '../endpoint/getUser';
import * as schema from '../schema/getUser';
import respStatus from '../base/responseStatus';
import * as er from '../base/expectResp';
import {jest} from '@jest/globals';

describe('Get List User -- Positive Case', () => {
  test('I can get list user and its detail by page number 2', async () => {
    const response = await endpoint.getListUsers(2);
    console.log(response.body);
    er.expectStatus(response, respStatus.statusSuccessful);
    er.expectSchema(response, schema.listUsers);
    er.expectSnapshot(response);
  });
});

describe('Get User -- Positive Case', () => {
  test('I can get detail user by exist ID', async () => {
    const response = await endpoint.getUser(2);
    er.expectStatus(response, respStatus.statusSuccessful);
    er.expectSchema(response, schema.singleUser);
    er.expectSnapshot(response);
  });
});

describe('Get List User -- Negative Case', () => {
  test("I can't get list user, if data user doesn't exist", async () => {
    const response = await endpoint.getListUsers(2000); 
    er.expectStatus(response, respStatus.statusSuccessful);
    er.expectSchema(response, schema.listUsers);
    er.expectEmptyArray(response.body.data);
    er.expectSnapshot(response.body);
  });
});

describe('Get User -- Negative Case', () => {
  test("I can't get detail user by unexist ID", async () => {
    const response = await endpoint.getUser(32562);
    console.log(response);
    er.expectStatus(response, respStatus.statusNotFound);
    er.expectSchema(response, schema.userNotFound);
    er.expectSnapshot(response);
  });
});