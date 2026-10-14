const typeGroups = [
  {
    name: { id: "Analis", en: "Analysts", ar: "المحللون", zh: "分析家" },
    color: "var(--analysts)",
    desc: {
      id: "Pemikir intuitif dan strategis yang menyukai logika dan ide-ide kompleks.",
      en: "Intuitive and strategic thinkers who love logic and complex ideas.",
      ar: "مفكرون حدسيون واستراتيجيون يحبون المنطق والأفكار المعقدة.",
      zh: "喜欢逻辑与复杂想法的直觉型战略思考者。"
    },
    types: [
      { code: "INTJ", name: { id: "Arsitek", en: "Architect", ar: "المهندس المعماري", zh: "建筑师" }, desc: { id: "Pemikir imajinatif dan strategis dengan rencana untuk segala hal.", en: "Imaginative and strategic thinkers with a plan for everything.", ar: "مفكر خيالي واستراتيجي لديه خطة لكل شيء.", zh: "富有想象力和战略眼光，凡事都有计划。" } },
      { code: "INTP", name: { id: "Ahli Logika", en: "Logician", ar: "المنطقي", zh: "逻辑学家" }, desc: { id: "Penemu inovatif dengan rasa ingin tahu yang tak pernah tuntas.", en: "Innovative inventors with an unquenchable thirst for knowledge.", ar: "مخترع مبتكر لديه فضول لا ينضب.", zh: "创新的发明家，求知欲永不满足。" } },
      { code: "ENTJ", name: { id: "Komandan", en: "Commander", ar: "القائد", zh: "指挥官" }, desc: { id: "Pemimpin yang berani, imajinatif, dan berkeinginan kuat.", en: "Bold, imaginative and strong-willed leaders.", ar: "قائد جريء وخيالي وقوي الإرادة.", zh: "大胆、有想象力、意志坚定的领导者。" } },
      { code: "ENTP", name: { id: "Pendebat", en: "Debater", ar: "المناظر", zh: "辩论家" }, desc: { id: "Pemikir cerdas yang tak tahan terhadap tantangan intelektual.", en: "Smart and curious thinkers who can't resist an intellectual challenge.", ar: "مفكر ذكي لا يقاوم أي تحدٍ فكري.", zh: "聪明好奇，无法抗拒智力挑战。" } }
    ]
  },
  {
    name: { id: "Diplomat", en: "Diplomats", ar: "الدبلوماسيون", zh: "外交家" },
    color: "var(--diplomats)",
    desc: {
      id: "Sosok idealis dan empatis yang peduli pada hubungan dan potensi manusia.",
      en: "Idealistic and empathetic people who care about human relationships and potential.",
      ar: "أشخاص مثاليون ومتعاطفون يهتمون بالعلاقات الإنسانية وإمكاناتها.",
      zh: "理想主义且富有同理心，关心人际关系与人的潜力。"
    },
    types: [
      { code: "INFJ", name: { id: "Advokat", en: "Advocate", ar: "المحامي", zh: "提倡者" }, desc: { id: "Idealistis, tenang, dan inspiratif yang tak lelah membantu sesama.", en: "Quiet, idealistic and tireless in helping a good cause.", ar: "هادئ ومثالي ولا يكل عن مساعدة الآخرين.", zh: "安静、理想主义，乐于助人不知疲倦。" } },
      { code: "INFP", name: { id: "Mediator", en: "Mediator", ar: "الوسيط", zh: "调停者" }, desc: { id: "Puitis, baik hati, dan altruistis yang selalu siap membantu.", en: "Poetic, kind and altruistic, always eager to help a good cause.", ar: "شاعري وطيب ونكران للذات ودائم الاستعداد للمساعدة.", zh: "富有诗意、善良无私，随时乐意伸出援手。" } },
      { code: "ENFJ", name: { id: "Protagonis", en: "Protagonist", ar: "البطل", zh: "主人公" }, desc: { id: "Pemimpin karismatik dan menginspirasi yang memukau pendengar.", en: "Charismatic and inspiring leaders who mesmerize their listeners.", ar: "قائد كاريزمي وملهم يأسر مستمعيه.", zh: "富有魅力、鼓舞人心，能打动听众的领导者。" } },
      { code: "ENFP", name: { id: "Kampanye", en: "Campaigner", ar: "الحملة", zh: "竞选者" }, desc: { id: "Antusias, kreatif, dan bebas secara sosial yang selalu tersenyum.", en: "Enthusiastic, creative and sociable free spirits who always find a reason to smile.", ar: "متحمس ومبدع واجتماعي دائم الابتسام.", zh: "热情、有创意、社交自由，总能找到微笑的理由。" } }
    ]
  },
  {
    name: { id: "Pengawas", en: "Sentinels", ar: "الحراس", zh: "守护者" },
    color: "var(--sentinels)",
    desc: {
      id: "Individu yang praktis, teratur, dan menghargai stabilitas serta tradisi.",
      en: "Practical and fact-minded individuals who value stability and tradition.",
      ar: "أفراد عمليون يهتمون بالحقائق ويقدرون الاستقرار والتقاليد.",
      zh: "务实、注重事实，重视稳定与传统的人。"
    },
    types: [
      { code: "ISTJ", name: { id: "Ahli Logistik", en: "Logistician", ar: "أخصائي اللوجستيات", zh: "物流师" }, desc: { id: "Praktis dan mengutamakan fakta, keandalannya tidak diragukan.", en: "Practical and fact-minded, their reliability cannot be doubted.", ar: "عملي ويهتم بالحقائق ولا يُشك في موثوقيته.", zh: "务实且注重事实，可靠性毋庸置疑。" } },
      { code: "ISFJ", name: { id: "Konselor", en: "Defender", ar: "المدافع", zh: "守卫者" }, desc: { id: "Pelindung hangat dan berdedikasi, selalu siap membela orang terdekat.", en: "Very dedicated and warm protectors, always ready to defend their loved ones.", ar: "حامٍ دافئ ومتفانٍ، مستعد دائمًا للدفاع عن أحبائه.", zh: "热心且尽责的守护者，随时准备保护所爱的人。" } },
      { code: "ESTJ", name: { id: "Eksekutif", en: "Executive", ar: "التنفيذي", zh: "总经理" }, desc: { id: "Administrator luar biasa dalam mengelola sesuatu atau orang.", en: "Excellent administrators, unsurpassed at managing things or people.", ar: "إداري ممتاز لا يُضاهى في إدارة الأشياء أو الأشخاص.", zh: "杰出的管理者，善于统筹事务或团队。" } },
      { code: "ESFJ", name: { id: "Konsul", en: "Consul", ar: "القنصل", zh: "执政官" }, desc: { id: "Memperhatikan dan populer secara sosial, selalu ingin membantu.", en: "Extraordinarily caring, social and popular people, always eager to help.", ar: "شخص اجتماعي ومحبوب يهتم بالآخرين ويحب المساعدة.", zh: "极具爱心、社交活跃且受欢迎，乐于助人。" } }
    ]
  },
  {
    name: { id: "Penjelajah", en: "Explorers", ar: "المستكشفون", zh: "探险家" },
    color: "var(--explorers)",
    desc: {
      id: "Pribadi spontan, fleksibel, dan selalu siap mengeksplorasi peluang baru.",
      en: "Spontaneous, flexible people who are always ready to explore new opportunities.",
      ar: "أشخاص عفويون ومرنون ومستعدون دائمًا لاستكشاف فرص جديدة.",
      zh: "随性灵活，随时准备探索新机会的人。"
    },
    types: [
      { code: "ISTP", name: { id: "Virtuoso", en: "Virtuoso", ar: "الموهوب", zh: "鉴赏家" }, desc: { id: "Eksperimenter berani dan praktis, menguasai semua jenis alat.", en: "Bold and practical experimenters, masters of all kinds of tools.", ar: "مجرب جريء وعملي، يتقن جميع أنواع الأدوات.", zh: "大胆务实的实验家，精通各种工具。" } },
      { code: "ISFP", name: { id: "Petualang", en: "Adventurer", ar: "المغامر", zh: "探险家" }, desc: { id: "Seniman fleksibel dan menawan, selalu siap mencoba hal baru.", en: "Flexible and charming artists, always ready to explore new possibilities.", ar: "فنان مرن وساحر، مستعد دائمًا لتجربة أشياء جديدة.", zh: "灵活迷人的艺术家，随时愿意尝试新事物。" } },
      { code: "ESTP", name: { id: "Pengusaha", en: "Entrepreneur", ar: "رائد الأعمال", zh: "企业家" }, desc: { id: "Cerdas, energetik, dan perseptif yang menikmati hidup di batas.", en: "Smart, energetic and perceptive people who truly enjoy living on the edge.", ar: "ذكي ونشيط وواعٍ، يستمتع بالعيش على الحافة.", zh: "聪明、精力充沛且善于观察，喜欢活在刀锋边缘。" } },
      { code: "ESFP", name: { id: "Penghibur", en: "Entertainer", ar: "المسلي", zh: "表演者" }, desc: { id: "Spontan, energetik, dan antusias - hidup tak pernah bosan.", en: "Spontaneous, energetic and enthusiastic - life is never boring around them.", ar: "عفوي ونشيط ومتحمس - الحياة معه لا تُمل.", zh: "随性、充满活力又热情——身边的生活永不无聊。" } }
    ]
  }
];

function q(id, en, ar, zh, trait) {
  return { text: { id, en, ar, zh }, trait };
}

const bankEI = [
  q("Kamu gampang akrab dan bikin teman baru.", "You easily warm up to people and make new friends.", "تندمج بسهولة مع الناس وتكوّن صداقات جديدة.", "你很容易与人打成一片并结交新朋友。", "E"),
  q("Kamu butuh waktu sendirian buat mulihin energi setelah kumpul-kumpul.", "You need alone time to recharge after socializing.", "تحتاج إلى وقت بمفردك لاستعادة طاقتك بعد التجمعات.", "社交之后你需要独处来恢复精力。", "I"),
  q("Kamu lebih suka jadi pusat perhatian di acara ramai.", "You enjoy being the center of attention at lively events.", "تستمتع بأن تكون محور الاهتمام في التجمعات الصاخبة.", "你喜欢在热闹的场合成为焦点。", "E"),
  q("Kamu lebih milih habisin malam minggu sendirian daripada pergi ke pesta.", "You'd rather spend a Saturday night alone than go to a party.", "تفضل قضاء ليلة السبت بمفردك بدلاً من الذهاب إلى حفلة.", "比起去派对，你更愿意独自度过周六晚上。", "I"),
  q("Kamu merasa makin bersemangat waktu berada di tengah keramaian.", "You feel more energized the more people are around you.", "تشعر بمزيد من الحيوية كلما زاد عدد الناس من حولك.", "身边人越多，你越感到有活力。", "E"),
  q("Kamu cenderung diam dan ngamatin dulu sebelum ikut ngobrol di grup baru.", "You tend to stay quiet and observe before joining a new group's conversation.", "تميل إلى الصمت والملاحظة قبل الانضمام إلى محادثة مجموعة جديدة.", "在新群体中，你通常先安静观察再加入对话。", "I"),
  q("Kamu suka mulai obrolan duluan sama orang asing.", "You like to start conversations with strangers.", "تحب أن تبدأ الحديث مع الغرباء.", "你喜欢主动和陌生人搭话。", "E"),
  q("Kamu lebih nyaman kerja sendiri daripada dalam tim besar.", "You're more comfortable working alone than in a big team.", "تشعر براحة أكبر في العمل بمفردك بدلاً من فريق كبير.", "比起大团队，你更喜欢独自工作。", "I"),
  q("Kamu ngerasa makin berenergi setelah menghadiri acara sosial yang rame.", "You feel more energized after attending a busy social event.", "تشعر بمزيد من النشاط بعد حضور فعالية اجتماعية صاخبة.", "参加热闹的社交活动后，你反而更有精神。", "E"),
  q("Kamu butuh waktu mikir dulu sebelum ngomong di depan banyak orang.", "You need time to think before speaking in front of a crowd.", "تحتاج إلى وقت للتفكير قبل التحدث أمام حشد من الناس.", "在人群面前发言前，你需要先想清楚。", "I"),
  q("Kamu gampang cerita soal diri sendiri ke orang yang baru dikenal.", "You easily open up about yourself to people you just met.", "تتحدث عن نفسك بسهولة مع أشخاص قابلتهم للتو.", "你很容易向刚认识的人敞开心扉。", "E"),
  q("Kamu lebih suka lingkaran pertemanan kecil yang akrab daripada banyak kenalan.", "You prefer a small, close circle of friends over many acquaintances.", "تفضل دائرة صغيرة من الأصدقاء المقربين على كثرة المعارف.", "比起众多泛泛之交，你更喜欢小而亲密的朋友圈。", "I"),
];

