const questions = [
  {
    id: 1,
    text: "သင့်ရဲ့စာမေးပွဲတွေပြီးပြီးနောက် ကျောင်းပိတ်ရက်အတွင်း သင်အရင်ဆုံးလုပ်ချင်သော အလုပ်တစ်ခုမှာ",
    answers: [
      { text: "အိမ်ထောင်ပရိဘောဂ ပစ္စည်းတစ်ချို့ပြုလုပ်မည်။", category: "STEM" },
      { text: "မြန်မာနိုင်ငံရဲ့ သမိုင်းကြောင်းကို လေ့လာမည်။", category: "ARTS" },
      { text: "သတင်းစာ၊ မဂ္ဂဇင်းနှင့် ဂျာနယ်များတွင် ဆောင်းပါးများရေးသားမည်။", category: "SOCIAL" },
      { text: "နီးစပ်ရာ ဆေးရုံ၊မိဘမဲ့ဂေဟာများတွင် ကိုယ်ကာယနည်းပြဆရာအဖြစ် ကူညီမည်။", category: "SOCIAL" },
      { text: "ငွေကြေးဆိုင်ရာခန့်ခွဲမှုကုန်စည်ရောင်းဝယ်မှုပညာကို လေ့လာမည်။", category: "ARTS" },
      { text: "အစည်းအဝေးပွဲကြီးများ၊ Seminar ပွဲများနှင့် Conference ပွဲများတွင် ပါဝင်ကူညီမည်။", category: "SOCIAL" }
    ]
  },
  {
    id: 2,
    text: "အောက်ပါအချက်များထဲမှ မည်သည့်အချက်သည် သင့်အား စိတ်အဝင်စားဆုံး ဖြစ်စေသနည်း။",
    answers: [
      { text: "4x4 Truck Car ကြီးမောင်းမည်။", category: "STEM" },
      { text: "တိရစ္ဆာန်များအား အစာကျွေးမွေး ပြုစုစောင့်ရှောက်မည်။", category: "SOCIAL" },
      { text: "ပြဇာတ် (သို့) ကပွဲများတွင် ပါဝင်သရုပ်ဆောင်ကပြမည်။", category: "ARTS" },
      { text: "ကလေးငယ်ကို သင်ကြားပြသ ပြုစုစောင့်ရှောက်ရောက်မည်။", category: "SOCIAL" },
      { text: "ကုန်ပစ္စည်းတစ်ခုကို Super Market တွင် Promotion လုပ်မည်။", category: "BUSINESS" },
      { text: "Presentation တစ်ခုကို ဦးစီးဆောင်ရွက်မည်။", category: "BUSINESS" }
    ]
  },
  {
    id: 3,
    text: "ပထမဦးဆုံး တက္ကသိုလ်တက်ရောက်သောနေ့မှ project တစ်ခုကို 6 လအတွင်း ပြီးမြောက်အောင် ပြုလုပ်မည်ဆိုလျှင် မည်သည့် Project ကို ရွေးချယ်မည်နည်း။",
    answers: [
      { text: "ငါးမွေးကန်တစ်ခုကို တည်ဆောက်မည်။", category: "STEM" },
      { text: "စွမ်းအားသိုလှောင်ပစ္စည်း တီထွင်မည်။", category: "STEM" },
      { text: "ပြဇာတ်တစ်ခု၏ ဇာတ်ညွှန်းရိုက်ကူးရေးနှင့် ပွဲစီစဉ်ညွှန်ကြားမှုကို ပြုလုပ်မည်။", category: "ARTS" },
      { text: "အများအကျိုးဆောင်ရွက်ရန် လူများထံမှ လက်မှတ် 10,000 လိုက်စုရမည်။", category: "SOCIAL" },
      { text: "ယာဉ်အန္တရာယ် မဖြစ်ပွားရေးအတွက် Campaign တစ်ခုကို အများပြည်သူသိရှိရန် ဆောင်ရွက်မည်။", category: "SOCIAL" },
      { text: "တက္ကသိုလ်အနီးတစ်ဝိုက်တွင်ရှိသော ဝန်ဆောင်မှုလုပ်ငန်းများနှင့် အခြားလုပ်ငန်းများအားလုံး၏ Phone Number များကို Directory ပြုလုပ်မည်။", category: "BUSINESS" }
    ]
  },
  {
    id: 4,
    text: "သင့်၏တက္ကသိုလ်မှာ အဖွဲ့အစည်း (သို့) Club တစ်ခုခုသို့ ပါဝင်ဆောင်ရွက်ရမည်ဆိုပါက မည်သို့သော Club ကို သင်ရွေးချယ်မည်နည်း။",
    answers: [
      { text: "လျှပ်စစ်ပစ္စည်းအသေးစားများနှင့် အခြားစိတ်ဝင်စားဖွယ်ကောင်းသော အရာများဖန်တီးသောအဖွဲ့အစည်းများ (eg. – Creative Club)", category: "STEM" },
      { text: "အသစ်တီထွင်ကြံစည်မှုကို ဦးစားပေးသောအဖွဲ့အစည်း", category: "STEM" },
      { text: "သတင်း၊ မဂ္ဂဇင်းနှင့် ဂျာနယ်စသည်တို့နှင့် ပတ်သက်သောအဖွဲ့ (ဥပမာ - ကျောင်း၏ဂျာနယ်တွင် ပါဝင်တာဝန်ယူဆောင်ရွက်ခြင်း)", category: "ARTS" },
      { text: "လူမှုရေးနှင့် ပတ်သက်သောအဖွဲ့အစည်းများ (ဥပမာ - ကျောင်းသားသမဂ္ဂအဖွဲ့၊ Taylor’s Myanmar Society (TMS))", category: "SOCIAL" },
      { text: "စီးပွားရေးနှင့် ငွေရေးကြေးရေးဆိုင်ရာအဖွဲ့အစည်းများ။", category: "BUSINESS" },
      { text: "စာရင်းကိုင်ပညာနှင့် ပတ်သက်သောအဖွဲ့များ။", category: "BUSINESS" }
    ]
  },
  {
    id: 5,
    text: "သင်နှင့် သင့်သူငယ်ချင်းတို့သည် အပတ်စဉ် ဘိုးဘွားရိပ်သာကို တနင်္ဂနွေနေ့တိုင်း ပြုပြင်ထိန်းသိမ်းကူညီရန် သွားရောက်မည်ဆိုပါက သင်သည်မည်သည့်အပိုင်းတွင် လုပ်ကိုင်ဆောင်ရွက်မည်နည်း။",
    answers: [
      { text: "လျှပ်စစ်ပစ္စည်းနှင့် လျှပ်စစ်ကြိုးများပျက်စီးမှုကို ပြုပြင်မည်။", category: "STEM" },
      { text: "ဂေဟာရှိ သက်ကြီးရွယ်အိုများ၏ ကျန်းမာရေးနှင့် ၎င်းတို့၏ အစားအသောက်ကို ဂရုစိုက်ပြုစုရမည်။", category: "SOCIAL" },
      { text: "ဂေဟာအတွင်း အလှဆင်ပြုပြင်မှုနှင့် သန့်ရှင်းထိန်းသိမ်းမှုပြုလုပ်မည်။", category: "ARTS" },
      { text: "ဂေဟာရှိလူကြီးများနှင့် စကားပြောဆိုဆွေးနွေးပြီး ၎င်းတို့၏ အခက်အခဲပြဿနာကို နားလည်အောင် ကြိုးစားမည်။", category: "SOCIAL" },
      { text: "ဂေဟာရှိ လူကြီးများနှင့် စီးပွားရေးရာကိစ္စများနှင့် နိုင်ငံရေးရာကိစ္စများကို ဆွေးနွေးမည်။", category: "BUSINESS" },
      { text: "ဂေဟာရှိ အခန်းများကို ပြန်လည်ပြုပြင်ဖွဲ့စည်းပေးမည်။", category: "STEM" }
    ]
  },
  {
    id: 6,
    text: "သင့်ရဲ့ လုပ်ငန်းခွင်၏ ပထမဦးဆုံးအပတ်တွင် သင်ဘာတွေ လုပ်နေမည်နည်း။",
    answers: [
      { text: "Electronic နှင့်ပတ်သက်သော အရာပစ္စည်းများ၏ ချို့ယွင်းချက်နှင့် ပြဿနာများကို လေ့လာစမ်းသပ် အဖြေရှာပြုပြင်မည်။", category: "STEM" },
      { text: "သင်စိတ်ဝင်စားသော မူးယစ်ဆေးဝါး၏ အကြောင်းကို စာတမ်းပြုစုမည်။", category: "STEM" },
      { text: "ဂီတနှင့် အခြားသော Music Instrument များကို ပွဲလမ်းသဘင်များတွင် တီးခတ်မည်။", category: "ARTS" },
      { text: "စိတ်ဓာတ်ကျနေသော သင့်ရဲ့မိတ်ဆွေ (သို့) စိတ်ဝေဒနာဖြစ်နေသူများအား ဆွေးနွေးကူညီအားပေးမည်။", category: "SOCIAL" },
      { text: "သင့်၏ ပထမဦးဆုံးသော Research Project အတွက် သင့်ရဲ့ Team (အဖွဲ့) အား ဦးစီးကွပ်ကဲဆောင်ရွက်မည်။", category: "BUSINESS" },
      { text: "ရုံးလုပ်ငန်းဆိုင်ရာ စာရွက်စာတမ်းများကို ရေးမှတ်သိမ်းဆည်းမည်။", category: "BUSINESS" }
    ]
  },
  {
    id: 7,
    text: "သင့်အားအချိန်ပိုင်းအလုပ်ဆင်းရန် အလုပ်(၆)မျိုးကို အောက်ဖော်ပြပါအတိုင်း ကမ်းလှမ်းမည်ဆိုပါက သင်သည် မည်သို့သော အလုပ်ကို ရွေးချယ်လက်ခံမည်နည်း။",
    answers: [
      { text: "အိမ်တစ်လုံးအား ဆေးသုတ်မည်။", category: "ARTS" },
      { text: "CSI လို စုံစမ်းထောက်လှမ်းရေး Member အဖြစ် ပါဝင်မည်။", category: "STEM" },
      { text: "ဗိုလ်ချုပ်ဈေးတွင် Portrait ပန်းချီကားဆွဲ၍ ဝင်ငွေရှာမည်။", category: "ARTS" },
      { text: "လူမှုရေးအသင်းအဖွဲ့များတွင် စေတနာဝန်ထမ်းအဖြစ် ပါဝင်မည်။", category: "SOCIAL" },
      { text: "လုပ်ငန်းအသေးစားတစ်ခုအား စတင်ဆောင်ရွက်မည်။", category: "BUSINESS" },
      { text: "တစ်စုံတစ်ဦး၏ Secretary အဖြစ် ဆောင်ရွက်မည်။", category: "BUSINESS" }
    ]
  },
  {
    id: 8,
    text: "သင့်၏အရင်းနှီးဆုံးသူငယ်ချင်းက သင့်အား လက်လီလက်ကား Store ဆိုင်တွင် အလုပ်လုပ်ရန် ကမ်းလှမ်းသော်လည်း သင်လုပ်ချင်သော အလုပ်မှာ",
    answers: [
      { text: "Engineer တစ်ဦးအဖြစ် စက်မှုပစ္စည်းများအား ပြုပြင်ထိန်းသိမ်းစောင့်ရှောက်ခြင်း ဖြစ်သည်။", category: "STEM" },
      { text: "သိပ္ပံဆိုင်ရာဓာတ်ခွဲခန်းတွင် လက်ထောက်လေ့လာစူးစမ်းသူအဖြစ် လုပ်ကိုင်ချင်သည်။", category: "STEM" },
      { text: "သီချင်းကဗျာများရေးစပ်မည်။ ဝတ္ထုများရေးမည်။", category: "ARTS" },
      { text: "ကျောင်းပိတ်ရက် ကျောင်းသားများ Camp ထွက်သောအခါ သင်တန်းနည်းပြအဖြစ် ဆောင်ရွက်မည်။", category: "SOCIAL" },
      { text: "လုပ်ငန်းအသေးစားတစ်ခုကို စတင်ပြီး သင့်၏သူငယ်ချင်းအား ဝန်ထမ်းအဖြစ် အလုပ်ခန့်မည်။", category: "BUSINESS" },
      { text: "သင့်ဖခင်လုပ်ငန်းတွင် လုပ်ငန်းခွင်ဆိုင်ရာ စည်းစနစ်များကို သတ်မှတ်ချမှတ်မည်။", category: "BUSINESS" }
    ]
  },
  {
    id: 9,
    text: "သင်၏အလုပ်သင်ကာလအတွင်း သင်ကြိုက်နှစ်သက်သော အလုပ်တစ်ခုမှာ",
    answers: [
      { text: "Car & Air Plane များကို တပ်ဆင်သည့်လုပ်ငန်း။", category: "STEM" },
      { text: "သင့် Company ၏ စတင်ဖြစ်ပေါ်ပုံနှင့် ယနေ့ခေတ်အဖြစ် အစဉ်အဆက်ဖြစ်စဉ်များကို လေ့လာမှတ်သား၍ မှတ်တမ်းတင်မည်။", category: "ARTS" },
      { text: "Company ရဲ့ နှစ်ပတ်လည်အလှူငွေရရန် ဖျော်ဖြေပွဲအတွက် Poster Design ရေးဆွဲမည်။", category: "ARTS" },
      { text: "သင့်၏လုပ်ဖော်ကိုင်ဖက်များ၏ နေ့စဉ်လုပ်ငန်းစဉ်များအား ဝိုင်းဝန်းကူညီဆောင်ရွက်မည်။", category: "SOCIAL" },
      { text: "အထွေထွေမန်နေဂျာ၏ လုပ်ငန်းစီစဉ်များအား ဝိုင်းဝန်းကူညီဆောင်ရွက်မည်။", category: "BUSINESS" },
      { text: "စာရင်းဇယားများ ဖြည့်သွင်းမည်။", category: "BUSINESS" }
    ]
  },
  {
    id: 10,
    text: "သင်၏ နောက်ဆုံးစာသင်နှစ်တွင် Assignment တစ်ခုအနေဖြင့် Essay ရေးမည်ဆိုပါက သင်သည် မည်သို့သော ခေါင်းစဉ်ကို ရွေးချယ်မည်နည်း။",
    answers: [
      { text: "အိမ်တွင်ရှိသော Electronic ပစ္စည်းများကို ဘယ်လိုစစ်ဆေးပြုပြင်မည်နည်း။", category: "STEM" },
      { text: "Research စာတမ်းနှင့်ပတ်သက်၍ ဘယ်လိုရေးသားမည်နည်း။", category: "STEM" },
      { text: "ကောင်းမွန်သော Brochure တစ်ခုရရန် ဘယ်လိုအစီအစဉ်တကျထားမည်နည်း။", category: "ARTS" },
      { text: "စေတနာ့ဝန်ထမ်း တစ်ဦးဖြစ်ရန် ဘယ်လိုပြုမူနေထိုင်ဆောင်ရွက်မည်နည်း။", category: "SOCIAL" },
      { text: "ကိုယ်ပိုင်လုပ်ငန်းထောင်ရန် ဘယ်လိုပြုမူနေထိုင်ဆောင်ရွက်မည်နည်း။", category: "BUSINESS" },
      { text: "သေသပ်သေချာသော စာရင်းအင်းဖြည့်ဆည်းသော နည်းပညာတစ်ခုကို ဘယ်လိုဖော်ဆောင်မည်နည်း။", category: "BUSINESS" }
    ]
  }
];

