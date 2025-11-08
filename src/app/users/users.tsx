import { Octokit } from "@octokit/rest";
import type { GitHubUser } from "../types";

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit();

/**
 * Returns list of users with id greater than the given id
 */
export const fetchUsers = async (id: number) => {
  const response = await octokit.request("GET /users", {
    since: id,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  let usersList: GitHubUser[] = [];

  if (response.data.length > 0) {
    usersList = response.data.map((user) => ({
      id: user.id,
      name: user.login,
      avatar: user.avatar_url,
      url: user.html_url,
    }));
  }

  return usersList;
};

/**
 * Returns the id of the last fetched user
 */
export const getLastUserId = (usersList: GitHubUser[][]) => {
  if (usersList.length === 0) {
    return 0;
  }

  const lastIndex = usersList.at(-1);

  if (lastIndex && lastIndex.length > 0) {
    const lastUser = lastIndex.at(-1);

    return lastUser ? lastUser.id : 0;
  }

  return 0;
};

/**
 * Returns dummy list of users
 */
export const getDummyUsersList = () => {
  const usersList: GitHubUser[] = [];

  for (let index = 1; index <= 30; index++) {
    const dummyUser: GitHubUser = {
      id: index,
      name: "",
      avatar: "",
      url: "",
    };

    usersList.push(dummyUser);
  }

  return usersList;
};
