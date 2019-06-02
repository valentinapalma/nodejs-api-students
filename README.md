# Inlämningsuppgift 1

# Table of Contents
* [Purpose](https://github.com/valentinapalma/Inlamningsuppgift-1/blob/master/README.md#purpose)
* [Del 1 - Teori](https://github.com/valentinapalma/Inlamningsuppgift-1/blob/master/README.md#del-1---teori)
* [1.1 Frågor och svar](https://github.com/valentinapalma/Inlamningsuppgift-1/blob/master/README.md#11-frågor-och-svar)
* [1.2 Feedback](https://github.com/valentinapalma/Inlamningsuppgift-1/blob/master/README.md#12-feedback)
* [Del 2 - Applikationen](https://github.com/valentinapalma/Inlamningsuppgift-1/blob/master/README.md#del-2---applikationen)
* [2.1 Hur man startar appen]()
* [2.2 Hur applikationen fungerar]()

# Purpose
Första inlämningsuppgiften i kursen **API:er mot Backend** där det finns en teoretisk del och en praktisk del.
I den här ```README.md``` filen skrivs den teoretiska delen, där det svaras på några frågor och även där det förklaras vad applikationen gör och hur man startar den. 

För den praktiska delen har jag skapat en backend för en ny läroplatform BongBong, det är skrivet i node/express och informationen sparas i en mongodatabas. API:et ska kunna hantera studenter. Mer detaljerad information hittar du i [Del 2](https://github.com/valentinapalma/Inlamningsuppgift-1/blob/master/README.md#applikationen) av dokumentet.

# Del 1 - Teori :pencil2:
Här svaras det på fyra frågor och det ges även feedback om kursen hittills.

## 1.1 Frågor och svar
* **Hur används HTTP-protokollet när du surfar in på en websida?**

* **Beskriv HTTP-protokollets vanligaste metoder och vad de gör.**

* **"http://localhost:3000/users" är ett URI, beskriv vilka delar den består av och vad de kallas.**

* **På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.**

## 1.2 Feedback


# Del 2 - Applikationen :computer:

## POST 
```
curl -i -X POST "localhost:2001/user" -H "Content-Type: application/json; charset=utf-8" -d '{"userId":"4", "name":"Laquanda", "username":"laquisha", "email":"guppy@email.com", "address":{"street":"Django", "city":"Cocalcola", "zipcode":"32323"}}'
```

Okej
