import { ReactNode } from "react";

/**
 * GitHubUser type
 * @property id - user id
 * @property name - user name
 * @property avatar - user avatar url
 * @property url - user gitHub profile url
 */
export type GitHubUser = {
  id: number;
  name: string;
  avatar: string;
  url: string;
};

/**
 * Props for the Users component
 * @property userList  - list of users to be displayed on the table
 * @property isDummy   - indicates if users list if a dummy list
 */
export type UsersProps = {
  userList: GitHubUser[];
  isDummy: boolean;
};
