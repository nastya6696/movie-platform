export const formatReleaseDate = (releaseDate) => {
  return releaseDate.split('-')[0];
}

export const formatGenres = (genres) => {
  return genres.join(', ');
}
