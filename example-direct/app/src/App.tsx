import { useUserData } from "@direct/module-user";
import { WorkspaceSettings } from "@direct/module-workspace";

export const App = () => {
  const userData = useUserData()
  return (
    <WorkspaceSettings userData={userData} />
  );
};
