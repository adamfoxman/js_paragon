# Paragon.app

Mały projekt zaliczeniowy z przedmiotu "Programowanie aplikacji w JavaScript".

## Treść zadania

Należy stworzyć prostą aplikację pozwalającą na wprowadzenie danych pojedynczego paragonu (przykładowy wygląd przedstawiono na grafice poniżej). Powinna ona pozwalać na (liczba w nawiasach oznacza punktację):

- wprowadzanie nowych pozycji paragonu (+1),
- edycję istniejących pozycji (+1),
- usuwanie ich (+1),
- zmianę kolejności (+1).

Interfejsowo możecie rozwiązać to w dowolnie wybrany sposób. Zadbajcie jednak o sprawdzanie poprawności wprowadzanych danych oraz przeliczanie sumy. Zawartość listy przechowujcie w local storage (+1).

To zadanie należy rozwiązać opierając się wyłącznie na Plain JavaScript.

Zalecane podejście: przechowujcie reprezentację paragonu w postaci tablicy obiektów, a dopiero na tej podstawie budujcie dokument. Manipulacja pozycjami powoduje zarówno aktualizację przechowywanego w pamięci modelu, jak i modyfikację widoku (fragmentu dokumentu).
