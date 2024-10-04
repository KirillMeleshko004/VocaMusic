export interface QueryArgs {
  orderBy: 'None' | 'Name' | 'PublishDate' | 'RatingScore' | 'SongType';
  query: string;
  page: number;
  pageSize: number;
}
