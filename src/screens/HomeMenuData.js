const SharedScreens = [
    {
        title: 'Events',
        screen: 'Events',
        icon: 'star',
        image: {
         dark:   require('../images/icon-calendar-dark.png'),
         light:   require('../images/icon-calendar.png')
        }
    },
    {
        title: 'News',
        screen: 'News',
        icon: 'star',
        image: {
         dark:   require('../images/icon-articles-dark.png'),
         light:   require('../images/icon-articles.png')
        }
    },
]



export const menuItems  = [
    ...SharedScreens,
    {
        title: 'Login',
        screen: 'LoginScreens',
        icon: 'star',
        image:{
            dark: require('../images/icon-auth-dark.png'),
            light: require('../images/icon-auth.png')
        }
    },
 
    
]

export const menuItemsUser  = [
    ...SharedScreens,
    {
        title: 'Create events',
        screen: 'CreateEventsScreen',
        icon: 'star',
        navigator: 'UserNavigator',
        image:{
            dark: require('../images/icon-datepicker-dark.png'),
            light: require('../images/icon-datepicker.png')
        }

    },
    {
        title: 'Create soirées',
        screen: 'CreateEventsScreen',
        icon: 'star',
        navigator: 'UserNavigator',
        image:{
            dark: require('../images/icon-articles-dark.png'),
            light: require('../images/icon-articles.png')
        }

    },
    {
        title: 'Logout',
        screen: 'LogoutScreen',
        icon: 'star',
        navigator: 'UserNavigator',
        image:{
            dark: require('../images/icon-auth-dark.png'),
            light: require('../images/icon-auth.png')
        }

    },
 
    
]