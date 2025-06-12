// API keys (thay bằng khóa hợp lệ từ Google Cloud Console)
const API_KEYS = [
    "AIzaSyBbC9azkfLPpKhAkItKiDAHKBMUV2FAV8E", // Replace with your actual keys
    "AIzaSyBLvAq5LY6ZGb_8skp6QkbeRRPCgvnLDlE",
    "AIzaSyAAOZdtNz40S3w5qvbsWjMq16kdWO5vr2w",
    "AIzaSyBdunXxrUfxDZFSYu08vEj0R1dpa-51NJY",
    "AIzaSyDDLNYOs9-1tGtu4_d3TzIRQA1bucT0pxE",
    "AIzaSyAjW5CyOPfZdeBrAe87e91KoVhU6lYlKWw",
    "AIzaSyBbuC73k84FpSI_qVwZUn6taucAVfowx6c",
    "AIzaSyDiF7RdJcEAG9kfiSG1t7Eh-DFCWhRuq_0",
    "AIzaSyDDIzoAMKMzdQXla9jKWKcbpfUgkBairSA",
    "AIzaSyCSQd6Xn7OveiU0TFE10rIUXdCnE2jIoxk",
    "AIzaSyDzJCNdoBMsijNxhipI7BvPvrKkuYAnkMI",
    "AIzaSyDXW4U3yKUEzm9uEPoUNzR78R5G5Dt5JaY",
    "AIzaSyB29PZ_-CdEy82YvEhQfQLZfh67ziE0Els",
    "AIzaSyCYgRPy37J-4fbLC_AGGevTZo4xI2qteIg",
    "AIzaSyDvgw3QprhiBawTqMaW5Y8NjFpjLYeQCK4"
];

let PRIMARY_KEY = API_KEYS[Math.floor(Math.random() * API_KEYS.length)];
let VERIFY_KEY = API_KEYS.find(key => key !== PRIMARY_KEY) || API_KEYS[0];

const MAX_API_RETRIES = 3;

