CRIAÇÃO

* git clone <url>

Criar novo repositório local
* git init

MUDANÇAS LOCAIS

Observar arquivos alterados em seu diretório local
* git status

Mudanças em arquivos rastreados
* git diff

<<<<<<< HEAD
Adicione todas as mudanças atuais para o próximo commit
* git add .

Adicione algumas mudanças em <file> para o próximo commit
* git add . -p <file>

Confirmar todas as alterações locais em arquivos rastreados
* git commit -a

Confirmar todas as alterações previamente preparadas
* git commit -m <"commit info"

Mude o último commit
* git commit --amend

HISTÓRICO

Mostrar todos os commits, começando pelo mais novo
* git log

Mostrar mudanças ao longo do tempo para um arquivo específico
* git log -p <file>

Mostrar quem alterou o quê e quando em <file>
* git blame <file>

BRANCHES

Listar todos os ramos existentes
* git branch -av

Mudar ramo HEAD
* git checkout <branch>

Criar uma nova filial com base
* git checkout-track <remote/branch>

Deletar uma filiar local
* git branch -d <branch>

Marque o commit atual com uma tag
*git tag <tag-name>

ATUALIZAR & PUBLICAR

Lista todos os controles remotos configurados atualmente
* git remote -v

Mostrar informações sobre um controle remoto
* git remote show <remote>

Adicione um novo repositório remoto, denominado <remote>
* git remote add <shortname> <url>

Baixe todas as alterações de <remote>, mas não integre no HEAD
* git fetch <remote>

Baixe as alterações e marque/integre diretamente no HEAD
* git pull <remote> <branch>

Publique as alterações locais remotamente
* git push <remote> <branch>

Exclua uma filial no controle remoto
* git branch -dh <remote/branch>

Publique suas tags
* git push --tags

FUNDIR & REBASE

Funda <branch> em seu head atual
* git merge <branch>

Rebase seu HEAD atual em <branch>
* git rebase <branch>

Abortar um rebase
* git rebase --abort

Continue um rebase após resolver conflitos
* git rebase --continue

Use a ferramenta de fusão configurada do tour para resolver conflitos
* git mergetool

Use o editor de tour para resolver conflitos manualmente e (após resolver) marcar o arquivo como resolvido
* git add <resolved-file>
* git rm <resolved-file>

DESFAZER

Descarte todas as mudanças locais em seu diretório de Trabalhando
* git reset -hard HEAD

Descartar as alterações locais em um arquivo específico
* git checkout HEAD <file>

Reverter um commit (produzindo um novo commit com mudanças contrárias)
* git revert <commit>

Redefina o ponteiro HEAD para um commit anterior...e descarte todas as aterações desde então
* git reset -hard <commit>

...e preserva todas as mudanças como mudanças não planejadas
* git reset <commit>

...e preserva as mudanças locais não comprometidas
* git reset -keep <commit>