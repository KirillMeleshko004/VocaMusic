import { SongType } from 'utils/enums/songs/songType';
import { WebLink } from '../helperModels/webLink';
import { Tag } from 'utils/helperModels/tag';
import { Album } from 'utils/helperModels/album';
import { Artist } from 'utils/helperModels/artist';

export interface SongFullInfo {
  id: number;
  name: string;
  additionalNames: string;
  publishDate: string;
  lengthSeconds: number;
  songType: SongType;
  artistString: string;
  mainImage: string;
  thumbImg: string;
  ytPvEmbedUrl: string;
  ratingScore: number;
  tagCategories: {
    category: string;
    tags: Tag[];
  }[];
  albums: Album[];
  artists: Artist[];
  webLinks: WebLink[];
}
