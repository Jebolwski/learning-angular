import { User } from './user';

export interface Profile {
  id: number;
  user: User;
  profilePic: string;
  description: string;
  followers: any;
  following: any;
  interests: any;
  created: Date;
  updated: Date;
}
