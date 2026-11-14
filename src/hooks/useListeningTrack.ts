// Import React hooks for managing and updating listening data.
import { useEffect, useState } from 'react'
import { getRecentTrack, type ListeningTrack } from '../services/lastfm'

function useListeningTrack() {
  // Store the most recently played track.
  const [track, setTrack] = useState<ListeningTrack | null>(null)

  // Track whether the initial request is still loading.
  const [isLoading, setIsLoading] = useState(true)

  // Store any errors encountered while fetching listening data.
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Track whether the component is still mounted.
    let isActive = true
    let timeoutId: number | undefined

    // Fetch the latest listening data from Last.fm.
    async function fetchTrack() {
      try {
        const listeningTrack = await getRecentTrack()

        if (isActive) {
          setTrack(listeningTrack)
          setError(null)
        }
      } catch (err) {
        if (isActive) {
          setError(
            err instanceof Error
              ? err.message
              : 'Unable to retrieve listening data.',
          )
        }
      } finally {
        if (isActive) {
          setIsLoading(false)

          // Schedule the next request 10 seconds after the current one finishes.
          timeoutId = window.setTimeout(fetchTrack, 10_000)
        }
      }
    }

    // Fetch listening data immediately when the hook mounts.
    fetchTrack()

    // Stop polling and prevent state updates when the component unmounts.
    return () => {
      isActive = false
      window.clearTimeout(timeoutId)
    }
  }, [])

  return { track, isLoading, error }
}

export default useListeningTrack
