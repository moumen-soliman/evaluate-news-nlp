import {handleSubmit} from '../formHandler';
import 'babel-polyfill';
const fetchMock = require('fetch-mock');

describe('Test checkForName func', () => {
  test('', async ()=> {
    document.body.innerHTML = '<div><input id="name" type="text" name="input" value="test"><div id="results"></div></div>'
    fetchMock.post('*', {
        status: 200,
        body: {data : "test"}
    }, 200)
    handleSubmit()
    expect(fetchMock.called()).toBeTruthy()
  })
})