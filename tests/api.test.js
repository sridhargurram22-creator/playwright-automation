
const {test, expect} = require("@playwright/test");

test('GET USER API', async ({request}) =>{

 const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

 expect(response.status()).toBe(200);

 const responseBody = await response.json();

 console.log(responseBody);

 expect(responseBody.id).toBe(1);
 expect(responseBody.name).toBe("Leanne Graham");

});