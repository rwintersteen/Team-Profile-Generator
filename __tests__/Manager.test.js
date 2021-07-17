const {Manager} = require('../index')

describe('Manager Tests', () => {
    it('has a getRole() functon', () => {
    const karen = new Manager('Karen', 'karen@email.com', '1', 'Manager', 1);
    expect(karen.getRole()).toBe('Manager')
    })
})