let currentQuestionIndex = 0;
let choiceLetterCounts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

const majorDatabase = {
  A: {
    desc: "သင်ဟာ ရှေးရိုးဆန်ပြီးစာအုပ်ကြီးအတိုင်း လုပ်ဆောင်တတ်သူဖြစ်သော်လည်း လက်တွေ့စမ်းသပ်လေ့လာလိုစိတ်ရှိသောသူဖြစ်သည်။ သင်သည် သင်၏လက်ချောင်းများကို အသုံးပြုပြီး ကိုင်တွယ်ထိန်းသိမ်းလုပ်ကိုင်နိုင်သော စက်ပစ္စည်းများနှင့် ပတ်သက်သော လုပ်ငန်းစဉ်များကို ပြုလုပ်ရန် ပျော်မွေ့သည်။ သင်၏ ပြဿနာကို ဖြေရှင်းရန်အတွက် လက်တွေ့ကျပြီး မြင်သာထင်သာရှိသော နည်းလမ်းကို ရွေးချယ်လိမ့်မည်။",
    fields: ["Medicine & Health Sciences", "Optometry", "Engineering", "Architecture", "Music", "IT", "Culinary Arts & Hotel Management"]
  },
  B: {
    desc: "သင်ဟာ အလုပ်တစ်ခုကို လျှို့ဝှက်ဆန်းကြယ်စွာ ပြုလုပ်တတ်သူဖြစ်သည်။ မည်သည့်အလုပ်မှ မစတင်ခင် သင်လိုအပ်သော သတင်းအချက်အလက်များနှင့် လိုအပ်သောအရာဝတ္ထုများကို ကြိုတင်စုဆောင်းပြီး လေ့လာဆန်းစစ်မှုပြုလုပ်ပြီးမှသာ အလုပ်ပြီးမြောက်ရန်အတွက် လိုအပ်သော နည်းလမ်းများကို ရှာဖွေဖြေရှင်းတတ်သူဖြစ်သည်။",
    fields: ["Biology", "Biochemistry", "Chemistry", "Computer Science", "Mathematics", "Law", "Marine Biology", "Philosophy & Anthropology"]
  },
  C: {
    desc: "ဖန်တီးနိုင်စွမ်းရှိသော စိတ်ကူးဉာဏ်ရှိသူဖြစ်သည်။ သင်သည် ဖြစ်ရိုးဖြစ်စဉ်နှင့် အစဉ်အလာအတိုင်း ပြုမူဆောင်ရွက်တတ်သူမဟုတ်ဘဲ မိမိ၏ ဖန်တီးနိုင်စွမ်းပေါ်မူတည်ပြီး အလုပ်ပြီးမြောက်ရန် (သို့) ပြဿနာကို ဖြေရှင်းရန် နည်းလမ်းရှာဖွေတတ်သူဖြစ်သည်။",
    fields: ["Creative Arts (Dancing, Acting, Music)", "Advertising", "Graphic Design", "Web Design", "Movies Production", "Interior Design & Marketing"]
  },
  D: {
    desc: "အခြားသောသူကို ဦးစားပေးသူဖြစ်သည်။ ကိုယ်ချင်းစာနာတတ်သူ၊ စိတ်ရှည်သူ၊ သဘောထားကြီးသူဖြစ်ပြီး အများသူငါ၏ လေးစားမှုရရှိနိုင်သူဖြစ်သည်။ အဖွဲ့နှင့် အလုပ်လုပ်သောအခါ သင်သည် အဖွဲ့၏ အဓိကလူတစ်ဦးဖြစ်နေပြီး အဖွဲ့တစ်ဖွဲ့လုံး၏ လိုအပ်သောအရာကို အောင်မြင်အောင် စွမ်းဆောင်နိုင်ပြီး အဖွဲ့ဝင်အားလုံး ညီညွတ်မှုရှိရန် အဓိကစွမ်းဆောင်နိုင်သူဖြစ်သည်။",
    fields: ["Public Relations", "Political Science", "Psychology", "Sociology", "Education", "HR & Mass Communication"]
  },
  E: {
    desc: "ယုံကြည်မှုရှိသော စိတ်အားထက်သန်သော၊ ဆွဲဆောင်နိုင်သောအကောင်းမြင်ဝါဒရှိသော၊ ရည်မှန်းချက်ကြီးမားသော သည့်အချက်များကို သင်ပိုင်ဆိုင်ပြီး ၎င်းအချက်များသည် သင့်အား ခေါင်းဆောင်တစ်ဦးအဖြစ်သို့ တွန်းအားပေးမည့် အချက်များဖြစ်သည်။ ထို့ပြင် သင်သည် ကမ္ဘာ့ရေးရာ၊ နိုင်ငံရေးရာ၊ စီးပွားရေးရာတို့နှင့် အမြဲတစေ ရင်နှီးကျွမ်းဝင်နေပြီး အမြဲတစေ အကြံအစည်သစ်များဖြင့် စီးပွားရေးလုပ်ငန်းများ လုပ်ကိုင်ရန် ကြံစည်ဖော်ဆောင်နေသူဖြစ်သည်။",
    fields: ["Business Administration", "Finance", "Audit", "Advertising", "Entrepreneurship", "Marketing", "Sale & Real Estate"]
  },
  F: {
    desc: "သင်သည် သေသပ်ပြီး စနစ်တကျနှင့် သတိဝီရိယရှိသူဖြစ်သော်လည်း အနည်းငယ် လျှို့ဝှက်တတ်သူဖြစ်သည်။ သင်သည် စည်းစနစ်ဘောင်အတွင်း အလုပ်လုပ်တတ်သူဖြစ်ပြီး အစီအစဉ်တကျ လုပ်တတ်သူလည်းဖြစ်သည်။ အရာရာတိုင်းကို အသေးစိတ်ဖြေရှင်း ဆောင်ရွက်နိုင်သော်လည်း ဆုံးဖြတ်ချက်ချရန်အတွက် တွန့်ဆုတ်သူဖြစ်သည်။",
    fields: ["Accountancy", "Finance", "Actuarial Science", "Business Administration", "Tax Consulting", "Banking", "Technical Writing & Law"]
  }
};

