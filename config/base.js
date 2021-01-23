const baseConfig = {
    siteName: 'Rati Digital',
    googleAnalytics: {
        on: true,
        id: process.env.GOOGLE_ANALYTICS_ID
    },
    //will make main menu dynamic later
    mainMenu: [
        {
            name: 'Home',
            link: '/'
        },
    ],
    // Disqus
    disqus: {
        on: true,
        loadingStrategy: 'button', // Options: onload, lazy, button
        siteShortName: 'Ratidigital'
    },
}

export default baseConfig;