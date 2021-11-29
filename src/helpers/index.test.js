import {formatGenres, formatReleaseDate} from "./index";

describe('helperFunctions', () => {
  it('formatReleaseDate', () => {
    expect(formatReleaseDate('2021-09-09')).toBe('2021');
  });

  it('formatGenres', () => {
    expect(formatGenres(['genre1', 'genre2', 'genre3'])).toBe('genre1, genre2, genre3');
  });
})

