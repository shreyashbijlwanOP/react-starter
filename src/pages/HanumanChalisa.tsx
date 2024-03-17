const chaupai = [
  `श्रीगुरु चरन सरोज रज, 
  निज मनु मुकुरु सुधारि। 
  
  बरनऊं रघुबर बिमल जसु,
  जो दायकु फल चारि।।
  
  बुद्धिहीन तनु जानिके,
  सुमिरौं पवन-कुमार।
   
   बल बुद्धि बिद्या देहु मोहिं, 
   हरहु कलेस बिकार।।
  `,

  `
  जय हनुमान ज्ञान गुन सागर।
  जय कपीस तिहुं लोक उजागर।।

  रामदूत अतुलित बल धामा।
  अंजनि-पुत्र पवनसुत नामा।।

  महाबीर बिक्रम बजरंगी।
  कुमति निवार सुमति के संगी।।
   
  कंचन बरन बिराज सुबेसा।
  कानन कुंडल कुंचित केसा।।
   
  हाथ बज्र औ ध्वजा बिराजै।
  कांधे मूंज जनेऊ साजै।
   
  संकर सुवन केसरीनंदन।
  तेज प्रताप महा जग बन्दन।।
   
  विद्यावान गुनी अति चातुर।
  राम काज करिबे को आतुर।।
   
  प्रभु चरित्र सुनिबे को रसिया।
  राम लखन सीता मन बसिया।।
   
  सूक्ष्म रूप धरि सियहिं दिखावा।
  बिकट रूप धरि लंक जरावा।।
   
  भीम रूप धरि असुर संहारे।
  रामचंद्र के काज संवारे।।
   
  लाय सजीवन लखन जियाये।
  श्रीरघुबीर हरषि उर लाये।।
   
  रघुपति कीन्ही बहुत बड़ाई।
  तुम मम प्रिय भरतहि सम भाई।।
   
  सहस बदन तुम्हरो जस गावैं।
  अस कहि श्रीपति कंठ लगावैं।।
   
  सनकादिक ब्रह्मादि मुनीसा।
  नारद सारद सहित अहीसा।।
   
  जम कुबेर दिगपाल जहां ते।
  कबि कोबिद कहि सके कहां ते।।
   
  तुम उपकार सुग्रीवहिं कीन्हा।
  राम मिलाय राज पद दीन्हा।।
   
  तुम्हरो मंत्र बिभीषन माना।
  लंकेस्वर भए सब जग जाना।।
   
  जुग सहस्र जोजन पर भानू।
  लील्यो ताहि मधुर फल जानू।।
   
  प्रभु मुद्रिका मेलि मुख माहीं।
  जलधि लांघि गये अचरज नाहीं।।
   
  दुर्गम काज जगत के जेते।
  सुगम अनुग्रह तुम्हरे तेते।।
   
  राम दुआरे तुम रखवारे।
  होत न आज्ञा बिनु पैसारे।।
   
  सब सुख लहै तुम्हारी सरना।
  तुम रक्षक काहू को डर ना।।
   
  आपन तेज सम्हारो आपै।
  तीनों लोक हांक तें कांपै।।
   
  भूत पिसाच निकट नहिं आवै।
  महाबीर जब नाम सुनावै।।
   
  नासै रोग हरै सब पीरा।
  जपत निरंतर हनुमत बीरा।।
   
  संकट तें हनुमान छुड़ावै।
  मन क्रम बचन ध्यान जो लावै।।
   
  सब पर राम तपस्वी राजा।
  तिन के काज सकल तुम साजा।
   
  और मनोरथ जो कोई लावै।
  सोइ अमित जीवन फल पावै।।
   
  चारों जुग परताप तुम्हारा।
  है परसिद्ध जगत उजियारा।।
   
  साधु-संत के तुम रखवारे।
  असुर निकंदन राम दुलारे।।
   
  अष्ट सिद्धि नौ निधि के दाता।
  अस बर दीन जानकी माता।।
   
  राम रसायन तुम्हरे पासा।
  सदा रहो रघुपति के दासा।।
   
  तुम्हरे भजन राम को पावै।
  जनम-जनम के दुख बिसरावै।।
   
  अन्तकाल रघुबर पुर जाई।
  जहां जन्म हरि-भक्त कहाई।।
   
  और देवता चित्त न धरई।
  हनुमत सेइ सर्ब सुख करई।।
   
  संकट कटै मिटै सब पीरा।
  जो सुमिरै हनुमत बलबीरा।।
   
  जै जै जै हनुमान गोसाईं।
  कृपा करहु गुरुदेव की नाईं।।
   
  जो सत बार पाठ कर कोई।
  छूटहि बंदि महा सुख होई।।
   
  जो यह पढ़ै हनुमान चालीसा।
  होय सिद्धि साखी गौरीसा।।
   
  तुलसीदास सदा हरि चेरा।
  कीजै नाथ हृदय मंह डेरा।। `,

  `पवन तनय संकट हरन, मंगल मूरति रूप।
  राम लखन सीता सहित, हृदय बसहु सुर भूप।।`,
];
export default function HanumanChalisa() {
  return (
    <div className="p-6">
      {chaupai.map((dhoda, index) => (
        <div
          key={index}
          className="text-center text-2xl leading-loose mb-8 font-semibold"
        >
          {dhoda}
        </div>
      ))}
    </div>
  );
}
