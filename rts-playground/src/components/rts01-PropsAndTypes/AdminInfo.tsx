import { type AdminInfoType } from "./types";

type AdminInfoProps = {
  admin: AdminInfoType;
};

const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
  return (
    <div>
      <h3>Admin Information</h3>
      <p>
        ID: {admin.id}, Name: {admin.name}, Email: {admin.email}, Last Login:{" "}
        {admin.lastLogin.toLocaleString()}
      </p>
    </div>
  );
};

export default AdminInfo;
