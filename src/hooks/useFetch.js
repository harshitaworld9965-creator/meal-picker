import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    let ignore = false

    async function fetchData() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error('Request failed')
        const json = await res.json()
        if (!ignore) setData(json)
      } catch (err) {
        if (!ignore) setError(err.message)
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [url])

  return { data, loading, error }
}