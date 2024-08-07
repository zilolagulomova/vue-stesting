/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                proxima: ['Proxima Nova', 'sans-serif'], // Maxsus shriftni qo'shish
            },
            colors: {
                blue: {
                    100: '#f8fbff'
                }
            }
        },
    },
    plugins: [],
}
