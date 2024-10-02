import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SongStatus } from 'utils/enums/songs/songStatus';
import { SongType } from 'utils/enums/songs/songType';
import { SongResult } from './songResult';
import { SongForPv } from '@models/songForPv';
import { SongMinInfo } from '@models/songMinInfo';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private server: HttpClient) {}

  getRecentSongsForPv(
    start: number,
    pageSize: number = 4
  ): Observable<Array<SongForPv>> {
    return this.server
      .get<{ items: SongResult[]; totalCount: number | undefined }>(
        'https://vocadb.net/api/songs',
        {
          headers: {
            Accept: 'application/json',
          },
          params: {
            songTypes: SongType.Original.toString(),
            sort: 'PublishDate',
            getTotalCount: false,
            start: start,
            maxResults: pageSize,
            onlyWithPvs: true,
            pvServices: 'Youtube',
            status: SongStatus.Approved.toString(),
            fields: 'MainPicture,PVs',
          },
        }
      )
      .pipe(
        map((data) => {
          return data.items.map((song) => this.extractYtPv(song));
        }),
        map((data) => data.filter((song) => song != null))
      );
  }

  extractYtPv(song: SongResult): SongForPv | null {
    const ytPvs = song.pvs.filter((pv) => pv.service === 'Youtube');

    if (ytPvs.length === 0) return null;

    const ytPv = ytPvs[0];

    const mapedSong: SongForPv = {
      ...song,
      mainImage: song.mainPicture.urlOriginal,
      thumbImg: song.mainPicture.urlThumb,
      ytPvEmbedUrl: `https://www.youtube.com/embed/${ytPv.pvId}`,
    };

    return mapedSong;
  }

  getMinSongs(
    orderBy: string,
    query: string,
    page: number,
    pageSize: number
  ): Observable<Array<SongMinInfo>> {
    return this.server
      .get<{ items: SongResult[]; totalCount: number | undefined }>(
        'https://vocadb.net/api/songs',
        {
          headers: {
            Accept: 'application/json',
          },
          params: {
            sort: orderBy,
            getTotalCount: true,
            start: page,
            maxResults: pageSize,
            query: query,
            fields: 'MainPicture',
          },
        }
      )
      .pipe(
        map((data) => {
          return data.items.map(this.extractThumbImage);
        })
      );
  }

  extractThumbImage(song: SongResult): SongMinInfo {
    const mapedSong: SongMinInfo = {
      ...song,
      thumbImg: song.mainPicture.urlThumb,
    };

    return mapedSong;
  }
}
