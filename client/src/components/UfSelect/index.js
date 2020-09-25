import React from 'react';

import './styles.css';

function UfSelect({ uf, setUf }) {
  const ufs = [
    { id: 12, name: 'Acre', acronym: 'AC' },
    { id: 27, name: 'Alagoas', acronym: 'AL' },
    { id: 16, name: 'Amapá', acronym: 'AP' },
    { id: 13, name: 'Amazonas', acronym: 'AM' },
    { id: 29, name: 'Bahia', acronym: 'BA' },
    { id: 23, name: 'Ceará', acronym: 'CE' },
    { id: 53, name: 'Distrito Federal', acronym: 'DF' },
    { id: 32, name: 'Espírito Santo', acronym: 'ES' },
    { id: 52, name: 'Goiás', acronym: 'GO' },
    { id: 21, name: 'Maranhão', acronym: 'MA' },
    { id: 51, name: 'Mato Grosso', acronym: 'MT' },
    { id: 50, name: 'Mato Grosso do Sul', acronym: 'MS' },
    { id: 31, name: 'Minas Gerais', acronym: 'MG' },
    { id: 41, name: 'Paraná', acronym: 'PR' },
    { id: 25, name: 'Paraíba', acronym: 'PB' },
    { id: 15, name: 'Pará', acronym: 'PA' },
    { id: 26, name: 'Pernambuco', acronym: 'PE' },
    { id: 22, name: 'Piauí', acronym: 'PI' },
    { id: 24, name: 'Rio Grande do Norte', acronym: 'RN' },
    { id: 43, name: 'Rio Grande do Sul', acronym: 'RS' },
    { id: 33, name: 'Rio de Janeiro', acronym: 'RJ' },
    { id: 11, name: 'Rondônia', acronym: 'RO' },
    { id: 14, name: 'Roraima', acronym: 'RR' },
    { id: 42, name: 'Santa Catarina', acronym: 'SC' },
    { id: 28, name: 'Sergipe', acronym: 'SE' },
    { id: 35, name: 'São Paulo', acronym: 'SP' },
    { id: 17, name: 'Tocantins', acronym: 'TO' },
  ];

  function handleUf(event) {
    setUf(event.target.value);
  }

  return (
    <div className="location-select">
      <select onChange={handleUf} value={uf} id="location" name="estado">
        <option value="D" defaultValue hidden>
          Selecione...
        </option>
        {ufs.map((uf) => {
          return (
            <option key={uf.id} value={uf.acronym}>
              {uf.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default UfSelect;
