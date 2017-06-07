export type DialogType =
  'success' | 'info' | 'error' | 'question';

export interface IDialogActions {
    [label: string]: (label) => void;
}

export interface IDialog {
  id: string;
  type: DialogType;
  title: string;
  content: IDialogContent;
  actions: string[];
}

export interface ICheckbox {
  id: string;
  text: string;
  value: boolean;
}

export interface IInput {
  id: string;
  type?: 'text' | 'password' | 'number' | 'date' | 'time' | 'email' | 'url';
  value?: string;
  label?: string;
  placeholder?: string;
}

export interface IDialogContent {
  htmlFile?: string;
  /**
   * displays a message as html.
   * NOTE: this will be inserted directy
   * into the dom so it must never be html from
   * an external source!
   *
   * @type {string}
   * @memberOf IDialogContent
   */
  htmlText?: string;
  message?: string;
  checkboxes?: ICheckbox[];
  choices?: ICheckbox[];
  input?: IInput[];
  options?: {
    translated?: boolean;
    wrap?: boolean;
  };
}

export interface IDialogResult {
  action: string;
  input: any;
}
