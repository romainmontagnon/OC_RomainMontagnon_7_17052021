module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'midnight-50': '#f2f4f6',
                'midnight-100': '#e6e9ec',
                'midnight-200': '#bfc7d0',
                'midnight-300': '#99a6b3',
                'midnight-400': '#4d637a',
                'midnight-500': '#002041',
                'midnight-600': '#001d3b',
                'midnight-700': '#001831',
                'midnight-800': '#001327',
                'midnight-900': '#001020',
                'mandy-50': '#fdf6f7',
                'mandy-100': '#fcedef',
                'mandy-200': '#f7d2d6',
                'mandy-300': '#f2b6bd',
                'mandy-400': '#e9808c',
                'mandy-500': '#df495b',
                'mandy-600': '#c94252',
                'mandy-700': '#a73744',
                'mandy-800': '#862c37',
                'mandy-900': '#6d242d'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}