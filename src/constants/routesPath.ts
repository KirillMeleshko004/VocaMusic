type NavLink = {
  title: string;
  URI: string;
};

export const HOME: NavLink = {
  title: 'Home',
  URI: '',
};
export const SONGS: NavLink = {
  title: 'Songs',
  URI: 'songs',
};
export const SONG: NavLink = {
  title: 'Song',
  URI: 'song/:id',
};
