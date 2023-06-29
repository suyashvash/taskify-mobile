

export const config ={
    env: 'dev',
    theme: 'default',
}

const ApiHead = config.env === 'dev' ? 'https://taskify-backend.up.railway.app' : 'https://taskify-backend.up.railway.app'


export const ApiCollection = {
    auth:{
        login: ApiHead + '/api/login',
        register: ApiHead + '/api/register',
        logout: ApiHead + '/api/logout',
    },
    user:{
        getUser: ApiHead + '/api/profile',
    }
}