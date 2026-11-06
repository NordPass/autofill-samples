import { useLayoutEffect, useRef, useState } from 'react';

const ClearButton = ({ onClear }: { onClear: () => void }) => (
  <button className="btn btn-outline" type="button" onClick={onClear}>
    Clear
  </button>
);

// Nombre(s) + Apellidos
const FirstAndLastName = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-start gap-3">
      <ClearButton
        onClear={() => {
          firstName.current!.value = '';
          lastName.current!.value = '';
          email.current!.value = '';
        }}
      />
      <form className="flex flex-col items-start gap-3">
        <h2 className="text-2xl">Nombre y apellidos</h2>
        <p>Ingresa tus datos personales para guardarlos.</p>
        <label className="flex flex-col items-start" htmlFor="compoundFirstName">
          Nombre(s)
          <input
            ref={firstName}
            id="compoundFirstName"
            name="nombre"
            className="input w-full max-w-xs"
            type="text"
          />
        </label>
        <label className="flex flex-col items-start" htmlFor="compoundLastName">
          Apellidos
          <input
            ref={lastName}
            id="compoundLastName"
            name="apellidos"
            className="input w-full max-w-xs"
            type="text"
          />
        </label>
        <label className="flex flex-col items-start" htmlFor="compoundEmail">
          Correo electrónico
          <input
            ref={email}
            id="compoundEmail"
            name="correo"
            className="input w-full max-w-xs"
            type="text"
          />
        </label>
        <button className="btn btn-outline" type="submit" onClick={event => event.preventDefault()}>
          Guardar
        </button>
      </form>
    </div>
  );
};

// Nombre(s) + Apellido paterno + Apellido materno (gob.mx/curp "Datos Personales")
const PaternalAndMaternal = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const paternal = useRef<HTMLInputElement>(null);
  const maternal = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-start gap-3">
      <ClearButton
        onClear={() => {
          firstName.current!.value = '';
          paternal.current!.value = '';
          maternal.current!.value = '';
        }}
      />
      <form className="flex flex-col items-start gap-3">
        <h2 className="text-2xl">Apellido paterno y materno</h2>
        <p>Ingresa tus datos personales para consultar tu CURP.</p>
        <label className="flex flex-col items-start" htmlFor="curpFirstName">
          Nombre(s)
          <input
            ref={firstName}
            id="curpFirstName"
            name="nombres"
            className="input w-full max-w-xs"
            type="text"
          />
        </label>
        <label className="flex flex-col items-start" htmlFor="curpPaternal">
          Primer apellido
          <input
            ref={paternal}
            id="curpPaternal"
            name="primerApellido"
            className="input w-full max-w-xs"
            type="text"
          />
        </label>
        <label className="flex flex-col items-start" htmlFor="curpMaternal">
          Segundo apellido
          <input
            ref={maternal}
            id="curpMaternal"
            name="segundoApellido"
            className="input w-full max-w-xs"
            type="text"
          />
        </label>
        <button className="btn btn-outline" type="submit" onClick={event => event.preventDefault()}>
          Buscar
        </button>
      </form>
    </div>
  );
};

// Nombre completo
const FullName = () => {
  const fullName = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-start gap-3">
      <ClearButton
        onClear={() => {
          fullName.current!.value = '';
        }}
      />
      <form className="flex flex-col items-start gap-3">
        <h2 className="text-2xl">Nombre completo</h2>
        <p>Escribe tu nombre completo tal como aparece en tu identificación.</p>
        <label className="flex flex-col items-start" htmlFor="compoundFullName">
          Nombre completo
          <input
            ref={fullName}
            id="compoundFullName"
            name="nombreCompleto"
            className="input w-full max-w-xs"
            type="text"
          />
        </label>
        <button className="btn btn-outline" type="submit" onClick={event => event.preventDefault()}>
          Continuar
        </button>
      </form>
    </div>
  );
};

const TABS = [
  { id: 'firstAndLast', label: 'Nombre + Apellidos', Form: FirstAndLastName },
  { id: 'paternalAndMaternal', label: 'Paterno + Materno', Form: PaternalAndMaternal },
  { id: 'fullName', label: 'Nombre completo', Form: FullName },
] as const;

// only the active tab's form is mounted so the extension analyzes one identity form at a time
export const PersonalInfoCompoundNames = () => {
  const [activeId, setActiveId] = useState<(typeof TABS)[number]['id']>(TABS[0].id);
  const { Form } = TABS.find(tab => tab.id === activeId)!;

  // the extension reads the page language from <html lang>, which index.html sets to "en"
  useLayoutEffect(() => {
    const previousLang = document.documentElement.lang;

    document.documentElement.lang = 'es';

    return () => {
      document.documentElement.lang = previousLang;
    };
  }, []);

  return (
    <div className="ml-3 justify-items-start">
      <h1 className="text-4xl mt-3">Datos personales</h1>
      <p className="pb-2">
        Spanish forms for compound names. Each tab has a single form so autofill detects it on its
        own.
      </p>

      <div role="tablist" className="tabs tabs-border mt-3">
        {TABS.map(tab => (
          <button
            key={tab.id}
            role="tab"
            type="button"
            className={`tab ${tab.id === activeId ? 'tab-active' : ''}`}
            aria-selected={tab.id === activeId}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <Form key={activeId} />
      </div>
    </div>
  );
};
