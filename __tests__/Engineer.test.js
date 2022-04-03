const Engineer = require('../lib/Engineer')

test('test for name', () => {
    const engineer = new Engineer('bob', '2', 'bob@gmail.com', 'bobhub')
    expect(engineer.name).toBe('bob')
})

test('test for id', () => {
    const engineer = new Engineer('bob', '2', 'bob@gmail.com', 'bobhub')
    expect(engineer.id).toBe('2')
})

test('test for email', () => {
    const engineer = new Engineer('bob', '2', 'bob@gmail.com', 'bobhub')
    expect(engineer.email).toBe('bob@gmail.com')
})

test('test for github', () => {
    const engineer = new Engineer('bob', '2', 'bob@gmail.com', 'bobhub')
    expect(engineer.getGithub()).toBe('bobhub')
})

test('test for getRole()', () => {
    const engineer = new Engineer('bob', '2', 'bob@gmail.com', 'bobhub')
    expect(engineer.getRole()).toBe('Engineer')
})