# Advento kalendorius su React.js
## Tikslas:
Sukurti interaktyvų ir estetišką Advento kalendorių, skirtą kompiuteriui, telefonui ir planšetei, dirbant komandoje ir laikantis geros praktikos principų.

## Reikalavimai projektui:
1. Kalendoriaus sąsaja:
    - Kalendoriuje turi būti 24 langeliai, reprezentuojantys gruodžio mėnesio dienas (1–24).
    - Dizainas jau yra pateiktas – naudokite jį kaip pagrindą (pritaikykite naudodami CSS arba UI biblioteką).

2. Patarimų sistema:
    - Paspaudus dabartinės ar ankstesnės dienos langelį, turi būti parodytas tos dienos patarimas JS programuotojui.
    - Paspaudus būsimos dienos langelį, turi būti rodomas pranešimas, kad prieiga draudžiama.
    - Duomenys apie jau atidarytus langelius turi būti saugomi naudojant localStorage.

3. Valstybės valdymas:
    - Naudokite Context API arba Redux valstybei valdyti.
    - Implementuokite Reducer logiką, pvz., dienų atidarymo būsenai tvarkyti.

4. Duomenų saugojimas:
    - Patarimus galite saugoti:
        - Lokaliai kaip JSON failą arba objektą.
        - LocalStorage (pvz., { "openedDays": [1, 2, 3] }).

5. Responsyvus dizainas:
    - Kalendorius turi veikti tiek kompiuteryje, tiek mobiliajame įrenginyje ar planšetėje.
    - Užtikrinkite, kad UI elementai būtų aiškiai matomi ir lengvai naudojami.

### Techniniai reikalavimai
- React.js: projekto pagrindas.
- State Management: Context API su Reducer.
- CSS/SASS/Styled Components: dizaino pritaikymui.
- localStorage: duomenų saugojimui.

## Grupės nariai:
1. Mantas Sinkevičius - css stilius
2. Kornelijus Katinas - kalendoriaus kortos
3. Adrijus Čiurinskas - localStorage, patarimai
4. Paulius Šefleris - github repozitorijos valdimas, state management

## Paleista puslapi galima rasti čia
[Advento kalendoriaus puslapis](https://shefleris.github.io/241209-group/)


#### Jeigu neveikia galite localhost:
Reikalingos programos:
- git
- npm (node package manager)

#### Žingsniai:
- git clone https://github.com/Shefleris/241209-group.git
- npm install
- npx vite