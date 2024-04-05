export const menuItems: any = [
    {
        name: 'Home',
        imageUrl: './assets/my-goals-icon.svg',
        route: '/dashboard'
    }, {
        name: 'My Goals',
        imageUrl: './assets/my-goals-icon.svg',
        route: '/goals'
    },
];


export const appsDetails = [
    {
        appName: "Engage",
        id: "engage"
    }, {
        appName: "Attendance Management",
        id: "attendance"
    }
]

export const API_ENDPOINTS = {
    POWER_HCM_DASHBOARD_ENDPOINT:"/dashboard",
    ACHIEVE_DASHBOARD_ENDPOINT:"/dashboard",
    POWER_HCM_CORE_LOGIN:"/PowerHCM/authenticate",
    GET_GOALS_BY_USERID:"/v1/goals",
    POST_GOALS: "/v1/goal"
}

export const AUTH_CONSTANTS: any = {
    USER_AUTHORIZATION_TOKEN: 'USER_AUTHORIZATION_TOKEN',
    //expiry time for tokens
    USER_AUTHORIZATION_TOKEN_EXPIRY: 60,
    //interceptor constants
    maxRetry: 2
}