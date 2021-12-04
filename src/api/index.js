const request = async (path, method) => {
    const response = await fetch(`https://api.github.com/users/${path}`, {
        method: method || 'GET',
        headers: { 'Content-type': 'application/json' }
    })

    if (response.ok) {
        return response.json();
    }
    throw new Error(`Error in a network request: ${response.url} [${response.status}] ${response.statusText}`);
}

export const getGitHubProfile = async (username) => {
    try {
        return await request(username);
    } catch (e) {
        console.log(`Error while fetching GitHub profile: ${e.message}`);
        throw new Error('Error while fetching GitHub profile');
    }   
}