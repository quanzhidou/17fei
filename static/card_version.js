window.changeVersion = (card_version) => {
  let vip = localStorage.getItem('vip')

  if (card_version.indexOf('lover') == 0) {
    localStorage.setItem('card_version', card_version)
    location.href = "/card"
    return
  }

  localStorage.setItem('card_version', card_version)
  location.href = "/card"
}