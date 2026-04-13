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
            n1: '350 000+',
            s1: 'Нам доверяют решение своих вопросов',

            n2: '> 3 000 000',
            s2: 'Клиентов получили юридическую помощь',

            n3: '15 лет',
            s3: 'Успешно отстаиваем права наших клиентов',

            n4: '10 лет',
            s4: 'Средний стаж специалиста нашей компании'
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
            title1: 'Комментируем изменения в законе',
            title2: 'для',
            highlight: 'прессы',
            read: 'Читать',

            c1: {
                name: 'Ибрагимова Нурида',
                role: 'Руководитель департамента\nконтроля качества'
            },

            c2: {
                name: 'Проскурова Елена',
                role: 'Руководитель практики частного\nправа'
            },

            c3: {
                name: 'Титов Александр',
                role: 'Ведущий юрист практики\nжилищного права и социальных\nотношений'
            }
        },
        about: {
            title: 'Об',
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
            address: 'Фергана, ул. П. Махмуд, 60'
        },
        faq: {
            title1: 'Ответы на',
            highlight: 'частые',
            title2: 'вопросы',

            f1: {
                title: 'Я могу доверять онлайн-юристам?',
                text: `Онлайн-формат дает больше возможностей: это агрегатор лучших профессионалов на рынке.
Нанять такого юриста в частном порядке гораздо дороже, чем онлайн-консультация.
Мы работаем с 2010 и собрали базу лучших специалистов.`
            },

            f2: {
                title: 'У меня есть знакомый юрист. Я могу обратиться к нему?',
                text: `Можете. Но юристы специализируются на одной области.
Специалист по семейному праву мало знает про налоги.
Наши юристы работают в своей сфере много лет.`
            },

            f3: {
                title: 'Какие гарантии?',
                text: `Среди наших клиентов — Тинькофф, Яндекс и ВСК.
Мы дорожим своей репутацией.
Средняя оценка — 4.85.`
            }
        },
        footer: {
            call: 'Единый колл-центр',
            socials: 'Khamidov в социальных сетях',
            company: 'ООО “Национальная юридическая служба”',
            rules: 'Правила использования информации',
            more: 'Еще документы',

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
                l4: '44-ФЗ',
                l5: 'Арбитраж',
                l6: 'Работа с поставщиками'
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
            hello: 'Здравствуйте! 👋 Чем могу помочь?',
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
            n1: '350 000+',
            s1: 'Mijozlar o‘z muammolarini bizga ishonib topshiradi',

            n2: '> 3 000 000',
            s2: 'Mijozlar yuridik yordam oldi',

            n3: '15 yil',
            s3: 'Mijozlarimiz huquqlarini muvaffaqiyatli himoya qilamiz',

            n4: '10 yil',
            s4: 'Mutaxassislarimizning o‘rtacha tajribasi'
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
            title1: 'Qonunchilikdagi o‘zgarishlarni',
            title2: 'biz',
            highlight: 'ommaviy axborot vositalari uchun sharhlaymiz',
            read: 'O‘qish',

            c1: {
                name: 'Ibragimova Nurida',
                role: 'Sifat nazorati departamenti rahbari'
            },

            c2: {
                name: 'Proskurova Elena',
                role: 'Xususiy huquq amaliyoti rahbari'
            },

            c3: {
                name: 'Titov Aleksandr',
                role: 'Uy-joy huquqi va ijtimoiy munosabatlar bo‘yicha yetakchi yurist'
            }
        },
        about: {
            title: 'HAQIDA',
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
            address: 'Farg‘ona, P. Mahmud ko‘chasi, 60-uy'
        },
        faq: {
            title1: 'Ko‘p beriladigan',
            highlight: 'savollarga',
            title2: 'javoblar',

            f1: {
                title: 'Onlayn yuristlarga ishonish mumkinmi?',
                text: `Onlayn format ko‘proq imkoniyat beradi.
Bu — bozordagi eng yaxshi mutaxassislar yig‘ilgan platforma.
Biz 2010-yildan beri ishlaymiz.`
            },

            f2: {
                title: 'Tanish yuristim bor. Unga murojaat qilsam bo‘ladimi?',
                text: `Albatta mumkin. Lekin yuristlar bir yo‘nalishda ishlaydi.
Masalan, oilaviy yurist soliqlarni yaxshi bilmaydi.
Bizda esa har biri o‘z sohasida mutaxassis.`
            },

            f3: {
                title: 'Qanday kafolatlar bor?',
                text: `Mijozlarimiz orasida yirik kompaniyalar bor.
Biz obro‘mizni qadrlaymiz.
O‘rtacha baho — 4.85.`
            }
        },
        footer: {
            call: 'Yagona call-markaz',
            socials: 'Khamidov ijtimoiy tarmoqlarda',
            company: 'Milliy yuridik xizmat',
            rules: 'Sayt ma’lumotlaridan foydalanish qoidalari',
            more: 'Yana hujjatlar',

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
                l4: '44-FZ',
                l5: 'Sud ishlari',
                l6: 'Ta’minotchilar bilan ish'
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
            hello: 'Salom! 👋 Qanday yordam bera olaman?',
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