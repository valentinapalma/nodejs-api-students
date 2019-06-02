# Inlämningsuppgift 1

# Table of Contents
* [Purpose](https://github.com/valentinapalma/API-Uppgift-1/blob/master/README.md#purpose)
* [1 - Teori](https://github.com/valentinapalma/API-Uppgift-1/blob/master/README.md#del-1---teori)
* [1.1 Frågor och svar](https://github.com/valentinapalma/API-Uppgift-1/blob/master/README.md#11-frågor-och-svar)
* [1.2 Feedback](https://github.com/valentinapalma/API-Uppgift-1/blob/master/README.md#12-feedback)
* [2 - Applikationen](https://github.com/valentinapalma/API-Uppgift-1/blob/master/README.md#del-2---applikationen)
* [2.1 Hur man startar appen](https://github.com/valentinapalma/API-Uppgift-1/blob/master/README.md#21-hur-man-startar-applikationen)
* [2.2 Hur applikationen fungerar](https://github.com/valentinapalma/API-Uppgift-1/blob/master/README.md#22-hur-applikationen-fungerar)

# Purpose
Första inlämningsuppgiften i kursen **API:er mot Backend** där det finns en teoretisk del och en praktisk del.
I den här ```README.md``` filen skrivs den teoretiska delen, där det svaras på några frågor teoretiska frågor och där jag även ger feedback på kursen hittills.

För den praktiska delen har jag skapat en backend för en ny läroplatform som heter BongBong. I den här delen förklarar jag hur man startar upp applikationen och även hur man kan använda den. Applikationen är skriven i nodejs/express och informationen lagras i mongoDB, som är en databas. API:et hanterar studenter och deras information på olika sätt.

-----

# Del 1 - Teori :pencil2:
Här svaras det på fyra frågor och det ges även feedback på kursen längre ner.

## 1.1 Frågor och svar
**1. Hur används HTTP-protokollet när du surfar in på en websida? Till exempel http://www.smp.se/kultur-noje**

I exemplet används metod, path, URI, response code och body. Mer specifikt kommer här nedan;

metod: ```GET```

path: ```/kultur-noje```

URI: ```http://www.smp.se/kultur-noje```

Response code: ```200 OK```

Body: ```HTML, innehållet i hemsidan```



**2. Beskriv HTTP-protokollets vanligaste metoder och vad de gör.**

```GET``` - Hämtar information från en databas, beroende på vad det är för förfrågan så kan den hämta ut specifik data. 

```POST``` - Sänder information till servern som i sin tur uppdaterar i databasen. Till exempel lägga till en ny användare.

```PUT``` - Ersätter information som man tidigare skickat, till exempel ändra en address eller e-postaddress.

```DELETE``` - Raderar information från databasen.



**3. "http://localhost:3000/users" är ett URI, beskriv vilka delar den består av och vad de kallas.**

URI står för Uniform Resource Identifier och innehåller följande delar:
```scheme:[//authority/]path[/?query][#fragment]```

I exemplet med localhost, så har den följande delar:

```scheme``` = http:

```authority``` = //localhost:3000

```path``` = /users

Om query hade funnits med hade URI:et kunnat se ut som följande: http://localhost:3000/users?username=random,
då hade ``` ?username=random ``` varit queryn.


**4. På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.**

Path parameter: ``` curl -i -X GET "locahost:2000/students" ```

Query parameter: ``` curl -i -X GET "localhost:2000/students?name=hildr ```

Head parameter: ``` curl -i -X GET "localhost:2000/students" -H "key":"value" ```

## 1.2 Feedback
**Kursens takt**
I början av kursen tyckte jag att det gick lite för fort och det var svårt att hänga med och förstå. Efter tiden så började jag förstå mer för jag gjorde exempel övningarna, och de var bygda steg för steg. Takten under första veckan var väldigt snabb, men den andra och tredje veckan (när vi haft den här inlämningsuppgiften) har det gått bättre. Jag tycker om när vi får jobba med inlämningsuppgiften medan vi lär oss.

**Kursmaterial**
Det är första kursen där vi har kursböcker, och jag tycker att det är ett bra alternativ om man vill lära sig saker mer djupgående och förstå. Det är viktigt tror jag att det finns alternativa källor för information än bara föreläsningarna, då det blir större chans för alla att förstå.

**Format**
Jag tycker att det har varit bra att det varit så praktiskt, då jag tycker att man lär sig bäst när man får göra. Learn by doing. Men teori är ändå viktigt då det hjälper en att förstå lite mer vad det är man håller på med. Jag skulle önska att du gick igenom sakerna lite mer. Till exempel de här övningsuppgifterna som finns på github, de var jättebra för de var indelade i steg och det gjorde att man fick göra lite i taget och förstå uppbyggnaden, men jag tror att det hade kunnat vara ännu bättre om du gick igenom de här stegen en och en, och att vi alla bearbetade av stegen tillsammans. Att du till exempel gick igenom *1. SimplestExpress* tillsammans med alla i klassen och så får alla jobba med den. Nästa gång går du igenom *2. routes* och alla jobbar tillsammans med steg två, osv. Det här gör att alla i klassen kommer i samma tempo och att saker förklaras på ett tydligare sätt för allihopa. Inlämningsuppgiften var bra då den relaterar till det vi gått igenom. Jag skulle kanske önska lite mer om hur man på bästa sätt använder API/backend i Frontend också.

Hur som helst så tycker jag att kursen är rolig och lärorik. 

-----

# Del 2 - Applikationen :computer:
Den här applikationen är ett simpelt API skapat för en ny läroplattfrom som heter BongBong. Här ska man kunna hantera studenter.

## 2.1 Hur man startar applikationen

1. Clone eller Download det här gitrepot till din dator.
2. Gå in i mappen och öppna ``` Git Bash ```.
3. Skriv ``` npm i ``` i konsolen för att installera alla dependencies som behövs för att applikationen ska fungera.
4. Skriv ``` npm run dev ``` för att få upp API:et i webbläsare med en localhost. Det kommer att bli localhost:2000 om du inte anger en egen port. För att ange en egen port, skriv t.ex. ``` PORT=4000 npm run dev ``` i konsolen.
5. Nu är applikationen igång! Gå in på ``` http://localhost:2000/students ``` i din webbläsare.
6. För att använda applikationen, öppna upp en till ``` Git Bash ``` ruta och skriv in följande kommandon. 

## 2.2 Hur applikationen fungerar
Här listas olika metoder som man kan använda för det här API:et.

### GET 
Listar alla studenter som en array.
```
curl -i -X GET "localhost:2000/students"
```
Expected response code: ``` 200 OK ```

### GET specific user
Här finns det två alternativ, ett där du kan hämta en specifik användare baserat på det unika id:et du skickar med, och det andra genom en query parameter där du skickar in ett valt namn.

``` 
curl -i -X GET "localhost:2000/students/5cf14e37e8037b2040e95b76"
```
```
curl -i -X GET "localhost:2000/students/?name=Hildr"
```
Expected response code: ``` 200 OK ```

### POST 
För att lägga till en ny student i listan, skriv följande curl kod i konsolen:

```
curl -i -X POST "localhost:2000/students" -H "Content-Type: application/json; charset=utf-8" -d '{"name":"Magne", "email":"magne@email.com", "address":{"street":"Idavallen", "city":"Asgaard", "zipcode":"88888"}}'
```
Expected response code: ``` 201 Created ```

### PUT
Använd den här metoden för att ersätta viss, eller all, information hos en användare. Skriv in id:et som parameter från den student du vill ändra något hos. Även om du bara vill ändra en enskild egenskap, så måste alla egenskaper skrivas med. Se följande kod:

```
curl -i -X PUT "localhost:2000/students/5cf3cf9d9914171548385949" -H "Content-Type: application/json; charset=utf-8" -d '{"name":"NyttNamn", "email":"magne@email.com", "address":{"street":"Idavallen", "city":"Asgaard", "zipcode":"88888"}}'
```
Expected response: ``` 200 OK ```

Du kan även få följande response codes:

``` 201 Created ``` - Om du skapar nytt

``` 204 No Content ``` - Om inget uppdaterats

### DELETE
Om du vill ta bort en student, så skriv id:et i parametern på den valda studenten som du vill ta bort.

```
curl -i -X DELETE "localhost:2000/students/idOfYourChoice"
```
Expected response code: ``` 200 OK ``` 