function startTest() {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("test-container").classList.remove("hidden");
  document.getElementById("results").classList.add("hidden");

  currentQuestionIndex = 0;
  choiceLetterCounts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestionIndex];

  document.getElementById("current-q").textContent = currentQuestionIndex + 1;
  document.getElementById("q-num").textContent = String(currentQuestionIndex + 1).padStart(2, "0");

  const textContainer = document.getElementById("question-text");
  textContainer.textContent = q.text;

  const parentCard = textContainer.closest('.question-card');
  parentCard.classList.remove("animate-fadeIn");
  void parentCard.offsetWidth; 
  parentCard.classList.add("animate-fadeIn");

  const progressPercentage = (currentQuestionIndex / questions.length) * 100;
  document.getElementById("progress").style.width = `${progressPercentage}%`;

  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = "";

  const alphaIndex = ["A", "B", "C", "D", "E", "F"];

  q.answers.forEach((answer, index) => {
      const letter = alphaIndex[index]; 
      const div = document.createElement("div");
      
      
      div.className = "answer-card p-3 md:p-4 rounded-xl cursor-pointer flex gap-3 items-center font-medium shadow-sm group transition-all duration-300";

      div.innerHTML = `
        <div class="opt-badge w-9 h-9 rounded-lg bg-slate-100 text-xs text-slate-500 font-bold border border-slate-200 flex items-center justify-center flex-shrink-0">
          <span>${letter}</span>
        </div>
        <div class="flex-1">
          <p class="text-xs md:text-sm font-semibold text-slate-700 group-hover:text-indigo-950 transition-colors leading-relaxed tracking-normal">
            ${answer.text}
          </p>
        </div>
      `;

      div.onclick = () => {
        div.style.borderColor = "#4f46e5";
        div.style.backgroundColor = "#f5f3ff";
        selectAnswer(letter);
      };

      answersContainer.appendChild(div);
    });
}

