import User from "./components/rts01-PropsAndTypes/User";
import Button from "./components/rts01-PropsAndTypes/Button";
import { AdminInfoType } from "./components/rts01-PropsAndTypes/types";
import AdminInfo from "./components/rts01-PropsAndTypes/AdminInfo";
import ContactForm from "./components/rts02-FormsAndEvents/ContactForm";
import EventHandling from "./components/rts02-FormsAndEvents/EventHandling";

const App = () => {
  const admin: AdminInfoType = {
    id: 1,
    name: "Jack Black",
    email: "jack@black.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <>
      <User name="Adrew" age={22} isStudent={true}>
        <h2>User</h2>
        <AdminInfo admin={admin} />
        <Button
          label="Click Me"
          onClick={() => console.log("Clicked")}
          disabled={false}
        />
      </User>
      <hr />
      <ContactForm />
      <hr />
      <EventHandling />
    </>
  );
};

export default App;
