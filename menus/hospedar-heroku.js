const hospedar = (prefix) => {
return `

[ OBS: ANTES DE FAZER ISSO, VOCÊ DEVE FAZER OS PROCEDIMENTOS DE CONFIGURAÇÃO DO BOT ]

Como enviar o bot para o heroku. 

Resumindo: O heroku é um site de hospedagem de site e também de arquivos nodejs e tantos outros procedimentos de banco de dados... 


- 1 Passo 


Você deve se cadastrar no heroku, através do link:

https://signup.heroku.com/login

Escolha linguagem nodejs, o resto coloque o que quiser, mas não deve esquecer, pra poder acessar novamente depois. 


- 2 Passo


Após cadastrar, aceite os termos abaixo e etc.., depois clique em Create New App

Foto do passo a passo > https://telegra.ph/file/e01ca1ba4551cc0bb6ce1.jpg

Depois, escolha um nome pra seu app, deve ser menusculo, salve esse nome, pois vai utilizar ele, lembre dele. 


- 3 Passo 

Agora após ter criado o app, clique naquela engrenagem pequena, no lado direito, na parte superior. 

Passo a passo foto: https://telegra.ph/file/8dca23e7115e31b0b2f16.jpg

Após ter acessado a engrenagem, desça pra baixo até encontrar o nome Add Build Pack e clique, siga o passo a passo de fotos. 


1 > https://telegra.ph/file/2e6a64cf40941b30ab040.jpg

2 > Adicione os seguintes links lá, copie 1 por 1 : 



- Primeiro 

https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git


- Segundo 

https://github.com/clhuang/heroku-buildpack-webp-binaries.git


não pode deixar nem 1 espaço, senão não vai funcionar clicando no save changes.

Foto do passo: https://telegra.ph/file/97d062bcf71151ceec02a.jpg


Depois vá para o termux e digite ou cole isso. 

npm i -g npm@6 && npm i heroku -g


Depois isso >


heroku login -i


Cole o e-mail do heroku, aperte enter, depois coloque a senha e dê enter.. 

> 1 Categoria >

cd /sdcard/aleatory-md

> 2 Categoria >

rm -rf .git

> 2.1 Categoria >

git config --global user.email "blablablabla@gmail.com" 

git config --global user.name "blabla" 

Cole os 2 no termux, não precisa editar nada.

> 3 Categoria >

git init 


> 4 Categoria 

heroku git:remote -a nomedoapp


Em nome do app você deve colocar o nome do new app que você criou lá no site.


> 5 Categoria >

git add . 


Vai demorar um pouco 

> 6 Categoria >

git commit -am "blabla"


> 7 Categoria >

git push heroku master 




Pronto, agora conectou ao heroku. 

Retorne ao site:

heroku.com

e clique na segunda opção que se localiza embaixo do botão open app:

Print: https://telegra.ph/file/e81e144b82f976be3ea99.jpg

Você vai clicar nesse botão, vai aparecer um botão lá, clique no lápis, aperte na opção de ligar, depois confirme, caso queira desligar, só fazer o contrário, depois disso não será necessário ligar mais no termux, mas não desinstale o termux de jeito nenhum, apenas aperte exit nele nas notificações, e force parada, caso queira.


(Como Atualizar algo que editei no bot, para o heroku??:
atualizar como assim aleatory? : exemplo> se você quer ativar alguma função do grupo, você deve desligar o botão no heroku, depois ir no termux, ligar o bot lá, esperar atualizar as credenciais, demora um pouco, caso demore muito, apague o "baileys_store_multi.json", e ligue novamente, pra desligar e ligar, apenas segure o volume de menos do celular e aperta a letra C do teclado. 

Caso continue bugando apague o qrcode "auth_info_multi.json", que se localizara dentro da pasta do bot que se chama aleatory-md, que está  dentro do armazenamento do seu celular, se quiser apagar por comando só digitar isso no termux e dá enter:  rm auth_info_multi.json  e   rm baileys_store.json  ,bom agora o resto é com vocês, vamos pra próxima parte.).then(res => {
  
  
 - 1 Passo >
 
 Abra o termux :
 
 cole issso:
 
 heroku login -i 
 
 
 Conecte o e-mail, e senha, igual antes. 
 
 
 Cole esse comando lá :
 
 
 cd /sdcard/aleatory-md 


 Depois :
 
 sh heroku.sh
})

`
}

exports.hospedar = hospedar
