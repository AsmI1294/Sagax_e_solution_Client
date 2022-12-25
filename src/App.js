import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { authContext } from "./AuthProvider/AuthProvider";
import { routes } from "./Routes/Routes";
function App() {
  const { theme, dark } = useContext(authContext);

  console.log(theme);
  return (
    <div style={theme == "dark" ? dark : undefined}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
