const languageButtons = Array.from(document.querySelectorAll("[data-lang]"));
const defaultText = new Map(
  Array.from(document.querySelectorAll("[data-i18n]")).map((element) => [
    element.dataset.i18n,
    element.textContent,
  ]),
);

const dictionary = {
  ko: {
    brand: "조예은",
    navResearch: "연구",
    navContents: "목차",
    navApplied: "응용 연구",
    navAbout: "소개",
    navCV: "이력",
    navContact: "연락",
    tocLabel: "목차",
    tocTitle: "연구 경험",
    tocDhuCapability: "비판적 탐구",
    tocDhuTheme: "AI, 인간성, 생성형 AI",
    tocDhuMeta: "DHU436 · AI, 문학과 문화",
    tocEnv361Capability: "인터페이스 너머의 인간 행동",
    tocEnv361Theme: "온라인 정보에서 오프라인 참여로",
    tocEnv361Meta: "ENV361 · 소셜미디어와 환경주의",
    tocEnv338Capability: "데이터 분석과 시각화",
    tocEnv338Theme: "원자료에서 시각적 인사이트로",
    tocEnv338Meta: "ENV338 · 환경 연구 데이터와 의사결정",
    tocEnv421Capability: "혼합방법 연구",
    tocEnv421Theme: "여러 형태의 근거를 통한 이해",
    tocEnv421Meta: "ENV421 · 사회 및 환경 변화를 위한 커뮤니티 연구",
    heroKicker: "HCI · 인간-AI 상호작용 · 인지과학",
    heroLine: "사람들이 AI 생성 정보를 어떻게 해석하고, 신뢰하고, 행동으로 옮기는지 탐구합니다.",
    heroSupport1: "제 연구 관심은 인간 행동과 AI가 매개하는 상호작용의 교차점에 있습니다.",
    heroSupport2: "융합적 연구 경험을 통해 비판적 탐구, 인간 중심 사고, 데이터 분석, 시각화, 혼합방법 행동 연구를 아우르는 연구 도구를 발전시켰습니다.",
    explore: "연구 살펴보기 ↓",
    currentLabel: "현재 연구 관심",
    currentQuestion: "사람들은 언제 AI를 신뢰할지 어떻게 판단하며, 그 신뢰는 다음 행동을 어떻게 형성하는가?",
    journeyLabel: "여기까지 온 과정",
    journeyTitle: "네 개의 프로젝트. 사람, 정보, 행동을 이해하는 네 가지 방식.",
    journeyNote: "이 프로젝트들은 인간-AI 상호작용 연구가 아닙니다. 함께 보면 AI 신뢰, 의존, 판단, 의사결정, 자기노출에 관한 질문으로 가져가고 싶은 연구 도구를 구축한 과정입니다.",
    journey1: "AI에 대한 비판적 평가",
    journey2: "인간 중심 사고",
    journey3: "데이터 분석과 시각화",
    journey4: "혼합방법 행동 연구",
    journey5: "인간-AI 상호작용",
    currentDirection: "현재 방향",
    questionLabel: "연구 질문",
    insightLabel: "배운 점",
    dhuKeyArgumentText: "인공 존재가 인간에 가까워지려 할수록,\n역설적으로 인간이 무엇을 ‘인간답다’고 판단하는지가\n더욱 분명하게 드러납니다.",
    dhuOriginalLabel: "원본 작업",
    dhuOriginalProject: "최종 프로젝트",
    dhuOriginalCta: "전체 프로젝트 보기 ↗",
    dhuTitle: "AI 생성 콘텐츠에 대한 비판적 평가",
    dhuSub: "AI 결과물을 단순히 받아들이기보다 질문하는 법을 배웠습니다.",
    dhuQuestion: "사람들은 생성형 AI가 만든 정보를 어떻게 평가해야 하는가?",
    dhuContext: "DHU436에서 저는 제 글과 생성형 AI가 만든 버전을 비교하며 명확성, 구조, 분석적 깊이, 인간적 목소리의 차이를 비판적으로 평가했습니다.",
    dhuContext2: "AI는 간결성과 구조를 개선할 수 있었지만, 답변이 일반적이고 피상적이며 인간 글쓰기의 분석적 깊이와 멀어질 수도 있었습니다.",
    dhuP1: "인간 글쓰기",
    dhuP2: "AI 생성 버전",
    dhuP3: "비판적 비교",
    dhuP4: "인간 판단",
    dhuP5: "수정",
    dhuLearn: "AI 결과물이 명확하거나 구조적이라는 이유만으로 본질적으로 유용한 것은 아닙니다. 깊이, 관련성, 목소리, 의미를 평가하기 위해서는 인간 판단이 여전히 필요합니다.",
    dhuConnect: "→ 이 경험은 사람들이 AI 생성 정보를 어떻게 평가하고, 신뢰하고, 의존하는지에 대한 관심으로 이어졌습니다.",
    pandoSub: "인터페이스를 넘어선 디자인",
    pandoSub2: "사람들이 화면을 떠난 뒤 무엇을 하는지 생각하기.",
    pandoQuestion: "디지털 플랫폼은 사람들을 온라인 참여에서 실제 행동으로 어떻게 이동시킬 수 있는가?",
    pandoContext: "Pando는 환경 콘텐츠에 대한 수동적 참여와 의미 있는 환경 행동 사이의 간극에 대응해 설계되었습니다.",
    pandoContext2: "이 플랫폼은 정보를 청원, 행사, 봉사, 커뮤니티 프로젝트, 지속가능성 챌린지와 연결했습니다.",
    pandoPath1: "정보",
    pandoPath2: "참여 유도",
    pandoPath3: "참여",
    pandoPath4: "오프라인 행동",
    pandoF1: "정보",
    pandoF2: "커뮤니티",
    pandoF3: "지역 행사",
    pandoF4: "봉사",
    pandoF5: "오프라인 행동",
    pandoLearn: "인간 중심 디자인은 사람들이 인터페이스를 사용할 수 있는지에만 관한 것이 아닙니다. 상호작용 이후 사람들이 무엇을 하는지 이해하는 일이기도 합니다.",
    env361OriginalProject: "최종 프로젝트",
    env361OriginalProjectCta: "프로젝트 보고서 보기 ↗",
    env361OriginalPresentation: "최종 발표",
    env361OriginalPresentationCta: "발표 자료 보기 ↗",
    env338Title: "원자료를 해석 가능한 패턴으로 바꾸기",
    env338Sub: "데이터 시각화를 연구 도구로 사용하기.",
    env338Question: "인간 활동은 캠퍼스의 단기 PM2.5 패턴에 어떤 영향을 미치는가?",
    env338Context: "서로 다른 환경 및 인간 활동 조건을 비교하기 위해 세 차례의 현장 세션에서 PM2.5 측정값을 수집하고 분석했습니다.",
    s1: "기초 탐색",
    s1p: "넓은 캠퍼스 경로",
    s2: "높은 활동",
    s2p: "푸드트럭 구역 / 점심시간",
    s3: "비교 조건",
    s3p: "같은 지역 / 비 / 낮은 보행자 활동",
    env338P1: "현장 관찰",
    env338P2: "센서 데이터",
    env338P3: "시각화",
    env338P4: "패턴 발견",
    env338P5: "해석",
    session2: "세션 2",
    session2p: "가장 높은 PM2.5 급증",
    session3: "세션 3",
    session3p: "더 낮고 안정적인 측정값",
    env338Learn: "시각화는 결과를 제시하는 방식일 뿐 아니라, 원자료에서 보기 어려운 패턴을 식별하는 분석 도구로도 기능할 수 있습니다.",
    env338CoverMeta: "ENV338 · 환경 연구 데이터와 의사결정",
    env338CoverKicker: "03 / 연구 경험",
    env338CoverUni: "토론토대학교",
    env338CoverTitle: "환경 데이터와 시각화",
    env338CoverSub: "원자료에서 시각적 인사이트로",
    env338Tag1: "PM2.5 데이터",
    env338Tag2: "데이터 시각화",
    env338Tag3: "샘플링 조건",
    env338Tag4: "시각 분석",
    env338ContextLabel: "데이터의 맥락",
    env338ContextTitle: "환경 패턴을 보이게 만들기",
    env338ContextP1: "환경 데이터는 원자료 수치만으로 해석하기 어려울 수 있습니다.",
    env338ContextP2: "토론토대학교 캠퍼스에서 수집한 PM2.5 데이터를 활용해, 위치와 샘플링 조건에 따른 차이를 시각화를 통해 어떻게 식별하고 비교할 수 있는지 탐구했습니다.",
    env338CoreQuestionLabel: "핵심 질문",
    env338CoreQuestion: "시각화는 환경 데이터의 의미 있는 패턴을 드러내는 데 어떻게 도움을 줄 수 있는가?",
    env338ConditionsTitle: "세 가지 샘플링 조건",
    env338ConditionsP: "PM2.5 데이터는 서로 다른 캠퍼스 및 환경 조건을 중심으로 설계한 세 차례의 세션에서 수집했습니다.",
    env338Cond1Title: "탐색적 캠퍼스 경로",
    env338Cond1P: "서로 다른 캠퍼스 환경을 포함한 넓은 범위의 샘플링.",
    env338Cond2Title: "점심시간 구역",
    env338Cond2P: "점심시간 푸드트럭 구역을 중심으로 한 집중 샘플링.",
    env338Cond3Title: "비 오는 낮은 활동 조건",
    env338Cond3P: "비가 오고 활동량이 낮은 조건에서 같은 구역을 다시 샘플링.",
    env338Proc1: "수집",
    env338Proc2: "시각화",
    env338Proc3: "비교",
    env338Proc4: "해석",
    env338VisualsTitle: "패턴 시각화하기",
    env338VisualsSub: "데이터가 어디서, 언제 달라졌는지 보기",
    env338SpatialLabel: "공간적 보기",
    env338MapPlaceholder: "PM2.5 샘플링 지도 시각화",
    env338AssetPending: "프로젝트 시각화 자료 연결 예정",
    env338SpatialQuestion: "변화는 어디에서 나타났는가?",
    env338SpatialCaption: "측정값을 위치별로 매핑하면서 샘플링 경로의 공간적 차이를 더 쉽게 식별할 수 있었습니다.",
    env338TimeSeriesLabel: "시계열 보기",
    env338TimeSeriesPlaceholder: "실제 시계열 시각화",
    env338AssetPending3: "프로젝트 시각화 자료 연결 예정",
    env338TimeSeriesQuestion: "변화는 언제 나타났는가?",
    env338TimeSeriesCaption: "측정값을 시간의 흐름에 따라 시각화하면서, 원자료만으로는 파악하기 어려운 단기적인 변동과 측정 과정에서 나타난 변화를 더 쉽게 확인할 수 있었습니다.",
    env338CompareTitle: "조건 비교하기",
    env338CompareSub: "같은 측정값, 다른 패턴",
    env338Session1Viz: "세션 1 시각화",
    env338Session1Title: "세션 1",
    env338Session1Sub: "탐색적 샘플링",
    env338Session1P: "넓은 범위의 변화",
    env338Session2Viz: "세션 2 시각화",
    env338Session2Title: "세션 2",
    env338Session2Sub: "활동 피크",
    env338Session2P: "더 높은 변동성",
    env338Session3Viz: "세션 3 시각화",
    env338Session3Title: "세션 3",
    env338Session3Sub: "비교 조건",
    env338Session3P: "더 낮고 안정적",
    env338CrossLabel: "세션 간 비교",
    env338CrossTitle: "차이를 보기",
    env338CombinedPlaceholder: "통합 세션 비교 시각화",
    env338AssetPending2: "프로젝트 시각화 자료 연결 예정",
    env338CrossCaption: "세 세션을 하나의 시각적 비교로 모으면서 변동성, 분포, 단기적 급증의 차이를 더 쉽게 비교할 수 있었습니다.",
    env338Cap1: "세션 1",
    env338Cap1P: "넓은 범위의 변화",
    env338Cap2: "세션 2",
    env338Cap2P: "가장 높은 변동성",
    env338Cap3: "세션 3",
    env338Cap3P: "가장 낮고 안정적",
    env338InsightLabel: "시각화에서 인사이트로",
    env338InsightTitle: "무엇이 보이기 시작했는가?",
    env338Insight1: "공간적 차이",
    env338Insight1P: "측정값은 캠퍼스 내 여러 위치에 따라 달라졌습니다.",
    env338Insight2: "단기 변동",
    env338Insight2P: "시각화는 원자료만으로는 식별하기 어려운 변동을 더 쉽게 파악하게 했습니다.",
    env338Insight3: "조건 간 차이",
    env338Insight3P: "세션을 비교하면서 샘플링 조건에 따른 분포와 변동성의 차이를 확인할 수 있었습니다.",
    env338AnalysisLabel: "추가 시각화 탐색",
    env338AnalysisTitle: "다른 보기, 다른 질문",
    env338AnalysisP: "추가 시각화 연습으로 환경 데이터를 여러 시각적 형식으로 탐색하며, 서로 다른 표현 방식이 데이터셋의 다른 차원을 어떻게 드러낼 수 있는지 살펴보았습니다.",
    env338Type1: "분포",
    env338Type1P: "데이터는 어떻게 분포되어 있는가?",
    env338Type2: "시계열",
    env338Type2P: "변화는 언제 나타나는가?",
    env338Type3: "공간 지도",
    env338Type3P: "변화는 어디에서 나타나는가?",
    env338AnalysisInsightLabel: "핵심 아이디어",
    env338AnalysisInsight: "서로 다른 시각화는 같은 데이터의 서로 다른 차원을 드러냅니다.",
    env338ReflectionLabel: "회고",
    env338ReflectionTitle: "배운 점",
    env338Reflect1: "패턴 보기",
    env338Reflect1P: "이 프로젝트를 통해 시각화를 단순히 결과를 보여주는 방식이 아니라 분석 과정의 일부로 활용하는 방법을 배웠습니다.",
    env338Reflect2: "근거 비교하기",
    env338Reflect2P: "동일한 유형의 측정값을 서로 다른 샘플링 조건에서 비교하면서, 시각화 방식이 원자료만으로 파악하기 어려운 패턴과 변동성, 조건 간 차이를 탐색하는 데 어떻게 도움을 줄 수 있는지 배웠습니다.",
    env338Reflect3: "복잡성 전달하기",
    env338Reflect3P: "데이터에서 무엇을 이해하고 전달하려는지에 따라 시각화 방식을 선택해야 한다는 점을 배웠습니다.",
    env338KeyInsightLabel: "핵심 인사이트",
    env338KeyInsight: "시각화는 데이터를 전달하는 방식일 뿐만 아니라, 데이터와 함께 사고하는 방식입니다.",
    env338OriginalLabel: "원본 작업",
    env338OriginalReport: "최종 분석",
    env338OriginalCta: "전체 분석 보고서 보기 ↗",
    env421CoverMeta: "ENV421 · 사회 및 환경 변화를 위한 커뮤니티 연구",
    env421CoverUni: "토론토대학교",
    env421CoverTitle: "혼합방법 연구",
    env421CoverSub: "여러 형태의 근거로 음식물 쓰레기 이해하기",
    env421ContextLabel: "연구 맥락",
    env421ContextTitle: "캠퍼스 다이닝의 음식물 쓰레기 이해하기",
    env421ContextP1: "MealCare와 함께 University of Toronto campus dining halls에서 발생하는 post-consumption food waste를 조사한 community-based research project입니다.",
    env421ContextP2: "Food waste를 단순히 폐기량의 문제로만 바라보기보다, 학생들의 행동과 food waste가 발생하는 dining environment의 맥락을 함께 조사했습니다.",
    env421QuestionLabel: "연구 질문",
    env421QuestionText: "캠퍼스 다이닝 환경에서 음식물 쓰레기에 기여하는 행동적·운영적 요인은 무엇인가?",
    env421PartnerLabel: "커뮤니티 파트너",
    env421PartnerName: "MealCare · 토론토대학교",
    env421ApproachLabel: "연구 접근",
    env421ApproachTitle: "여러 방법을 통해 행동 연구하기",
    env421ApproachIntro: "하나의 데이터만으로 food-waste behavior를 설명하기보다, 서로 다른 연구 방법을 결합하여 행동과 그 맥락을 여러 관점에서 조사했습니다.",
    env421Method1: "설문",
    env421Method1Q: "학생들은 무엇을 보고하는가?",
    env421Method1N: "학생 154명",
    env421Method1P: "자기보고 경험, 행동, 관점",
    env421Method2: "음식물 쓰레기 감사 및 현장 관찰",
    env421Method2Q: "실제로 무엇이 버려지는가?",
    env421Method2N: "다이닝홀 4곳",
    env421Method2P: "맥락 속 post-consumption food waste 관찰",
    env421Method3: "직원 인터뷰",
    env421Method3Q: "운영적으로는 무슨 일이 일어나는가?",
    env421Method3N: "운영 관점",
    env421Method3P: "다이닝 운영 방식, 제약, 개입 방안",
    env421Eq1: "설문",
    env421Eq2: "현장 근거",
    env421Eq3: "운영 맥락",
    env421EqResult: "같은 행동에 대한\n여러 관점",
    env421ContributionLabel: "나의 기여",
    env421ContributionTitle: "설문 연구와 현장 연구",
    env421ContributionIntro: "전체 연구 과정에 참여했으며, 특히 student survey research와 field data collection을 중심으로 연구를 수행했습니다.",
    env421SurveyFocusLabel: "설문 연구",
    env421SurveyFocusTitle: "주요 담당",
    env421SurveyStep1: "설계",
    env421SurveyStep2: "방법론",
    env421SurveyStep3: "데이터 수집",
    env421SurveyStep4: "분석",
    env421SurveyStep5: "결과",
    env421SurveyFocusP: "Survey component를 중심으로 설문 접근 방식과 methodology를 구성하고, 학생 응답을 수집·분석하여 food waste와 관련된 주요 패턴을 파악했습니다.",
    env421FieldFocusLabel: "현장 연구",
    env421FieldFocusTitle: "Canada Room Dining Hall",
    env421FieldFocusMeta: "St. Michael's College · 토론토대학교",
    env421FieldStep1: "관찰",
    env421FieldStep2: "기록",
    env421FieldStep3: "측정",
    env421FieldFocusP: "St. Michael's College의 Canada Room Dining Hall에서 현장 데이터 수집에 참여하여 structured food-waste audit를 수행하고 실제 dining environment에서 나타나는 식사 및 폐기 행동을 관찰했습니다.",
    env421CommP: "Final research presentation에서는 연구의 background와 MealCare partnership을 설명하는 부분을 담당했습니다.",
    env421SurveyLabel: "설문 결과",
    env421SurveyTitle: "학생들이 말한 것",
    env421StudentsSurveyed: "설문 응답 학생",
    env421SurveyViz: "설문 시각화 연결 영역",
    env421AssetPending: "실제 프로젝트 자료 연결 예정",
    env421Finding1Label: "결과 01",
    env421Finding1Title: "어떤 음식이 가장 자주 버려졌는가?",
    env421Discard1: "탄수화물",
    env421Discard2: "채소 및 과일",
    env421Discard3: "단백질",
    env421Finding1P: "탄수화물은 가장 자주 보고된 폐기 음식 범주였습니다.",
    env421Finding2Label: "결과 02",
    env421Finding2Title: "양의 문제를 넘어서",
    env421Finding2Statement: "음식 양만으로는 음식물 쓰레기를 설명할 수 없었습니다.",
    env421Factor1: "맛 부족",
    env421Factor2: "덜 익음",
    env421Factor3: "변동하는 식욕",
    env421Factor4: "식사 행동과 주의",
    env421Finding2P: "학생 응답에서는 음식 양뿐 아니라 맛, 덜 익은 음식, 변동하는 식욕 등 다양한 이유가 나타났으며, 음식물 쓰레기를 하나의 요인만으로 설명하기 어렵다는 점을 확인했습니다.",
    env421Finding3Label: "결과 03",
    env421PrefLabel: "설문 결과",
    env421PrefTitle: "학생들은 어떤 개입 방식을 선호했는가?",
    env421Pref1: "유연한 양 선택",
    env421Pref2: "전체 양을 받기 전 시식",
    env421Pref3: "남은 음식 퇴비화",
    env421PrefP: "학생들은 폐기 전에 음식물 쓰레기를 줄일 수 있는 예방적 전략을 더 선호하는 경향을 보였습니다.",
    env421FieldLabel: "현장 연구",
    env421FieldTitle: "자기보고에서 관찰된 행동으로",
    env421FieldSub: "Canada Room Dining Hall · St. Michael's College",
    env421FieldViz: "현장 연구 / 감사 사진 연결 영역",
    env421Audit1: "먹을 수 있는 잔반",
    env421Audit1P: "관찰된 접시 중 먹을 수 있는 잔반이 포함된 비율",
    env421Audit2: "추정 음식물 쓰레기",
    env421Audit2P: "감사 기간 동안의 추정량",
    env421Audit3: "접시당 평균 쓰레기",
    env421Audit3P: "접시당 추정 평균",
    env421Weekend: "주말",
    env421WeekendP: "관찰된 접시 124개\n먹을 수 있는 잔반이 있는 접시 47개\n37.9%",
    env421Weekday: "평일",
    env421WeekdayP: "관찰된 접시 300개\n먹을 수 있는 잔반이 있는 접시 117개\n39.0%",
    env421FieldP: "Field research를 통해 self-reported survey responses뿐 아니라 실제 dining environment에서 나타나는 food-waste behavior를 직접 관찰하고 기록할 수 있었습니다.",
    env421SynthesisLabel: "혼합방법 종합",
    env421SynthesisTitle: "맥락 속에서 행동 이해하기",
    env421Syn1: "설문",
    env421Syn1Q: "학생들이 말한 것",
    env421Syn1P: "경험 · 이유 · 선호",
    env421Syn2: "감사와 관찰",
    env421Syn2Q: "맥락 속에서 일어난 것",
    env421Syn2P: "잔반 · 폐기 · 다이닝 행동",
    env421Syn3: "직원 인터뷰",
    env421Syn3Q: "직원이 설명한 것",
    env421Syn3P: "운영 방식 · 프로토콜 · 운영 맥락",
    env421SynResult: "음식물 쓰레기 행동에 대한\n더 완전한 그림",
    env421SynP: "각 연구 방법은 동일한 행동 문제의 서로 다른 측면을 보여주었습니다.",
    env421TranslationLabel: "연구의 전환",
    env421TranslationTitle: "근거에서 제안으로",
    env421TransStep1: "근거",
    env421TransStep2: "해석",
    env421TransStep3: "제안",
    env421Level1: "행동적 발견",
    env421Level1Title: "근거가 보여준 것",
    env421Level1P: "음식 선택\n맛과 주의\n다이닝 행동",
    env421Level2: "예방적 개입",
    env421Level2Title: "쓰레기가 발생하기 전",
    env421Level2P: "유연한 양 선택\nTry-Before-You-Commit 시식\n학생 인식 개입",
    env421Level3: "제도적 제안",
    env421Level3Title: "환경 바꾸기",
    env421Level3P: "정기 폐기물 감사와 설문\n다이닝홀 협력 개선\n음식 재분배 / 커뮤니티 냉장고 인식",
    env421Rec1: "유연한 양 선택",
    env421Rec2: "전체 양을 받기 전 시식",
    env421Rec3: "학생 인식 개입",
    env421Rec4: "정기 폐기물 감사와 설문",
    env421Rec5: "다이닝홀 협력 개선",
    env421Rec6: "음식 재분배 / 커뮤니티 냉장고 인식",
    env421TranslationP: "연구 결과를 단순히 기록하는 데서 끝내지 않고, MealCare와 campus dining stakeholders가 활용할 수 있는 실질적인 intervention 방향으로 연결했습니다.",
    env421ReflectionLabel: "회고",
    env421ReflectionTitle: "여러 방법을 통해 연구하기",
    env421ReflectionSub: "배운 점",
    env421ReflectionP1: "이 프로젝트를 통해 하나의 research question을 여러 형태의 evidence를 통해 조사하는 과정을 경험했습니다.",
    env421ReflectionP2: "연구에서는 survey research, field observation, structured waste audit, staff interview를 함께 활용했으며, 각 방법은 연구 질문의 서로 다른 측면을 보여주었습니다.",
    env421ReflectionP3: "이러한 findings를 함께 살펴보면서 각 연구 방법이 무엇을 보여줄 수 있는지, 그리고 서로 다른 evidence를 어떻게 함께 해석할 수 있는지를 배웠습니다.",
    env421EvidenceSurvey: "설문",
    env421EvidenceSurveyP: "자기보고 경험과\n관점",
    env421EvidenceField: "현장 관찰과\n구조화된 감사",
    env421EvidenceFieldP: "맥락 속 행동",
    env421EvidenceInterview: "직원 인터뷰",
    env421EvidenceInterviewP: "운영 관점",
    env421EvidenceSynthesis: "종합",
    env421EvidenceSynthesisP: "여러 형태의\n근거 연결하기",
    env421KeyInsightLabel: "핵심 인사이트",
    env421KeyInsight: "서로 다른 연구 방법은\n인간 행동의 서로 다른 부분을 보여줍니다.",
    env421KeyInsightSub: "자기보고 경험, 관찰된 행동, 운영 관점을 결합하면서 연구 질문을 더 입체적으로 이해할 수 있었습니다.",
    env421OriginalLabel: "원본 작업",
    env421OriginalOutput: "최종 연구 보고서",
    env421OriginalCta1: "전체 연구 보고서 보기 ↗",
    env421OriginalPresentation: "최종 연구 발표",
    env421OriginalCta2: "발표 보기 ↗",
    toolkitLabel: "나의 연구 도구",
    toolkitTitle: "인간-AI 상호작용을 연구하기 위한 전이 가능한 방법들.",
    tool1: "비판적 탐구",
    tool1p: "주장, 근거, 한계, AI 생성 정보를 평가하기.",
    tool2: "인간 중심 사고",
    tool2p: "상호작용을 행동과 실제 맥락의 관계 속에서 이해하기.",
    tool3: "데이터와 시각화",
    tool3p: "경험적 데이터를 수집, 비교, 시각화, 해석하기.",
    tool4: "혼합방법 연구",
    tool4p: "설문, 인터뷰, 관찰, 현장 연구, 삼각검증.",
    directionLabel: "현재 연구 방향",
    directionQuestion: "신뢰는 사람들이 AI를 해석하고, 의존하고, 상호작용하는 방식을 어떻게 형성하는가?",
    directionText: "저는 AI 시스템이 전달하는 것과 사람들이 실제로 그것을 해석하고, 신뢰하고, 행동으로 옮기는 방식 사이의 간극에 관심이 있습니다. 이러한 질문을 인간 중심적이고 경험적인 방법으로 연구하고자 합니다.",
    appliedLabel: "응용 연구",
    appliedTitle: "소비자 행동 연구 · Anua 사례 연구",
    appliedMeta: "The Founders · 2026",
    surveyRespondents: "설문 응답자",
    inDepth: "심층",
    consumerResearch: "소비자 연구",
    patterns: "행동 패턴",
    insights: "소비자 인사이트",
    strategy: "근거 기반 전략",
    appliedNote: "이 프로젝트는 산업 맥락에서 행동 연구와 소비자 분석을 적용한 경험을 보여줍니다. 인간-AI 상호작용 연구로 포장하지 않습니다.",
  },
  en: {
    dhuKeyArgumentText: "The closer artificial beings come to resembling humans,\nthe more clearly they reveal what humans consider\nto be distinctly “human.”",
    env421EqResult: "Multiple Perspectives\non the Same Behavior",
    env421SynResult: "A More Complete Picture\nof Food-Waste Behavior",
    env421EvidenceSurveyP: "Self-Reported Experiences\n& Perspectives",
    env421EvidenceField: "Field Observation\n& Structured Audit",
    env421EvidenceSynthesisP: "Connecting Multiple\nForms of Evidence",
    env421Level1P: "Food choice\nTaste and attention\nDining behavior",
    env421Level2P: "Flexible Serving Options\nTry-Before-You-Commit Taste Tests\nStudent Awareness Interventions",
    env421Level3P: "Regular Waste Audits & Surveys\nImproved Dining Hall Collaboration\nFood Redistribution / Community-Fridge Awareness",
    env421KeyInsight: "Different methods reveal different parts\nof human behavior.",
    env421KeyInsightSub: "Combining self-reported experiences, observed behavior, and operational perspectives provided a more complete understanding of the research question.",
    env421OriginalOutput: "Final Research Report",
  },
};

