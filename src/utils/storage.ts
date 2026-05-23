const safeStorage = {
  get: (key: string) => {
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set: (key: string, val: string) => {
    try {
      localStorage.setItem(key, val)
    } catch (e) {
      console.warn('localStorage is disabled:', e)
    }
  },
}

export default safeStorage
