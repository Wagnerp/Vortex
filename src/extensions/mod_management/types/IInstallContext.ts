export type InstallOutcome = 'success' | 'failed' | 'canceled';

export interface IInstallContext {
  startIndicator: (id: string)  => void;
  stopIndicator: () => void;
  startInstallCB: (id: string, archivePath: string, destinationPath: string) =>
      void;
  finishInstallCB: (success: InstallOutcome, info?: any) => void;
  progressCB: (percent: number, file: string) => void;
  reportError: (message: string, details?: string) => void;
}
