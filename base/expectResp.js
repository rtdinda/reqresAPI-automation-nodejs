// import { loppingSnapExByResponse } from './base-function';
import { expect as jestExpect } from '@jest/globals';


export const output = (response) => ({
  text: `\n  Request: ${JSON.stringify(response.request, null, 4)}`,
});

export function expectStatus(response, expectedStatus) {
  jestExpect(response.status).toEqual(expectedStatus);
}

export const expectEqual = (response, actualData, expectedBody) => {
  jestExpect(actualData).toEqual(expectedBody);
};

export const expectContain = (response, actualData, expectedBody) => {
  jestExpect(actualData).toContain(expectedBody);
};

export const expectSchema = (response, expectedSchema) => {
  jestExpect(response.body).toMatchSchema(expectedSchema);
};

export const expectSnapshot = (response) => {
  jestExpect(response.body).toMatchSnapshot();
};

export const expectSnapEx = (response, snapshotExcept) => {
  jestExpect(response.body).toMatchSnapshot(snapshotExcept);
};

// export const expectSnapExArray = async (response, snapshotExcept, pathToArray) => {
//   let tempExpected = snapshotExcept;
//   tempExpected = await loppingSnapExByResponse(response, tempExpected, pathToArray);

//   expect((response).body, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot(tempExpected);
// };

export const expectSnapshotSpec = (response, actualData) => {
  jestExpect(actualData).toMatchSnapshot();
};

export const expectSnapExSpec = (response, actualData, snapshotExcept) => {
  jestExpect(actualData).toMatchSnapshot(snapshotExcept);
};

export const expectAscending = (response, actualData) => {
  jestExpect(actualData).toBeSorted({ descending: false });
};

export const expectDescending = (response, actualData) => {
  jestExpect(actualData).toBeSorted({ descending: true });
};

export const expectLength = (response, actualData, length) => {
  jestExpect(actualData).toHaveLength(length);
};

export const expectLengthWithin = (response, actualData, minLength, maxLength) => {
  jestExpect(actualData).toHaveLengthWithin(minLength, maxLength);
};

export const expectWithin = (response, actualData, min, max) => {
  jestExpect(actualData).toBeWithin(min, max);
};

export const expectGreaterThanOrEqual = (response, actualData, number) => {
  jestExpect(actualData).toBeGreaterThanOrEqual(number);
};

export const expectLessThanOrEqual = (response, actualData, number) => {
  jestExpect(actualData).toBeLessThanOrEqual(number);
};

export const expectGreaterThan = (response, actualData, number) => {
  jestExpect(actualData).toBeGreaterThan(number);
};

export const expectLessThan = (response, actualData, number) => {
  jestExpect(actualData).toBeLessThan(number);
};

export const expectNotEqual = (response, actualData, expectedBody) => {
  jestExpect(actualData).not.toEqual(expectedBody);
};

export const expectNotContain = (response, actualData, expectedBody) => {
  jestExpect(actualData).not.toContain(expectedBody);
};

export const expectEmptyObject = (response) => {
    jestExpect(response).toBeEmpty();
};

export const expectEmptyArray = (response) => {
  jestExpect(response).toBeEmpty();
};