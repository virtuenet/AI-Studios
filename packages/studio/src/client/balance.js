import { BASE_URL, notifyAuthRequired } from './core';

export async function getUserBalance(apiKey) {
    const response = await fetch(`${BASE_URL}/api/v1/account/balance`, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        }
    });
    if (!response.ok) {
        const errText = await response.text();
        notifyAuthRequired(response.status, errText);
        throw new Error(`Failed to fetch balance: ${response.status} - ${errText.slice(0, 100)}`);
    }
    return await response.json();
}

