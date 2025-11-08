import styles from "./Users.module.css";
import { UsersProps } from "@/app/types";
import { FaGithub } from "../../icons/icons";

/**
 * Renders users list with:
 * - Header
 * - Users info with: Avatar image, Name and GitHub profile Link
 *
 * Props are defined in {@link UsersProps}.
 */
export default function Users({ userList, isDummy }: UsersProps) {
  return (
    <div className={`flex-col-center`}>
      {/*Header*/}
      <div className={`${styles.container} ${styles.header}`}>
        <span>Avatar</span>
        <span>Name</span>
        <span>Profile</span>
      </div>

      {/*Users*/}
      {userList?.map((user) => (
        <div key={user.id} className={`${styles.container} ${styles.user}`}>
          <div>
            {!isDummy ? (
              <img
                className={styles.avatar}
                src={user.avatar}
                alt="User avatar"
              />
            ) : (
              <div className={styles.dummyAvatar}></div>
            )}
          </div>
          <div>
            <span className={styles.name}>{user.name}</span>
          </div>
          <div>
            <a
              href={user.url}
              target="_blank"
              className={`flex-center  
                ${isDummy ? styles.dummyProfile : styles.profileCont}`}
              title={`${user.name} profile`}
            >
              <FaGithub className={styles.gitHubIcon} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
