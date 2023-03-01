import { useUserData } from "@prop-drill/module-user";
import { WorkspaceSettings } from "@prop-drill/module-workspace";

export const App = () => {
  const userData = useUserData()
  return (
    <WorkspaceSettings userData={userData} />
  );
};
