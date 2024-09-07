let personagens = [
    {
        nome: "Reinhardt",
        apresentacao: "Reinhardt Wilhelm se veste como um herói de eras passadas que vive pelos nobres códigos do valor, da justiça e da coragem.",
        pontosFortes: "Proteção, controle de área",
        pontosFracos: "Lentidão, vulnerável a flancos",
        counters: "Genji, Tracer",
        sinergias: "Zenyatta, Lucio",
        link: "https://overwatch.blizzard.com/pt-br/heroes/reinhardt/"
    },
    {
        nome: "Winston",
        apresentacao: "Um gorila geneticamente modificado altamente inteligente, Winston é um cientista brilhante e um defensor do potencial da humanidade.",
        pontosFortes: "Mobilidade, dano, controle de área",
        pontosFracos: "Fragilidade, vulnerável a ataques aéreos",
        counters: "McCree, Hanzo",
        sinergias: "Lucio, Zarya",
        link: "https://overwatch.blizzard.com/pt-br/heroes/winston/"
    },
    {
        nome: "Orisa",
        apresentacao: "Construída a partir das peças de um OR15, os robôs de defesa de curta duração de Numbani, Orisa é a mais nova protetora da cidade, mas ela ainda tem muito o que aprender.",
        pontosFortes: "Resistência, controle de área",
        pontosFracos: "Lentidão, vulnerável a flancos",
        counters: "Genji, Tracer",
        sinergias: "Zarya, Bastion",
        link: "https://overwatch.blizzard.com/pt-br/heroes/orisa/"
    },
    {
        nome: "Roadhog",
        apresentacao: "Roadhog é um executor poderoso com uma reputação merecida por destruição imprevisível e gratuita.",
        pontosFortes: "Autossuficiência, alto dano",
        pontosFracos: "Mobilidade limitada, vulnerável a atordoamento",
        counters: "McCree, Ashe",
        sinergias: "Lucio, Zarya",
        link: "https://overwatch.blizzard.com/pt-br/heroes/roadhog/"
    },
    {
        nome: "D.Va",
        apresentacao: "D.Va é uma ex-gamer profissional que sabe como usar suas habilidades para pilotar um mecha de última geração na defesa de sua cidade natal.",
        pontosFortes: "Mobilidade, absorção de dano",
        pontosFracos: "Fragilidade, vulnerável a ataques aéreos",
        counters: "Widowmaker, Hanzo",
        sinergias: "Lucio, Zarya",
        link: "https://overwatch.blizzard.com/pt-br/heroes/dva/"
    },
    {
        nome: "Sigma",
        apresentacao: "A vida de Dr. Siebren de Kuiper, astrofísico brilhante, mudou para sempre quando um experimento catastrófico lhe deu o poder de controlar a gravidade. Agora, a Talon o manipula para seus próprios fins.",
        pontosFortes: "Versatilidade, controle de área",
        pontosFracos: "Vulnerável a atordoamento, baixo dano",
        counters: "McCree, Ashe",
        sinergias: "Lucio, Zarya",
        link: "https://overwatch.blizzard.com/pt-br/heroes/sigma/"
    },
    {
        nome: "Junkerqueen",
        apresentacao: "Munida do machado Carnificina e de uma manopla eletromagnética, a líder implacável dos junkers está numa missão de dominação mundial.",
        pontosFortes: "Mobilidade, dano, cura",
        pontosFracos: "Fragilidade, vulnerável a atordoamento",
        counters: "Ashe, Widowmaker",
        sinergias: "Lucio, Zarya",
        link: "https://overwatch.blizzard.com/pt-br/heroes/junker-queen/"
    },
    {
        nome: "Ramattra",
        apresentacao: "O líder impiedoso do Setor Nulo não vai parar por nada até transformar seu ideal em realidade.",
        pontosFortes: "Versatilidade, dano, controle de área",
        pontosFracos: "Vulnerável a focos, pode ser lento",
        counters: "Zarya, Lucio",
        sinergias: "Ana, Kiriko",
        link: "https://overwatch.blizzard.com/pt-br/heroes/ramattra/"
    },
    {
        nome: "Mauga",
        apresentacao: "Um carismático e astuto guerreiro samoano, Mauga prospera no caos do campo de batalha e vive cada dia como se fosse o último.",
        pontosFortes: "Dano sustentado, auto cura, habilidades de mobilidade",
        pontosFracos: "Vulnerável a atordoamento, tempo de recarga de habilidades",
        counters: "McCree, Ashe",
        sinergias: "Baptiste, Ana",
        link: "https://overwatch.blizzard.com/pt-br/heroes/mauga/"
    },
    {
        nome: "Zarya",
        apresentacao: "Aleksandra Zaryanova é uma das mulheres mais fortes do mundo, uma atleta aclamada que sacrificou o triunfo pessoal para proteger sua família, amigos e país em tempos de guerra.",
        pontosFortes: "Escudo pessoal, dano aumentado com energia",
        pontosFracos: "Vulnerável a flancos quando sem escudo",
        counters: "Tracer, Genji",
        sinergias: "Reinhardt, Orisa",
        link: "https://overwatch.blizzard.com/pt-br/heroes/zarya/"
    },
    {
        nome: "Wrecking Ball",
        apresentacao: "Um combatente mecânico altamente inteligente e engenhoso, Wrecking Ball saiu dos laboratórios da Colônia Lunar Horizon para se tornar campeão da Rainha Junker.",
        pontosFortes: "Mobilidade, controle de área, dano em área",
        pontosFracos: "Fragilidade quando fora da bola, vulnerável a atordoamento",
        counters: "Pharah, Echo",
        sinergias: "Zarya, Lucio",
        link: "https://overwatch.blizzard.com/pt-br/heroes/wrecking-ball/"
    },
    {
        nome: "Doomfist",
        apresentacao: "Doomfist é o líder calculista da Talon, uma organização terrorista e força paramilitar que trabalha em oposição direta à Overwatch.",
        pontosFortes: "Mobilidade, alto dano em close range",
        pontosFracos: "Vulnerável a longas distâncias, fragilidade",
        counters: "McCree, Ashe",
        sinergias: "Zarya, Lucio",
        link: "https://overwatch.blizzard.com/pt-br/heroes/doomfist/"
    },
    {
        nome: "Tracer",
        apresentacao: "A ex-agente da Overwatch conhecida como Tracer é uma aventureira que salta no tempo e é uma força imparável para o bem.",
        pontosFortes: "Mobilidade, dano rápido",
        pontosFracos: "Fragilidade, vulnerável a atordoamento",
        counters: "McCree, Mei",
        sinergias: "Lucio, Zenyatta",
        link: "https://overwatch.blizzard.com/pt-br/heroes/tracer/"
    },
    {
        nome: "Reaper",
        apresentacao: "Há quem fale sobre um terrorista em um manto preto, conhecido apenas como Reaper. Sua identidade e motivações são um mistério. O que se sabe é que onde ele aparece, a morte o segue.",
        pontosFortes: "Alto dano em close range, auto cura",
        pontosFracos: "Vulnerável a longas distâncias, fragilidade durante o ultimate",
        counters: "McCree, Ashe",
        sinergias: "Zarya, Lucio",
        link: "https://overwatch.blizzard.com/pt-br/heroes/reaper/"
    },
    {
        nome: "Soldier: 76",
        apresentacao: "Alvo de uma caçada internacional, o vigilante conhecido como Soldado: 76 trava uma guerra pessoal para expor a verdade por trás do colapso da Overwatch.",
        pontosFortes: "Dano consistente, kit de habilidades versátil",
        pontosFracos: "Vulnerável a flancos, baixo dano por tiro",
        counters: "Tracer, Genji",
        sinergias: "Lucio, Ana",
        link: "https://overwatch.blizzard.com/pt-br/heroes/soldier-76/"
    },
    {
        nome: "Cassidy",
        apresentacao: "Armado com seu revólver Pacificador, o fora da lei Cole Cassidy faz justiça do seu próprio jeito.",
        pontosFortes: "Dano preciso a médio alcance, atordoamento",
        pontosFracos: "Vulnerável a flancos, tempo de recarga do ultimate",
        counters: "Tracer, Genji",
        sinergias: "Ana, Baptiste",
        link: "https://overwatch.blizzard.com/pt-br/heroes/cassidy/"
    },
    {
        nome: "Pharah",
        apresentacao: "O comprometimento com o dever de Fareeha Amari corre em suas veias. Ela vem de uma longa linhagem de soldados altamente condecorados e tem um desejo intenso de servir com honra.",
        pontosFortes: "Mobilidade aérea, alto dano em área",
        pontosFracos: "Vulnerável a hitscans, fácil de rastrear",
        counters: "Widowmaker, Hanzo",
        sinergias: "Mercy, Ana",
        link: "https://overwatch.blizzard.com/pt-br/heroes/pharah/"
    },
    {
        nome: "Hanzo",
        apresentacao: "Aperfeiçoando suas habilidades como arqueiro e assassino, Hanzo Shimada almeja mostrar-se digno como guerreiro sem par.",
        pontosFortes: "Dano preciso a longas distâncias, ultimate poderoso",
        pontosFracos: "Vulnerável a close range, tempo de recarga do ultimate",
        counters: "Tracer, Genji",
        sinergias: "Ana, Zenyatta",
        link: "https://overwatch.blizzard.com/pt-br/heroes/hanzo/"
    },
    {
        nome: "Widowmaker",
        apresentacao: "Widowmaker é a assassina perfeita: uma matadora paciente e impiedosamente eficiente que não mostra emoção nem remorso.",
        pontosFortes: "Dano preciso a longas distâncias, invisibilidade",
        pontosFracos: "Vulnerável a close range, fácil de rastrear ao atirar",
        counters: "Tracer, Genji",
        sinergias: "Ana, Baptiste",
        link: "https://overwatch.blizzard.com/pt-br/heroes/widowmaker/"
    },
    {
        nome: "Ashe",
        apresentacao: "Ashe, a líder ambiciosa e calculista da gangue Deadlock, é uma figura respeitada no submundo do crime.",
        pontosFortes: "Versatilidade, dano preciso a médio alcance",
        pontosFracos: "Vulnerável a flancos, tempo de recarga do ultimate",
        counters: "Tracer, Genji",
        sinergias: "Baptiste, Ana",
        link: "https://overwatch.blizzard.com/pt-br/heroes/ashe/"
    },
    {
        nome: "Bastion",
        apresentacao: "Outrora combatente na linha de frente na devastadora Crise Ômnica, esta curiosa unidade Bastion agora explora o mundo, fascinada pela natureza, porém cautelosa com uma humanidade temível.",
        pontosFortes: "Alto dano em área, auto cura",
        pontosFracos: "Vulnerável a flancos, tempo para mudar de forma",
        counters: "Tracer, Genji",
        sinergias: "Orisa, Reinhardt",
        link: "https://overwatch.blizzard.com/pt-br/heroes/bastion/"
    },
    {
        nome: "Sombra",
        apresentacao: "Uma das hackers mais famosas do mundo, Sombra usa informações para manipular aqueles que estão no poder.",
        pontosFortes: "Hackear habilidades inimigas, invisibilidade",
        pontosFracos: "Fragilidade, depende de hacks bem sucedidos",
        counters: "McCree, Ashe",
        sinergias: "Reaper, Genji",
        link: "https://overwatch.blizzard.com/pt-br/heroes/sombra/"
    },
    {
        nome: "Echo",
        apresentacao: "Echo é uma robô multifuncional, adaptável e com a inteligência artificial mais sofisticada do mundo, projetada pela Dra. Mina Liao para as missões de combate da Overwatch.",
        pontosFortes: "Versatilidade, cópias habilidades inimigas",
        pontosFracos: "Fragilidade, ultimate tem tempo de recarga longo",
        counters: "McCree, Ashe",
        sinergias: "Lucio, Zenyatta",
        link: "https://overwatch.blizzard.com/pt-br/heroes/echo/"
    },
    {
        nome: "Junkrat",
        apresentacao: "Junkrat é um demolidor obcecado por explosivos que vive para causar destruição e caos.",
        pontosFortes: "Alto dano em área, minas explosivas",
        pontosFracos: "Vulnerável a longas distâncias, fragilidade",
        counters: "Pharah, Echo",
        sinergias: "Orisa, Reinhardt",
        link: "https://overwatch.blizzard.com/pt-br/heroes/junkrat/"
    },
    {
        nome: "Sojourn",
        apresentacao: "Como antiga líder da Overwatch, Vivian Chase, codinome Sojourn, está determinada a impedir que novos heróis cometam os mesmos erros do passado.",
        pontosFortes: "Versatilidade, dano preciso a médio alcance, ultimate poderoso",
        pontosFracos: "Vulnerável a flancos, tempo de recarga do ultimate",
        counters: "Tracer, Genji",
        sinergias: "Lucio, Ana",
        link: "https://overwatch.blizzard.com/pt-br/heroes/sojourn/"
    },
    {
        nome: "Genji",
        apresentacao: "O ciborgue ninja Genji Shimada fez as pazes com seu corpo aprimorado que ele antes rejeitava e, ao fazê-lo, pode descobrir uma humanidade maior.",
        pontosFortes: "Mobilidade, alto dano em combate corpo a corpo",
        pontosFracos: "Vulnerável a longas distâncias, fragilidade",
        counters: "McCree, Mei",
        sinergias: "Lucio, Zenyatta",
        link: "https://overwatch.blizzard.com/pt-br/heroes/genji/"
      },
      {
        nome: "Mei",
        apresentacao: "Mei é uma cientista que faz a luta pela preservação do meio ambiente com suas próprias mãos.",
        pontosFortes: "Controle de área, congelamento, auto cura",
        pontosFracos: "Mobilidade limitada, vulnerável a flancos",
        counters: "Pharah, Echo",
        sinergias: "Reinhardt, Orisa",
        link: "https://overwatch.blizzard.com/pt-br/heroes/mei/"
      },
      {
        nome: "Symmetra",
        apresentacao: "Symmetra literalmente manipula a realidade. Manipulando construtos de luz sólida, ela molda o mundo a seu bel-prazer, na esperança de erigir uma sociedade perfeita.",
        pontosFortes: "Construção de teleportadores, turrets, escudo de energia",
        pontosFracos: "Vulnerável a flancos, fragilidade",
        counters: "Tracer, Genji",
        sinergias: "Orisa, Reinhardt",
        link: "https://overwatch.blizzard.com/pt-br/heroes/symmetra/"
      },
      {
        nome: "Torbjörn",
        apresentacao: "No seu auge, Overwatch possuía um dos armamentos mais avançados do planeta, que remetia de volta à oficina de um habilidoso engenheiro chamado Torbjörn Lindholm.",
        pontosFortes: "Construção de turrets, armadura para aliados",
        pontosFracos: "Vulnerável a flancos, fragilidade",
        counters: "Tracer, Genji",
        sinergias: "Orisa, Reinhardt",
        link: "https://overwatch.blizzard.com/pt-br/heroes/torbjorn/"
      },
      {
        nome: "Ana",
        apresentacao: "Uma das fundadoras da Overwatch, Ana usa suas habilidades e seu conhecimento para defender seu lar e aqueles com quem ela se importa.",
        pontosFortes: "Cura a longa distância, nano boost",
        pontosFracos: "Vulnerável a flancos, granada adormecedora tem tempo de recarga",
        counters: "Genji, Tracer",
        sinergias: "Soldier: 76, McCree",
        link: "https://overwatch.blizzard.com/pt-br/heroes/ana/"
    },
    {
        nome: "Baptiste",
        apresentacao: "Baptiste é um médico de combate de elite e ex-agente da Talon que usa suas habilidades para ajudar vítimas da guerra.",
        pontosFortes: "Cura em área, imortalidade",
        pontosFracos: "Vulnerável a longas distâncias, ultimate tem tempo de recarga",
        counters: "Pharah, Echo",
        sinergias: "Reaper, Junkrat",
        link: "https://overwatch.blizzard.com/pt-br/heroes/baptiste/"
    },
    {
        nome: "Brigitte",
        apresentacao: "Agora em ação nas linhas de frente, Brigitte Lindholm pegou em armas para defender os indefesos.",
        pontosFortes: "Cura em área, escudo, atordoamento",
        pontosFracos: "Vulnerável a longas distâncias, fragilidade",
        counters: "Pharah, Echo",
        sinergias: "Reinhardt, Orisa",
        link: "https://overwatch.blizzard.com/pt-br/heroes/brigitte/"
    },
    {
        nome: "Illari",
        apresentacao: "Como a última dos Guerreiros Inti, Illari é a portadora do poder do sol. Ela fará qualquer coisa para compensar seu passado.",
        pontosFortes: "Cura a longa distância, dano solar, escudo",
        pontosFracos: "Vulnerável a flancos, ultimate tem tempo de recarga",
        counters: "Genji, Tracer",
        sinergias: "Soldier: 76, McCree",
        link: "https://overwatch.blizzard.com/pt-br/heroes/illari/"
    },
    {
        nome: "Kiriko",
        apresentacao: "Como miko do santuário de Kanezaka e filha da antiga mestra dos Shimada, Kiriko Kamori concentra suas habilidades espirituais e de ninja para curar sua cidade fraturada.",
        pontosFortes: "Mobilidade, cura, proteção",
        pontosFracos: "Vulnerável a longas distâncias, ultimate tem tempo de recarga",
        counters: "Pharah, Echo",
        sinergias: "Genji, Hanzo",
        link: "https://overwatch.blizzard.com/pt-br/heroes/kiriko/"
    },
    {
        nome: "Lifeweaver",
        apresentacao: "O cientista brilhante por trás da bioluz, uma tecnologia que une matéria vegetal e luz sólida. O sonho dele é curar o mundo.",
        pontosFortes: "Cura, ressurreição, manipulação do campo de batalha",
        pontosFracos: "Vulnerável a flancos, habilidades com tempo de recarga",
        counters: "Genji, Tracer",
        sinergias: "Lucio, Mercy",
        link: "https://overwatch.blizzard.com/pt-br/heroes/lifeweaver/"
    },
    {
        nome: "Lúcio",
        apresentacao: "Lúcio é uma celebridade internacional que inspira a mudança social através da música e do ativismo.",
        pontosFortes: "Cura em área, aumento de velocidade, barreira sonora",
        pontosFracos: "Vulnerável a longas distâncias, fragilidade",
        counters: "Pharah, Echo",
        sinergias: "Todos os personagens",
        link: "https://overwatch.blizzard.com/pt-br/heroes/lucio/"
    },
    {
        nome: "Mercy",
        apresentacao: "Um anjo da guarda para aqueles em seus cuidados, Dra. Angela Ziegler é uma curandeira sem igual, uma cientista brilhante e uma defensora convicta da paz.",
        pontosFortes: "Ressurreição, aumento de dano",
        pontosFracos: "Vulnerável a flancos, fragilidade",
        counters: "Pharah, Echo",
        sinergias: "Todos os personagens",
        link: "https://overwatch.blizzard.com/pt-br/heroes/mercy/"
    },
    {
        nome: "Moira",
        apresentacao: "Tão brilhante quanto controversa, a cientista Moira O’Deorain pesquisa o que há de mais avançado na engenharia genética, buscando uma forma de reescrever os fundamentos que constroem a vida.",
        pontosFortes: "Cura e dano em área, autossuficiência",
        pontosFracos: "Vulnerável a longas distâncias, fragilidade",
        counters: "Pharah, Echo",
        sinergias: "Reaper, Junkrat",
        link: "https://overwatch.blizzard.com/pt-br/heroes/moira/"
    },
    {
        nome: "Zenyatta",
        apresentacao: "Zenyatta é um monge ômnico que vagueia pelo mundo em busca de iluminação espiritual. Dizem que aqueles que cruzam seu caminho não voltam mais os mesmos.",
        pontosFortes: "Cura a longa distância, harmonia, discord",
        pontosFracos: "Vulnerável a flancos, fragilidade",
        counters: "Pharah, Echo",
        sinergias: "Soldier: 76, McCree",
        link: "https://overwatch.blizzard.com/pt-br/heroes/zenyatta/"
    },
    {
        nome: "Juno",
        apresentacao: "A primeira humana nascida em Marte, Juno usa sua tecnologia da era espacial para resolver qualquer problema que entre na sua órbita. Ela está determinada a um dia salvar seu planeta natal.",
        pontosFortes: "Cura a longa distância, mobilidade",
        pontosFracos: "Vulnerável a longas distâncias, fragilidade",
        counters: "McCree, Ashe",
        sinergias: "Lucio, Zenyatta",
        link: "https://overwatch.blizzard.com/pt-br/heroes/juno/"
    },
    {
        nome: "Venture",
        apresentacao: "Como alguém que ama arqueologia e explorar o mundo, Venture tem uma paixão por desvendar os mistérios da história.",
        pontosFortes: "Alta mobilidade, dano em area",
        pontosFracos: "Vulnerável a longas distâncias, fragilidade",
        counters: "Pharah, Echo",
        sinergias: "Soldier: 76, McCree",
        link: "https://overwatch.blizzard.com/pt-br/heroes/venture/"
    }
];