// Danh sách đề bài (đầy đủ 34 đề)
const topics = [
    {
        id: 1,
        sender: "Petra",
        content: `Liebe(r)........
Ich habe eine tolle Überraschung. Stelle dir vor, was mir mein Onkel angeboten hat. Er rief mich am Samstag an. Er hat ein großes Ferienhaus im Schwarzwald. Das Haus kann ich für die Ferien kostenlos haben. Ich kann auch Freunde mitbringen! Wäre das nichts für uns? Wir könnten uns alle dort treffen. Du, deine Eltern und Freunde, und ich mit meiner Familie und meinen Freunden. Ich würde mich wahnsinnig freuen, wenn das klappen würde. Bitte schreibe mir so schnell du kannst, damit wir alles planen können. Urlaub im Schwarzwald - das wird traumhaft schön!
Herzliche Grüße
Petra`,
        points: [
            {
                text: "Warum Sie gern nach Deutschland kommen möchten",
                hint: "Beispiele: Ich möchte dich unbedingt besuchen. / Deutschland interessiert mich sehr, weil... / Ich wollte schon immer mal den Schwarzwald sehen. / Es wäre toll, meine Deutschkenntnisse zu verbessern."
            },
            {
                text: "Wie Sie anreisen wollen",
                hint: "Beispiele: Ich plane, mit dem Flugzeug zu kommen. / Wahrscheinlich nehme ich den Zug. / Wenn es möglich ist, würde ich gerne mit dem Auto fahren."
            },
            {
                text: "Was Sie gemeinsam machen könnten",
                hint: "Beispiele: Wir könnten wandern gehen. / Vielleicht können wir zusammen kochen oder grillen? / Ich würde gerne einige Sehenswürdigkeiten besichtigen. / Abends könnten wir Spiele spielen."
            },
            {
                text: "Wen Sie mitbringen möchten",
                hint: "Beispiele: Ich komme alleine. / Ich würde gerne meine Familie/meinen Freund/meine Freundin mitbringen. / Meine Kinder würden sich auch sehr freuen."
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede. Schreiben Sie mindestens 100 Wörter."
    },
    {
        id: 2,
        sender: "Eva",
        content: `Liebe(r)........
Wie geht es denn so mit dem Deutsch lernen? Kommst du gut voran, und was machst du im Moment so? Stell dir vor, ich habe eine neue Stelle bei der Zeitschrift VIA bekommen! Ich arbeite jetzt als Journalistin, und das war ja immer mein Traumberuf!
VIA wird vor allem von jüngeren Leuten gelesen. Deshalb schreiben wir viel über Berufe und Ausbildungen und auch über Freizeit und Sport. Für die nächsten Hefte von VIA planen wir jetzt eine neue Serie über Berufswünsche. Was ist eigentlich dein Traumberuf? Wenn du möchtest, schicke ich dir gerne einmal eine Ausgabe von VIA, damit du siehst, was ich so mache.
Ich freue mich schon auf deine Antwort.
Herzliche Grüße
Eva`,
        points: [
            {
                text: "Fortschritte beim Deutsch Lernen",
                hint: "Beispiele: Mit dem Deutschlernen klappt es ganz gut. / Ich mache Fortschritte, aber es ist manchmal schwierig. / Zurzeit besuche ich einen B1-Kurs. / Ich lerne jeden Tag Vokabeln."
            },
            {
                text: "Auf Evas neue Stelle reagieren",
                hint: "Beispiele: Das ist ja toll, dass du eine neue Stelle hast! / Herzlichen Glückwunsch zum neuen Job! / Journalistin war schon immer dein Traum, das freut mich für dich. / Wie gefällt dir die Arbeit bei VIA?"
            },
            {
                text: "Was es Neues bei Ihnen gibt",
                hint: "Beispiele: Bei mir gibt es auch Neuigkeiten: ... / Ich habe vor Kurzem ... gemacht. / In letzter Zeit war ich sehr beschäftigt mit..."
            },
            {
                text: "Ihr Traumberuf",
                hint: "Beispiele: Mein Traumberuf ist... / Ich möchte gerne als ... arbeiten. / Schon als Kind wollte ich ... werden, weil..."
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 3,
        sender: "Sophie",
        content: `Liebe(r)........
Wir haben lange nichts mehr voneinander gehört. Ich hoffe, es geht dir gut. Gibt es bei dir Neuigkeiten? Ich bin nun schon seit zwei Monaten in Würzburg, und mein neuer Job gefällt mir sehr gut. In der Firma fühle ich mich wohl, mit meinen Kollegen verstehe ich mich prima und die Arbeit macht mir großen Spaß.
Allerdings habe ich ein Problem: Außer meinen Kollegen kenne ich hier in der Stadt noch niemanden. In meiner Freizeit bin ich oft allein und weiß nicht, was ich machen soll. Wie könnte ich neue Leute kennenlernen? Hast du vielleicht einen Tipp für mich?
Würzburg ist wirklich eine schöne Stadt mit vielen Sehenswürdigkeiten. Hast du Lust, mich mal an einem Wochenende zu besuchen? Ich würde mich sehr freuen.
Viele Grüße
Sophie`,
        points: [
            {
                text: "Was es Neues bei Ihnen gibt",
                hint: "Beispiele: Es freut mich, von dir zu hören! Bei mir ist alles in Ordnung. / In letzter Zeit habe ich... / Ich wollte dir erzählen, dass..."
            },
            {
                text: "Was Sie selbst gerne in Ihrer Freizeit machen",
                hint: "Beispiele: In meiner Freizeit gehe ich gerne... / Ich treibe oft Sport, zum Beispiel... / Am liebsten entspanne ich mich bei... / Vielleicht könntest du auch..."
            },
            {
                text: "Tipps für Sophie",
                hint: "Beispiele: Um neue Leute kennenzulernen, könntest du... / Hast du schon einmal versucht, ...? / Vielleicht gibt es Sportvereine oder Sprachkurse? / Du könntest auch einer App für Freizeitaktivitäten beitreten."
            },
            {
                text: "Reaktion auf den Vorschlag",
                hint: "Beispiele: Dein Vorschlag, dich in Würzburg zu besuchen, klingt toll! / Ich würde dich sehr gerne besuchen. / Welches Wochenende würde dir denn passen? / Ich muss noch schauen, ob ich Zeit habe."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 4,
        sender: "Nadja",
        content: `Liebe(r)........
Ich hoffe, dir geht's gut. Stell dir vor, bei mir gibt es Neuigkeiten. Du weißt doch, dass wir schon lange von einem Garten geträumt haben. Jetzt haben wir endlich einen am Stadtrand gefunden. Da er sehr groß ist, wollte ich dich fragen, ob du nicht Lust hast, den Garten mit uns zu teilen.
Die Miete ist gar nicht so hoch. Du könntest dort Salat und Gemüse anpflanzen, natürlich auch Blumen, ganz wie du willst. Es gibt auch Obstbäume und eine große Wiese, auf der man sich einfach hinlegen kann, und wir könnten im Garten auch grillen. Was denkst du? Wäre das nicht toll?
Antworte mir bald.
Alles Liebe
Deine Nadja`,
        points: [
            {
                text: "Reaktion auf den Vorschlag",
                hint: "Beispiele: Das ist ja eine tolle Idee mit dem Garten! / Dein Vorschlag klingt sehr interessant. / Ich finde es super, dass ihr einen Garten gefunden habt."
            },
            {
                text: "Fragen zum Garten",
                hint: "Beispiele: Wie groß ist der Garten genau? / Wie hoch wäre denn die Miete für mich? / Gibt es dort Wasser und Werkzeuge? / Wie oft müssten wir uns um den Garten kümmern?"
            },
            {
                text: "Weg zum Garten",
                hint: "Beispiele: Wie komme ich am besten zum Garten? / Ist er gut mit öffentlichen Verkehrsmitteln erreichbar? / Brauche ich ein Fahrrad oder ein Auto?"
            },
            {
                text: "Was es bei Ihnen Neues gibt",
                hint: "Beispiele: Bei mir gibt es im Moment nicht viel Neues, aber... / Ich bin gerade dabei, ... / Ich wollte dir auch erzählen, dass..."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 5,
        sender: "Nicole",
        content: `Liebe(r)........
Entschuldige, dass ich dir so lange nicht mehr geschrieben habe. Aber du weißt, mein älterer Bruder, der schon lange im Ausland lebt, ist jetzt für zwei Monate bei uns. Wir unternehmen einiges zusammen, z.B. gehen wir nachmittags ins Schwimmbad oder abends ins Kino.
Wir verstehen uns eigentlich ganz gut, aber dennoch habe ich ein Problem mit ihm: Wenn es im Fernsehen Sportsendungen gibt, dann bekomme ich ihn nicht mehr weg vom Fernseher! Er sitzt dann stundenlang nur da und sieht fern, ganz egal wie schön das Wetter draußen ist! Was soll ich bloß tun? Überhaupt nichts sagen oder soll ich mit ihm deswegen streiten? Er fährt bald wieder weg und ich möchte doch mit ihm zusammen sein. Was würdest du machen?
Hast du vielleicht ein paar Tipps oder Ratschläge für mich?
Herzliche Grüße
Nicole`,
        points: [
            {
                text: "Eigene Erfahrungen mit Geschwistern, Freunden,...",
                hint: "Beispiele: Ich kenne solche Situationen auch. / Mit meinem Bruder/meiner Schwester ist es manchmal ähnlich. / Es ist nicht immer leicht, Kompromisse zu finden."
            },
            {
                text: "Tipps für Nicole",
                hint: "Beispiele: Vielleicht könntest du versuchen, mit ihm darüber zu sprechen? / Du könntest vorschlagen, feste Fernsehzeiten zu vereinbaren. / Wie wäre es, wenn ihr gemeinsam etwas anderes unternehmt, das ihm auch Spaß macht?"
            },
            {
                text: "Was Sie über den Bruder denken",
                hint: "Beispiele: Es ist verständlich, dass er sich entspannen möchte. / Vielleicht merkt er nicht, wie sehr es dich stört. / Sport ist für viele sehr wichtig."
            },
            {
                text: "Was Sie selbst gern gemeinsam mit anderen machen",
                hint: "Beispiele: Ich unternehme gerne Ausflüge. / Gemeinsam kochen oder essen finde ich schön. / Ich gehe gerne spazieren oder treibe Sport mit Freunden."
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 6,
        sender: "Andreas",
        content: `Liebe(r)........
Heute habe ich Zeit, dir ein paar Zeilen zu schreiben. Der Urlaub war so schön, aber seit ich zurück bin, habe ich im Büro sehr viel Arbeit. Bestimmt brauche ich schon bald wieder Urlaub!
Während ich weg war, hat sich hier übrigens einiges geändert: Es gibt einen neuen Kollegen, er heißt Roberto. Was aber die größte Veränderung ist: Er arbeitet mit mir in meinem Büro, das heißt, ich habe endlich jemanden, mit dem ich mich zwischendurch auch ein bisschen unterhalten kann! Roberto ist aus Spanien hierher gezogen. Er kennt noch niemanden hier, außer mir natürlich, und ist meistens allein. Denkst du, dass ich ihn und ein paar andere Arbeitskollegen einmal einladen sollte? Was würdest du tun? Na gut, für heute muss ich Schluss machen. Melde dich doch bald einmal bei mir!
Viele Grüße
Andreas`,
        points: [
            {
                text: "Vorschlag, wie Andreas seinem Arbeitskollegen helfen kann",
                hint: "Beispiele: Du könntest Roberto zum Mittagessen einladen. / Vielleicht wäre es eine gute Idee, wenn ihr nach der Arbeit etwas zusammen unternehmt. / Eine kleine Willkommensparty im Büro wäre sicher nett."
            },
            {
                text: "Wie Sie am liebsten arbeiten (alleine oder mit Kollegen)",
                hint: "Beispiele: Ich arbeite lieber im Team. / Ich kann mich besser konzentrieren, wenn ich alleine arbeite. / Für mich ist eine Mischung aus beidem ideal."
            },
            {
                text: "Was Sie nach dem Urlaub gemacht haben",
                hint: "Beispiele: Nach meinem Urlaub musste ich auch erstmal viel aufarbeiten. / Ich habe mich direkt wieder in die Arbeit gestürzt. / Ich habe versucht, den Übergang langsam zu gestalten."
            },
            {
                text: "Was es bei Ihnen Neues gibt",
                hint: "Beispiele: Bei mir gibt es zurzeit viel zu tun bei der Arbeit. / Ich plane gerade meinen nächsten Urlaub. / Ich habe einen neuen Kurs angefangen."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 7,
        sender: "Annika",
        content: `Liebe(r)........
Wie geht's dir? Hattest du ein schönes Wochenende? Hier hat es die ganze Zeit geregnet, deshalb bin ich zuhause geblieben.
Du hattest vorgeschlagen, dass wir im Sommer zusammen verreisen könnten. Die Idee finde ich super! An welches Reiseziel denkst du? Ich bin gerne am Meer, mag aber auch Städtereisen. Wichtig ist für mich nur, dass ich auch ein bisschen Sport machen kann. Die Reise sollte aber nicht zu viel kosten, denn ich habe vor Kurzem schon viel für eine Autoreparatur bezahlen müssen. Was meinst du: Wie können wir günstig Urlaub machen? Es muss ja kein Luxushotel sein.
Schreib mir bald, dann können wir anfangen zu planen.
Viele Grüße
Annika`,
        points: [
            {
                text: "Was Sie am Wochenende unternommen haben",
                hint: "Beispiele: Mein Wochenende war sehr schön, ich habe... / Leider hat es bei mir auch geregnet, deshalb... / Ich war am Wochenende..."
            },
            {
                text: "Wohin Sie gerne reisen würden",
                hint: "Beispiele: Dein Vorschlag, zusammen zu verreisen, ist toll! / Ich würde gerne ans Meer fahren. / Eine Städtereise nach ... fände ich auch super."
            },
            {
                text: "Was Sie im Urlaub gerne machen",
                hint: "Beispiele: Im Urlaub möchte ich mich entspannen und Sport treiben. / Ich besichtige gerne neue Städte. / Schwimmen und Sonnenbaden finde ich toll."
            },
            {
                text: "Wie man beim Reisen Geld sparen kann",
                hint: "Beispiele: Wir könnten in einer Ferienwohnung statt im Hotel übernachten. / Vielleicht finden wir günstige Flüge, wenn wir früh buchen. / Selber kochen ist oft billiger als essen gehen."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 8,
        sender: "Iris",
        content: `Liebe(r)........
Endlich habe ich die Deutschprüfung hinter mir. Ich glaube, es ist gut gelaufen. Jetzt soll ich für unseren Kurs eine Party organisieren. Du hast doch kürzlich erzählt, dass du für euren Kurs auch ein Abschlussfest organisiert hast. Sicher kannst du mir ein paar Tipps geben. Ich habe mir gedacht, wir könnten vielleicht in einem Restaurant feiern. Da kann jeder essen und trinken, was er will. Was meinst du? Essen zu kochen ist doch ziemlich viel Arbeit. Und natürlich brauchen wir Musik. Welche Musik ist am besten geeignet? Was schlägst du vor? Melde dich bald.
Ich freue mich schon auf deine Antwort.
Liebe Grüße
Iris`,
        points: [
            {
                text: "Reaktion auf die Prüfung",
                hint: "Beispiele: Herzlichen Glückwunsch zur bestandenen Prüfung! / Das freut mich sehr für dich, dass es gut gelaufen ist! / Ich drücke dir die Daumen für das Ergebnis."
            },
            {
                text: "Wo feiern? Restaurant – Ihre Meinung",
                hint: "Beispiele: Die Idee, im Restaurant zu feiern, finde ich gut. / Das spart viel Arbeit. / Vielleicht wäre es aber auch schön, wenn jeder etwas zum Essen mitbringt?"
            },
            {
                text: "Welche Musik",
                hint: "Beispiele: Für die Musik könnten wir eine Playlist mit Liedern erstellen, die allen gefallen. / Vielleicht hat jemand eine gute Musikanlage? / Tanzmusik wäre sicher gut."
            },
            {
                text: "Urlaubspläne",
                hint: "Beispiele: Nach der Party könntest du erstmal Urlaub machen. / Hast du schon Pläne für die Ferien? / Ich plane, im Sommer..."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 9,
        sender: "Sonja",
        content: `Liebe(r)........
Die Sommerferien kommen rasch näher und ich freue mich sehr, dass du mich besuchen kommst. Ich habe eine tolle Idee: Ich möchte dich gerne zu einem Musikfestival einladen, und zwar nach Rüdesheim (ca. 50 km von Mainz). Dort spielen in diesem Sommer die besten internationalen Musikgruppen.
Ich finde Open-Air-Konzerte einfach toll: die friedliche Stimmung unter den Besuchern, die gute Musik und einfach viele schöne Momente, die man nie mehr vergisst. Vor allem, wenn das Wetter gut ist, kann man das so richtig genießen.
Wir könnten mit dem Zug nach Rüdesheim fahren oder auch mein Auto nehmen. Was wäre dir lieber? Übernachten würde ich gern auf dem Festplatz. was meinst du? Und willst du vielleicht noch jemanden mitbringen? Vielleicht hast du noch einen Wunsch, was du sonst noch hier machen möchtest? Schreibe mir bitte möglichst bald.
Ich freue mich schon auf deine Antwort.
Herzliche Grüße
Sonja`,
        points: [
            {
                text: "Was sonst noch machen?",
                hint: "Beispiele: Neben dem Festival könnten wir auch... / Ich würde gerne die Stadt Mainz besichtigen. / Vielleicht machen wir einen Ausflug an den Rhein?"
            },
            {
                text: "Wie zum Festival reisen?",
                hint: "Beispiele: Mit dem Zug zu fahren, finde ich eine gute Idee. / Wenn du mit dem Auto fährst, komme ich gerne mit. / Wir können die Kosten ja teilen."
            },
            {
                text: "Jemanden mitbringen?",
                hint: "Beispiele: Ich komme wahrscheinlich alleine. / Darf ich vielleicht meine Freundin/meinen Freund mitbringen? / Ich frage mal, ob noch jemand Lust hat."
            },
            {
                text: "Übernachten: Reaktion auf Sonjas Vorschlag",
                hint: "Beispiele: Auf dem Festplatz zu übernachten klingt abenteuerlich! / Ich bin mir nicht sicher, ob das etwas für mich ist. / Gibt es vielleicht auch andere Möglichkeiten in der Nähe?"
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 10,
        sender: "Caroline",
        content: `Liebe(r)........
Du hast schon so lange nicht mehr geschrieben. Wie geht es dir? Heute habe ich eine Bitte. Vielleicht kannst du uns helfen?
Eine 16-jährige Schülerin aus deinem Land wird uns besuchen und zwei Wochen bei uns in Goldbach bleiben. Natürlich möchten wir, dass sie sich wohl fühlt. Dein Land kennen wir nur von deinen Erzählungen, denn wir waren selbst noch nicht da. Bitte gib uns ein paar Informationen, z.B. über typische Gewohnheiten oder typisches Essen. Was können wir tun und wie können wir uns vorbereiten?
Wir freuen uns schon auf deine Antwort.
Schon einmal vielen Dank und liebe Grüße
Caroline`,
        points: [
            {
                text: "Reaktion auf den Besuch der Schülerin",
                hint: "Beispiele: Das ist ja eine schöne Nachricht! / Ich finde es toll, dass ihr eine Schülerin aufnehmt. / Ich helfe euch gerne bei der Vorbereitung."
            },
            {
                text: "Vorschlag zu Essen und Trinken",
                hint: "Beispiele: Typisch für mein Land ist... / Viele Jugendliche essen gerne... / Ihr könntet versuchen, ... zu kochen. / Zum Trinken ist ... beliebt."
            },
            {
                text: "Warum Sie so lange nicht geschrieben haben",
                hint: "Beispiele: Entschuldige, dass ich mich so lange nicht gemeldet habe, ich hatte viel zu tun. / In letzter Zeit war bei mir viel los. / Ich wollte dir schon längst schreiben, aber..."
            },
            {
                text: "Unternehmungen/Programm mit der Schülerin",
                hint: "Beispiele: Ihr könntet mit ihr einen Ausflug nach ... machen. / Vielleicht interessiert sie sich für...? / Zeigt ihr doch die Umgebung von Goldbach."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 11,
        sender: "Vera",
        content: `Liebe(r)........
Wie geht es dir und deiner Familie? Bei mir läuft alles prima. Endlich habe ich eine neue Arbeitsstelle. Ich habe nur ein kleines Problem: Es ist ein bisschen zu weit, um zu Fuß zu gehen. Und der Bus fährt nur alle 30 Minuten. Früher bin ich meist mit dem Fahrrad gefahren, aber hier gibt es keine Fahrradwege. Und da ist ja auch noch mein Daniel, den ich morgens in den Kindergarten bringen muss. Der liegt zum Glück gleich neben meiner neuen Firma. – Wie kommst du denn zur Arbeit oder zum Deutschkurs? Wollen wir uns nicht mal wieder treffen und alle zusammen was unternehmen? Ich würde mich freuen.
Liebe Grüße
Vera`,
        points: [
            {
                text: "Was es bei Ihnen Neues gibt",
                hint: "Beispiele: Mir und meiner Familie geht es gut, danke. / Bei mir ist auch alles in Ordnung. / Ich habe in letzter Zeit..."
            },
            {
                text: "Wie Sie zur Arbeit kommen",
                hint: "Beispiele: Ich fahre meistens mit dem Fahrrad/Auto/Bus zur Arbeit. / Mein Arbeitsweg ist zum Glück nicht so weit. / Ich gehe zu Fuß."
            },
            {
                text: "Was Sie über Veras neue Stelle wissen wollen",
                hint: "Beispiele: Das freut mich für dich, dass du eine neue Stelle hast! / Was genau machst du dort? / Wie sind die Kollegen?"
            },
            {
                text: "Vorschlag für gemeinsame Unternehmung",
                hint: "Beispiele: Ja, wir sollten uns unbedingt mal wieder treffen! / Wie wäre es, wenn wir am Wochenende...? / Wir könnten zusammen picknicken/ins Kino gehen/einen Ausflug machen."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 12,
        sender: "Andreas",
        content: `Liebe(r)........
Es tut mir wirklich leid, dass ich dir schon so lange nicht geschrieben habe. Bei mir ist im letzten Monat ziemlich viel los gewesen. Vor drei Wochen bin ich nämlich in eine neue Wohnung gezogen, weil die alte für mich zu klein war. Mittlerweile habe ich mich schon sehr schön eingerichtet, mit ein paar neuen Möbeln usw. Ich fühle mich wirklich wohl! Hast du keine Lust, im Sommer zu mir zu Besuch zu kommen? In meiner neuen Wohnung habe ich jetzt auch ein kleines Arbeitszimmer für meine ganzen Bücher und den Schreibtisch mit dem Computer. Wie ist das bei dir? Machst du eigentlich eigentlich viel am Computer? Lass doch mal wieder was von dir hören!
Liebe Grüße und bis bald
Andreas`,
        points: [
            {
                text: "Ihre Erfahrungen mit dem Computer",
                hint: "Beispiele: Ich benutze den Computer täglich für die Arbeit/das Studium. / Ich surfe gerne im Internet oder spiele Computerspiele. / Ohne Computer könnte ich mir meinen Alltag kaum vorstellen."
            },
            {
                text: "Etwas über Ihre Wohnung",
                hint: "Beispiele: Meine Wohnung ist nicht sehr groß, aber gemütlich. / Ich wohne in einem Mehrfamilienhaus/einem Einfamilienhaus. / Ich habe auch ein Arbeitszimmer."
            },
            {
                text: "Ob Sie Andreas besuchen möchten",
                hint: "Beispiele: Dein Angebot, dich im Sommer zu besuchen, nehme ich gerne an! / Das ist eine tolle Idee, ich würde dich gerne besuchen. / Ich muss noch schauen, ob es im Sommer klappt."
            },
            {
                text: "Was es bei Ihnen Neues gibt",
                hint: "Beispiele: Entschuldige, dass ich auch so lange nichts von mir hören lassen habe. / Bei mir war in letzter Zeit auch viel los. / Ich habe..."
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 13,
        sender: "Thomas",
        content: `Liebe(r)........
Nach unserem schönen, gemeinsamen Erlebnis letztes Jahr möchte ich auch dieses Jahr wieder einen Ausflug für uns alle organisieren. Ich hoffe sehr, dass ihr Zeit habt und mitkommen könnt - ich freue mich schon jetzt, euch alle bald wieder zu sehen! Das Dumme ist nur, dass ich mir vor drei Wochen beim Basketball das Bein gebrochen habe und noch nicht so gut zu Fuß bin. Deshalb habe ich einen gemütlichen Ausflug mit Bus und Schiff geplant - hoffentlich ist dann auch das Wetter gut für die Schifffahrt! Wohin es geht, möchte ich euch aber noch nicht verraten - das soll eine Überraschung werden.
Termin: übernächster Samstag.
Zeit und Treffpunkt: 9:30 Uhr bei mir.
Bitte schreibt mir doch, ob ihr beim Ausflug dabei sein könnt!
Hoffentlich bis bald.
Thomas`,
        points: [
            {
                text: "Alternativvorschlag für schlechtes Wetter",
                hint: "Beispiele: Was machen wir, wenn das Wetter schlecht ist? / Haben wir einen Plan B für Regenwetter? / Vielleicht könnten wir dann ins Museum gehen?"
            },
            {
                text: "Einladung annehmen",
                hint: "Beispiele: Vielen Dank für die Einladung, ich komme sehr gerne mit! / Der Ausflug klingt super, ich bin dabei! / Ich freue mich schon darauf."
            },
            {
                text: "Was Sie noch über den Ausflug wissen wollen",
                hint: "Beispiele: Müssen wir etwas Bestimmtes mitbringen? / Wie lange wird der Ausflug ungefähr dauern? / Brauchen wir Verpflegung?"
            },
            {
                text: "Auf Sportunfall reagieren",
                hint: "Beispiele: Ohje, das mit deinem Bein tut mir leid! / Gute Besserung für dein Bein! / Ich hoffe, es heilt schnell."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 14,
        sender: "Tamara",
        content: `Liebe(r)........
Wie geht es dir? Du hast mir schon so lange nicht mehr geschrieben, dass ich mir Sorgen mache. Hoffentlich ist bei euch alles in Ordnung. Es wird wirklich Zeit, dass wir uns wiedersehen. Anfang des Jahres habe ich meinen Arbeitsplatz gewechselt. Meine neue Stelle ist sehr interessant, aber auch anstrengend. Ich bin nun beruflich sehr viel unterwegs. Demnächst muss ich auch in eure Gegend reisen. Dann könnten wir uns doch einmal am Abend treffen und gemeinsam etwas unternehmen. Wie findest du meine Idee? Ich würde auch sehr gerne deine Familie kennenlernen.
Bitte antworte mir bald!
Herzliche Grüße
Deine Tamara`,
        points: [
            {
                text: "Vorschlag zum Treffen",
                hint: "Beispiele: Die Idee, uns zu treffen, finde ich super! / Ja, lass uns unbedingt etwas unternehmen. / Wann genau wärst du denn in der Gegend?"
            },
            {
                text: "Jemanden mitbringen",
                hint: "Beispiele: Du kannst gerne deine Familie mitbringen! / Meine Familie würde sich auch freuen, dich kennenzulernen. / Ich komme alleine zu dem Treffen."
            },
            {
                text: "Frage zur neuen Arbeitsstelle",
                hint: "Beispiele: Das ist ja interessant, dass du eine neue Stelle hast! / Erzähl mal mehr von deiner neuen Arbeit. / Wie gefällt es dir dort?"
            },
            {
                text: "Warum Sie nicht geschrieben haben",
                hint: "Beispiele: Entschuldige, dass ich so lange nicht geschrieben habe. / Ich hatte in letzter Zeit viel Stress. / Bei mir war viel los, deshalb..."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 15,
        sender: "Jan",
        content: `Liebe(r)........
Ich sende dir ganz viele Grüße aus Rom! Du weißt ja, wie sehr mir diese Stadt gefällt. Ich bin hier von morgens bis abends nur unterwegs. Diese Museen, Parks, Plätze und natürlich das Essen - wunderbar! Gestern Abend war ich übrigens bei einem Rockkonzert. Ich fand die Musik ganz toll und die Stimmung war super.
Doch leider ist mein Urlaub schon fast vorbei und in drei Tagen muss ich wieder zurück nach Deutschland. Welche Stadt ist eigentlich deine Lieblingsstadt? Hast du schon Pläne für deinen nächsten Urlaub? Vielleicht können wir uns ja mal wieder treffen.
Herzliche Grüße
Jan`,
        points: [
            {
                text: "Ihre Lieblingsstadt",
                hint: "Beispiele: Meine Lieblingsstadt ist... / Ich mag ... sehr gerne, weil... / Ich war noch nie in Rom, aber es klingt toll!"
            },
            {
                text: "Welche Musik Sie mögen",
                hint: "Beispiele: Ich höre gerne Rockmusik/Popmusik/klassische Musik. / Ein Konzertbesuch wäre auch mal wieder schön. / Ich mag verschiedene Musikrichtungen."
            },
            {
                text: "Ihre Pläne für den nächsten Urlaub",
                hint: "Beispiele: Ich habe noch keine konkreten Pläne für den nächsten Urlaub. / Ich möchte gerne nach ... reisen. / Vielleicht fahre ich im Sommer ans Meer."
            },
            {
                text: "Treffen mit Jan",
                hint: "Beispiele: Ja, wir sollten uns unbedingt mal wieder treffen! / Wie wäre es, wenn du wieder zurück bist? / Lass uns bald einen Termin ausmachen."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 16,
        sender: "Viktor",
        content: `Liebe(r)........
Ich sende dir sonnige Grüße von der wunderschönen Insel Malta! Katja, die Kinder und ich sind ganz glücklich! Strand, Kultur, Sport - all das ist hier möglich! Gestern haben wir uns sogar ein Auto gemietet und einen Ausflug gemacht. Und auch für mein Hobby, das Fotografieren, habe ich sehr viel Zeit, ich habe schon ganz viele Fotos gemacht. Ich schicke dir mit diesem Brief auch ein Buch über Malta, damit du siehst, wie interessant dieses Land ist. Hoffentlich gefällt dir das Buch.
Leider ist unser Urlaub auch schon in wenigen Tagen vorbei. Wie wäre das - vielleicht können wir uns ja wieder einmal treffen?
Bis hoffentlich bald
Viktor`,
        points: [
            {
                text: "Ihre Hobbys",
                hint: "Beispiele: Mein Hobby ist... / Ich interessiere mich auch für Fotografie/Lesen/Sport. / In meiner Freizeit mache ich gerne..."
            },
            {
                text: "Reaktion auf das Buch",
                hint: "Beispiele: Vielen Dank für das Buch über Malta! / Das ist sehr nett von dir. / Ich bin schon gespannt darauf, es zu lesen."
            },
            {
                text: "Ihre Pläne für den nächsten Urlaub",
                hint: "Beispiele: Malta klingt wirklich interessant! / Ich war noch nie dort. / Für meinen nächsten Urlaub habe ich mir ... überlegt."
            },
            {
                text: "Treffen mit Viktor",
                hint: "Beispiele: Ja, ein Treffen fände ich auch sehr schön! / Lass uns telefonieren, wenn ihr wieder da seid. / Wir können dann einen Termin vereinbaren."
            }
        ],
        instructions: "Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, eine passende Betreff, eine passende Anrede, Einleitung und einen passenden Schluss."
    },
    {
        id: 17,
        sender: "Rita",
        content: `Liebe(r)........
Endlich habe ich Zeit, dir wieder mal zu schreiben. Schade, dass du bei unserer Hochzeit nicht dabei sein konntest! Wir waren mit Freunden und Verwandten über 50 Personen. Ich habe ein langes, weißes Kleid getragen, und Karl hat sich für diesen Tag einen teuren, schwarzen Anzug gekauft, obwohl er sonst immer nur Jeans trägt. Natürlich gab es ein wunderbares Festessen und danach wurde getanzt. Karl und ich haben viele Geschenke bekommen, vor allem auch Geld für unsere Hochzeitsreise. Wir wissen aber noch gar nicht, wohin wir fahren wollen.
Wie läuft's eigentlich bei dir, du hast doch eine neue Stelle? Wie gefällt dir die Arbeit? Karl und ich würden uns sehr freuen, wenn du uns wieder mal besuchen würdest!
Liebe Grüße
Rita`,
        points: [
            {
                text: "Ihre neue Arbeitsstelle",
                hint: "Beispiele: Ja, ich habe eine neue Stelle und es gefällt mir sehr gut. / Die Arbeit ist interessant, aber auch anstrengend. / Meine Kollegen sind sehr nett."
            },
            {
                text: "Wie man in Ihrem Land heiratet",
                hint: "Beispiele: In meinem Land ist es üblich, dass... / Hochzeiten bei uns sind oft... / Es gibt verschiedene Traditionen, zum Beispiel..."
            },
            {
                text: "Vorschlag für Ritas Hochzeitsreise",
                hint: "Beispiele: Für eure Hochzeitsreise könnte ich euch ... empfehlen. / Wie wäre es mit einer Reise nach...? / Wenn ihr Entspannung sucht, ist ... vielleicht ideal."
            },
            {
                text: "Rita und Karl besuchen",
                hint: "Beispiele: Ich würde euch sehr gerne bald besuchen! / Vielen Dank für die Einladung. / Lasst uns einen Termin finden, der für alle passt."
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 18,
        sender: "Anna",
        content: `Liebe(r)........
Ich hoffe, es geht dir gut. Du hast dich schon lange nicht mehr gemeldet. Ist alles in Ordnung bei dir? Ich bin so froh, dass es nun Sommer ist und ich oft draußen sein kann. Hast du Urlaubspläne?
Ich schreibe dir auch, weil ich eine Bitte habe. Im Juli muss ich für eine Woche nach Dänemark reisen. In dieser Zeit brauche ich jemanden, der sich um meine Katze und meine Blumen kümmert. Könntest du das bitte machen oder möchtest du im Juli selbst verreisen? Sag mir doch kurz Bescheid, ob das klappt. Ich lade dich danach auch zum Abendessen bei unserem Lieblingsitaliener ein.
Liebe Grüße
Anna`,
        points: [
            {
                text: "Reaktion auf Annas Bitte",
                hint: "Beispiele: Natürlich helfe ich dir gerne mit deiner Katze und den Blumen! / Im Juli habe ich Zeit und kann das übernehmen. / Leider bin ich im Juli selbst nicht da."
            },
            {
                text: "Ihre Pläne für den Sommer",
                hint: "Beispiele: Im Sommer plane ich... / Ich möchte gerne verreisen/zu Hause bleiben. / Ich habe noch keine festen Pläne."
            },
            {
                text: "Warum Sie sich nicht gemeldet haben",
                hint: "Beispiele: Entschuldige, dass ich mich so lange nicht gemeldet habe. / Ich hatte viel um die Ohren. / Es tut mir leid, ich wollte schon längst schreiben."
            },
            {
                text: "Fragen zur Katze",
                hint: "Beispiele: Was frisst deine Katze denn gerne? / Gibt es etwas Besonderes, das ich beachten muss? / Wie oft muss ich die Blumen gießen?"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 19,
        sender: "Claudia",
        content: `Liebe(r)........
Leider haben wir uns schon länger nicht mehr geschrieben. Gibt es etwas Neues bei dir? Stell dir vor, mein Sohn Jonas wird nächste Woche schon fünf Jahre alt. Die Zeit vergeht schnell. An seinem Geburtstag wollen wir mit vier seiner Freunde in den Zoo gehen. Mein Sohn liebt Tiere, besonders die Affen, er kann sie stundenlang anschauen. Gehst du auch gerne in den Zoo und welches Tier magst du gerne? Gibt es in deinem Heimatland eigentlich auch Zoos wie hier in Deutschland? Vielleicht können wir uns bald mal wieder treffen. Wenn du Lust hast, könnten wir ja auch einmal zusammen einen Zoo besuchen.
Ganz liebe Grüße
Claudia`,
        points: [
            {
                text: "Reaktion auf den Vorschlag",
                hint: "Beispiele: Die Idee, zusammen in den Zoo zu gehen, finde ich toll! / Ja, lass uns das gerne machen. / Das wäre sicher ein schöner Ausflug."
            },
            {
                text: "Zoo im Heimatland",
                hint: "Beispiele: Ja, in meinem Heimatland gibt es auch Zoos. / Sie sind vielleicht etwas anders als in Deutschland. / Der bekannteste Zoo bei uns ist..."
            },
            {
                text: "Lieblingstier im Zoo",
                hint: "Beispiele: Ich gehe auch gerne in den Zoo. Mein Lieblingstier ist... / Ich mag besonders die Elefanten/Löwen/Giraffen. / Affen finde ich auch sehr lustig."
            },
            {
                text: "Was es Neues bei Ihnen gibt",
                hint: "Beispiele: Bei mir gibt es auch ein paar Neuigkeiten. / In letzter Zeit habe ich... / Es freut mich, von Jonas' Geburtstag zu hören!"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 20,
        sender: "Paul",
        content: `Liebe(r)........
Ich freue mich sehr über dein Interesse an einem gemeinsamen Ausflug in die Berge. Auch mir würde es gefallen, mehrere Tage zu wandern. Ich möchte dir vorschlagen, dass wir nach Südtirol fahren, denn die Berge dort sollen wirklich wunderschön sein! Was hältst du davon? Mir wäre Anfang Juni am liebsten, weil es da noch nicht so heiß ist! Vielleicht möchtest du noch jemanden mitbringen? Bitte schreibe mir bald, was du von meinem Vorschlag hältst.
Viele Grüße
Paul`,
        points: [
            {
                text: "Termin in Ordnung?",
                hint: "Beispiele: Anfang Juni passt mir sehr gut. / Leider habe ich Anfang Juni keine Zeit. / Könnten wir vielleicht auch Mitte Juni fahren?"
            },
            {
                text: "Reaktion auf Pauls Vorschlag",
                hint: "Beispiele: Dein Vorschlag, nach Südtirol zu fahren, klingt fantastisch! / Wandern in den Bergen fände ich super. / Ich war noch nie in Südtirol."
            },
            {
                text: "Jemanden mitbringen?",
                hint: "Beispiele: Ich würde gerne alleine mitkommen. / Darf ich meinen Partner/meine Partnerin mitbringen? / Ich frage mal, ob ein Freund/eine Freundin auch Lust hat."
            },
            {
                text: "Was wollen Sie noch von Paul wissen?",
                hint: "Beispiele: Wie lange wollen wir denn ungefähr unterwegs sein? / Brauchen wir spezielle Ausrüstung? / Hast du schon eine bestimmte Route im Auge?"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 21,
        sender: "Alicia",
        content: `Liebe(r)........
Ich hoffe, es geht dir gut. Ich habe eine Idee: Ich möchte die Leute aus unserem Englischkurs gerne einladen. Bei gutem Wetter feiern wir in meinem Garten. Aber was machen wir bei Regen? Kannst du mir vielleicht bei den Vorbereitungen helfen? Ich weiß noch nicht, was ich den Gästen anbieten kann. Hast du einen Vorschlag? Du weißt ja, dass ich nicht die beste Köchin bin. Den genauen Termin habe ich mir noch nicht überlegt. Meinst du, wir sollten lieber an einem Freitag oder an einem Samstag feiern? Schreib mir doch mal, was du über meine Pläne denkst.
Liebe Grüße
Alicia`,
        points: [
            {
                text: "Essen?",
                hint: "Beispiele: Wir könnten Salate und Brot machen. / Vielleicht bestellen wir Pizza? / Jeder könnte eine Kleinigkeit mitbringen, dann wird es ein Buffet."
            },
            {
                text: "Welche Tage?",
                hint: "Beispiele: Ein Samstag wäre wahrscheinlich besser für die meisten. / Freitagabend ist auch eine gute Idee. / Lass uns die anderen fragen, welcher Tag ihnen am besten passt."
            },
            {
                text: "Wie wirst du helfen?",
                hint: "Beispiele: Ich helfe dir gerne bei den Vorbereitungen! / Ich kann einen Kuchen backen oder einen Salat machen. / Sag mir einfach, was ich tun soll."
            },
            {
                text: "Wenn es regnet, was machen wir?",
                hint: "Beispiele: Wenn es regnet, könnten wir drinnen feiern. / Haben wir genug Platz in deiner Wohnung? / Vielleicht können wir Pavillons im Garten aufstellen?"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 22,
        sender: "Cora und Alex",
        content: `Liebe(r)........
Wie geht's? Wir haben lange nichts von dir gehört. Wir leben nun fast ein Jahr in Frankreich - und Marseille ist einfach eine tolle Stadt! Gestern haben wir lange überlegt, was wir im Sommer machen möchten. Wir dachten, es wäre schön, einige Freunde wiederzusehen. Und wir könnten auch dich besuchen. Wie findest du diese Idee? Würde dir Ende Juni passen? Oder bist du in dieser Zeit selbst weg? Falls ja, könnten wir auch erst Ende August kommen. Wir möchten nicht so lange bei dir bleiben, höchstens drei Tage. Wäre das in Ordnung? Bitte melde dich bald, damit wir unsere Reise planen können. Da wir zurzeit kein Auto haben, schreibe uns ein paar Tipps, wie wir am besten zu dir kommen.
Bis bald
Cora und Alex`,
        points: [
            {
                text: "Beste Zeit für den Besuch, warum?",
                hint: "Beispiele: Ende Juni passt mir sehr gut, da habe ich Urlaub. / Ende August wäre besser für mich, weil... / Beide Termine sind möglich."
            },
            {
                text: "Wie Ihre Freunde am besten anreisen",
                hint: "Beispiele: Ihr könntet mit dem Zug/Flugzeug anreisen. / Vom Bahnhof/Flughafen kommt ihr am besten mit... zu mir. / Ich kann euch auch abholen."
            },
            {
                text: "Was Sie gerne zusammen mit Ihren Freunden machen möchten",
                hint: "Beispiele: Wir könnten zusammen kochen und einen schönen Abend verbringen. / Ich würde euch gerne meine Stadt zeigen. / Vielleicht machen wir einen Ausflug in die Umgebung."
            },
            {
                text: "Fragen zu Marseille",
                hint: "Beispiele: Das klingt ja toll, dass ihr in Marseille lebt! / Wie gefällt es euch dort? / Was ist das Besondere an Marseille?"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 23,
        sender: "Corinna",
        content: `Liebe(r)........
Ich habe lange nichts von dir gehört. Nun habe ich von Sina erfahren, dass du bald eine Prüfung machst. Das ist ja ganz toll! Sina hat mir auch gesagt, dass du jeden Tag fleißig Deutsch lernst und wenig Zeit hast, andere Dinge zu machen. Daher schreibe ich dir lieber eine E-Mail, denn ich wollte dich fragen, ob wir nach deiner Prüfung etwas zusammen machen sollen? Wie wäre es mit einer Tour an die Nordsee, nach Prag oder Amsterdam, oder in den Schwarzwald? Was denkst du? Wenn du Zeit hast, schreibe mir bitte bald. Und für deine Prüfung wünsche ich dir viel Erfolg.
Bis bald
Corinna`,
        points: [
            {
                text: "Wohin Sie mit Corinna fahren möchten",
                hint: "Beispiele: Dein Vorschlag, nach meiner Prüfung etwas zu unternehmen, ist super! / Ich würde gerne mit dir nach Prag/Amsterdam fahren. / Die Nordsee klingt auch verlockend."
            },
            {
                text: "Wie Sie Deutsch lernen",
                hint: "Beispiele: Ja, ich lerne gerade sehr viel für meine Deutschprüfung. / Ich besuche einen Intensivkurs und lerne jeden Tag Vokabeln. / Es ist anstrengend, aber macht auch Spaß."
            },
            {
                text: "Was es bei Ihnen Neues gibt",
                hint: "Beispiele: Ansonsten gibt es bei mir nicht viel Neues. / Mein Fokus liegt gerade ganz auf dem Lernen. / Ich freue mich schon auf die Zeit nach der Prüfung."
            },
            {
                text: "Was Sie von Corinna wissen wollen",
                hint: "Beispiele: Wie geht es dir denn so? / Was machst du zurzeit? / Hast du vielleicht auch bald Urlaub?"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 24,
        sender: "Jakob",
        content: `Liebe(r)........
Wie geht es dir? Ich wollte dir schon lange schreiben, aber ich hatte nach meinem Urlaub noch so viel zu tun. Im Moment habe ich leider ein Problem mit meinem Nachbarn. Er hört oft sehr laut Musik, auch abends. Das stört mich sehr. Ich weiß nicht, was ich machen soll - hast du einen Tipp? Hattest du auch schon mal solche Schwierigkeiten? Wie sind denn deine Nachbarn? Ich habe dich übrigens noch nie in deiner Wohnung besucht. Wie ist sie? Erzähl doch mal ein bisschen. Hast du bald mal Zeit? Dann könnten wir was unternehmen. Worauf hast du Lust? Meld dich doch mal.
Viele Grüße
Jakob`,
        points: [
            {
                text: "Problem mit dem Nachbarn - Tipp",
                hint: "Beispiele: Das Problem mit deinem Nachbarn kenne ich. / Vielleicht sprichst du ihn mal freundlich darauf an? / Du könntest auch versuchen, mit anderen Nachbarn darüber zu reden."
            },
            {
                text: "Ihre Wohnung",
                hint: "Beispiele: Meine Wohnung ist ... (z.B. klein, aber fein / ziemlich groß / im Stadtzentrum). / Ich habe ... Zimmer. / Am besten gefällt mir..."
            },
            {
                text: "Vorschlag für Treffen",
                hint: "Beispiele: Ja, wir sollten uns bald mal treffen! / Wie wäre es nächste Woche mit einem Kaffee? / Wir könnten auch zusammen ins Kino gehen oder kochen."
            },
            {
                text: "Wie Ihre Nachbarn sind",
                hint: "Beispiele: Meine Nachbarn sind zum Glück sehr ruhig und freundlich. / Ich habe kaum Kontakt zu meinen Nachbarn. / Manchmal gibt es auch bei uns Probleme."
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 25,
        sender: "Naco",
        content: `Liebe(r)........
Wie geht es dir und deiner Familie? Bei mir läuft alles prima. Endlich habe ich eine neue Wohnung gefunden, die in der Nähe meiner Firma liegt. Weißt du, dass ich zu Fuß zur Arbeit gehen kann? Obwohl der Umzug mich sehr müde macht, fühle ich mich sehr wohl. Meine neue Wohnung hat 3 Zimmer. Zum Glück habe ich ein Arbeitszimmer für meine Lieblingsbücher. Ich mag am liebsten den Balkon, auf dem ich mich nach der anstrengenden Arbeit entspannen kann. Außerdem ist die Stadt nämlich sehr schön und das Essen schmeckt mir auch lecker. Willst du mich besuchen und die Stadt mit mir entdecken? Allerdings muss ich jeden Tag ins Büro gehen. Deshalb kenne ich noch niemanden hier und manchmal bin ich einsam. Hattest du schon mal dieses Problem? Was würdest du tun? Wie kann ich die Nachbarn kennenlernen? Wir haben uns lange schon nicht getroffen. Ich würde mich freuen, wenn du mich bald besuchen könntest.
Schreib mir bald.
Liebe Grüße
Naco`,
        points: [
            {
                text: "Reaktion auf den Vorschlag (ob Sie Naco besuchen möchten)",
                hint: "Beispiele: Dein Angebot, dich zu besuchen, nehme ich sehr gerne an! / Das ist eine tolle Idee, die Stadt mit dir zu entdecken. / Wann würde es dir denn passen?"
            },
            {
                text: "Etwas über Ihre Wohnung",
                hint: "Beispiele: Ich wohne in einer ... Wohnung mit ... Zimmern. / Meine Wohnung liegt ... / Ich fühle mich hier (nicht) sehr wohl."
            },
            {
                text: "Tipps für Naco, wie er Nachbarn kennenlernen kann",
                hint: "Beispiele: Du könntest dich bei deinen Nachbarn vorstellen. / Vielleicht gibt es ein Hausfest oder eine Nachbarschaftsgruppe? / Ein Aushang im Treppenhaus könnte auch helfen."
            },
            {
                text: "Was es bei Ihnen Neues gibt",
                hint: "Beispiele: Mir und meiner Familie geht es gut, danke. / Bei mir gibt es auch ein paar Neuigkeiten: ... / Ich freue mich, dass es dir in deiner neuen Wohnung gefällt."
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 26,
        sender: "Tobias",
        content: `Liebe(r)........
Wie erinnerst du dich an den schönen Urlaub am Bodensee? Ich wollte dir schon die ganze Zeit schreiben, hatte aber wenig Zeit. Jetzt hat es endlich geklappt. Wie geht es dir? Bei mir läuft alles super. Ich bin inzwischen mit dem Studium fertig und hoffe, dass ich bald eine Arbeit finde. Und das Beste: Ich habe endlich eine größere Wohnung gefunden. Und das möchte ich feiern. Hast du Lust, mich zu besuchen und mitzufeiern? Die Party findet am Samstag, dem 5. September statt. Für Essen und Trinken ist gesorgt. Du brauchst nichts mitzubringen außer vielleicht Musik aus deinem Land. Wir wollen ja auch tanzen! Und wenn du schon mal in Wien bist, kannst du auch etwas länger bleiben. Schlafen kannst du bei mir, Platz gibt es genug. Überleg es dir, ich würde mich sehr freuen, dich wiederzusehen. Meine neue Adresse ist Linzer Straße 400, 1140 Wien. Und am Sonntag könnte ich dir Wien zeigen, die Stadt wird dir bestimmt gefallen. Lass bald etwas von dir hören!
Viele Grüße
Tobias`,
        points: [
            {
                text: "Dass Sie gern kommen möchten",
                hint: "Beispiele: Vielen Dank für die Einladung zu deiner Party! Ich komme sehr gerne. / Das ist ja eine tolle Nachricht, herzlichen Glückwunsch zur neuen Wohnung! / Ich freue mich, dich in Wien zu besuchen."
            },
            {
                text: "Ob Sie noch jemanden mitbringen können",
                hint: "Beispiele: Darf ich vielleicht meinen Partner/meine Partnerin mitbringen? / Ich würde gerne alleine kommen. / Ist es in Ordnung, wenn ich einen Freund/eine Freundin mitbringe?"
            },
            {
                text: "Was Sie mitbringen möchten: Musik? Sonst etwas?",
                hint: "Beispiele: Ich bringe gerne Musik aus meinem Land mit. / Soll ich vielleicht einen Salat oder Kuchen mitbringen? / Ich habe da ein paar tolle Lieder zum Tanzen."
            },
            {
                text: "Wie Sie sich auf einen Besuch in Wien vorbereiten können",
                hint: "Beispiele: Ich werde mich ein bisschen über Wien informieren. / Hast du vielleicht Tipps, was ich mir unbedingt ansehen sollte? / Ich freue mich schon darauf, die Stadt mit dir zu erkunden."
            }
        ],
        instructions: "Überlegen Sie sich dabei eine passende Reihenfolge der Punkte. Vergessen Sie Datum und Anrede nicht, und schreiben Sie auch eine passende Einleitung und einen passenden Schluss. Sie haben 30 Minuten Zeit, den Brief zu schreiben."
    },
    {
        id: 27,
        sender: "Nora",
        content: `Liebe(r)........
Wie geht es dir? Ich schreibe dir erst jetzt, weil ich in den letzten Wochen viel zu tun hatte. Wie du weißt, bin ich umgezogen. In meiner neuen Wohnung fühle ich mich wohl: Sie ist groß und hell und ich habe sogar einen kleinen Garten. Die Nachbarn sind sehr nett. Leider habe ich hier noch keine neuen Freunde gefunden. Ich weiß nicht, wo ich neue Leute kennenlernen könnte. Hast du vielleicht ein paar Tipps für mich? Hoffentlich ist bei dir alles in Ordnung. Wir sollten uns bald wiedersehen. Schreib mir doch mal, ich freue mich!
Liebe Grüße
Nora`,
        points: [
            {
                text: "Neue Leute kennenlernen - Tipp",
                hint: "Beispiele: Um neue Leute kennenzulernen, könntest du einem Verein beitreten. / Vielleicht gibt es in deiner Nachbarschaft Kurse oder Treffs? / Online-Plattformen für gemeinsame Aktivitäten sind auch eine Möglichkeit."
            },
            {
                text: "Vorschlag zum Treffen",
                hint: "Beispiele: Ja, wir sollten uns unbedingt bald wiedersehen! / Wie wäre es, wenn ich dich in deiner neuen Wohnung besuche? / Lass uns bald einen Termin ausmachen."
            },
            {
                text: "Frage zu Noras Wohnung",
                hint: "Beispiele: Deine neue Wohnung klingt ja toll, besonders der Garten! / Wie groß ist denn der Garten? / Hast du schon Pläne für die Gartengestaltung?"
            },
            {
                text: "Was es Neues bei Ihnen gibt",
                hint: "Beispiele: Mir geht es gut, danke. / Bei mir gibt es nicht viel Neues, aber... / Ich freue mich, von dir zu hören und dass du dich wohlfühlst."
            }
        ],
        instructions: "Überlegen Sie sich dabei eine passende Reihenfolge der Punkte. Vergessen Sie Datum und Anrede nicht, und schreiben Sie auch eine passende Einleitung und einen passenden Schluss. Sie haben 30 Minuten Zeit, den Brief zu schreiben."
    },
    {
        id: 28,
        sender: "Jennifer",
        content: `Liebe(r)........
Entschuldige, dass ich mich erst jetzt wieder melde. Ich weiß, wir hatten ausgemacht, uns öfter mal zu schreiben. Aber es war so viel los in letzter Zeit. Ich habe eine Neuigkeit für dich: Meine kleine Schwester Janine heiratet im Oktober, und ich habe ihr versprochen, schon mal allen Freunden zu schreiben und Bescheid zu sagen. Die offizielle Einladung bekommst du natürlich noch von ihr direkt. Eddi, ihr zukünftiger Mann, ist echt nett, und wir mögen ihn alle sehr. Er ist Koch und arbeitet hier in einem Hotel. Wir planen jetzt alles. Gib mir deshalb möglichst bald Bescheid, ob du kommst und mit wem.
Herzliche Grüße
Jennifer`,
        points: [
            {
                text: "Reaktion auf die Neuigkeit",
                hint: "Beispiele: Das sind ja wundervolle Neuigkeiten! / Herzlichen Glückwunsch an Janine und Eddi! / Ich freue mich sehr für deine Schwester."
            },
            {
                text: "Übernachtungsmöglichkeit",
                hint: "Beispiele: Gibt es vielleicht eine Übernachtungsmöglichkeit in der Nähe? / Könntest du mir ein Hotel empfehlen? / Ich müsste wissen, wo ich schlafen kann."
            },
            {
                text: "Sie möchten zur Hochzeit kommen",
                hint: "Beispiele: Ich komme sehr gerne zur Hochzeit! / Bitte richte Janine aus, dass ich mich auf die Feier freue. / Ich werde auf jeden Fall dabei sein."
            },
            {
                text: "Hochzeitsgeschenk",
                hint: "Beispiele: Haben Janine und Eddi vielleicht eine Wunschliste? / Was könnte ich ihnen denn Schönes schenken? / Ich überlege mir ein passendes Geschenk."
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 29,
        sender: "Miroslav",
        content: `Liebe(r)........
Es tut mir leid, dass ich mich so lange nicht gemeldet habe, aber ich hatte in den vergangenen Wochen sehr viel zu tun. Ich habe eine kleine Firma gegründet. Nachdem ich einen Lieferwagen und Werkzeug gekauft habe, biete ich nun Gartenarbeiten und Reparaturen rund ums Haus an. Ich pflanze und pflege Blumen, schneide Gras und Bäume. Manchmal putze ich auch Gartenhäuschen und Garagen. Schon nach kurzer Zeit habe ich viele Kunden gewonnen, die mich immer wieder anrufen, wenn sie mich brauchen. Endlich bin ich mein eigener Chef. Was gibt es bei dir Neues? Schreib mir bald!
Beste Grüße
Miroslav`,
        points: [
            {
                text: "Welche Arbeit Sie machen/suchen",
                hint: "Beispiele: Ich arbeite zurzeit als... / Ich bin auf der Suche nach einer Stelle im Bereich... / Meine Arbeit macht mir (nicht so viel) Spaß."
            },
            {
                text: "Was Sie von Miroslavs Tätigkeit halten",
                hint: "Beispiele: Das finde ich ja toll, dass du deine eigene Firma gegründet hast! / Das ist sicher viel Arbeit, aber auch sehr erfüllend. / Respekt, dass du dein eigener Chef bist!"
            },
            {
                text: "Was es bei Ihnen Neues gibt",
                hint: "Beispiele: Bei mir gibt es auch einiges Neues: ... / In letzter Zeit habe ich mich auf ... konzentriert. / Es freut mich, von deinem Erfolg zu hören."
            },
            {
                text: "Frage zu Miroslavs Kunden",
                hint: "Beispiele: Wie findest du denn deine Kunden? / Machst du viel Werbung? / Sind es hauptsächlich Privatkunden oder auch Firmen?"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 30,
        sender: "Mara",
        content: `Liebe(r)........
Wie geht es dir? Warum hast du in den letzten Wochen nicht mehr geschrieben? Leider haben wir uns ja auch schon sehr lange nicht mehr gesehen. Doch das kann sich bald ändern. Mein neuer Freund und ich haben zwei Wochen Urlaub und möchten eine Reise mit dem Auto machen. Dabei möchten wir dich auch gerne treffen. Schließlich möchte ich dir ja auch meinen Freund vorstellen. Vielleicht hast du eine Idee, wo wir uns treffen könnten. Kannst du uns auch ein schönes Hotel bei euch in der Nähe empfehlen? Antworte mir bald!
Herzliche Grüße
Mara`,
        points: [
            {
                text: "Warum Sie so lange nicht geschrieben haben",
                hint: "Beispiele: Entschuldige bitte, dass ich mich so lange nicht gemeldet habe. / Ich hatte in letzter Zeit viel zu tun. / Es tut mir leid, ich war sehr beschäftigt."
            },
            {
                text: "Reaktion auf Maras neuen Freund",
                hint: "Beispiele: Das ist ja schön, dass du einen neuen Freund hast! / Ich bin schon gespannt darauf, ihn kennenzulernen. / Ich freue mich für dich."
            },
            {
                text: "Vorschlag zur Übernachtung im Urlaub (Hotel, Homestay ...)",
                hint: "Beispiele: Ihr könntet im Hotel ... übernachten. / Es gibt auch eine nette Pension namens... / Vielleicht findet ihr eine Ferienwohnung über Airbnb."
            },
            {
                text: "Vorschlag für ein Treffen / oder nicht",
                hint: "Beispiele: Ja, ich würde mich sehr freuen, euch zu treffen! / Wir könnten uns am ... treffen. / Leider passt es mir zu dieser Zeit nicht so gut, aber vielleicht ein anderes Mal?"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 31,
        sender: "Karla",
        content: `Liebe(r)........
Wie geht es dir? In der Zwischenzeit habe ich mich schon gut in Bamberg eingelebt. Ich wohne in der Altstadt und fühle mich sehr wohl. Hier brauche ich kein Auto und kann alles zu Fuß oder mit dem Fahrrad erreichen, sogar meinen Arbeitsplatz. Ich arbeite jetzt als Rezeptionistin im Hotel "Zur Residenz". Ich habe sehr viel zu tun und jeden Tag gibt es neue Überraschungen. Aber gerade das liebe ich ja an meinem Job. Komm mich doch besuchen! Dann zeige ich dir meine neue Wohnung und wir können endlich mal wieder lange reden.
Viele Grüße
Karla`,
        points: [
            {
                text: "Etwas über Ihren Wohnort",
                hint: "Beispiele: Ich wohne in... (Stadt/Dorf). / Mein Wohnort ist eher ruhig/lebhaft. / Ich mag es hier, weil..."
            },
            {
                text: "Etwas über Ihre Wohnung",
                hint: "Beispiele: Meine Wohnung hat ... Zimmer und einen Balkon/Garten. / Ich wohne in der Nähe von... / Ich fühle mich in meiner Wohnung (sehr) wohl."
            },
            {
                text: "Karla besuchen?",
                hint: "Beispiele: Dein Angebot, dich in Bamberg zu besuchen, klingt toll! / Ich würde dich sehr gerne besuchen und deine neue Wohnung sehen. / Wann würde es dir denn passen?"
            },
            {
                text: "Frage zu Karlas Arbeit",
                hint: "Beispiele: Das ist ja interessant, dass du als Rezeptionistin arbeitest! / Wie sind denn die Arbeitszeiten im Hotel? / Macht dir der Umgang mit den Gästen Spaß?"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 32,
        sender: "Moritz",
        content: `Liebe(r)........
Ich sende dir ganz viele Grüße aus San Diego. Du weißt ja, wie sehr ich Kalifornien mag! Ich habe mir ein Auto gemietet und bin von morgens bis abends nur unterwegs. Ich liebe die Architektur hier, diese Hochhäuser und natürlich die Strände - wunderbar. Gestern Abend war ich übrigens in einem Club: Die Musik war super. Doch leider ist mein Urlaub schon fast vorbei, in zwei Tagen fliege ich zurück und dann beginnt der Alltag wieder. Vielleicht können wir uns ja in der nächsten Woche treffen. Dann erzähle ich dir alles genauer. Welches Land ist eigentlich dein Lieblingsland?
Viele Grüße
Moritz`,
        points: [
            {
                text: "Ihr Lieblingsland",
                hint: "Beispiele: Mein Lieblingsland ist... / Ich mag ... sehr gerne, weil die Kultur/Natur/Menschen dort... / Ich war noch nie in Kalifornien, aber es klingt aufregend."
            },
            {
                text: "Was Sie an fremden Orten interessiert",
                hint: "Beispiele: An fremden Orten interessieren mich besonders die Sehenswürdigkeiten/die lokale Küche/die Natur. / Ich lerne gerne neue Kulturen kennen. / Ich mag es, einfach durch die Straßen zu schlendern."
            },
            {
                text: "Welche Musik Sie gern hören",
                hint: "Beispiele: Ich höre gerne ... (Musikrichtung). / Die Musik in dem Club klang ja gut! / Ich bin nicht so der Club-Typ, aber gute Musik mag ich auch."
            },
            {
                text: "Vorschlag für ein Treffen mit Moritz",
                hint: "Beispiele: Ja, lass uns unbedingt nächste Woche treffen! / Ich bin schon gespannt auf deine Erzählungen. / Wie wäre es am ... (Tag)?"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 33,
        sender: "Anne",
        content: `Liebe(r)........
Ich hoffe, es geht dir gut. Was hast du in letzter Zeit so erlebt? Erzähl doch mal: Du bist ja auch zu Laras 30. Geburtstag eingeladen. Wollen wir zusammen dorthin fahren? Würdest du lieber mit dem Zug oder dem Auto fahren? Lara lebt ja jetzt in Garmisch-Partenkirchen und das ist von uns aus ziemlich weit weg. Ich denke auch darüber nach, nach der Feier noch ein paar Tage dort zu bleiben und Urlaub zu machen. Hättest du darauf auch Lust? Das wäre super! Und was könnten wir Lara schenken? Zum 30. sollte es schon etwas Besonderes sein.
Liebe Grüße
Anne`,
        points: [
            {
                text: "Geschenk für Lara",
                hint: "Beispiele: Für Laras Geschenk habe ich mir überlegt, dass... / Vielleicht könnten wir zusammen etwas schenken? / Was hältst du von einem Gutschein für...?"
            },
            {
                text: "Gemeinsam länger bleiben?",
                hint: "Beispiele: Die Idee, noch ein paar Tage in Garmisch zu bleiben, finde ich super! / Ich hätte auch Lust darauf. / Leider kann ich nicht länger bleiben, weil..."
            },
            {
                text: "Zug oder Auto",
                hint: "Beispiele: Ich würde lieber mit dem Zug fahren, das ist entspannter. / Mit dem Auto wären wir flexibler. / Lass uns die Vor- und Nachteile abwägen."
            },
            {
                text: "Was Sie in letzter Zeit erlebt haben",
                hint: "Beispiele: Mir geht es gut, danke. In letzter Zeit habe ich... / Ich war viel beschäftigt mit... / Es ist schön, von dir zu hören und ja, ich bin auch zu Laras Geburtstag eingeladen."
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 34,
        sender: "Emilia",
        content: `Liebe(r)........
Wie geht es dir? Ich habe bald Uni-Prüfungen und lerne abends sehr fleißig. Ich dachte, du könntest mir ein paar Tipps zum Lernen geben. Außerdem würde ich gerne wissen, wo du bist. Vielleicht kann ich dich nach den Prüfungen besuchen. Ende Juli oder August, hast du Zeit? Ich würde gerne fragen, ob ich bei dir übernachten kann oder ob du genug Platz hast. Ich kenne mich in deiner Stadt nicht so gut aus.
Schreibe mir doch bald!
Viele Grüße
Emilia`,
        points: [
            {
                text: "Tipps fürs Lernen",
                hint: "Beispiele: Beim Lernen hilft es mir, Pausen zu machen. / Du könntest dir einen Lernplan erstellen. / Wichtig ist auch, genug zu schlafen und dich gut zu ernähren. / Wiederholung ist der Schlüssel."
            },
            {
                text: "Gemeinsame Unternehmung",
                hint: "Beispiele: Wenn ich dich besuche, könnten wir die Stadt erkunden. / Ich hätte Lust, mit dir ins Café zu gehen oder einen Ausflug zu machen. / Was würdest du gerne unternehmen?"
            },
            {
                text: "Übernachtung",
                hint: "Beispiele: Ja, du kannst gerne bei mir übernachten, ich habe genug Platz. / Ich habe ein Gästezimmer/eine Schlafcouch. / Das klären wir dann im Detail."
            },
            {
                text: "Zeitpunkt",
                hint: "Beispiele: Ende Juli passt mir gut. / Im August habe ich auch Zeit. / Welcher Zeitraum wäre dir denn am liebsten?"
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    },
    {
        id: 35,
        sender: "Laura",
        content: `Liebe (r).....
du weißt ja, dass ich schon lange nach einem Job suche, der mit meinem Hobby Musik zu tun hat. Stell dir vor, nun habe ich den perfekten Job gefunden. Ich gehe für sechs Monate mit der berühmten deutschen Musikgruppe „Wohnraumhelden“ auf Tournee durch verschiedene Länder – als Assistentin des Managers. Dabei komme ich mit der Gruppe auch ganz in die Nähe deiner Stadt. Leider war ich ja noch nie da. Kannst du mir ein paar Tipps geben, was ich dort so machen kann?\nIm Moment sind wir noch mit der Planung beschäftigt. Deshalb weiß ich noch nicht genau, wann es losgeht. Wenn ich den genauen Termin kenne, melde ich mich sofort bei dir. Ich hoffe, dass wir uns dann einmal treffen können, und natürlich organisiere ich auch Freikarten für dich und deine Freunde.
Ich freue mich schon!
Liebe Grüße
Laura`,
        points: [
            {
                text: "Ihre Lieblingsmusik",
                hint: "Beispiele: Ich höre am liebsten Pop- und Rockmusik. / Die Gruppe ‚Wohnraumhelden‘ kenne ich sogar ein bisschen. / Deine Nachricht ist super, weil Musik auch mein Hobby ist."
            },
            {
                text: "Wichtige Tipps",
                hint: "Beispiele: Du solltest unbedingt die Altstadt besichtigen. / Ein wichtiger Tipp ist auch, in einem der kleinen Cafés am Fluss zu sitzen. / Wenn du Zeit hast, kannst du auch den [Name eines Parks] besuchen."
            },
            {
                text: "Reaktion auf Freikarten",
                hint: "Beispiele: Vielen Dank für das Angebot mit den Freikarten! Darüber freue ich mich riesig. / Das ist ja eine fantastische Überraschung. / Gerne nehme ich die Einladung zum Konzert an."
            },
            {
                text: "Treffen?",
                hint: "Beispiele: Ja, wir sollten uns auf jeden Fall treffen! / Dein Vorschlag für ein Treffen ist super. / Gib mir einfach Bescheid, wenn du den genauen Termin kennst, dann können wir etwas planen."
            }
        ],
        instructions: "Bevor Sie den Brief schreiben, überlegen Sie sich eine passende Reihenfolge der Punkte, eine passende Einleitung und einen passenden Schluss. Vergessen Sie nicht Datum und Anrede."
    }
];

// Biến trạng thái (giữ nguyên)
let selectedTopic = null;
let wordCount = 0;
let isTopicVisible = true;
let currentFontSize = window.innerWidth < 768 ? 16 : 18;

// Hiển thị popup (giữ nguyên)
function showPopup(title, message) {
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupMessage').textContent = message;
    document.getElementById('popup').classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

// Ẩn popup (giữ nguyên)
function hidePopup() {
    document.getElementById('popup').classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

// Hiển thị loading (giữ nguyên)
function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('checkBtn').disabled = true;
}

// Ẩn loading (giữ nguyên)
function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('checkBtn').disabled = false;
}

// Hàm gọi API Gemini nội bộ, trả về text thô
async function callGeminiAPIInternal(prompt, apiKey) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                // generationConfig: { responseMimeType: "text/plain" } // Có thể thử nghiệm
            })
        });
        if (!response.ok) {
            const errorBody = await response.text();
            let errorMessage = `HTTP ${response.status}: ${response.statusText}.`;
            if (response.status === 429) {
                errorMessage = `429 Quota Exceeded. Body: ${errorBody}`;
            } else {
                 errorMessage += ` Body: ${errorBody}`;
            }
            throw new Error(errorMessage);
        }
        const data = await response.json();

        if (data.candidates && data.candidates[0] && data.candidates[0].finishReason && data.candidates[0].finishReason !== "STOP") {
            if (data.candidates[0].finishReason === "SAFETY") {
                 console.warn(`Content generation stopped due to SAFETY for key ${apiKey.slice(0,10)}`);
                 throw new Error(`Nội dung bị chặn vì lý do an toàn (SAFETY) với key ${apiKey.slice(0,10)}.`);
            } else {
                 console.warn(`Content generation stopped due to ${data.candidates[0].finishReason} for key ${apiKey.slice(0,10)}`);
                 throw new Error(`Nội dung bị chặn vì lý do: ${data.candidates[0].finishReason} với key ${apiKey.slice(0,10)}.`);
            }
        }

        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts[0] || typeof data.candidates[0].content.parts[0].text === 'undefined') {
            console.error('Invalid API response structure:', data);
            throw new Error('Cấu trúc phản hồi API không hợp lệ.');
        }
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error(`Error in callGeminiAPIInternal with key ${apiKey.slice(0,10)}:`, error.message);
        throw error;
    }
}

// Sửa JSON không hợp lệ (giữ nguyên)
function fixJson(jsonStr) {
    if (typeof jsonStr !== 'string') {
        console.warn('fixJson received non-string input:', jsonStr);
        return null;
    }
    jsonStr = jsonStr.replace(/```json\s*|\s*```/g, '').trim();
    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        console.warn("Initial JSON.parse failed. Attempting to fix JSON string:", jsonStr.substring(0, 200), "Error:", e.message);
        let fixedJsonStr = jsonStr
            .replace(/,\s*([}\]])/g, '$1') // Xóa dấu phẩy thừa trước dấu đóng ngoặc
            // .replace(/(\w+)\s*:/g, '"$1":') // Thêm dấu ngoặc kép cho key - CẨN THẬN: có thể làm hỏng value là string có dấu :
            .replace(/(?<!\\)'/g, '"'); // Thay thế dấu nháy đơn bằng kép, trừ khi nó được escape (\')

        // Cố gắng thêm dấu ngoặc kép cho key một cách an toàn hơn
        try {
            // Thử parse với string đã sửa một phần
            JSON.parse(fixedJsonStr);
            return JSON.parse(fixedJsonStr);
        } catch (e_mid) {
             // Nếu vẫn lỗi, thử chiến lược khác cho keys
            fixedJsonStr = fixedJsonStr.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
        }


        try {
            return JSON.parse(fixedJsonStr);
        } catch (e2) {
            console.error("Failed to parse JSON even after attempting to fix:", fixedJsonStr.substring(0,200), "Error:", e2.message);
            const firstBrace = jsonStr.indexOf('{');
            const lastBrace = jsonStr.lastIndexOf('}');
            if (firstBrace !== -1 && lastBrace > firstBrace) {
                const extractedJson = jsonStr.substring(firstBrace, lastBrace + 1);
                try {
                    return JSON.parse(extractedJson);
                } catch (e3) {
                    console.error("Failed to parse extracted JSON:", extractedJson.substring(0,200), "Error:", e3.message);
                    return null;
                }
            }
            return null;
        }
    }
}


// Thử với các khóa API khác nhau, tuần tự, PRIMARY_KEY trước
async function tryWithDifferentKey(prompt, parseAsJson = true) {
    let keysToTry = [PRIMARY_KEY];
    API_KEYS.forEach(key => {
        if (key !== PRIMARY_KEY) {
            keysToTry.push(key);
        }
    });
    keysToTry = keysToTry.filter(key => key && typeof key === 'string' && key.length > 0);

    if (keysToTry.length === 0) {
        console.error('No valid API keys to try.');
        throw new Error('Không có API key hợp lệ nào để thử.');
    }

    let lastError = null;

    for (const key of keysToTry) {
        try {
            console.log(`Attempting API call with key: ${key.slice(0, 10)}... (parseAsJson: ${parseAsJson})`);
            const rawResponse = await callGeminiAPIInternal(prompt, key);

            if (key !== PRIMARY_KEY) {
                console.log(`Switching PRIMARY_KEY from ${PRIMARY_KEY.slice(0,10)} to: ${key.slice(0,10)}`);
                PRIMARY_KEY = key;
            }
            console.log(`API call successful with key: ${key.slice(0,10)}`);

            if (parseAsJson) {
                const jsonData = fixJson(rawResponse);
                if (jsonData === null && rawResponse && rawResponse.trim().length > 0 && !(rawResponse.trim() ==='{}' || rawResponse.trim() === 'null')) {
                    console.warn(`fixJson returned null for non-empty/non-trivial response from key ${key.slice(0,10)}. Response: ${rawResponse.substring(0,100)}`);
                    lastError = new Error(`Không thể phân tích JSON từ phản hồi của API với key ${key.slice(0,10)}.`);
                    continue;
                }
                return jsonData;
            }
            return rawResponse;
        } catch (error) {
            lastError = error;
            console.warn(`Error with key ${key.slice(0,10)}: ${error.message}.`);
            if (keysToTry.indexOf(key) === keysToTry.length - 1) {
                console.error('All API keys failed. Last error:', lastError.message);
                throw lastError;
            }
            // Tự động thử key tiếp theo trong vòng lặp
        }
    }
    console.error('All API keys failed. Last error:', lastError ? lastError.message : "Unknown error after trying all keys");
    throw lastError || new Error('Tất cả API key không hoạt động hoặc không trả về phản hồi hợp lệ.');
}


// Đánh giá bài viết qua API
async function evaluateLetter(userLetter, topic) {
    const prompt = `
Bạn là một giáo viên chấm thi tiếng Đức trình độ B1. Hãy kiểm tra bài viết thư tiếng Đức sau đây.

**Đề bài gốc (Người gửi: ${topic.sender})**:
${topic.content}

**Các điểm cần trả lời trong thư**:
${topic.points.map((point, idx) => `${idx + 1}. ${point.text}`).join('\n')}

**Hướng dẫn chung của đề bài**:
${topic.instructions}

**Bài viết của người dùng**:
${userLetter}

**Yêu cầu đánh giá chi tiết (TRẢ VỀ DƯỚI DẠNG JSON)**:
1.  **Chính tả (Rechtschreibung)**: Liệt kê tối đa 5 lỗi chính tả nổi bật nhất, chỉ rõ từ sai và dạng đúng. Nếu không có lỗi hoặc ít, ghi nhận.
2.  **Ngữ pháp (Grammatik)**: Nêu tối đa 5 lỗi ngữ pháp quan trọng (chia động từ, cấu trúc câu, mạo từ, giới từ, v.v.), chỉ rõ lỗi và cách sửa. Nếu ngữ pháp tốt, ghi nhận.
3.  **Từ vựng (Wortschatz)**: Đánh giá sự phù hợp và đa dạng của từ vựng cho trình độ B1. Gợi ý một vài từ/cụm từ tốt hơn nếu có.
4.  **Mức độ hoàn thành yêu cầu đề bài (Inhaltliche Vollständigkeit)**: Bài viết đã trả lời đủ và rõ ràng các điểm được yêu cầu trong đề chưa? Nếu thiếu, chỉ rõ điểm nào.
5.  **Cấu trúc thư (Briefformat)**: Thư có đủ các phần (Anrede, Einleitung, Hauptteil, Schluss, Grußformel, Datum nếu cần) và logic không?
6.  **Đếm số từ (Wortanzahl)**: Đếm chính xác tổng số từ trong bài viết của người dùng.
7.  **Chấm điểm tổng quan (Gesamtbewertung)**: Đưa ra điểm số trên thang điểm 10 (ví dụ: 7.5/10).
8.  **Nhận xét chung và Mẹo cải thiện (Allgemeines Feedback und Verbesserungstipps)**: Đưa ra nhận xét tổng thể bằng tiếng Việt, bao gồm những điểm tốt và những điểm cần cải thiện. Đưa ra 2-3 mẹo cụ thể bằng tiếng Việt để người dùng cải thiện kỹ năng viết thư.

**ĐỊNH DẠNG TRẢ VỀ (JSON)**:
Vui lòng trả lời bằng một đối tượng JSON hợp lệ với các khóa sau:
-   \`rechtschreibung\`: { "fehler": ["lỗi 1 -> sửa", "lỗi 2 -> sửa"], "kommentar": "nhận xét về chính tả" }
-   \`grammatik\`: { "fehler": ["lỗi 1 -> sửa", "lỗi 2 -> sửa"], "kommentar": "nhận xét về ngữ pháp" }
-   \`wortschatz\`: { "bewertung": "tốt/khá/cần cải thiện", "vorschlaege": ["từ gợi ý 1", "từ gợi ý 2"], "kommentar": "nhận xét về từ vựng" }
-   \`inhalt\`: { "abgedeckt": true/false, "fehlende_punkte": ["điểm thiếu 1", "điểm thiếu 2"], "kommentar": "nhận xét về nội dung" }
-   \`briefformat\`: { "bewertung": "đầy đủ/thiếu phần...", "kommentar": "nhận xét về cấu trúc" }
-   \`wortanzahl\`: số nguyên (ví dụ: 105)
-   \`gesamtnote\`: số thực (ví dụ: 8.0)
-   \`feedback_vietnamesisch\`: "Nhận xét chi tiết và mẹo bằng tiếng Việt..."
`;

    try {
        const resultJson = await tryWithDifferentKey(prompt, true); // true để parse JSON

        if (resultJson && typeof resultJson === 'object') {
            let feedbackString = `<strong>ĐÁNH GIÁ CHI TIẾT:</strong>\n\n`;
            feedbackString += `📝 <strong>CHÍNH TẢ:</strong>\nLỗi: ${resultJson.rechtschreibung?.fehler?.join(', ') || 'Không có lỗi đáng kể.'}\nNhận xét: ${resultJson.rechtschreibung?.kommentar || ''}\n\n`;
            feedbackString += `📖 <strong>NGỮ PHÁP:</strong>\nLỗi: ${resultJson.grammatik?.fehler?.join(', ') || 'Không có lỗi đáng kể.'}\nNhận xét: ${resultJson.grammatik?.kommentar || ''}\n\n`;
            feedbackString += `🗣️ <strong>TỪ VỰNG:</strong>\nĐánh giá: ${resultJson.wortschatz?.bewertung || ''}\nGợi ý: ${resultJson.wortschatz?.vorschlaege?.join(', ') || 'Không có.'}\nNhận xét: ${resultJson.wortschatz?.kommentar || ''}\n\n`;
            feedbackString += `📋 <strong>NỘI DUNG:</strong>\nHoàn thành: ${resultJson.inhalt?.abgedeckt ? 'Đầy đủ' : 'Chưa đầy đủ'}\nĐiểm thiếu: ${resultJson.inhalt?.fehlende_punkte?.join(', ') || 'Không có.'}\nNhận xét: ${resultJson.inhalt?.kommentar || ''}\n\n`;
            feedbackString += `📨 <strong>CẤU TRÚC THƯ:</strong>\nĐánh giá: ${resultJson.briefformat?.bewertung || ''}\nNhận xét: ${resultJson.briefformat?.kommentar || ''}\n\n`;
            feedbackString += `🔢 <strong>SỐ TỪ:</strong> ${resultJson.wortanzahl || 'N/A'}\n`;
            feedbackString += `🌟 <strong>ĐIỂM TỔNG QUAN:</strong> ${resultJson.gesamtnote || 'N/A'}/10\n\n`;
            feedbackString += `💡 <strong>NHẬN XÉT CHUNG VÀ MẸO (Tiếng Việt):</strong>\n${resultJson.feedback_vietnamesisch || 'Không có nhận xét chi tiết.'}\n`;

            return {
                wordCount: resultJson.wortanzahl || countWords(userLetter),
                score: resultJson.gesamtnote || 0,
                feedback: feedbackString
            };
        } else {
            console.warn(`Evaluation API returned null or non-object response after tryWithDifferentKey.`);
            const errorDetail = resultJson === null ? "Phản hồi không thể phân tích dưới dạng JSON." : "Phản hồi không phải là đối tượng JSON hợp lệ.";
            throw new Error(`API không trả về dữ liệu JSON hợp lệ cho đánh giá. ${errorDetail}`);
        }
    } catch (error) {
        console.error(`Failed to evaluate letter: ${error.message}`);
        // showPopup đã được gọi trong checkAnswer, không cần gọi lại ở đây
        // showPopup('Lỗi API Đánh Giá', `Không thể đánh giá bài viết: ${error.message}. Vui lòng thử lại sau.`);
        throw error; // Ném lỗi ra để checkAnswer xử lý hiển thị popup
    }
}

// Hàm tạo thư mẫu 10/10
async function generateModelLetter(userLetter, topic) {
    const pointsWithHints = topic.points.map((point, idx) =>
        `${idx + 1}. ${point.text}\n   Gợi ý: ${point.hint || "Không có gợi ý cụ thể."}`
    ).join('\n\n');

    const prompt = `
Bạn là một giáo viên tiếng Đức giàu kinh nghiệm, chuyên chấm thi và hướng dẫn viết thư trình độ B1 TELC.
Dựa trên đề bài, các gợi ý cho từng điểm, và bài viết của học sinh dưới đây, hãy viết một bức thư mẫu hoàn chỉnh, đạt điểm tuyệt đối (10/10) cho trình độ B1 dựa trên bài viết của học sinh.

**Đề bài gốc (Người gửi: ${topic.sender})**:
${topic.content}

**Các điểm cần trả lời trong thư (Leitpunkte) và Gợi ý (Hints)**:
${pointsWithHints}

**Hướng dẫn chung của đề bài**:
${topic.instructions}

**Bài viết của học sinh (để tham khảo và cải thiện)**:
${userLetter || "Học sinh chưa viết gì."}

**Sử dụng các "Cấu trúc câu" và "liên từ đơn đôi" dưới đây trong bài viết mẫu**:
    Cấu trúc câu chi tiết cho từng phần
    Bạn hãy coi đây là những "mảnh ghép" có thể lắp ráp lại để tạo thành một bức thư hoàn chỉnh.

        1. Địa điểm, ngày tháng (Ort, Datum)
        Luôn viết ở góc trên cùng bên phải.

        Hanoi, den 08.06.2025
        München, den 21. Juni 2025
        2. Lời chào (Anrede)
        Vì đây là thư cho bạn bè, hãy dùng cách thân mật.

        Với tên nữ: Liebe [Tên], (Ví dụ: Liebe Petra,)
        Với tên nam: Lieber [Tên], (Ví dụ: Lieber Andreas,)
        Với cả hai người: Liebe [Tên nữ], lieber [Tên nam], (Ví dụ: Liebe Cora, lieber Alex,)
        QUAN TRỌNG: Sau lời chào luôn có dấu phẩy (,), và chữ cái đầu tiên của câu tiếp theo sẽ viết thường.
        3. Câu mở đầu (Einleitung)
        Luôn bắt đầu bằng việc cảm ơn và phản hồi ngắn gọn về lá thư bạn nhận được.

        Để cảm ơn:
        vielen Dank für deinen netten/lieben/tollen Brief!
        ich habe mich sehr über deinen Brief gefreut.
        Để xin lỗi vì trả lời muộn (nếu cần):
        Entschuldige, dass ich dir erst jetzt schreibe, aber ich hatte in letzter Zeit viel zu tun.
        Es tut mir leid, dass ich so lange nicht geantwortet habe.
        Kết hợp:
        vielen Dank für deinen netten Brief! Ich habe mich sehr gefreut, wieder von dir zu hören.
        4. Nội dung chính (Hauptteil) - Trả lời 4 Leitpunkte
        Đây là phần quan trọng nhất. Hãy sử dụng các cấu trúc câu sau cho từng loại yêu cầu.

        a) Phản hồi về một đề nghị, lời mời hoặc tin tức (Reaktion auf Vorschlag/Einladung/Neuigkeit)

        Tích cực:
        Dein Vorschlag, ... zu ..., finde ich super/toll/großartig! (Đề nghị của bạn về việc... tôi thấy thật tuyệt vời!)
        Deine Idee ist wirklich fantastisch! (Ý tưởng của bạn thật sự rất tuyệt!)
        Ich freue mich riesig über deine Einladung. (Tôi cực kỳ vui về lời mời của bạn.)
        Herzlichen Glückwunsch zu deiner neuen Stelle/Wohnung! (Chúc mừng cậu với công việc/căn hộ mới!)
        Đồng ý/Chấp nhận:
        Gerne nehme ich deine Einladung an. (Tôi rất sẵn lòng nhận lời mời của bạn.)
        Ja, ich komme sehr gerne. (Vâng, tôi rất sẵn lòng đến.)
        Das ist eine tolle Idee! Da bin ich auf jeden Fall dabei. (Đó là một ý tưởng tuyệt vời! Tôi chắc chắn sẽ tham gia.)
        b) Đưa ra lời khuyên (Tipps geben)

        An deiner Stelle würde ich ... (Nếu ở vị trí của bạn, tôi sẽ...)
        Du könntest vielleicht ... (Có lẽ bạn có thể...)
        Wie wäre es, wenn du ...? (Sẽ thế nào nếu bạn...?)
        Ein guter Tipp wäre, ... zu ... (Một mẹo hay sẽ là...)
        Ich habe eine Idee: ... (Tôi có một ý tưởng: ...)
        c) Đặt câu hỏi (Fragen stellen)

        Ich habe noch ein paar Fragen: (Tôi vẫn còn một vài câu hỏi:)
        Könntest du mir bitte sagen, ob/wann/wie ...? (Bạn có thể nói cho tôi biết, liệu/khi nào/làm thế nào...?)
        Was meinst du zu ...? (Bạn nghĩ sao về...?)
        Eine Frage noch: ...? (Còn một câu hỏi nữa: ...?)
        d) Đưa ra đề xuất (Vorschläge machen)

        Ich schlage vor, dass wir ... (Tôi đề nghị rằng chúng ta...)
        Wir könnten doch ... (Chúng ta có thể...)
        Was hältst du davon, wenn wir ...? (Bạn nghĩ sao nếu chúng ta...?)
        Vielleicht können wir uns am ... treffen? (Có lẽ chúng ta có thể gặp nhau vào...?)
        e) Nói về bản thân (tin tức, kế hoạch, cảm nghĩ)

        Bei mir gibt es auch etwas Neues: ... (Tôi cũng có vài điều mới:)
        Du weißt ja, dass ich ... (Bạn biết mà, rằng tôi...)
        Was mich betrifft, ... (Về phần tôi thì, ...)
        In meiner Freizeit mache ich am liebsten ... (Trong thời gian rảnh, tôi thích làm nhất là...)
        Mein Traumberuf ist ... (Nghề nghiệp mơ ước của tôi là...)
        f) Từ nối để bức thư mạch lạc

        Außerdem (Ngoài ra), Deshalb (Vì vậy), Allerdings (Tuy nhiên), Was ... betrifft, (Về vấn đề...), Übrigens (Nhân tiện).
        5. Câu kết thúc (Schlusssatz)
        Trước khi chào tạm biệt, hãy dùng một trong các câu sau.

        Ich freue mich schon auf deine Antwort. (Tôi rất mong chờ câu trả lời của bạn.)
        Schreib mir bald wieder. (Hãy sớm viết thư lại cho tôi nhé.)
        Ich hoffe, bald von dir zu hören. (Tôi hy vọng sẽ sớm nghe tin từ bạn.)
        Lass uns bald telefonieren. (Chúng ta hãy sớm gọi điện cho nhau nhé.)
        6. Lời chào cuối thư (Grußformel)
        Không có dấu phẩy sau lời chào này.

        Viele Grüße
        7. Ký tên (Unterschrift)
        [trực tiếp đưa Tên của bạn]

    **Lưu ý quan trọng**:
        - Thứ tự các Punkt hãy sắp xếp các ý một cách logic, phải là một bài thư liền mạch, tránh lặp cấu trúc một cách máy móc trong một bài thư.
        - Einleitung và Schluss: Đảm bảo mở bài và kết bài phù hợp với nội dung thư và các punkt bạn trả lời.
        - Cố gắng trả lời đủ ý cho mỗi punkt mà không viết quá dài hoặc quá ngắn.(khoảng 2-3 câu)
        - Tính linh hoạt: Đây là các cấu trúc và liên từ gợi ý. Bạn cần điều chỉnh từ vựng và cấu trúc câu cho phù hợp với từng đề bài cụ thể và từng punkt.

**Yêu cầu cho thư mẫu**:
1. Viết bằng tiếng Đức với nội dung thân bài có dộ dài tối đa khoảng 100-120 từ.
2. Xây dựng và tối ưu Bài thư mẫu dựa trên Bài viết của học sinh và các yêu cầu đã đưa ra.
3. Đảm bảo thư trả lời ĐẦY ĐỦ và RÕ RÀNG TẤT CẢ các điểm (Leitpunkte) đã cho, sử dụng các gợi ý một cách hợp lý.
4. Sử dụng từ vựng quen thuộc, đơn giản, dễ hiểu và ngữ pháp chính xác, phù hợp với trình độ A2-B1. Tránh lặp từ, cấu trúc và các loại liên từ.
5. Cấu trúc thư phải chuẩn: bao gồm Anrede (chào hỏi phù hợp), Einleitung (mở bài logic, kết nối với thư nhận được), Hauptteil (thân bài, phát triển các ý theo Leitpunkte một cách mạch lạc, có sự chuyển ý mượt mà giữa các điểm), Schluss (kết bài phù hợp), Grußformel (lời chào cuối thư) và Ort, Datum (ví dụ: Berlin, den TT.MM.JJJJ).
6. Hành văn tự nhiên đời thường, phù hợp với tình huống giao tiếp trong đề bài.
7. Chỉ trả về nội dung bức thư mẫu hoàn chỉnh bằng tiếng Đức, không kèm theo bất kỳ giải thích, bình luận, tiêu đề, hay dấu markdown (như \`\`\`) nào khác. Chỉ là nội dung thư. Ví dụ:
[Ort], den [Datum]
Liebe/r [Name],
vielen Dank für deinen Brief! Ich habe mich sehr darüber gefreut.
[Hier kommt der Hauptteil, der alle Punkte abdeckt.]
Ich hoffe, bald von dir zu hören.
Viele Grüße
Dein/e [Dein Name]

**BẮT ĐẦU THƯ MẪU (CHỈ NỘI DUNG THƯ):**
`;

    try {
        const modelLetterText = await tryWithDifferentKey(prompt, false); // false để nhận text
        let cleanedText = modelLetterText.replace(/```(text|german|deutsch)?\s*|\s*```/gi, '').trim();

        // Kiểm tra các từ chối chung chung từ API
        const lowerCleanedText = cleanedText.toLowerCase();
        if (lowerCleanedText.includes("entschuldigung, ich kann ihnen") ||
            lowerCleanedText.includes("als ki-modell kann ich nicht") ||
            lowerCleanedText.includes("ich bin ein ki-sprachmodell") ||
            lowerCleanedText.includes("tut mir leid, ich kann diese anfrage nicht erfüllen")) {
            console.warn("Model letter API returned a generic refusal:", cleanedText.substring(0,150));
            return "Rất tiếc, không thể tạo thư mẫu vào lúc này do hạn chế từ mô hình ngôn ngữ. Vui lòng thử lại sau hoặc với đề bài khác.";
        }
        if (cleanedText.length < 50 && (lowerCleanedText.includes("nicht möglich") || lowerCleanedText.includes("nicht erstellen"))) { // Quá ngắn và có vẻ từ chối
             console.warn("Model letter API returned a short refusal:", cleanedText.substring(0,150));
             return "Không thể tạo thư mẫu cho yêu cầu này. Vui lòng kiểm tra lại đề bài hoặc thử lại.";
        }

        return cleanedText;
    } catch (error) {
        console.error(`Failed to generate model letter: ${error.message}`);
        // Hiển thị lỗi cụ thể hơn nếu có thể
        let displayError = `Lỗi khi tạo thư mẫu: ${error.message}.`;
        if (error.message.includes("SAFETY")) {
            displayError = "Không thể tạo thư mẫu do nội dung có thể vi phạm chính sách an toàn.";
        } else if (error.message.includes("Quota Exceeded")) {
            displayError = "Lỗi khi tạo thư mẫu: Đã hết hạn ngạch API. Vui lòng thử lại sau.";
        }
        return displayError;
    }
}


// Cập nhật thống kê (giữ nguyên)
function updateStats() {
    const feedbackText = document.getElementById('feedback').textContent;
    let scoreValue = "-";
    if (selectedTopic && feedbackText.includes("ĐIỂM TỔNG QUAN:")) {
        const scoreMatch = feedbackText.match(/ĐIỂM TỔNG QUAN: ([\d\.]+)\/10/);
        if (scoreMatch && scoreMatch[1]) {
            scoreValue = scoreMatch[1];
        }
    }
    document.getElementById('stats').textContent = `Số từ: ${wordCount} | Điểm: ${scoreValue}/10`;
}

// Đếm số từ (giữ nguyên)
function countWords(text) {
    if (!text || typeof text !== 'string') return 0;
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

// Khởi tạo danh sách đề bài (giữ nguyên)
function initTopicSelect() {
    const select = document.getElementById('topic-select');
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic.id;
        option.textContent = `Đề ${topic.id}: Thư từ ${topic.sender}`;
        select.appendChild(option);
    });
}

// Thay đổi kích thước chữ (giữ nguyên)
function changeFontSize(direction) {
    const increment = direction === 'increase' ? 1 : -1;
    currentFontSize = Math.min(24, Math.max(12, currentFontSize + increment));

    const elementsToScale = [
        document.getElementById('topic-text'),
        document.getElementById('topic-instructions'),
        document.getElementById('topic-points')
    ];

    elementsToScale.forEach(element => {
        if (element) {
            element.style.fontSize = `${currentFontSize}px`;
            element.style.lineHeight = `${Math.max(1.5, currentFontSize / (currentFontSize > 16 ? 10 : 9))}em`;
        }
    });
}


// Hiển thị đề bài (giữ nguyên, trừ phần áp dụng font size)
function displayTopic(topicId) {
    selectedTopic = topics.find(t => t.id == topicId);
    const topicContainer = document.getElementById('topic-container');
    const topicTextElement = document.getElementById('topic-text');
    const pointsList = document.getElementById('topic-points');
    const topicInstructionsElement = document.getElementById('topic-instructions');

    if (!selectedTopic) {
        if (topicContainer) topicContainer.style.display = 'none';
        document.getElementById('answer').value = '';
        document.getElementById('feedback').innerHTML = '';
        document.getElementById('model-letter-container').innerHTML = ''; // Xóa thư mẫu cũ
        wordCount = 0;
        updateStats();
        return;
    }

    if (topicContainer) topicContainer.style.display = 'block';
    if (topicTextElement) topicTextElement.textContent = selectedTopic.content;
    if (topicInstructionsElement) topicInstructionsElement.textContent = selectedTopic.instructions;

    if (pointsList) {
        pointsList.innerHTML = '';
        selectedTopic.points.forEach(point => {
            const li = document.createElement('li');
            const pointTextLine = document.createElement('div');
            pointTextLine.classList.add('point-text-line');
            const pointTextSpan = document.createElement('span');
            pointTextSpan.textContent = point.text;
            pointTextLine.appendChild(pointTextSpan);

            if (point.hint && point.hint.trim() !== "") {
                const hintTrigger = document.createElement('span');
                hintTrigger.classList.add('hint-trigger');
                hintTrigger.textContent = ' (Gợi ý)';
                pointTextLine.appendChild(hintTrigger);
                const hintContentSpan = document.createElement('span');
                hintContentSpan.classList.add('point-hint-content', 'hidden');
                hintContentSpan.textContent = `${point.hint}`;
                li.appendChild(pointTextLine);
                li.appendChild(hintContentSpan);
                hintTrigger.addEventListener('click', (event) => {
                    event.stopPropagation();
                    hintContentSpan.classList.toggle('hidden');
                    hintTrigger.textContent = hintContentSpan.classList.contains('hidden') ? ' (Gợi ý)' : ' (Ẩn gợi ý)';
                });
            } else {
                li.appendChild(pointTextLine);
            }
            pointsList.appendChild(li);
        });
    }

    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerHTML = ''; // Sử dụng innerHTML để xóa nội dung cũ
    document.getElementById('model-letter-container').innerHTML = ''; // Xóa thư mẫu cũ
    wordCount = 0;
    updateStats();

    const elementsToScale = [topicTextElement, topicInstructionsElement, pointsList];
    elementsToScale.forEach(element => {
        if (element) {
            element.style.fontSize = `${currentFontSize}px`;
            element.style.lineHeight = `${Math.max(1.5, currentFontSize / (currentFontSize > 16 ? 10 : 9))}em`;
        }
    });

    isTopicVisible = true;
    if (window.innerWidth <= 768) {
        updateToggleButtonText();
        if (topicContainer) topicContainer.classList.remove('hidden');
    }
}

// Cập nhật văn bản nút toggle (giữ nguyên)
function updateToggleButtonText() {
    const toggleBtn = document.getElementById('toggle-topic-btn');
    if (toggleBtn) {
      toggleBtn.textContent = isTopicVisible ? 'Ẩn đề bài' : 'Hiện đề bài';
    }
}

// Toggle hiển thị đề bài trên mobile (giữ nguyên)
function toggleTopic() {
    if (window.innerWidth <= 768) {
        const topicPanel = document.getElementById('topic-container');
        if (topicPanel) {
            isTopicVisible = !isTopicVisible;
            topicPanel.classList.toggle('hidden', !isTopicVisible);
            updateToggleButtonText();
        }
    }
}

// Kiểm tra bài viết (đã cập nhật)
async function checkAnswer() {
    if (!selectedTopic) {
        showPopup('Cảnh báo', 'Vui lòng chọn một đề bài!');
        return;
    }
    const userLetter = document.getElementById('answer').value.trim();
    if (!userLetter) {
        showPopup('Cảnh báo', 'Vui lòng viết thư trước khi kiểm tra!');
        return;
    }

    wordCount = countWords(userLetter);
    updateStats(); // Cập nhật số từ ban đầu
    showLoading();
    document.getElementById('feedback').innerHTML = '<p>Đang đánh giá bài viết của bạn...</p>';
    document.getElementById('model-letter-container').innerHTML = ''; // Xóa thư mẫu cũ

    try {
        // 1. Đánh giá bài của người dùng
        const evalResult = await evaluateLetter(userLetter, selectedTopic);
        document.getElementById('feedback').innerHTML = evalResult.feedback.replace(/\n/g, '<br>');
        wordCount = evalResult.wordCount; // Cập nhật lại số từ từ API nếu có
        updateStats(); // Cập nhật điểm và số từ sau đánh giá

        // 2. Tạo và hiển thị thư mẫu
        if (selectedTopic) {
            document.getElementById('model-letter-container').innerHTML = '<p>Đang tạo thư mẫu 10/10 điểm...</p>';
            const modelLetterText = await generateModelLetter(userLetter, selectedTopic);
            const modelLetterHtml = `
                <h3>Bài thư mẫu tham khảo (10/10 điểm):</h3>
                <div class="model-letter-content">${modelLetterText.replace(/\n/g, '<br>')}</div>
            `;
            document.getElementById('model-letter-container').innerHTML = modelLetterHtml;
        }

    } catch (error) {
        // Lỗi từ evaluateLetter đã được ném ra và sẽ được bắt ở đây
        console.error("Error during checkAnswer process:", error);
        document.getElementById('feedback').innerHTML = `<p style="color: red;">Lỗi: ${error.message}</p>`;
        // Hiển thị lỗi trong popup nếu là lỗi API nghiêm trọng
        if (error.message.includes("API") || error.message.includes("HTTP") || error.message.includes("Quota")) {
            showPopup('Lỗi Hệ Thống', `Đã xảy ra lỗi khi xử lý yêu cầu của bạn: ${error.message}. Vui lòng thử lại sau.`);
        }
        updateStats(); // Cập nhật stats về trạng thái lỗi (ví dụ điểm "-")
    } finally {
        hideLoading();
    }
}


// Khởi tạo ứng dụng (giữ nguyên)
function init() {
    initTopicSelect();
    document.getElementById('topic-select').addEventListener('change', (e) => {
        displayTopic(e.target.value);
    });

    const toggleBtn = document.getElementById('toggle-topic-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTopic);
    }

    document.getElementById('font-increase-btn').addEventListener('click', () => changeFontSize('increase'));
    document.getElementById('font-decrease-btn').addEventListener('click', () => changeFontSize('decrease'));
    document.getElementById('checkBtn').addEventListener('click', checkAnswer);

    const popupCloseBtn = document.getElementById('popupClose');
    if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', hidePopup);
    }

    document.getElementById('answer').addEventListener('input', () => {
        wordCount = countWords(document.getElementById('answer').value);
        updateStats(); // Chỉ cập nhật số từ khi người dùng nhập, điểm sẽ cập nhật sau khi check
    });

    const showFontBtnsCheckbox = document.getElementById('show-font-btns');
    if (showFontBtnsCheckbox) {
        const savedState = localStorage.getItem('showFontButtons');
        showFontBtnsCheckbox.checked = savedState === 'true';
        toggleFontButtonsVisibility(); // Đổi tên hàm cho rõ ràng
        showFontBtnsCheckbox.addEventListener('change', toggleFontButtonsVisibility);
    }

    const initialElementsToScale = [
        document.getElementById('topic-text'),
        document.getElementById('topic-instructions'),
        document.getElementById('topic-points')
    ];
    initialElementsToScale.forEach(element => {
        if (element) {
            element.style.fontSize = `${currentFontSize}px`;
            element.style.lineHeight = `${Math.max(1.5, currentFontSize / (currentFontSize > 16 ? 10 : 9))}em`;
        }
    });

    if (window.innerWidth <= 768 && toggleBtn) {
        const topicPanel = document.getElementById('topic-container');
        if (topicPanel && selectedTopic) { // Chỉ ẩn nếu có topic được chọn
            isTopicVisible = false;
            topicPanel.classList.add('hidden');
            updateToggleButtonText();
        } else if (topicPanel && !selectedTopic) { // Nếu không có topic, hiện panel (vì nó trống)
             isTopicVisible = true; // Hoặc false nếu muốn ẩn panel trống
             topicPanel.classList.remove('hidden');
        }
    } else if (window.innerWidth > 768) {
        const topicPanel = document.getElementById('topic-container');
        if (topicPanel) {
            isTopicVisible = true;
            topicPanel.classList.remove('hidden');
        }
    }
    updateStats();
}

// Đổi tên hàm cho rõ ràng
function toggleFontButtonsVisibility() {
    const isChecked = document.getElementById('show-font-btns').checked;
    const fontButtons = document.querySelectorAll('.font-btn');
    const fontButtonLabel = document.querySelector('.font-btn-label'); // Thêm label để ẩn/hiện

    if (window.innerWidth >= 768) { // Chỉ hoạt động trên desktop
        fontButtons.forEach(btn => {
            btn.style.display = isChecked ? 'inline-block' : 'none';
        });
        if (fontButtonLabel) fontButtonLabel.style.display = 'inline-block'; // Label luôn hiện trên desktop
    } else { // Trên mobile, luôn ẩn nút và label
        fontButtons.forEach(btn => {
            btn.style.display = 'none';
        });
         if (fontButtonLabel) fontButtonLabel.style.display = 'none';
    }
    localStorage.setItem('showFontButtons', isChecked.toString());
}

// Chạy ứng dụng
document.addEventListener('DOMContentLoaded', init);
// Thêm event listener cho resize để cập nhật hiển thị nút font
window.addEventListener('resize', toggleFontButtonsVisibility);
