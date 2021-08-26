const Questions = [
  {
    questionText:
      "Vilka får använda ett kollektivkörfält beläget till höger i färdriktningen?",
    options: [
      ["A. Endast kollektivtrafik.", 0],
      ["B. Kollektivtrafik, cyklister samt förare av moped klass II.", 1],
      ["C. Alla fordon som kan transportera minst 8 personer.", 0],
      ["D. Kollektivtrafik samt förare av moped klass I.", 0],
    ]
  },

  {
    questionText:
      "Har du anledning att misstänka att något är fel om bromspedalen sjunker långsamt under hårt tryck?",
    options: [
      ["A. Nej, det är normalt.", 0],
      ["B. Ja, att det finns en läcka i bromssystemet.", 1],
      ["C. Ja, att ABS inte fungerar.", 0],
      ["D. Ja, att bromsskivorna är slitna.", 0],
    ]
  },

  {
    questionText: "Hur fort får en personbil som bogserar en annan personbil max åka?",
    options: [
      ["A. 30 km/h.", 1],
      ["B. 50 km/h.", 0],
      ["C. 70 km/h.", 0],
      ["D. 90 km/h.", 0],
    ]
  },

  {
    questionText: "Hur bör du bete dig när du korsar en järnväg där sikten är delvis skymd?",
    options: [
      ["A. Köra som vanligt eftersom det finns varningssignaler som meddelar om ett tåg kommer.", 0],
      ["B. Sakta in, kolla åt båda hållen, växla ner och sedan köra över snabbt.", 1],
      ["C. Sakta in, kolla åt båda hållen och sedan köra över långsamt.", 0],
    ]
  },

  {
    questionText: "Vilket påstående är sant om gasen koldioxid?",
    options: [
      ["A. Koldioxid är en onaturlig gas som endast bildas vid förbränning av fossila bränslen.", 0],
      ["B. Koldioxid bidrar till växthuseffekten.", 1],
      ["C. Koldioxid var ett stort problem förr i tiden, men katalysatorerna i nya bilar filtrerar bort all koldioxid.", 0],
      ["D. Koldioxid är det enda en välfungerande katalysator släpper ut.", 0],
    ]
  },

  {
    questionText: "Vilket alternativ är sant vid vinterväglag?",
    options: [
      ["A. Om bilen har dubbdäck ska släpvagnen, oavsett typ, ha dubbdäck. Detta för att motverka fällknivsverkan.", 1],
      ["B. Om bilen har dubbdäck ska en tillkopplad bromsad släpvagn ha dubbdäck. Obromsade släpvagnar behöver inte ha dubbdäck, eftersom de ändå inte kan bromsa.", 0],
      ["C. Om bilen har dubbdäck behöver en tillkopplad lätt släpvagn inte ha dubbdäck. Detta på grund av att lätta släpvagnar sällan används under längre sträckor.", 0],
    ]
  },

  {
    questionText: "Vad är sant angående huvudleder?",
    options: [
      ["A. En huvudledsskylt sätts upp i början av huvudleden och upprepas före varje korsning med annan väg.", 0],
      ["B. Korsande vägar som ansluter till huvudleden har alltid stopplikt.", 0],
      ["C. En huvudledsskylt sätts inte upp om det tydligt framgår att huvudleden fortsätter efter korsningen.", 1],
      ["D. Huvudleder är fria från korsningar med trafik i samma plan.", 0],
    ]
  },

  {
    questionText: "Vilken regel gäller för fordon som ska köra ut från bensinmacken",
    options: [
      ["A. Tresekundersregeln", 0],
      ["B. Högerregeln", 0],
      ["C. Utfartsregeln", 1],
      ["D. Svängningsregeln", 0],
    ]
  },

  {
    questionText: "Du kör fordon A. Fordon B är stillastående på grund av punktering. Får du passera B om det finns en heldragen linje på din sida",
    options: [
      ["A. Nej, eftersom det finns en heldragen linje på min sida.", 0],
      ["B. Ja, och jag får köra över den heldragna linjen om det krävs.", 1],
      ["C. Ja, förutsatt att jag inte behöver köra över den heldragna linjen.", 0],
    ]
  },

  {
    questionText: "Får du åka förbi en olycksplats där det redan finns ett räddningspådrag?",
    options: [
      ["A. Nej, då åtalas du för smitning.", 0],
      ["B. Ja, du har aldrig någon skyldighet att stanna vid en olycksplats.", 0],
      ["C. Ja, om du inte har bevittnat olyckan samtidigt som det är tydligt att din hjälp inte behövs.", 1],
    ]
  },

  {
    questionText: "Hur mycket starksprit (40 %) motsvarar 100 cl folköl med 3,5 volymprocent alkohol?",
    options: [
      ["A. Cirka 0,5 cl", 0],
      ["B. Cirka 4 cl", 0],
      ["C. Cirka 9 cl", 1],
      ["D. Cirka 16 cl", 0],
    ]
  },

  {
    questionText: "Vad är ett reversibelt körfält?",
    options: [
      ["A. Ett körfält där trafik i båda färdriktningarna tillåts samtidigt.", 0],
      ["B. Ett vändbart körfält vars färdriktning bestäms av trafiksignaler.", 1],
      ["C. Ett körfält som endast får användas av utryckningsfordon.", 0],
    ]
  },

  {
    questionText: "Ungefär hur många omkommer varje år i den svenska trafiken?",
    options: [
      ["A. 100–150 personer", 0],
      ["B. 200–300 personer", 1],
      ["C. 350–550 personer", 0],
      ["D. 550–700 personer", 0],
    ]
  },

  {
    questionText: "Vilket alternativ ger ett exempel på miljövänlig körning?",
    options: [
      ["A. Mycket långsam fartökning.", 0],
      ["B. Hoppa över växlar.", 1],
      ["C. Körning på så låga växlar som möjligt.", 0],
      ["D. Hålla motorns varvtal på minst 3 000 varv/minut.", 0],
    ]
  },

  {
    questionText: "Är det tillåtet att låta ett barn under 3 år färdas i taxi utan bilbarnstol?",
    options: [
      ["A. Ja, en kort sträcka i baksätet.", 1],
      ["B. Ja, dock endast om det sker för att uppsöka vård.", 0],
      ["C. Ja, och det finns inga begränsningar, eftersom föraren har särskild utbildning.", 0],
      ["D. Nej, eftersom alla taxibilar enligt lag måste tillhandahålla lämpliga bilbarnstolar.", 0],
    ]
  },

  {
    questionText: "Vad är reaktionssträckan?",
    options: [
      ["A. Sträckan du förflyttas från det att du upptäckt hindret tills dess att du börjar bromsa.", 1],
      ["B. Sträckan du förflyttas från det att du upptäckt hindret tills dess att du står stilla.", 0],
      ["C. Bromssträckan + stoppsträckan.", 0],
      ["D. Reaktionstiden + bromssträckan.", 0],
    ]
  },

  {
    questionText: "Får du med en bil vars totalvikt är 1 420 kg dra en släpvagn vars bruttovikt är 1 350 kg?",
    options: [
      ["A. Ja", 0],
      ["B. Nej", 1],
    ]
  },

  {
    questionText: "Du kör på en väg som har två markerade körfält i din riktning. Vilket körfält ska du välja, om den högsta tillåtna hastigheten är 70 km/h?",
    options: [
      ["A. Alltid körfältet längst till höger.", 0],
      ["B. Alltid körfältet längst till vänster.", 0],
      ["C. Körfältet som passar bäst för mitt färdmål.", 1],
    ]
  },

  {
    questionText: "Du ökar hastigheten från 30 km/h till 90 km/h. Hur påverkas bromssträckan?",
    options: [
      ["A. Den blir 9 gånger längre.", 1],
      ["B. Den blir 3 gånger längre.", 0],
      ["C. Den blir 2 gånger längre.", 0],
      ["D. Den förblir oförändrad.", 0],
    ]
  },

  {
    questionText: "Vad är sant för unga män med körkort?",
    options: [
      ["A. Unga män har bäst reaktionstid i trafiken.", 0],
      ["B. Unga män har en tendens att överskatta sin körförmåga mer när de har haft körkort i något år än när de precis har fått körkort.", 1],
      ["C. Unga män har en tendens att överskatta sin körförmåga mer när de precis har fått körkort än när de har haft körkort i något år.", 0],
      ["D. Unga män löper 5–6 gånger större risk att råka ut för en trafikolycka jämfört med de över 75 år.", 0],
    ]
  },

  {
    questionText: "Var är det förbjudet att parkera i samband med en plankorsning?",
    options: [
      ["A. Närmare än 30 meter före och 30 meter efter.", 1],
      ["B. Närmare än 50 meter före och 50 meter efter.", 0],
      ["C. Närmare än 200 meter före och 50 meter efter.", 0],
      ["D. Parkeringsförbud råder till nästa vägkorsning på båda sidor om plankorsningen.", 0],
    ]
  },

  {
    questionText: "Din bil är av årsmodell 2014 och senaste besiktningen var 4 april 2020. När måste du senast besikta bilen igen?",
    options: [
      ["A. 4 juni 2021", 0],
      ["B. 30 juni 2021", 1],
      ["C. 4 juni 2022", 0],
      ["D. 30 juni 2023", 0],
    ]
  },

  {
    questionText: "Var går gränsen för rattfylleri?",
    options: [
      ["A. 0,1 promille alkohol i blodet.", 0],
      ["B. 0,2 promille alkohol i blodet.", 1],
      ["C. 1,0 promille alkohol i blodet.", 0],
      ["D. 1,2 promille alkohol i blodet.", 0],
    ]
  },

  {
    questionText: "Vad gäller när du ska återvända till körbanan från vägrenen efter att ha släppt förbi ett omkörande fordon?",
    options: [
      ["A. Jag har väjningsplikt mot fordonen på körbanan.", 1],
      ["B. Fordonen på körbanan har väjningsplikt mot mig.", 0],
      ["C. Eftersom vägrenen tillhör körbanan har ingen väjningsplikt. Ömsesidigt hänsynstagande måste ske.", 0],
    ]
  },

  {
    questionText: "När ska du lämna företräde åt en buss som står vid en busshållplats?",
    options: [
      ["A. Jag ska alltid lämna bussen företräde om den blinkar ut.", 0],
      ["B. När bussen blinkar ut och hastighetsbegränsningen är högst 50 km/h.", 1],
      ["C. När bussen blinkar ut och hastighetsbegränsningen är över 50 km/h.", 0],
      ["D. Aldrig, eftersom bussen inte är i rörelse.", 0],
    ]
  },

  {
    questionText: "Vad är sant angående avfarter från motorvägar?",
    options: [
      ["A. Avfarten ligger alltid på vänster sida.", 0],
      ["B. Avfarten kan ligga på antingen höger eller vänster sida.", 1],
      ["C. Avfarten ligger alltid på höger sida.", 0],
    ]
  },

  {
    questionText: "Vilket alternativ beskriver defensiv körning?",
    options: [
      ["A. Motorbromsningar, överhopp av växlar och användande av motorvärmare.", 0],
      ["B. Då flera fordon kör i någon typ av följe.", 0],
      ["C. Lugn, säker och planerad körning utan stress.", 1],
      ["D. Försvarande av den egna positionen genom att exempelvis inte låta någon annan köra om.", 0],
    ]
  },

  {
    questionText: "Vad bör du göra om du färdas i körfältet med vattensamlingen?",
    options: [
      ["A. Hålla mig i mitten av mitt körfält och ignorera vattnet.", 0],
      ["B. Vika ut i det mötande körfältet för att undvika vattnet.", 0],
      ["C. Köra med låg fart och hålla till vänster, dock inom mitt körfält.", 1],
      ["D. Göra en U-sväng och ta en annan väg.", 0],
    ]
  },

  {
    questionText: "Har skolpatruller rätt att stoppa trafiken vid övergångsställen?",
    options: [
      ["A. Ja, om de har en orangefärgad kappa.", 0],
      ["B. Ja, om personen är över 15 år.", 0],
      ["C. Ja, om det finns barn i närheten", 0],
      ["D. Nej.", 1],
    ]
  },

  {
    questionText: "Får cyklister och mopedister köra om bilar på höger sida?",
    options: [
      ["A. Ja, dock endast om det är tät köbildning.", 0],
      ["B. Ja, de får alltid köra om på höger sida.", 1],
      ["C. Nej, de får aldrig köra om på höger sida.", 0],
    ]
  },

  {
    questionText: "Är det tillåtet att ha halvljus och dimljus tända samtidigt på en bil?",
    options: [
      ["A. Ja, det är alltid tillåtet.", 0],
      ["B. Ja, dock endast om det är kraftig dimma.", 0],
      ["C. Nej, det är aldrig tillåtet.", 1],
    ]
  },

  {
    questionText: "Vad är sant angående den gula trafiksignalen?",
    options: [
      ["A. Jag får alltid passera en gul signal eftersom den endast är en förvarning innan en röd signal.", 0],
      ["B. Jag får passera en gul signal om jag inte hinner stanna på ett säkert sätt när signalbilden växlar från grön till gul.", 1],
      ["C. Jag får aldrig passera en gul signal eftersom den har samma betydelse som en röd signal.", 0],
    ]
  },

  {
    questionText: "Vad gör katalysatorn?",
    options: [
      ["A. Underlättar kallstarter.", 0],
      ["B. Dämpar motorljudet (ljuddämpare).", 0],
      ["C. Omvandlar över 80 % av de skadliga ämnena i avgaserna till vatten och koldioxid.", 1],
      ["D. Reducerar bilens koldioxidutsläpp med över 80 %.", 0],
    ]
  },

  {
    questionText: "När är det förbjudet att använda dubbdäck, om inte vinterväglag råder?",
    options: [
      ["A. 1 december–31 mars", 0],
      ["B. 31 maj–1 september", 0],
      ["C. 16 april–30 september", 1],
      ["D. 1 maj–30 september", 0],
    ]
  },

  {
    questionText: "Är det tillåtet att parkera direkt efter ett övergångsställe?",
    options: [
      ["A. Ja, det är tillåtet.", 1],
      ["B. Nej, det är inte tillåtet.", 0],
    ]
  },

  {
    questionText: "När dör flest fotgängare i trafiken?",
    options: [
      ["A. I februari.", 0],
      ["B. I juni.", 0],
      ["C. I december.", 1],
      ["D. Det finns ingen märkbar skillnad mellan månaderna.", 0],
    ]
  },

  {
    questionText: "Vilket alternativ ger exempel på fossila bränslen?",
    options: [
      ["A. Bensin och diesel.", 1],
      ["B. Etanol och biogas.", 0],
      ["C. El och rapsolja.", 0],
    ]
  },

  {
    questionText: "Hur stor del av synfältet utgörs av periferiseendet?",
    options: [
      ["A. 1–2 %", 0],
      ["B. 50 %", 0],
      ["C. 98–99 %", 1],
    ]
  },

  {
    questionText: "Vad är sant angående slitna däck med dåligt mönsterdjup?",
    options: [
      ["A. Slitna däck fungerar bättre än nya däck i regn, men sämre under normala förhållanden.", 0],
      ["B. Slitna däck fungerar extra dåligt i regn.", 1],
      ["C. När det regnar är det ingen skillnad mellan greppnivån i slitna och nya däck.", 0],
    ]
  },

  {
    questionText: "Vad betyder vägmärket?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/E26-1.svg",
    options: [
      ["A. Tunnel som är 2,0 km lång.", 1],
      ["B. Tunnel börjar om 2,0 km.", 0],
      ["C. Vägspärr börjar om 2,0 km.", 0],
      ["D. Viadukt börjar om 2,0 km.", 0],
    ],
    comment: "Märket anger tunnel. Tunnelns längd anges och tunnelns namn kan anges på märket. Märket är upprepat efter varje kilometer och kvarvarande tunnellängd anges då på märket."
  },

  {
    questionText: "Vilket av följande fordon får du köra om du har ett körkort med behörighet B utfärdat 2017?",
    options: [
      ["A. Snöskoter.", 0],
      ["B. Lastbil med totalvikt på 3 ton.", 1],
      ["C. Minibuss med 12 sittplatser inklusive förarplatsen.", 0],
      ["D. Lätt motorcykel.", 0],
    ],
    comment: "Behörighet B ger dig rätt att köra: Personbil med en totalvikt av högst 3,5 ton, lätt lastbil och ett till en sådan bil kopplat lätt släpfordon, terrängvagn och motorredskap klass I (= motorredskap som är konstruerat för en högre högsta hastighet än 30 km/tim). Beteckning B ger även rätt att köra -Moped I (EU-moped), traktor, motorredskap klass I och klass II samt tre- och fyrhjulig motorcykel -Terränghjuling och snöskoter (om körkortet är utfärdat före 1 januari 2000)"
  },

  {
    questionText: "Får du köra rakt fram om du ser detta vägmärke?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/B6-1.svg",
    options: [
      ["A. Ja, märket visar endast att mötande trafik har väjningsplikt mot mig.", 0],
      ["B. Ja, om jag inte hindrar eller stör mötande trafik.", 1],
      ["C. Nej, aldrig.", 0],
    ],
    comment: "Du har alltså väjningsplikt mot mötande trafik = du får inte hindra eller störa de mötande."
  },

  {
    questionText: "Vilken bild visar en avfartsskärm?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/x1-x4-x8-x9.svg",
    options: [
      ["A. A", 0],
      ["B. B", 0],
      ["C. C", 0],
      ["D. D", 1],
    ],
  },

  {
    questionText: "Fotot är taget från bilen du kör. Var bör du ha blicken fokuserad?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/4369.jpg",
    options: [
      ["A. A, eftersom det är viktigast att hålla koll nära bilen.", 0],
      ["B. B, eftersom den mötande bilen kan göra en hastig manöver samt för att du ska veta när det är dags för helljus igen.", 0],
      ["C. C, eftersom du minskar risken för bländning samtidigt som du håller utkik för djur eller andra hinder.", 1],
    ],
  },

  {
    questionText: "Vad är sant angående rådet att placera de bästa däcken bak?",
    options: [
      ["A. Det gäller endast för bakhjulsdrivna bilar.", 0],
      ["B. Det gäller både för fram- och bakhjulsdrivna bilar.", 1],
      ["C. Det gäller endast för framhjulsdrivna bilar.", 0],
    ],
    comment: "De däck som har det största mönsterdjupet eller bedöms ha det bästa väggreppet bör vara monterade bak på fordonet för att minska risken för sladd vid bromsning och i svängar. Däcken med största dubbutsticket bör monteras bak. Detta gäller både fram- och bakhjulsdrivna bilar."
  },

  {
    questionText: "Du kör i det högra körfältet. När bör du byta till det vänstra?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/2532.jpg",
    options: [
      ["A. Så snart som möjligt, så att jag inte riskerar att fastna i det högra körfältet.", 1],
      ["B. Så sent som möjligt, eftersom det vänstra körfältet ska användas av omkörare.", 0],
      ["C. Så snart som möjligt, dock måste jag ha passerat skylten innan jag får byta körfält.", 0],
    ],
    comment: "Byta körfält får du göra även innan skylten. Det finns ingenting på bilden som tyder på något annat."
  },

  {
    questionText: "Vad är en synvilla?",
    options: [
      ["A. Ett hus som står placerat så nära en korsning att bilarna inte kan se om det kommer korsande trafik.", 0],
      ["B. En ögonsjukdom som gör att endast ett öga fungerar effektivt.", 0],
      ["C. När hjärnan gör en felaktig tolkning av synintryck.", 1],
    ],
    comment: "Nationalencyklopedin: ”synvilla, felaktig varseblivning med synsinnet.”"
  },

  {
    questionText: "När klassas en lastbil som tung?",
    options: [
      ["A. Då bruttovikten överstiger 3,5 ton.", 0],
      ["B. Då tjänstevikten överstiger 3,5 ton.", 0],
      ["C. Då totalvikten överstiger 3,5 ton.", 1],
      ["D. Då maxlasten överstiger 3,5 ton.", 0],
    ],
  },

  {
    questionText: "Är det tillåtet att långsamt passera en bil som står still precis före ett obevakat övergångsställe?",
    options: [
      ["A. Ja, om det finns två eller flera körfält i samma riktning och det samtidigt är tät köbildning i alla körfält.", 1],
      ["B. Ja, om det finns två eller flera markerade körfält i samma riktning som leder till samma färdmål.", 0],
      ["C. Nej, aldrig.", 0],
    ],
    comment: "Fordon eller spårvagnar får inte köras om strax före eller på ett obevakat övergångsställe […] I följande fall anses det inte som omkörning när ett fordon i ett körfält passerar fordon i ett annat körfält 1. om körbanan har två eller flera körfält för färd i samma riktning och det är tät köbildning i alla körfält 2. om körbanan är indelad i körfält för olika färdmål som är utmärkta med körfältsvägvisare, eller 3. om fordonen har placerats i skilda körfält i anslutning till en vägkorsning."
  },

  {
    questionText: "Vilka märken anger påbjuden körriktning?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/d1-d1_3-d1_4-d1_7.svg",
    options: [
      ["A. Endast A och C.", 0],
      ["B. Endast B och D.", 0],
      ["C. Alla", 1],
      ["D. Inga", 0],
    ],
  },

  {
    questionText: "Vilka tecken betyder stopp?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/p3-p5-p1-p2.svg",
    options: [
      ["A. Endast A och C.", 0],
      ["B. A, C och D.", 1],
      ["C. Endast C och D.", 0],
      ["D. Alla.", 0],
    ],
  },

  {
    questionText: "Du kör den blåa bilen. Var bör du stanna i förhållande till stopplinjen?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/2466.jpg",
    options: [
      ["A. Exakt på samma plats som bilen befinner sig på fotot.", 0],
      ["B. Så att framdäcken är cirka en meter från stopplinjen.", 0],
      ["C. Så nära att framdäcken nästan nuddar stopplinjen.", 1],
    ],
    comment: "Stopplinjens placering är noga uttänkt med hänsyn till god sikt och säkerhet (minimal risk för att bli påkörd). Du ”skall” stanna precis vid linjen."
  },

  {
    questionText: "Vad kan du göra för att undvika trötthet?",
    options: [
      ["A. Ha varmt i bilen.", 0],
      ["B. Äta mycket kött och annan tung mat innan avfärd.", 0],
      ["C. Pausa varje timme och gå ur bilen.", 1],
    ],
  },

  {
    questionText: "Vad betyder vägmarkeringen?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/M3-1.svg",
    options: [
      ["A. Varningslinje, du får dock överskrida den.", 1],
      ["B. Spärrlinje, du får inte överskrida den.", 0],
      ["C. Landsväg med hastighetsbegränsning på 90 km/h.", 0],
    ],
    comment: "Varningslinje används för att informera om att linjen är olämplig att överskrida på grund av trafikförhållandena. Markeringen anger gränsen mellan körfält avsedda för färd i motsatta färdriktningar. Markeringen har längdförhållandet 3:1 mellan dellinje och mellanrum"
  },

  {
    questionText: "Vilket alternativ är sant angående bilens helljus?",
    options: [
      ["A. Vid snöyra blir det oftast bättre sikt om helljuset är på.", 0],
      ["B. Vid snöyra blir det oftast sämre sikt om helljuset är på.", 1],
      ["C. Vid snöyra blir det oftast bättre sikt om helljuset är på samtidigt som halvljuset.", 0],
    ],
    comment: "Helljuset är så kraftigt att du oftast bara ser en ”vit vägg” framför dig (du bländar dig själv). Att köra med halvljus ger i regel bättre sikt."
  },

  {
    questionText: "Vilken eller vilka fordon har parkerat på ett otillåtet sätt?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/bilar-28.svg",
    options: [
      ["A. Endast A.", 0],
      ["B. Endast A och B.", 0],
      ["C. Alla.", 1],
    ],
    comment: "”Ett fordon får inte stannas eller parkeras […] i en vägkorsning eller inom ett avstånd av tio meter från en korsande körbanas närmaste ytterkant”. C bryter med största sannolikhet mot båda villkoren i regeln (det vill säga står både i korsningen och mindre än 10 meter från korsande körbana)."
  },

  {
    questionText: "Bil A har precis passerat bil B. Var det tillåtet?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/5206.jpg",
    options: [
      ["A. Ja, eftersom fordonen befann sig i skilda körfält i anslutning till en vägkorsning.", 1],
      ["B. Ja, eftersom körfälten är utmärkta med körfältsvägvisare för olika färdmål.", 0],
      ["C. Nej, eftersom det skedde till höger.", 0],
      ["D. Nej, eftersom körfälten inte leder till olika färdmål.", 0],
    ],
    comment: "Normalt är det förbjudet att köra om på höger sida som A gör. Det finns dock undantag: ”I följande fall anses det inte som omkörning när ett fordon i ett körfält passerar fordon i ett annat körfält 1. om körbanan har två eller flera körfält för färd i samma riktning och det är tät köbildning i alla körfält, 2. om körbanan är indelad i körfält för olika färdmål som är utmärkta med körfältsvägvisare, eller 3. om fordonen har placerats i skilda körfält i anslutning till en vägkorsning.”"
  },

  {
    questionText: "Kan det vara tillåtet att färdas 9 personer i en personbil?",
    options: [
      ["A. Ja", 1],
      ["B. Nej", 0],
    ],
    comment: "Personbil […] En bil som är försedd med högst åtta sittplatser utöver förarplatsen. 8 + 1 = 9"
  },

  {
    questionText: "Hur lång tid innan avfärd bör du ha motorvärmaren på om det är +10 °C ute?",
    options: [
      ["A. 20 minuter.", 1],
      ["B. 1 timme.", 0],
      ["C. 1 timme och 30 minuter.", 0],
      ["D. Motorvärmare bör inte användas, eftersom de endast är effektiva i minusgrader.", 0],
    ],
  },

  {
    questionText: "Var kan den obligatoriska kontrollbesiktningen genomföras?",
    options: [
      ["A. Endast hos en märkesverkstad.", 0],
      ["B. Endast hos ett godkänt besiktningsföretag.", 1],
      ["C. Endast hos Bilprovningen.", 0],
      ["D. På vilken verkstad som helst.", 0],
    ],
  },

  {
    questionText: "Vad innebär tvåkrets bromssystem?",
    options: [
      ["A. Går en krets sönder fungerar bromsarna ändå på några hjul.", 1],
      ["B. Parkeringsbromsen är en krets och fotbromsen är den andra.", 0],
    ],
  },

  {
    questionText: "Hur fort får en moped klass II tillverkad år 2015 max köra?",
    options: [
      ["A. Max 25 km/h", 1],
      ["B. Max 30 km/h", 0],
      ["C. Max 45 km/h", 0],
    ],
    comment: "Moped klass II är ett motorfordon på två, tre eller fyra hjul, som är konstruerat för en hastighet av högst 25 km/timmen"
  },

  {
    questionText: "Vad innebär skyltarna till höger?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/7002.jpg",
    options: [
      ["A. Högerregeln gäller inte i kommande korsning.", 1],
      ["B. Vägen är bredast till höger.", 0],
      ["C. Vägen till vänster är enkelriktad.", 0],
      ["D. Fordon som kommer från vänster har stopplikt.", 0],
    ],
    comment: "Tavlan anger en korsning där förare på en väg som anges med smalt streck har väjningsplikt mot fordon på en väg som anges med brett streck. Symbolen är anpassad efter förhållandena på platsen."
  },

  {
    questionText: "Vad innebär imitationsinlärning?",
    options: [
      ["A. Att du bedömer sannolikheten för att något ska inträffa.", 0],
      ["B. Att du söker djupgående förståelse.", 0],
      ["C. Att du lär dig genom att studera andra.", 1],
    ],
    comment: "Imitationsinlärning innebär att vi ”tar till oss andra människors beteende."
  },

  {
    questionText: "Är det generellt tillåtet att lasta ur bilen på en plats där det endast råder parkeringsförbud?",
    options: [
      ["A. Ja", 1],
      ["B. Nej", 0],
    ],
    comment: "”Parkering är en uppställning av ett fordon med eller utan förare. Uppställningen sker av någon anledning som […] inte sker för på- eller avstigning eller på- eller avlastning av gods.” (Transportstyrelsen). Det du gör räknas alltså inte som parkering och omfattas därför inte av parkeringsförbudet."
  },

  {
    questionText: "Du har kört på en hjort i låg hastighet och bedömer att varken djuret eller bilen har skadats. Måste du anmäla olyckan till Polisen?",
    options: [
      ["A. Ja", 1],
      ["B. Nej", 0],
    ],
    comment: "Har ett djur av arterna björn, varg, järv, lo, älg, hjort, rådjur, utter, vildsvin, mufflonfår eller örn varit inblandat i en sammanstötning med ett motorfordon, är fordonets förare skyldig att snarast möjligt märka ut olycksplatsen och underrätta närmaste polismyndighet."
  },

  {
    questionText: "Vad är sant angående mörkerseendet efter att du har blivit bländad av ett annat fordons helljus?",
    options: [
      ["A. Det påverkas inte alls.", 0],
      ["B. Det försämras permanent.", 0],
      ["C. Det försämras en stund men återhämtar sig snart.", 1],
    ],
    comment: "Efter bländning tar det någon minut i tillvänjning, innan mörkerseendet fungerar någorlunda bra igen."
  },

  {
    questionText: "Räcker det med ett vanligt B-körkort för att med en personbil få dra en släpvagn vars totalvikt är 500 kg?",
    options: [
      ["A. Ja", 1],
      ["B. Det är omöjligt att veta, eftersom mer information behövs.", 0],
      ["C. Nej", 0],
    ],
    comment: "Lätt släpvagn: Släp med totalvikt på max 750 kg eller Släp där totalvikten för bil + släp är max 3,5 ton."
  },

  {
    questionText: "Är det tillåtet att köra fortare än 50 km/h efter den blåvita skylten om du bedömer att det är lämpligt?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/6952b.jpg",
    options: [
      ["A. Ja", 1],
      ["B. Nej", 0],
    ],
    comment: "Notera orden ”lämpligt” och ”rekommenderad”. Dessa ord signalerar inget tvång. "
  },

  {
    questionText: "Vad betyder vägmärket?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/C9-1.svg",
    options: [
      ["A. Förbud mot trafik med alla typer av lastbilar.", 0],
      ["B. Förbud mot fordon lastade med farligt gods.", 1],
      ["C. Förbud mot spårbunden trafik.", 0],
      ["D. Förbud mot fordon lastade med flytande vätskor.", 0],
    ],
  },

  {
    questionText: "Vad betyder vägmärket?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/D2-1.svg",
    options: [
      ["A. Påbjuden körriktning höger.", 0],
      ["B. Påbjuden körbana höger.", 1],
    ],
    comment: ""
  },

  {
    questionText: "Är det bra eller dåligt ur miljösynpunkt att vaxa bilen?",
    options: [
      ["A. Övervägande bra, eftersom det fastnar mindre smuts på lacken vilket leder till färre tvättar.", 1],
      ["B. Övervägande dåligt, eftersom vaxet innehåller giftiga ämnen som sprids i luften.", 0],
    ],
  },

  {
    questionText: "Vilken formulering är bäst sett ur ett trafiksäkerhetsperspektiv?",
    options: [
      ["A. De andra bilarna har väjningsplikt mot mig, eftersom jag kör på en huvudled.", 1],
      ["B. Jag har företräde, eftersom jag kör på en huvudled.", 0],
    ],
    comment: "Det är alltid bättre att tänka vilka skyldigheter som existerar i stället för vilka rättigheter som finns. Annars hamnar man lätt i situationer där man gör riskfyllda saker för att ”hävda sin rätt”, vilket inte alls är bra i trafiken."
  },

  {
    questionText: "Hur kommer du bäst iväg utan hjulspinn efter att ha stannat innan en mycket hal korsning på vintern?",
    options: [
      ["A. Genom att växla mellan att gasa kraftigt och försiktigt flera gånger under de första meterna.", 0],
      ["B. Genom att backa cirka en meter precis innan du ska köra ut i korsningen.", 0],
      ["C. Genom att gasa kraftigt och jämnt.", 0],
      ["D. Genom att gasa försiktigt och jämnt.", 1],
    ],
    comment: "Kraftig gas innebär större risk för hjulspinn."
  },

  {
    questionText: "Vad ska du göra om trafikljusen i en korsning blinkar gult?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/SIG5-1.svg",
    options: [
      ["A. Vända och ta en annan väg.", 0],
      ["B. Stanna vid trafikljuset och vänta på att det ska bli grönt.", 0],
      ["C. Köra försiktigt och rätta dig efter andra anvisningar eller regler.", 1],
    ],
    comment: "”Särskild försiktighet skall iakttas vid passage.” När trafikljusen är ur funktion ska du titta efter vägmärken eller poliser som dirigerar trafiken. Finns inget, gå då efter högerregeln."
  },

  {
    questionText: "Vad är sant vid denna kombination av övergångsställe och cykelpassage?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/2333.jpg",
    options: [
      ["A. Det är tillåtet att köra om tvåhjuliga fordon i samband med övergångsstället och cykelpassagen.", 0],
      ["B. Eftersom cykelpassagen är obevakad har jag väjningsplikt mot alla som korsar vägen på cykelpassagen.", 0],
      ["C. Jag kan bli skyldig att sänka hastigheten om en cyklist börjar korsa vägen på cykelpassagen.", 1],
      ["D. Det är tillåtet att parkera inom ett avstånd av 10 meter före övergångsstället och cykelpassagen.", 0],
    ],
    comment: "Fordon eller spårvagnar får inte köras om strax före eller på ett obevakat övergångsställe, en obevakad cykelpassage eller en cykelöverfart. Du har endast väjningsplikt mot gående, inte cyklister."
  },

  {
    questionText: "Vilket alternativ är inte en vanlig typ av broms på personbilar?",
    options: [
      ["A. Skivbroms", 0],
      ["B. Fjäderbroms", 1],
      ["C. Trumbroms", 0],
    ],
    comment: "Skivbromsar och trumbromsar är de dominerande bromstyperna för personbilar. Trumbromsar på bakhjulen och skivbromsar på framhjulen är en vanlig kombination. ”Fjäderbroms” är det svår att överhuvudtaget hitta information om, vilket gör att den inte är en vanlig bromstyp, som var det frågan gällde."
  },

  {
    questionText: "Vilken släpvagnstyp är tillåten att dra om du endast har körkort med behörighet B?",
    options: [
      ["A. Endast obromsad släpvagn.", 0],
      ["B. Endast lätt släpvagn.", 1],
      ["C. Endast bromsad släpvagn.", 0],
    ],
    comment: "Det räcker med behörigheten B för att köra personbil eller lätt lastbil med ett lätt släp. I andra fall krävs behörighet för utökad B eller BE. Lätta släpvagnar finns både som bromsade och obromsade."
  },

  {
    questionText: "Fotot är taget från bilen du kör. Vem ska stanna och lämna företräde enligt reglerna?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/2861.jpg",
    options: [
      ["A. Du ska lämna företräde åt den röda bilen eftersom det finns mest plats till höger.", 0],
      ["B. Den röda bilen ska lämna företräde åt dig eftersom alla hinder finns på den bilens sida.", 1],
    ],
    comment: "Om det finns något hinder för möte skall den förare stanna som har hindret på sin sida, om det är nödvändigt för att den mötande skall kunna passera."
  },

  {
    questionText: "Det är mörkt ute och du kör med halvljus. På vilket avstånd upptäcker du en fotgängare med mörka kläder utan reflex?",
    options: [
      ["A. Cirka 25 meter.", 1],
      ["B. Cirka 50 meter.", 0],
      ["C. Cirka 75 meter.", 0],
      ["D. Cirka 100 meter.", 0],
    ],
  },

  {
    questionText: "Du kör tunga varor åt en vän. Innan vännens hus sitter detta märke. Vad gäller?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/D5-1.svg",
    options: [
      ["A. Du får alltid köra in där märket sitter, men endast i gångfart.", 0],
      ["B. Du får köra in där märket sitter eftersom du ska lasta ur varor.", 0],
      ["C. Du får inte köra in där märket sitter.", 1],
    ],
    comment: "Märket anger bana avsedd endast för gående."
  },

  {
    questionText: "Har du väjningsplikt mot cyklister som korsar vägen på övergångsstället?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/2271.jpg",
    options: [
      ["A. Ja", 0],
      ["B. Nej", 1],
    ],
    comment: "En cyklande som ändå korsar en väg på ett övergångsställe har alltid väjningsplikt både mot gående och mot fordon på vägen."
  },

  {
    questionText: "Vad betyder vägmärket?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/C4-1.svg",
    options: [
      ["A. Förbud mot trafik med alla motordrivna fordon.", 0],
      ["B. Förbud mot trafik med motordrivna fordon med fler än två hjul.", 1],
      ["C. Förbud mot all fordonstrafik.", 0],
    ],
  },

  {
    questionText: "Vad innebär denna märkeskombination?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/b3-t9.svg",
    options: [
      ["A. Olycksdrabbat övergångsställe.", 0],
      ["B. Övergångsställe där personer med nedsatt hörsel är vanligt förekommande.", 0],
      ["C. Övergångsställe där personer med nedsatt syn är vanligt förekommande.", 1],
      ["D. Bevakat övergångsställe.", 0],
    ],
  },

  {
    questionText: "Vad är sant 15 meter efter denna korsning?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/4613.jpg",
    options: [
      ["A. Jag får parkera på körbanan.", 0],
      ["B. Jag får stanna på körbanan för att släppa av en passagerare.", 1],
      ["C. Jag får inte stanna på körbanan, eftersom det är en huvudled.", 0],
      ["D. Jag får inte stanna på körbanan, eftersom det är 15 meter efter en korsning.", 0],
    ],
    comment: "Det är förbjudet att parkera på en huvudled, men det finns inget förbud mot att stanna på en huvudled. När det gäller en korsning, det är förbjudet att stanna inom 10 meter från en korsning (15 meter efter är tillåtet)."
  },

  {
    questionText: "Är det sant att du alltid måste använda vinterdäck om det råder vinterväglag?",
    options: [
      ["A. Ja, alltid", 0],
      ["B. Nej, inte exempelvis 1 april", 1],
    ],
    comment: "När du kör personbil […] är det krav på vinterdäck […] 1 december–31 mars, om det är vinterväglag.” (Transportstyrelsen). Det betyder att det inte är något lagkrav på att ha vinterdäck om det är snö och is den 1 april. Formuleringen ”om det är vinterväglag” gäller endast ihop med 1 december–31 mars. Annars skulle det stå till exempel: ”krav på vinterdäck 1 december–31 mars eller om det är vinterväglag."
  },

  {
    questionText: "Vilket märke anger det maximalt tillåtna axeltrycket?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/c20-c21-c23-c24.svg",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 1],
      ["D. ", 0],
    ],
  },

  {
    questionText: "Vilket är det maximalt tillåtna axeltrycket på den kommande vägen till höger?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/6669.jpg",
    options: [
      ["A. 4 ton", 1],
      ["B. 8 ton", 0],
      ["C. 12 ton", 0],
      ["D. 24 ton", 0],
    ],
  },

  {
    questionText: "Får en buss i linjetrafik svänga vänster?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/2626.jpg",
    options: [
      ["A. Ja", 1],
      ["B. Nej", 0],
    ],
    comment: "Märkena ska tolkas som: ”Buss i linjetrafik får välja väg helt fritt. Alla andra måste dock svänga vänster.”"
  },

  {
    questionText: "Vad är sant angående vägmärket?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/D8-1.svg",
    options: [
      ["A. Gångtrafik är tillåten.", 1],
      ["B. Märket varnar för hästar.", 0],
      ["C. Endast hästar får passera märket.", 0],
      ["D. Endast hästar med ryttare får passera märket.", 0],
    ],
  },

  {
    questionText: "Kan olika kommuner ha olika regler för exempelvis parkering?",
    options: [
      ["A. Nej, trafikreglerna är exakt samma i hela landet.", 0],
      ["B. Ja, olika lokala bestämmelser förekommer.", 1],
    ],
    comment: "Särskilda trafikregler får […] meddelas genom lokala trafikföreskrifter […] De särskilda trafikreglerna får gälla […] Förbud mot att stanna eller parkera fordon eller tillåtelse att stanna eller parkera fordon med avvikelse från bestämmelserna."
  },

  {
    questionText: "Vad är sant om längden av ett fordonståg?",
    options: [
      ["A. Längden får maximalt uppgå till 24,0 meter.", 0],
      ["B. Längden får uppgå till 25,25 meter förutsatt att ett antal villkor är uppfyllda.", 1],
    ],
    comment: "Ett annat motordrivet fordon än en buss med eller utan ett därtill kopplat fordon får inte föras på andra vägar än enskilda om fordonet eller fordonståget, lasten inräknad, är längre än 24,0 meter. Längden av ett fordonståg, lasten inräknad, får dock uppgå till 25,25 meter om följande villkor är uppfyllda. […] 1. […] 11."
  },

  {
    questionText: "Du vill svänga vänster i en korsning där trafiken är tät. Kan du bli tvungen att avstå från att svänga?",
    options: [
      ["A. Nej, jag får alltid svänga om jag placerar mig till vänster i körfältet och använder körriktningsvisare.", 0],
      ["B. Ja, om jag orsakar onödigt hinder för den bakomvarande trafiken.", 1],
    ],
    comment: "En förare får svänga i en vägkorsning endast om det kan ske utan fara eller onödigt hinder för andra som färdas i samma riktning. Särskild uppmärksamhet skall riktas på den bakomvarande trafiken."
  },

  {
    questionText: "Du fyller i luft i däcken på en bensinmack. Vilket alternativ är sant?",
    options: [
      ["A. Fyller du i 20 % mer än rekommenderat riskerar du att däcket exploderar.", 0],
      ["B. Fyller du i 130 % mer än rekommenderat riskerar du att däcket exploderar.", 0],
      ["C. Fyller du i 200 % mer än rekommenderat riskerar du att däcket exploderar.", 0],
      ["D. Det är i princip omöjligt att få däcket att explodera.", 1],
    ],
    comment: "Kan inte däcket explodera? Nej. För det krävs att man pumpar i över 13–15 kg (bar) – mer än fem gånger normalt däcktryck för en personbil. Så mycket luft går inte att få i eftersom en vanlig kompressor inte klarar av att ge det trycket. Vid cirka 6–7 kg (bar) kan fälgen spricka – men redan det trycket är svårt att nå med vanliga påfyllningsapparater.” (Trafikverket)"
  },

  {
    questionText: "Får du hindra någon som genomför en osäker omkörning?",
    options: [
      ["A. Ja, det är din skyldighet som trafikant.", 0],
      ["B. Ja, det är dock frivilligt.", 0],
      ["C. Nej, det är förbjudet.", 1],
    ],
    comment: "”Föraren får inte öka hastigheten eller på något annat sätt försvåra omkörningen.” (Trafikförordningen)"
  },

  {
    questionText: "Vilket straff får normalt en person som smiter från en olycksplats där det endast uppkom skador på egendom?",
    options: [
      ["A. Indraget körkort", 0],
      ["B. Dagsböter", 1],
      ["C. Fängelse", 0],
    ],
    comment: "”Om olyckan endast medfört skador på egendom, och den inblandade smiter, är straffet dagsböter. Det kan även nu bli fråga om att körkortet dras in.” (Körkortsboken, upplaga 19, sida 255) Indraget körkort ”är en trafiksäkerhetsåtgärd och inte ett straff” (MHF)."
  },

  {
    questionText: "Vad kallas vägtypen på fotot?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/7115.jpg",
    options: [
      ["A. 2+1-väg", 1],
      ["B. 3-väg", 0],
      ["C. Dubbelväg", 0],
      ["D. Enskild väg", 0],
    ],
    comment: "Begreppet 2+1-väg är väletablerat och används av exempelvis Trafikverket, NTF och Körkortsboken."
  },

  {
    questionText: "Vad betyder vägmärket?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/C18-1.svg",
    options: [
      ["A. Förbjudet att köra fordon inklusive släp om den totala längden på dragfordon och släp överstiger 20 meter.", 1],
      ["B. Förbjudet att köra fordon längre än 20 meter. Tillkopplat släp som gör att den totala längden på dragfordon och släp överstiger 20 meter får dock förekomma.", 0],
    ],
  },

  {
    questionText: "Vad betyder vägmärket?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/H16-1.svg",
    options: [
      ["A. Friluftsområde", 1],
      ["B. Vandringsled", 0],
      ["C. Familjevänligt område", 0],
      ["D. Rastplats", 0],
    ],
  },

  {
    questionText: "Vad är sant angående singelolyckor med personbil på vägar där hastighetsgränsen är högst 50 km/h?",
    options: [
      ["A. De flesta inträffar under veckoslutets nätter.", 1],
      ["B. De flesta inträffar på måndag morgon.", 0],
      ["C. De flesta inträffar i mitten av veckan mellan klockan 16–18.", 0],
      ["D. De flesta inträffar på söndag morgon klockan 6–9.", 0],
    ],
    comment: "”Singelolyckor med personbil där hastighetsgränsen är högst 50 km/h fördelade efter veckodag och tid på dygnet. […] Nästan 40 procent av olyckorna inträffade kvällen/natten mellan fredag/lördag och lördag/söndag (18:00-05:59).” (Trafikverket)"
  },

  {
    questionText: "Du ska köra in på en motorväg. Vad gäller?",
    options: [
      ["A. Finns det accelerationsfält har varken du eller trafiken på motorvägen företräde, det är ömsesidig anpassning som gäller.", 1],
      ["B. Saknas det accelerationsfält har varken du eller trafiken på motorvägen företräde, det är ömsesidig anpassning som gäller.", 0],
      ["C. Du måste lämna företräde åt alla på motorvägen, oavsett hur påfarten ser ut.", 0],
    ],
    comment: "”Accelerationsfält […] du har inte företräde […] motorvägstrafiken har inte företräde […] det är ömsesidig hänsyn som gäller […] Saknar motorvägen accelerationsfält gäller väjningsplikt, och du måste väja för trafiken ute på motorvägen.” (Körkortsboken, upplaga 19, sida 106–107)"
  },

  {
    questionText: "Ungefär hur många av de som omkommer i trafikolyckor använde inte bälte vid olyckstillfället?",
    options: [
      ["A. 1%", 0],
      ["B. 5%", 0],
      ["C. 25%", 0],
      ["D. 40%", 1],
    ],
  },

  {
    questionText: "Vilket alternativ är sant angående fordonsskatt?",
    options: [
      ["A. Fordonsskatten ingår i trafikförsäkringen.", 0],
      ["B. Fordonsskatten är inte lika stor för alla fordon.", 1],
      ["C. Fordonsskatt måste betalas för alla fordon.", 0],
      ["D. Fordonsskatt måste betalas även om ett fordon är avställt.", 0],
    ],
    comment: "”Trafikförsäkringen skyddar endast vid olyckor. Skattens storlek beror på, och beräknas, utifrån en rad faktorer. Följande faktorer kan ha inverkan på skattens storlek: fordonskategori, skattevikt, drivmedel, koldioxidutsläpp. Följande fordon är inte fordonsskattepliktiga: […] mopeder, traktorer klass II (jordbrukstraktorer). Avställda fordon är inte skattepliktiga.” (Transportstyrelsen)"
  },

  {
    questionText: "Du vill transportera en låda på bilens tak. Bilen är 160 cm bred och lådans bredd är 175 cm. Får du köra bilen med lasten på allmän väg?",
    options: [
      ["A. Nej", 0],
      ["B. Ja", 1],
    ],
    comment: "”Om ett motordrivet fordon eller ett därtill kopplat fordon lastas så att lasten på någondera sidan skjuter ut mer än 20 centimeter utanför fordonet eller om fordonets bredd, lasten inräknad, överstiger 260 centimeter […] får fordonet eller därtill kopplat fordon föras endast på enskild väg.” (Trafikförordningen)"
  },

  {
    questionText: "Gäller speciella regler för följen av olika slag, exempelvis en grupp barn med ledare?",
    options: [
      ["A. Ja, du får inte bryta följet.", 1],
      ["B. Nej, du behöver endast vidta vanlig försiktighet.", 0],
    ],
    comment: "”En trafikant får inte bryta eller på annat sätt hindra […] en grupp av barn under ledares uppsikt, ett begravningsfölje eller någon annan procession.” (Trafikförordningen)"
  },

  {
    questionText: "Skylten som tilläggstavlan avser har ramlat bort. Vilken slutsats kan du med säkerhet dra?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/t12-trasig.svg",
    options: [
      ["A. Den saknade skylten är ett varningsmärke.", 0],
      ["B. Den saknade skylten är inte ett anvisningsmärke.", 0],
      ["C. Den saknade skylten är inte ett förbudsmärke.", 1],
      ["D. Den saknade skylten är ett väjningspliktsmärke.", 0],
    ],
    comment: "”En tilläggstavla har samma bottenfärg och samma färg på bård och tecken som det vägmärke det används under, om inte annat anges i 30 §. En tilläggstavla under ett märke som anger förbud mot att parkera eller förbud mot att stanna eller parkera har dock gul bottenfärg med svarta tecken.” (Vägmärkesförordningen)"
  },

  {
    questionText: "Hur många mil är det kvar till Uppsala?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/6318.jpg",
    options: [
      ["A. 46", 0],
      ["B. 4,6", 1],
      ["C. 0,46", 0],
    ],
    comment: "Tavlorna anger alltid avståndet i kilometer (km). Mil får du fram genom att dela med 10: 46/10 = 4,6 mil"
  },

  {
    questionText: "Hur många sittplatser för passagerare får det maximalt finnas i en personbil?",
    options: [
      ["A. 5", 0],
      ["B. 6", 0],
      ["C. 8", 1],
      ["D. Ingen gräns finns", 0],
    ],
    comment: "”Personbil […] En bil som är försedd med högst åtta sittplatser utöver förarplatsen”. (Lagen om vägtrafikdefinitioner)"
  },

  {
    questionText: "Kan det vara förbjudet att framföra ett fordon om du är trött?",
    options: [
      ["A. Ja", 1],
      ["B. Nej", 0],
    ],
    comment: "”Fordon får inte föras av den som på grund av sjukdom, uttröttning, påverkan av alkohol, andra stimulerande eller bedövande ämnen eller av andra skäl inte kan föra fordonet på ett betryggande sätt.” (Trafikförordningen)"
  },

  {
    questionText: "Hur ska du tolka skylten på bilden?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/2102.jpg",
    options: [
      ["A. Svänger du höger kommer du direkt ut på E20.", 0],
      ["B. Svänger du höger kommer du först ut på E20, sedan väg 53 och sist väg 230.", 0],
      ["C. Svänger du höger har du möjlighet att ansluta till E20, väg 53 samt väg 230.", 1],
      ["D. För att komma till E20, väg 53 eller väg 230 måste du först åka till centrum.", 0],
    ],
    comment: "”Vägnummer anges endast för vägar i nummergruppen 1–499. Ett märke med streckad bård anger att vägen leder till den väg som vägvisas med det nummer som anges på märket.”"
  },

  {
    questionText: "Det är mörkt ute och du kör med halvljus. På vilket avstånd upptäcker du en fotgängare med reflex?",
    options: [
      ["A. Cirka 75 meter.", 0],
      ["B. Cirka 125 meter.", 1],
      ["C. Cirka 180 meter.", 0],
      ["D. Cirka 300 meter.", 0],
    ],
  },

  {
    questionText: "Kontrolleras bilens utsläpp vid en vanlig besiktning?",
    options: [
      ["A. Ja", 1],
      ["B. Nej", 0],
    ],
    comment: "”Vi gör även en miljökontroll […] När vi kontrollerar bensindrivna bilar mäter vi halterna av koloxid och kolväten vid tomgång samt koloxidhalten och lambdavärdet vid förhöjd tomgång.” (Bilprovningen)"
  },

  {
    questionText: "Du står still med bil A och ska rakt fram. Hur bör du agera med tanke på den röda lastbilen som håller på att svänga in på vägen du kommer från?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/bilar-17.svg",
    options: [
      ["A. Försiktigt runda lastbilen och sedan fortsätta rakt fram.", 0],
      ["B. Tuta och få lastbilen att backa, eftersom lastbilsföraren har väjningsplikt enligt högerregeln.", 0],
      ["C. Backa några meter och släppa fram lastbilen.", 1],
      ["D. Försiktigt köra fram och svänga höger.", 0],
    ],
    comment: "Trots att lastbilen egentligen måste väja för dig enligt högerregeln, är det lämpligast och säkrast att du backar några meter och släpper fram lastbilen. Enbart strikt regeltänkande är inte eftersträvansvärt, du ska visa ”gott omdöme i samspelet med andra trafikanter”. (Trafikverket)"
  },

  {
    questionText: "Vad betyder vägmärket högst upp till vänster?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/7005.jpg",
    options: [
      ["A. Camping finns längre fram.", 0],
      ["B. Rastplats 1 km åt höger.", 0],
      ["C. Vandrarhem 1 000 m åt höger.", 1],
      ["D. Hotell finns på platsen där märket sitter.", 0],
    ],
  },

  {
    questionText: "När slutar områdesmärket på bilden att gälla?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/4084.jpg",
    options: [
      ["A. Efter nästa korsning.", 0],
      ["B. När du passerar en sluttavla eller när det på annat tydligt sätt framgår att anvisningarna på märket inte gäller.", 1],
      ["C. Endast när du passerar en sluttavla eller ett annat vägmärke som rör stannande, parkerande eller både stannande och parkerande.", 0],
      ["D. Endast när du passerar en sluttavla.", 0],
    ],
    comment: "”Märket är uppsatt vid infarterna till området och gäller till den plats där tavla E21, slut på område, är uppsatt eller det på annat tydligt sätt framgår att anvisningarna på märket inte gäller. Inom området kan det förekomma avvikelser från anvisningarna på märket. Dessa avvikelser anges genom andra vägmärken och tilläggstavlor. Anvisningarna på märket gäller även efter sådan avvikelse utan att märket upprepas.”"
  },

  {
    questionText: "Om du kör på en gående, hur stor roll spelar det att du körde i 30 km/h i stället för 50 km/h?",
    options: [
      ["A. Det är mycket större chans att personen överlever.", 1],
      ["B. Det gör ingen skillnad alls.", 0],
      ["C. Det ökar bara marginellt chansen att personen överlever.", 0],
    ],
    comment: "En fotgängare ”löper 80 procents risk att dödas vid en påkörningshastighet om 50 km/tim medan risken att dödas endast är cirka 10 procent vid en hastighet om 30 km/tim.” (Trafikverket)."
  },

  {
    questionText: "När bör du slå på helljuset igen i samband med möte i mörker?",
    options: [
      ["A. I mötesögonblicket.", 1],
      ["B. 5 meter efter mötet.", 0],
      ["C. 20 meter efter mötet.", 0],
    ],
    comment: "”Du ska slå över till helljus igen i mötesögonblicket. Det gäller att återfå en längre siktsträcka så snabbt som möjligt.” (Du och jag i trafiken, upplaga 28, sida 275)"
  },

  {
    questionText: "Vilket alternativ anger något som är farligt nära jordytan men bra högt uppe i atmosfären?",
    options: [
      ["A. Kväveoxid (NOx)", 0],
      ["B. Kolväten (HC)", 0],
      ["C. Ozon", 1],
      ["D. Kolmonoxid (CO) ", 0],
    ],
    comment: "”Det ozon som finns högt uppe i atmosfären skyddar oss mot skadlig UV-strålning. Nere på jorden är ozon däremot skadligt Tillsammans med kväveoxiderna bidrar kolväten till att ozon bildas.” (Trafikverket)"
  },

  {
    questionText: "Din bil har gått sönder på en 30-väg i en tätort. Vad gäller om sikten är god?",
    options: [
      ["A. Du måste sätta upp en varningstriangel 20 meter bakom bilen.", 0],
      ["B. Du måste sätta upp en varningstriangel 50 meter bakom bilen.", 0],
      ["C. Du måste sätta upp en varningstriangel 100 meter bakom bilen.", 0],
      ["D. Du måste inte sätta upp någon varningstriangel.", 1],
    ],
    comment: "”Föraren av ett fordon som ska vara utrustat med en varningstriangel ska sätta ut triangeln när fordonet på grund av en olyckshändelse, ett motorfel eller något liknande har blivit stående på körbanan eller vägrenen där den högsta tillåtna hastigheten är högre än 50 kilometer i timmen och där fordonet inte får stannas eller parkeras”. (Trafikförordningen)"
  },

  {
    questionText: "Vad orsakar fällknivsverkan med släpvagn?",
    options: [
      ["A. Dåliga bromsar på bilen.", 0],
      ["B. Dåliga bromsar på släpvagnen.", 1],
    ],
    comment: "Fällknivsverkan: ”bilen bromsas bättre än släpvagnen.” (Körkortsboken, upplaga 19, sida 173). Bilen bromsar effektivt, men släpvagnen bromsar dåligt. Detta leder till att släpvagnen måste ta vägen någonstans (fart och energi finns fortfarande kvar eftersom släpvagnen inte är inbromsad helt). Det heter fällknivsverkan eftersom släpet då glider åt antingen höger eller vänster och därmed viker ihop sig som en fällkniv mot bilen. Krafterna är så stora att bilen också påverkas och rycks med – mycket trafikfarligt!"
  },

  {
    questionText: "Bilarna på fotot kör i 90 km/h. Vad anser du om avståndet mellan dem?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/3692.jpg",
    options: [
      ["A. Bra, eftersom de håller cirka en stolplängds avstånd.", 0],
      ["B. Dåligt, de bör ha dubbelt så stort avstånd mellan sig.", 1],
    ],
    comment: "Två stolpsektorer, alltså att bilarna är vid varsin stolpe och det finns en stolpe mellan dem, är oftast ett bra avstånd på landsväg. Alltså: STOLPE + 50 meter + STOLPE + 50 meter + STOLPE"
  },

  {
    questionText: "Du krypkör bilen som fotot är taget från. Hur ska du agera om signalerna vid A börjar blinka rött?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/6444.jpg",
    options: [
      ["A. Stanna omedelbart på samma plats som fotot togs.", 0],
      ["B. Stanna precis innan signalen vid A.", 1],
      ["C. Köra fram till signalerna vid B och stanna, eftersom A endast är en förvarning.", 0],
    ],
    comment: "”En förare som har stopplikt eller skall stanna på grund av trafiksignal skall stanna vid stopplinje. Om stopplinje saknas skall föraren stanna omedelbart före signalen”. (Trafikförordningen)"
  },

  {
    questionText: "Vad är sant om last som skjuter ut mindre än en meter framför fordonet?",
    options: [
      ["A. Den måste alltid märkas ut med en rödgul flagga.", 0],
      ["B. Den måste aldrig märkas ut.", 0],
      ["C. Den måste inte märkas ut om den tydligt framgår för andra trafikanter.", 1],
    ],
    comment: "”Last som skjuter ut mindre än en meter framför fordonet behöver dock inte märkas ut om den utskjutande delen tydligt framgår för andra trafikanter.” (Trafikförordningen)"
  },

  {
    questionText: "Lufttrycket i däcken är 50 % över rekommenderat värde. Vad stämmer?",
    options: [
      ["A. Det är bra, eftersom högre lufttryck minskar rullmotståndet och därmed också bränsleförbrukningen.", 0],
      ["B. Det är inte bra, eftersom däcken riskerar att slitas fortare, samtidigt som väggreppet kan blir sämre.", 1],
      ["C. Det är inte bra, eftersom högre lufttryck ökar rullmotståndet och därmed också bränsleförbrukningen.", 0],
    ],
    comment: "”[…] mer än 10–15 procent över det rekommenderade trycket bör man inte ha. […] Höjer man trycket extremt mycket kommer man till en punkt där däcket börjar bukta och den yta som ligger an mot vägbanan minskar. Väggreppet försämras, slitaget ökar kraftigt. Om lufttrycket är för högt märks det också på komforten – bilen känns stötig och hård.” (Trafikverket)"
  },

  {
    questionText: "Du kör bilen som fotot är taget från. Vad gäller i de två korsningarna som kommer?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/4652.jpg",
    options: [
      ["A. I första korsningen har jag väjningsplikt och i andra korsningen har den korsande trafiken väjningsplikt.", 1],
      ["B. I första korsningen har den korsande trafiken väjningsplikt och i andra korsningen har jag väjningsplikt.", 0],
      ["C. Jag har väjningsplikt i båda korsningarna.", 0],
      ["D. Den korsande trafiken har väjningsplikt i båda korsningarna.", 0],
    ],
  },

  {
    questionText: "Hur mycket starksprit (40 %) motsvarar 50 cl folköl med 3,5 volymprocent alkohol?",
    options: [
      ["A. Cirka 4 cl", 1],
      ["B. Cirka 7 cl", 0],
      ["C. Cirka 10 cl", 0],
      ["D. Cirka 13 cl", 0],
    ],
  },

  {
    questionText: "Hur bör du agera om hjulen på bilens högersida hamnar i gruset utanför en hög asfaltskant?",
    imgUrl: "https://cdn.korkortonline.se/images/vagmarken/A27-1.svg",
    options: [
      ["A. Släppa gasen, minska farten mjukt och sedan styra åt vänster med ett fast tag om ratten.", 1],
      ["B. Bromsa in kraftigt och styra åt vänster först när hastigheten är mycket låg.", 0],
      ["C. Omedelbart styra åt vänster med en kraftig och bestämd rattrörelse.", 0],
      ["D. Omedelbart styra åt vänster med en mjuk och långsam rattrörelse.", 0],
    ],
    comment: "”Panikbromsa inte! Släpp i stället gaspedalen och fortsätt parallellt med kanten, medan du mjukt minskar farten. […] När farten sjunkit styr du försiktigt upp på körbanan igen med stadig rattföring.” (Du och jag i trafiken, upplaga 28, sida 245)"
  },

  {
    questionText: "Är det tillåtet att svänga vänster i situationen på bilden?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/2480.jpg",
    options: [
      ["A. Ja, det är tillåtet.", 1],
      ["B. Nej, eftersom påbudsmärket anger att det inte är tillåtet.", 0],
      ["C. Nej, eftersom inga målade pilar finns på vägen.", 0],
    ],
    comment: "Märket anger att du måste köra till höger om refugen om du ska fortsätta rakt fram. Det säger dock inget om vad som gäller vid vänstersväng."
  },

  {
    questionText: "Det är tät kö och möjlighet att köra om saknas. Bakomvarande bil håller för kort avstånd till dig. Hur bör du agera?",
    options: [
      ["A. Trampa på bromspedalen upprepade gånger så att bromslampan tänds.", 0],
      ["B. Öka avståndet till framförvarande fordon.", 1],
      ["C. Ignorera bakomvarande och endast fokusera framåt.", 0],
    ],
    comment: "Om du öker avståndet till framförvarande fordon får du större säkerhetsmarginal och minskar risken för en seriekrock om du blir påkörd bakifrån."
  },

  {
    questionText: "Vad är PM10?",
    options: [
      ["A. En miljöbilsklass.", 0],
      ["B. Ett trafiksäkerhetsmål.", 0],
      ["C. Små skadliga partiklar.", 1],
    ],
    comment: "”Inandningsbara partiklar, PM10, är mikroskopiskt små partiklar. PM10 betyder ’particulate matter 10’ och är massan av de partiklar som har en diameter på mindre än 10 mikrometer (miljondels meter). Dessa partiklar kan vi andas in och de minsta kan ta sig ner i lungorna.” (Trafikverket)"
  },

  {
    questionText: "Vad är ett efterfordon?",
    options: [
      ["A. Ett samlingsnamn för alla släpfordon.", 0],
      ["B. Något som är kopplat till en bil men inte klassas som släpfordon.", 1],
      ["C. Ett släpfordon som är kopplad till en traktor eller motorredskap (klass I och II).", 0],
    ],
    comment: "Efterfordon: ”Ett fordon som är kopplat till en bil, en traktor, ett motorredskap eller ett terrängmotorfordon och som inte är ett släpfordon.” (Lagen om vägtrafikdefinitioner)"
  },

  {
    questionText: "Bör föraren i bilen på fotot förvänta sig att korsande trafik har grönt ljus samtidigt?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/6432.jpg",
    options: [
      ["A. Nej, den gröna pilen indikerar att korsande trafik har rött ljus.", 1],
      ["B. Ja, dock endast korsande fordonstrafik.", 0],
      ["C. Nej, påbudsmärket indikerar att korsande trafik inte förekommer.", 0],
      ["D. Ja, dock endast korsande gångtrafik.", 0],
    ],
    comment: "”När du får grönt ljus i form av pil har alla andra trafikanter som korsar din väg, rött ljus”. (Vägmärken & vägmarkeringar, upplaga 6, sida 26)"
  },

  {
    questionText: "Kan körkortet återkallas om du bryter mot stopplikten?",
    options: [
      ["A. Ja", 1],
      ["B. Nej", 0],
    ],
    comment: "”Ett körkort skall återkallas […] om körkortshavaren […] underlåtit att iaktta stopplikt […] om överträdelsen inte kan anses som ringa”. (Körkortslagen)"
  },

  {
    questionText: "Vad innebär konstruktiv högsta hastighet?",
    options: [
      ["A. Att det inte är lämpligt att köra fortare.", 0],
      ["B. Högsta hastigheten fordonet är byggt för.", 1],
      ["C. Att den högsta tillåtna hastigheten kan ändras.", 0],
    ],
    comment: "Nationalencyklopedin: ”konstruktiv […] bygga upp något; som avser konstruktion.” Om exempelvis Volvo bygger en bil som de säger max ska/får köras i 200 km/h, är det den konstruktiva högsta hastigheten. Om du trimmar bilen så att den kan gå i 230 km/h, är den konstruktiva högsta hastigheten fortfarande 200 km/h, eftersom bilens övriga delar inte är gjorda för högre hastigheter."
  },

  {
    questionText: "Hur många meter per sekund (m/s) är 110 kilometer i timmen (km/h)?",
    options: [
      ["A. Cirka 10 m/s", 0],
      ["B. Cirka 30 m/s", 1],
      ["C. Cirka 50 m/s", 0],
      ["D. Exakt 110 m/s", 0],
    ],
    comment: "Gör om km/h till m/s: 110 / 3,6 = 31 m/s. 3,6 är ett fast tal för att omvandla mellan km/h och m/s. Är det jobbigt att dela med just 3,6 kan du dela först med 3 och sedan med 4 och ta ett värde som ligger mittemellan dem (marginalerna mellan alternativen är oftast stora)."
  },

  {
    questionText: "Bör du dra åt parkeringsbromsen på vintern i fuktigt väder?",
    options: [
      ["A. Ja, det är extra viktigt eftersom däcken har sämre grepp.", 0],
      ["B. Nej, eftersom parkeringsbromsen kan frysa fast.", 1],
    ],
    comment: "”I fuktigt väder ska du enbart använda en låg växel vid parkering. Det finns risk att parkeringsbromsen fryser fast!” (Körkortsboken, upplaga 19, sida 129)"
  },

  {
    questionText: "Du kör bilen som fotot är taget från och håller på att köra om hästtransporten. När bör du slå på helljuset?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/4516.jpg",
    options: [
      ["A. ", 0],
      ["B. ", 1],
      ["C. ", 0],
    ],
    comment: "Du bör slå på ljuset så snart du inte riskerar att blända den andra föraren. Vid B är du jämsides och någon bländningsrisk finns inte, eftersom helljuset riktas långt framåt och inte så mycket åt sidorna."
  },

  {
    questionText: "Vad är sant för breda däck och bränsleförbrukningen?",
    options: [
      ["A. De minskar i regel bränsleförbrukningen.", 0],
      ["B. De gör i regel ingen skillnad på bränsleförbrukningen.", 0],
      ["C. De ökar i regel bränsleförbrukningen.", 1],
    ],
    comment: "”Som regel kräver ett bredare däck mer bränsle än ett smalt.” (Konsumentverket). Detta beror på ökat luftmotstånd och ökad friktion mot marken."
  },

  {
    questionText: "Är det tillåtet att stanna för att lasta av varor vid busshållplatsen?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/5123.jpg",
    options: [
      ["A. Ja, det är endast förbjudet att stanna för avlastning om linjen är heldragen.", 0],
      ["B. Nej, det är inte tillåtet att stanna för avlastning.", 1],
      ["C. Ja, men bara om det kan ske utan hinder för bussarna.", 0],
    ],
    comment: "”På en markerad hållplats för spårvagn, fordon i linjetrafik eller skolskjuts får andra fordon inte stannas eller parkeras annat än för på- och avstigning som kan ske utan hinder för spårvägs-, linje- eller skolskjutstrafiken.” (Trafikförordningen)"
  },

  {
    questionText: "Hur många procent av singelolyckorna sker när det är mörkt ute?",
    options: [
      ["A. Cirka 10 %", 0],
      ["B. Cirka 40 %", 1],
      ["C. Cirka 80 %", 0],
    ],
  },

  {
    questionText: "Vilket alternativ anger något som kan påverka arvsanlagen, orsaka cancer och samtidigt bidra till att bilda marknära ozon?",
    options: [
      ["A. Koldioxid (CO2)", 0],
      ["B. Kolväten (HC)", 1],
      ["C. Kväveoxid (NOx)", 0],
      ["D. Kolmonoxid (CO)", 0],
    ],
    comment: "”Kolväten, HC, i bilavgaserna orsakar cancer och kan påverka arvsanlagen. Tillsammans med kväveoxider bidrar kolväteutsläppen till bildandet av marknära ozon.” (Körkortsboken, upplaga 19, sida 228)"
  },

  {
    questionText: "Vilken typ av sväng får en cyklist göra?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/4083b.jpg",
    options: [
      ["A. Endast A", 0],
      ["B. Endast B", 0],
      ["C. Både A och B", 1],
    ],
    comment: "”Cyklande och förare av moped klass II får […] före en vägkorsning hålla till höger på vägen även när de avser att svänga till vänster.” (Trafikförordningen). Detta eftersom det kan vara både svårt och farlig att välja A när det är tät trafik. B kan vara bättre, eftersom det gör att cyklisten kan stanna vid vägkanten och betrakta den övriga trafiken."
  },

  {
    questionText: "Vilken skylt anger gågata?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/e5-e7-e9-e11.svg",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 1],
    ],
  },

  {
    questionText: "Hur långt får ett fordon eller fordonståg som saknar låsningsfria bromsar maximalt vara?",
    options: [
      ["A. 2,6 meter", 0],
      ["B. 10,0 meter", 0],
      ["C. 24,0 meter", 1],
      ["D. 25,25 meter", 0],
    ],
    comment: "”Ett annat motordrivet fordon än en buss med eller utan ett därtill kopplat fordon får inte föras på andra vägar än enskilda om fordonet eller fordonståget, lasten inräknad, är längre än 24,0 meter. Längden av ett fordonståg, lasten inräknad, får dock uppgå till 25,25 meter om följande villkor är uppfyllda. 1. Varje ingående fordon är utrustat med sådana låsningsfria bromsar och kopplingsanordningar som Transportstyrelsen föreskriver.” (Trafikförordningen)"
  },

  {
    questionText: "Hur räknas stoppsträckan ut?",
    options: [
      ["A. Bromssträckan minus reaktionssträckan.", 0],
      ["B. Reaktionssträckan multiplicerat med bromssträckan.", 0],
      ["C. Reaktionssträckan plus bromssträckan.", 1],
    ],
  },

  {
    questionText: " Du ska köra om en 14 meter lång buss en solig dag i maj. Precis när du är i höjd med bussens bakdel springer ett barn ut framför bussen. Vilken hastighet kan du max ha för att kunna stanna om du reagerar på 1 sekund?",
    options: [
      ["A. 70 km/h", 0],
      ["B. 50 km/h", 0],
      ["C. 30 km/h", 1],
      ["D. 20 km/h", 0],
    ],
    comment: "Reaktionssträckan: stryk nollan i hastigheten * reaktionstiden * 3 => 3 * 1 * 3 = avrunda till 9 meter. Bromssträckan: stryk nollan i hastigheten * stryk nollan i hastigheten * 0,4 => 3 * 3 * 0,4 = 3,6 meter. Stoppsträckan: reaktionssträckan + bromssträckan => 9 + 3,6 = 12,6 meter"
  },

  {
    questionText: "Fotot är taget från din bil och du ska rakt fram mot Vivalla. Vilket alternativ beskriver det lämpligaste sättet att genomföra körfältsbytet på?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/3946.jpg",
    options: [
      ["A. Sänka farten kraftigt, titta i döda vinkeln, titta i backspegeln, blinka vänster och sedan styra åt vänster.", 0],
      ["B. Köra med samma fart, titta i speglarna och döda vinkeln, blinka vänster, titta i döda vinkeln igen och sedan styra åt vänster.", 1],
      ["C. Titta i döda vinkeln och speglarna, öka farten, blinka vänster och sedan långsamt styra åt vänster.", 0],
    ],
  },

  {
    questionText: "Du kör bilen som fotot är taget från. Hur bör du agera?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/3670.jpg",
    options: [
      ["A. Köra in till högerkanten och vänta på att den mötande bilen ska passera cyklisterna.", 0],
      ["B. Fortsätta köra som vanligt.", 1],
      ["C. Passera cyklisterna med extra stort avstånd i sidled genom att köra nära högerkanten.", 0],
    ],
    comment: "Den mötande bilen befinner sig så långt bort att du har hunnit passera cyklisterna innan den mötande bilen kommer ifatt dem (kan ses genom att räkna antalet mittlinjer från dig till cyklisterna och från cyklisterna till mötande bilen, även genom att jämföra cyklisternas storlek med bilen – cyklisterna är betydligt större = bilen är långt bort). Finns det ingen anledning att göra något, är det säkras och bäst att fortsätta som vanligt."
  },

  {
    questionText: "Hur förändras rörelseenergin om du ökar farten från 30 km/h till 90 km/h?",
    options: [
      ["A. Den blir 2 gånger större.", 0],
      ["B. Den blir 4 gånger större.", 0],
      ["C. Den blir 9 gånger större.", 1],
    ],
    comment: "”Rörelseenergin ökar kvadratiskt med ökande fart” (Du och jag i trafiken, upplaga 28, sida 159)"
  },

  {
    questionText: "Du kör bilen som fotot är taget från. Vad är sant?",
    imgUrl: "https://cdn.korkortonline.se/images/teoritest/7166.jpg",
    options: [
      ["A. Det är lämpligt att passera personen med reflexväst först efter kurvan längre fram.", 0],
      ["B. Det är lämpligt att passera personen med reflexväst omgående.", 1],
      ["C. Det är inte tillåtet att passera personen med reflexväst eftersom mittlinjen är heldragen.", 0],
      ["D. Det är inte tillåtet att passera personen med reflexväst eftersom sikten är skymd.", 0],
    ],
  },

  {
    questionText: "",
    imgUrl: "",
    options: [
      ["A. ", 0],
      ["B. ", 0],
      ["C. ", 0],
      ["D. ", 0],
    ],
    comment: ""
  },


];

export default Questions;
