
export const goToGroupPage =  (navigate, name) => {
  navigate(`/group/${name}`)
}

export const goSearchPage = (navigate, search) => {
  navigate(`/search?q=${search}`)
}

export const goHomePage = (navigate) => {
  navigate(`/`)
}

export const goToFavoritesPage = (navigate) => {
  navigate(`/favorites`)
}