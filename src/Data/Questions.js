const Questions = [
  {
    questionText:
      "Vilka får använda ett kollektivkörfält beläget till höger i färdriktningen?",
    options: [
      ["A. Endast kollektivtrafik.", 0],
      ["B. Kollektivtrafik, cyklister samt förare av moped klass II.", 1],
      ["C. Alla fordon som kan transportera minst 8 personer.", 0],
      ["D. Kollektivtrafik samt förare av moped klass I.", 0],
    ],
  },

  {
    questionText:
      "Har du anledning att misstänka att något är fel om bromspedalen sjunker långsamt under hårt tryck?",
    options: [
      ["A. Nej, det är normalt.", 0],
      ["B. Ja, att det finns en läcka i bromssystemet.", 1],
      ["C. Ja, att ABS inte fungerar.", 0],
      ["D. Ja, att bromsskivorna är slitna.", 0],
    ],
  },

  {
    questionText: "Hur fort får en personbil som bogserar en annan personbil max åka?",
    options: [
      ["A. 30 km/h.", 1],
      ["B. 50 km/h.", 0],
      ["C. 70 km/h.", 0],
      ["D. 90 km/h.", 0],
    ],
  },

  {
    questionText: "Hur bör du bete dig när du korsar en järnväg där sikten är delvis skymd?",
    options: [
      ["A. Köra som vanligt eftersom det finns varningssignaler som meddelar om ett tåg kommer.", 0],
      ["B. Sakta in, kolla åt båda hållen, växla ner och sedan köra över snabbt.", 1],
      ["C. Sakta in, kolla åt båda hållen och sedan köra över långsamt.", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Vilket påstående är sant om gasen koldioxid?",
    options: [
      ["A. Koldioxid är en onaturlig gas som endast bildas vid förbränning av fossila bränslen.", 0],
      ["B. Koldioxid bidrar till växthuseffekten.", 1],
      ["C. Koldioxid var ett stort problem förr i tiden, men katalysatorerna i nya bilar filtrerar bort all koldioxid.", 0],
      ["D. Koldioxid är det enda en välfungerande katalysator släpper ut.", 0],
    ],
  },

  {
    questionText: "Vilket alternativ är sant vid vinterväglag?",
    options: [
      ["A. Om bilen har dubbdäck ska släpvagnen, oavsett typ, ha dubbdäck. Detta för att motverka fällknivsverkan.", 1],
      ["B. Om bilen har dubbdäck ska en tillkopplad bromsad släpvagn ha dubbdäck. Obromsade släpvagnar behöver inte ha dubbdäck, eftersom de ändå inte kan bromsa.", 0],
      ["C. Om bilen har dubbdäck behöver en tillkopplad lätt släpvagn inte ha dubbdäck. Detta på grund av att lätta släpvagnar sällan används under längre sträckor.", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Vad är sant angående huvudleder?",
    options: [
      ["A. En huvudledsskylt sätts upp i början av huvudleden och upprepas före varje korsning med annan väg.", 0],
      ["B. Korsande vägar som ansluter till huvudleden har alltid stopplikt.", 0],
      ["C. En huvudledsskylt sätts inte upp om det tydligt framgår att huvudleden fortsätter efter korsningen.", 1],
      ["D. Huvudleder är fria från korsningar med trafik i samma plan.", 0],
    ],
  },

  {
    questionText: "Vilken regel gäller för fordon som ska köra ut från bensinmacken",
    options: [
      ["A. Tresekundersregeln", 0],
      ["B. Högerregeln", 0],
      ["C. Utfartsregeln", 1],
      ["D. Svängningsregeln", 0],
    ],
  },

  {
    questionText: "Du kör fordon A. Fordon B är stillastående på grund av punktering. Får du passera B om det finns en heldragen linje på din sida",
    options: [
      ["A. Nej, eftersom det finns en heldragen linje på min sida.", 0],
      ["B. Ja, och jag får köra över den heldragna linjen om det krävs.", 1],
      ["C. Ja, förutsatt att jag inte behöver köra över den heldragna linjen.", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Får du åka förbi en olycksplats där det redan finns ett räddningspådrag?",
    options: [
      ["A. Nej, då åtalas du för smitning.", 0],
      ["B. Ja, du har aldrig någon skyldighet att stanna vid en olycksplats.", 0],
      ["C. Ja, om du inte har bevittnat olyckan samtidigt som det är tydligt att din hjälp inte behövs.", 1],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Hur mycket starksprit (40 %) motsvarar 100 cl folköl med 3,5 volymprocent alkohol?",
    options: [
      ["A. Cirka 0,5 cl", 0],
      ["B. Cirka 4 cl", 0],
      ["C. Cirka 9 cl", 1],
      ["D. Cirka 16 cl", 0],
    ],
  },

  {
    questionText: "Vad är ett reversibelt körfält?",
    options: [
      ["A. Ett körfält där trafik i båda färdriktningarna tillåts samtidigt.", 0],
      ["B. Ett vändbart körfält vars färdriktning bestäms av trafiksignaler.", 1],
      ["C. Ett körfält som endast får användas av utryckningsfordon.", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Ungefär hur många omkommer varje år i den svenska trafiken?",
    options: [
      ["A. 100–150 personer", 0],
      ["B. 200–300 personer", 1],
      ["C. 350–550 personer", 0],
      ["D. 550–700 personer", 0],
    ],
  },

  {
    questionText: "Vilket alternativ ger ett exempel på miljövänlig körning?",
    options: [
      ["A. Mycket långsam fartökning.", 0],
      ["B. Hoppa över växlar.", 1],
      ["C. Körning på så låga växlar som möjligt.", 0],
      ["D. Hålla motorns varvtal på minst 3 000 varv/minut.", 0],
    ],
  },

  {
    questionText: "Är det tillåtet att låta ett barn under 3 år färdas i taxi utan bilbarnstol?",
    options: [
      ["A. Ja, en kort sträcka i baksätet.", 1],
      ["B. Ja, dock endast om det sker för att uppsöka vård.", 0],
      ["C. Ja, och det finns inga begränsningar, eftersom föraren har särskild utbildning.", 0],
      ["D. Nej, eftersom alla taxibilar enligt lag måste tillhandahålla lämpliga bilbarnstolar.", 0],
    ],
  },

  {
    questionText: "Vad är reaktionssträckan?",
    options: [
      ["A. Sträckan du förflyttas från det att du upptäckt hindret tills dess att du börjar bromsa.", 1],
      ["B. Sträckan du förflyttas från det att du upptäckt hindret tills dess att du står stilla.", 0],
      ["C. Bromssträckan + stoppsträckan.", 0],
      ["D. Reaktionstiden + bromssträckan.", 0],
    ],
  },

  {
    questionText: "Får du med en bil vars totalvikt är 1 420 kg dra en släpvagn vars bruttovikt är 1 350 kg?",
    options: [
      ["A. Ja", 0],
      ["B. Nej", 1],
      ["C. .", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Du kör på en väg som har två markerade körfält i din riktning. Vilket körfält ska du välja, om den högsta tillåtna hastigheten är 70 km/h?",
    options: [
      ["A. Alltid körfältet längst till höger.", 0],
      ["B. Alltid körfältet längst till vänster.", 0],
      ["C. Körfältet som passar bäst för mitt färdmål.", 1],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Du ökar hastigheten från 30 km/h till 90 km/h. Hur påverkas bromssträckan?",
    options: [
      ["A. Den blir 9 gånger längre.", 1],
      ["B. Den blir 3 gånger längre.", 0],
      ["C. Den blir 2 gånger längre.", 0],
      ["D. Den förblir oförändrad.", 0],
    ],
  },

  {
    questionText: "Vad är sant för unga män med körkort?",
    options: [
      ["A. Unga män har bäst reaktionstid i trafiken.", 0],
      ["B. Unga män har en tendens att överskatta sin körförmåga mer när de har haft körkort i något år än när de precis har fått körkort.", 1],
      ["C. Unga män har en tendens att överskatta sin körförmåga mer när de precis har fått körkort än när de har haft körkort i något år.", 0],
      ["D. Unga män löper 5–6 gånger större risk att råka ut för en trafikolycka jämfört med de över 75 år.", 0],
    ],
  },

  {
    questionText: "Var är det förbjudet att parkera i samband med en plankorsning?",
    options: [
      ["A. Närmare än 30 meter före och 30 meter efter.", 1],
      ["B. Närmare än 50 meter före och 50 meter efter.", 0],
      ["C. Närmare än 200 meter före och 50 meter efter.", 0],
      ["D. Parkeringsförbud råder till nästa vägkorsning på båda sidor om plankorsningen.", 0],
    ],
  },

  {
    questionText: "Din bil är av årsmodell 2014 och senaste besiktningen var 4 april 2020. När måste du senast besikta bilen igen?",
    options: [
      ["A. 4 juni 2021", 0],
      ["B. 30 juni 2021", 1],
      ["C. 4 juni 2022", 0],
      ["D. 30 juni 2023", 0],
    ],
  },

  {
    questionText: "Var går gränsen för rattfylleri?",
    options: [
      ["A. 0,1 promille alkohol i blodet.", 0],
      ["B. 0,2 promille alkohol i blodet.", 1],
      ["C. 1,0 promille alkohol i blodet.", 0],
      ["D. 1,2 promille alkohol i blodet.", 0],
    ],
  },

  {
    questionText: "Vad gäller när du ska återvända till körbanan från vägrenen efter att ha släppt förbi ett omkörande fordon?",
    options: [
      ["A. Jag har väjningsplikt mot fordonen på körbanan.", 1],
      ["B. Fordonen på körbanan har väjningsplikt mot mig.", 0],
      ["C. Eftersom vägrenen tillhör körbanan har ingen väjningsplikt. Ömsesidigt hänsynstagande måste ske.", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "När ska du lämna företräde åt en buss som står vid en busshållplats?",
    options: [
      ["A. Jag ska alltid lämna bussen företräde om den blinkar ut.", 0],
      ["B. När bussen blinkar ut och hastighetsbegränsningen är högst 50 km/h.", 1],
      ["C. När bussen blinkar ut och hastighetsbegränsningen är över 50 km/h.", 0],
      ["D. Aldrig, eftersom bussen inte är i rörelse.", 0],
    ],
  },

  {
    questionText: "Vad är sant angående avfarter från motorvägar?",
    options: [
      ["A. Avfarten ligger alltid på vänster sida.", 0],
      ["B. Avfarten kan ligga på antingen höger eller vänster sida.", 1],
      ["C. Avfarten ligger alltid på höger sida.", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Vilket alternativ beskriver defensiv körning?",
    options: [
      ["A. Motorbromsningar, överhopp av växlar och användande av motorvärmare.", 0],
      ["B. Då flera fordon kör i någon typ av följe.", 0],
      ["C. Lugn, säker och planerad körning utan stress.", 1],
      ["D. Försvarande av den egna positionen genom att exempelvis inte låta någon annan köra om.", 0],
    ],
  },

  {
    questionText: "Vad bör du göra om du färdas i körfältet med vattensamlingen?",
    options: [
      ["A. Hålla mig i mitten av mitt körfält och ignorera vattnet.", 0],
      ["B. Vika ut i det mötande körfältet för att undvika vattnet.", 0],
      ["C. Köra med låg fart och hålla till vänster, dock inom mitt körfält.", 1],
      ["D. Göra en U-sväng och ta en annan väg.", 0],
    ],
  },

  {
    questionText: "Har skolpatruller rätt att stoppa trafiken vid övergångsställen?",
    options: [
      ["A. Ja, om de har en orangefärgad kappa.", 0],
      ["B. Ja, om personen är över 15 år.", 0],
      ["C. Ja, om det finns barn i närheten", 0],
      ["D. Nej.", 1],
    ],
  },

  {
    questionText: "Får cyklister och mopedister köra om bilar på höger sida?",
    options: [
      ["A. Ja, dock endast om det är tät köbildning.", 0],
      ["B. Ja, de får alltid köra om på höger sida.", 1],
      ["C. Nej, de får aldrig köra om på höger sida.", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Är det tillåtet att ha halvljus och dimljus tända samtidigt på en bil?",
    options: [
      ["A. Ja, det är alltid tillåtet.", 0],
      ["B. Ja, dock endast om det är kraftig dimma.", 0],
      ["C. Nej, det är aldrig tillåtet.", 1],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Vad är sant angående den gula trafiksignalen?",
    options: [
      ["A. Jag får alltid passera en gul signal eftersom den endast är en förvarning innan en röd signal.", 0],
      ["B. Jag får passera en gul signal om jag inte hinner stanna på ett säkert sätt när signalbilden växlar från grön till gul.", 1],
      ["C. Jag får aldrig passera en gul signal eftersom den har samma betydelse som en röd signal.", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Vad gör katalysatorn?",
    options: [
      ["A. Underlättar kallstarter.", 0],
      ["B. Dämpar motorljudet (ljuddämpare).", 0],
      ["C. Omvandlar över 80 % av de skadliga ämnena i avgaserna till vatten och koldioxid.", 1],
      ["D. Reducerar bilens koldioxidutsläpp med över 80 %.", 0],
    ],
  },

  {
    questionText: "När är det förbjudet att använda dubbdäck, om inte vinterväglag råder?",
    options: [
      ["A. 1 december–31 mars", 0],
      ["B. 31 maj–1 september", 0],
      ["C. 16 april–30 september", 1],
      ["D. 1 maj–30 september", 0],
    ],
  },

  {
    questionText: "Är det tillåtet att parkera direkt efter ett övergångsställe?",
    options: [
      ["A. Ja, det är tillåtet.", 1],
      ["B. Nej, det är inte tillåtet.", 0],
      ["C. .", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "När dör flest fotgängare i trafiken?",
    options: [
      ["A. I februari.", 0],
      ["B. I juni.", 0],
      ["C. I december.", 1],
      ["D. Det finns ingen märkbar skillnad mellan månaderna.", 0],
    ],
  },

  {
    questionText: "Vilket alternativ ger exempel på fossila bränslen?",
    options: [
      ["A. Bensin och diesel.", 1],
      ["B. Etanol och biogas.", 0],
      ["C. El och rapsolja.", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Hur stor del av synfältet utgörs av periferiseendet?",
    options: [
      ["A. 1–2 %", 0],
      ["B. 50 %", 0],
      ["C. 98–99 %", 1],
      ["D. .", 0],
    ],
  },

  {
    questionText: "Vad är sant angående slitna däck med dåligt mönsterdjup?",
    options: [
      ["A. Slitna däck fungerar bättre än nya däck i regn, men sämre under normala förhållanden.", 0],
      ["B. Slitna däck fungerar extra dåligt i regn.", 1],
      ["C. När det regnar är det ingen skillnad mellan greppnivån i slitna och nya däck.", 0],
      ["D. .", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },

  {
    questionText: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
  },
];

export default Questions;