const bankSN = [
  q("Kamu lebih fokus ke detail konkret daripada gambaran besar.", "You focus more on concrete details than the big picture.", "تركز على التفاصيل الملموسة أكثر من الصورة الكبيرة.", "你更关注具体细节，而不是整体大局。", "S"),
  q("Kamu suka mikirin ide-ide abstrak dan kemungkinan baru.", "You enjoy thinking about abstract ideas and new possibilities.", "تستمتع بالتفكير في الأفكار المجردة والاحتمالات الجديدة.", "你喜欢思考抽象概念和各种新的可能性。", "N"),
  q("Kamu lebih percaya pengalaman nyata daripada teori atau imajinasi.", "You trust real experience more than theory or imagination.", "تثق بالتجربة الواقعية أكثر من النظرية أو الخيال.", "比起理论或想象，你更相信真实的经验。", "S"),
  q("Kamu sering ngebayangin skenario masa depan yang belum tentu kejadian.", "You often imagine future scenarios that may never happen.", "غالبًا ما تتخيل سيناريوهات مستقبلية قد لا تحدث أبدًا.", "你常常想象未来那些不一定会发生的情景。", "N"),
  q("Kamu lebih suka instruksi yang jelas dan langkah demi langkah.", "You prefer clear, step-by-step instructions.", "تفضل تعليمات واضحة وخطوة بخطوة.", "你更喜欢清晰、循序渐进的指示。", "S"),
  q("Kamu suka nyari pola tersembunyi di balik sesuatu.", "You like looking for hidden patterns behind things.", "تحب البحث عن الأنماط الخفية وراء الأشياء.", "你喜欢寻找事物背后隐藏的规律。", "N"),
  q("Kamu lebih percaya fakta yang bisa dibuktikan daripada firasat.", "You trust provable facts more than gut feelings.", "تثق بالحقائق القابلة للإثبات أكثر من الحدس.", "比起直觉，你更相信可以被证明的事实。", "S"),
  q("Kamu sering kepikiran 'gimana kalau' soal berbagai kemungkinan.", "You often wonder \"what if\" about different possibilities.", "غالبًا ما تتساءل \"ماذا لو\" حول احتمالات مختلفة.", "你常常思考各种可能性的\"如果……会怎样\"。", "N"),
  q("Kamu lebih nyaman sama hal-hal yang udah terbukti daripada ide baru yang belum diuji.", "You're more comfortable with proven things than untested new ideas.", "تشعر بارتياح أكبر تجاه الأمور المُثبتة أكثر من الأفكار الجديدة غير المُختبرة.", "比起未经检验的新想法，你更喜欢已被证实的事物。", "S"),
  q("Kamu lebih tertarik ngebahas teori dan konsep daripada hal praktis sehari-hari.", "You're more interested in discussing theories and concepts than everyday practical matters.", "تهتم بمناقشة النظريات والمفاهيم أكثر من الأمور العملية اليومية.", "比起日常实际事务，你更喜欢讨论理论和概念。", "N"),
  q("Kamu lebih merhatiin detail kecil di sekitar kamu.", "You notice the small details around you.", "تلاحظ التفاصيل الصغيرة من حولك.", "你会留意身边的细微之处。", "S"),
  q("Kamu suka menghubung-hubungkan ide dari berbagai bidang yang beda-beda.", "You like connecting ideas from very different fields.", "تحب ربط الأفكار من مجالات مختلفة تمامًا.", "你喜欢把不同领域的想法联系起来。", "N"),
];

const bankTF = [
  q("Kamu ngambil keputusan berdasarkan logika, bukan perasaan.", "You make decisions based on logic rather than feelings.", "تتخذ قراراتك بناءً على المنطق وليس المشاعر.", "你做决定时依靠逻辑而非情感。", "T"),
  q("Kamu gampang ikut ngerasain emosi atau masalah orang lain.", "You easily pick up on other people's emotions or problems.", "تتأثر بسهولة بمشاعر الآخرين أو مشاكلهم.", "你很容易感同身受他人的情绪或问题。", "F"),
  q("Kamu lebih milih jujur apa adanya daripada jaga perasaan orang.", "You'd rather be brutally honest than spare someone's feelings.", "تفضل الصراحة التامة على مراعاة مشاعر الآخرين.", "比起顾及别人的感受，你更愿意直言不讳。", "T"),
  q("Kamu mikirin dulu perasaan orang lain sebelum nyampein kritik.", "You think about others' feelings before giving criticism.", "تفكر في مشاعر الآخرين قبل تقديم أي انتقاد.", "在提出批评前，你会先考虑对方的感受。", "F"),
  q("Kamu lebih tertarik sama keadilan berdasarkan aturan daripada situasi personal.", "You care more about fairness based on rules than personal circumstances.", "تهتم بالعدالة القائمة على القواعد أكثر من الظروف الشخصية.", "你更看重基于规则的公平，而非个人情况。", "T"),
  q("Kamu gampang tersentuh sama cerita sedih orang lain.", "You're easily moved by other people's sad stories.", "تتأثر بسهولة بقصص الآخرين الحزينة.", "你很容易被别人的伤心故事打动。", "F"),
  q("Kamu cenderung tetep tenang dan objektif waktu orang lain lagi emosional.", "You tend to stay calm and objective when others are emotional.", "تميل إلى البقاء هادئًا وموضوعيًا عندما يكون الآخرون منفعلين.", "当别人情绪激动时，你倾向于保持冷静客观。", "T"),
  q("Kamu sering nomorsatuin keharmonisan kelompok daripada menang argumen.", "You often prioritize group harmony over winning an argument.", "غالبًا ما تُقدّم انسجام المجموعة على الفوز بالنقاش.", "你常常把团队和谐看得比赢得争论更重要。", "F"),
  q("Kamu lebih suka menilai sesuatu berdasarkan data daripada nilai personal.", "You prefer judging things based on data rather than personal values.", "تفضل الحكم على الأمور بناءً على البيانات وليس القيم الشخصية.", "你更喜欢依据数据而非个人价值观来评判事情。", "T"),
  q("Kamu suka bantuin orang lain nyelesain masalah emosional mereka.", "You enjoy helping others work through their emotional problems.", "تستمتع بمساعدة الآخرين على حل مشاكلهم العاطفية.", "你喜欢帮助别人处理情绪上的问题。", "F"),
  q("Kamu nggak masalah bikin keputusan yang nggak populer kalau emang logis.", "You're fine making an unpopular decision as long as it's logical.", "لا تمانع اتخاذ قرار غير شعبي طالما أنه منطقي.", "只要合乎逻辑，你不介意做出不受欢迎的决定。", "T"),
  q("Kamu gampang ngerasa nggak enak kalau ada yang salah paham sama kamu.", "You feel bad easily when someone misunderstands you.", "تشعر بالانزعاج بسهولة عندما يُساء فهمك.", "当有人误解你时，你很容易感到难过。", "F"),
];

const bankJP = [
  q("Kamu suka bikin rencana yang jelas sebelum ngelakuin sesuatu.", "You like making a clear plan before doing something.", "تحب وضع خطة واضحة قبل القيام بأي شيء.", "你喜欢在做事之前先制定清晰的计划。", "J"),
  q("Kamu lebih suka spontan daripada terikat sama jadwal.", "You prefer being spontaneous over sticking to a schedule.", "تفضل العفوية على الالتزام بجدول زمني.", "比起遵循日程安排，你更喜欢随性而为。", "P"),
  q("Kamu ngerasa nggak nyaman kalau rencana tiba-tiba berubah.", "You feel uneasy when plans suddenly change.", "تشعر بعدم الارتياح عندما تتغير الخطط فجأة.", "计划突然改变会让你感到不安。", "J"),
  q("Kamu suka nunda pekerjaan sampai mendekati deadline.", "You tend to put off work until close to the deadline.", "تميل إلى تأجيل العمل حتى اقتراب الموعد النهائي.", "你常常把工作拖到接近截止日期才做。", "P"),
  q("Kamu suka bikin daftar tugas dan nyoret satu-satu.", "You like making to-do lists and checking items off one by one.", "تحب عمل قوائم مهام وشطبها واحدة تلو الأخرى.", "你喜欢列待办清单，并逐项完成打勾。", "J"),
  q("Kamu lebih suka buka banyak opsi daripada mutusin lebih awal.", "You prefer keeping options open rather than deciding early.", "تفضل ترك الخيارات مفتوحة بدلاً من الحسم مبكرًا.", "你更喜欢保留多种选择，而不是早早做决定。", "P"),
  q("Kamu ngerasa lega kalau semua udah beres dan tertata.", "You feel relieved once everything is settled and organized.", "تشعر بالارتياح عندما يكون كل شيء منظمًا ومرتبًا.", "当一切都井井有条时，你会感到轻松。", "J"),
  q("Kamu gampang beradaptasi kalau rencana berubah mendadak.", "You adapt easily when plans change suddenly.", "تتكيف بسهولة عندما تتغير الخطط فجأة.", "当计划突然改变时，你能很快适应。", "P"),
  q("Kamu lebih suka lingkungan kerja yang terstruktur dan rutin.", "You prefer a structured and routine work environment.", "تفضل بيئة عمل منظمة وروتينية.", "你更喜欢结构化且有规律的工作环境。", "J"),
  q("Kamu cenderung improvisasi daripada ngikutin rencana yang kaku.", "You tend to improvise rather than follow a rigid plan.", "تميل إلى الارتجال بدلاً من اتباع خطة صارمة.", "你倾向于随机应变，而不是死守僵化的计划。", "P"),
  q("Kamu ngerasa puas kalau bisa nyelesain sesuatu lebih cepat dari deadline.", "You feel satisfied when you finish something ahead of the deadline.", "تشعر بالرضا عند إنجاز شيء قبل الموعد النهائي.", "提前完成任务会让你感到满足。", "J"),
  q("Kamu suka nyoba berbagai kemungkinan baru daripada pegang teguh satu rencana.", "You like trying new possibilities rather than sticking to one plan.", "تحب تجربة احتمالات جديدة بدلاً من التمسك بخطة واحدة.", "你喜欢尝试新的可能性，而不是坚守一个计划。", "P"),
];

const bankID = [
  q("Kamu jarang cemas soal apa kata orang tentang kamu.", "You rarely worry about what others think of you.", "نادرًا ما تقلق بشأن ما يظنه الآخرون بك.", "你很少担心别人对你的看法。", "Assertive"),
  q("Kamu sering mengkhawatirkan hal-hal yang belum tentu kejadian.", "You often worry about things that might never happen.", "غالبًا ما تقلق بشأن أمور قد لا تحدث أبدًا.", "你常常担心那些不一定会发生的事情。", "Turbulent"),
  q("Kamu ngerasa yakin semuanya bakal berjalan baik-baik aja.", "You feel confident that things will turn out fine.", "تشعر بالثقة بأن الأمور ستسير على ما يرام.", "你相信事情最终会顺利解决。", "Assertive"),
  q("Kamu gampang stres kalau ada yang nggak sesuai rencana.", "You get stressed easily when things don't go as planned.", "تتوتر بسهولة عندما لا تسير الأمور كما هو مخطط.", "当事情不按计划进行时，你很容易感到压力。", "Turbulent"),
  q("Kamu jarang nyesel sama keputusan yang udah kamu ambil.", "You rarely regret the decisions you've made.", "نادرًا ما تندم على القرارات التي اتخذتها.", "你很少后悔自己做过的决定。", "Assertive"),
  q("Kamu sering muter ulang kejadian di kepala dan mikirin 'coba kalau beda'.", "You often replay events in your head, thinking \"what if it went differently\".", "غالبًا ما تستعيد الأحداث في ذهنك وتفكر \"ماذا لو كان الأمر مختلفًا\".", "你常常在脑海中回放事情，想着\"如果当初不一样会怎样\"。", "Turbulent"),
  q("Kamu ngerasa tenang meskipun lagi menghadapi tekanan besar.", "You feel calm even when under a lot of pressure.", "تشعر بالهدوء حتى تحت ضغط كبير.", "即使承受很大压力，你也能保持冷静。", "Assertive"),
  q("Kamu perfeksionis dan susah puas sama hasil kerja sendiri.", "You're a perfectionist and rarely satisfied with your own work.", "أنت شخص كمالي ونادرًا ما ترضى عن عملك الخاص.", "你是完美主义者，很难对自己的成果满意。", "Turbulent"),
  q("Kamu nggak gampang terganggu sama kritik orang lain.", "You're not easily rattled by other people's criticism.", "لا تتأثر بسهولة بانتقادات الآخرين.", "别人的批评不容易动摇你。", "Assertive"),
  q("Kamu gampang kepikiran kesalahan kecil yang kamu buat berhari-hari.", "You easily dwell on small mistakes for days.", "تظل تفكر في الأخطاء الصغيرة لأيام.", "一个小错误你会记挂好几天。", "Turbulent"),
  q("Kamu percaya diri ngambil keputusan besar tanpa ragu-ragu.", "You confidently make big decisions without hesitation.", "تتخذ القرارات الكبيرة بثقة ودون تردد.", "你能自信果断地做出重大决定。", "Assertive"),
  q("Kamu sering butuh validasi dari orang lain buat ngerasa yakin sama pilihan kamu.", "You often need validation from others to feel sure about your choices.", "غالبًا ما تحتاج إلى تأكيد من الآخرين لتشعر بالثقة في خياراتك.", "你常常需要他人的认可才能对自己的选择有信心。", "Turbulent"),
];

const questions = [];
for (let i = 0; i < 12; i++) {
  questions.push({ ...bankEI[i], type: "EI" });
  questions.push({ ...bankSN[i], type: "SN" });
  questions.push({ ...bankTF[i], type: "TF" });
  questions.push({ ...bankJP[i], type: "JP" });
  questions.push({ ...bankID[i], type: "ID" });
}

const opposite = {
  E: "I", I: "E",
  S: "N", N: "S",
  T: "F", F: "T",
  J: "P", P: "J",
  Assertive: "Turbulent", Turbulent: "Assertive",
};

const identityInfo = {
  A: {
    label: "Assertive",
    desc: {
      id: "Kamu cenderung percaya diri, tenang, dan nggak gampang goyah sama tekanan atau kritik.",
      en: "You tend to be confident, calm and not easily shaken by pressure or criticism.",
      ar: "تميل إلى الثقة والهدوء ولا تتأثر بسهولة بالضغط أو النقد.",
      zh: "你通常自信、冷静，不容易被压力或批评动摇。"
    }
  },
  T: {
    label: "Turbulent",
    desc: {
      id: "Kamu cenderung perfeksionis, penuh semangat buat berkembang, dan lebih sensitif sama tekanan.",
      en: "You tend to be a perfectionist, driven to improve, and more sensitive to pressure.",
      ar: "تميل إلى الكمالية والسعي الدائم للتطور، وتكون أكثر حساسية للضغط.",
      zh: "你倾向于完美主义、渴望不断进步，对压力也更敏感。"
    }
  },
};

