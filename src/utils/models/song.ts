import { SongTypes } from 'utils/enums/songs/songTypes';
import { Artist } from './artist';

export interface Song {
  id: number;
  name: string;
  publishDate: string;
  length: number;
  songType: SongTypes;
  additionalNames: string[] | null;
  artistString: string;
  image: string;
  pvUrl: string;
}