const textNodeDefaults = new WeakMap();
const textNodeDictionary = {
  ko: {
    "Contents": "목차",
    "Project Overview": "프로젝트 개요",
    "Research Question": "연구 질문",
    "Research / Design Question": "연구 / 디자인 질문",
    "Findings / Reflection": "결과 / 회고",
    "Findings Through Visualization": "시각화를 통한 발견",
    "Mixed-Methods Findings": "혼합방법 연구 결과",
    "Audit Findings": "감사 결과",
    "Three Sampling Conditions": "세 가지 샘플링 조건",
    "Three Primary Texts": "세 주요 텍스트",
    "Approach": "접근 방식",
    "Project Overview": "프로젝트 개요",
    "AI as a Mirror for Humanity": "인간성을 비추는 거울로서의 AI",
    "Artificial beings in literature were examined as a way to investigate how humans define identity, emotion, relationships, and belonging.": "문학 속 인공 존재를 통해 인간이 정체성, 감정, 관계, 소속을 어떻게 정의하는지 탐구했습니다.",
    "The more artificial beings attempt to become human,\nthe more they reveal the boundaries through which humanity defines itself.": "인공 존재가 인간이 되려고 할수록,\n인간성이 정의되는 경계가 더 분명하게 드러납니다.",
    "Human-like emotion alone did not guarantee recognition as human.": "인간과 유사한 감정만으로는 인간으로 인정받기에 충분하지 않았습니다.",
    "Replicating behavior raised questions about whether identity can truly be reproduced.": "행동의 재현은 정체성이 실제로 재현될 수 있는지에 대한 질문을 만들었습니다.",
    "Relationships and emotional connection emerged as important boundaries between human and artificial beings.": "관계와 감정적 연결은 인간과 인공 존재를 구분하는 중요한 경계로 드러났습니다.",
    "What interested me was not simply how well AI imitates humans,\nbut how humans interpret and judge what AI produces.": "제가 관심을 갖게 된 것은 AI가 인간을 얼마나 잘 모방하는지가 아니라,\n인간이 AI의 결과물을 어떻게 해석하고 판단하는가였습니다.",
    "AI could produce clear and human-like writing, but evaluating whether its interpretation was meaningful still required human judgment.": "AI는 명확하고 인간처럼 보이는 글을 만들 수 있었지만, 그 해석이 의미 있는지 평가하는 데에는 여전히 인간의 판단이 필요했습니다.",
    "A conceptual social platform developed to explore how climate communication could move beyond information sharing toward meaningful participation.": "기후 커뮤니케이션이 정보 공유를 넘어 의미 있는 참여로 이어질 수 있는지 탐구하기 위해 제안한 개념적 소셜 플랫폼입니다.",
    "Online reactions may remain within the platform without leading to further participation.": "온라인 반응은 추가적인 참여로 이어지지 않고 플랫폼 안에 머무를 수 있습니다.",
    "Endless streams of information can make relevant issues and concrete opportunities difficult to identify.": "끝없이 이어지는 정보는 관련 이슈와 구체적인 참여 기회를 찾기 어렵게 만들 수 있습니다.",
    "Unreliable information can undermine trust and make meaningful participation more difficult.": "신뢰하기 어려운 정보는 신뢰를 약화시키고 의미 있는 참여를 어렵게 만들 수 있습니다.",
    "How could a social platform help turn\nenvironmental information into real-world participation?": "소셜 플랫폼은 환경 정보를\n실제 참여로 어떻게 연결할 수 있는가?",
    "From Information to Offline Action": "온라인 정보에서 오프라인 행동으로",
    "Stories · Communities": "이야기 · 커뮤니티",
    "Events · Volunteering · Community Initiatives": "행사 · 봉사 · 커뮤니티 이니셔티브",
    "PANDO shifted my focus from what users see on an interface to what they are able to do after interacting with it.": "PANDO는 사용자가 인터페이스에서 무엇을 보는가보다, 상호작용 이후 무엇을 할 수 있는가로 관심을 옮기게 했습니다.",
    "PM2.5 measurements were collected across three campus sampling sessions under different activity and environmental conditions.": "서로 다른 활동 및 환경 조건에서 세 차례의 캠퍼스 PM2.5 측정 데이터를 수집했습니다.",
    "01 Exploratory Sampling": "01 탐색적 샘플링",
    "02 Peak Activity": "02 활동 피크",
    "03 Comparative Condition": "03 비교 조건",
    "Broad campus sampling across locations with different surrounding activities.": "서로 다른 주변 활동을 가진 캠퍼스 위치를 넓게 샘플링했습니다.",
    "Focused sampling around the food-truck corridor during lunch.": "점심시간 푸드트럭 구역을 중심으로 집중 샘플링했습니다.",
    "Same corridor measured again under rainy/lower-activity conditions.": "비가 오고 활동량이 낮은 조건에서 같은 구역을 다시 측정했습니다.",
    "Different visualizations revealed different dimensions of the same environmental dataset and made differences across conditions easier to compare.": "서로 다른 시각화는 같은 환경 데이터셋의 다른 차원을 드러내고, 조건 간 차이를 더 쉽게 비교하게 했습니다.",
    "Community-Based Food Waste Research": "커뮤니티 기반 음식물 쓰레기 연구",
    "MealCare Collaboration": "MealCare 협업",
    "A year-long community-based research project investigating food waste and dining behavior across University of Toronto dining halls.": "토론토대학교 다이닝홀의 음식물 쓰레기와 식사 행동을 조사한 1년간의 커뮤니티 기반 연구 프로젝트입니다.",
    "What behavioral and institutional factors contribute\nto food waste in university dining environments?": "대학 다이닝 환경에서 음식물 쓰레기에 기여하는\n행동적·제도적 요인은 무엇인가?",
    "Self-reported experiences\n& perspectives": "자기보고 경험과\n관점",
    "Observed behavior\nin context": "맥락 속에서\n관찰된 행동",
    "Survey Methodology · Survey Analysis & Findings · Food Waste Audit Participation · Canada Room Field Research · Observation & Data Collection · Interpretation": "설문 방법론 · 설문 분석과 결과 도출 · 음식물 쓰레기 감사 참여 · Canada Room 현장 연구 · 관찰과 데이터 수집 · 해석",
    "What Did Multiple Forms of Evidence Reveal?": "여러 형태의 근거는 무엇을 보여주었는가?",
    "Observed plates containing edible leftovers": "먹을 수 있는 잔반이 포함된 관찰 접시",
    "Beyond Portion Size": "양의 문제를 넘어서",
    "Poor Taste · Undercooking · Fluctuating Appetite · Eating Behavior & Attention": "맛 부족 · 덜 익음 · 변동하는 식욕 · 식사 행동과 주의",
    "Behavioral Findings → Preventive Interventions → Institutional Recommendations": "행동적 발견 → 예방적 개입 → 제도적 제안",
    "A single method revealed only part of the behavioral problem. Combining self-reported experiences, observed behavior, and operational perspectives provided a more complete understanding of the research question.": "하나의 방법만으로는 행동 문제의 일부만 볼 수 있었습니다. 자기보고 경험, 관찰된 행동, 운영 관점을 결합하면서 연구 질문을 더 입체적으로 이해할 수 있었습니다.",
    "DHU436 Case Study": "DHU436 케이스 스터디",
    "Research Experience": "연구 경험",
    "AI, Literature & Culture": "AI, 문학과 문화",
    "Featured Critical Project": "주요 비평 프로젝트",
    "AI as a Mirror for Humanity": "인간성을 비추는 거울로서의 AI",
    "Analytical Framework": "분석 프레임워크",
    "Cross-Text Analysis": "작품 간 비교 분석",
    "Human × Generative AI": "인간 × 생성형 AI",
    "Writing comparison and revision": "글쓰기 비교와 수정",
    "Reflection": "회고",
    "What I learned": "배운 점",
    "01 / Research Experience": "01 / 연구 경험",
    "Advanced Topics in Digital Humanities": "디지털 인문학 고급 주제",
    "University of Toronto": "토론토대학교",
    "Artificial Beings": "인공 존재",
    "Human Identity": "인간 정체성",
    "Generative AI": "생성형 AI",
    "Critical Inquiry": "비판적 탐구",
    "Advanced Topics in Digital Humanities · University of Toronto": "디지털 인문학 고급 주제 · 토론토대학교",
    "A course examining AI and artificial beings through questions of human identity, emotion, and relationships. Through critical analysis of artificial beings in literature and a generative AI writing experiment, the course explored the boundary between human and artificial, and the differences between human and AI-generated outputs.": "인간 정체성, 감정, 관계의 질문을 통해 AI와 인공 존재를 살펴본 수업입니다. 문학 속 인공 존재에 대한 비판적 분석과 생성형 AI 글쓰기 실험을 통해 인간과 인공적인 것의 경계, 그리고 인간 글쓰기와 AI 생성 결과물의 차이를 탐구했습니다.",
    "What can artificial beings reveal about how we understand humanity itself?": "인공 존재는 우리가 인간성을 이해하는 방식에 대해 무엇을 드러낼 수 있는가?",
    "Compared artificial beings across three works, analyzing how beings that resemble and seek to belong in human society reveal the boundary between the human and the non-human.": "세 작품의 인공 존재를 비교하며, 인간을 닮고 인간 사회에 속하려는 존재들이 인간과 비인간의 경계를 어떻게 드러내는지 분석했습니다.",
    "Primary Texts": "주요 텍스트",
    "Frankenstein": "프랑켄슈타인",
    "Klara and the Sun": "클라라와 태양",
    "Do Androids Dream of Electric Sheep?": "안드로이드는 전기양의 꿈을 꾸는가?",
    "Mary Shelley": "메리 셸리",
    "Kazuo Ishiguro": "가즈오 이시구로",
    "Philip K. Dick": "필립 K. 딕",
    "01 Limitation": "01 한계",
    "02 Paradox": "02 역설",
    "03 Human Identity": "03 인간 정체성",
    "Even if artificial beings can imitate human behavior and emotion, can that alone fully reproduce human experience and identity?": "인공 존재가 인간의 행동과 감정을 모방할 수 있다면, 그것만으로 인간의 경험과 정체성까지 완전히 재현할 수 있는가?",
    "How does the desire of artificial beings to become human paradoxically reveal the boundary between human and artificial?": "인공 존재가 인간이 되고자 하는 욕망은 역설적으로 인간과 인공적인 것의 경계를 어떻게 드러내는가?",
    "How do the three works define humanity through elements such as relationships, emotion, experience, and belonging?": "세 작품은 관계, 감정, 경험, 소속과 같은 요소를 통해 인간성을 어떻게 정의하는가?",
    "Key Argument": "핵심 주장",
    "Belonging & Rejection": "소속과 배제",
    "Imitation & Replacement": "모방과 대체",
    "Empathy & Human Difference": "공감과 인간의 차이",
    "One Argument, Two Approaches": "하나의 논점, 두 가지 접근",
    "My Writing": "나의 글쓰기",
    "AI-Generated Version": "AI 생성 버전",
    "Strengths": "강점",
    "Limitations": "한계",
    "Textual Interpretation · Critical Analysis · Contextual Engagement · Personal Analytical Voice": "텍스트 해석 · 비판적 분석 · 맥락적 이해 · 개인적 분석의 목소리",
    "Wordiness · Repetition · Transitions": "장황함 · 반복 · 전환",
    "Clarity · Concision · Organization · Linear Structure": "명료성 · 간결성 · 구성 · 선형적 구조",
    "Generic Analysis · Limited Textual Depth · Limited Personal Voice": "일반적인 분석 · 제한적인 텍스트 깊이 · 약한 개인적 목소리",
    "Process": "과정",
    "Write": "작성",
    "Generate": "생성",
    "Compare": "비교",
    "Evaluate": "평가",
    "Revise": "수정",
    "Comparison → Revision": "비교 → 수정",
    "My Original": "원래 작성본",
    "Critical Interpretation": "비판적 해석",
    "Textual Depth": "텍스트의 깊이",
    "Context": "맥락",
    "Personal Analysis": "개인적 분석",
    "Selective AI Contribution": "선택적으로 반영한 AI의 기여",
    "Clarity": "명료성",
    "Concision": "간결성",
    "Structure": "구조",
    "Final Revision": "최종 수정본",
    "Critical Depth + Clearer Structure": "비판적 깊이 + 더 명확한 구조",
    "What I Learned": "배운 점",
    "Key Insight": "핵심 인사이트",
    "Original Work": "원본 작업",
    "View Original Assignment ↗": "원본 과제 보기 ↗",
    "02 / Research Experience": "02 / 연구 경험",
    "ENV361 · Social Media and Environmentalism": "ENV361 · 소셜미디어와 환경주의",
    "From Online Information": "온라인 정보에서",
    "to Offline Action": "오프라인 행동으로",
    "Social Media": "소셜미디어",
    "Environmental Communication": "환경 커뮤니케이션",
    "Online → Offline": "온라인 → 오프라인",
    "User Action": "사용자 행동",
    "Academic Context": "학문적 맥락",
    "Imagining the Internet Otherwise": "인터넷을 다르게 상상하기",
    "Platform Proposal": "플랫폼 제안",
    "Climate Justice": "기후 정의",
    "Digital Activism": "디지털 행동주의",
    "The Online–Offline Gap": "온라인–오프라인 간극",
    "Information does not automatically lead to action.": "정보가 자동으로 행동으로 이어지는 것은 아닙니다.",
    "Passive Engagement": "수동적 참여",
    "Information Overload": "정보 과잉",
    "Misinformation": "잘못된 정보",
    "Core Question": "핵심 질문",
    "Designing a Path to Action": "행동으로 이어지는 경로 설계",
    "From Information to Participation": "정보에서 참여로",
    "Inform": "정보 제공",
    "Connect": "연결",
    "Participate": "참여",
    "Act Offline": "오프라인 행동",
    "Relevant Environmental Information": "관련 있는 환경 정보",
    "Stories · Communities · Shared Interests": "이야기 · 커뮤니티 · 공유 관심사",
    "Petitions · Challenges · Calls to Action": "청원 · 챌린지 · 행동 요청",
    "Events · Volunteering · Clean-ups": "행사 · 봉사 · 정화 활동",
    "Community Initiatives": "커뮤니티 이니셔티브",
    "Flow": "흐름",
    "Information → Connection → Participation → Offline Action": "정보 → 연결 → 참여 → 오프라인 행동",
    "The interaction should not end at the interface.": "상호작용은 인터페이스 안에서 끝나서는 안 됩니다.",
    "Trust Before Action": "행동 이전의 신뢰",
    "Credible information matters when it can shape real-world action.": "정보가 실제 행동을 형성할 수 있다면, 그 정보의 신뢰성이 중요합니다.",
    "Source Requirement": "출처 요구",
    "Community Flagging": "커뮤니티 신고",
    "Automated Screening": "자동 선별",
    "Human Review": "인간 검토",
    "Principle": "원칙",
    "Beyond the Interface": "인터페이스를 넘어서",
    "This project changed how I thought about digital platforms. Rather than focusing only on what users see or consume on a screen, I began to consider what happens after an interaction.": "이 프로젝트는 디지털 플랫폼을 바라보는 방식을 바꾸었습니다. 사용자가 화면에서 무엇을 보거나 소비하는지에만 집중하기보다, 상호작용 이후에 무엇이 일어나는지 생각하게 되었습니다.",
    "Through PANDO, I began thinking about how digital interactions could create pathways from information toward participation beyond the platform.": "PANDO를 통해 디지털 상호작용이 정보에서 플랫폼 밖 참여로 이어지는 경로를 어떻게 만들 수 있는지 생각하게 되었습니다.",
    "What users see": "사용자가 보는 것",
    "What users can do next": "사용자가 다음에 할 수 있는 것",
    "What happens beyond the interface": "인터페이스 밖에서 일어나는 것",
    "Final Project": "최종 프로젝트",
    "Final Presentation": "최종 발표",
    "View Final Project ↗": "최종 프로젝트 보기 ↗",
    "View Presentation ↗": "발표 보기 ↗",
  },
};