const typeMeta = {
  "INTJ": {"title": {"id": "Sang Arsitek", "en": "The Architect", "ar": "المهندس المعماري", "zh": "建筑师"}, "icon": "fa-chess-king", "desc": {"id": "Pemikir yang imajinatif dan strategis, dengan rencana untuk segala hal.", "en": "Imaginative and strategic thinkers with a plan for everything.", "ar": "مفكر خيالي واستراتيجي لديه خطة لكل شيء.", "zh": "富有想象力和战略眼光，凡事都有计划。"}}, 
  "INTP": {"title": {"id": "Sang Pemikir", "en": "The Logician", "ar": "المنطقي", "zh": "逻辑学家"}, "icon": "fa-flask", "desc": {"id": "Penemu yang inovatif dengan rasa ingin tahu yang tak pernah padam.", "en": "Innovative inventors with an unquenchable thirst for knowledge.", "ar": "مخترع مبتكر لديه فضول لا ينضب.", "zh": "创新的发明家，求知欲永不满足。"}}, 
  "ENTJ": {"title": {"id": "Sang Komandan", "en": "The Commander", "ar": "القائد", "zh": "指挥官"}, "icon": "fa-crown", "desc": {"id": "Pemimpin yang berani, imajinatif, dan berkeinginan kuat.", "en": "Bold, imaginative and strong-willed leaders.", "ar": "قائد جريء وخيالي وقوي الإرادة.", "zh": "大胆、有想象力、意志坚定的领导者。"}}, 
  "ENTP": {"title": {"id": "Sang Debat", "en": "The Debater", "ar": "المناظر", "zh": "辩论家"}, "icon": "fa-bolt", "desc": {"id": "Pemikir yang cerdas dan ingin tahu yang tidak tahan terhadap tantangan intelektual.", "en": "Smart and curious thinkers who can't resist an intellectual challenge.", "ar": "مفكر ذكي لا يقاوم أي تحدٍ فكري.", "zh": "聪明好奇，无法抗拒智力挑战。"}}, 
  "INFJ": {"title": {"id": "Sang Penasihat", "en": "The Advocate", "ar": "المحامي", "zh": "提倡者"}, "icon": "fa-feather", "desc": {"id": "Pendiam dan mistis, namun sangat menginspirasi dan idealis.", "en": "Quiet, idealistic and tireless in helping a good cause.", "ar": "هادئ ومثالي ولا يكل عن مساعدة الآخرين.", "zh": "安静、理想主义，乐于助人不知疲倦。"}}, 
  "INFP": {"title": {"id": "Sang Mediator", "en": "The Mediator", "ar": "الوسيط", "zh": "调停者"}, "icon": "fa-heart", "desc": {"id": "Puitis, baik hati, dan altruistik, selalu ingin membantu tindakan baik.", "en": "Poetic, kind and altruistic, always eager to help a good cause.", "ar": "شاعري وطيب ونكران للذات ودائم الاستعداد للمساعدة.", "zh": "富有诗意、善良无私，随时乐意伸出援手。"}}, 
  "ENFJ": {"title": {"id": "Sang Protagonis", "en": "The Protagonist", "ar": "البطل", "zh": "主人公"}, "icon": "fa-bullhorn", "desc": {"id": "Pemimpin yang karismatik dan menginspirasi, mampu memikat pendengar.", "en": "Charismatic and inspiring leaders who mesmerize their listeners.", "ar": "قائد كاريزمي وملهم يأسر مستمعيه.", "zh": "富有魅力、鼓舞人心，能打动听众的领导者。"}}, 
  "ENFP": {"title": {"id": "Sang Jurubicara", "en": "The Campaigner", "ar": "الحملة", "zh": "竞选者"}, "icon": "fa-wand-magic-sparkles", "desc": {"id": "Antusias, kreatif, dan bebas yang selalu dapat menemukan alasan untuk tersenyum.", "en": "Enthusiastic, creative and sociable free spirits who always find a reason to smile.", "ar": "متحمس ومبدع واجتماعي دائم الابتسام.", "zh": "热情、有创意、社交自由，总能找到微笑的理由。"}}, 
  "ISTJ": {"title": {"id": "Sang Logistik", "en": "The Logistician", "ar": "أخصائي اللوجستيات", "zh": "物流师"}, "icon": "fa-clipboard-check", "desc": {"id": "Individu yang praktis dan mengutamakan fakta, keandalannya tidak dapat diragukan.", "en": "Practical and fact-minded, their reliability cannot be doubted.", "ar": "عملي ويهتم بالحقائق ولا يُشك في موثوقيته.", "zh": "务实且注重事实，可靠性毋庸置疑。"}}, 
  "ISFJ": {"title": {"id": "Sang Pelindung", "en": "The Defender", "ar": "المدافع", "zh": "守卫者"}, "icon": "fa-shield-halved", "desc": {"id": "Pelindung yang sangat hangat dan setia, selalu siap membela orang dicintai.", "en": "Very dedicated and warm protectors, always ready to defend their loved ones.", "ar": "حامٍ دافئ ومتفانٍ، مستعد دائمًا للدفاع عن أحبائه.", "zh": "热心且尽责的守护者，随时准备保护所爱的人。"}}, 
  "ESTJ": {"title": {"id": "Sang Eksekutif", "en": "The Executive", "ar": "التنفيذي", "zh": "总经理"}, "icon": "fa-briefcase", "desc": {"id": "Administrator yang luar biasa, tidak ada tandingannya dalam mengelola sesuatu.", "en": "Excellent administrators, unsurpassed at managing things or people.", "ar": "إداري ممتاز لا يُضاهى في إدارة الأشياء أو الأشخاص.", "zh": "杰出的管理者，善于统筹事务或团队。"}}, 
  "ESFJ": {"title": {"id": "Sang Konsul", "en": "The Consul", "ar": "القنصل", "zh": "执政官"}, "icon": "fa-people-roof", "desc": {"id": "Orang yang sangat peduli, sosial, dan populer, selalu ingin membantu.", "en": "Extraordinarily caring, social and popular people, always eager to help.", "ar": "شخص اجتماعي ومحبوب يهتم بالآخرين ويحب المساعدة.", "zh": "极具爱心、社交活跃且受欢迎，乐于助人。"}}, 
  "ISTP": {"title": {"id": "Sang Pengrajin", "en": "The Virtuoso", "ar": "الموهوب", "zh": "鉴赏家"}, "icon": "fa-wrench", "desc": {"id": "Eksperimenter yang berani dan praktis, menguasai semua jenis alat.", "en": "Bold and practical experimenters, masters of all kinds of tools.", "ar": "مجرب جريء وعملي، يتقن جميع أنواع الأدوات.", "zh": "大胆务实的实验家，精通各种工具。"}}, 
  "ISFP": {"title": {"id": "Sang Seniman", "en": "The Adventurer", "ar": "المغامر", "zh": "探险家"}, "icon": "fa-palette", "desc": {"id": "Seniman yang fleksibel dan menawan, selalu siap mengeksplorasi hal baru.", "en": "Flexible and charming artists, always ready to explore new possibilities.", "ar": "فنان مرن وساحر، مستعد دائمًا لتجربة أشياء جديدة.", "zh": "灵活迷人的艺术家，随时愿意尝试新事物。"}}, 
  "ESTP": {"title": {"id": "Sang Pengusaha", "en": "The Entrepreneur", "ar": "رائد الأعمال", "zh": "企业家"}, "icon": "fa-gauge-high", "desc": {"id": "Cerdas, energik, dan sangat perseptif, yang benar-benar menikmati hidup.", "en": "Smart, energetic and perceptive people who truly enjoy living on the edge.", "ar": "ذكي ونشيط وواعٍ، يستمتع بالعيش على الحافة.", "zh": "聪明、精力充沛且善于观察，喜欢活在刀锋边缘。"}}, 
  "ESFP": {"title": {"id": "Sang Penghibur", "en": "The Entertainer", "ar": "المسلي", "zh": "表演者"}, "icon": "fa-masks-theater", "desc": {"id": "Penghibur yang spontan, energik, dan antusias - hidup tidak pernah membosankan.", "en": "Spontaneous, energetic and enthusiastic - life is never boring around them.", "ar": "عفوي ونشيط ومتحمس - الحياة معه لا تُمل.", "zh": "随性、充满活力又热情——身边的生活永不无聊。"}}
};

const LANGS = ['id', 'en', 'ar', 'zh'];
let currentLang = 'id';
try { currentLang = localStorage.getItem('appLang') || 'id'; } catch (e) {}
const groupHex = ['#8e44ad', '#27ae60', '#2f8fbf', '#d4a017'];
const traitHex = { Energy: '#2f8fbf', Mind: '#d4a017', Nature: '#27ae60', Tactics: '#8e44ad', Identity: '#e74c3c' };

