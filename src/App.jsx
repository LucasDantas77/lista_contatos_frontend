import { ContactProviders } from "./Contexts/Contacts";
import { UserProviders } from "./Contexts/UserContext";
import { RoutesMain as Routes } from "./routes/routes";
import { GlobalStyles } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyles />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <UserProviders>
        <ContactProviders>
          <Routes />
        </ContactProviders>
      </UserProviders>
    </>
  );
};

export default App;
