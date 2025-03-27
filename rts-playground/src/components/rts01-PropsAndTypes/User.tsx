import { ReactNode } from "react";

interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
  children: ReactNode;
}

//const User = ({name, age, isStudent, children}: {name: string; age: number; isStudent: boolean; children: ReactNode}) => {
//const User: React.FC<UserShape> = ({ name, age, isStudent, children }) => {
const User = ({ name, age, isStudent, children }: UserShape) => {
  return (
    <div>
      {children}
      <p>
        Name: {name}, Age: {age}, Student: {isStudent.toString()}
      </p>
    </div>
  );
};

export default User;
