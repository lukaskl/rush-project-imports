import { UserContextProvider } from "@context/module-user";
import { WorkspaceSettings } from "@context/module-workspace";

export const App = () => {
  return (
    <UserContextProvider>
      <WorkspaceSettings />
    </UserContextProvider>
  );
};
