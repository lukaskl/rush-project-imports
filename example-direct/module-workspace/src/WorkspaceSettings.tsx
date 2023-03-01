import { UserData } from "@direct/module-user";

export interface WorkspaceSettingsProps {
  userData: UserData
}

export const WorkspaceSettingsGuard = (props: WorkspaceSettingsProps) => {
  const { userData } = props
  if (userData === null) {
    return <>User data loading, please wait...</>;
  }

  if (!userData.isAuthenticated) {
    return <>You need to be signed-in to access this page</>;
  }

  if (userData.isAuthenticated) {
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

export const WorkspaceSettings = (props: WorkspaceSettingsProps) => {
  return (
    <div>
      <h1>Workspace settings</h1>
      <WorkspaceSettingsGuard {...props} />
    </div>
  );
};
