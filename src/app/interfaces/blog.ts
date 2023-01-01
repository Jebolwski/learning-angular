import { Profile } from './profile';

export interface Blog {
  profile: Profile;
  text: string;
  file: string;
  likes: any;
  created: Date;
  updated: Date;
}
