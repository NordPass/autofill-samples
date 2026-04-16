import type {
  IAllSettings,
  IFieldSettings,
  IFormSettings,
  TCustomFieldSettings,
} from './interfaces/interfaces';

import { useState } from 'react';
import { CustomFieldSettings } from './components/Settings/CustomFieldSettings';
import { FieldSettings } from './components/Settings/FieldSettings';
import { FormSettings } from './components/Settings/FormSettings';
import { Login } from './Login';
import { Register } from './Register';

const Form = (allSettings: IAllSettings) => {
  switch (allSettings.formSettings.type) {
    case 'Login':
      return <Login {...allSettings} />;
    case 'Register':
      return <Register {...allSettings} />;
    default:
      return <div>TBD</div>;
  }
};

export const Builder = () => {
  const [formSettings, setFormSettings] = useState<IFormSettings>({
    type: 'Login',
    language: 'English',
  });
  const [fieldSettings, setFieldSettings] = useState<IFieldSettings>({
    withLabel: true,
    deformation: 'none',
  });
  const [customFieldsSettings, setCustomFieldsSettings] = useState<TCustomFieldSettings>([]);

  return (
    <div>
      <FormSettings settings={formSettings} setSettings={setFormSettings} />
      <FieldSettings settings={fieldSettings} setSettings={setFieldSettings} />
      <CustomFieldSettings settings={customFieldsSettings} setSettings={setCustomFieldsSettings} />

      <Form
        formSettings={formSettings}
        fieldSettings={fieldSettings}
        customFieldSettings={customFieldsSettings}
      />
    </div>
  );
};
