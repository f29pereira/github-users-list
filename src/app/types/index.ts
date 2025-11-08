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
 * @property userList - list of users to be displayed on the table
 */
export type UsersProps = {
  userList: GitHubUser[];
};
