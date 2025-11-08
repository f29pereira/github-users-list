"use client"; //Client component

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import type { GitHubUser } from "./types";
import Users from "./components/Users/Users";
import { fetchUsers, getLastUserId, getDummyUsersList } from "./users/users";
import { FaArrowLeft, FaArrowRight } from "./icons/icons";

/**
 * Renders Users component and prev/next buttons
 */
export default function Home() {
  const [usersList, setUsersList] = useState<GitHubUser[][]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const dummyUsers = getDummyUsersList();

  useEffect(() => {
    const getInitialUsers = async () => {
      await getUsers(0);
      setIsLoading(false);
    };

    getInitialUsers();
  }, []);

  /**
   * Fetches users and updates usersList state
   */
  const getUsers = async (userId: number) => {
    const users = await fetchUsers(userId);
    setUsersList((prev) => [...prev, users]);
  };

  const nextUsers = async () => {
    //users already fetched
    if (usersList[currentPage + 1]) {
      setCurrentPage((prev) => prev + 1);
      return;
    }

    //fetch new users
    const lastUserId = getLastUserId(usersList);
    setIsLoading(true);
    await getUsers(lastUserId);
    setIsLoading(false);
    setCurrentPage((prev) => prev + 1);
  };

  const prevUsers = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <main>
      <section className={styles.usersSec}>
        {isLoading ? (
          <Users userList={dummyUsers} isDummy={true} />
        ) : (
          <>
            <Users userList={usersList[currentPage]} isDummy={false} />

            {/*Prev and Next buttons*/}
            <div className={`flex-center ${styles.buttonsCont}`}>
              {currentPage > 0 ? (
                <button
                  className={`flex-center ${styles.button}`}
                  onClick={prevUsers}
                >
                  <FaArrowLeft />
                  Prev
                </button>
              ) : null}

              <button
                className={`flex-center ${styles.button}`}
                onClick={nextUsers}
              >
                Next <FaArrowRight />
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
