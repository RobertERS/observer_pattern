Skrypt tworzy jedną wspólną listę dla dwóch typów obiektów.
Efekt działania jest widoczny w konsoli i częściowo w dokumencie HTML (pola input i textarea).
Po wypełnieniu pola Subject i kliknięciu "Send" zmienia się wartość pól elementów html
oraz wartość message w powiązanym obiekcie.
 
[Demo aplikacji](http://eternes.pl/demo/observer/)

[Repozytorium na github](https://github.com/RobertERS/observer_pattern)

Język programowania: ES5

Wzorce projektowe:
- Module
- Revealing Module
- Interface
- Observer

Użyte techniki i właściwości JavaScript:
- Closure
- Prototype
- Context manipulation

Opis plików:
   - main.js - utworzenie obiektu MObserver.
   - observer.js - moduł MObserver oraz interfejs IObserver
   - dom.js - moduły tworzące uchwyty do elementów DOM
