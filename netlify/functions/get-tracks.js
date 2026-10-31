export const handler = async (event) => {
  // 1. Get the username from the frontend request (defaults to 'rj' if empty)
  const user = event.queryStringParameters.user || 'rj';
  const apiKey = process.env.LASTFM_API_KEY;

  // 2. Build the secure Last.fm URL (limit=1 gets only the latest song)
  const lastfmUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&limit=1&format=json`;

  try {
    const response = await fetch(lastfmUrl);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data from Last.fm" }),
    };
  }
};

