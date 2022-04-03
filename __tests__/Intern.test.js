const Intern = require('../lib/Intern')

test('test for name', () => {
    const intern = new Intern('joe', '3', 'joe@gmail.com', 'UConn')
    expect(intern.name).toBe('joe')
})

test('test for id', () => {
    const intern = new Intern('joe', '3', 'joe@gmail.com', 'UConn')
    expect(intern.id).toBe('3')
})

test('test for email', () => {
    const intern = new Intern('joe', '3', 'joe@gmail.com', 'UConn')
    expect(intern.email).toBe('joe@gmail.com')
})

test('test for getSchool', () => {
    const intern = new Intern('joe', '3', 'joe@gmail.com', 'UConn')
    expect(intern.getSchool()).toBe('UConn')
})

test('test for getRole()', () => {
    const intern = new Intern('joe', '3', 'joe@gmail.com', 'UConn')
    expect(intern.getRole()).toBe('Intern')
})