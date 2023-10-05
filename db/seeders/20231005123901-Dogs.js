"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dogs",
      [
        {
          breeds: "Labrador",
          description:
            "Лабрадор ретривер - одна из самых популярных и легко узнаваемых пород в мире. Особенности экстерьера: крепкое, мускулистое тело; висячие уши; вытянутый (удлиненный) нос; длинные лапы пропорционально всему телу; хвост средней длины (помогающий регулировать положение тела в воде). Лабрадоры ретривер бывают трех окрасов: шоколадного, черного и палевого. Оттенки шерсти могут различаться в пределах этих 3 цветов: от ярко-рыжего до почти белого.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breeds: "Akita",
          description:
            "Акита-ину – японская порода собак, которая приобрела большую популярность после выхода фильма «Хатико: самый верный друг». Они отличаются преданностью, благородностью и своенравным характером. По-другому их еще называют японской собакой акита. По классификации Международной кинологической федерации порода относится к группе Шпицы и примитивные породы, к секции Азиатских шпицов и близких пород. Акиту-ину часто используют как собаку-компаньона, ведь они не оставят хозяина в беде, отличаются сильной привязанностью, могут стать настоящей нянькой для детишек. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breeds: "Beagle",
          description:
            "Бигли - мускулистые, крепкие собаки с немного куполообразным черепом. Их морда квадратная, а нос широкий. Уши длинные и висячие. У них глубокая грудь, прямая спина, умеренно длинный хвост, который направлен вверх. У собак данной породы гладкая, плотная шерсть, окрас обычно черный, желтовато-коричневый и белый. Считается, что бигли хорошо ладят с другими домашними животными и людьми. Это веселые собаки, которые любят ласку. Они предпочитают компанию, однако, если остаются одни, могут выть и проявлять деструктивное поведение. В соответствии с одним из руководств для владельцев собак бигли находятся в верхней части списка наиболее лающих собак, и их тяжело приучать к лотку и проводить первичный курс дрессировки.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breeds: "Doberman",
          description:
            "Доберманы были выведены в Германии, на территории Тюрингии во второй половине 19-го века. Интересный факт происхождения породы доберман: порода названа в честь ее основоположника — Фридриха Карла Л. Доберманна, который служил сборщиком налогов в городе Апольд. Для выполнения своих обязанностей Доберманну требовался надежный помощник, и он задумался о создании породы собак исключительно для служебных целей. Для выведения новой породы заводчик скрещивал немецкого пинчера с ротвейлером, немецкой овчаркой и манчестерским терьером. В крови доберманов также течет кровь гончих и догов.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breeds: "Eskimo",
          description:
            "Сибирский хаски – удивительная ездовая собака, выведенная в условиях Крайнего Севера. Вряд ли вы найдете еще какую-нибудь породу, представители которой разделили бы с человеком столько невзгод и трудностей, а история спасения города Нома от эпидемии дифтерии навсегда останется в благодарной людской памяти. Хаски – живое воплощение собачьего ума, сообразительности, преданности и любви к человеку.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breeds: "Germanshepherd",
          description:
            "Родоначальником этой поистине уникальной породы является немецкий барон Макс Фон Штефаниц, который и вывел в 19-м столетии этих универсальных собак. Немецкую овчарку чрезвычайно ценят во всем мире за их разноплановость, способность быть великолепным другом и полную самоотдачу. Кроме того, эта собака навсегда останется в истории, как первая собака, которая начала использоваться в качестве поводыря для слепых. Недаром и в наши дни Немецкая овчарка остается самой популярной породой собак в мире.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breeds: "Pembroke",
          description:
            "Вельш-корги пемброк самые маленькие из группы собак-скотоводов Американского Кеннел Клуба. Их шерсть может иметь палевый, ярко рыжий или соболиный цвет, часто с белыми отметинами на конечностях, и по всему телу включая морду. Причём, оттенки этих цветов отличаются от стандартных собачьих. Голова вельш корги пемброк похожа на голову лисы, уши стоячие, длиннее среднего. Хвост короткий, ломаный - это, кстати, главное отличие от собратьев породы вельш корги кардиган. Конечности короткие, телосложение крепкое.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breeds: "Samoyed",
          description:
            "Это среднего размера, сильная, мускулистая собака, ноги длинные и стройные. Голова широкая, среднего размера, с конической мордой и черным носом (редко бывает коричневого или темно-красного цвета). Глаза миндалевидные, отделены, темные. У них небольшие, круглые уши, широко расставленные и прямые. Хвост длинный и пушистый. Мех двухслойным с пушистым, густым, коротким внутренним слоем и наружный слой из грубого, высокого волоса. Окрас белый, кремовый или комбинацию этих двух цветов. Волосы длиннее на шее, образуют своего рода гриву.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breeds: "Sharpei",
          description:
            "Порода шарпей - собака средних размеров, имеющая большое количество складок кожи не только на морде, но и по всему телу (обычно на морде их значительно больше, а тело иногда может быть и вовсе лишено складок, если собака не переедает и имеет достаточное количество физической нагрузки). Телосложение крепкое, конечности средней длины, хвост также средней длины. Уши маленькие, загнуты вперед, шерсть короткая.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breeds: "Boxer",
          description:
            "Немецкий боксер собака среднего размера, у них крепкое и мускулистое тело. Высота кобелей достигает 63 см, сук 60 см. Данная порода обладает квадратным форматом и крепким костяком. У боксера отличная мускулатура: сухая, отлично развита и рельефная.Голова придает облику боксера его характерный вид, его морда очень широкая и мощная. Носовая мочка зависит от окраса – обычно она черная или темно-коричневая. Глаза не выпуклые и глубоко не запавшие, они темно-коричневого цвета. Форма ушей треугольная.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};