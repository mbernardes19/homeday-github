const request = async (path, method) => {
    const response = await fetch(`https://api.github.com/users/${path}`, {
        method: method || 'GET',
        headers: { 'Content-type': 'application/json' }
    })

    return response.json();
}

export const getGitHubProfile = async (username) => {
    try {
        return request(username);
    } catch (e) {
        console.log(`Error while fetching GitHub profile: ${e}`);
        throw new Error('Error while fetching GitHub profile');
    }   
}