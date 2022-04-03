const Employee = require('../lib/Employee');

test('test for name', () => {
    const employee = new Employee('sam', '1', 'sam@gmail.com')
    expect(employee.name).toBe('sam')
})

test('test for id', () => {
    const employee = new Employee('sam', '1', 'sam@gmail.com')
    expect(employee.id).toBe('1')
})

test('test for email', () => {
    const employee = new Employee('sam', '1', 'sam@gmail.com')
    expect(employee.email).toBe('sam@gmail.com')
})

test('test for getRole()', () => {
    const employee = new Employee('sam', '1', 'sam@gmail.com')
    expect(employee.getRole()).toBe('Employee')
})