import {checkForName} from '../nameChecker'

describe('Test checkForName func', () => {
  test('Right url', ()=> {
    document.body.innerHTML = '<div id="error"></div>'
    const result = checkForName({
      target: {
        value: 'www.example.com'
      }
    })
    expect(result).toBeTruthy()
    expect(document.getElementById('error').innerHTML).toBe(`It's valid url!`)
  })
  test('Bad url', ()=> {
    document.body.innerHTML = '<div id="error"></div>'
    const result = checkForName({
      target: {
        value: 'helloworld'
      }
    })
    expect(result).toBeFalsy()
    expect(document.getElementById('error').innerHTML).toBe(``)
  })
})