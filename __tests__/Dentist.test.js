const {Dentist} = require('../index')

describe('Dentist Tests', () => {
    it('has a getRole() functon', () => {
    const karen = new Dentist('Karen', 'karen@email.com', '1', 'Dentist', 1);
    expect(karen.getRole()).toBe('Dentist')
    })
})