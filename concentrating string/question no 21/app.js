const translate = require('google-translate-api');

function sayHelloWorld(languageCode) {
    const defaultLanguage = 'en';
    const supportedLanguages = ['es', 'de', 'fr']; // Add more languages as needed

    // Validate if the provided language code is supported
    const targetLanguage = supportedLanguages.includes(languageCode) ? languageCode : defaultLanguage;

    // Translate and print "Hello, World" in the specified language
    translate('Hello, World', { to: targetLanguage }).then(response => {
        console.log(`[${targetLanguage.toUpperCase()}]: ${response.text}`);
    }).catch(err => {
        console.error('Error:', err);
    });
}

// Example usage: node app.js es
const userLanguageCode = process.argv[2];
sayHelloWorld(userLanguageCode);
