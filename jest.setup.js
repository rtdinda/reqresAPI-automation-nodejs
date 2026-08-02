// Custom Jest matchers for schema validation and other utilities

expect.extend({
  toMatchSchema(received, expectedSchema) {
    const validateSchema = (data, schema) => {
      if (!schema || !schema.type) return true;

      // Basic type checking
      const typeMap = {
        object: 'object',
        array: 'array',
        string: 'string',
        integer: 'number',
        number: 'number',
        boolean: 'boolean',
        null: 'object'
      };

      const actualType = Array.isArray(data) ? 'array' : typeof data;
      const expectedType = typeMap[schema.type] || schema.type;

      if (actualType !== expectedType) {
        return false;
      }

      // Validate object properties
      if (schema.type === 'object' && schema.properties) {
        for (const [key, propSchema] of Object.entries(schema.properties)) {
          if (!(key in data)) {
            // Properties are optional by default if not in required array
            if (schema.required && schema.required.includes(key)) {
              return false;
            }
            continue;
          }
          if (!validateSchema(data[key], propSchema)) {
            return false;
          }
        }
      }

      // Validate array items
      if (schema.type === 'array' && Array.isArray(data)) {
        if (schema.items) {
          const itemSchema = Array.isArray(schema.items) ? schema.items[0] : schema.items;
          for (const item of data) {
            if (!validateSchema(item, itemSchema)) {
              return false;
            }
          }
        }
      }

      return true;
    };

    const pass = validateSchema(received, expectedSchema);

    return {
      pass,
      message: () => pass
        ? `Expected the response body not to match the schema`
        : `Expected the response body to match the schema`
    };
  },

  toBeSorted(received, options = {}) {
    const { descending = false } = options;
    
    if (!Array.isArray(received)) {
      return {
        pass: false,
        message: () => 'Expected value to be an array'
      };
    }

    let pass = true;
    for (let i = 0; i < received.length - 1; i++) {
      const current = received[i];
      const next = received[i + 1];
      
      if (descending) {
        if (current < next) {
          pass = false;
          break;
        }
      } else {
        if (current > next) {
          pass = false;
          break;
        }
      }
    }

    return {
      pass,
      message: () => pass
        ? `Expected array not to be sorted ${descending ? 'descending' : 'ascending'}`
        : `Expected array to be sorted ${descending ? 'descending' : 'ascending'}`
    };
  },

  toBeWithin(received, min, max) {
    const pass = received >= min && received <= max;

    return {
      pass,
      message: () => pass
        ? `Expected ${received} not to be within ${min} and ${max}`
        : `Expected ${received} to be within ${min} and ${max}`
    };
  },

  toHaveLengthWithin(received, minLength, maxLength) {
    const length = received.length;
    const pass = length >= minLength && length <= maxLength;

    return {
      pass,
      message: () => pass
        ? `Expected length ${length} not to be within ${minLength} and ${maxLength}`
        : `Expected length ${length} to be within ${minLength} and ${maxLength}`
    };
  },

  toBeEmpty(received) {
    const isEmpty = received && Object.keys(received).length === 0;

    return {
      pass: isEmpty,
      message: () => isEmpty
        ? `Expected object not to be empty`
        : `Expected object to be empty, but it contains: ${JSON.stringify(received)}`
    };
  }
});
