import { SongType } from 'utils/enums/songs/songType';
import { Pv } from './pv';

export interface SongWithPvs {
  id: number;
  name: string;
  publishDate: string;
  length: number;
  songType: SongType;
  additionalNames: string[] | null;
  artistString: string;
  pvs: Pv[];
  mainImage: string;
  thumbImg: string;
  ytPvEmbedUrl: string;
}
