# spezi_app

Mini projeto para vaga da Spezi

## Versões
- Ruby: 2.7.2
- Rails: 6.1.0
- React: 16.13.1
- React Native: 0.63.4

## Passos para inicializar o Rails
 1. Ir para a pasta spezi_app_back
~~~
cd spezi_app_back
~~~
 2. Instalar versao correta do ruby
 ~~~
rvm install 2.7.2
rvm use 2.7.2
~~~
 3. Instalar gemas
  ~~~
bundle install
~~~
 4. Buildar Database
~~~
rails db:create db:migrate db:seed
~~~
OBS.: db:seed é crucial para criação das roles e usuário admin

5. Iniciar server
 ~~~
rails server -b 0.0.0.0
~~~

## Passos para inicializar o React Native

OBS.: O app só foi configurado e testado em plataforma Android

 1. Ir para a pasta spezi_app_mobile
~~~
cd spezi_app_mobile
~~~
 2. Instalando dependências
~~~
yarn install
~~~
 3. Modificando url do servidor do back
 
 Como o projeto ainda está em ambiente de desenvolvimento, é necessário mudar algumas variáveis hardcodes.
 
 Primeiro deve se abrir o arquivo api.js, localizado em spezi_app_mobile > src > services > api.js.
 Onde tem-se `'http://192.168.0.5:3000'` deve ser trocado para o ipv4 da maquina que está rodando,
 ou seja, vai ficar `'http://SEU_IP:3000'`. Mais informações em https://reactnative.dev/docs/running-on-device
 
 No Ubuntu, para achar esse valor é só rodar `hostname -I | awk '{print $1}'`

 4. Instalando App em Android
  ~~~
react-native run-android
~~~
 5. Executando App
~~~
yarn start ou react-native start
~~~

## Testando app com Usuário Admin

Na maioria dos sistemas, um admin não pode se cadastrar via cadastro comum.
Nesse projeto, o admin foi criado no `seed.rb` do projeto rails. Sua conta é:

email: admin@gmail.com  

senha: 123456
