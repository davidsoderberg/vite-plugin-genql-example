import { useEffect, useState } from 'react';
import { generateQueryOp } from './client';

type Language = {
  code: string;
  name: string;
};

function App() {
  const [load, setLoad] = useState(false);
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    setLoad(true);
    fetch('https://countries.trevorblades.com/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        generateQueryOp({
          languages: {
            code: true,
            name: true,
          },
        })
      ),
    })
      .then((response) => response.json())
      .then(
        (data: {
          data: {
            languages: Language[];
          };
        }) => {
          setLanguages(data.data.languages);
          setLoad(false);
        }
      );
  }, []);

  if (load) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {languages.map((language) => (
        <li key={language.code}>{language.name}</li>
      ))}
    </ul>
  );
}

export default App;