const L = {
  nav_home: ['Tes Kepribadian', 'Personality Test', 'اختبار الشخصية', '性格测试'],
  nav_types: ['Tipe Kepribadian', 'Personality Types', 'أنواع الشخصية', '性格类型'],
  nav_contact: ['Hubungi Kami', 'Contact Us', 'اتصل بنا', '联系我们'],
  badge: ['Akurat & Interaktif', 'Accurate & Interactive', 'دقيق وتفاعلي', '准确且互动'],
  hero_title: ['Seperti apa kepribadian Anda?', 'What type of personality are you?', 'ما نوع شخصيتك？', '你是哪种性格类型？'],
  hero_subtitle: ['Jelajahi identitas diri Anda.', 'Explore your identity.', 'اكتشف هويتك.', '探索你的身份。'],
  hero_desc: ['Pahami pandangan hidup, hubungan, karir, dan potensi diri Anda melalui tes kepribadian 16 tipe dengan estetika jernih dan tenang.', 'Understand your worldview, relationships, career, and potential through the 16-type personality test with a calm clear aesthetic.', 'افهم نظرتك للحياة وعلاقاتك ومسارك المهني وإمكاناتك من خلال اختبار الشخصية بـ16 نوعاً بأسلوب هادئ وصافٍ.', '通过16型人格测试，了解你的世界观、人际关系、职业与潜能，享受清透宁静的体验。'],
  btn_take_test: ['Mulai Tes', 'Take your test', 'ابدأ الاختبار', '开始测试'],
  char_id: ['Identitas Karakter', 'Character Identity', 'هوية الشخصية', '角色身份'],
  discover_title: ['Temukan Perjalanan Anda', 'Discover Your Journey', 'اكتشف رحلتك', '开启你的探索之旅'],
  discover_subtitle: ['Tiga langkah sederhana menuju pemahaman diri yang lebih dalam.', 'Three simple steps toward deeper self-awareness.', 'ثلاث خطوات بسيطة نحو فهم أعمق لذاتك.', '三个简单步骤，更深入地了解自己。'],
  card1_title: ['1. Jawab Pertanyaan', '1. Answer Questions', '1. أجب عن الأسئلة', '1. 回答问题'],
  card1_desc: ['Jawab dengan jujur sesuai gaya dan preferensi keseharian Anda tanpa tekanan.', 'Answer honestly according to your daily style and preferences without pressure.', 'أجب بصدق وفق أسلوبك وتفضيلاتك اليومية دون ضغط.', '根据你的日常风格和偏好如实作答，无需压力。'],
  card2_title: ['2. Analisis MBTI', '2. MBTI Analysis', '2. تحليل MBTI', '2. MBTI分析'],
  card2_desc: ['Algoritma menghitung skala Introvert, Ekstrovert, Intuitif, Observan, dan lainnya.', 'Algorithm calculates Introversion, Extraversion, Intuition, Sensing scales.', 'تحسب الخوارزمية مقاييس الانطواء والانبساط والحدس والحس وغيرها.', '算法会计算内向、外向、直觉、感觉等维度。'],
  card3_title: ['3. Simpan & Bandingkan', '3. Save & Compare', '3. احفظ وقارن', '3. 保存与比较'],
  card3_desc: ['Simpan hasil tes ke akun Anda dan pantau evolusi kepribadian dari tahun ke tahun.', 'Save test results to your profile and track personality evolution over the years.', 'احفظ نتائجك في حسابك وتابع تطور شخصيتك عبر السنين.', '将结果保存到你的账户，追踪多年来的性格变化。'],
  about_tag: ['Tentang Tes Kepribadian', 'About Personality Test', 'عن اختبار الشخصية', '关于性格测试'],
  about_title: ['Tes Kepribadian Gratis: Kenapa Harus Mengikuti Tes Ini?', 'Free Personality Test: Why Take This Test?', 'اختبار شخصية مجاني: لماذا تجريه？', '免费性格测试：为什么要做这个测试？'],
  about_desc1: ['Tes kepribadian MBTI membantu membuka wawasan tentang cara Anda mengambil keputusan, berinteraksi dengan orang lain, serta menangani tekanan harian.', 'The MBTI test offers insights into how you make decisions, interact with others, and handle daily pressure.', 'يساعدك اختبار MBTI على فهم طريقة اتخاذك للقرارات وتفاعلك مع الآخرين وتعاملك مع الضغوط اليومية.', 'MBTI测试帮助你了解自己如何做决定、与他人互动以及应对日常压力。'],
  about_desc2: ['Hanya membutuhkan waktu kurang dari 10 menit dengan tampilan jernih yang tenang. Hasil dapat disimpan permanen pada riwayat profil Anda.', 'Takes less than 10 minutes with a peaceful glassmorphic view. Save results to your profile history permanently.', 'يستغرق أقل من 10 دقائق بواجهة صافية وهادئة، ويمكنك حفظ النتائج في سجل ملفك.', '不到10分钟即可完成，界面清透宁静，结果可永久保存在你的个人记录中。'],
  btn_start_now: ['Mulai Tes Sekarang', 'Start Test Now', 'ابدأ الاختبار الآن', '立即开始测试'],
  form_title: ['Langkah Terakhir (Opsional)', 'Final Step (Optional)', 'الخطوة الأخيرة (اختياري)', '最后一步（可选）'],
  form_subtitle: ['Isi data di bawah ini jika ingin menyimpan ke riwayat personal Anda.', 'Fill in the details below to save to your personal history.', 'املأ البيانات أدناه إن أردت حفظ النتيجة في سجلك الشخصي.', '如需保存到个人记录，请填写以下信息。'],
  lbl_gender: ['Jenis Kelamin', 'Gender', 'الجنس', '性别'],
  gender_pick: ['Pilih (Opsional)', 'Choose (Optional)', 'اختر (اختياري)', '请选择（可选）'],
  g_male: ['Laki-laki', 'Male', 'ذكر', '男'],
  g_female: ['Perempuan', 'Female', 'أنثى', '女'],
  g_other: ['Lainnya', 'Other', 'آخر', '其他'],
  btn_see_result: ['Lihat Hasil MBTI Saya', 'See My MBTI Result', 'اعرض نتيجتي', '查看我的结果'],
  save_auto: ['Hasil tersimpan otomatis di riwayatmu.', 'Result saved automatically to your history.', 'تم حفظ النتيجة تلقائيًا في سجلك.', '结果已自动保存到你的记录。'],
  save_view: ['Lihat riwayat', 'View history', 'عرض السجل', '查看记录'],
  save_login: ['Masuk agar hasil tersimpan otomatis di riwayat.', 'Log in to save this result to your history automatically.', 'سجّل الدخول لحفظ النتيجة تلقائيًا.', '登录后结果将自动保存。'],
  save_ing: ['Menyimpan…', 'Saving…', 'جارٍ الحفظ…', '保存中…'],
  save_fail: ['Gagal menyimpan. Periksa koneksi internet.', 'Could not save. Check your connection.', 'تعذر الحفظ. تحقق من الإنترنت.', '保存失败，请检查网络。'],
  no_scores: ['Persentase tidak tersimpan untuk tes lama ini. Tes berikutnya akan tersimpan lengkap.', 'Percentages were not saved for this older test. Future tests are saved in full.', 'لم تُحفظ النسب لهذا الاختبار القديم.', '此旧记录未保存百分比，之后的测试会完整保存。'],
  back_hist: ['Kembali ke riwayat', 'Back to history', 'العودة إلى السجل', '返回记录'],
  taken_on: ['Dikerjakan pada', 'Taken on', 'تم في', '完成于'],
  save_need_login: ['Masuk atau daftar dulu untuk menyimpan hasil tesmu ke riwayat. Hasil yang barusan tetap aman dan langsung tersimpan setelah kamu masuk.', 'Log in or sign up to save your result to history. Your current result is kept and saved right after you log in.', 'سجّل الدخول أو أنشئ حسابًا لحفظ نتيجتك في السجل. نتيجتك الحالية محفوظة وستُحفظ فور تسجيل الدخول.', '请先登录或注册，以便将结果保存到记录中。你刚完成的结果会在登录后自动保存。'],
  btn_save_history: ['Simpan ke Riwayat Profil', 'Save to Profile History', 'احفظ في سجل الملف', '保存到个人记录'],
  btn_retake: ['Ulangi Tes', 'Retake Test', 'أعد الاختبار', '重新测试'],
  result_badge: ['Hasil Tes Kepribadian Anda', 'Your Personality Test Result', 'نتيجة اختبار شخصيتك', '你的性格测试结果'],
  types_title: ['16 Tipe Kepribadian', '16 Personality Types', 'أنواع الشخصية الـ16', '16种性格类型'],
  types_subtitle: ['Jelajahi 16 profil kepribadian MBTI lengkap dengan karakteristik khas masing-masing.', 'Explore 16 MBTI personality profiles complete with unique traits.', 'استكشف 16 نمطاً من MBTI مع خصائص كل نمط.', '探索16种MBTI性格类型及其独特特征。'],
  history_title: ['Riwayat Tes Kepribadian', 'Personality Test History', 'سجل اختبارات الشخصية', '性格测试记录'],
  settings_title: ['Pengaturan', 'Settings', 'الإعدادات', '设置'],
  settings_lang: ['Pilih Bahasa', 'Select Language', 'اختر اللغة', '选择语言'],
  close: ['Tutup', 'Close', 'إغلاق', '关闭'],
  footer_rights: ['© 2026 Tes 16Personalities. Hak cipta dilindungi.', '© 2026 16Personalities Test. All rights reserved.'],
  footer_desc: ['Dibuat untuk membantu mengenal kepribadian secara lebih akurat dan menyenangkan.', 'Made to help you understand your personality more accurately and enjoyably.'],
  c_name: ['Nama', 'Name', 'الاسم', '姓名'],
  c_name_ph: ['Nama Anda', 'Your name', 'اسمك', '你的姓名'],
  c_msg: ['Pesan', 'Message', 'الرسالة', '留言'],
  c_msg_ph: ['Tuliskan pesan atau masukan Anda...', 'Write your message or feedback...', 'اكتب رسالتك أو ملاحظاتك...', '请写下你的留言或反馈...'],
  c_send: ['Kirim Pesan', 'Send Message', 'إرسال', '发送留言'],
  c_ok: ['Pesan Anda berhasil terkirim! Terima kasih.', 'Your message was sent! Thank you.', 'تم إرسال رسالتك! شكراً لك.', '留言已发送，谢谢！'],
  a_login_reg: ['Masuk / Daftar', 'Login / Register', 'دخول / تسجيل', '登录 / 注册'],
  a_login_t: ['Masuk Akun', 'Log In', 'تسجيل الدخول', '登录账户'],
  a_reg_t: ['Daftar Akun Baru', 'Create Account', 'إنشاء حساب', '注册新账户'],
  a_fullname: ['Nama Lengkap', 'Full Name', 'الاسم الكامل', '全名'],
  a_email: ['Email', 'Email', 'البريد الإلكتروني', '邮箱'],
  a_login_b: ['Masuk', 'Log In', 'دخول', '登录'],
  a_google: ['Lanjutkan dengan Google', 'Continue with Google', 'المتابعة باستخدام Google', '使用 Google 继续'],
  a_or: ['atau', 'or', 'أو', '或'],
  a_reg_b: ['Daftar', 'Sign Up', 'تسجيل', '注册'],
  a_to_reg: ['Belum punya akun? Daftar di sini', 'No account? Sign up here', 'ليس لديك حساب؟ سجل هنا', '没有账户？在此注册'],
  a_to_login: ['Sudah punya akun? Masuk', 'Have an account? Log in', 'لديك حساب؟ سجل الدخول', '已有账户？登录'],
  logout: ['Keluar', 'Log out', 'خروج', '退出'],
  p_save: ['Simpan', 'Save', 'حفظ', '保存'],
  p_cancel: ['Batal', 'Cancel', 'إلغاء', '取消'],
  p_remove_photo: ['Hapus foto', 'Remove photo', 'إزالة الصورة', '删除头像'],
  p_crop_title: ['Atur foto profil', 'Adjust profile photo', 'اضبط صورة الملف', '调整头像'],
  p_crop_hint: ['Geser dan zoom untuk memilih bagian yang mau dipakai.', 'Drag and zoom to choose the part you want.', 'اسحب وكبّر لاختيار الجزء المطلوب.', '拖动并缩放以选择要使用的部分。'],
  p_name_empty: ['Nama tidak boleh kosong.', 'Name cannot be empty.', 'لا يمكن ترك الاسم فارغاً.', '名称不能为空。'],
  no_hist: ['Belum ada riwayat tes pengerjaan.', 'No test history yet.', 'لا يوجد سجل اختبارات بعد.', '暂无测试记录。'],
  test_no: ['Tes #', 'Test #', 'اختبار #', '测试 #'],
  mbti_res: ['Hasil MBTI', 'MBTI Result', 'نتيجة MBTI', 'MBTI结果'],
  q_label: ['PERTANYAAN', 'QUESTION', 'السؤال', '问题'],
  q_progress: ['Pertanyaan {n} dari {t}', 'Question {n} of {t}', 'السؤال {n} من {t}', '第 {n} 题 / 共 {t} 题'],
  agree: ['Setuju', 'Agree', 'أوافق', '同意'],
  disagree: ['Tidak Setuju', 'Disagree', 'لا أوافق', '不同意'],
  o3: ['Sangat Setuju', 'Strongly Agree', 'أوافق بشدة', '非常同意'],
  o2: ['Setuju', 'Agree', 'أوافق', '同意'],
  o1: ['Agak Setuju', 'Slightly Agree', 'أوافق قليلاً', '有点同意'],
  o0: ['Netral', 'Neutral', 'محايد', '中立'],
  o_1: ['Agak Tidak Setuju', 'Slightly Disagree', 'لا أوافق قليلاً', '有点不同意'],
  o_2: ['Tidak Setuju', 'Disagree', 'لا أوافق', '不同意'],
  o_3: ['Sangat Tidak Setuju', 'Strongly Disagree', 'لا أوافق بشدة', '非常不同意'],
  variant: ['Varian', 'Variant', 'النوع الفرعي', '变体'],
  Energy: ['Energi', 'Energy', 'الطاقة', '能量'],
  Mind: ['Pikiran', 'Mind', 'العقل', '思维'],
  Nature: ['Sifat', 'Nature', 'الطبع', '天性'],
  Tactics: ['Taktik', 'Tactics', 'الأسلوب', '策略'],
  Identity: ['Identitas', 'Identity', 'الهوية', '身份'],
  p_E: ['Ekstrovert', 'Extraverted', 'منبسط', '外向'],
  p_I: ['Introvert', 'Introverted', 'منطوٍ', '内向'],
  p_N: ['Intuitif', 'Intuitive', 'حدسي', '直觉'],
  p_S: ['Observan', 'Observant', 'ملاحِظ', '观察'],
  p_T: ['Pemikir', 'Thinking', 'مفكر', '思考'],
  p_F: ['Perasa', 'Feeling', 'عاطفي', '情感'],
  p_J: ['Terstruktur', 'Judging', 'منظِّم', '判断'],
  p_P: ['Fleksibel', 'Prospecting', 'مرن', '展望'],
  p_A: ['Tegas', 'Assertive', 'واثق', '自信'],
  p_Tb: ['Turbulen', 'Turbulent', 'متقلب', '起伏'],
  a_pass: ['Kata Sandi', 'Password', 'كلمة المرور', '密码'],
  a_pass2: ['Konfirmasi Kata Sandi', 'Confirm Password', 'تأكيد كلمة المرور', '确认密码'],
  e_fill: ['Lengkapi semua kolom.', 'Please fill in all fields.', 'يرجى ملء جميع الحقول.', '请填写所有字段。'],
  e_email: ['Format email tidak valid.', 'Invalid email format.', 'صيغة البريد الإلكتروني غير صحيحة.', '邮箱格式无效。'],
  e_pass_len: ['Kata sandi minimal 8 karakter.', 'Password must be at least 8 characters.', 'يجب ألا تقل كلمة المرور عن 8 أحرف.', '密码至少需要8个字符。'],
  e_pass_match: ['Konfirmasi kata sandi tidak cocok.', 'Passwords do not match.', 'كلمتا المرور غير متطابقتين.', '两次输入的密码不一致。'],
  e_exists: ['Email sudah terdaftar. Silakan masuk.', 'Email already registered. Please log in.', 'البريد مسجل بالفعل. يرجى تسجيل الدخول.', '该邮箱已注册，请登录。'],
  e_wrong: ['Email atau kata sandi salah.', 'Incorrect email or password.', 'البريد أو كلمة المرور غير صحيحة.', '邮箱或密码错误。'],
  search_ph: ['Cari tipe kepribadian...', 'Search personality types...', 'ابحث عن نوع الشخصية...', '搜索性格类型...'],
  saved_ok: ['Hasil tes otomatis tersimpan ke riwayatmu.', 'Your result was saved to your history.', 'تم حفظ نتيجتك في السجل.', '结果已保存到你的记录中。'],
  login_to_save: ['Masuk untuk menyimpan hasil ini.', 'Log in to save this result.', 'سجّل الدخول لحفظ هذه النتيجة.', '登录以保存此结果。'],
  del_h: ['Hapus', 'Delete', 'حذف', '删除'],
  e_net: ['Gagal terhubung ke server. Periksa koneksi internet.', 'Could not reach the server. Check your connection.', 'تعذر الاتصال بالخادم. تحقق من الإنترنت.', '无法连接服务器，请检查网络。'],
  e_many: ['Terlalu banyak percobaan. Coba lagi nanti.', 'Too many attempts. Try again later.', 'محاولات كثيرة. حاول لاحقاً.', '尝试次数过多，请稍后再试。'],
  hello: ['Halo', 'Hello', 'مرحباً', '你好'],
  view_profile: ['Lihat Profil', 'View Profile', 'عرض الملف', '查看详情'],
  email_ph: ['nama@email.com', 'name@email.com', 'name@email.com', 'name@email.com'],
  user_profile: ['Profil Pengguna', 'User Profile', 'ملف المستخدم', '用户资料'],
  res_pdf_title: ['Download PDF Hasil', 'Download PDF Result', 'تحميل ملف PDF', '下载PDF结果'],
  res_click_detail: ['Klik untuk melihat 8 kategori & detail lengkap tipe ini', 'Click to view all 8 categories & complete details', 'انقر لعرض الفئات الـ 8 والتفاصيل الكاملة', '点击查看全部8个类别与详细信息'],
  res_trait_analysis: ['Analisis Persentase Kepribadian', 'Personality Percentage Analysis', 'تحليل نسبة الشخصية', '个性百分比分析'],
  res_summary_title: ['Ringkasan 8 Profil Kepribadian', 'Summary of 8 Personality Profiles', 'ملخص 8 ملفات شخصية', '8个性格档案摘要'],
  res_details_app: ['Informasi detail tersedia pada aplikasi.', 'Detailed information is available in the app.', 'معلومات مفصلة متاحة في التطبيق.', '应用程序中提供详细信息。'],
  res_auto_print: ['16 Personalities Test • Dicetak secara otomatis', '16 Personalities Test • Automatically printed', 'اختبار 16 شخصية • طباعة تلقائية', '16型人格测试 • 自动打印']
};

const T = (k) => { const e = L[k]; return e ? (e[LANGS.indexOf(currentLang)] || e[0]) : k; };
const pick = (o) => (o == null ? '' : typeof o === 'string' ? o : o[currentLang] || o.id || o.en || '');

const typeInfo = {};
typeGroups.forEach((g, gi) => g.types.forEach((t) => { typeInfo[t.code] = { ...t, gi, hex: groupHex[gi], icon: (typeMeta[t.code] || {}).icon || 'fa-user' }; }));

const typeTitle = (c) => {
  const meta = typeMeta[c];
  if (meta && meta.title) {
    if (typeof meta.title === 'object') {
      return meta.title[currentLang] || meta.title.id || meta.title.en;
    }
    return meta.title;
  }
  return pick(typeInfo[c]?.name);
};

const typeDesc = (c) => {
  const meta = typeMeta[c];
  if (meta && meta.desc) {
    if (typeof meta.desc === 'object') {
      return meta.desc[currentLang] || meta.desc.id || meta.desc.en;
    }
    return meta.desc;
  }
  return pick(typeInfo[c]?.desc);
};

