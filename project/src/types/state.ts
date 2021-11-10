import { AuthorizationStatus } from '../const';
import { Film, Films } from './film';
import { AuthInfo  } from './auth-info';
import { Reviews } from './review';

export type State = {
  activeGenre: string,
  films: Films,
  favoriteFilms: Films,
  film?: Film,
  reviews: Reviews,
  similarFilms: Films,
  showedFilms: number,
  authorizationStatus: AuthorizationStatus,
  authInfo?: AuthInfo,
  isDataLoaded: boolean,
};
