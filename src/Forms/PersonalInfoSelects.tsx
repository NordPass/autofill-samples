import { useRef } from 'react';
import { countryOptions } from '../utils/constants';

export const PersonalInfoSelects = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phonePrefix = useRef<HTMLSelectElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const address1 = useRef<HTMLInputElement>(null);
  const address2 = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLSelectElement>(null);
  const zip = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLSelectElement>(null);

  const statesOptions = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  const prefixOptions = [
    '+93', // Afghanistan
    '+355', // Albania
    '+213', // Algeria
    '+376', // Andorra
    '+244', // Angola
    '+1-268', // Antigua and Barbuda
    '+54', // Argentina
    '+374', // Armenia
    '+61', // Australia
    '+43', // Austria
    '+994', // Azerbaijan
    '+1-242', // Bahamas
    '+973', // Bahrain
    '+880', // Bangladesh
    '+1-246', // Barbados
    '+375', // Belarus
    '+32', // Belgium
    '+501', // Belize
    '+229', // Benin
    '+975', // Bhutan
    '+591', // Bolivia
    '+387', // Bosnia and Herzegovina
    '+267', // Botswana
    '+55', // Brazil
    '+673', // Brunei
    '+359', // Bulgaria
    '+226', // Burkina Faso
    '+257', // Burundi
    '+238', // Cabo Verde
    '+855', // Cambodia
    '+237', // Cameroon
    '+1', // Canada
    '+236', // Central African Republic
    '+235', // Chad
    '+56', // Chile
    '+86', // China
    '+57', // Colombia
    '+269', // Comoros
    '+242', // Congo
    '+506', // Costa Rica
    '+385', // Croatia
    '+53', // Cuba
    '+357', // Cyprus
    '+420', // Czech Republic
    '+45', // Denmark
    '+253', // Djibouti
    '+1-767', // Dominica
    '+1-809', // Dominican Republic
    '+670', // East Timor
    '+593', // Ecuador
    '+20', // Egypt
    '+503', // El Salvador
    '+240', // Equatorial Guinea
    '+291', // Eritrea
    '+372', // Estonia
    '+268', // Eswatini
    '+251', // Ethiopia
    '+679', // Fiji
    '+358', // Finland
    '+33', // France
    '+241', // Gabon
    '+220', // Gambia
    '+995', // Georgia
    '+49', // Germany
    '+233', // Ghana
    '+30', // Greece
    '+1-473', // Grenada
    '+502', // Guatemala
    '+224', // Guinea
    '+245', // Guinea-Bissau
    '+592', // Guyana
    '+509', // Haiti
    '+504', // Honduras
    '+36', // Hungary
    '+354', // Iceland
    '+91', // India
    '+62', // Indonesia
    '+98', // Iran
    '+964', // Iraq
    '+353', // Ireland
    '+972', // Israel
    '+39', // Italy
    '+1-876', // Jamaica
    '+81', // Japan
    '+962', // Jordan
    '+7', // Kazakhstan
    '+254', // Kenya
    '+686', // Kiribati
    '+850', // Korea, North
    '+82', // Korea, South
    '+383', // Kosovo
    '+965', // Kuwait
    '+996', // Kyrgyzstan
    '+856', // Laos
    '+371', // Latvia
    '+961', // Lebanon
    '+266', // Lesotho
    '+231', // Liberia
    '+218', // Libya
    '+423', // Liechtenstein
    '+370', // Lithuania
    '+352', // Luxembourg
    '+261', // Madagascar
    '+265', // Malawi
    '+60', // Malaysia
    '+960', // Maldives
    '+223', // Mali
    '+356', // Malta
    '+692', // Marshall Islands
    '+222', // Mauritania
    '+230', // Mauritius
    '+52', // Mexico
    '+691', // Micronesia
    '+373', // Moldova
    '+377', // Monaco
    '+976', // Mongolia
    '+382', // Montenegro
    '+212', // Morocco
    '+258', // Mozambique
    '+95', // Myanmar
    '+264', // Namibia
    '+674', // Nauru
    '+977', // Nepal
    '+31', // Netherlands
    '+64', // New Zealand
    '+505', // Nicaragua
    '+227', // Niger
    '+234', // Nigeria
    '+389', // North Macedonia
    '+47', // Norway
    '+968', // Oman
    '+92', // Pakistan
    '+680', // Palau
    '+507', // Panama
    '+675', // Papua New Guinea
    '+595', // Paraguay
    '+51', // Peru
    '+63', // Philippines
    '+48', // Poland
    '+351', // Portugal
    '+974', // Qatar
    '+40', // Romania
    '+7', // Russia
    '+250', // Rwanda
    '+1-869', // Saint Kitts and Nevis
    '+1-758', // Saint Lucia
    '+1-784', // Saint Vincent and the Grenadines
    '+685', // Samoa
    '+378', // San Marino
    '+239', // Sao Tome and Principe
    '+966', // Saudi Arabia
    '+221', // Senegal
    '+381', // Serbia
    '+248', // Seychelles
    '+232', // Sierra Leone
    '+65', // Singapore
    '+421', // Slovakia
    '+386', // Slovenia
    '+677', // Solomon Islands
    '+252', // Somalia
    '+27', // South Africa
    '+211', // South Sudan
    '+34', // Spain
    '+94', // Sri Lanka
    '+249', // Sudan
    '+597', // Suriname
    '+46', // Sweden
    '+41', // Switzerland
    '+963', // Syria
    '+886', // Taiwan
    '+992', // Tajikistan
    '+255', // Tanzania
    '+66', // Thailand
    '+228', // Togo
    '+676', // Tonga
    '+1-868', // Trinidad and Tobago
    '+216', // Tunisia
    '+90', // Turkey
    '+993', // Turkmenistan
    '+688', // Tuvalu
    '+256', // Uganda
    '+380', // Ukraine
    '+971', // United Arab Emirates
    '+44', // United Kingdom
    '+1', // United States
    '+598', // Uruguay
    '+998', // Uzbekistan
    '+678', // Vanuatu
    '+379', // Vatican City
    '+58', // Venezuela
    '+84', // Vietnam
    '+967', // Yemen
    '+260', // Zambia
    '+263', // Zimbabwe
  ];

  return (
    <div className='ml-6'>
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          firstName.current!.value = 'Naruto';
          lastName.current!.value = 'Uzumaki';
          email.current!.value = 'naruto.uzumaki@gmail.com';
          phonePrefix.current!.value = '+81';
          phoneNumber.current!.value = '7046679531';
          address1.current!.value = '';
          address2.current!.value = '';
          city.current!.value = 'Konohagakure';
          state.current!.value = 'Idaho';
          zip.current!.value = '';
          country.current!.value = 'Japan';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          firstName.current!.value = 'Bruce';
          lastName.current!.value = 'Wayne';
          email.current!.value = 'brucewayne33112@gmail.com';
          phonePrefix.current!.value = '+1';
          phoneNumber.current!.value = '4722377744';
          address1.current!.value = 'Batcave';
          address2.current!.value = 'Wayne Manor';
          city.current!.value = 'Gotham';
          state.current!.value = 'New Jersey';
          zip.current!.value = '60035';
          country.current!.value = 'United States';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          firstName.current!.value = 'General';
          lastName.current!.value = 'Tullius';
          email.current!.value = 'dragonBorn33112@gmail.com';
          phonePrefix.current!.value = '+47';
          phoneNumber.current!.value = '59884549';
          address1.current!.value = '24 Louises gate';
          address2.current!.value = '';
          city.current!.value = 'Oslo';
          state.current!.value = 'Wyoming';
          zip.current!.value = '0169';
          country.current!.value = 'Norway';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          firstName.current!.value = '';
          lastName.current!.value = '';
          email.current!.value = '';
          phonePrefix.current!.value = '+1';
          phoneNumber.current!.value = '';
          address1.current!.value = '';
          address2.current!.value = '';
          city.current!.value = '';
          state.current!.value = 'Alabama';
          zip.current!.value = '';
          country.current!.value = 'Afghanistan';
        }}
      >
        Clear
      </button>
      <form className="flex flex-col items-start mt-3">
        <h1 className="text-4xl mb-3">Personal Info With Select</h1>
        <input
          ref={firstName}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="First Name"
        />
        <input
          ref={lastName}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Last Name"
        />
        <input
          ref={email}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Email"
        />
        <div className='phone number'>
          <select
            name="phone-prefix"
            id='select-phone-prefix'
            className='select select-bordered max-w-xs'
            ref={phonePrefix}
          >
            {prefixOptions.map((prefixOption, index) => (<option key={index} value={prefixOption}>
              {prefixOption}
            </option>
            ))}
          </select>
          <input
            ref={phoneNumber}
            className="input input-bordered max-w-xs"
            type="text"
            placeholder="Phone number"
          />
        </div>
        <input
          ref={address1}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Address 1"
        />
        <input
          ref={address2}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Address 2"
        />
        <input
          ref={city}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="City"
        />
        {<select
          name="states"
          id="select-state"
          ref={state}
          className="select select-bordered w-full max-w-xs"
        >
          {statesOptions.map((stateOption, index) => (
            <option key={index} value={stateOption}>
              {stateOption}
            </option>
          ))}
        </select>}
        <input
          ref={zip}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Zip or Postal code"
        />
        <select
          name="countries"
          id="select-country"
          ref={country}
          className="select select-bordered w-full max-w-xs"
        >
          {countryOptions.map((countryOption, index) => (
            <option key={index} value={countryOption}>
              {countryOption}
            </option>
          ))}
        </select>
        <button className="btn btn-outline mt-3" type="button">Save</button>
      </form>
    </div>
  );
};
