## Cat Shelter App

Gratulacje. Dostałeś swoje pierwsze zlecenie. Tworzysz aplikację dla schroniska pokazującą kotki do adopcji. Aplikacja ma pokazywać dane kotów przebywających w schronisku (płeć, wiek, imie, to czy kot lubi dzieci). Ma też umożliwiać wyszukanie kotka po imieniu, a także pokazywać które koty lubią mieszkać z małymi dziećmi. Schronisko ma przygotowaną baze danych. Po rozmowach z programistą bazy danych dowiedziałeś się że dane bazy będą przekazywane w następującym formacie:
```javascript   
[
 {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
 {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
 {category: "male", age: "2", likesKids: false, name: "Grumpy"},
 {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
 {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
 {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
];
```
Jest to tablica obiektów. Każdy obiekt ma pola category, age, likesKids i name. Co więcej ważną informacją jest fakt że dane zawsze będą posortowane czyli najpierw będą koty płci męskiej a potem kotki.

Grafik przekazał wam również projekt wyglądu aplikacji. Widzisz że aplikacja ma kilka funkcjonalności.
![](https://github.com/CodersLab/WAR_FRO_S_17_React_Workshop/blob/master/images/catApp.jpg)

1) Wyświetla dane o kotach z podziałem na płeć (w danych zaznaczoną jako category). Ponieważ ludzie są mniej chętni do adopcji kocurów, mają one być wyświetlone najpierw.
2) Koty, które nie mogą przebywać z małymi dziećmi są zaznaczone na czerwono
3) Można filtrować koty po tym czy mogą przebywać z małymi dziećmi
4) Można wyszukiwać kota po imieniu