const getTextNodes = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
      if (parent.closest("[data-i18n], script, style, svg")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
};

const setLooseTextLanguage = (language) => {
  getTextNodes().forEach((node) => {
    if (!textNodeDefaults.has(node)) textNodeDefaults.set(node, node.textContent);
    const original = textNodeDefaults.get(node);
    const trimmed = original.trim();
    const translated = textNodeDictionary[language]?.[trimmed];
    if (language === "ko" && translated) {
      node.textContent = original.replace(trimmed, translated);
    } else {
      node.textContent = original;
    }
  });
};

const setLanguage = (language) => {
  document.documentElement.lang = language === "ko" ? "ko" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[language]?.[key] ?? defaultText.get(key);
    if (value) element.textContent = value;
  });
  setLooseTextLanguage(language);
  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
  localStorage.setItem("portfolioLanguage", language);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("portfolioLanguage") || "en");

const compactHashRedirects = {
  "#case436-framework": "#case436-project",
  "#case436-human-ai": "#case436-reflection",
  "#case436-revision": "#case436-reflection",
  "#env361-problem": "#env361-context",
  "#env361-action": "#env361-reflection",
  "#env361-trust": "#env361-reflection",
  "#env361-original": "#env361-reflection",
  "#env338-conditions": "#env338-context",
  "#env338-cross": "#env338-compare",
  "#env338-insight": "#env338-compare",
  "#env338-analysis": "#env338-compare",
  "#env338-reflection": "#env338-compare",
  "#env338-original": "#env338-compare",
  "#env421-approach": "#env421-context",
  "#env421-contribution": "#env421-context",
  "#env421-field": "#env421-survey",
  "#env421-synthesis": "#env421-survey",
  "#env421-recommendations": "#env421-survey",
  "#env421-reflection": "#env421-survey",
  "#env421-original": "#env421-survey",
};

