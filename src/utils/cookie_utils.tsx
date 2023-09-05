export function getCookie (name: string): string | null {
  const nameLenPlus = (name.length + 1)
  const cookie = document.cookie
    .split(';')
    .map(c => c.trim())
    .filter(cookie => {
      return cookie.substring(0, nameLenPlus) === `${name}=`
    })
    .map(cookie => {
      return decodeURIComponent(cookie.substring(nameLenPlus))
    })[0]
  return (cookie !== '' ? cookie : null)
}

export function setCookie (name: string, val: string): void {
  const date = new Date()
  const value = val

  // Set it expire in 7 days
  date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000))

  // Set it
  document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/'
}

export function deleteCookie (name: string): void {
  if (getCookie(name) !== null) {
    document.cookie = name + '=' + ';expires=Thu, 01 Jan 1970 00:00:01 GMT'
  }
}
