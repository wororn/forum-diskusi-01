const api = (() => {
    const BASEURL = 'https://forum-api.dicoding.dev/v1'

    async function fetchWithAuth(url, options = {}) {
        return await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${getAccessToken()}`
            }
        })
    }

    function putAccessToken(token) {
        localStorage.setItem('accessToken', token)
    }

    function getAccessToken() {
        return localStorage.getItem('accessToken')
    }

    async function register({name, email, password}) {
        const response = await fetch(`${BASEURL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {user}} = responseJSON

        return user
    }

    async function login({email, password}) {
        const response = await fetch(`${BASEURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {token}} = responseJSON

        return token
    }

    async function getAllUsers () {
        const response = await fetch(`${BASEURL}/users`)

        const responseJSON = await response.json()
        
        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {users}} = responseJSON

        return users
    }

    async function getOwnProfile() {
        const response = await fetchWithAuth(`${BASEURL}/users/me`)

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {user}} = responseJSON

        return user
    }

    async function createThread({title, body, category = ''}) {
        const response = await fetchWithAuth(`${BASEURL}/threads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                category
            })
        })

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {thread}} = responseJSON

        return thread
    }

    async function getAllThreads() {
        const response = await fetch(`${BASEURL}/threads`)

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {threads}} = responseJSON

        return threads
    }

    async function getThreadDetail(id) {
        const response = await fetch(`${BASEURL}/threads/${id}`)

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {detailThread}} = responseJSON

        return detailThread
    }

    async function createComment({content, threadId}) {
        const response = await fetchWithAuth(`${BASEURL}/threads/${threadId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content
            })
        })

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {comment}} = responseJSON

        return comment
    }

    async function getAllLeaderboards() {
        const response = await fetch(`${BASEURL}/leaderboards`)

        const responseJSON = await response.json()

        const {status, message } = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {leaderboards}} = responseJSON

        return leaderboards
    }

    async function upVoteThread(threadId) {
        const response = await fetchWithAuth(`${BASEURL}/threads/${threadId}/up-vote`, {
            method: 'POST',
        })

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {vote}} = responseJSON

        return vote
    }

    async function downVoteThread(threadId) {
        const response = await fetchWithAuth(`${BASEURL}/threads/${threadId}/down-vote`, {
            method: 'POST'
        })

        const responseJSON = await response.json() 

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {vote}} = responseJSON

        return vote
    }

    async function neutralizeThreadVote(threadId) {
        const response = await fetchWithAuth(`${BASEURL}/threads/${threadId}/neutral-vote`, {
            method: 'POST'
        })

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {vote}} = responseJSON

        return vote
    }

    return {
        putAccessToken,
        getAccessToken,
        login,
        register,
        getAllUsers,
        getOwnProfile,
        createThread,
        getAllThreads,
        getThreadDetail,
        createComment,
        getAllLeaderboards,
        upVoteThread,
        downVoteThread,
        neutralizeThreadVote,
    }
})()

export default api