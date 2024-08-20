import { test, expect } from "@playwright/test";

test('login successfully', async({ request }) => {
    const response = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
        data: {
            userEmail: "dora@gmail.com",
            userPassword: "Dora@2501"
        }
    });

    expect(response.status()).toBeTruthy(); 
    console.log('status code:', response.status());

    const responseBody = await response.json();
    console.log('Response body:', responseBody); 
});
