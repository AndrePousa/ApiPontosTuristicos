### Projeto API-PontosTuristicos

##### Clone o projeto em sua maquina, na pasta de sua escolha.
Abra o Terminal, vá até a pasta onde irá clonar o projeto e digite:
- git clone (https://github.com/AndrePousa/ApiPontosTuristicos.git )

#### Entre na pasta  pontosturisticosfrontend:
Digite os comandos:

- npm install 

- npm start 

Procure o arquivo **config.js** na pasta **src**.

- Altere sua API_URL, se a sua porta for diferente da do arquivo. 

#### Entre na pasta APIPontosTuristicosBackend

- Encontre a **solution do projeto** e de dois cliques sobre ela, para que abra no visual studio.

- Vá até o arquivo **appsettings.json** e altere a **ConnectionStrings** para o seu servidor local. O banco de dados configurado é o **SqlServer**.

- Conecte e abra o banco de dados **SqlServer**. 

Vá até o **Menu** no visual studio =>  /Tools/Nuget Package Manager/Package Manager Console.

- Digite na linha de comando do Packege Manager Console:  

**update-database**

- Abra a classe **startup**, procure o metodo **Configure**. e verifique se o localhost do cors é o mesmo que da sua porta que roda o React. 
- configuração abaixo.
```csharp
 app.UseCors(options =>
            {
                options.WithOrigins("http://localhost:3000");
                options.AllowAnyMethod();
                options.AllowAnyHeader();
            });
			```
##### Rode o visual studio e a documentação do Swagger deve aparecer no navegador. 
- pronto, vá até o React e confira o projeto.
