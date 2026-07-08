import { DEFAULT_LANGUAGE, isLanguage, type Language } from "./i18n";

type TermsSection = {
  title: string;
  body: string[];
};

type TermsContent = {
  title: string;
  lastUpdated: string;
  metaTitle: string;
  metaDescription: string;
  sections: TermsSection[];
};

const terms: Record<Language, TermsContent> = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last updated: July 8, 2026",
    metaTitle: "Terms of Service | BUDEYA",
    metaDescription: "Terms of Service for BUDEYA legal employment support in Belarus.",
    sections: [
      {
        title: "1. Company Information",
        body: [
          "This website presents BUDEYA recruitment services provided by LLC «INCOStechno» in the Republic of Belarus.",
          "Company address: Republic of Belarus, 220118, Minsk, Shishkin st., 20/1-33.",
        ],
      },
      {
        title: "2. Use of the Website",
        body: [
          "The information on this website is provided for general informational purposes about legal employment support in Belarus.",
          "You agree not to misuse the website, interfere with its operation, or submit false, misleading, or unlawful information.",
        ],
      },
      {
        title: "3. Description of Services",
        body: [
          "BUDEYA may provide consultation, document coordination, work permit support, visa document assistance, relocation coordination, and communication support between candidates, partner agencies, and Belarusian employers.",
          "The exact scope of services depends on the candidate's situation, the employer's requirements, and applicable Belarusian migration and labor rules.",
        ],
      },
      {
        title: "4. No Guarantee of Visa or Employment",
        body: [
          "BUDEYA does not guarantee that a candidate will receive a job offer, work permit, visa, entry approval, or any other decision from an employer, consulate, migration authority, or other government body.",
          "Any stated processing time, including a 30-40 day document process, is an estimate and may change depending on documents, employer review, consular procedures, and government processing.",
        ],
      },
      {
        title: "5. User Responsibilities",
        body: [
          "Candidates and partner agencies are responsible for providing accurate, complete, and valid documents, including passport details, CV, qualification information, and any required legalization or consular documents.",
          "Users are responsible for complying with the laws of their country of residence, transit countries, and the Republic of Belarus, and for paying any personal travel, consular, or third-party costs unless separately agreed in writing.",
        ],
      },
      {
        title: "6. Contact Details",
        body: [
          "For questions about these Terms, contact BUDEYA by email at Inkostehno@gmail.com, by phone or WhatsApp at +375 44 548 08 08, or by post at the company address above.",
        ],
      },
    ],
  },
  bn: {
    title: "সেবার শর্তাবলী",
    lastUpdated: "সর্বশেষ আপডেট: ৮ জুলাই ২০২৬",
    metaTitle: "সেবার শর্তাবলী | BUDEYA",
    metaDescription: "বেলারুশে বৈধ কর্মসংস্থান সহায়তার জন্য BUDEYA সেবার শর্তাবলী।",
    sections: [
      {
        title: "১. কোম্পানির তথ্য",
        body: [
          "এই ওয়েবসাইটে বেলারুশ প্রজাতন্ত্রে LLC «INCOStechno» কর্তৃক প্রদত্ত BUDEYA রিক্রুটমেন্ট সেবার তথ্য উপস্থাপন করা হয়েছে।",
          "কোম্পানির ঠিকানা: Republic of Belarus, 220118, Minsk, Shishkin st., 20/1-33.",
        ],
      },
      {
        title: "২. ওয়েবসাইট ব্যবহার",
        body: [
          "এই ওয়েবসাইটের তথ্য বেলারুশে বৈধ কর্মসংস্থান সহায়তা সম্পর্কে সাধারণ তথ্য প্রদানের উদ্দেশ্যে প্রকাশ করা হয়েছে।",
          "আপনি ওয়েবসাইটের অপব্যবহার করবেন না, এর কার্যক্রমে বাধা দেবেন না, বা মিথ্যা, বিভ্রান্তিকর কিংবা বেআইনি তথ্য জমা দেবেন না।",
        ],
      },
      {
        title: "৩. সেবার বিবরণ",
        body: [
          "BUDEYA পরামর্শ, ডকুমেন্ট সমন্বয়, ওয়ার্ক পারমিট সহায়তা, ভিসা ডকুমেন্ট সহায়তা, স্থানান্তর সমন্বয় এবং প্রার্থী, পার্টনার এজেন্সি ও বেলারুশিয়ান নিয়োগকর্তাদের মধ্যে যোগাযোগ সহায়তা প্রদান করতে পারে।",
          "সেবার নির্দিষ্ট পরিধি প্রার্থীর পরিস্থিতি, নিয়োগকর্তার প্রয়োজনীয়তা এবং প্রযোজ্য বেলারুশিয়ান অভিবাসন ও শ্রমবিধির ওপর নির্ভর করে।",
        ],
      },
      {
        title: "৪. ভিসা বা চাকরির কোনো নিশ্চয়তা নেই",
        body: [
          "BUDEYA কোনো প্রার্থীর চাকরির অফার, ওয়ার্ক পারমিট, ভিসা, প্রবেশ অনুমোদন বা নিয়োগকর্তা, কনস্যুলেট, অভিবাসন কর্তৃপক্ষ অথবা অন্য কোনো সরকারি সংস্থার সিদ্ধান্ত পাওয়ার নিশ্চয়তা দেয় না।",
          "৩০-৪০ দিনের ডকুমেন্ট প্রক্রিয়াসহ যেকোনো উল্লেখিত সময়সীমা একটি আনুমানিক সময় এবং কাগজপত্র, নিয়োগকর্তার পর্যালোচনা, কনস্যুলার প্রক্রিয়া ও সরকারি প্রক্রিয়াকরণের ওপর নির্ভর করে পরিবর্তিত হতে পারে।",
        ],
      },
      {
        title: "৫. ব্যবহারকারীর দায়িত্ব",
        body: [
          "প্রার্থী ও পার্টনার এজেন্সি সঠিক, সম্পূর্ণ এবং বৈধ কাগজপত্র প্রদান করার জন্য দায়ী, যার মধ্যে পাসপোর্ট তথ্য, সিভি, যোগ্যতার তথ্য এবং প্রয়োজনীয় বৈধকরণ বা কনস্যুলার ডকুমেন্ট অন্তর্ভুক্ত থাকতে পারে।",
          "ব্যবহারকারী নিজ দেশের আইন, ট্রানজিট দেশের আইন এবং বেলারুশ প্রজাতন্ত্রের আইন মেনে চলার জন্য দায়ী। লিখিতভাবে আলাদা চুক্তি না থাকলে ব্যক্তিগত ভ্রমণ, কনস্যুলার বা তৃতীয় পক্ষের খরচ ব্যবহারকারীর দায়িত্ব।",
        ],
      },
      {
        title: "৬. যোগাযোগের তথ্য",
        body: [
          "এই শর্তাবলী সম্পর্কে প্রশ্ন থাকলে BUDEYA-এর সাথে ইমেইল Inkostehno@gmail.com, ফোন বা WhatsApp +375 44 548 08 08, অথবা উপরের কোম্পানির ঠিকানায় যোগাযোগ করুন।",
        ],
      },
    ],
  },
  ur: {
    title: "سروس کی شرائط",
    lastUpdated: "آخری اپ ڈیٹ: 8 جولائی 2026",
    metaTitle: "سروس کی شرائط | BUDEYA",
    metaDescription: "بیلاروس میں قانونی روزگار کی معاونت کے لیے BUDEYA کی سروس کی شرائط۔",
    sections: [
      {
        title: "1. کمپنی کی معلومات",
        body: [
          "یہ ویب سائٹ جمہوریہ بیلاروس میں LLC «INCOStechno» کی طرف سے فراہم کردہ BUDEYA ریکروٹمنٹ سروسز کی معلومات پیش کرتی ہے۔",
          "کمپنی کا پتہ: Republic of Belarus, 220118, Minsk, Shishkin st., 20/1-33.",
        ],
      },
      {
        title: "2. ویب سائٹ کا استعمال",
        body: [
          "اس ویب سائٹ پر موجود معلومات بیلاروس میں قانونی روزگار کی معاونت کے بارے میں عمومی معلومات کے لیے فراہم کی گئی ہیں۔",
          "آپ ویب سائٹ کا غلط استعمال، اس کے کام میں مداخلت، یا جھوٹی، گمراہ کن یا غیر قانونی معلومات جمع نہیں کرائیں گے۔",
        ],
      },
      {
        title: "3. خدمات کی تفصیل",
        body: [
          "BUDEYA مشاورت، دستاویزات کی ہم آہنگی، ورک پرمٹ سپورٹ، ویزا دستاویزات میں مدد، نقل مکانی کی رہنمائی، اور امیدواروں، پارٹنر ایجنسیوں اور بیلاروسی آجروں کے درمیان رابطے میں معاونت فراہم کر سکتا ہے۔",
          "خدمات کا مخصوص دائرہ امیدوار کی صورت حال، آجر کی ضروریات، اور بیلاروس کے قابل اطلاق امیگریشن اور لیبر قوانین پر منحصر ہوتا ہے۔",
        ],
      },
      {
        title: "4. ویزا یا ملازمت کی کوئی گارنٹی نہیں",
        body: [
          "BUDEYA اس بات کی گارنٹی نہیں دیتا کہ کسی امیدوار کو جاب آفر، ورک پرمٹ، ویزا، داخلے کی منظوری، یا آجر، قونصل خانے، امیگریشن اتھارٹی یا کسی سرکاری ادارے کا کوئی فیصلہ ضرور ملے گا۔",
          "30 سے 40 دن کے دستاویزی عمل سمیت کوئی بھی بتایا گیا وقت صرف تخمینہ ہے اور دستاویزات، آجر کے جائزے، قونصلر طریقہ کار اور سرکاری کارروائی کے مطابق بدل سکتا ہے۔",
        ],
      },
      {
        title: "5. صارف کی ذمہ داریاں",
        body: [
          "امیدوار اور پارٹنر ایجنسیاں درست، مکمل اور قابل قبول دستاویزات فراہم کرنے کی ذمہ دار ہیں، جن میں پاسپورٹ کی تفصیلات، سی وی، اہلیت کی معلومات، اور مطلوبہ قانونی یا قونصلر دستاویزات شامل ہو سکتی ہیں۔",
          "صارفین اپنے ملک، ٹرانزٹ ممالک اور جمہوریہ بیلاروس کے قوانین کی پابندی کے ذمہ دار ہیں۔ جب تک تحریری طور پر الگ معاہدہ نہ ہو، ذاتی سفر، قونصلر یا تیسرے فریق کے اخراجات صارف کی ذمہ داری ہیں۔",
        ],
      },
      {
        title: "6. رابطہ کی تفصیلات",
        body: [
          "ان شرائط کے بارے میں سوالات کے لیے BUDEYA سے ای میل Inkostehno@gmail.com، فون یا WhatsApp +375 44 548 08 08، یا اوپر درج کمپنی کے پتے پر رابطہ کریں۔",
        ],
      },
    ],
  },
  si: {
    title: "සේවා කොන්දේසි",
    lastUpdated: "අවසන් යාවත්කාලීනය: 2026 ජූලි 8",
    metaTitle: "සේවා කොන්දේසි | BUDEYA",
    metaDescription: "බෙලරුස්හි නීත්‍යානුකූල රැකියා සහාය සඳහා BUDEYA සේවා කොන්දේසි.",
    sections: [
      {
        title: "1. සමාගමේ තොරතුරු",
        body: [
          "මෙම වෙබ් අඩවිය බෙලරුස් ජනරජයේ LLC «INCOStechno» විසින් සපයනු ලබන BUDEYA බඳවා ගැනීමේ සේවා පිළිබඳ තොරතුරු ඉදිරිපත් කරයි.",
          "සමාගමේ ලිපිනය: Republic of Belarus, 220118, Minsk, Shishkin st., 20/1-33.",
        ],
      },
      {
        title: "2. වෙබ් අඩවිය භාවිතා කිරීම",
        body: [
          "මෙම වෙබ් අඩවියේ තොරතුරු බෙලරුස්හි නීත්‍යානුකූල රැකියා සහාය පිළිබඳ සාමාන්‍ය තොරතුරු ලබා දීම සඳහා පමණි.",
          "ඔබ වෙබ් අඩවිය අනිසි ලෙස භාවිතා නොකිරීමට, එහි ක්‍රියාකාරිත්වයට බාධා නොකිරීමට, හෝ අසත්‍ය, නොමඟ යවන හෝ නීති විරෝධී තොරතුරු ඉදිරිපත් නොකිරීමට එකඟ වේ.",
        ],
      },
      {
        title: "3. සේවා විස්තරය",
        body: [
          "BUDEYA උපදේශනය, ලියකියවිලි සම්බන්ධීකරණය, වැඩ බලපත්‍ර සහාය, වීසා ලියකියවිලි සහාය, පදිංචියට මාරුවීමේ සම්බන්ධීකරණය සහ අපේක්ෂකයින්, හවුල්කාර නියෝජිතායතන සහ බෙලරුසියානු සේවායෝජකයින් අතර සන්නිවේදන සහාය ලබා දිය හැක.",
          "සේවාවල නිශ්චිත පරාසය අපේක්ෂකයාගේ තත්ත්වය, සේවායෝජකයාගේ අවශ්‍යතා සහ අදාළ බෙලරුසියානු සංක්‍රමණ හා කම්කරු නීති මත රඳා පවතී.",
        ],
      },
      {
        title: "4. වීසා හෝ රැකියා සහතිකයක් නොමැත",
        body: [
          "BUDEYA කිසිදු අපේක්ෂකයෙකුට රැකියා පිරිනැමීමක්, වැඩ බලපත්‍රයක්, වීසා බලපත්‍රයක්, ඇතුළුවීමේ අනුමැතියක්, හෝ සේවායෝජකයෙකු, කොන්සියුලර් කාර්යාලයක්, සංක්‍රමණ අධිකාරියක් හෝ වෙනත් රාජ්‍ය ආයතනයක තීරණයක් ලැබෙන බවට සහතික නොකරයි.",
          "දින 30-40 ක ලියකියවිලි ක්‍රියාවලිය ඇතුළුව සඳහන් කරන ඕනෑම කාලසීමාවක් ඇස්තමේන්තුවක් පමණක් වන අතර ලියකියවිලි, සේවායෝජකයාගේ සමාලෝචනය, කොන්සියුලර් ක්‍රියාපටිපාටි සහ රාජ්‍ය ක්‍රියාවලිය අනුව වෙනස් විය හැක.",
        ],
      },
      {
        title: "5. පරිශීලක වගකීම්",
        body: [
          "විදේශ ගමන් බලපත්‍ර විස්තර, ජීවදත්ත සටහන, සුදුසුකම් තොරතුරු සහ අවශ්‍ය නීතිගත හෝ කොන්සියුලර් ලියකියවිලි ඇතුළුව නිවැරදි, සම්පූර්ණ සහ වලංගු ලියකියවිලි ලබා දීම අපේක්ෂකයින් සහ හවුල්කාර නියෝජිතායතනවල වගකීමයි.",
          "තම පදිංචි රටේ, ගමන් මාරු රටවල සහ බෙලරුස් ජනරජයේ නීති පිළිපැදීම පරිශීලකයින්ගේ වගකීමයි. වෙනම ලිඛිත එකඟතාවක් නොමැති නම් පුද්ගලික ගමන්, කොන්සියුලර් හෝ තෙවන පාර්ශ්ව වියදම් පරිශීලකයාගේ වගකීම වේ.",
        ],
      },
      {
        title: "6. සම්බන්ධතා තොරතුරු",
        body: [
          "මෙම කොන්දේසි පිළිබඳ ප්‍රශ්න සඳහා BUDEYA වෙත email: Inkostehno@gmail.com, දුරකථන හෝ WhatsApp: +375 44 548 08 08, හෝ ඉහත සමාගම් ලිපිනයට සම්බන්ධ වන්න.",
        ],
      },
    ],
  },
};

export function getTermsContent(language: string) {
  return terms[isLanguage(language) ? language : DEFAULT_LANGUAGE];
}
