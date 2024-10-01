import { Categories } from 'utils/enums/artists/categories';
import { Roles } from 'utils/enums/artists/roles';

export interface Artist {
  id: number;
  categories: Categories[];
  roles: Roles;
  name: string;
}