let userAnswers = {};
let lastResult = null;
let currentUser = null;
let saveIntent = false;
let authIsRegistering = false;
const $ = (id) => document.getElementById(id);
let focusedIdx = -1, hoverTimer = null;

function applyFocus() {
  const f = hoverIdx !== null ? hoverIdx : firstUnanswered();
  if (f === focusedIdx) return;
  const cards = $('questions-list').children;
  [focusedIdx, f].forEach((i, k) => { const c = cards[i]; if (c) { c.classList.toggle('question-focus', k === 1); c.classList.toggle('question-blur', k === 0); } });
  focusedIdx = f;
}

document.addEventListener('DOMContentLoaded', () => {
  setupScrollAnimations(); initSession(); setLanguage(currentLang); initTypePage();
  const list = $('questions-list');
  if (list) {
    list.addEventListener('mouseover', (e) => { const c = e.target.closest('.question-card'); const n = c ? +c.id.replace('question-card-', '') : null; clearTimeout(hoverTimer); hoverTimer = setTimeout(() => { hoverIdx = n; applyFocus(); }, 80); });
    list.addEventListener('mouseleave', () => { clearTimeout(hoverTimer); hoverIdx = null; applyFocus(); });
  }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeTypeModal(); });
});

function setLanguage(lang) {
  const sb = document.getElementById('type-search-back'); if (sb) sb.title = lang === 'id' ? 'Kembali' : 'Back';
  currentLang = lang;
  try { localStorage.setItem('appLang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = T(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => { el.placeholder = T(el.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => { el.title = T(el.dataset.i18nTitle); });
  document.title = '16 Personalities';
  LANGS.forEach((l) => {
    const b = $('lang-btn-' + l);
    if (b) b.className = 'px-4 py-2.5 rounded-xl border font-semibold text-xs transition-all ' + (l === lang ? 'bg-teal-500/20 border-teal-400 text-teal-800' : 'bg-white/60 border-slate-200 text-slate-600');
  });
  renderQuestions(); applyFocus(); renderMegaMenu(); renderMBTICards(); renderAuthUI(); updateAuthText();
  updateQuizProgress();
  if (lastResult) renderResult();
  if (currentUser) renderHistory();
  if (tpCode && !$('view-type').classList.contains('hidden')) renderTypePage();
}

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
function scrollTop0() {
  const root = document.documentElement;
  const go = () => {
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.scrollTop = 0; document.body.scrollTop = 0;
    root.style.scrollBehavior = prev;
  };
  go();
  requestAnimationFrame(go);
  setTimeout(go, 60);
}

let navIdx = 0, curView = 'home';
function navigateTo(viewName, push = true) {
  document.querySelectorAll('main > section').forEach((s) => s.classList.add('hidden'));
  $('view-' + viewName).classList.remove('hidden');
  setNavActive(viewName);
  scrollTop0();
  if (push && curView !== viewName) { try { history.pushState({ view: viewName, i: ++navIdx }, ''); } catch (e) {} }
  curView = viewName;
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) en.target.classList.add('reveal-active'); });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal-left, .reveal-right, .reveal-bottom').forEach((el) => observer.observe(el));
}

function renderMegaMenu() {
  const menu = $('mega-menu');
  if (!menu) return;
  menu.innerHTML = '<div class="mega-panel">' + typeGroups.map((g, gi) => `
    <div class="mega-col">
      <h3 style="color:${groupHex[gi]}">${pick(g.name)}</h3>
      <p>${pick(g.desc)}</p>
      <div class="mega-types-grid">
        ${g.types.map((t) => `<button class="mega-type" style="background:${groupHex[gi]}" onclick="goToType('${t.code}')"><span class="mega-type-name">${typeTitle(t.code)}</span><span class="mega-type-code">${t.code}</span></button>`).join('')}
      </div>
    </div>`).join('') + '</div>';
}

function goToType(code) { openTypePage(code); }

function goToTypeDetailFromResult() {
  if (lastResult && lastResult.type) {
    openTypePage(lastResult.type);
  }
}

const likertVals = [
  [3, 'w-10 h-10 sm:w-12 sm:h-12', 'agree'], [2, 'w-8 h-8 sm:w-10 sm:h-10', 'agree'], [1, 'w-7 h-7 sm:w-8 sm:h-8', 'agree'],
  [0, 'w-6 h-6 sm:w-7 sm:h-7', 'neu'],
  [-1, 'w-7 h-7 sm:w-8 sm:h-8', 'dis'], [-2, 'w-8 h-8 sm:w-10 sm:h-10', 'dis'], [-3, 'w-10 h-10 sm:w-12 sm:h-12', 'dis'],
];
const likertStyle = { agree: 'border-teal-400 bg-teal-50/60', neu: 'border-slate-300 bg-slate-100/60', dis: 'border-rose-400 bg-rose-50/60' };
const firstUnanswered = () => { for (let i = 0; i < questions.length; i++) if (userAnswers[i] === undefined) return i; return -1; };
let hoverIdx = null;
const cardClass = (i, focus) => 'question-card glass-bubble p-6 sm:p-8 space-y-6 text-center border border-white ' + (i === focus ? 'question-focus' : 'question-blur');

function renderQuestions() {
  const list = $('questions-list');
  if (!list) return;
  const focus = firstUnanswered(); focusedIdx = focus;
  list.innerHTML = questions.map((q, idx) => `
    <div id="question-card-${idx}" class="${cardClass(idx, focus)}">
      <div class="text-xs font-bold text-teal-600 tracking-wider">${T('q_label')} ${idx + 1}</div>
      <h3 class="text-lg sm:text-xl font-bold text-slate-800 leading-snug">${pick(q.text)}</h3>
      <div class="flex items-center justify-center gap-2 sm:gap-4 py-2">
        <span class="text-xs font-bold text-teal-700">${T('agree')}</span>
        <div class="flex items-center gap-1.5 sm:gap-3">
          ${likertVals.map(([v, size, kind]) => `<button onclick="selectOption(${idx}, ${v})" class="likert-btn ${size} rounded-full border-2 ${likertStyle[kind]} ${userAnswers[idx] === v ? 'sel sel-' + kind : ''}" title="${T('o' + (v < 0 ? '_' + -v : v))}"></button>`).join('')}
        </div>
        <span class="text-xs font-bold text-rose-600">${T('disagree')}</span>
      </div>
    </div>`).join('');
}

function startQuiz() {
  userAnswers = {}; lastResult = null;
  renderQuestions(); applyFocus(); navigateTo('quiz'); updateQuizProgress();
  const footerForm = $('quiz-footer-form');
  if (footerForm) footerForm.classList.add('hidden');
}

