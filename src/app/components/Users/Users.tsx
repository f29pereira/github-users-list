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
export default function Users({ userList }: UsersProps) {
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
            <img
              className={styles.avatar}
              src={user.avatar}
              alt="User avatar"
            />
          </div>
          <div>{user.name}</div>
          <div>
            <a
              href={user.url}
              target="_blank"
              className={`flex-center ${styles.profileCont}`}
            >
              <FaGithub className={styles.gitHubIcon} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