const redirectCompactHash = () => {
  const target = compactHashRedirects[window.location.hash];
  if (!target) return;
  history.replaceState(null, "", target);
  document.querySelector(target)?.scrollIntoView();
};

redirectCompactHash();
window.addEventListener("hashchange", redirectCompactHash);

const dhuTocLinks = Array.from(document.querySelectorAll(".dhu-toc a"));
const dhuToc = document.querySelector(".dhu-toc");
const dhuCover = document.querySelector(".dhu-cover");
const dhuSections = dhuTocLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (dhuTocLinks.length && dhuSections.length) {
  const setActiveDhuLink = (id) => {
    dhuTocLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveDhuLink(visible.target.id);
    },
    { rootMargin: "-18% 0px -62% 0px", threshold: [0.1, 0.35, 0.6] },
  );

  dhuSections.forEach((section) => observer.observe(section));

  const updateDhuTocTone = () => {
    if (!dhuToc || !dhuCover) return;
    const coverRect = dhuCover.getBoundingClientRect();
    dhuToc.classList.toggle("on-cover", coverRect.bottom > window.innerHeight * 0.38);
  };

  updateDhuTocTone();
  window.addEventListener("scroll", updateDhuTocTone, { passive: true });
  window.addEventListener("resize", updateDhuTocTone);
}