function selectOption(qIdx, val) {
  userAnswers[qIdx] = val; hoverIdx = null;
  renderQuestions(); applyFocus(); updateQuizProgress();
  const next = firstUnanswered();
  if (next !== -1) {
    setTimeout(() => { const c = $('question-card-' + next); if (c) c.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 200);
  } else {
    const f = $('quiz-footer-form');
    if (f) {
      f.classList.remove('hidden');
      setTimeout(() => f.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
    }
  }
}

function updateQuizProgress() {
  const total = questions.length, done = Object.keys(userAnswers).length;
  const pct = Math.round((done / total) * 100);
  const pt = $('quiz-progress-text'); if (pt) pt.textContent = T('q_progress').replace('{n}', Math.min(done + 1, total)).replace('{t}', total);
  const pp = $('quiz-progress-percent'); if (pp) pp.textContent = pct + '%';
  const pb = $('quiz-progress-bar'); if (pb) pb.style.width = pct + '%';
}

function calculateResults() {
  const s = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0, Assertive: 0, Turbulent: 0 };
  questions.forEach((q, i) => {
    const v = userAnswers[i]; if (!v) return;
    if (v > 0) s[q.trait] += v; else s[opposite[q.trait]] += -v;
  });
  const type = (s.E >= s.I ? 'E' : 'I') + (s.S >= s.N ? 'S' : 'N') + (s.T >= s.F ? 'T' : 'F') + (s.J >= s.P ? 'J' : 'P');
  lastResult = { type, idL: s.Assertive >= s.Turbulent ? 'A' : 'T', s };
  renderResult(); navigateTo('result');
  autoSaveLastResult();
}

async function autoSaveLastResult() {
  const r = lastResult; if (!r || r.saved || r.saving || !currentUser) return renderSaveStatus();
  r.saving = true; renderSaveStatus();
  try { await addResult(r.type, r.idL, r.s); r.saved = true; } catch (e) { r.saveFail = true; }
  r.saving = false; renderSaveStatus();
}

function renderSaveStatus() {
  const el = $('save-status'); if (!el || !lastResult) return;
  const r = lastResult; let h = '';
  if (r.fromHistory) { el.innerHTML = `<p class="text-slate-500"><i class="fa-regular fa-calendar"></i> ${T('taken_on')} ${fmtDate(r.ts)} · ${fmtTime(r.ts)}</p><p><button onclick="renderHistory(); navigateTo('history')" class="underline text-teal-700"><i class="fa-solid fa-arrow-left"></i> ${T('back_hist')}</button></p>`; return; }
  if (currentUser && r.saved) h = `<p class="text-teal-700"><i class="fa-solid fa-circle-check"></i> ${T('save_auto')} <button onclick="renderHistory(); navigateTo('history')" class="underline">${T('save_view')}</button></p>`;
  else if (currentUser && r.saveFail) h = `<p class="text-rose-600">${T('save_fail')}</p>`;
  else if (currentUser) h = `<p class="text-slate-500">${T('save_ing')}</p>`;
  else h = `<p class="text-slate-600">${T('save_login')} <button onclick="openAuthModal()" class="underline text-teal-700">${T('a_login_b')}</button></p>`;
  el.innerHTML = h;
}

const shareLabels = {
  share_btn: ['Download Hasil', 'Download Result', 'تنزيل النتيجة', '下载结果'],
  share_text: ['Hasil MBTI aku: {t}. Cek tipe kepribadianmu di', 'My MBTI result: {t}. Find your type at', 'نتيجتي في MBTI: {t}. اكتشف نمطك على', '我的MBTI结果：{t}。来测测你的类型：'],
  share_saved: ['Gambar tersimpan & link disalin.', 'Image saved & link copied.', 'تم حفظ الصورة ونسخ الرابط.', '图片已保存，链接已复制。']
};
function SL(k) { return shareLabels[k][LANGS.indexOf(currentLang)] || shareLabels[k][0]; }

function shareLoadImg(src) {
  return new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
}

async function buildShareCanvas(useVideo = true, useImg = true) {
  const { type, idL, s } = lastResult;
  const base = type.substring(0, 4);
  const W = 1080, H = 1920, c = document.createElement('canvas');
  c.width = W; c.height = H;
  const x = c.getContext('2d');
  const hex = (typeInfo[base] && typeInfo[base].hex) || '#2f8fbf';

  const bg = x.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#e0f2fe'); bg.addColorStop(0.5, '#c7d2fe'); bg.addColorStop(1, '#ccfbf1');
  x.fillStyle = bg; x.fillRect(0, 0, W, H);

  if (useVideo) {
    try {
      const v = document.querySelector('video');
      if (v && v.readyState >= 2 && v.videoWidth && 'filter' in x) {
        const k = Math.max(W / v.videoWidth, H / v.videoHeight) * 1.15;
        const vw = v.videoWidth * k, vh = v.videoHeight * k;
        x.save(); x.filter = 'blur(30px)'; x.drawImage(v, (W - vw) / 2, (H - vh) / 2, vw, vh); x.restore();
      }
    } catch (e) {}
  }

  const card = (px, py, w, h, r) => {
    x.beginPath(); x.moveTo(px + r, py); x.arcTo(px + w, py, px + w, py + h, r); x.arcTo(px + w, py + h, px, py + h, r);
    x.arcTo(px, py + h, px, py, r); x.arcTo(px, py, px + w, py, r); x.closePath();
  };

  x.save(); x.shadowColor = 'rgba(30,41,59,.18)'; x.shadowBlur = 50; x.shadowOffsetY = 20;
  x.fillStyle = 'rgba(255,255,255,.62)'; card(80, 180, 920, 1560, 60); x.fill(); x.restore();
  x.strokeStyle = 'rgba(255,255,255,.9)'; x.lineWidth = 4; card(80, 180, 920, 1560, 60); x.stroke();

  x.textAlign = 'center';
  x.font = '700 36px "Plus Jakarta Sans", sans-serif'; x.fillStyle = '#475569';
  x.fillText(T('result_badge').toUpperCase(), W / 2, 280);

  x.font = '800 130px "Plus Jakarta Sans", sans-serif'; x.fillStyle = hex;
  x.fillText(`${base}-${idL}`, W / 2, 420);
  x.font = '700 56px "Plus Jakarta Sans", sans-serif'; x.fillStyle = '#1e293b';
  x.fillText(typeTitle(type), W / 2, 500);

  const img = !useImg ? null : await shareLoadImg($('result-mbti-image').currentSrc || $('result-mbti-image').src);
  if (img) {
    const maxW = 360, maxH = 360, k = Math.min(maxW / img.width, maxH / img.height);
    const w = img.width * k, h = img.height * k;
    x.drawImage(img, (W - w) / 2, 540, w, h);
  }

  x.font = '500 32px "Plus Jakarta Sans", sans-serif'; x.fillStyle = '#475569';
  const words = typeDesc(type).split(' '); let line = '', y = 940;
  words.forEach((wd) => {
    const t = line + wd + ' ';
    if (x.measureText(t).width > 780 && line) { x.fillText(line.trim(), W / 2, y); line = wd + ' '; y += 46; } else line = t;
  });
  if (line) x.fillText(line.trim(), W / 2, y);

  if (s) {
    let sy = 1080;
    const traits = [
      ['Energy', s.E, s.I, 'p_E', 'p_I', traitHex.Energy],
      ['Mind', s.N, s.S, 'p_N', 'p_S', traitHex.Mind],
      ['Nature', s.T, s.F, 'p_T', 'p_F', traitHex.Nature],
      ['Tactics', s.J, s.P, 'p_J', 'p_P', traitHex.Tactics],
      ['Identity', s.Assertive, s.Turbulent, 'p_A', 'p_Tb', traitHex.Identity]
    ];

    traits.forEach(([name, valA, valB, lblA, lblB, color]) => {
      const tot = valA + valB || 1;
      const pa = Math.round((valA / tot) * 100);
      const left = pa >= 50;
      const displayPct = left ? pa : 100 - pa;
      const displayLbl = T(left ? lblA : lblB);

      x.textAlign = 'left';
      x.font = '700 28px "Plus Jakarta Sans", sans-serif'; x.fillStyle = '#334155';
      x.fillText(`${T(name)}: ${displayPct}% ${displayLbl}`, 140, sy);

      x.fillStyle = 'rgba(226,232,240,.8)';
      card(140, sy + 12, 800, 20, 10); x.fill();

      x.fillStyle = color;
      card(140, sy + 12, (pa / 100) * 800, 20, 10); x.fill();

      x.font = '600 24px "Plus Jakarta Sans", sans-serif'; x.fillStyle = '#64748b';
      x.fillText(T(lblA), 140, sy + 62);
      x.textAlign = 'right';
      x.fillText(T(lblB), 940, sy + 62);

      sy += 105;
    });
  }

  x.textAlign = 'center';
  x.font = '800 36px "Plus Jakarta Sans", sans-serif'; x.fillStyle = '#0f766e';
  x.fillText('16 Personalities', W / 2, 1660);

  return c;
}

function shareMessage() {
  const t = `${lastResult.type.substring(0, 4)}-${lastResult.idL} ${typeTitle(lastResult.type)}`;
  return `${SL('share_text').replace('{t}', t)} ${getSiteUrl()}`;
}

async function downloadResult() {
  if (!lastResult) return;
  let blob = null;
  const toBlob = async (v, im) => { const c = await buildShareCanvas(v, im); return new Promise((r) => c.toBlob(r, 'image/png')); };
  try { blob = await toBlob(true, true); } catch (e) {
    try { blob = await toBlob(false, true); } catch (e2) {
      try { blob = await toBlob(false, false); } catch (e3) { blob = null; }
    }
  }
  if (!blob) { alert(sT('Gagal membuat gambar. Coba buka web lewat hosting/localhost, bukan langsung dari file.', 'Could not create the image. Try opening the site via hosting/localhost instead of a local file.')); return; }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `hasil-mbti-${lastResult.type.substring(0, 4)}-${lastResult.idL}.png`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

function renderResult() {
  const { type, idL, s } = lastResult;
  $('result-mbti-type').textContent = `${type}-${idL}`;
  $('result-mbti-title').textContent = typeTitle(type);
  $('result-mbti-desc').textContent = typeDesc(type);
  
  const baseType = type.substring(0, 4);

  const imgElement = $('result-mbti-image');
  if (imgElement) {
    const exts = ['jpeg', 'jpg'];
    let extIdx = 0;
    imgElement.onerror = () => {
      extIdx++;
      if (extIdx < exts.length) imgElement.src = `${baseType}.${exts[extIdx]}`;
      else imgElement.onerror = null;
    };
    imgElement.src = `${baseType}.${exts[0]}`;
    imgElement.alt = `Avatar ${baseType}`;
  }

  const idi = identityInfo[idL];
  $('result-identity-desc').textContent = `${T('variant')} -${idL} (${T(idL === 'A' ? 'p_A' : 'p_Tb')}): ${pick(idi.desc)}`;
  
  const shareLbl = $('share-btn-label'); if (shareLbl) shareLbl.textContent = SL('share_btn');
  const clickDetailEl = $('result-click-detail-text');
  if (clickDetailEl) clickDetailEl.textContent = T('res_click_detail');

  const row = (title, a, b, la, lb, col) => {
    const tot = a + b || 1, pa = Math.round((a / tot) * 100), left = pa >= 50;
    return `<div class="space-y-1 text-xs font-semibold text-slate-600">
      <p>${T(title)}: <strong style="color:${col}">${left ? pa : 100 - pa}% ${T(left ? la : lb)}</strong></p>
      <div class="w-full h-2 bg-slate-200/60 rounded-full overflow-hidden"><div class="h-full rounded-full" style="width:${pa}%;background:${col}"></div></div>
      <div class="flex justify-between text-[11px] text-slate-500"><span>${T(la)}</span><span>${T(lb)}</span></div></div>`;
  };
  $('result-traits-breakdown').innerHTML = !s ? `<p class="text-xs text-slate-500 italic text-center">${T('no_scores')}</p>` :
    row('Energy', s.E, s.I, 'p_E', 'p_I', traitHex.Energy) + row('Mind', s.N, s.S, 'p_N', 'p_S', traitHex.Mind) +
    row('Nature', s.T, s.F, 'p_T', 'p_F', traitHex.Nature) + row('Tactics', s.J, s.P, 'p_J', 'p_P', traitHex.Tactics) +
    row('Identity', s.Assertive, s.Turbulent, 'p_A', 'p_Tb', traitHex.Identity);
  renderSaveStatus();
}

function renderAuthUI() {
  const container = $('auth-buttons-container');
  if (!container) return;
  container.innerHTML = currentUser
    ? `<button onclick="renderHistory();navigateTo('history')" class="glass-button pl-1.5 pr-4 py-1.5 rounded-full text-xs font-bold text-slate-700 flex items-center gap-2 border border-white"><span class="w-7 h-7 rounded-full overflow-hidden bg-white/80 border border-white flex items-center justify-center text-teal-600 text-xs shrink-0">${currentUser.photo ? `<img src="${currentUser.photo}" alt="" class="w-full h-full object-cover">` : '<i class="fa-solid fa-user-astronaut"></i>'}</span><span>${String(currentUser.name).replace(/[<>&"'`]/g, '')}</span><i class="fa-solid fa-clock-rotate-left text-teal-600"></i></button>`
    : `<button onclick="openAuthModal()" class="glass-button px-4 py-2 rounded-full text-xs font-bold text-teal-800 border border-teal-200">${T('a_login_reg')}</button>`;
}

function updateAuthText() {
  const gb = $('google-block'); 
  if (gb) { 
    gb.classList.toggle('hidden', !FB_ON);
    const glabel = $('google-label'); if (glabel) glabel.textContent = T('a_google'); 
    const gor = $('google-or'); if (gor) gor.textContent = T('a_or'); 
  }
  const amt = $('auth-modal-title'); if (amt) amt.textContent = T(authIsRegistering ? 'a_reg_t' : 'a_login_t');
  const abl = $('auth-btn-label'); if (abl) abl.textContent = T(authIsRegistering ? 'a_reg_b' : 'a_login_b');
  const atb = $('auth-toggle-btn'); if (atb) atb.textContent = T(authIsRegistering ? 'a_to_login' : 'a_to_reg');
}

function openAuthModal() { updateAuthText(); $('auth-error').classList.add('hidden');
  const hint = $('auth-hint'); if (hint) { if (saveIntent) { hint.textContent = T('save_need_login'); hint.classList.remove('hidden'); } else hint.classList.add('hidden'); }
  $('modal-auth').classList.remove('hidden'); setTimeout(() =>$('auth-email-input').focus(), 50); }
function closeAuthModal() { $('modal-auth').classList.add('hidden'); saveIntent = false; }

async function afterLogin(wanted) {
  await autoSaveLastResult();
  if (wanted && lastResult && lastResult.saved) { renderHistory(); navigateTo('history'); }
}
function toggleAuthMode() {
  authIsRegistering = !authIsRegistering;
  $('auth-name-field').classList.toggle('hidden', !authIsRegistering);
  $('auth-pass2-field').classList.toggle('hidden', !authIsRegistering);
  $('auth-pass-input').autocomplete = authIsRegistering ? 'new-password' : 'current-password';
  $('auth-error').classList.add('hidden'); updateAuthText();
}
function togglePass() { const i = $('auth-pass-input'), s = i.type === 'password'; i.type = s ? 'text' : 'password'; $('auth-pass2-input').type = i.type; $('pass-eye').className = s ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'; }

const FB_ON = !!(window.firebase && window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey && !/^(ISI|YOUR)/i.test(window.FIREBASE_CONFIG.apiKey));
let fbAuth, fbDb;
if (FB_ON) { firebase.initializeApp(window.FIREBASE_CONFIG); fbAuth = firebase.auth(); fbDb = firebase.firestore(); }
const resCol = (uid) => fbDb.collection('users').doc(uid).collection('results');
async function fbSync(u, name) {
  const snap = await resCol(u.uid).orderBy('ts', 'desc').get();
  let prof = {};
  try { const pd = await fbDb.collection('users').doc(u.uid).get(); if (pd.exists) prof = pd.data(); } catch (e) {}
  currentUser = { uid: u.uid, email: u.email, name: prof.name || name || u.displayName || u.email.split('@')[0], photo: prof.photo || '', photoFull: prof.photoFull || '',
    history: snap.docs.map((d) => ({ id: d.id, type: d.data().type, variant: d.data().variant, s: d.data().scores || null, ts: d.data().ts.toDate().toISOString() })) };
  renderAuthUI(); renderHistory();
}
function initSession() {
  if (FB_ON) { fbAuth.onAuthStateChanged((u) => { if (!u) { currentUser = null; renderAuthUI(); } else if (!currentUser || currentUser.uid !== u.uid) fbSync(u).catch(() => {}); }); }
  else { loadSession(); }
}
const getUsers = () => { try { return JSON.parse(localStorage.getItem('mbti_users')) || {}; } catch (e) { return {}; } };
const setUsers = (u) => { try { localStorage.setItem('mbti_users', JSON.stringify(u)); } catch (e) {} };
async function hashPass(p, salt) {
  const data = new TextEncoder().encode(salt + ':' + p);
  if (window.crypto && crypto.subtle) { const h = await crypto.subtle.digest('SHA-256', data); return [...new Uint8Array(h)].map((x) => x.toString(16).padStart(2, '0')).join(''); }
  let h = 5381; for (const c of data) h = ((h << 5) + h + c) >>> 0; return String(h);
}
function loadSession() { const em = localStorage.getItem('mbti_session'); currentUser = (em && getUsers()[em]) || null; }
function authError(k) { const e = $('auth-error'); e.textContent = T(k); e.classList.remove('hidden'); }
const FB_ERR = { 'auth/email-already-in-use': 'e_exists', 'auth/invalid-credential': 'e_wrong', 'auth/wrong-password': 'e_wrong', 'auth/user-not-found': 'e_wrong', 'auth/weak-password': 'e_pass_len', 'auth/invalid-email': 'e_email', 'auth/network-request-failed': 'e_net', 'auth/too-many-requests': 'e_many' };

async function googleSignIn() {
  if (!FB_ON) return authError('e_net');
  try {
    const cred = await fbAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    await fbSync(cred.user);
    const wanted = saveIntent; closeAuthModal();
    afterLogin(wanted);
  } catch (err) {
    if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') return;
    if (FB_ERR[err.code]) return authError(FB_ERR[err.code]);
    const e = $('auth-error'); e.textContent = 'Login Google gagal: ' + (err.code || err.message); e.classList.add('hidden');
  }
}

async function handleAuthSubmit(e) {
  e.preventDefault();
  const form = e.target, btn = form.querySelector('button[type=submit]');
  const email = $('auth-email-input').value.trim().toLowerCase(), pass = $('auth-pass-input').value, name =$('auth-name-input').value.trim();
  if (!email || !pass || (authIsRegistering && !name)) return authError('e_fill');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return authError('e_email');
  if (authIsRegistering) {
    if (pass.length < 8) return authError('e_pass_len');
    if (pass !== $('auth-pass2-input').value) return authError('e_pass_match');
  }
  btn.disabled = true;
  try {
    if (FB_ON) {
      let cred;
      if (authIsRegistering) { cred = await fbAuth.createUserWithEmailAndPassword(email, pass); await cred.user.updateProfile({ displayName: name }); }
      else cred = await fbAuth.signInWithEmailAndPassword(email, pass);
      await fbSync(cred.user, authIsRegistering ? name : null);
    } else {
      const users = getUsers();
      if (authIsRegistering) {
        if (users[email]) return authError('e_exists');
        const salt = Math.random().toString(36).slice(2);
        users[email] = { name, email, salt, hash: await hashPass(pass, salt), history: [] }; setUsers(users);
      } else {
        const u = users[email];
        if (!u || (await hashPass(pass, u.salt)) !== u.hash) return authError('e_wrong');
      }
      localStorage.setItem('mbti_session', email); loadSession();
    }
  } catch (err) { return authError(FB_ERR[err.code] || 'e_net'); }
  finally { btn.disabled = false; }
  form.reset(); renderAuthUI();
  const wanted = saveIntent; closeAuthModal();
  afterLogin(wanted);
}

async function logoutUser() {
  if (FB_ON) await fbAuth.signOut(); else localStorage.removeItem('mbti_session');
  currentUser = null; if (lastResult && lastResult.fromHistory) lastResult = null; else if (lastResult) { lastResult.saved = false; lastResult.saveFail = false; } renderAuthUI(); navigateTo('home');
}

async function addResult(type, variant, scores) {
  const item = { type, variant, ts: new Date().toISOString(), s: scores || null };
  if (FB_ON) { const doc = { type, variant, ts: firebase.firestore.Timestamp.now() }; if (scores) doc.scores = scores; const r = await resCol(currentUser.uid).add(doc); item.id = r.id; }
  else { item.id = String(Date.now()); const users = getUsers(); users[currentUser.email].history.unshift(item); setUsers(users); loadSession(); return; }
  currentUser.history.unshift(item);
}

async function saveResultToProfile() {
  if (!lastResult) return;
  if (!currentUser) { saveIntent = true; openAuthModal(); return; }
  if (!lastResult.saved) { try { await addResult(lastResult.type, lastResult.idL, lastResult.s); lastResult.saved = true; } catch (e) { alert(T('e_net')); return; } }
  renderHistory(); navigateTo('history');
}

async function deleteHistory(id) {
  try {
    if (FB_ON) { await resCol(currentUser.uid).doc(id).delete(); currentUser.history = currentUser.history.filter((h) => h.id !== id); }
    else { const users = getUsers(), u = users[currentUser.email]; u.history = u.history.filter((h) => h.id !== id); setUsers(users); loadSession(); }
  } catch (e) { alert(T('e_net')); return; }
  renderHistory();
}

const LOCALES = { id: 'id-ID', en: 'en-GB', ar: 'ar-SA-u-nu-latn', zh: 'zh-CN' };
const fmtDate = (iso) => new Date(iso).toLocaleDateString(LOCALES[currentLang], { day: 'numeric', month: 'long', year: 'numeric' });
const fmtTime = (iso) => new Date(iso).toLocaleTimeString(LOCALES[currentLang], { hour: '2-digit', minute: '2-digit' });

function renderProfileHeader() {
  const av = document.getElementById('profile-avatar');
  if (av) av.innerHTML = currentUser.photo
    ? `<img src="${currentUser.photo}" alt="" class="w-full h-full object-cover">`
    : '<i class="fa-solid fa-user-astronaut"></i>';
  if (av) { av.onclick = currentUser.photo ? openPhotoViewer : null; av.classList.toggle('cursor-zoom-in', !!currentUser.photo); }
  const rm = document.getElementById('profile-photo-remove');
  if (rm) rm.classList.toggle('hidden', !currentUser.photo);
}

async function saveProfileData(patch) {
  if (FB_ON) {
    await fbDb.collection('users').doc(currentUser.uid).set(patch, { merge: true });
    if (patch.name !== undefined && fbAuth.currentUser) await fbAuth.currentUser.updateProfile({ displayName: patch.name });
  } else {
    const users = getUsers(), u = users[currentUser.email];
    Object.assign(u, patch); setUsers(users); loadSession();
  }
  Object.assign(currentUser, patch);
  renderAuthUI(); renderHistory();
}

function startEditName() {
  const inp = document.getElementById('profile-name-input');
  inp.value = currentUser.name;
  document.getElementById('profile-name-edit').classList.remove('hidden');
  inp.focus();
}
function cancelEditName() { document.getElementById('profile-name-edit').classList.add('hidden'); }

async function saveProfileName() {
  const name = document.getElementById('profile-name-input').value.replace(/[<>&"'`]/g, '').trim().slice(0, 40);
  if (!name) return alert(T('p_name_empty'));
  try { await saveProfileData({ name }); cancelEditName(); } catch (e) { alert(T('e_net')); }
}

