const API_URL = 'http://localhost:5025/api/healthcheck';

export const ping = async () => {
    const pingResponse = await fetch(`${API_URL}/ping`);
    if (!pingResponse.ok) {
        throw new Error(`Network response status was ${pingResponse.status}`);
    }

    return pingResponse.response;
};
