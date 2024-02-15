import { useRef } from 'react';

export const PersonalInfoSelects = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const address1 = useRef<HTMLInputElement>(null);
  const address2 = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLSelectElement>(null);
  const zip = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLSelectElement>(null);

  const countryOptions = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];

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

  return (
    <div className='ml-6'>
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          firstName.current!.value = 'Naruto';
          lastName.current!.value = 'Uzumaki';
          email.current!.value = 'naruto.uzumaki@gmail.com';
          phoneNumber.current!.value = '+817046679531';
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
          phoneNumber.current!.value = '+14722377744';
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
          phoneNumber.current!.value = '+4759884549';
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
        <input
          ref={phoneNumber}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Phone number"
        />
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
