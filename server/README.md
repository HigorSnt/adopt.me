# 🐾 API do adopte.me

## 🛣 Rotas

> ❗ Duas rotas necessitam de autenticação. São elas:
>
> - `/ongs`, no método GET
> - `/pets`, no método POST

As rotas presentes na aplicação serão descritas abaixo:

### 🚏 `/ongs`

<ul>
  <li>
    <strong>POST</strong>: rota responsável por cadastrar uma nova ONG no banco de dados.
    Exemplo de execução:</br>
    <pre>
    <code>
    {
      "cnpj": string,
      "email": string,
      "name": string,
      "address": string,
      "whatsapp": string,
      "phone": string,
      "password": string
    }
    </code>
    </pre>
    <details>
      <summary>Retorno</summary>
      <pre>
      <code>
      {
        "cnpj": string,
        "name": string,
        "email": string,
        "address": string,
        "whatsapp": string,
        "phone": string
      }
      </code>
      </pre>
    </details>
  </li>
  <li>
    <strong>GET</strong>: rota que retorna todos os animais cadastrados pela ONG.
    <blockquote>🛑 Para acesso a rota é necessário ter realizado o login e adquirido um token.</blockquote>
    <details>
      <summary>Retorno</summary>
      <pre>
      <code>
      [
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
          "ong_cnpj": string
        }
      ]
      </code>
      </pre>
    </details>
  </li>
</ul>

### 🚏 `/ongs/:cnpj`

<ul>
  <li>
    <strong>GET</strong>: esta rota retorna uma ong que possui o CNPJ passado como parâmetro.
    <details>
      <summary>Retorno</summary>
      <pre>
      <code>
        {
          "cnpj": string,
          "name": string,
          "email": string,
          "whatsapp": string,
          "phone": string,
          "address": string
        }
      </code>
      </pre>
    </details>
  </li>
</ul>

### 🚏 `/login`

<ul>
  <li>
    <strong>POST</strong>: esta rota é a responsável por realizar o login.
    <pre>
    <code>
      {
        "email": string,
        "password": string
      }
    </code>
    </pre>
    <blockquote>⚠️ O token jwt não possui validade por opção, já que é apenas uma aplicação teste e não possui dados reais e sensíveis transitando.</blockquote>
    <details>
      <summary>Retorno</summary>
      <pre>
      <code>
        {
          "token": string
        }
      </code>
      </pre>
    </details>
  </li>
</ul>

### 🚏 `/pets`

<ul>
  <li>
    <strong>POST</strong>: rota responsável por cadastrar um novo pet no banco de dados. Recebe um <b>multipart</b> como corpo.
    <blockquote>🛑 Para acesso a rota é necessário ter realizado o login e adquirido um token.</blockquote>
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
    }
    </code>
    </pre>
    <blockquote>⚠️ Algumas observações: <code>genre</code> é um inteiro, onde 1 é <code>male</code> e 2 é <code>female</code>, <code>specie</code> é um inteiro que representa o id da espécie no banco de dados e a conexão do pet cadastrado com a ONG que está cadastrando é feita automaticamente, graças ao token jwt.</blockquote>
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
          "ong_cnpj": string
        }
      </code>
      </pre>
    </details>
  </li>
  <li>
    <strong>GET</strong>: esta rota retorna todos os pets cadastrados para adoção. Além disso, caso seja passado <i>query parameters</i> serão retornados apenas os pets resultantes da filtragem. Quanto à filtragem, é possível ser feita passando os seguintes parâmetros <code>/pets?age=3&specie=1&uf=PB</code>, todos opcionais.
    <details>
      <summary>Retorno</summary>
      <pre>
      <code>
        [
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
            "ong": {
              "name": string,
              "email": string,
              "cnpj": string,
              "address": string,
              "whatsapp": string,
              "phone": string
            }
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
          "ong_cnpj": string
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
