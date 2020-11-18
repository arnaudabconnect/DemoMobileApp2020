const SharedScreens = [
    {
        title: 'Events',
        screen: 'Events',
        icon: 'star',
    },
    {
        title: 'News',
        screen: 'News',
        icon: 'star',
    },
]



export const menuItems  = [
    ...SharedScreens,
    {
        title: 'Login',
        screen: 'LoginScreens',
        icon: 'star',
    },
 
    
]

export const menuItemsUser  = [
    ...SharedScreens,
    {
        title: 'create events',
        screen: 'CreateEventsScreen',
        icon: 'star',
        navigator: 'UserNavigator'

    },
    {
        title: 'create events',
        screen: 'CreateEventsScreen',
        icon: 'star',
        navigator: 'UserNavigator'

    },
    {
        title: 'Logout',
        screen: 'LogoutScreen',
        icon: 'star',
        navigator: 'UserNavigator'

    },
 
    
]