const projectIndex = document.querySelector(".research-project-index");
const projectIndexLinks = Array.from(document.querySelectorAll(".research-project-index a"));
const projectTocLinks = Array.from(document.querySelectorAll(".case436-toc-list a"));
const projectPanels = Array.from(document.querySelectorAll(".case436-panel"));
const projectActiveHref = {
  dhu436: "#case436-course",
  env361: "#env361-cover",
  env338: "#env338-cover",
  env421: "#env421-cover",
};

const getProjectKey = (id) => {
  if (id?.startsWith("env361")) return "env361";
  if (id?.startsWith("env338")) return "env338";
  if (id?.startsWith("env421")) return "env421";
  if (id?.startsWith("case436") && id !== "case436-cover" && id !== "case436-toc") return "dhu436";
  return "";
};

const setActiveProjectIndex = (projectKey) => {
  const activeHref = projectActiveHref[projectKey];
  [...projectIndexLinks, ...projectTocLinks].forEach((link) => {
    link.classList.toggle("active", Boolean(activeHref) && link.getAttribute("href") === activeHref);
  });
};

const updateProjectIndexVisibility = () => {
  if (!projectIndex) return;
  const tocPanel = document.getElementById("case436-toc");
  const lastProject = document.getElementById("env421-survey");
  if (!tocPanel || !lastProject) return;
  const tocBottom = tocPanel.getBoundingClientRect().bottom;
  const lastBottom = lastProject.getBoundingClientRect().bottom;
  projectIndex.classList.toggle("is-visible", tocBottom <= 70 && lastBottom > 90);
};

