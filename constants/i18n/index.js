/**
 * Guest Info — i18n translations
 * Languages: hr, en, it, de, sl
 */
window.I18N = {
  hr: {
    meta: { title: "Kuća za odmor — Informacije za goste" },
    nav: { brand: "Kuća za odmor", guide: "Vodič za goste", menuAria: "Otvori izbornik stranice" },
    hero: {
      welcome: "Dobrodošli",
      subtitle:
        "Drago nam je što ste naš gost. Ovdje su važne informacije i preporuke kako biste uživali u boravku.",
      imgAlt: "Kuća za odmor uz bazen u zalasku sunca",
    },
    glance: {
      checkIn: "Prijava",
      checkOut: "Odjava",
      wifi: "Wi-Fi",
      wifiValue: "Na routeru",
      deposit: "Polog",
    },
    access: {
      title: "Ulaz na imanje",
      gateTitle: "Glavna kapija ",
      gateDesc:
        "Glavna ulazna kapija otvara se i zatvara ručno — gurnite ili povucite je rukom. Nema daljinskog upravljača niti automatskog otvarača.",
      lockerTitle: "Spremnik za ključ",
      lockerDesc:
        "Ključ od kuće nalazi se u spremniku za ključ na imanju. Za prikaz šifre pritisnite gumb ispod i ostavite broj telefona ili e-mail — koristimo ih isključivo za slanje koda za ulazak.",
      lockerEmailHint:
        "E-mail je poželjan — šifru možemo poslati bez troškova SMS-a ili poruka putem aplikacija.",
      showCodeBtn: "Prikaži šifru spremnika",
      modalTitle: "Šifra spremnika za ključ",
      modalIntro:
        "Unesite broj telefona ili e-mail adresu. Koristimo ih isključivo za slanje koda za ulazak u kuću — ni za što drugo.",
      emailLabel: "E-mail adresa (preporučeno)",
      phoneLabel: "Broj telefona",
      phoneDeliveryNote:
        "Šifra će stići na ovaj broj putem WhatsAppa ili SMS-a. Unesite broj s pozivnim brojem države (npr. +385).",
      or: "ili",
      submitBtn: "Prikaži šifru",
      formError: "Molimo unesite broj telefona ili e-mail adresu.",
      emailError: "Molimo unesite ispravnu e-mail adresu.",
      phoneError:
        "Molimo unesite ispravan broj telefona s pozivnim brojem države (npr. +385 91 123 4567).",
      codeSentPhone:
        "Šifra je poslana na vaš broj putem WhatsAppa ili SMS-a. Ako je ne primite u roku od nekoliko minuta, javite nam se.",
      codeTitle: "Šifra spremnika",
      codeIntro: "Vaša šifra za spremnik za ključ:",
      codeReminder:
        "Zapamtite: vratite ključ u spremnik pri odlasku, ne mijenjajte šifru i uvijek poremetite brojeve na spremniku nakon korištenja.",
      keyTitle: "Ključ od kuće — važno",
      keyOne: "Postoji samo jedan ključ od kuće.",
      keyReturn:
        "Svaki put kada izlazite — i na dan odjave — ostavite ključ u spremniku.",
      keyNoChange: "Ne mijenjajte šifru spremnika.",
      keyScramble:
        "Uvijek poremetite brojeve na spremniku nakon korištenja.",
    },
    guestRegistration: {
      title: "Prijava gostiju (eVisitor)",
      deadline:
        "Molimo dostavite dokumente unutar 3 dana od dolaska putem WhatsAppa ili na dogovoreni način komunikacije — isključivo radi obavljene prijave u sustav eVisitor.",
      who: "Potreban je dokument od svake osobe koja boravi u objektu i ima vlastiti osobni dokument.",
      requirementsTitle: "Zahtjevi za dokumente",
      docTypes:
        "Prihvaćamo isključivo osobne iskaznice ili putovnice. Vozačke dozvole i slični dokumenti nisu valjani.",
      photoQuality:
        "Fotografije ne smiju biti mutne — svi podaci na dokumentu moraju biti jasno vidljivi.",
      idBothSides:
        "Osobna iskaznica: pošaljite fotografije obje strane. Putovnica: svi podaci su na jednoj strani, dovoljna je jedna fotografija.",
      dataTitle: "Podaci potrebni za eVisitor prijavu (za svaku osobu)",
      dataFirstName: "Ime",
      dataLastName: "Prezime",
      dataDocType: "Tip dokumenta (osobna iskaznica ili putovnica)",
      dataDocNumber: "PIN / broj dokumenta",
      dataCountry: "Država",
      dataCity: "Grad prebivališta",
      dataBirthDate: "Datum rođenja",
      privacy:
        "Svi dokumenti se automatski brišu nakon što vas prijavim u sustav.",
      legal:
        "Kao iznajmljivač zakonski sam obavezan prijaviti sve goste koji borave u objektu — u suprotnom riskiram kaznu. Ne brinite o krađi identiteta: dokumenti služe isključivo za službenu prijavu boravka.",
      infoBtnLabel: "Više o eVisitor sustavu",
      infoModalTitle: "Što je eVisitor?",
      infoP1:
        "eVisitor je službeni nacionalni elektronički sustav Republike Hrvatske za prijavu i odjavu turista, kojim upravlja Hrvatska turistička zajednica. Obavezan je za sve pružatelje smještaja od 1. siječnja 2016.",
      infoWhyTitle: "Zašto mi trebaju vaši dokumenti?",
      infoP2:
        "Kao domaćin zakonski sam obavezan prijaviti svakog gosta u ovom sustavu u roku od 24 sata od dolaska. Bez vašeg identifikacijskog dokumenta ne mogu obaviti prijavu i riskiram kaznu od nadležnih tijela.",
      infoDataTitle: "Što se događa s vašim podacima?",
      infoP3:
        "Vaši dokumenti služe isključivo za ovu službenu prijavu. Brišu se odmah nakon što vas unesem u sustav. Ne pohranjujem, ne dijelim niti koristim vaše podatke u bilo koju drugu svrhu.",
      infoVerifyTitle: "Provjerite je li sustav legitiman",
      infoP4:
        "Ako želite sami provjeriti da je eVisitor službeni državni sustav, posjetite ove stranice:",
      infoLinkEvisitor: "Službeni eVisitor portal ↗",
      infoLinkGov: "Vlada RH — Prijava i odjava turista ↗",
    },
    houseRules: {
      title: "Kućni red",
      generalInfo: "Opće informacije",
      poolRules: "Pravila oko bazena",
      childrenPets: "Djeca, ljubimci i kapacitet",
      noiseDamage: "Buka, štete i rasvjeta",
      wifiPassword:
        '<strong class="text-deep font-medium">Wi-Fi lozinka:</strong> Lozinka za Wi-Fi nalazi se na routeru.',
      deposit:
        '<strong class="text-deep font-medium">Polog:</strong> Pri dolasku je potreban polog od 500 € koji se vraća pri odlasku nakon pregleda kuće, ako nema šteta. Štete veće od pologa naplaćuju se dodatno.',
      firewood:
        '<strong class="text-deep font-medium">Drva i roštilj:</strong> Ne osiguravamo drva za kamin ili roštilj. Gosti sami nabavljaju drva, paljenje i fluid za upaljače u lokalnim trgovinama.',
      childrenPetsMess:
        '<strong class="text-deep font-medium">Djeca i ljubimci:</strong> Ako djeca ili ljubimci zaprljaju ili unište nešto u ili na objektu, gosti su odgovorni to očistiti prije odlaska i prijaviti štetu domaćinu.',
      petsPool: "Ljubimci ne smiju u bazen.",
      petsFurniture:
        "Ljubimci ne smiju na krevet, kauč ili drugi namještaj za ležanje.",
      capacity:
        '<strong class="text-deep font-medium">Kapacitet objekta:</strong> Maksimalno 10 osoba (8 ležajeva + 2 pomoćna). U kući dolazi jedan dječji krevet i jedna hranilica. Ako trebate dodatni set, po potrebi me naknadno kontaktirajte — možemo ponuditi još jedan dječji krevet i hranilicu (maks. za 2 bebe). Za dodatni ležaj jedino možemo ponuditi jedan madrac na napuhavanje za 2 osobe.',
      poolGlass:
        "Stakleni predmeti (uključujući čaše za pivo i vino) nisu dopušteni oko ili u bazenu.",
      poolTrash:
        "Molimo pokupite sav otpad oko bazena, u bazenu i u dvorištu te ga pravilno odložite.",
      poolStaffVisit:
        "Ja ili član osoblja možemo povremeno doći na imanje (npr. jednom tjedno) radi provjere i čišćenja bazena.",
      noise:
        '<strong class="text-deep font-medium">Buka:</strong> Glazba i zabave trebaju biti smanjene nakon 22:00 radi mira u susjedstvu.',
      damage:
        '<strong class="text-deep font-medium">Štete i čistoća:</strong> Svaka polomljena stvar odbija se od pologa. Ako štete premašuju polog, dodatne naknade određuje domaćin.',
      lighting:
        '<strong class="text-deep font-medium">Rasvjeta i navodnjavanje:</strong> Svjetla bazena i dvorišta rade na tajmer i pale se navečer. Navodnjavanje travnjaka je ujutro i navečer.',
      locking:
        '<strong class="text-deep font-medium">Zaključavanje:</strong> Molimo zaključajte sva vrata i prozore pri odlasku iz kuće.',
    },
    amenities: {
      title: "Sadržaji kuće",
      kitchen: "Kuhinja",
      kitchenDesc:
        "Potpuno opremljena aparatima, priborom i osnovnim namirnicama",
      laundry: "Praonica",
      laundryDesc: "Perilica rublja i sušilo u kupaonici",
      parking: "Parking",
      parkingDesc: "Besplatan parking na imanju",
    },
    checkInOut: {
      title: "Prijava i odjava",
      checkIn: "Prijava",
      checkOut: "Odjava",
      note: "Javite nam unaprijed ako trebate kasnu odjavu ili ranu prijavu — potrudit ćemo se udovoljiti ako je moguće.",
    },
    restaurants: {
      title: "Preporuke restorana",
      intro: "Evo nekoliko restorana koje toplo preporučujemo:",
      santekDesc: "Janjetina, peka i domaća kuhinja — između Malinske i Šila",
      braceraDesc: "Svježa riba s vlastitog broda i kvarnerski škampi",
      frankopanDesc:
        "Vrhunska riba u starom gradu Krku — rezervacija preporučena",
      nadaDesc: "Legenda u Vrbniku — terasa s pogledom i žlahtina od 1974.",
      portellaDesc:
        "Moderna mediteranska kuhinja u starom gradu — vrlo popularno",
      galijaDesc: "Klasična konoba u starom gradu — pizza iz krušne peći",
      kingsDesc: "Burgeri, brunch i kokteli — otvoreno cijele godine",
      mimiDesc: "Najbolji burgeri i ćevapi u Malinskoj — pristupačne cijene",
      moreOptions: "Više restorana",
      topPick: "Preporučeno",
      hiddenGem: "Skriveni dragulj",
      bookAhead: "Rezerviraj",
    },
    beaches: {
      title: "Najbolje plaže",
      desc: "Istražite najljepše plaže na otoku Krku.",
      link: "Pogledaj najbolje plaže",
    },
    wine: {
      title: "Lokalno vino",
      desc: 'Probajte izvrsnu <strong class="text-deep font-medium">Zlatnu vrbničku žlahtinu</strong>, poznato lokalno vino. Možete posjetiti i vinograd.',
      link: "Kuća vina Ivan Katunar",
    },
    clubs: {
      title: "Klubovi i barovi na plaži",
      diamondDesc: "Najveći klub na otvorenom na Jadranu — ljetni koncerti",
      onyxDesc: "Noćni klub u Puntu — DJ setovi i bendovi uživo (lip–ruj)",
      mulDesc: "Zabave na plaži s DJ-em na plaži hotela Malin",
      rovaDesc: "Bistro i kokteli na plaži Rova uz more",
      moccaDesc: "Opušteni bar na plaži i roštilj na plaži Jert",
      moreOptions: "Više klubova i noćnog života na Krku",
      maps: "Karta ↗",
      website: "Web ↗",
      events: "Program ↗",
    },
    attractions: {
      title: "Lokalne znamenitosti i aktivnosti",
      intro:
        "Popularna mjesta i jednodnevni izleti na Krku — uz službene poveznice za termine, ulaznice i rezervacije.",
      historical: "Povijesne znamenitosti",
      nature: "Priroda i plaže",
      adventure: "Avantura i more",
      cycling: "Biciklizam i šetnje",
      touristInfo: "Turističke informacije i najam brodova",
      frankopan: "Kaštel Frankopan (Krk)",
      frankopanDesc:
        "Srednjovjekovna utvrda iz 12. st. s pogledom na grad Krk — simbol dinastije Frankopan.",
      vrbnik: "Stari grad Vrbnik",
      vrbnikDesc:
        "Srednjovjekovni grad na litici, najuži uličica Klančić i poznati vinogradi žlahtine.",
      cathedral: "Katedrala Uznesenja Bl. Djevice Marije (Krk)",
      cathedralDesc:
        "Jedna od najstarijih katedrala u Hrvatskoj — bazilika iz 5. st. u starom gradu.",
      kosljun: "Samostan Košljun (Punat)",
      kosljunDesc:
        "Franjevački otok s muzejima, knjižnicom i 400 biljnih vrsta — brod iz Punta.",
      baskaTablet: "Bašćanska ploča i crkva sv. Lucije (Jurandvor)",
      baskaTabletDesc:
        "Najstariji spomenik hrvatske glagoljice iz 11. st. — posjet samo uz vođenje.",
      biserujka: "Špilja Biserujka",
      biserujkaDesc:
        "Uređena špilja sa stalaktitima kod Rudine — obilazak traje oko 20 minuta.",
      baska: "Baška i Vela plaža",
      baskaDesc:
        "Najpoznatija plaža otoka i 1,8 km šljunčane obale — idealno za obitelji.",
      moonPlateau: "Moonsko polje (Baška)",
      moonPlateauDesc:
        "Kameni krajolik iznad Baške s panoramskim pogledom — lagani planinarski krug.",
      soline: "Plaža Soline i ljekovito blato (Klimno)",
      solineDesc:
        "Jedna od rijetkih pješčanih plaža — blato za wellness kupke u zaljevu Klimno.",
      oprna: "Plaža Oprna (Stara Baška)",
      oprnaDesc:
        "Skrivena šljunčana uvala bez masovnog turizma — preporučujemo cipelice za stijene.",
      zipline: "Edison Zipline Krk",
      ziplineDesc:
        "8 zipline linija dužine preko 2 km kod Treskavca — popularna obiteljska avantura.",
      plavnik: "Otok Plavnik i Plava špilja",
      plavnikDesc:
        "Brodski izleti s promatranjem dupina, kupanje i gnijezda sokolova krunastih na liticama.",
      glagoliticTrail: "Staza glagoljice (Baška)",
      glagoliticTrailDesc:
        "34 kamene skulpture s glagoljskim slovima od Treskavca do Jurandvora.",
      bikeTours: "Biciklističke ture Krk",
      bikeToursDesc:
        "Organizirane vožnje po 300+ km označenih biciklističkih staza otoka.",
      walkingTours: "Šetnje Krk",
      walkingToursDesc:
        "Vođene šetnje starim gradovima, vinogradima i obalnim stazama.",
      touristBoard: "Turistička zajednica Krk",
      visitKrk: "Visit Krk — službeni portal",
      visitKrkDesc:
        "Događaji, karta znamenitosti i praktične informacije za cijeli otok.",
      rentBoat: "Najam broda Krk",
      tripAdvisor: "Trip Advisor – Krk",
    },
    trash: {
      title: "Raspored odvoza smeća",
      desc: 'Otpad stavite ispred kapije večer prije punjenja — odvoz počinje u <strong class="text-deep font-medium">7:00</strong>. Na rasporedu svaka boja odgovara određenom danu i vrsti otpada.',
      link: "Raspored odvoza – Ponikve",
    },
    shopping: {
      title: "Trgovine i namirnice",
      intro:
        "Glavne trgovine i supermarketi na Krku — dodirnite naziv za upute u Google Mapsu.",
      supermarket: "Supermarket",
      hypermarket: "Hipermarket",
      discountStore: "Diskont",
      localMarket: "Lokalna tržnica",
      hours: "Radno vrijeme:",
      kauflandHours: "pon–sub 7:00 – 22:00",
      tommyHours: "pon–sub 7:00 – 21:00",
      plodineHours: "pon–ned 7:00 – 22:00",
      lidlHours: "pon–sub 7:00 – 21:00",
      konzumKrkHours: "pon–sub 7:00 – 22:00",
      konzumMalinskaHours: "pon–sub 7:00 – 20:00, ned 7:00 – 14:00",
      marketHours: "7:00 – 13:00",
    },
    taxi: {
      title: "Taxi usluge",
      intro:
        "Popularne taxi službe na Krku — dodirnite naziv za web stranicu ili nazovite izravno.",
      phone: "Telefon:",
      taxiKrkDesc:
        "24/7 prijevozi po otoku, transferi do zračne luke i cjenik ruta",
      goldenDesc:
        "Cijeli otok — Malinska, Baška, Punat i transferi do zračne luke",
      ozDesc:
        "Prijevozi po otoku i do zračne luke Rijeka — online rezervacija",
      mileDesc:
        "24/7, plaćanje karticom, transferi do zračne luke i kombi za grupe",
      moreOptions: "Više taxi službi na Krku",
    },
    emergency: {
      title: "Hitni kontakti",
      emergencyNumber: "Hitni broj",
      emergencyDesc: "Policija · vatrogasci · hitna pomoć",
      hospital: "Najbliža bolnica",
      pharmacy: "Ljekarne",
      pharmacyIntro:
        "Ljekarne po otoku Krku — dodirnite naziv za upute u Google Mapsu.",
      phone: "Telefon:",
      healthCenter: "Dom zdravlja Krk",
    },
    footer: {
      brand: "Kuća za odmor",
      message:
        "Nadamo se da ćete uživati u boravku. Za dodatnu pomoć slobodno nas kontaktirajte.",
      location: "Otok Krk, Hrvatska",
      tripAdvisor: "Trip Advisor",
    },
  },

  en: {
    meta: { title: "Holiday Home — Guest Information" },
    nav: { brand: "Holiday Home", guide: "Guest Guide", menuAria: "Open page menu" },
    hero: {
      welcome: "Welcome",
      subtitle:
        "We are delighted to have you as our guest. Here are some essential information and recommendations to help you enjoy your stay.",
      imgAlt: "Holiday home with pool at sunset",
    },
    glance: {
      checkIn: "Check-in",
      checkOut: "Check-out",
      wifi: "Wi-Fi",
      wifiValue: "On the router",
      deposit: "Deposit",
    },
    access: {
      title: "Property Access",
      gateTitle: "Main gate",
      gateDesc:
        "The main entrance gate opens and closes manually — push or pull it by hand. There is no remote control or automatic opener.",
      lockerTitle: "Key locker",
      lockerDesc:
        "The house key is stored in a key locker on the property. To view the locker code, tap the button below and leave a phone number or email — we use it solely to send you the entry code.",
      lockerEmailHint:
        "Email is preferred — we can send the code without SMS or messaging app charges.",
      showCodeBtn: "Show locker code",
      modalTitle: "Key locker code",
      modalIntro:
        "Enter your phone number or email address. We use this exclusively to send you the property entry code — nothing else.",
      emailLabel: "Email address (recommended)",
      phoneLabel: "Phone number",
      phoneDeliveryNote:
        "The code will be sent to this number via WhatsApp or SMS. Include your country code (e.g. +385).",
      or: "or",
      submitBtn: "Reveal code",
      formError: "Please enter a phone number or email address.",
      emailError: "Please enter a valid email address.",
      phoneError:
        "Please enter a valid phone number with country code (e.g. +385 91 123 4567).",
      codeSentPhone:
        "The code has been sent to your number via WhatsApp or SMS. If you don't receive it within a few minutes, please contact us.",
      codeTitle: "Locker code",
      codeIntro: "Your key locker code:",
      codeReminder:
        "Remember: return the key to the locker when leaving, do not change the code, and always scramble the numbers after use.",
      keyTitle: "House key — important",
      keyOne: "There is only one house key.",
      keyReturn:
        "Every time you leave — and on your last day at checkout — return the key to the locker.",
      keyNoChange: "Do not change the locker code.",
      keyScramble: "Always scramble the numbers on the locker after use.",
    },
    guestRegistration: {
      title: "Guest Registration (eVisitor)",
      deadline:
        "Please send your documents within 3 days of arrival via WhatsApp or your agreed communication channel — solely for eVisitor check-in registration.",
      who: "A document is required from every person staying at the property who has their own identity document.",
      requirementsTitle: "Document requirements",
      docTypes:
        "Only national ID cards or passports are accepted. Driver's licences and similar documents are not valid.",
      photoQuality:
        "Photos must not be blurry — all data on the document must be clearly visible.",
      idBothSides:
        "National ID card: send photos of both sides. Passport: all data is on one page — one photo is sufficient.",
      dataTitle: "Data required for eVisitor registration (per person)",
      dataFirstName: "First name",
      dataLastName: "Last name",
      dataDocType: "Document type (ID card or passport)",
      dataDocNumber: "Document PIN / number",
      dataCountry: "Country",
      dataCity: "City of residence",
      dataBirthDate: "Date of birth",
      privacy:
        "All documents are automatically deleted after I register you in the system.",
      legal:
        "As a host I am legally required to register all guests staying at the property — otherwise I face a fine. You do not need to worry about identity theft: documents are used solely for official guest registration.",
      infoBtnLabel: "About the eVisitor system",
      infoModalTitle: "What is eVisitor?",
      infoP1:
        "eVisitor is the official Croatian national electronic system for tourist check-in and check-out, managed by the Croatian National Tourist Board. It has been mandatory for all accommodation providers since 1 January 2016.",
      infoWhyTitle: "Why do I need your documents?",
      infoP2:
        "As your host, I am legally required to register every guest in this system within 24 hours of arrival. Without your identity document, I cannot complete the registration and risk a fine from the authorities.",
      infoDataTitle: "What happens to your data?",
      infoP3:
        "Your documents are used exclusively for this official registration. They are deleted immediately after I enter you into the system. I do not store, share or use your data for any other purpose.",
      infoVerifyTitle: "Verify it is a legitimate state system",
      infoP4:
        "If you would like to confirm that eVisitor is an official Croatian government system, you can visit these websites yourself:",
      infoLinkEvisitor: "Official eVisitor portal ↗",
      infoLinkGov: "Croatian Government — Tourist registration ↗",
    },
    houseRules: {
      title: "House Rules",
      generalInfo: "General Information",
      poolRules: "Pool Area Rules",
      childrenPets: "Children, Pets & Capacity",
      noiseDamage: "Noise, Damage & Lighting",
      wifiPassword:
        '<strong class="text-deep font-medium">Wi-Fi Password:</strong> The password for the Wi-Fi can be found on the router.',
      deposit:
        '<strong class="text-deep font-medium">Deposit:</strong> A deposit of €500 is required upon arrival and will be returned upon departure once the house inspection is completed and no damages are found. Any damages exceeding the deposit will be charged accordingly.',
      firewood:
        '<strong class="text-deep font-medium">Firewood & Grill:</strong> We do not provide firewood for the fireplace or grill. Guests are responsible for purchasing their own supplies, including fire starters and lighter fluid, which can be found in local stores.',
      childrenPetsMess:
        '<strong class="text-deep font-medium">Children & pets:</strong> If children or pets soil or damage anything in or on the property, guests are responsible for cleaning it before departure and reporting the damage to the host.',
      petsPool: "Pets are not allowed in the pool.",
      petsFurniture:
        "Pets are not allowed on beds, sofas or other sleeping furniture.",
      capacity:
        '<strong class="text-deep font-medium">Property capacity:</strong> Maximum 10 guests (8 beds + 2 auxiliary beds). The house includes one baby bed and one high chair. If you need an additional set, please contact me as needed — we can offer one more baby bed and high chair (max. for 2 babies). For extra sleeping space, we can only offer one inflatable mattress for 2 people.',
      poolGlass:
        "No glass items (including beer and wine glasses) are allowed around or in the pool area.",
      poolTrash:
        "Please ensure all trash around the pool, in the pool, and in the yard is picked up and disposed of properly.",
      poolStaffVisit:
        "The host or a staff member may periodically visit the property (e.g. once a week) for pool inspection and cleaning.",
      noise:
        '<strong class="text-deep font-medium">Noise:</strong> Music and parties should be minimized after 10 PM to respect the neighborhood\'s peace.',
      damage:
        '<strong class="text-deep font-medium">Damage & Cleanliness:</strong> Any broken items will be deducted from the deposit. If damages exceed the deposit amount, additional charges will be applied as determined by the host.',
      lighting:
        '<strong class="text-deep font-medium">Lighting & Irrigation:</strong> Pool and yard lights are on a timer and will turn on in the evening. Lawn irrigation is scheduled for early morning and evening.',
      locking:
        '<strong class="text-deep font-medium">Locking Up:</strong> Please ensure all doors and windows are locked when you leave the house.',
    },
    amenities: {
      title: "House Amenities",
      kitchen: "Kitchen",
      kitchenDesc:
        "Fully equipped with appliances, utensils & basic cooking supplies",
      laundry: "Laundry",
      laundryDesc: "Washer & dry rack in the bathroom",
      parking: "Parking",
      parkingDesc: "Free parking on the premises",
    },
    checkInOut: {
      title: "Check-in & Check-out",
      checkIn: "Check-in",
      checkOut: "Check-out",
      note: "Please inform us in advance if you require a late check-out or early check-in, and we will do our best to accommodate your request if possible.",
    },
    restaurants: {
      title: "Restaurant Recommendations",
      intro: "Here are some restaurants we highly recommend:",
      santekDesc:
        "Lamb, dishes baked under the bell and home-style cooking between Malinska and Šilo",
      braceraDesc: "Fresh catch from their own boat and Kvarner langoustines",
      frankopanDesc:
        "Premium seafood in Krk old town — reservations recommended",
      nadaDesc:
        "Iconic cliff-side terrace, local white wine and regional cuisine since 1974",
      portellaDesc: "Modern Mediterranean in Krk old town — very popular",
      galijaDesc: "Classic tavern in the old town — wood-fired pizza",
      kingsDesc: "Burgers, brunch and cocktails — open year-round",
      mimiDesc:
        "Best burgers and grilled minced-meat rolls in Malinska — casual and affordable",
      moreOptions: "More restaurant options",
      topPick: "Top Pick",
      hiddenGem: "Hidden Gem",
      bookAhead: "Book ahead",
    },
    beaches: {
      title: "Best Beaches",
      desc: "Explore the finest beaches on Krk Island.",
      link: "View best beaches",
    },
    wine: {
      title: "Fine Local Wine",
      desc: 'Try the exquisite <strong class="text-deep font-medium">Golden Vrbnik White Wine</strong>, a renowned local variety. You can even visit the winery.',
      link: "Ivan Katunar Winery",
    },
    clubs: {
      title: "Clubs & Beach Bars",
      diamondDesc: "Largest open-air club on the Adriatic — summer concerts",
      onyxDesc: "Nightclub in Punat — DJ sets and live bands (Jun–Sep)",
      mulDesc: "Beach parties with DJs on Hotel Malin beach",
      rovaDesc: "Seaside bistro and cocktails on Rova beach",
      moccaDesc: "Relaxed beach bar and grill on Jert beach",
      moreOptions: "More clubs and nightlife on Krk",
      maps: "Maps ↗",
      website: "Website ↗",
      events: "Events ↗",
    },
    attractions: {
      title: "Local Attractions & Activities",
      intro:
        "Popular sights and day trips on Krk — with official links for times, tickets, and bookings.",
      historical: "Historical Sites",
      nature: "Nature & Beaches",
      adventure: "Adventure & Sea",
      cycling: "Cycling & Walking Tours",
      touristInfo: "Tourist Info & Boat Rentals",
      frankopan: "Frankopan Castle (Krk)",
      frankopanDesc:
        "12th-century fortress above Krk old town — emblem of the Frankopan dynasty.",
      vrbnik: "Vrbnik Old Town",
      vrbnikDesc:
        "Medieval cliff-top town, the narrowest street Klančić, and famous white-wine vineyards.",
      cathedral: "Krk Cathedral of the Assumption",
      cathedralDesc:
        "One of Croatia's oldest cathedrals — a 5th-century basilica in the old town.",
      kosljun: "Košljun Monastery (Punat)",
      kosljunDesc:
        "Franciscan islet with museums and 400 plant species — reach it by boat from Punat.",
      baskaTablet: "Baška Tablet & St. Lucy Church (Jurandvor)",
      baskaTabletDesc:
        "Oldest Croatian Glagolitic monument (1100) — visits are by guided tour only.",
      biserujka: "Biserujka Cave",
      biserujkaDesc:
        "Show cave with stalactites near Rudine — about 20 minutes underground.",
      baska: "Baška and Vela Beach",
      baskaDesc:
        "The island's flagship beach plus 1.8 km of pebble shore — great for families.",
      moonPlateau: "Moon Plateau (Baška)",
      moonPlateauDesc:
        "Otherworldly karst above Baška with panoramic views — easy circular hike.",
      soline: "Soline Beach & Healing Mud (Klimno)",
      solineDesc:
        "One of Krk's few sandy stretches — therapeutic mud baths in Klimno Bay.",
      oprna: "Oprna Beach (Stara Baška)",
      oprnaDesc:
        "Hidden pebble cove without mass tourism — water shoes recommended on the rocks.",
      zipline: "Edison Zipline Krk",
      ziplineDesc:
        "8 lines over 2 km near Treskavac pass — popular family adrenaline ride.",
      plavnik: "Plavnik Island & Blue Cave",
      plavnikDesc:
        "Boat trips with dolphin spotting, swimming stops, and griffon vultures on Plavnik cliffs.",
      glagoliticTrail: "Glagolitic Trail (Baška)",
      glagoliticTrailDesc:
        "34 stone sculptures with Glagolitic letters linking Treskavac to Jurandvor.",
      bikeTours: "Krk Island Bike Tours",
      bikeToursDesc:
        "Guided rides on 300+ km of marked bike routes across the island.",
      walkingTours: "Walking Tours Krk",
      walkingToursDesc:
        "Guided walks through old towns, vineyards, and coastal paths.",
      touristBoard: "Krk Tourist Board",
      visitKrk: "Visit Krk — official portal",
      visitKrkDesc:
        "Events, sights map, and practical info for the whole island.",
      rentBoat: "Rent a Boat Krk",
      tripAdvisor: "Trip Advisor – Krk",
    },
    trash: {
      title: "Trash Schedule",
      desc: 'Please place the trash in front of the gate the evening before once it\'s full, as collection starts at <strong class="text-deep font-medium">7 AM</strong>. On the schedule, each color corresponds to a specific day and type of trash.',
      link: "Trash Collection Schedule – Ponikve",
    },
    shopping: {
      title: "Shopping & Groceries",
      intro:
        "Main supermarkets and grocery stores on Krk — tap a name for directions in Google Maps.",
      supermarket: "Supermarket",
      hypermarket: "Hypermarket",
      discountStore: "Discount store",
      localMarket: "Local Market",
      hours: "Hours:",
      kauflandHours: "Mon–Sat 7 AM – 10 PM",
      tommyHours: "Mon–Sat 7 AM – 9 PM",
      plodineHours: "Mon–Sun 7 AM – 10 PM",
      lidlHours: "Mon–Sat 7 AM – 9 PM",
      konzumKrkHours: "Mon–Sat 7 AM – 10 PM",
      konzumMalinskaHours: "Mon–Sat 7 AM – 8 PM, Sun 7 AM – 2 PM",
      marketHours: "7 AM – 1 PM",
    },
    taxi: {
      title: "Taxi Services",
      intro:
        "Popular taxi services on Krk — tap a name to visit their website or call directly.",
      phone: "Phone:",
      taxiKrkDesc:
        "24/7 island transfers, airport rides and fixed-route pricing",
      goldenDesc:
        "Island-wide service — Malinska, Baška, Punat and airport transfers",
      ozDesc:
        "Transfers across the island and to Rijeka Airport — online booking",
      mileDesc:
        "24/7 service, card payment, airport transfers and group van",
      moreOptions: "More taxi services on Krk",
    },
    emergency: {
      title: "Emergency Contacts",
      emergencyNumber: "Emergency Number",
      emergencyDesc: "Police · fire department · medical emergencies",
      hospital: "Nearest Hospital",
      pharmacy: "Pharmacies",
      pharmacyIntro:
        "Pharmacies across Krk — tap a name for directions in Google Maps.",
      phone: "Phone:",
      healthCenter: "Krk Health Center",
    },
    footer: {
      brand: "Holiday Home",
      message:
        "We hope you have a wonderful time during your stay. If you need any further assistance, please do not hesitate to contact us.",
      location: "Krk Island, Croatia",
      tripAdvisor: "Trip Advisor",
    },
  },

  it: {
    meta: { title: "Casa vacanze — Informazioni per gli ospiti" },
    nav: { brand: "Casa vacanze", guide: "Guida per gli ospiti", menuAria: "Apri menu pagina" },
    hero: {
      welcome: "Benvenuti",
      subtitle:
        "Siamo lieti di avervi come ospiti. Ecco informazioni essenziali e consigli per godervi il soggiorno.",
      imgAlt: "Casa vacanze con piscina al tramonto",
    },
    glance: {
      checkIn: "Check-in",
      checkOut: "Check-out",
      wifi: "Wi-Fi",
      wifiValue: "Sul router",
      deposit: "Deposito",
    },
    access: {
      title: "Accesso alla proprietà",
      gateTitle: "Cancello principale",
      gateDesc:
        "Il cancello d'ingresso si apre e chiude manualmente — spingetelo o tiratelo a mano. Non c'è telecomando né apertura automatica.",
      lockerTitle: "Cassetta chiavi",
      lockerDesc:
        "La chiave di casa si trova in una cassetta chiavi sulla proprietà. Per vedere il codice, premi il pulsante qui sotto e lascia un numero di telefono o un'e-mail — li usiamo esclusivamente per inviarti il codice di accesso.",
      lockerEmailHint:
        "L'e-mail è preferibile — possiamo inviare il codice senza costi SMS o app di messaggistica.",
      showCodeBtn: "Mostra codice cassetta",
      modalTitle: "Codice cassetta chiavi",
      modalIntro:
        "Inserisci il numero di telefono o l'e-mail. Li usiamo esclusivamente per inviarti il codice di accesso — per nient'altro.",
      emailLabel: "Indirizzo e-mail (consigliato)",
      phoneLabel: "Numero di telefono",
      phoneDeliveryNote:
        "Il codice verrà inviato a questo numero via WhatsApp o SMS. Includi il prefisso internazionale (es. +385).",
      or: "oppure",
      submitBtn: "Mostra codice",
      formError: "Inserisci un numero di telefono o un indirizzo e-mail.",
      emailError: "Inserisci un indirizzo e-mail valido.",
      phoneError:
        "Inserisci un numero di telefono valido con prefisso internazionale (es. +385 91 123 4567).",
      codeSentPhone:
        "Il codice è stato inviato al tuo numero via WhatsApp o SMS. Se non lo ricevi entro pochi minuti, contattaci.",
      codeTitle: "Codice cassetta",
      codeIntro: "Il tuo codice della cassetta chiavi:",
      codeReminder:
        "Ricorda: riporta la chiave nella cassetta quando esci, non cambiare il codice e mescola sempre i numeri dopo l'uso.",
      keyTitle: "Chiave di casa — importante",
      keyOne: "C'è una sola chiave di casa.",
      keyReturn:
        "Ogni volta che esci — e l'ultimo giorno al check-out — riporta la chiave nella cassetta.",
      keyNoChange: "Non cambiare il codice della cassetta.",
      keyScramble: "Mescola sempre i numeri sulla cassetta dopo l'uso.",
    },
    guestRegistration: {
      title: "Registrazione ospiti (eVisitor)",
      deadline:
        "Inviate i documenti entro 3 giorni dall'arrivo via WhatsApp o sul canale di comunicazione concordato — esclusivamente per la registrazione eVisitor.",
      who: "È richiesto un documento per ogni persona che soggiorna nella struttura e possiede un proprio documento d'identità.",
      requirementsTitle: "Requisiti per i documenti",
      docTypes:
        "Accettiamo esclusivamente carte d'identità o passaporti. Patenti di guida e documenti simili non sono validi.",
      photoQuality:
        "Le foto non devono essere sfocate — tutti i dati sul documento devono essere chiaramente visibili.",
      idBothSides:
        "Carta d'identità: inviate foto di entrambi i lati. Passaporto: tutti i dati sono su una pagina — una foto è sufficiente.",
      dataTitle: "Dati necessari per la registrazione eVisitor (per persona)",
      dataFirstName: "Nome",
      dataLastName: "Cognome",
      dataDocType: "Tipo di documento (carta d'identità o passaporto)",
      dataDocNumber: "PIN / numero del documento",
      dataCountry: "Paese",
      dataCity: "Città di residenza",
      dataBirthDate: "Data di nascita",
      privacy:
        "Tutti i documenti vengono eliminati automaticamente dopo la registrazione nel sistema.",
      legal:
        "Come host sono legalmente obbligato a registrare tutti gli ospiti che soggiornano nella struttura — altrimenti rischio una multa. Non preoccupatevi del furto d'identità: i documenti servono esclusivamente per la registrazione ufficiale del soggiorno.",
      infoBtnLabel: "Informazioni su eVisitor",
      infoModalTitle: "Cos'è eVisitor?",
      infoP1:
        "eVisitor è il sistema elettronico nazionale ufficiale della Croazia per la registrazione e cancellazione dei turisti, gestito dall'Ente nazionale del turismo croato. È obbligatorio per tutti i fornitori di alloggio dal 1° gennaio 2016.",
      infoWhyTitle: "Perché ho bisogno dei vostri documenti?",
      infoP2:
        "Come host sono legalmente obbligato a registrare ogni ospite in questo sistema entro 24 ore dall'arrivo. Senza il vostro documento d'identità non posso completare la registrazione e rischio una multa.",
      infoDataTitle: "Cosa succede ai vostri dati?",
      infoP3:
        "I vostri documenti sono usati esclusivamente per questa registrazione ufficiale. Vengono eliminati subito dopo l'inserimento nel sistema. Non conservo, condivido o uso i vostri dati per altri scopi.",
      infoVerifyTitle: "Verificate che sia un sistema statale legittimo",
      infoP4:
        "Se volete confermare che eVisitor è un sistema governativo ufficiale croato, potete visitare questi siti:",
      infoLinkEvisitor: "Portale ufficiale eVisitor ↗",
      infoLinkGov: "Governo croato — Registrazione turisti ↗",
    },
    houseRules: {
      title: "Regolamento",
      generalInfo: "Informazioni generali",
      poolRules: "Regole area piscina",
      noiseDamage: "Rumore, danni e illuminazione",
      wifiPassword:
        '<strong class="text-deep font-medium">Password Wi-Fi:</strong> La password del Wi-Fi si trova sul router.',
      deposit:
        "<strong class=\"text-deep font-medium\">Deposito:</strong> È richiesto un deposito di 500 € all'arrivo, restituito alla partenza dopo l'ispezione se non ci sono danni. Danni superiori al deposito saranno addebitati.",
      firewood:
        '<strong class="text-deep font-medium">Legna e barbecue:</strong> Non forniamo legna per camino o barbecue. Gli ospiti devono acquistare legna, accendifuoco e fluido negli negozi locali.',
      childrenPetsMess:
        '<strong class="text-deep font-medium">Bambini e animali:</strong> Se bambini o animali sporcano o danneggiano qualcosa dentro o fuori la struttura, gli ospiti sono responsabili della pulizia prima della partenza e della segnalazione del danno all\'host.',
      petsPool: "Gli animali non sono ammessi in piscina.",
      petsFurniture:
        "Gli animali non sono ammessi su letti, divani o altri mobili per dormire.",
      capacity:
        '<strong class="text-deep font-medium">Capienza:</strong> Massimo 10 ospiti (8 posti letto + 2 ausiliari). La casa include un lettino per neonati e un seggiolone. Per un set aggiuntivo, contattatemi se necessario — possiamo offrire un altro lettino e seggiolone (max. per 2 neonati). Per un letto extra possiamo offrire solo un materassino gonfiabile per 2 persone.',
      poolGlass:
        "Non sono ammessi oggetti in vetro (inclusi bicchieri di birra e vino) intorno o nella piscina.",
      poolTrash:
        "Raccogliete tutti i rifiuti intorno alla piscina, nella piscina e nel giardino e smaltiteli correttamente.",
      poolStaffVisit:
        "L'host o un membro dello staff può visitare periodicamente la proprietà (es. una volta a settimana) per ispezione e pulizia della piscina.",
      noise:
        '<strong class="text-deep font-medium">Rumore:</strong> Musica e feste devono essere ridotte dopo le 22:00 per rispettare la tranquillità del vicinato.',
      damage:
        '<strong class="text-deep font-medium">Danni e pulizia:</strong> Oggetti rotti saranno detratti dal deposito. Se i danni superano il deposito, verranno applicati ulteriori addebiti.',
      lighting:
        '<strong class="text-deep font-medium">Illuminazione e irrigazione:</strong> Le luci di piscina e giardino sono a timer e si accendono la sera. L\'irrigazione del prato è al mattino presto e la sera.',
      locking:
        '<strong class="text-deep font-medium">Chiusura:</strong> Assicuratevi di chiudere porte e finestre quando uscite di casa.',
    },
    amenities: {
      title: "Servizi della casa",
      kitchen: "Cucina",
      kitchenDesc:
        "Completamente attrezzata con elettrodomestici, utensili e forniture base",
      laundry: "Lavanderia",
      laundryDesc: "Lavatrice e stendino in bagno",
      parking: "Parcheggio",
      parkingDesc: "Parcheggio gratuito nella proprietà",
    },
    checkInOut: {
      title: "Check-in e check-out",
      checkIn: "Check-in",
      checkOut: "Check-out",
      note: "Informateci in anticipo se avete bisogno di check-out tardivo o check-in anticipato — faremo il possibile per accontentarvi.",
    },
    restaurants: {
      title: "Ristoranti consigliati",
      intro: "Ecco alcuni ristoranti che consigliamo vivamente:",
      santekDesc:
        "Agnello, piatti cotti sotto la campana e cucina casalinga — tra Malinska e Šilo",
      braceraDesc: "Pesce fresco dalla propria barca e scampi del Quarnaro",
      frankopanDesc:
        "Pesce pregiato nel centro storico di Krk — prenotazione consigliata",
      nadaDesc:
        "Terrazza iconica sulla scogliera, vino bianco locale e cucina regionale dal 1974",
      portellaDesc: "Mediterraneo moderno nel centro storico — molto popolare",
      galijaDesc:
        "Osteria tradizionale nel centro storico — pizza al forno a legna",
      kingsDesc: "Hamburger, colazione e cocktail — aperto tutto l'anno",
      mimiDesc:
        "I migliori hamburger e cevapcici a Malinska — informale e conveniente",
      moreOptions: "Altri ristoranti",
      topPick: "Scelta consigliata",
      hiddenGem: "Gioiello nascosto",
      bookAhead: "Prenota",
    },
    beaches: {
      title: "Le migliori spiagge",
      desc: "Esplorate le spiagge più belle dell'isola di Krk.",
      link: "Vedi le migliori spiagge",
    },
    wine: {
      title: "Vino locale",
      desc: 'Provate l\'eccellente <strong class="text-deep font-medium">Žlahtina dorata di Vrbnik</strong>, un rinomato vino bianco locale. Potete anche visitare la cantina.',
      link: "Cantina Ivan Katunar",
    },
    clubs: {
      title: "Local notturni e bar sulla spiaggia",
      diamondDesc:
        "Il più grande club all'aperto dell'Adriatico — concerti estivi",
      onyxDesc: "Discoteca a Punat — DJ set e band dal vivo (giu–set)",
      mulDesc: "Feste in spiaggia con DJ sulla spiaggia dell'Hotel Malin",
      rovaDesc: "Bistrot e cocktail sulla spiaggia di Rova",
      moccaDesc: "Bar sulla spiaggia rilassato e griglia a Jert",
      moreOptions: "Altri club e vita notturna a Krk",
      maps: "Mappa ↗",
      website: "Sito ↗",
      events: "Eventi ↗",
    },
    attractions: {
      title: "Attrazioni e attività locali",
      intro:
        "Luoghi popolari ed escursioni sull'isola di Krk — con link ufficiali per orari, biglietti e prenotazioni.",
      historical: "Siti storici",
      nature: "Natura e spiagge",
      adventure: "Avventura e mare",
      cycling: "Ciclismo e passeggiate",
      touristInfo: "Info turistiche e noleggio barche",
      frankopan: "Castello Frankopan (Krk)",
      frankopanDesc:
        "Fortezza medievale del XII sec. sul centro storico — simbolo della dinastia Frankopan.",
      vrbnik: "Centro storico di Vrbnik",
      vrbnikDesc:
        "Borgo medievale sulla rupe, vicolo Klančić e famosi vigneti di vino bianco.",
      cathedral: "Cattedrale dell'Assunta (Krk)",
      cathedralDesc:
        "Una delle cattedrali più antiche della Croazia — basilica del V sec. nel centro storico.",
      kosljun: "Monastero di Košljun (Punat)",
      kosljunDesc:
        "Isolotto francescano con musei e 400 specie vegetali — si raggiunge in barca da Punat.",
      baskaTablet: "Placa di Baška e chiesa di S. Lucia (Jurandvor)",
      baskaTabletDesc:
        "Il più antico monumento glagolitico croato (1100) — visite solo con guida.",
      biserujka: "Grotta Biserujka",
      biserujkaDesc:
        "Grotta turistica con stalattiti vicino a Rudine — visita di circa 20 minuti.",
      baska: "Baška e Vela spiaggia",
      baskaDesc:
        "La spiaggia più famosa dell'isola e 1,8 km di ciottoli — ideale per famiglie.",
      moonPlateau: "Altopiano lunare (Baška)",
      moonPlateauDesc:
        "Paesaggio carsico sopra Baška con vista panoramica — anello escursionistico facile.",
      soline: "Spiaggia Soline e fango curativo (Klimno)",
      solineDesc:
        "Una delle poche spiagge sabbiose — bagni di fango terapeutico nella baia di Klimno.",
      oprna: "Spiaggia Oprna (Stara Baška)",
      oprnaDesc:
        "Cala nascosta senza mass tourism — consigliate scarpe da scoglio.",
      zipline: "Edison Zipline Krk",
      ziplineDesc:
        "8 linee per oltre 2 km al passo Treskavac — avventura adrenalinica per famiglie.",
      plavnik: "Isola Plavnik e Grotta Azzurra",
      plavnikDesc:
        "Escursioni in barca con delfini, bagni e grifoni sulle scogliere di Plavnik.",
      glagoliticTrail: "Sentiero glagolitico (Baška)",
      glagoliticTrailDesc:
        "34 sculture in pietra con lettere glagolitiche da Treskavac a Jurandvor.",
      bikeTours: "Tour in bicicletta Krk",
      bikeToursDesc:
        "Pedalate guidate su oltre 300 km di piste ciclabili segnalate sull'isola.",
      walkingTours: "Passeggiate guidate Krk",
      walkingToursDesc:
        "Tour a piedi tra borghi antichi, vigneti e sentieri costieri.",
      touristBoard: "Ufficio turistico Krk",
      visitKrk: "Visit Krk — portale ufficiale",
      visitKrkDesc:
        "Eventi, mappa delle attrazioni e informazioni pratiche per tutta l'isola.",
      rentBoat: "Noleggio barche Krk",
      tripAdvisor: "Trip Advisor – Krk",
    },
    trash: {
      title: "Raccolta rifiuti",
      desc: 'Mettete i rifiuti davanti al cancello la sera prima che siano pieni — la raccolta inizia alle <strong class="text-deep font-medium">7:00</strong>. Ogni colore corrisponde a un giorno e tipo di rifiuto.',
      link: "Calendario raccolta – Ponikve",
    },
    shopping: {
      title: "Spesa e negozi",
      intro:
        "Principali supermercati e negozi alimentari a Krk — tocca il nome per le indicazioni su Google Maps.",
      supermarket: "Supermercato",
      hypermarket: "Ipermercato",
      discountStore: "Discount",
      localMarket: "Mercato locale",
      hours: "Orari:",
      kauflandHours: "lun–sab 7:00 – 22:00",
      tommyHours: "lun–sab 7:00 – 21:00",
      plodineHours: "lun–dom 7:00 – 22:00",
      lidlHours: "lun–sab 7:00 – 21:00",
      konzumKrkHours: "lun–sab 7:00 – 22:00",
      konzumMalinskaHours: "lun–sab 7:00 – 20:00, dom 7:00 – 14:00",
      marketHours: "7:00 – 13:00",
    },
    taxi: {
      title: "Servizi taxi",
      intro:
        "Servizi taxi popolari a Krk — tocca il nome per il sito web o chiama direttamente.",
      phone: "Telefono:",
      taxiKrkDesc:
        "Transfer 24/7 sull'isola, aeroporto e prezzi fissi per tratta",
      goldenDesc:
        "Tutto l'isola — Malinska, Baška, Punat e transfer aeroporto",
      ozDesc:
        "Transfer sull'isola e aeroporto di Rijeka — prenotazione online",
      mileDesc:
        "Servizio 24/7, pagamento con carta, aeroporto e van per gruppi",
      moreOptions: "Altri taxi a Krk",
    },
    emergency: {
      title: "Contatti di emergenza",
      emergencyNumber: "Numero di emergenza",
      emergencyDesc: "Polizia · vigili del fuoco · emergenze mediche",
      hospital: "Ospedale più vicino",
      pharmacy: "Farmacie",
      pharmacyIntro:
        "Farmacie sull'isola di Krk — tocca il nome per le indicazioni su Google Maps.",
      phone: "Telefono:",
      healthCenter: "Centro sanitario di Krk",
    },
    footer: {
      brand: "Casa vacanze",
      message:
        "Vi auguriamo un soggiorno meraviglioso. Per qualsiasi assistenza, non esitate a contattarci.",
      location: "Isola di Krk, Croazia",
      tripAdvisor: "Trip Advisor",
    },
  },

  de: {
    meta: { title: "Ferienhaus — Gästeinformationen" },
    nav: { brand: "Ferienhaus", guide: "Gästeführer", menuAria: "Seitenmenü öffnen" },
    hero: {
      welcome: "Willkommen",
      subtitle:
        "Wir freuen uns, Sie als Gast begrüßen zu dürfen. Hier finden Sie wichtige Informationen und Empfehlungen für Ihren Aufenthalt.",
      imgAlt: "Ferienhaus mit Pool bei Sonnenuntergang",
    },
    glance: {
      checkIn: "Check-in",
      checkOut: "Check-out",
      wifi: "WLAN",
      wifiValue: "Am Router",
      deposit: "Kaution",
    },
    access: {
      title: "Zugang zur Unterkunft",
      gateTitle: "Haupttor",
      gateDesc:
        "Das Haupteingangstor öffnet und schließt sich manuell — per Hand schieben oder ziehen. Es gibt keine Fernbedienung oder automatische Öffnung.",
      lockerTitle: "Schlüsseltresor",
      lockerDesc:
        "Der Hausschlüssel befindet sich in einem Schlüsseltresor auf dem Grundstück. Um den Code zu sehen, tippen Sie auf den Button unten und hinterlassen Sie Telefonnummer oder E-Mail — wir verwenden diese ausschließlich zum Senden des Zugangscodes.",
      lockerEmailHint:
        "E-Mail ist bevorzugt — wir können den Code ohne SMS- oder Messenger-Kosten senden.",
      showCodeBtn: "Tresor-Code anzeigen",
      modalTitle: "Schlüsseltresor-Code",
      modalIntro:
        "Geben Sie Ihre Telefonnummer oder E-Mail-Adresse ein. Wir verwenden diese ausschließlich zum Senden des Zugangscodes — für nichts anderes.",
      emailLabel: "E-Mail-Adresse (empfohlen)",
      phoneLabel: "Telefonnummer",
      phoneDeliveryNote:
        "Der Code wird an diese Nummer per WhatsApp oder SMS gesendet. Bitte Ländervorwahl angeben (z. B. +385).",
      or: "oder",
      submitBtn: "Code anzeigen",
      formError: "Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse ein.",
      emailError: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      phoneError:
        "Bitte geben Sie eine gültige Telefonnummer mit Ländervorwahl ein (z. B. +385 91 123 4567).",
      codeSentPhone:
        "Der Code wurde an Ihre Nummer per WhatsApp oder SMS gesendet. Falls er nicht innerhalb weniger Minuten ankommt, kontaktieren Sie uns.",
      codeTitle: "Tresor-Code",
      codeIntro: "Ihr Schlüsseltresor-Code:",
      codeReminder:
        "Denken Sie daran: Schlüssel beim Verlassen zurück in den Tresor, Code nicht ändern und Zahlen nach Gebrauch immer durcheinander drehen.",
      keyTitle: "Hausschlüssel — wichtig",
      keyOne: "Es gibt nur einen Hausschlüssel.",
      keyReturn:
        "Jedes Mal wenn Sie gehen — und am Abreisetag — legen Sie den Schlüssel zurück in den Tresor.",
      keyNoChange: "Ändern Sie nicht den Tresor-Code.",
      keyScramble:
        "Drehen Sie die Zahlen am Tresor nach Gebrauch immer durcheinander.",
    },
    guestRegistration: {
      title: "Gästeregistrierung (eVisitor)",
      deadline:
        "Bitte senden Sie Ihre Dokumente innerhalb von 3 Tagen nach Ankunft per WhatsApp oder über den vereinbarten Kommunikationsweg — ausschließlich für die eVisitor-Registrierung.",
      who: "Ein Dokument ist von jeder Person erforderlich, die in der Unterkunft übernachtet und einen eigenen Ausweis besitzt.",
      requirementsTitle: "Anforderungen an Dokumente",
      docTypes:
        "Es werden ausschließlich Personalausweise oder Reisepässe akzeptiert. Führerscheine und ähnliche Dokumente sind nicht gültig.",
      photoQuality:
        "Fotos dürfen nicht unscharf sein — alle Daten auf dem Dokument müssen klar erkennbar sein.",
      idBothSides:
        "Personalausweis: Fotos beider Seiten senden. Reisepass: alle Daten auf einer Seite — ein Foto genügt.",
      dataTitle: "Für eVisitor benötigte Daten (pro Person)",
      dataFirstName: "Vorname",
      dataLastName: "Nachname",
      dataDocType: "Dokumenttyp (Personalausweis oder Reisepass)",
      dataDocNumber: "PIN / Dokumentennummer",
      dataCountry: "Land",
      dataCity: "Wohnort",
      dataBirthDate: "Geburtsdatum",
      privacy:
        "Alle Dokumente werden nach der Registrierung im System automatisch gelöscht.",
      legal:
        "Als Vermieter bin ich gesetzlich verpflichtet, alle Gäste zu registrieren — andernfalls droht mir eine Geldstrafe. Keine Sorge wegen Identitätsdiebstahl: Dokumente dienen ausschließlich der offiziellen Gästeregistrierung.",
      infoBtnLabel: "Mehr über eVisitor",
      infoModalTitle: "Was ist eVisitor?",
      infoP1:
        "eVisitor ist das offizielle kroatische nationale elektronische System für Touristen-An- und Abmeldung, verwaltet von der Kroatischen Nationalen Tourismusorganisation. Seit dem 1. Januar 2016 ist es für alle Beherbergungsanbieter Pflicht.",
      infoWhyTitle: "Warum benötige ich Ihre Dokumente?",
      infoP2:
        "Als Gastgeber bin ich gesetzlich verpflichtet, jeden Gast innerhalb von 24 Stunden nach Ankunft in diesem System zu registrieren. Ohne Ihren Ausweis kann ich die Registrierung nicht abschließen und riskiere ein Bußgeld.",
      infoDataTitle: "Was passiert mit Ihren Daten?",
      infoP3:
        "Ihre Dokumente werden ausschließlich für diese offizielle Registrierung verwendet. Sie werden sofort nach der Eintragung ins System gelöscht. Ich speichere, teile oder nutze Ihre Daten nicht für andere Zwecke.",
      infoVerifyTitle: "Prüfen Sie, ob es ein legitimes Staatssystem ist",
      infoP4:
        "Wenn Sie bestätigen möchten, dass eVisitor ein offizielles kroatisches Regierungssystem ist, besuchen Sie diese Websites:",
      infoLinkEvisitor: "Offizielles eVisitor-Portal ↗",
      infoLinkGov: "Kroatische Regierung — Touristenregistrierung ↗",
    },
    houseRules: {
      title: "Hausregeln",
      generalInfo: "Allgemeine Informationen",
      poolRules: "Poolbereich-Regeln",
      childrenPets: "Kinder, Haustiere & Kapazität",
      noiseDamage: "Lärm, Schäden & Beleuchtung",
      wifiPassword:
        '<strong class="text-deep font-medium">WLAN-Passwort:</strong> Das WLAN-Passwort befindet sich am Router.',
      deposit:
        '<strong class="text-deep font-medium">Kaution:</strong> Bei Ankunft ist eine Kaution von 500 € erforderlich. Sie wird bei Abreise nach der Inspektion zurückerstattet, sofern keine Schäden vorliegen. Höhere Schäden werden zusätzlich berechnet.',
      firewood:
        '<strong class="text-deep font-medium">Holz & Grill:</strong> Wir stellen kein Holz für Kamin oder Grill bereit. Gäste kaufen Holz, Anzünder und Flüssigkeit in lokalen Geschäften.',
      childrenPetsMess:
        '<strong class="text-deep font-medium">Kinder & Haustiere:</strong> Wenn Kinder oder Haustiere etwas in oder auf dem Grundstück verschmutzen oder beschädigen, sind Gäste verpflichtet, es vor der Abreise zu reinigen und den Schaden dem Gastgeber zu melden.',
      petsPool: "Haustiere sind im Pool nicht erlaubt.",
      petsFurniture:
        "Haustiere sind auf Betten, Sofas oder anderem Schlafmöbel nicht erlaubt.",
      capacity:
        '<strong class="text-deep font-medium">Kapazität:</strong> Maximal 10 Gäste (8 Betten + 2 Zusatzbetten). Im Haus sind ein Babybett und ein Hochstuhl vorhanden. Für ein zusätzliches Set kontaktieren Sie mich bei Bedarf — wir können ein weiteres Babybett und einen Hochstuhl anbieten (max. für 2 Babys). Als zusätzlichen Schlafplatz können wir nur eine aufblasbare Matratze für 2 Personen anbieten.',
      poolGlass:
        "Glasgegenstände (einschließlich Bier- und Weingläser) sind im Poolbereich nicht erlaubt.",
      poolTrash:
        "Bitte sammeln Sie allen Müll um den Pool, im Pool und im Garten auf und entsorgen Sie ihn ordnungsgemäß.",
      poolStaffVisit:
        "Der Gastgeber oder ein Mitarbeiter kann regelmäßig das Grundstück besuchen (z. B. einmal pro Woche) zur Poolkontrolle und -reinigung.",
      noise:
        '<strong class="text-deep font-medium">Lärm:</strong> Musik und Partys sollten nach 22 Uhr reduziert werden, um die Nachbarschaft zu respektieren.',
      damage:
        '<strong class="text-deep font-medium">Schäden & Sauberkeit:</strong> Kaputte Gegenstände werden von der Kaution abgezogen. Übersteigen Schäden die Kaution, werden zusätzliche Gebühren erhoben.',
      lighting:
        '<strong class="text-deep font-medium">Beleuchtung & Bewässerung:</strong> Pool- und Gartenbeleuchtung läuft per Timer und schaltet sich abends ein. Rasenbewässerung erfolgt früh morgens und abends.',
      locking:
        '<strong class="text-deep font-medium">Abschließen:</strong> Bitte alle Türen und Fenster verschließen, wenn Sie das Haus verlassen.',
    },
    amenities: {
      title: "Ausstattung",
      kitchen: "Küche",
      kitchenDesc:
        "Voll ausgestattet mit Geräten, Utensilien und Grundvorräten",
      laundry: "Wäsche",
      laundryDesc: "Waschmaschine und Wäscheständer im Bad",
      parking: "Parkplatz",
      parkingDesc: "Kostenloser Parkplatz auf dem Grundstück",
    },
    checkInOut: {
      title: "Check-in & Check-out",
      checkIn: "Check-in",
      checkOut: "Check-out",
      note: "Bitte informieren Sie uns im Voraus, wenn Sie einen späten Check-out oder frühen Check-in benötigen — wir versuchen, Ihren Wunsch zu erfüllen.",
    },
    restaurants: {
      title: "Restaurant-Empfehlungen",
      intro: "Hier sind einige Restaurants, die wir sehr empfehlen:",
      santekDesc:
        "Lamm, Speisen unter der Glocke und Hausmannskost — zwischen Malinska und Šilo",
      braceraDesc: "Frischer Fang vom eigenen Boot und Kvarner-Garnelen",
      frankopanDesc:
        "Erstklassiger Fisch in Krks Altstadt — Reservierung empfohlen",
      nadaDesc:
        "Legendäre Klippenterrasse, lokaler Weißwein und regionale Küche seit 1974",
      portellaDesc: "Modernes Mittelmeer in Krks Altstadt — sehr beliebt",
      galijaDesc:
        "Traditionelles Gasthaus in der Altstadt — Pizza aus dem Holzofen",
      kingsDesc: "Burger, Frühstück und Cocktails — ganzjährig geöffnet",
      mimiDesc:
        "Beste Burger und gegrillte Fleischröllchen in Malinska — locker und günstig",
      moreOptions: "Weitere Restaurants",
      topPick: "Top-Tipp",
      hiddenGem: "Geheimtipp",
      bookAhead: "Reservieren",
    },
    beaches: {
      title: "Beste Strände",
      desc: "Entdecken Sie die schönsten Strände auf der Insel Krk.",
      link: "Beste Strände ansehen",
    },
    wine: {
      title: "Lokaler Wein",
      desc: 'Probieren Sie den exquisiten <strong class="text-deep font-medium">Goldene Vrbniker Weißwein (Žlahtina)</strong>, eine renommierte lokale Rebsorte. Sie können auch das Weingut besuchen.',
      link: "Weingut Ivan Katunar",
    },
    clubs: {
      title: "Clubs und Strandbars",
      diamondDesc: "Größter Open-Air-Club an der Adria — Sommerkonzerte",
      onyxDesc: "Nachtclub in Punat — DJ-Sets und Live-Bands (Jun–Sep)",
      mulDesc: "Strandpartys mit DJs am Strand des Hotel Malin",
      rovaDesc: "Bistro und Cocktails am Rova-Strand am Meer",
      moccaDesc: "Entspannter Strandbar und Grill am Jert-Strand",
      moreOptions: "Weitere Clubs und Nachtleben auf Krk",
      maps: "Karte ↗",
      website: "Webseite ↗",
      events: "Programm ↗",
    },
    attractions: {
      title: "Lokale Sehenswürdigkeiten",
      intro:
        "Beliebte Ausflugsziele auf Krk — mit offiziellen Links zu Zeiten, Tickets und Buchungen.",
      historical: "Historische Stätten",
      nature: "Natur & Strände",
      adventure: "Abenteuer & Meer",
      cycling: "Rad- & Wandertouren",
      touristInfo: "Touristeninfo & Bootsverleih",
      frankopan: "Frankopan-Burg (Krk)",
      frankopanDesc:
        "Burg aus dem 12. Jh. über der Altstadt — Wahrzeichen der Frankopan-Dynastie.",
      vrbnik: "Altstadt Vrbnik",
      vrbnikDesc:
        "Mittelalterliche Klippenstadt, engste Gasse Klančić und berühmte Weißwein-Weinberge.",
      cathedral: "Kathedrale Mariä Himmelfahrt (Krk)",
      cathedralDesc:
        "Eine der ältesten Kathedralen Kroatiens — Basilika aus dem 5. Jh. in der Altstadt.",
      kosljun: "Kloster Košljun (Punat)",
      kosljunDesc:
        "Franziskaner-Insel mit Museen und 400 Pflanzenarten — Bootsfahrt ab Punat.",
      baskaTablet: "Baška-Tafel & Kirche St. Lucia (Jurandvor)",
      baskaTabletDesc:
        "Ältestes glagolitisches Denkmal Kroatiens (1100) — Besuch nur mit Führung.",
      biserujka: "Höhle Biserujka",
      biserujkaDesc:
        "Schauhöhle mit Stalaktiten bei Rudine — Besichtigung ca. 20 Minuten.",
      baska: "Baška und Vela Strand",
      baskaDesc:
        "Insel-Hauptstrand und 1,8 km Kiesküste — ideal für Familien.",
      moonPlateau: "Mondplateau (Baška)",
      moonPlateauDesc:
        "Karstlandschaft über Baška mit Panoramablick — leichte Rundwanderung.",
      soline: "Strand Soline & Heilschlamm (Klimno)",
      solineDesc:
        "Einer der wenigen Sandstrände — therapeutische Schlammbäder in der Bucht Klimno.",
      oprna: "Strand Oprna (Stara Baška)",
      oprnaDesc:
        "Versteckte Kiesbucht ohne Massentourismus — Wasserschuhe auf den Felsen empfohlen.",
      zipline: "Edison Zipline Krk",
      ziplineDesc:
        "8 Seilen über 2 km am Treskavac-Pass — beliebtes Familien-Abenteuer.",
      plavnik: "Insel Plavnik & Blaue Grotte",
      plavnikDesc:
        "Bootsausflüge mit Delfinen, Badestopps und Geiern an den Klippen von Plavnik.",
      glagoliticTrail: "Glagolitische Strecke (Baška)",
      glagoliticTrailDesc:
        "34 Steinskulpturen mit glagolitischen Buchstaben von Treskavac bis Jurandvor.",
      bikeTours: "Radtouren Krk",
      bikeToursDesc:
        "Geführte Touren auf über 300 km markierter Radwege der Insel.",
      walkingTours: "Wandertouren Krk",
      walkingToursDesc:
        "Geführte Spaziergänge durch Altstädte, Weinberge und Küstenpfade.",
      touristBoard: "Tourismusverband Krk",
      visitKrk: "Visit Krk — offizielles Portal",
      visitKrkDesc:
        "Veranstaltungen, Sehenswürdigkeitenkarte und praktische Infos für die ganze Insel.",
      rentBoat: "Bootsverleih Krk",
      tripAdvisor: "Trip Advisor – Krk",
    },
    trash: {
      title: "Müllabfuhr",
      desc: 'Stellen Sie den Müll am Vorabend vor das Tor, wenn er voll ist — die Abholung beginnt um <strong class="text-deep font-medium">7:00 Uhr</strong>. Jede Farbe entspricht einem bestimmten Tag und Mülltyp.',
      link: "Abfuhrkalender – Ponikve",
    },
    shopping: {
      title: "Einkaufen & Lebensmittel",
      intro:
        "Wichtigste Supermärkte und Lebensmittelgeschäfte auf Krk — Name antippen für Google Maps.",
      supermarket: "Supermarkt",
      hypermarket: "Hypermarkt",
      discountStore: "Discounter",
      localMarket: "Lokaler Markt",
      hours: "Öffnungszeiten:",
      kauflandHours: "Mo–Sa 7:00 – 22:00",
      tommyHours: "Mo–Sa 7:00 – 21:00",
      plodineHours: "Mo–So 7:00 – 22:00",
      lidlHours: "Mo–Sa 7:00 – 21:00",
      konzumKrkHours: "Mo–Sa 7:00 – 22:00",
      konzumMalinskaHours: "Mo–Sa 7:00 – 20:00, So 7:00 – 14:00",
      marketHours: "7:00 – 13:00",
    },
    taxi: {
      title: "Taxi-Dienste",
      intro:
        "Beliebte Taxi-Services auf Krk — Name antippen für Website oder direkt anrufen.",
      phone: "Telefon:",
      taxiKrkDesc:
        "24/7 Inseltransfers, Flughafenfahrten und Festpreise",
      goldenDesc:
        "Ganze Insel — Malinska, Baška, Punat und Flughafentransfers",
      ozDesc:
        "Transfers auf der Insel und zum Flughafen Rijeka — Online-Buchung",
      mileDesc:
        "24/7, Kartenzahlung, Flughafentransfers und Gruppenvan",
      moreOptions: "Weitere Taxi-Services auf Krk",
    },
    emergency: {
      title: "Notfallkontakte",
      emergencyNumber: "Notrufnummer",
      emergencyDesc: "Polizei · Feuerwehr · medizinische Notfälle",
      hospital: "Nächstes Krankenhaus",
      pharmacy: "Apotheken",
      pharmacyIntro:
        "Apotheken auf Krk — Name antippen für Google Maps.",
      phone: "Telefon:",
      healthCenter: "Gesundheitszentrum Krk",
    },
    footer: {
      brand: "Ferienhaus",
      message:
        "Wir wünschen Ihnen einen wunderbaren Aufenthalt. Bei Fragen kontaktieren Sie uns gerne.",
      location: "Insel Krk, Kroatien",
      tripAdvisor: "Trip Advisor",
    },
  },

  sl: {
    meta: { title: "Počitniška hiša — Informacije za goste" },
    nav: { brand: "Počitniška hiša", guide: "Vodnik za goste", menuAria: "Odpri meni strani" },
    hero: {
      welcome: "Dobrodošli",
      subtitle:
        "Veseli nas, da ste naš gost. Tukaj so pomembne informacije in priporočila za prijetno bivanje.",
      imgAlt: "Počitniška hiša z bazenom ob sončnem zahodu",
    },
    glance: {
      checkIn: "Prijava",
      checkOut: "Odjava",
      wifi: "Wi-Fi",
      wifiValue: "Na usmerjevalniku",
      deposit: "Varščina",
    },
    access: {
      title: "Dostop do posestva",
      gateTitle: "Glavna vrata",
      gateDesc:
        "Glavna vhodna vrata se odpirajo in zapirajo ročno — potisnite ali povlecite jih z roko. Ni daljinskega upravljalnika ali avtomatskega odpiranja.",
      lockerTitle: "Predal za ključ",
      lockerDesc:
        "Ključ od hiše je v predalu za ključ na posestvu. Za prikaz kode pritisnite spodnji gumb in pustite telefonsko številko ali e-pošto — uporabljamo jih izključno za pošiljanje kode za vstop.",
      lockerEmailHint:
        "E-pošta je priporočljiva — kodo lahko pošljemo brez stroškov SMS ali sporočilnih aplikacij.",
      showCodeBtn: "Prikaži kodo predala",
      modalTitle: "Koda predala za ključ",
      modalIntro:
        "Vnesite telefonsko številko ali e-poštni naslov. Uporabljamo jih izključno za pošiljanje kode za vstop — za nič drugega.",
      emailLabel: "E-poštni naslov (priporočeno)",
      phoneLabel: "Telefonska številka",
      phoneDeliveryNote:
        "Koda bo poslana na to številko prek WhatsAppa ali SMS. Vnesite klicno številko države (npr. +385).",
      or: "ali",
      submitBtn: "Prikaži kodo",
      formError: "Prosimo, vnesite telefonsko številko ali e-poštni naslov.",
      emailError: "Prosimo, vnesite veljaven e-poštni naslov.",
      phoneError:
        "Prosimo, vnesite veljavno telefonsko številko s klicno številko države (npr. +385 41 123 456).",
      codeSentPhone:
        "Koda je bila poslana na vašo številko prek WhatsAppa ali SMS. Če je ne prejmete v nekaj minutah, nas kontaktirajte.",
      codeTitle: "Koda predala",
      codeIntro: "Vaša koda predala za ključ:",
      codeReminder:
        "Ne pozabite: ob odhodu vrnite ključ v predal, ne spreminjajte kode in po uporabi vedno pomešajte številke.",
      keyTitle: "Ključ od hiše — pomembno",
      keyOne: "Obstaja samo en ključ od hiše.",
      keyReturn:
        "Vsakič, ko odidete — in na dan odjave — vrnite ključ v predal.",
      keyNoChange: "Ne spreminjajte kode predala.",
      keyScramble: "Po uporabi vedno pomešajte številke na predalu.",
    },
    guestRegistration: {
      title: "Prijava gostov (eVisitor)",
      deadline:
        "Prosimo, pošljite dokumente v 3 dneh po prihodu prek WhatsAppa ali dogovorjenega načina komunikacije — izključno za prijavo v sistem eVisitor.",
      who: "Potreben je dokument vsake osebe, ki biva v objektu in ima lasten osebni dokument.",
      requirementsTitle: "Zahteve za dokumente",
      docTypes:
        "Sprejemamo izključno osebne izkaznice ali potne liste. Vozniška dovoljenja in podobni dokumenti niso veljavni.",
      photoQuality:
        "Fotografije ne smejo biti zamegljene — vsi podatki na dokumentu morajo biti jasno vidni.",
      idBothSides:
        "Osebna izkaznica: pošljite fotografiji obeh strani. Potni list: vsi podatki so na eni strani — zadostuje ena fotografija.",
      dataTitle: "Podatki potrebni za eVisitor prijavo (na osebo)",
      dataFirstName: "Ime",
      dataLastName: "Priimek",
      dataDocType: "Tip dokumenta (osebna izkaznica ali potni list)",
      dataDocNumber: "PIN / številka dokumenta",
      dataCountry: "Država",
      dataCity: "Kraj prebivališča",
      dataBirthDate: "Datum rojstva",
      privacy: "Vsi dokumenti se po prijavi v sistem samodejno izbrišejo.",
      legal:
        "Kot najemodajalec sem zakonsko dolžan prijaviti vse goste, ki bivajo v objektu — sicer tvegam kazen. Ne skrbite za krajo identitete: dokumenti služijo izključno za uradno prijavo bivanja.",
      infoBtnLabel: "Več o sistemu eVisitor",
      infoModalTitle: "Kaj je eVisitor?",
      infoP1:
        "eVisitor je uradni nacionalni elektronski sistem Hrvaške za prijavo in odjavo turistov, ki ga upravlja Hrvaška turistična zveza. Za vse ponudnike nastanitve je obvezen od 1. januarja 2016.",
      infoWhyTitle: "Zakaj potrebujem vaše dokumente?",
      infoP2:
        "Kot gostitelj sem zakonsko dolžan prijaviti vsakega gosta v tem sistemu v 24 urah po prihodu. Brez vašega osebnega dokumenta prijave ne morem opraviti in tvegam kazen.",
      infoDataTitle: "Kaj se zgodi z vašimi podatki?",
      infoP3:
        "Vaši dokumenti se uporabljajo izključno za to uradno prijavo. Po vnosu v sistem se takoj izbrišejo. Vaših podatkov ne shranjujem, ne delim in ne uporabljam za druge namene.",
      infoVerifyTitle: "Preverite, ali je sistem legitimen",
      infoP4:
        "Če želite preveriti, da je eVisitor uradni državni sistem, obiščite te spletne strani:",
      infoLinkEvisitor: "Uradni portal eVisitor ↗",
      infoLinkGov: "Vlada Hrvaške — Prijava turistov ↗",
    },
    houseRules: {
      title: "Hišni red",
      generalInfo: "Splošne informacije",
      poolRules: "Pravila ob bazenu",
      childrenPets: "Otroci, hišni ljubljenčki in kapaciteta",
      noiseDamage: "Hrup, škoda in razsvetljava",
      wifiPassword:
        '<strong class="text-deep font-medium">Geslo za Wi-Fi:</strong> Geslo za Wi-Fi je na usmerjevalniku.',
      deposit:
        '<strong class="text-deep font-medium">Varščina:</strong> Ob prihodu je potrebna varščina 500 €, ki se vrne ob odhodu po pregledu hiše, če ni škode. Škoda nad varščino se dodatno zaračuna.',
      firewood:
        '<strong class="text-deep font-medium">Drva in žar:</strong> Ne zagotavljamo drv za kamin ali žar. Gostje sami kupijo drva, vžigalnike in tekočino v lokalnih trgovinah.',
      childrenPetsMess:
        '<strong class="text-deep font-medium">Otroci in hišni ljubljenčki:</strong> Če otroci ali hišni ljubljenčki umazajo ali poškodujejo kaj v ali na objektu, so gostje odgovorni za čiščenje pred odhodom in prijavo škode gostitelju.',
      petsPool: "Hišni ljubljenčki niso dovoljeni v bazenu.",
      petsFurniture:
        "Hišni ljubljenčki niso dovoljeni na posteljah, kavčih ali drugem spalnem pohištvu.",
      capacity:
        '<strong class="text-deep font-medium">Kapaciteta objekta:</strong> Največ 10 oseb (8 ležišč + 2 pomočna). V hiši je en otroška posteljica in en visoki stolček. Za dodaten set me po potrebi naknadno kontaktirajte — lahko ponudimo še eno posteljico in stolček (najv. za 2 dojenčka). Za dodatno ležišče lahko ponudimo le eno napihljivo vzmetnico za 2 osebi.',
      poolGlass:
        "Stekleni predmeti (vključno s kozarci za pivo in vino) niso dovoljeni okoli ali v bazenu.",
      poolTrash:
        "Prosimo, pobrati ves smeti okoli bazena, v bazenu in na dvorišču ter jih pravilno odložiti.",
      poolStaffVisit:
        "Gostitelj ali član osebja lahko občasno obišče posestvo (npr. enkrat na teden) zaradi pregleda in čiščenja bazena.",
      noise:
        '<strong class="text-deep font-medium">Hrup:</strong> Glasba in zabave naj bodo zmanjšane po 22. uri zaradi miru v soseski.',
      damage:
        '<strong class="text-deep font-medium">Škoda in čistoča:</strong> Poškodovani predmeti se odštejejo od varščine. Če škoda presega varščino, se zaračunajo dodatni stroški.',
      lighting:
        '<strong class="text-deep font-medium">Razsvetljava in namakanje:</strong> Luči bazena in dvorišča delujejo na časovnik in se vklopijo zvečer. Namakanje trate je zgodaj zjutraj in zvečer.',
      locking:
        '<strong class="text-deep font-medium">Zaklepanje:</strong> Prosimo, zaklenite vsa vrata in okna, ko zapustite hišo.',
    },
    amenities: {
      title: "Oprema hiše",
      kitchen: "Kuhinja",
      kitchenDesc:
        "Popolnoma opremljena z aparati, pripomočki in osnovnimi živili",
      laundry: "Pralnica",
      laundryDesc: "Pralni stroj in sušilni stojalo v kopalnici",
      parking: "Parkiranje",
      parkingDesc: "Brezplačno parkiranje na posestvu",
    },
    checkInOut: {
      title: "Prijava in odjava",
      checkIn: "Prijava",
      checkOut: "Odjava",
      note: "Sporočite nam vnaprej, če potrebujete pozno odjavo ali zgodnjo prijavo — potrudili se bomo, da vam ustrežemo.",
    },
    restaurants: {
      title: "Priporočila restavracij",
      intro: "Tukaj je nekaj restavracij, ki jih toplo priporočamo:",
      santekDesc: "Jagnjetina, peka in domača kuhinja — med Malinsko in Šilom",
      braceraDesc: "Svež ulov z lastnega čolna in kvarnerski škampi",
      frankopanDesc:
        "Vrhunska riba v starem mestu Krk — priporočena rezervacija",
      nadaDesc: "Legenda v Vrbniku — terasa s pogledom in žlahtina od 1974",
      portellaDesc:
        "Moderna mediteranska kuhinja v starem mestu — zelo priljubljeno",
      galijaDesc: "Klasična gostilna v starem mestu — pica iz krušne peči",
      kingsDesc: "Burgerji, zajtrk in koktajli — odprto vse leto",
      mimiDesc:
        "Najboljši burgerji in čevapčiči v Malinski — sproščeno in ugodno",
      moreOptions: "Več restavracij",
      topPick: "Priporočeno",
      hiddenGem: "Skriti biser",
      bookAhead: "Rezerviraj",
    },
    beaches: {
      title: "Najboljše plaže",
      desc: "Raziščite najlepše plaže na otoku Krku.",
      link: "Oglej si najboljše plaže",
    },
    wine: {
      title: "Lokalno vino",
      desc: 'Poskusite izvrstno <strong class="text-deep font-medium">Zlato vrbniško žlahtino</strong>, priznano lokalno vino. Lahko obiščete tudi klet.',
      link: "Vinogradniška klet Ivan Katunar",
    },
    clubs: {
      title: "Klubi in barji na plaži",
      diamondDesc: "Največji klub na prostem na Jadranu — poletni koncerti",
      onyxDesc: "Nočni klub v Puntu — DJ seti in žive skupine (jun–sep)",
      mulDesc: "Zabave na plaži z DJ-jem na plaži hotela Malin",
      rovaDesc: "Bistro in koktajli na plaži Rova ob morju",
      moccaDesc: "Sproščen bar na plaži in žar na plaži Jert",
      moreOptions: "Več klubov in nočnega življenja na Krku",
      maps: "Zemljevid ↗",
      website: "Splet ↗",
      events: "Program ↗",
    },
    attractions: {
      title: "Lokalne znamenitosti in aktivnosti",
      intro:
        "Priljubljene znamenitosti in izleti na Krku — z uradnimi povezavami za termine, vstopnice in rezervacije.",
      historical: "Zgodovinske znamenitosti",
      nature: "Narava in plaže",
      adventure: "Pustolovščine in morje",
      cycling: "Kolesarjenje in sprehodi",
      touristInfo: "Turistične informacije in najem čolnov",
      frankopan: "Grad Frankopan (Krk)",
      frankopanDesc:
        "Srednjeveška utrdba iz 12. st. nad starim mestom — simbol dinastije Frankopan.",
      vrbnik: "Staro mestno jedro Vrbnik",
      vrbnikDesc:
        "Srednjeveško mesto na pečini, najožja ulica Klančić in vinogradi žlahtine.",
      cathedral: "Katedrala Marijinega vnebovzetja (Krk)",
      cathedralDesc:
        "Ena najstarejših katedral na Hrvaškem — bazilika iz 5. st. v starem mestu.",
      kosljun: "Samostan Košljun (Punat)",
      kosljunDesc:
        "Frančiškanski otok z muzeji in 400 rastlinskimi vrstami — čoln iz Punta.",
      baskaTablet: "Bašćanska ploča in cerkev sv. Lucije (Jurandvor)",
      baskaTabletDesc:
        "Najstarejši hrvaški glagolski spomenik (1100) — obisk samo z vodstvom.",
      biserujka: "Jama Biserujka",
      biserujkaDesc:
        "Turistična jama s stalaktiti pri Rudinah — ogled traja približno 20 minut.",
      baska: "Baška in Vela plaža",
      baskaDesc:
        "Najbolj znana plaža otoka in 1,8 km proge — idealno za družine.",
      moonPlateau: "Luninska planota (Baška)",
      moonPlateauDesc:
        "Kraška pokrajina nad Baško s panoramskim razgledom — lahek krožni pohod.",
      soline: "Plaža Soline in zdravilno blato (Klimno)",
      solineDesc:
        "Ena redkih peščenih plaž — blato za wellness kopanje v zalivu Klimno.",
      oprna: "Plaža Oprna (Stara Baška)",
      oprnaDesc:
        "Skrit prodnat zaliv brez množičnega turizma — priporočamo obutev za skale.",
      zipline: "Edison Zipline Krk",
      ziplineDesc:
        "8 zipline linij dolgih več kot 2 km pri Treskavcu — priljubljena družinska avantura.",
      plavnik: "Otok Plavnik in Modra jama",
      plavnikDesc:
        "Čolni izleti z delfini, kopanjem in jastrebi na pečinah Plavnika.",
      glagoliticTrail: "Glagoljica pot (Baška)",
      glagoliticTrailDesc:
        "34 kamnitih skulptur z glagolskimi črkami od Treskavca do Jurandvora.",
      bikeTours: "Kolesarske ture Krk",
      bikeToursDesc:
        "Organizirane vožnje po več kot 300 km označenih kolesarskih poti.",
      walkingTours: "Sprehodi Krk",
      walkingToursDesc:
        "Vodeni sprehodi po starih mestih, vinogradih in obalnih poteh.",
      touristBoard: "Turistična zveza Krk",
      visitKrk: "Visit Krk — uradni portal",
      visitKrkDesc:
        "Dogodki, zemljevid znamenitosti in praktične informacije za celoten otok.",
      rentBoat: "Najem čolna Krk",
      tripAdvisor: "Trip Advisor – Krk",
    },
    trash: {
      title: "Razpored odvoza smeti",
      desc: 'Smeti postavite pred vrata zvečer preden so polne — odvoz se začne ob <strong class="text-deep font-medium">7:00</strong>. Vsaka barva na razporedu ustreza določenemu dnevu in vrsti smeti.',
      link: "Razpored odvoza – Ponikve",
    },
    shopping: {
      title: "Nakupovanje in živila",
      intro:
        "Glavne trgovine in supermarkti na Krku — tapnite ime za navodila v Google Maps.",
      supermarket: "Supermarket",
      hypermarket: "Hipermarket",
      discountStore: "Diskont",
      localMarket: "Lokalna tržnica",
      hours: "Delovni čas:",
      kauflandHours: "pon–sob 7:00 – 22:00",
      tommyHours: "pon–sob 7:00 – 21:00",
      plodineHours: "pon–ned 7:00 – 22:00",
      lidlHours: "pon–sob 7:00 – 21:00",
      konzumKrkHours: "pon–sob 7:00 – 22:00",
      konzumMalinskaHours: "pon–sob 7:00 – 20:00, ned 7:00 – 14:00",
      marketHours: "7:00 – 13:00",
    },
    taxi: {
      title: "Taxi storitve",
      intro:
        "Priljubljene taxi storitve na Krku — tapnite ime za spletno stran ali pokličite.",
      phone: "Telefon:",
      taxiKrkDesc:
        "24/7 prevozi po otoku, transferji do letališča in fiksne cene",
      goldenDesc:
        "Celoten otok — Malinska, Baška, Punat in transferji do letališča",
      ozDesc:
        "Prevozi po otoku in do letališča Rijeka — spletna rezervacija",
      mileDesc:
        "24/7, plačilo s kartico, transferji do letališča in kombi za skupine",
      moreOptions: "Več taxi storitev na Krku",
    },
    emergency: {
      title: "Nujni kontakti",
      emergencyNumber: "Nujna številka",
      emergencyDesc: "Policija · gasilci · nujna medicinska pomoč",
      hospital: "Najbližja bolnišnica",
      pharmacy: "Lekarne",
      pharmacyIntro:
        "Lekarne po otoku Krk — tapnite ime za navodila v Google Maps.",
      phone: "Telefon:",
      healthCenter: "Zdravstveni dom Krk",
    },
    footer: {
      brand: "Počitniška hiša",
      message:
        "Upamo, da boste uživali v bivanju. Za dodatno pomoč nas kontaktirajte.",
      location: "Otok Krk, Hrvaška",
      tripAdvisor: "Trip Advisor",
    },
  },
};