// ---------- Foto profil: atur posisi/zoom sebelum disimpan ----------
const CROP = { V: 240, img: null, url: null, z: 1, x: 0, y: 0, drag: null };

function cropGeom() {
  const base = Math.min(CROP.V / CROP.img.width, CROP.V / CROP.img.height), sc = base * CROP.z;
  return { base, sc, w: CROP.img.width * sc, h: CROP.img.height * sc };
}
function cropClamp() {
  const g = cropGeom(), V = CROP.V;
  CROP.x = g.w >= V ? Math.min(0, Math.max(V - g.w, CROP.x)) : (V - g.w) / 2;
  CROP.y = g.h >= V ? Math.min(0, Math.max(V - g.h, CROP.y)) : (V - g.h) / 2;
}
function cropDraw(canvas, size) {
  const k = size / CROP.V, g = cropGeom(), ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, size, size);
  ctx.drawImage(CROP.img, CROP.x * k, CROP.y * k, g.w * k, g.h * k);
}
function cropRender() { cropClamp(); cropDraw(document.getElementById('photo-crop-canvas'), CROP.V); }

function cropSetZoom(z) {
  const V = CROP.V, old = cropGeom();
  const cx = (V / 2 - CROP.x) / old.sc, cy = (V / 2 - CROP.y) / old.sc;
  CROP.z = z;
  const g = cropGeom();
  CROP.x = V / 2 - cx * g.sc; CROP.y = V / 2 - cy * g.sc;
  cropRender();
}

function onProfilePhoto(input) {
  const f = input.files && input.files[0]; input.value = '';
  if (!f || !f.type.startsWith('image/')) return;
  const url = URL.createObjectURL(f), img = new Image();
  img.onload = () => {
    CROP.img = img; CROP.url = url;
    const base = Math.min(CROP.V / img.width, CROP.V / img.height);
    const cover = Math.max(CROP.V / img.width, CROP.V / img.height) / base;   // awal: foto memenuhi lingkaran
    CROP.z = cover;
    const g = cropGeom(); CROP.x = (CROP.V - g.w) / 2; CROP.y = (CROP.V - g.h) / 2;
    const sl = document.getElementById('photo-zoom');
    sl.min = 1; sl.max = Math.max(5, cover * 3).toFixed(2); sl.value = cover;
    document.getElementById('photo-crop-modal').classList.remove('hidden');
    cropRender();
  };
  img.onerror = () => { URL.revokeObjectURL(url); alert(T('e_net')); };
  img.src = url;
}

function initPhotoCrop() {
  const cv = document.getElementById('photo-crop-canvas'); if (!cv) return;
  cv.addEventListener('pointerdown', (e) => { CROP.drag = { px: e.clientX, py: e.clientY, x: CROP.x, y: CROP.y }; cv.setPointerCapture(e.pointerId); cv.classList.add('cursor-grabbing'); });
  cv.addEventListener('pointermove', (e) => { if (!CROP.drag) return; CROP.x = CROP.drag.x + (e.clientX - CROP.drag.px); CROP.y = CROP.drag.y + (e.clientY - CROP.drag.py); cropRender(); });
  const end = () => { CROP.drag = null; cv.classList.remove('cursor-grabbing'); };
  cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end);
  cv.addEventListener('wheel', (e) => {
    e.preventDefault();
    const sl = document.getElementById('photo-zoom');
    const z = Math.min(+sl.max, Math.max(+sl.min, CROP.z * (e.deltaY < 0 ? 1.08 : 1 / 1.08)));
    sl.value = z; cropSetZoom(z);
  }, { passive: false });
  document.getElementById('photo-zoom').addEventListener('input', (e) => cropSetZoom(+e.target.value));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closePhotoCrop(); closePhotoViewer(); } });
}
initPhotoCrop();

function closePhotoCrop() {
  const m = document.getElementById('photo-crop-modal'); if (m) m.classList.add('hidden');
  if (CROP.url) { URL.revokeObjectURL(CROP.url); CROP.url = null; }
  CROP.img = null;
}

async function confirmPhotoCrop() {
  if (!CROP.img) return;
  const av = document.createElement('canvas'); av.width = av.height = 200; cropDraw(av, 200);
  const photo = av.toDataURL('image/jpeg', 0.88);
  const img = CROP.img, m = Math.min(1, 800 / Math.max(img.width, img.height));
  const fc = document.createElement('canvas'); fc.width = Math.round(img.width * m); fc.height = Math.round(img.height * m);
  const fx = fc.getContext('2d'); fx.fillStyle = '#fff'; fx.fillRect(0, 0, fc.width, fc.height); fx.drawImage(img, 0, 0, fc.width, fc.height);
  const photoFull = fc.toDataURL('image/jpeg', 0.8);
  closePhotoCrop();
  try { await saveProfileData({ photo, photoFull }); } catch (e) { alert(T('e_net')); }
}

function openPhotoViewer() {
  if (!currentUser || !currentUser.photo) return;
  document.getElementById('photo-viewer-img').src = currentUser.photoFull || currentUser.photo;
  document.getElementById('photo-viewer').classList.remove('hidden');
}
function closePhotoViewer() { const v = document.getElementById('photo-viewer'); if (v) v.classList.add('hidden'); }

async function removeProfilePhoto() {
  try { await saveProfileData({ photo: '', photoFull: '' }); } catch (e) { alert(T('e_net')); }
}

function renderHistory() {
  if (!currentUser) return;
  const pun = $('profile-user-name'); if (pun) pun.textContent = T('hello') + ', ' + currentUser.name;
  const pue = $('profile-user-email'); if (pue) pue.textContent = currentUser.email;
  renderProfileHeader();
  const h = currentUser.history || [];
  const hlist = $('history-list-container');
  if (hlist) {
    hlist.innerHTML = h.length ? h.map((it, i) => {
      const info = typeInfo[it.type];
      return `<div class="glass-bubble p-4 flex items-center justify-between gap-3 border border-white">
        <div class="flex items-center gap-4 flex-1 cursor-pointer" onclick="openHistoryResult(${i})"><div class="px-3 h-12 rounded-2xl text-white font-black text-sm flex items-center justify-center" style="background:${info.hex}">${it.type}-${it.variant}</div>
          <div><h4 class="font-bold text-sm text-slate-800">${typeTitle(it.type)}</h4><p class="text-xs text-slate-500"><i class="fa-regular fa-calendar"></i> ${fmtDate(it.ts)} &nbsp;<i class="fa-regular fa-clock"></i> ${fmtTime(it.ts)}</p></div></div>
        <div class="flex items-center gap-2"><span class="text-xs font-bold text-teal-600 bg-teal-100/60 px-3 py-1 rounded-full">${T('test_no')}${h.length - i}</span>
        <i class="fa-solid fa-chevron-right text-slate-300 text-xs"></i>
        <button onclick="event.stopPropagation(); deleteHistory('${it.id}')" title="${T('del_h')}" class="text-slate-400 hover:text-rose-500"><i class="fa-regular fa-trash-can"></i></button></div></div>`;
    }).join('') : `<p class="text-sm text-slate-500 italic">${T('no_hist')}</p>`;
  }
}

function openHistoryResult(i) {
  const it = (currentUser && currentUser.history || [])[i]; if (!it) return;
  lastResult = { type: it.type, idL: it.variant, s: it.s || null, fromHistory: true, ts: it.ts, saved: true };
  renderResult(); navigateTo('result');
}

const groupImages = ['analis.png', 'diplomat.png', 'pengawas.png', 'penjelajah.png'];

function renderMBTICards() {
  const grid = $('mbti-cards-grid');
  if (!grid) return;
  const groupIcons = ['fa-lightbulb', 'fa-heart', 'fa-shield-halved', 'fa-compass'];
  grid.innerHTML = typeGroups.map((g, gi) => {
    const hex = groupHex[gi];
    return `<section class="type-group">
      <div class="glass-bubble p-5 sm:p-6 rounded-3xl border border-white/90 shadow-lg mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-inner border border-white" style="background:${hex}22;color:${hex}">
          <i class="fa-solid ${groupIcons[gi]}"></i>
        </div>
        <div class="min-w-0">
          <h2 class="text-xl sm:text-2xl font-extrabold text-slate-800 leading-tight">${pick(g.name)}</h2>
          <p class="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">${pick(g.desc)}</p>
        </div>
        <img src="${groupImages[gi]}" alt="${g.name.id}" class="h-24 sm:h-28 w-auto object-contain sm:ml-auto self-center shrink-0 drop-shadow-lg" onerror="this.style.display='none'">
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      ${g.types.map((t) => `
        <div id="type-card-${t.code}" class="type-card bg-white/90 backdrop-blur-md p-3 sm:p-5 rounded-2xl border-2 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col" onclick="openTypeModal('${t.code}')" data-search="${(t.code + ' ' + typeTitle(t.code) + ' ' + typeDesc(t.code)).toLowerCase()}" style="border-color:${hex}33;--hex:${hex}" onmouseenter="this.style.borderColor='${hex}'" onmouseleave="this.style.borderColor='${hex}33'">
          <div class="flex justify-between items-start mb-2 sm:mb-3">
            <span class="text-xl sm:text-2xl font-black tracking-wider" style="color:${hex}">${t.code}</span>
            <span class="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold" style="background:${hex}22;color:${hex}">${pick(g.name)}</span>
          </div>
          <h3 class="font-bold text-slate-900 text-sm sm:text-base mb-1 leading-snug">${typeTitle(t.code)}</h3>
          <p class="text-[11px] sm:text-xs text-slate-600 line-clamp-3 sm:line-clamp-2">${typeDesc(t.code)}</p>
          <div class="mt-auto pt-3 sm:pt-4 flex items-center justify-between text-[11px] sm:text-xs font-semibold" style="color:${hex}">
            <span>${T('view_profile')}</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>`).join('')}
      </div></section>`;
  }).join('');
  if (typeof filterTypes === 'function') filterTypes();
}

function toggleSettingsModal() { $('modal-settings').classList.toggle('hidden'); }
function openContactModal() { $('modal-contact').classList.remove('hidden'); }
function closeContactModal() { $('modal-contact').classList.add('hidden'); }
function handleContactSubmit(e) { e.preventDefault(); closeContactModal(); alert(T('c_ok')); }

const secLabels = [
  ['Perkenalan', 'Introduction', 'مقدمة', '简介'],
  ['Kekuatan & Kelemahan', 'Strengths & Weaknesses', 'نقاط القوة والضعف', '优势与劣势'],
  ['Hubungan Romantis', 'Romantic Relationships', 'العلاقات العاطفية', '浪漫关系'],
  ['Persahabatan', 'Friendships', 'الصداقات', '友谊'],
  ['Menjadi Orang Tua', 'Parenthood', 'الأبوة والأمومة', '为人父母'],
  ['Jalur Karier', 'Career Paths', 'المسارات المهنية', '职业道路'],
  ['Kebiasaan di Tempat Kerja', 'Workplace Habits', 'عادات مكان العمل', '职场习惯'],
  ['Kesimpulan', 'Conclusion', 'الخلاصة', '结论'],
];
const secLabel = (i) => secLabels[i][LANGS.indexOf(currentLang)] || secLabels[i][0];
const traitWords = {
  I: ['Introvert', 'Introverted', 'انطوائي', '内向'], E: ['Ekstrovert', 'Extraverted', 'انبساطي', '外向'],
  N: ['Intuitif', 'Intuitive', 'حدسي', '直觉'], S: ['Observan', 'Observant', 'ملاحِظ', '观察'],
  T: ['Berpikir', 'Thinking', 'مفكر', '思考'], F: ['Perasa', 'Feeling', 'عاطفي', '情感'],
  J: ['Menilai', 'Judging', 'حاكم', '判断'], P: ['Memandang', 'Prospecting', 'مستكشف', '感知'],
};
const tpText = {
  all: ['Semua tipe', 'All types', 'كل الأنواع', '所有类型'],
  prev: ['Sebelumnya', 'Previous', 'السابق', '上一页'],
  next: ['Berikutnya', 'Next', 'التالي', '下一页'],
  notice_en: ['Terjemahan untuk tipe ini sedang disiapkan. Sementara, artikelnya ditampilkan dalam bahasa Inggris.', 'Full article shown in English.', 'يُعرض المقال كاملاً باللغة الإنجليزية.', '文章内容暂以英文显示。'],
  empty: ['Bagian ini belum ada isinya.', 'This section has no content yet.', 'لا يوجد محتوى بعد.', '此部分暂无内容。'],
};
const tpT = (k) => tpText[k][LANGS.indexOf(currentLang)] || tpText[k][0];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let tpCode = null, tpSec = 0, tpDone = new Set();

