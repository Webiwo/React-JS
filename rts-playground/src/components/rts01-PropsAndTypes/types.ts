type UserInfoType = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoType = UserInfoType & {
  role: string;
  lastLogin: Date;
};

export { type UserInfoType, type AdminInfoType };
