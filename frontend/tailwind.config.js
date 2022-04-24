require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
    purge: {
        enabled: enablePurge,
        content: [
            './src/**/*.html',
            './src/**/*.css'
        ]
    },
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                'sm': {'max': '639px'},
                // => @media (min-width: 640px) { ... }
            },
        },
    },
    variants: {},
    plugins: [],
}
