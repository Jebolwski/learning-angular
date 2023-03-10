import { Profile } from './profile';

export interface Blog {
  id: number;
  profile: Profile;
  text: string;
  file: string;
  likes: any;
  created: string;
  updated: string;
}
