export const INPUT_TYPE = ['text', 'password', 'date'] as const;

export interface ICustomField {
  id?: string;
  placeholder?: string;
  type: (typeof INPUT_TYPE)[number];
  label?: string;
}

export const FORM_TYPES = ['Login', 'Register'] as const;
export const LANGUAGES = ['English', 'German', 'Dutch', 'French', 'Italian', 'Spanish', 'Lithuanian'] as const;

export interface IFormSettings {
  type: (typeof FORM_TYPES)[number];
  language: (typeof LANGUAGES)[number];
}

export const DEFORMATION = ['none', 'obfuscated', 'typo'] as const;

export interface IFieldSettings {
  withLabel: boolean;
  deformation: (typeof DEFORMATION)[number];
}

export type TCustomFieldSettings = Array<ICustomField>;

export interface IAllSettings {
  formSettings: IFormSettings;
  fieldSettings: IFieldSettings;
  customFieldSettings: TCustomFieldSettings;
}
