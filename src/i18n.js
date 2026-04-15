import { createI18n } from 'vue-i18n'

const messages = {
    ru: {
        header: {
            services: 'Услуги',
            search: 'Поиск по услуге',
            find: 'Найти'
        },
        hero: {
            subtitle: 'Быстро и грамотно решим ваш юридический вопрос.',
            title: 'Юридический сервис',
            button: 'Задать вопрос юристу',
            f1: 'На связи 24/7: поможем в любое время суток.',
            f2: 'Консультация в чате и по телефону.',
            f3: 'Ответим через 7 минут — не откладывайте решение проблем.'
        },
        stats: {
            n1: '1 000+',
            s1: 'Мне доверяют решение своих вопросов',

            n2: '> 350',
            s2: 'Клиентов получили юридическую помощь',

            n3: '2 лет',
            s3: 'Успешно отстаиваю права наших клиентов',

            n4: '26 лет',
            s4: 'Я юрист с опытом работы в сфере права.'
        },
        services: {
            title: 'Выберите',
            highlight: 'услугу',
            from: 'от',

            s1: {
                title: 'Работа с документами',
                desc: 'Анализ, составление и изменение документов.'
            },

            s2: {
                title: 'Консультация',
                desc: 'Консультация (устная) без ограничения по времени.',
                button: 'Заказать бесплатно'
            },

            s3: {
                title: 'Судебные споры',
                desc: 'Правовая защита ваших интересов в суде'
            }
        },
        cases: {
            title: 'Решаем',
            highlight: 'правовые',
            after: 'вопросы за вас',
            subtitle: 'Частые обращения:',
            more: 'Подробнее',

            c1: {
                title: 'Уголовные дела',
                i1: 'Защита',
                i2: 'Участие в следствии',
                i3: 'Защита в суде',
                i4: 'Апелляция и кассация'
            },

            c2: {
                title: 'Гражданские дела',
                i1: 'Взыскание долгов',
                i2: 'Договорные споры',
                i3: 'Имущественные вопросы',
                i4: 'Возмещение ущерба'
            },

            c3: {
                title: 'Семейные вопросы',
                i1: 'Развод',
                i2: 'Алименты',
                i3: 'Раздел имущества',
                i4: 'Родительские права'
            },

            c4: {
                title: 'Бизнес и предпринимательство',
                i1: 'Составление договоров',
                i2: 'Представительство в суде',
                i3: 'Налоговые споры',
                i4: 'Юридический аудит'
            }
        },
        docs: {
            title: 'Документы',
            text1: 'Шаблоны договоров на все случаи жизни.',
            text2: 'Проверены лучшими юристами.',
            text3: 'Защищают от недобросовестных контрагентов.',
            cta: 'Наш юрист поможет разобраться в ситуации и адаптирует договор под вас.',
            button: 'Заказать'
        },
        form: {
            title: 'Нужна консультация юриста?',
            labelName: 'Как к вам обращаться',
            labelPhone: 'Номер телефона',
            placeholderName: 'Ваше имя',
            placeholderPhone: '+998...',
            agree: 'Даю согласие на обработку данных',

            button: 'Перезвоните мне',
            sending: 'Отправка...',
            success: 'Заявка отправлена!',

            errorFill: 'Заполните все поля',
            errorAgree: 'Подтвердите согласие',
            errorSend: 'Ошибка отправки',

            newRequest: 'Новая заявка',
            name: 'Имя',
            phone: 'Телефон',

            resultTitle: 'Что вы получите:',
            result1: 'Прогнозы разрешения вашего кейса',
            result2: 'Подберем опытного юриста'
        },
        chat: {
            contact: 'СВЯЖИТЕСЬ',
            contactText: 'с нами любым удобным способом — звонок, форма или мессенджер.',

            get: 'ПОЛУЧИТЕ',
            getText: 'консультацию. Все материалы по вашему кейсу сохраняются.',

            describe: 'ОПИШИТЕ',
            describeText: 'ситуацию и расскажите детали. Мы подберем юриста.',

            placeholder: 'Сообщение...',

            b1: 'Здравствуйте! Хочу купить автомобиль, сможете проверить договор?',
            b2: 'Добрый день! Конечно, проверим договор.',
            b3: 'Хочу добавить пункт про скрытые дефекты...',
            b4: 'Да, мы добавим защитные условия.'
        },
        bankruptcy: {
            title: 'Банкротство и списание долгов',
            button: 'Получить консультацию',

            i1: 'Подскажем, что делать',
            i2: 'Ответим на вопросы',
            i3: 'Проведем процедуру'
        },
        team: {
            title1: 'Что говорят о нас наши клиенты?',

            c1: {
                name: 'Акмаль Каримов',
                role: 'Поначалу я немного скептически относился к возможности связаться с юристом онлайн. Но после работы с этим сервисом мое мнение полностью изменилось. Я получил очень быстрый ответ на свой вопрос, все мои документы были тщательно проверены, и были даны четкие юридические рекомендации. Самое главное, я чувствовал, что вся моя информация хранится в полной конфиденциальности. Действительно надежный и современный сервис.'
            },

            c2: {
                name: 'Дилноза Рахимова',
                role: 'Мне было очень удобно получить юридическую помощь дистанционно. Мое дело было очень срочным, и адвокат в короткие сроки объяснил решение проблемы. Во время консультации я получал подробные и простые ответы на каждый из моих вопросов. Большую помощь оказали также в проверке и исправлении документов. Профессиональный подход и внимание к клиенту находятся на высоком уровне.'
            },

            c3: {
                name: 'Жасур Турсунов',
                role: 'Я воспользовался онлайн-чатом на сайте и меня мгновенно связали. Необходимая мне юридическая консультация была четко объяснена с учетом законодательства. Ранее я обращался в другие организации, но нигде не встречал такой скорости и точности. Самое приятное было то, что каждый мой вопрос был серьезно рассмотрен, и было предложено наиболее подходящее решение. Конечно, я обращусь снова.'
            },
            c4: {
                name: 'Бекзод Исламов',
                role: 'В тот момент меня не было в Узбекистане, но возникла важная юридическая проблема, касающаяся моей семьи. Не зная, как решить этот вопрос дистанционно, я обратился онлайн. Со мной связались очень быстро, и мою ситуацию подробно изучили. Юрист объяснил мне все процедуры простым и понятным языком, дал четкие инструкции по подготовке и подаче необходимых документов. Самое главное, несмотря на мое удаленное расположение, проблема моей семьи была решена под полным контролем. Именно благодаря этому сервису я убедился, что можно получить надежную юридическую помощь даже дистанционно. Хочу выразить особую благодарность за профессиональный подход и постоянную связь.'
            }
        },
        about: {
            title: 'Моя обязанность – защищать ваши интересы в судебном порядке.',
            name: 'Хамидов Анваржон Мухаммаджонович',
            exp: 'Адвокат с опытом более 26 лет',
            text: `
Я юрист с более чем 26-летним опытом работы. На протяжении своей карьеры я занимал различные ответственные должности в государственном и частном секторах, приобретя глубокие практические знания и солидный опыт.
<br><br>
Я работаю в юридической сфере с 1999 года. Ранее я работала консультантом и заведующей отделом в Ферганском региональном управлении юстиции, а с 2009 по 2014 год – экономическим судьей, где углубленно изучала судебную практику и законодательство.
<br><br>
Я также работала юрисконсультом и директором отдела в банке Madad Invest, где приобрела опыт работы со сложными юридическими вопросами.
<br><br>
Я занимаюсь юридической практикой с 2024 года и являюсь членом Палаты адвокатов Республики Узбекистан.
<br><br>
<span class="font-medium text-gray-800">
Для меня наиболее важными ценностями являются доверие, конфиденциальность и результат.
</span>
`,
            location: '📍 Наш адрес',
            address: ' Фаргона вилояти, Фаргона шахар, Ойбек МФЙ, П.Махмуд кучаси, 60-уй '
        },
        faq: {
            title1: 'Ответы на',
            highlight: 'частые',
            title2: 'вопросы',

            f1: {
                title: 'Безопасно ли связываться с юристом онлайн? Будут ли мои документы сохранены в тайне?',
                text: `Да, это абсолютно безопасно. Все предоставленные вами документы и информация строго защищены юридической конфиденциальностью.
Наш сайт использует современные технологии безопасности, и каждое обращение обрабатывается конфиденциально.
Как юрист, я обязан по закону не разглашать информацию о клиентах третьим лицам. Поэтому вы можете свободно и уверенно изложить свою проблему.`
            },

            f2: {
                title: 'Насколько эффективны дистанционные онлайн-консультации?',
                text: `Онлайн-консультации — это сегодня быстрое и удобное решение. Вы можете получить профессиональную юридическую помощь, не выходя из дома или с работы.

Я подробно изучу ваш вопрос и дам конкретные рекомендации, основанные на действующем законодательстве. При необходимости я также проверю документы и помогу вам их исправить или подготовить.

Этот метод особенно эффективен для экономии времени и быстрого принятия решений.`
            },

            f3: {
                title: 'Как скоро я получу ответ на свой вопрос и как я могу с вами связаться?',
                text: `На вопросы, отправленные через сайт, мы ответим в кратчайшие сроки. Как правило, заявки рассматриваются быстро, и вы получите четкий и понятный ответ.

Вы можете написать через онлайн-чат или записаться на консультацию, используя специальную форму. Вы также можете воспользоваться полным консультационным сервисом, предварительно записавшись на прием для получения подробной консультации.

Каждая заявка будет рассмотрена индивидуально, и вам будет предложено наиболее подходящее юридическое решение.`
            }
        },
        footer: {
            call: 'Единый колл-центр',
            socials: 'Khamidov в социальных сетях',
            company: '"ООО "Национальная юридическая служба" L - 70666097 ИНН 311746759"',

            col1: {
                title: 'Частным лицам',
                l1: 'Банкротство физических лиц',
                l2: 'Автоюрист',
                l3: 'ОСАГО и КАСКО',
                l4: 'Помощь при ДТП',
                l5: 'Лишение прав',
                l6: 'Налоговые вопросы'
            },

            col2: {
                title: 'Бизнесу',
                l1: 'Шаблоны документов',
                l2: 'Юрист для бизнеса',
                l3: 'Корпоративное право',
                l4: 'Арбитраж',
                l5: 'Работа с поставщиками'
            },

            col3: {
                title: 'О компании',
                l1: 'Вопрос-ответ',
                l2: 'Контакты',
                l3: 'Наши эксперты',
                l4: 'О нас'
            }
        },
        chatbot: {
            hello: "Здравствуйте! Мы — юридическая компания KHAMIDOV.UZ. Готовы ответить на ваши вопросы и помочь разобраться в ситуации.",
            success: 'Спасибо! Мы скоро свяжемся с вами 🙌',
            error: 'Ошибка сервера 😔',
            server: 'Сервер недоступен 😔',

            title: 'Онлайн консультация',
            typing: 'Печатает...',
            contacts: 'Контакты',
            leave: 'Оставить номер',
            placeholder: 'Напишите сообщение...',

            quick: 'Как с вами связаться?',
            phone: 'Введите ваш номер телефона 📱'
        },
        modal: {
            title: 'Заявка на консультацию',
            subtitle: 'Ответим в течение 7 минут',

            problemPlaceholder: 'Опишите вашу проблему',
            namePlaceholder: 'Ваше имя',
            phonePlaceholder: '+998 __ ___ __ __',

            selectTime: 'Выберите время консультации',

            agree: 'Даю согласие на обработку персональных данных',
            agreeError: 'Подтвердите согласие',

            button: 'Получить консультацию',
            footer: 'Нажимая кнопку, вы соглашаетесь с условиями',

            error: 'Заполните данные',

            new: 'Новая заявка',
            name: 'Имя',
            phone: 'Телефон',
            time: 'Время',
            problem: 'Проблема',
            success: 'Заявка успешно отправлена!'
            
        },
        

    },

    uz: {
        header: {
            services: 'Xizmatlar',
            search: 'Xizmat bo‘yicha qidiruv',
            find: 'Qidirish'
        },
        hero: {
            subtitle: 'Huquqiy masalangizni tez va professional hal qilamiz.',
            title: 'Yuridik xizmat',
            button: 'Yuristga savol berish',
            f1: '24/7 aloqa: istalgan vaqtda yordam beramiz.',
            f2: 'Chat va telefon orqali maslahat.',
            f3: '7 daqiqa ichida javob beramiz.'
        },
        stats: {
            n1: '1 000+',
            s1: 'Mijozlar o‘z muammolarini menga ishonib topshiradi',

            n2: '> 350',
            s2: 'Mijozlar yuridik yordam oldi',

            n3: '2 yil',
            s3: 'Mijozlar huquqlarini muvaffaqiyatli himoya qilaman',

            n4: '26 yil',
            s4: 'Yuridik tajribaga ega advokatman'
        },
        services: {
            title: 'Xizmatni',
            highlight: 'tanlang',
            from: 'dan',

            s1: {
                title: 'Hujjatlar bilan ishlash',
                desc: 'Hujjatlarni tahlil qilish, tuzish va o‘zgartirish.'
            },

            s2: {
                title: 'Konsultatsiya',
                desc: 'Og‘zaki konsultatsiya (vaqt cheklanmagan).',
                button: 'Bepul buyurtma berish'
            },

            s3: {
                title: 'Sud ishlari',
                desc: 'Sudda manfaatlaringizni himoya qilish'
            }
        },
        cases: {
            title: 'Biz',
            highlight: 'huquqiy',
            after: 'muammolaringizni hal qilamiz',
            subtitle: 'Eng ko‘p murojaatlar:',
            more: 'Batafsil',

            c1: {
                title: 'Jinoyat ishlari',
                i1: 'Himoya',
                i2: 'Tergovda ishtirok',
                i3: 'Sudda himoya',
                i4: 'Apellyatsiya va kassatsiya'
            },

            c2: {
                title: 'Fuqarolik ishlari',
                i1: 'Qarzdorlik undirish',
                i2: 'Shartnoma nizolari',
                i3: 'Mulk masalalari',
                i4: 'Zarar undirish'
            },

            c3: {
                title: 'Oilaviy masalalar',
                i1: 'Ajrim',
                i2: 'Aliment',
                i3: 'Mulk bo‘linishi',
                i4: 'Ota-onalik huquqi'
            },

            c4: {
                title: 'Biznes va tadbirkorlik',
                i1: 'Shartnoma tuzish',
                i2: 'Sudda vakillik',
                i3: 'Soliq nizolari',
                i4: 'Yuridik audit'
            }
        },
        docs: {
            title: 'Hujjatlar',
            text1: 'Har qanday holat uchun shartnoma namunalar.',
            text2: 'Eng yaxshi yuristlar tomonidan tekshirilgan.',
            text3: 'Sizni nohalol hamkorlardan himoya qiladi.',
            cta: 'Yuristimiz vaziyatni tushunishga yordam beradi va shartnomani sizga moslashtiradi.',
            button: 'Buyurtma berish'
        },
        form: {
            title: 'Yurist maslahati kerakmi?',
            labelName: 'Ismingiz',
            labelPhone: 'Telefon raqamingiz',
            placeholderName: 'Ismingizni kiriting',
            placeholderPhone: '+998...',
            agree: 'Maʼlumotlarni qayta ishlashga roziman',

            button: 'Menga qo‘ng‘iroq qiling',
            sending: 'Yuborilmoqda...',
            success: 'Ariza yuborildi!',

            errorFill: 'Barcha maydonlarni to‘ldiring',
            errorAgree: 'Rozilikni tasdiqlang',
            errorSend: 'Xatolik yuz berdi',

            newRequest: 'Yangi ariza',
            name: 'Ism',
            phone: 'Telefon',
            resultTitle: 'Nimani olasiz:',
            result1: 'Muammoning yechim prognozi',
            result2: 'Tajribali yurist tanlab beramiz'
        },
        chat: {
            contact: 'BOG‘LANING',
            contactText: 'biz bilan qulay usulda — qo‘ng‘iroq, forma yoki messenjer.',

            get: 'OLING',
            getText: 'konsultatsiya. Barcha materiallar saqlanadi.',

            describe: 'TAVSIFLANG',
            describeText: 'holatni batafsil yozing. Sizga mos yurist topamiz.',

            placeholder: 'Xabar...',

            b1: 'Salom! Mashina olmoqchiman, shartnomani tekshirasizmi?',
            b2: 'Albatta, tekshirib beramiz.',
            b3: 'Yashirin nuqsonlar haqida band qo‘shmoqchiman...',
            b4: 'Ha, sizni himoya qiluvchi band qo‘shamiz.'
        },
        bankruptcy: {
            title: 'Bankrotlik va qarzlarni bekor qilish',
            button: 'Konsultatsiya olish',

            i1: 'Nima qilishni aytamiz',
            i2: 'Savollarga javob beramiz',
            i3: 'Jarayonni olib boramiz'
        },
        team: {
            title1: 'Mijozlarimiz biz haqimizda nima deydi?',

            c1: {
                name: 'Akmal Karimov',
                role: 'Onlayn tarzda advokatga murojaat qilish boshida biroz shubhali tuyulgandi. Lekin bu xizmat orqali ishlaganimdan so‘ng fikrim butunlay o‘zgardi. Savolimga juda tez javob oldim, barcha hujjatlarim sinchkovlik bilan ko‘rib chiqildi va aniq huquqiy tavsiyalar berildi. Eng muhimi, barcha ma’lumotlarim to‘liq maxfiy saqlanganini his qildim. Haqiqatan ham ishonchli va zamonaviy xizmat.'
            },

            c2: {
                name: 'Dilnoza Rahimova',
                role: 'Masofadan turib yuridik yordam olish men uchun juda qulay bo‘ldi. Ishim juda shoshilinch edi va advokat qisqa vaqt ichida muammoning yechimini tushuntirib berdi. Konsultatsiya davomida har bir savolimga batafsil va sodda tilda javob oldim. Hujjatlarni tekshirish va to‘g‘rilashda ham katta yordam berildi. Professional yondashuv va mijozga e’tibor yuqori darajada.'
            },

            c3: {
                name: 'Jasur Tursunov',
                role: 'Sayt orqali onlayn chatdan foydalandim va darhol aloqa o‘rnatildi. Menga kerakli yuridik maslahatlar aniq qonunchilik asosida tushuntirib berildi. Oldin boshqa joylarga ham murojaat qilgan edim, lekin bu darajadagi tezkorlik va aniqlikni uchratmagandim. Eng yoqqan jihati — har bir savolim jiddiy ko‘rib chiqildi va eng to‘g‘ri yechim taklif qilindi. Albatta yana murojaat qilaman.'
            },
            c4: {
                name: 'Bekzod Islomov',
                role: 'Men o‘sha paytda O‘zbekistonda emas edim, lekin oilam bilan bog‘liq muhim huquqiy masala yuzaga kelgandi. Masofadan turib bu muammoni qanday hal qilishni bilmay, onlayn tarzda murojaat qildim. Juda tez aloqaga chiqildi va vaziyatim batafsil o‘rganildi. Advokat barcha jarayonlarni menga oddiy va tushunarli qilib tushuntirib berdi, kerakli hujjatlarni qanday tayyorlash va topshirish bo‘yicha aniq yo‘riqnomalar berdi.Eng muhimi, men uzoqda bo‘lsam ham, oilamning masalasi to‘liq nazorat ostida olib borildi. Masofadan turib ham ishonchli yuridik yordam olish mumkinligiga aynan shu xizmat orqali amin bo‘ldim.Professional yondashuv va doimiy aloqada bo‘lib turilgani uchun alohida minnatdorchilik bildiraman.'
            }
        },
        about: {
            title: 'Sizning huquqiy himoyangiz - mening vazifam',
            name: 'Xamidov Anvarjon Muhammadjonovich',
            exp: '26+ yillik tajribaga ega advokat',
            text: `
Men — 26 yildan ortiq yuridik tajribaga ega advokatman. Faoliyatim davomida davlat va xususiy sektorda turli mas’uliyatli lavozimlarda ishlab, chuqur amaliy bilim va mustahkam tajriba orttirganman.
<br><br>
1999-yildan buyon huquq sohasida ishlab kelmoqdaman. Farg‘ona viloyat adliya boshqarmasida maslahatchi va bo‘lim boshlig‘i sifatida, 2009–2014-yillarda esa xo‘jalik sudyasi lavozimida faoliyat yuritib, sud amaliyoti va qonunchilikni chuqur o‘rgandim.
<br><br>
Shuningdek, “Madad Invest Bank”da yuriskonsult va departament direktori sifatida ishlab, murakkab huquqiy masalalar bilan ishlash tajribasiga ega bo‘ldim.
<br><br>
2024-yildan buyon advokatlik faoliyati bilan shug‘ullanaman va O‘zbekiston Respublikasi Advokatlar palatasi a’zosiman.
<br><br>
<span class="font-medium text-gray-800">
Men uchun eng muhim qadriyatlar — ishonch, maxfiylik va natija.
</span>`,
            location: '📍 Bizning manzil',
            address: 'Фаргона вилояти, Фаргона шахар, Ойбек МФЙ, П.Махмуд кучаси, 60-уй'
        },
        faq: {
            title1: 'Ko‘p beriladigan',
            highlight: 'savollarga',
            title2: 'javoblar',

            f1: {
                title: 'Onlayn advokatga murojaat qilish xavfsizmi? Hujjatlarim sir saqlanadimi?',
                text: `Ha, to‘liq xavfsiz. Siz taqdim etgan barcha hujjatlar va ma’lumotlar advokatlik siri asosida qat’iy himoya qilinadi.
Saytimiz zamonaviy himoya texnologiyalari orqali ishlaydi va har bir murojaat maxfiy tarzda ko‘rib chiqiladi.

Advokat sifatida men qonunchilikka muvofiq mijoz ma’lumotlarini uchinchi shaxslarga oshkor qilmaslik majburiyatini olaman. Shu sababli siz o‘z muammongizni bemalol va ishonch bilan bayon qilishingiz mumkin.`
            },

            f2: {
                title: 'Masofadan turib onlayn konsultatsiya qanchalik samarali?',
                text: `Onlayn konsultatsiya bugungi kunda tezkor va qulay yechim hisoblanadi. Siz uy yoki ish joyingizdan chiqmasdan turib professional yuridik yordam olishingiz mumkin.

Men sizning savolingizni batafsil o‘rganib, amaldagi qonunchilik asosida aniq tavsiyalar beraman. Zarur bo‘lsa, hujjatlarni ko‘rib chiqib, ularni to‘g‘rilash yoki tayyorlashda ham yordam beraman.

Bu usul ayniqsa vaqtni tejash va tezkor qaror qabul qilish uchun juda samarali.`
            },

            f3: {
                title: 'Savolimga qanchalik tez javob olaman va qanday murojaat qilish mumkin?',
                text: `Sayt orqali yuborilgan savollarga imkon qadar qisqa vaqt ichida javob beriladi. Odatda murojaatlar tezkor ko‘rib chiqiladi va sizga aniq va tushunarli javob taqdim etiladi.

Siz onlayn chat orqali yozishingiz yoki maxsus forma orqali qabulga yozilishingiz mumkin. Shuningdek, batafsil maslahat olish uchun oldindan vaqt belgilab, to‘liq konsultatsiya xizmatidan foydalanishingiz ham mumkin.

Har bir murojaat individual tarzda ko‘rib chiqiladi va sizga eng to‘g‘ri yuridik yechim taklif qilinadi.`
            }
        },
        footer: {
            call: 'Yagona call-markaz',
            socials: 'Khamidov ijtimoiy tarmoqlarda',
            company: 'ООО "Milliy yuridik xizmat" L - 70666097 ИНН 311746759',

            col1: {
                title: 'Jismoniy shaxslar',
                l1: 'Bankrotlik',
                l2: 'Avtoyurist',
                l3: 'Sug‘urta masalalari',
                l4: 'YTH yordam',
                l5: 'Huquqdan mahrum qilish',
                l6: 'Soliq masalalari'
            },

            col2: {
                title: 'Biznes uchun',
                l1: 'Hujjatlar',
                l2: 'Biznes yuristi',
                l3: 'Korporativ huquq',
                l4: 'Sud ishlari',
                l5: 'Ta’minotchilar bilan ish'
            },

            col3: {
                title: 'Kompaniya haqida',
                l1: 'Savol-javob',
                l2: 'Kontaktlar',
                l3: 'Mutaxassislar',
                l4: 'Biz haqimizda'
            }
        },
        chatbot: {
            hello: "Assalomu alaykum. Biz — KHAMIDOV.UZ yuridik kompaniyasimiz. Savollaringizga javob berishga va masalangizni tushunishga yordam beramiz.",
            success: 'Rahmat! Tez orada siz bilan bog‘lanamiz 🙌',
            error: 'Server xatosi 😔',
            server: 'Server ishlamayapti 😔',

            title: 'Onlayn konsultatsiya',
            typing: 'Yozmoqda...',
            contacts: 'Kontaktlar',
            leave: 'Raqam qoldirish',
            placeholder: 'Xabar yozing...',

            quick: 'Qanday bog‘lansam bo‘ladi?',
            phone: 'Telefon raqamingizni kiriting 📱'
        },
        modal: {
            title: 'Konsultatsiya uchun ariza',
            subtitle: '7 daqiqa ichida javob beramiz',

            problemPlaceholder: 'Muammoingizni yozing',
            namePlaceholder: 'Ismingiz',
            phonePlaceholder: '+998 __ ___ __ __',

            selectTime: 'Vaqtni tanlang',

            agree: 'Ma’lumotlarni qayta ishlashga roziman',
            agreeError: 'Rozilikni tasdiqlang',

            button: 'Konsultatsiya olish',
            footer: 'Tugmani bosish orqali siz shartlarga rozilik bildirasiz',

            error: 'Ma’lumotlarni to‘ldiring',

            new: 'Yangi ariza',
            name: 'Ism',
            phone: 'Telefon',
            time: 'Vaqt',
            problem: 'Muammo',
            success: 'Ariza muvaffaqiyatli yuborildi!'
        }
    }
}

export const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'uz', // сохраняем язык
    fallbackLocale: 'ru',
    legacy: false,
    messages
})