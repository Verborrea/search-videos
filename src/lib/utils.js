function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export function generateUniqueString(length) {
    const timestamp = Date.now().toString(36); // Convierte el timestamp en una cadena de base 36
    const randomString = generateRandomString(length - timestamp.length);
    return timestamp + randomString;
}