import { Pv } from '@models/pv';
import { SongType } from 'utils/enums/songs/songType';

export interface SongResult {
  id: number;
  name: string;
  publishDate: string;
  length: number;
  songType: SongType;
  additionalNames: string[] | null;
  artistString: string;
  pvs: Pv[];
  mainPicture: {
    urlOriginal: string;
    urlThumb: string;
  };
  ytPvEmbedUrl: string;
  totalScore: number;
}
