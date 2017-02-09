// Все тесты, доступные для юзера за данный квартал. Проверить прошел тест юзер или нет можно по таблице data_comp_evaluations. Если уже прошел их за данный квартал , то в поле mark_self добавляем оценку
const list_comp_classes = [{
	'id': 1,
	'name': 'Я - лидер',
	'mark_self': 'A'
}, {
	'id': 2,
	'name': 'Мы - команда',
	'mark_self': 'CB'
}, {
	'id': 3,
	'name': 'Все - для клиента',
	'mark_self': null
}]


const list_comps = [{
	'id': 1,
	'name': 'Ответственность',
	'class_name': 1
}, {
	'id': 2,
	'name': 'Готовность к изменениям',
	'class_name': 1
}, {
	'id': 3,
	'name': 'Саморазвитие и развитие команды',
	'class_name': 1
}, {
	'id': 4,
	'name': 'Открытость',
	'class_name': 2
}, {
	'id': 5,
	'name': 'Командное взаимодействие',
	'class_name': 2
}, {
	'id': 6,
	'name': 'Качество услуг',
	'class_name': 3
}, {
	'id': 7,
	'name': 'Удовлетворение потребностей',
	'class_name': 3
}]


const list_comps_values = [{
	'id': 1,
	'name': '<b><u>Систематически не выполняет свои обязанности</u></b> (качество и сроки), перекладывает ответственность на коллег и подчиненных. Не признает или скрывает свои недоработки, ошибки своего подразделения, не принимает ответственность за свои управленческие решения.<br/>Повторяет допущенные ранее ошибки, не исправляет отклонения системно приводящие к реализации рисков.<br/> Использует ресурсы Банка в своих интересах.',
	'comps_id': 1,
	'order': 1
}, {
	'id': 2,
	'name': '<b><u>Иногда допускает отклонения по качеству или срокам</u></b> выполнения своих обязанностей.<br/>Относится формально к своим обязанностям, часто делегирует принятие управленческих решений в зоне своей ответственности своим подчиненным, либо эскалирует на уровень выше, не принимает ответственность за их результат.<br/>Оправдывает неудачи внешними обстоятельствами, действиями подчиненных, коллег, смежных подразделений и др.<br/>Нерационально расходует ресурсы и средства Банка.',
	'comps_id': 1,
	'order': 2
}, {
	'id': 3,
	'name': '<b><u>Вовремя и качественно выполняет свои обязанности, даже в сложных обстоятельствах, всегда принимает личную ответственность за результаты своих действий, управленческих решений и действий своей команды.</u></b><br/>Берет дополнительную ответственность за реализацию совместных проектов в смежных областях.<br/>Системно выявляет риски в работе подразделения, оптимизирует их уровень, возможность повторения и последствия.<br/>Организует работу подразделения с точки зрения ответственно и рационального использования ресурсов и средств Банка, пытается оптимизировать расходы ресурсов Банка.',
	'comps_id': 1,
	'order': 3
}, {
	'id': 4,
	'name': '<b><u>Обеспечивает выполнение задач подразделения с высоким качеством</u></b>, даже в сложных обстоятельствах, является примером ответственности в рамках подразделения.<br/>Активно включается в реализацию проектов, которые влияют на работу Банка в целом.<br/>Его подразделение задает стандарты исполнения в рамках функционального блока/ТБ/ПЦП.<br/>Предлагает и реализует глобальные подходы по оптимизации расходов Банка не только в своей, но и в смежных сферах.',
	'comps_id': 1,
	'order': 4
}, {
	'id': 5,
	'name': '<b><u>Всегда обеспечивает выполнение задач подразделения с высоким качеством, даже в сложных обстоятельствах, требующих оперативного подключения смежных служб Банка</u></b>, успешно делится опытом с коллегами и подчиненными.<br/>Активно включается и успешно реализует кросс-функциональные проекты, затрагивающие деятельность всего Банка.<br/>Является примером ответственности не только в рамках своей деятельности, но и в смежных проектах и вовлеченности в дела Банка.<br/>Предлагает и реализует глобальные подходы по оптимизации расходов Банка, которые способствуют значительному улучшению в работе Банка в целом.',
	'comps_id': 1,
	'order': 5
}, {
	'id': 6,
	'name': '<b><u>Сопротивляется изменениям в подразделении</u></b> (например, говорит: и так сойдет, у нас и так все хорошо), транслирует свое отношение коллегам и подчиненным.<br/>Пытается скрыть проблемы неоптимальных процессов.<br/>Препятствует внедрению изменений в своем подразделении и функциональном блоке/ТБ/ПЦП в целом.',
	'comps_id': 2,
	'order': 1
}, {
	'id': 7,
	'name': '<b><u>Подвергает сомнению важность изменений, избегает участия во внедрении нововведений.</u></b><br/>Не стремится изменить неоптимально работающие процессы.<br/>Не поддерживает инициативу сотрудников по внедрению позитивных изменений.',
	'comps_id': 2,
	'order': 2
}, {
	'id': 8,
	'name': '<b><u>Самостоятельно изучает лучшие отраслевые решения и практики, использует их в работе, делится опытом с командой.</u></b><br/>Транслирует положительное отношение к изменениям в компании команде, своевременно информирует о возможных изменениях.<br/>Видит неоптимальные рабочие процессы в зоне своей ответственности, ищет и успешно внедряет варианты их улучшений.<br/>Поддерживает идеи коллег и подчиненных на уровне функционального блока/ТБ/ПЦП.',
	'comps_id': 2,
	'order': 3
}, {
	'id': 9,
	'name': '<b><u>Лидирует во внедрении лучших отраслевых решений и практик, использует их в работе.</u></b><br/>Поддерживает внедрение изменений в компании, всегда своевременно информирует команду о изменениях, добивается положительного принятия и поддержки изменений в команде.<br/>Видит неоптимальные рабочие процессы не только в зоне своей ответственности, но и на уровне функционального блока/ТБ/ПЦП, ищет и успешно внедряет варианты их улучшений.<br/>Продвигает идеи коллег и подчиненных в совместных проектах в смежных областях.',
	'comps_id': 2,
	'order': 4
}, {
	'id': 10,
	'name': '<b><u>Лидирует во внедрении изменений, затрагивающих весь Банк.</u></b><br/> Способствует формированию  благоприятной среды в команде для успешного внедрения изменений.<br/>Видит неоптимальные рабочие процессы не только в зоне своей ответственности, но и в Банке в целом, предлагает варианты их улучшений.<br/>Формирует инновационную среду вокруг себя, продвигая идеи подчиненных и коллег, которые вносят значимые улучшения в работу Банка в целом.',
	'comps_id': 2,
	'order': 5
}, {
	'id': 11,
	'name': '<b><u>Не считает необходимым совершенствовать свои знания и навыки, избегает обучения.</u></b><br/>Отвергает обратную связь.<br/>Препятствует развитию своих подчиненных.<br/>Не реализует индивидуальный план развития, план развития не совпадает с необходимыми зонами развития, (не отвечает актуальным направлениям деятельности).',
	'comps_id': 3,
	'order': 1
}, {
	'id': 12,
	'name': '<b><u>Не уделяет внимания саморазвитию; учится, преимущественно, по указанию руководства.</u></b><br/>Относится к обратной связи от коллег и подчиненных формально, не меняет своего поведения на ее основании.<br/>Не поддерживает развитие своих подчиненных, не делится знаниями и опытом.<br/>Подходит к выполнению индивидуального плана развития формально, не использует полученные знания в работе, план развития частично не совпадает с необходимыми зонами развития и улучшения.',
	'comps_id': 3,
	'order': 2
}, {
	'id': 13,
	'name': '<b><u>Растет и развивает свои навыки не только в рамках своей деятельности, но в смежных сферах</u></b>, делится опытом со своими подчиненными Самостоятельно находит и использует различные способы повышения квалификации, организует обмен знаниями внутри своего подразделениями, а также со смежными подразделениями.<br/>Способствует росту и развитию своих подчиненных в рамках задач своего подразделения (ставит задачи, позволяющие раскрыть потенциал сотрудника).<br/>Выполняет свой план развития в полной мере, успешно применяет полученные знания в работе, план развития регулярно актуализируется в соответствующими с требованиями бизнеса.',
	'comps_id': 3,
	'order': 3
}, {
	'id': 14,
	'name': '<b><u>Активно растет и развивается как личность и профессионал</u></b>: пример для других сотрудников и подчиненных.<br/>Самостоятельно находит и использует лучшие способы повышения квалификации, показывает значительный прогресс в саморазвитии,  организует обмен знаниями внутри своего подразделения, а также со смежными подразделениями.<br/>Способствует росту, раскрытию потенциала своих подчиненных не только в рамках работы своего подразделения, но и в смежных функциях Банка.<br/>Выполняет свой план развития в полной мере, успешно применяет полученные знания в работе, делится полученными знаниями с коллегами и подчиненными, предлагает конструктивные корректировки плана развития, предвосхищающие требования бизнеса.',
	'comps_id': 3,
	'order': 4
}, {
	'id': 15,
	'name': '<b><u>Лидирует во внедрении принципиально новых подходов, меняющих принципы ведения бизнеса всего Банка.</u></b><br/>Самостоятельно находит и использует лучшие способы повышения квалификации, показывает значительный прогресс в саморазвитии,  делится опытом с коллегами и подчиненными, проявляет инициативу по внедрению данных способов для всего Банка.<br/>Формирует среду, в которой поощряются саморазвитие, профессиональный и личностный рост, самореализация.<br/>Выполняет свой план развития в полной мере, успешно применяет полученные знания в работе, делится полученными знаниями с коллегами и подчиненными, предлагает конструктивные корректировки плана развития, предвосхищающие требования бизнеса.<br/>План развития синхронизирован с реализацией глобальных проектов, стратегии Банка.',
	'comps_id': 3,
	'order': 5
}, {
	'id': 16,
	'name': 'Некорректно общается, провоцирует конфликты в отношении коллег и подчиненных.<br/><b><u>Замалчивает возникающие проблемы в подразделении, что приводит к значительному ухудшению сложившейся ситуации.</u></b><br/>Искажает необходимую для коллег информацию и подчиненных.',
	'comps_id': 4,
	'order': 1
}, {
	'id': 17,
	'name': 'Допускает некорректные высказывания по отношению к коллегам и подчиненным, переходит на личности.<br/><b><u>Несвоевременно сообщает о возникающих проблемах в подразделении.</u></b><br/>Организует работу своего подразделения таким образом, что коллегам предоставлена  информация низкого качества и с нарушением сроков.',
	'comps_id': 4,
	'order': 2
}, {
	'id': 18,
	'name': 'Способствует формированию культуры общения в рамках своего подразделения, делится опытом с коллегами и подчиненными.<br/><b><u>Всегда открыт и честен с коллегами и подчиненными,  помогает в разрешении конфликтных ситуаций, принимает конструктивную сторону, примиряет позиции.</u></b><br/>Предвосхищает потребность коллег и подчиненных в информации,которая может быть им полезна или интересна, успешно организует предоставление данной информации, выступает инициатором совместного обмена информацией.',
	'comps_id': 4,
	'order': 3
}, {
	'id': 19,
	'name': 'Формирует атмосферу доверия и открытости не только в своем подразделении, но и в рамках ФБ/ТБ/ПЦП.<br/>Разрешает серьезные конфликты между коллегами и подразделениями на взаимовыгодных условиях и исходя из целей Банка.<br/><b><u>Образец честности и открытости в своей деятельности, задает стандарты открытого/доверительного взаимодействия в команде.</u></b><br/>Работа его подразделения - пример своевременного и качественного предоставления информации смежным подразделениям, процесс совместного обмена полезной информацией в подразделении успешно реализован',
	'comps_id': 4,
	'order': 4
}, {
	'id': 20,
	'name': 'Продвигает в Банке/банковской группе культуру открытости, взаимного доверия и сотрудничества.<br/><b><u>Задает стандарты сотрудничества и открытости в рамках всего Банка.</u></b><br/>Формирует среду, в которой кросс-функциональные проекты становятся источником ценных идей и взаимодополняющего опыта.',
	'comps_id': 4,
	'order': 5
}, {
	'id': 21,
	'name': '<b><u>Равнодушен и безучастен к трудностям и потребностям коллег и подчиненных, отказывает им в помощи: это не мои проблемы.</u></b><br/>Ставит свои интересы и интересы своего подразделения выше интересов коллег, в ущерб команде, провоцирует конфликт интересов.<br/>Препятствует командному взаимодействию своих подчиненных.',
	'comps_id': 5,
	'order': 1
}, {
	'id': 22,
	'name': '<b><u>Неохотно соглашается помогать коллегам и смежным подразделениям, оказывает им поддержку, только если это предусмотрено регламентами либо по прямому указанию руководства.</u></b><br/>Замыкается на выполнении задач своего подразделения, не поддерживает компромиссные решения.<br/>Не уделяет внимания организации командного взаимодействия среди своих подчиненных (в части системной работы).',
	'comps_id': 5,
	'order': 2
}, {
	'id': 23,
	'name': '<b><u>Всегда помогает коллегам, даже если это требует значительных дополнительных усилий, делится опытом с коллегами и подчиненными.</u></b><br/>Лидер в командном взаимодействии, успешно организует кросс-функциональную работу, находит компромиссные решения для всех подразделений участвующих в совместных проектах.<br/>Процесс взаимодействия в команде реализован успешно, функции четко распределены между подчиненными, работа коллектива слажена.',
	'comps_id': 5,
	'order': 3
}, {
	'id': 24,
	'name': '<b><u>Всегда помогает коллегам, не только в рамках подразделения, но и на уровне функционального блока/ТБ/ПЦП</u></b>, ставит интересы команды выше личных, но не в ущерб выполнению собственных задач.<br/>Продвигает культуру взаимопомощи и командного взаимодействия на уровне функционального блока/ТБ/ПЦП, задает стандарты сотрудничества, побуждает к их выполнению.<br/>Его команда - образец взаимопомощи и поддержки, даже в сложных/нестандартных ситуациях.',
	'comps_id': 5,
	'order': 4
}, {
	'id': 25,
	'name': '<b><u>Всегда помогает коллегам, не только на уровне функционального блока/ТБ/ПЦП</u></b>, но и в рамках Банка, ставит интересы Банка выше личных, но не в ущерб выполнению собственных задач.<br/>Продвигает в Банке принципы взаимопомощи и командного взаимодействия, задает стандарты сотрудничества в рамках всего Банка.<br/>Формирует среду, в которой взаимовыгодные кросс-функциональные проекты являются поводом к развитию функций в Банке в целом',
	'comps_id': 5,
	'order': 5
}, {
	'id': 26,
	'name': '<b><u>Подразделение в его подчинении предоставляет услуги низкого качества.</u></b><br/>Позволяет себе либо своим подчиненным некорректные высказывания, грубость в общении с клиентами (внешними / внутренними).',
	'comps_id': 6,
	'order': 1
}, {
	'id': 27,
	'name': '<b><u>Относится к качеству услуг предоставляемых его подразделением формально, не проводит системной работы по улучшению качества услуг.</u></b><br/>Допускает ошибки либо незначительные отклонения от стандартов обслуживания, не следит за качеством и сроками предоставляемых подразделением услуг.',
	'comps_id': 6,
	'order': 2
}, {
	'id': 28,
	'name': '<b><u>Организует работу так, что его подразделение предоставляет услуги высокого качества, даже в нестандартных и сложных ситуациях.</u></b><br/>Работает с полной самоотдачей и вовремя подключает дополнительные ресурсы.<br/>Формирует в команде ориентацию на качество и своевременность предоставления услуг, относится к клиенту как к самому важному человеку.',
	'comps_id': 6,
	'order': 3
}, {
	'id': 29,
	'name': '<b><u>Предоставляет услуги высокого качества (даже в сложных/нестандартных ситуациях), о которых клиенты отзываются с восхищением.</u></b><br/>Его команда задает стандарты качества услуг не только в рамках подразделения, но и на  уровне функционального блока/ТБ/ПЦП.',
	'comps_id': 6,
	'order': 4
}, {
	'id': 30,
	'name': '<b><u>Добивается высокого качества обслуживания клиентов, которое служит эталоном в рамках Банка.</u></b><br/>Его команда задает стандарты качества услуг в рамках Банка в целом.',
	'comps_id': 6,
	'order': 5
}, {
	'id': 31,
	'name': '<b><u>Подразделение в его подчинении системно не удовлетворяет потребности клиентов,</u></b> игнорирует недовольство и конструктивную критику клиентов (внешних/внутренних).<br/>Бросает клиентов наедине со своими проблемами.',
	'comps_id': 7,
	'order': 1
}, {
	'id': 32,
	'name': '<b><u>Не старается удовлетворить потребности клиентов,</u></b> воспринимает обратную связь от клиентов, но не меняет свою работу.<br/>Формально относится к проблемам клиентов (внешних/внутренних)',
	'comps_id': 7,
	'order': 2
}, {
	'id': 33,
	'name': '<b><u>Успешно выявляет и удовлетворяется потребности клиента,</u></b> регулярно и своевременно корректирует свою работу и работу своей команды в соответствии с обратной связью от клиентов.<br/>Устраняет организационные барьеры для решения проблем клиента.',
	'comps_id': 7,
	'order': 3
}, {
	'id': 34,
	'name': '<b><u>Предвосхищает потребности каждого клиента (внешнего/внутреннего),</u></b> обратная связь от клиентов - основа для принятия управленческих решений.<br/>Формирует культуру приоритета интересов клиента, успешно транслирует ее коллегам и подчиненным.',
	'comps_id': 7,
	'order': 4
}, {
	'id': 35,
	'name': 'Организует работу подразделения так, чтобы действововать на опережение, <b><u>значительно предвосхищать ожидания клиента.</u></b><br/>Формирует и продвигает в рамках Банка культуру приоритета интересов клиента.',
	'comps_id': 7,
	'order': 5
}]

export { list_comp_classes, list_comps, list_comps_values }
