import { Pv } from 'utils/helperModels/pv';
import { Tag } from 'utils/helperModels/tag';
import { WebLink } from 'utils/helperModels/webLink';
import { SongType } from 'utils/enums/songs/songType';
import { Album } from 'utils/helperModels/album';
import { Artist } from 'utils/helperModels/artist';

export interface SongResult {
  id: number;
  name: string;
  additionalNames: string;
  publishDate: string;
  lengthSeconds: number;
  songType: SongType;
  artistString: string;
  pvs: Pv[];
  mainPicture: {
    urlOriginal: string;
    urlThumb: string;
  };
  ratingScore: number;
  tags: { count: number; tag: Tag }[];
  webLinks: WebLink[];
  albums: Album[];
  artists: Artist[];
}
