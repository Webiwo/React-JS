import { type UserInfoType } from "./types";

type UserInfoProps = {
  user: UserInfoType;
};

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <h3>User Information</h3>
      <p>
        ID: {user.id}, Name: {user.name}, Email: {user.email}
      </p>
    </div>
  );
};

export default UserInfo;