function renderBlocks(blocks) {
  let html = '', ul = false;
  const closeUl = () => { if (ul) { html += '</ul>'; ul = false; } };
  blocks.forEach(([t, x], i) => {
    if (t === 'li') {
      if (!ul) { html += '<ul>'; ul = true; }
      const k = x.indexOf(' – ');
      html += k > 0 && k < 70 ? `<li><b>${esc(x.slice(0, k))}</b> – ${esc(x.slice(k + 3))}</li>` : `<li>${esc(x)}</li>`;
      return;
    }
    closeUl();
    if (t === 'h') html += `<h3 data-sub>${esc(x)}</h3>`;
    else if (t === 'q') {
      const a = blocks[i + 1] && blocks[i + 1][0] === 'qa' ? `<cite>— ${esc(blocks[i + 1][1])}</cite>` : '';
      html += `<blockquote class="tp-q">${esc(x)}${a}</blockquote>`;
    } else if (t === 'p') html += `<p>${esc(x)}</p>`;
  });
  closeUl();
  return html;
}

function renderTypePage() {
  const code = tpCode; if (!code) return;
  const i = typeInfo[code], g = typeGroups[i.gi], hex = i.hex;
  const chips = code.split('').map((c) => `<span class="tp-chip">${traitWords[c][LANGS.indexOf(currentLang)] || traitWords[c][1]}</span>`).join('');
  const thero = $('tp-hero');
  if (thero) {
    thero.innerHTML = `<div class="tp-hero" style="background:linear-gradient(135deg,${hex},${hex}cc)"><div class="tp-hero-in">
      <button class="tp-back" onclick="history.back()"><i class="fa-solid fa-arrow-left"></i> ${tpT('all')}</button>
      <div class="tp-chips">${chips}</div>
      <div class="text-xs font-bold opacity-90 mb-1">${pick(g.name)}</div>
      <h1 class="tp-code">${code}</h1><div class="tp-title">${typeTitle(code)}</div>
      <p class="tp-desc">${typeDesc(code)}</p></div>
      <div class="tp-hero-art">
        <span class="tp-bubble tp-b1"></span><span class="tp-bubble tp-b2"></span><span class="tp-bubble tp-b3"></span><span class="tp-bubble tp-b4"></span>
        <img class="tp-hero-char" src="${code}2.png" alt="${code}" onerror="this.parentNode.style.display='none'">
      </div></div>`;
  }
  const ttabs = $('tp-tabs');
  if (ttabs) ttabs.innerHTML = secLabels.map((_, n) => `<button class="tp-tab" role="tab" data-n="${n}" onclick="setTypeSection(${n})"><span class="n">${n + 1}</span><span class="lbl">${secLabel(n)}</span></button>`).join('');
  const tcont = $('tp-content');
  if (tcont) tcont.style.setProperty('--hex', hex);
  renderTypeSection(false);
}

function getTypeContent(code) {
  const hasID = typeof typeContentID !== 'undefined' && typeContentID && typeContentID[code];
  const hasEN = typeof typeContentEN !== 'undefined' && typeContentEN && typeContentEN[code];

  if (currentLang === 'id') {
    if (hasID) return { data: typeContentID[code], fallback: false };
    if (hasEN) return { data: typeContentEN[code], fallback: true };
  } else if (currentLang === 'en') {
    if (hasEN) return { data: typeContentEN[code], fallback: false };
    if (hasID) return { data: typeContentID[code], fallback: true };
  } else {
    if (hasEN) return { data: typeContentEN[code], fallback: true };
    if (hasID) return { data: typeContentID[code], fallback: true };
  }

  return { data: null, fallback: false };
}

function renderTypeSection(scroll) {
  const code = tpCode, tc = getTypeContent(code), blocks = (tc.data || [])[tpSec] || [];
  let html = blocks.length ? renderBlocks(blocks) : `<div class="tp-empty">${tpT('empty')}</div>`;
  if (tc.fallback && blocks.length) html = `<div class="tp-notice" style="background:rgba(254,243,199,.9);color:#92400e;border-radius:14px;padding:10px 14px;font-size:13px;line-height:1.5;margin-bottom:1.2em"><i class="fa-solid fa-circle-info"></i> ${tpT('notice_en')}</div>` + html;
  if (tpSec === 0) html += '<div class="tp-variants">' + ['A', 'T'].map((v) => `<div><b style="color:${typeInfo[code].hex}">${code}-${v} (${T(v === 'A' ? 'p_A' : 'p_Tb')})</b><br>${pick(identityInfo[v].desc)}</div>`).join('') + '</div>';
  const art = $('tp-content'); 
  if (art) {
    art.innerHTML = html; art.classList.remove('tp-fade'); void art.offsetWidth; art.classList.add('tp-fade');
  }
  const tpPager = $('tp-pager');
  if (tpPager) {
    tpPager.innerHTML =
      (tpSec > 0 ? `<button onclick="setTypeSection(${tpSec - 1})"><small>${tpT('prev')}</small><b>${secLabel(tpSec - 1)}</b></button>` : '<span></span>') +
      (tpSec < 7 ? `<button class="nx" onclick="setTypeSection(${tpSec + 1})"><small>${tpT('next')}</small><b>${secLabel(tpSec + 1)}</b></button>` : '');
  }
  document.querySelectorAll('.tp-tab').forEach((b) => {
    const n = +b.dataset.n;
    b.classList.toggle('active', n === tpSec); b.classList.remove('done');
    b.setAttribute('aria-selected', n === tpSec);
    b.querySelector('.lbl').style.setProperty('--p', '0%');
  });
  const act = document.querySelector('.tp-tab.active'); if (act) act.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  if (scroll) scrollTop0();
  updateTypeProgress();
  if (scroll) { setTimeout(updateTypeProgress, 350); setTimeout(updateTypeProgress, 700); }
}

function setTypeSection(n) { if (n === tpSec) return; tpSec = n; renderTypeSection(true); history.replaceState({ type: tpCode, sec: n, i: navIdx }, ''); }

function openTypePage(code, sec = 0, push = true) {
  tpCode = code; tpSec = sec; tpDone = new Set(); curView = 'type';
  document.querySelectorAll('main > section').forEach((s) => s.classList.add('hidden'));
  const typeView = $('view-type');
  if (typeView) {
    typeView.classList.remove('hidden');
  } else {
    navigateTo('types');
    return;
  }
  setNavActive('types');
  renderTypePage();
  scrollTop0();
  if (push && history.pushState) {
    try { history.pushState({ type: code, sec, i: ++navIdx }, ''); } catch(e){}
  }
}

function hdrH() { const h = document.querySelector('header'); return h ? h.offsetHeight : 64; }
function updateTypeProgress() {
  const tView = $('view-type');
  if (!tView || tView.classList.contains('hidden')) return;
  const art = $('tp-content'); if (!art) return;
  const r = art.getBoundingClientRect(), vh = window.innerHeight;
  const start = hdrH() + 60, total = r.height - (vh - start) + 120;
  let p = total <= 0 ? 1 : (start - r.top) / total;
  const atBottom = window.scrollY + vh >= document.documentElement.scrollHeight - 6;
  p = atBottom ? 1 : Math.min(1, Math.max(0, p));
  const act = document.querySelector('.tp-tab.active');
  if (act) { act.querySelector('.lbl').style.setProperty('--p', (p * 100).toFixed(1) + '%'); }
  const tFill = $('tp-bar-fill'); if (tFill) tFill.style.width = ((tpSec + p) / 8 * 100).toFixed(1) + '%';
}

function openTypeModal(code) { const si = $('type-search'); if (si) shAdd(si.value); hideSearchHistory(); openTypePage(code); }
function closeTypeModal() {}

function setNavActive(name) {
  ['home', 'types'].forEach((n) => {
    const b = $('nav-' + n); if (b) { b.classList.remove('text-teal-700', 'bg-white/50'); if (n === name) b.classList.add('text-teal-700', 'bg-white/50'); }
    const m = $('m-' + n); if (m) m.classList.toggle('on', n === name);
  });
}

function initTypePage() {
  const setH = () => document.documentElement.style.setProperty('--hdr', hdrH() + 'px');
  setH(); window.addEventListener('resize', () => { setH(); updateTypeProgress(); });
  window.addEventListener('scroll', updateTypeProgress, { passive: true });
  try { history.replaceState({ view: 'home', i: 0 }, ''); } catch (e) {}
  window.addEventListener('popstate', (e) => {
    const st = e.state || {};
    navIdx = st.i || 0;
    if (st.type) { openTypePage(st.type, st.sec || 0, false); return; }
    let v = st.view || 'home';
    if (v === 'result' && !lastResult) v = 'home';
    if (v === 'history' && !currentUser) v = 'home';
    navigateTo(v, false);
  });
  setNavActive('home');
}

function filterTypes() {
  const searchInput = $('type-search');
  if (!searchInput) return;
  const q = searchInput.value.trim().toLowerCase();
  document.querySelectorAll('.type-card').forEach((c) => { c.style.display = !q || c.dataset.search.includes(q) ? '' : 'none'; });
  document.querySelectorAll('.type-group').forEach((g) => { g.style.display = [...g.querySelectorAll('.type-card')].some((c) => c.style.display !== 'none') ? '' : 'none'; });
}

const sT = (idTxt, enTxt) => (currentLang === 'id' ? idTxt : enTxt);
const SH_KEY = 'mbti_search_history';
const escHtml = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function shGet() { try { return JSON.parse(localStorage.getItem(SH_KEY)) || []; } catch (e) { return []; } }
function shSet(a) { try { localStorage.setItem(SH_KEY, JSON.stringify(a)); } catch (e) {} }
function shAdd(q) {
  q = (q || '').trim(); if (q.length < 2) return;
  shSet([q, ...shGet().filter((x) => x.toLowerCase() !== q.toLowerCase())].slice(0, 8));
}
let shShown = [];
function renderSearchHistory() {
  const box = $('search-history'), inp =$('type-search'); if (!box || !inp) return;
  const q = inp.value.trim().toLowerCase();
  shShown = shGet().filter((x) => !q || (x.toLowerCase().includes(q) && x.toLowerCase() !== q));
  if (!shShown.length) { box.classList.add('hidden'); return; }
  box.innerHTML = `<div class="flex items-center justify-between px-4 pt-3 pb-1 text-[11px] font-bold text-slate-500">
      <span>${sT('Pencarian terakhir', 'Recent searches')}</span>
      <button type="button" onmousedown="event.preventDefault(); shClear()" class="text-rose-500 hover:underline">${sT('Hapus semua', 'Clear all')}</button></div>` +
    shShown.map((t, i) => `<div class="flex items-center gap-2 px-4 py-2 hover:bg-teal-50 cursor-pointer" onmousedown="event.preventDefault(); shPick(${i})">
      <i class="fa-solid fa-clock-rotate-left text-slate-400 text-xs"></i><span class="flex-1 truncate text-slate-700">${escHtml(t)}</span>
      <button type="button" class="text-slate-400 hover:text-rose-500" onmousedown="event.preventDefault(); event.stopPropagation(); shRemove(${i})" aria-label="Hapus"><i class="fa-solid fa-xmark"></i></button></div>`).join('');
  box.classList.remove('hidden');
}
function hideSearchHistory() { const b = $('search-history'); if (b) b.classList.add('hidden'); }
function shPick(i) { const inp = $('type-search'); inp.value = shShown[i]; filterTypes(); shAdd(shShown[i]); hideSearchHistory(); }
function shRemove(i) { const t = shShown[i]; shSet(shGet().filter((x) => x !== t)); renderSearchHistory(); }
function shClear() { shSet([]); hideSearchHistory(); }
function searchKey(e) {
  if (e.key === 'Enter') { shAdd(e.target.value); hideSearchHistory(); e.target.blur(); }
  if (e.key === 'Escape') hideSearchHistory();
}
function resetTypesSearch() {
  const inp = $('type-search'); if (inp) { inp.value = ''; inp.blur(); }
  hideSearchHistory(); filterTypes();
}
function searchBack() { resetTypesSearch(); navigateTo('types'); scrollTop0(); }
function goToTypes() { resetTypesSearch(); navigateTo('types'); scrollTop0(); }
document.addEventListener('click', (e) => { if (!e.target.closest('#search-wrap')) hideSearchHistory(); });

const CM_KEY = 'mbti_welcome_seen';
function showCookiePop() {
  const p = $('cookie-pop'); if (!p) return;
  $('cm-title').textContent = sT('TERIMA SEMUA KEPRIBADIAN?', 'ACCEPT ALL PERSONALITIES?');$('cm-sub').textContent = sT('16 tipe, 1 tes, kurang dari 10 menit. Siap kenalan sama dirimu?', '16 types, 1 test, under 10 minutes. Ready to meet yourself?');
  $('cm-yes').textContent = sT('YA!', 'YES!');
  p.classList.remove('hidden');
}
function closeCookiePop() {
  const p = $('cookie-pop'); if (p) p.classList.add('hidden');
  try { localStorage.setItem(CM_KEY, '1'); } catch (e) {}
}
document.addEventListener('DOMContentLoaded', () => {
  let seen = false; try { seen = localStorage.getItem(CM_KEY) === '1'; } catch (e) {}
  if (!seen) setTimeout(showCookiePop, 600);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCookiePop(); });
});

document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('hero-tiles'); if (!box) return;
  const order = ['ISTJ','ISFJ','ESFJ','ESTJ','INFP','INFJ','ENFJ','ENFP','INTJ','INTP','ENTP','ENTJ','ISFP','ISTP','ESFP','ESTP'];
  box.innerHTML = order.map((c) => `<button type="button" class="hero-tile" data-code="${c}" aria-label="${c}" title="${c}"></button>`).join('');
  box.addEventListener('click', (e) => { const b = e.target.closest('.hero-tile'); if (b) openTypePage(b.dataset.code); });
});