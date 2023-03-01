import { useUserContext } from "@context/modules-common";

export const WorkspaceSettingsGuard = () => {
  const userContext = useUserContext();
  if (userContext === null) {
    return <>User data loading, please wait...</>;
  }

  if (!userContext.isAuthenticated) {
    return <>You need to be signed-in to access this page</>;
  }

  if (userContext.isAuthenticated) {
    return (
      <div>
        <h2>Your workspace settings:</h2>
        <div>• ----------</div>
        <div>• ----------</div>
        <div>• ----------</div>
        <div>• ----------</div>
        <div>• ----------</div>
      </div>
    );
  }

  return null;
};

export const WorkspaceSettings = () => {
  return (
    <div>
      <h1>Workspace settings</h1>
      <WorkspaceSettingsGuard />
    </div>
  );
};
