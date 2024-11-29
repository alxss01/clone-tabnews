test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  //Converte a data para o padrão IOS, evitando validação positiva para quando a data for null
  const parseUpdateAt = new Date(responseBody.update_at).toISOString();
  //Espera-se que a data convertida seja igual a data do response
  expect(responseBody.update_at).toEqual(parseUpdateAt);

  //Validações do banco de dados:
  //1.Versão do banco de dados
  expect(responseBody.dependencies.database.version).toEqual("16.0");
  //2. Verifica o máximo de conexões permitidas pelo banco de dados
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  // Verifica conexão abertas. O teste só irá abrir uma conexão, por conta disso espera-se que seja 1
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});

//Exemplo de SQL Injection, fazendo o banco de dados aguardar 4 segundos
// test.only("Test de SQL Injection", async () => {
//   await fetch(
//     "http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4); --",
//   );
// });
