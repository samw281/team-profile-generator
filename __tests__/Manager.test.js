const Manager = require('../lib/Manager')

test('test for name', () => {
    const manager = new Manager('john', '4', 'john@gmail.com', '1')
    expect(manager.name).toBe('john')
})

test('test for id', () => {
    const manager = new Manager('john', '4', 'john@gmail.com', '1')
    expect(manager.id).toBe('4')
})

test('test for email', () => {
    const manager = new Manager('john', '4', 'john@gmail.com', '1')
    expect(manager.email).toBe('john@gmail.com')
})

test('test for getOfficeNumber', () => {
    const manager = new Manager('john', '4', 'john@gmail.com', '1')
    expect(manager.getOfficeNumber()).toBe('1')
})

test('test for getRole()', () => {
    const manager = new Manager('john', '4', 'john@gmail.com', '1')
    expect(manager.getRole()).toBe('Manager')
})