function selectAnswer(letter) {
  choiceLetterCounts[letter] += 1;

  setTimeout(() => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      finishTest();
    }
  }, 280);
}

function finishTest() {
  document.getElementById("test-container").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
  displayResults();
}

function displayResults() {
  let topLetter = Object.keys(choiceLetterCounts).reduce((a, b) => 
    choiceLetterCounts[a] > choiceLetterCounts[b] ? a : b
  );

  const profileData = majorDatabase[topLetter];

  document.getElementById("top-major").textContent = `သင်သည် ${topLetter} ကို အများဆုံးရွေးချယ်ခဲ့သည်။`;
  document.getElementById("top-desc").textContent = profileData.desc;

  const fieldsContainer = document.getElementById("fields-grid");
  fieldsContainer.innerHTML = "";

  
  profileData.fields.forEach(field => {
    const pill = document.createElement("span");
    pill.className = "px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 font-medium text-xs md:text-sm rounded-xl transition-colors cursor-default";
    pill.textContent = field;
    fieldsContainer.appendChild(pill);
  });

  const totalQuestions = questions.length;
  const pickedCount = choiceLetterCounts[topLetter];
  const calculatedAffinity = Math.max(65, Math.min(98, (pickedCount / totalQuestions) * 100 + 45));

  document.getElementById("fit-score").textContent = `${Math.round(calculatedAffinity)}%`;
}