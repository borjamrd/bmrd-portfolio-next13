export async function getAccessToken(clientId: string): Promise<string> {
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "client_credentials");
    params.append("client_secret", "7fd1ec647c354ca6aefa910e03acff44");
    params.append("redirect_uri", "http://localhost:3000");

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
    });

    const { access_token } = await result.json();

    return access_token;
}

export async function fetchProfile(token: string) {

}