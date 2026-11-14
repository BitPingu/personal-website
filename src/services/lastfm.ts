// Define the structure of a track returned by the Last.fm API.
type LastFmTrack = {
  name: string
  artist: {
    '#text': string
  }
  url: string
  '@attr'?: {
    nowplaying?: string
  }
}

// Define the structure of the Last.fm API response.
type LastFmResponse = {
  recenttracks?: {
    track: LastFmTrack | LastFmTrack[]
  }
  error?: number
  message?: string
}

// Define the track information used by the application.
export type ListeningTrack = {
  name: string
  artist: string
  url: string
  nowPlaying: boolean
}

// Fetch the user's most recently played track from Last.fm.
export async function getRecentTrack(): Promise<ListeningTrack | null> {
  // Get the Last.fm credentials from the environment variables.
  const apiKey = import.meta.env.VITE_LASTFM_API_KEY
  const username = import.meta.env.VITE_LASTFM_USERNAME

  // Ensure the required environment variables are configured.
  if (!apiKey || !username) {
    throw new Error('Last.fm API key or username is missing.')
  }

  // Build the query parameters for the Last.fm API request.
  const params = new URLSearchParams({
    method: 'user.getRecentTracks',
    user: username,
    api_key: apiKey,
    format: 'json',
    limit: '1',
  })

  // Request the user's most recently played track.
  const response = await fetch(`https://ws.audioscrobbler.com/2.0/?${params}`)

  // Handle unsuccessful HTTP responses.
  if (!response.ok) {
    throw new Error('Failed to fetch Last.fm listening data.')
  }

  // Parse the API response.
  const data: LastFmResponse = await response.json()

  // Handle errors returned by the Last.fm API.
  if (data.error) {
    throw new Error(data.message ?? 'Last.fm API request failed.')
  }

  // Get the returned track or tracks.
  const tracks = data.recenttracks?.track

  // Return null if the user has no recent listening activity.
  if (!tracks) {
    return null
  }

  // Handle the API returning either one track or an array of tracks.
  const track = Array.isArray(tracks) ? tracks[0] : tracks

  // Return null if no track is available.
  if (!track) {
    return null
  }

  // Convert the Last.fm response into the application's track format.
  return {
    name: track.name,
    artist: track.artist['#text'],
    url: track.url,
    nowPlaying: track['@attr']?.nowplaying === 'true',
  }
}
