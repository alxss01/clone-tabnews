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
