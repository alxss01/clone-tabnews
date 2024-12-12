# Listar versões atuais disponíveis do node:

    nvm ls

# Instalar versão lst:

    nvm install lts/iron

# Definir versão default (para não ficar mudando)

    nvm -h:
        nvm alias default 8.1.0 et default node version on a shell
    nvm alias default lts/iron

# Deixar a versão default configurada no arquivo .nvmrc

# Iniciar projeto

    npm init

# Protocolos

É um acordo, um combinado entre as duas partes, seguindo regras para comunicação.

HTTP (Hypertext Transfer Protocol): Protocolo que define regras para transferência de documentos.

FTP (File Transfer Protocol): Dedicado para transferência de arquivos

SMTP (Simple Mail Transfer Protocol): Usado para transferência de mensagem de e-mail.

TCP (): Possui regras para que não haja perda de pacotes.

UDP: Usado em frames de jogos

Os protocolos podem ser empilhados:
HTTP:
TCP:
IP

# Atalhos para limpar o terminal:

    ctrl + L

# Rotas públicas

    npm install next
    npm install react
    npm install react-dom
    Todos os arquivos criados em page/.. tornam-se rotas publicas.
    Ex: pages/index.js -> site.com/index.js

# Comando para executar o serviço:

    npm run dev (lembrando que precisa configurar o package.json: dev: next dev)

# Emendar commit:

    Ou seja, emendar um commit com esse que está em staged
    git commit --amend
    git log -> comprova que não foi adicionado mais um commit, mas sim reaproveitado
    O push será necessário usar --force

    ***commits são imultáveis***

# Dia 8

## Organização de Terefas

Fazer muito com pouco e não pouco com muito.

Trabalhar POUCO e ganhar MUITO.
Planejar muito, executa pouco.
Planejar pouco, executa muito.
** Precisa de Equilíbrio **
Níveis de organização de tarefas... Do mais simples ao mais sofisticado... Entender o contexto,
Nivel 1: Lembrar do que precisa ser feito de forma simples. (Anotar tarefas no papel) - add progresso (check)
Nível 2: Lembrar do que precisa ser feito em grupo. (Lembretes do que precisa ser feito na geladeira) - add progresso (check)
Nível 3: Expandir conhecimento. Sistema. Ex: issues no GitHub.
Nível 4: Métricas com base no estabelecido no nível 3. Quantas tarefas? Prontas? Pendentes? %?

# Dia 10

1. Criar Milestones https://github.com/alxss01/clone-tabnews/milestones
2. Criar issues e vincular ao Milestones: https://github.com/alxss01/clone-tabnews/issues
3. Editar issue, adicionando tasks: https://github.com/alxss01/clone-tabnews/issues/2
   1. - [] Ligar sincronização do Editor.

# Dia 11

DNS - Domain Name System (Sistema de Nomes de Domínios)
DNS: "São apelidos para os IP's"
DNS: Converte domínios google.com.br no respectivo IP, onde está o servidor.
Cada ponto de conexão possui um IP único. Como se fosse endereço e número.
Computadores só se conectam por IP!
Exemplo:

![alt text](../images/image.png)

Processo de resolução de DNS
![alt text](../images/image-1.png)

Ou seja, conseguimos acessar um site diretamente pelo IP.

## Registrar domínio .com.br:

![alt text](../images/image-2.png)

registrar:
registro.br

# Dia 13

Status page dos serviços.
Serve para verificar quando determinado serviço está indisponível e também o SLA de normalidade, incidentes, etc. Para tanto, basta pesquisar o serviço da seguinte maneira:

vercel status (https://www.vercel-status.com/)
google maps status (https://status.cloud.google.com/maps-platform/)
aws lambda status
aws s3 status

\*Lembrado que um serviço com problema pode afetar vários outros, como no caso da aws.

# Dia 14

Leiutra recomendada:
Issue: Proposta de arquitetura do tabnews: https://github.com/filipedeschamps/tabnews.com.br/issues/12

App para criação de estrutura de pastas: https://ascii-tree-generator.com/

# Dia 15

1. Instalar o Jest: npm install -D jest@29.6.2
2. Criar script Jest no package.json: "test": "jest"
3. Criar script Jest Whach no package.json: "test:watch": "jest --watch"

# Dia 16

A conveção do .next diz que ao criar uma pasta api dentro da pasta page, automaticamente o conteúdo de api já se torna uma rota pública.

### Promise

Promise: promessa de valor futuro.

# Dia 18

### Configurar compose database com postgres

- Executar comando: docker compose -f infra/compose.yaml up

### instalar client do postgres:

- sudo apt update
- sudo apt install postgresql-client

### Conectar no banco de dados usando linha de comando client psql

- psql --host=localhost --username=postgres --port=5432

# Renomear arquivo usando git

- git mv .env .env.development

# Corrigir push de dados sensíveis no repositório remoto

- Usar git filter
  https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository

# BFG para corrigir vazamento de dados sensíveis no repositório

1 - Baixei o arquivo .jar do BFG Repo-Cleaner do repositório e coloquei na mesma pasta que clonarei o projeto.

2 - Clonei meu repositório com o --mirror:
git clone --mirror git://example.com/repo_problematico.git

3 - Apaguei os arquivos com os comandos:
java -jar bfg-1.14.0.jar --delete-files cred.json repo_problematico.git
e
java -jar bfg-1.14.0.jar --delete-files .env repo_problematico.git

4 - entrar na pasta do repositório problemático:
cd repo_problematico.git

5 - Rodar os comandos conforme a documentação do BFG:
git reflog expire --expire=now --all && git gc --prune=now --aggressive

6 - git push

# Configurar caminho realtivo

- NodeJS não tem por padrão uma forma de import dos arquivos, logo precisamos definir exatamente o caminho do import, por exemplo ../../../infra/database.js
- Por tanto, iremos utilizar um arquivo chamado jsconfig.json para deixar essa configuração transparente e declarar o import dessa maneira infra/database.js

# Dia 21

### Banco de dados remoto

- https://supabase.com/ - Login via GitHub
- https://console.neon.tech/ - Login via GitHub
- https://cloud.digitalocean.com/databases - Usuário: alexdesouza94@gmail.com Pass: \*\*\*

### Variável de ambiente da Vercel

- Ajustar variável de ambiente para apontar para o banco de dados remoto
