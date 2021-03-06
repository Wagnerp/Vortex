import { ComponentEx } from '../../../util/ComponentEx';
import * as fs from '../../../util/fs';
import relativeTime from '../../../util/relativeTime';

import { IDownload } from '../types/IDownload';

import I18next from 'i18next';
import * as path from 'path';
import * as React from 'react';

interface IFileTimeProps {
  t: I18next.TFunction;
  language: string;
  detail: boolean;
  download: IDownload;
  downloadPath: string;
  time: Date;
}

class FileTime extends ComponentEx<IFileTimeProps, { mtime: Date }> {
  private mIsMounted: boolean = false;

  constructor(props: IFileTimeProps) {
    super(props);

    this.initState({ mtime: undefined });
  }

  public componentDidMount() {
    this.mIsMounted = true;
    this.updateTime();
  }

  public componentWillUnmount() {
    this.mIsMounted = false;
  }

  public componentWillReceiveProps(nextProps: IFileTimeProps) {
    if ((nextProps.time === undefined)
      && ((this.props.downloadPath !== nextProps.downloadPath)
        || (this.props.download !== nextProps.download))) {
        this.updateTime();
      }
  }

  public render(): JSX.Element {
    const { t, detail, language, time } = this.props;

    const mtime = time || this.state.mtime;

    if (mtime === undefined) {
      return null;
    }

    if (detail) {
      try {
        return <span>{mtime.toLocaleString(language)}</span>;
      } catch (err) {
        return <span>{mtime.toISOString()}</span>;
      }
    } else {
      return <span>{relativeTime(mtime, t)}</span>;
    }
  }

  private updateTime() {
    const { download, downloadPath } = this.props;
    if ((download.localPath === undefined) || (downloadPath === undefined)) {
        return null;
    } else {
      return fs.statAsync(path.join(downloadPath, download.localPath))
        .then((stat: fs.Stats) => {
          if (this.mIsMounted) {
            this.nextState.mtime = stat.mtime;
          }
        })
        .catch(err => undefined);
    }
  }
}

export default FileTime;
