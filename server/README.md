# 🐾 API do adopte.me

## 🛣 Rotas

As rotas presentes na aplicação serão descritas abaixo:

### 🚏 `/pets`

<ul>
  <li>
    <strong>POST</strong>: rota responsável por cadastrar um novo pet no banco de dados. Recebe um <b>multipart</b> como corpo.
    Exemplo de execução:</br>
    <pre>
    <code>
    { 
      "name": string,
      "description": string,
      "breed": string,
      "genre": integer,
      "age": float,
      "photo": file,
      "specialCares": boolean,
      "castrated": boolean,
      "dewormed": boolean,
      "specie": integer,
      "ong": string,
    }
    </code>
    </pre>
    <blockquote>Algumas observações: <code>genre</code> é um inteiro, onde 1 é <code>male</code> e 2 é <code>female</code>, <code>specie</code> é um inteiro que representa o id da espécie no banco de dados e <code>ong</code> por enquanto é apenas uma string por não existir esta parte implementada ainda.</blockquote>
    <details>
      <summary>Retorno</summary>
      <pre>
      <code>
        {
          "id": integer,
          "name": string,
          "description": string,
          "breed": string,
          "genre": integer,
          "age": float,
          "photo_name": string,
          "special_cares": boolean,
          "castrated": boolean,
          "dewormed": boolean,
          "specie_id": integer,
          "ong": string
        }
      </code>
      </pre>
    </details>
  </li>
  <li>
    <strong>GET</strong>: esta rota retorna todos os pets cadastrados para adoção.
    <details>
      <summary>Retorno</summary>
      <pre>
      <code>
        [
          {
            "id": integer,
            "name": string,
            "description": string,
            "breed": stirng,
            "genre": integer,
            "age": float,
            "photo_name": string,
            "special_cares": boolean,
            "castrated": boolean,
            "dewormed": boolean,
            "ong": string
          }
        ]
      </code>
      </pre>
    </details>
  </li>
</ul>

### 🚏 `/pets/:id`

<ul>
  <li>
    <strong>GET</strong>: esta rota retorna o pet com o id passado como parâmetro.
    <details>
      <summary>Retorno</summary>
      <pre>
      <code>
        {
          "id": integer,
          "name": string,
          "description": string,
          "breed": stirng,
          "genre": integer,
          "age": float,
          "photo_name": string,
          "special_cares": boolean,
          "castrated": boolean,
          "dewormed": boolean,
          "ong": string
        }
      </code>
      </pre>
    </details>
  </li>
</ul>

### 🚏 `/species`

<ul>
  <li>
    <strong>GET</strong>: esta rota retorna todos as espécies cadastradas no banco de dados.
    <details>
      <summary>Retorno</summary>
      <pre>
      <code>
        [
          {
            "id": integer,
            "specie": string
          }
        ]
      </code>
      </pre>
    </details>
  </li>
</ul>