if ("IntersectionObserver" in window && projectPanels.length) {
  const projectObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      setActiveProjectIndex(getProjectKey(visible.target.id));
      updateProjectIndexVisibility();
    },
    { rootMargin: "-28% 0px -50% 0px", threshold: [0.08, 0.28, 0.5] },
  );

  projectPanels.forEach((panel) => projectObserver.observe(panel));
}

updateProjectIndexVisibility();
window.addEventListener("scroll", updateProjectIndexVisibility, { passive: true });
window.addEventListener("resize", updateProjectIndexVisibility);

const topNavLinks = Array.from(document.querySelectorAll(".site-nav nav a[href^='#']"));
const topNavTargets = Array.from(document.querySelectorAll(".case436-panel"));

if ("IntersectionObserver" in window && topNavTargets.length) {
  const setActiveTopNav = (section) => {
    const id = section.id === "case436-toc"
      ? "case436-toc"
      : section.id.startsWith("env361")
        ? "env361-cover"
        : section.id.startsWith("env338")
          ? "env338-cover"
          : section.id.startsWith("env421")
            ? "env421-cover"
            : "case436-course";
    topNavLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const topNavObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveTopNav(visible.target);
    },
    { rootMargin: "-24% 0px -56% 0px", threshold: [0.08, 0.28, 0.5] },
  );

  topNavTargets.forEach((section) => topNavObserver.observe(section));
}
