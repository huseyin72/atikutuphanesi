

//sistemi kurdum id ve name arraylarını doldurduktan sonra bu iş tamamdır

const select1 = document.querySelector("#drop1");
const select2 = document.querySelector("#drop2");
const codes = document.querySelector(".codes");

var theUl = document.querySelector(".codeUl");
var select1Array = ["01-MADENLERİN ARANMASI, ÇIKARILMASI, İŞLETİLMESİ, FİZİKİ VE KİMYASAL İŞLEME TABİ TUTULMASI SIRASINDA ORTAYA ÇIKAN ATIKLAR","02-TARIM, BAHÇIVANLIK, SU ÜRÜNLERİ, ORMANCILIK, AVCILIK VE BALIKÇILIK, GIDA HAZIRLAMA VE İŞLEMEDEN KAYNAKLANAN ATIKLAR","03-AHŞAP İŞLMEME VE KAĞIT, KARTON, KAĞIT HAMURU, PANEL(SUNTA) VE MOBİLYA ÜRTİMİNDEN KAYNAKLANAN ATIKLAR","04-DERİ, KÜRK VE TEKSTİL ENDÜSTRİLERİNDEN KAYNAKLANAN ATIKLAR","05-PETROL RAFİNASYONU, DOĞAL GAZ SAFLAŞTIRMA VE KÖMÜRÜN PİROLOTİK İŞLENMESİNDEN KAYNAKLANAN ATIKLAR","06-ANORGANİK KİMYASAL İŞLEMLERDEN KAYNAKLANAN ATIKLAR","07-ORGANİK KİMYASAL İŞLEMLERDEN KAYNAKLANAN ATIKLAR","08-ASTARLAR(BOYALAR,VERNİKLER VE VİTRİFYE EMAYELER), YAPIŞKANLAR, MACUNLAR VE BASKI MÜREKKEPLERİNİN ÜRETİM, FORMÜLASYON, TEDARİK VE KULLANIMINDAN (İFTK) KAYNAKLANAN ATIKLAR","09-FOTOĞRAF ENDÜSTRİSİNDEN KAYNAKLANAN ATIKLAR","10-ISIL İŞLEMLERDEN KAYNAKLANAN ATIKLAR","11-METAL VE DİĞER MALZEMELERİN KİMYASAL YÜZEY İŞLEME VE KAPLANMASI İŞLEMLERİNDEN KAYNAKLANAN ATIKLAR; DEMİR DIŞ HİDROMETALURJİ","12-METALLERİN VE PLASTİKLERİN FİZİKİ VE MEKANİK YÜZEY İŞLEMLERİNDEN VE ŞEKİLLENDİRİLMESİNDEN KAYNAKLANAN ATIKLAR","13-YAĞ ATIKLARI VE SIVI YAKIT ATIKLARI(YENİLEBİLİR YAĞLAR, 05 VE 12 HARİÇ)","14-ATIK ORGANİK ÇÖZÜCÜLER, SOĞUTUCULAR VE İTİCİ GAZLAR (07 VE 08 HARİÇ)","15-ATIK AMBALAJLAR İLE BAŞKA BİR ŞEKİLDE BELİRTİLMEMİŞ EMİCİLER, SİLME BEZLERİ, FİLTRE MALZEMELERİ VE KORUYUCU GİYSİLER","16-LİSTEDE BAŞKA BİR ŞEKİLDE BELİRTİLMEMİŞ ATIKLAR","17-İNŞAAT VE YIKIM ATIKLARI (KİRLENMİŞ ALANLARDAN ÇIKARTILAN HAFRİYAT DAHİL)","18-İNSAN VE HAYVAN SAĞLIĞI VE/VEYA BU KONULARDAKİ ARAŞTIRMALARDAN KAYNAKLANAN ATIKLAR (DOĞRUDAN SAĞLIĞA İLİŞKİN OLMAYAN MUTFAK VE RESTORAN ATIKLARI HARİÇ)","19-ATIK YÖNETİM TESİSLERİNDEN, TESİS DIŞI ATIKSU ARITMA TESİSLERİNDEN VE İNSAN TÜKETİMİ VE ENDÜSTRİYEL KULLANIM İÇİN SU HAZIRLAMA TESİSLERİNDEN KAYNAKLANAN ATIKLAR","20-AYRI TOPLANMIŞ FRAKSİYONLAR DAHİL BELEDİYE ATIKLARI (EVLERDEN KAYNAKLANAN VE BENZER TİCARİ, ENDÜSTRİYEL VE KURUMSAL ATIKLAR)"];
var select2Array = [
    ["01 01 Maden kazılarından kaynaklanan atıklar","01 03 Metalik minerallerin fiziki ve kimyasal olarak işlenmesinden kaynaklanan atıklar","01 04 Metalik olmayan minerallerin fiziki ve kimyasal işlemlerinden kaynaklanan atıklar","01 05 Sondaj Çamurları ve Diğer Sondaj Atıkları"],
    ["02 01 Tarım, Bahçıvanlık, Su Ürünleri Üretimi, Ormancılık, Avcılık ve Balıkçılıktan Kaynaklanan Atıklar","02 02 Et, balık ve diğer hayvansal kökenli gıda maddelerinin hazırlanmasından ve işlenmesinden kaynaklanan atıklar","02 03 Meyve, sebze, tahıl, yenilebilir yağlar, kakao, kahve, çay ve tütünün hazırlanmasından ve işlenmesinden; konserve üretiminden, maya ve maya özütü üretiminden, melas hazırlanması ve fermantasyonundan kaynaklanan atıklar","02 04 Şeker üretiminden kaynaklanan atıklar","02 05 Süt ürünleri endüstrisinden kaynaklanan atıklar","02 06 Unlu mamuller ve şekerleme endüstrisinden kaynaklanan atıklar","02 07 Alkollü ve alkolsüz içeceklerin (kahve, çay ve kakao hariç) üretiminden kaynaklanan atıklar"],
    ["03 01 Ağaç İşlemeden ve Sunta ve Mobilya Üretiminden Kaynaklanan Atıklar","03 02 Ahşap Koruma Atıkları","03 03 Kağıt hamuru, kağıt ve kağıt karton üretim ve işlenmesinden kaynaklanan atıklar"],
    ["04 01 Deri ve Kürk Endüstrisinden Kaynaklanan Atıklar","04 02 Tekstil Endüstrisinden Kaynaklanan Atıklar"],
    ["05 01 Petrol Rafinasyon Atıkları","05 06 Kömürün Pirolitik İşlenmesinden Kaynaklanan Atıklar","06 07 Doğal Gaz Saflaştırma ve Nakliyesinde Oluşan Atıklar"],
    ["06 01 Asitlerin İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar","06 02 Bazların İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar","06 03 Tuzların ve Çözeltilerinin ve Metalik Oksitlerin İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar","06 04 06 03 Dışındaki Metal İçeren Atıklar","06 05 İşletme Sahası İçerisindeki Atıksu Arıtımından Kaynaklanan Çamurlar","06 06 Kükürtlü Kimyasallardan, Kükürtleyici Kimyasal İşlemlerinin İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar","06 07 Halojenlerin İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) ve Halojenli Kimyasal İşlemlerden Kaynaklanan Atıklar","06 08 Silikon ve Silikon Türevlerinin imalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar","06 09 Fosforlu Kimyasalların İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) ve Fosforlu Kimyasal  İşlenmesinden Kaynaklanan Atıklar","06 10 Gübre Üretimi ve Azotlu Kimyasalların İşlenmesi ve Azot Kimyasalları İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar","06 11 Anorganik Pigmentlerin ve Opaklaştırıcıların İmalatından Kaynaklanan Atıklar","06 13 Başka Bir Şekilde Tanımlanmamış Anorganik Kimyasal İşlemlerden Kaynaklanan Atıklar"],
    ["07 01 Temel Organik Kimyasal Maddelerin İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar","07 02 Plastiklerin, Sentetik Kauçuk ve Yapay Elyafların İmalat, Formülasyon, Tedarik ve Kullanımından İFTK Kaynaklanan Atıklar","07 03 Organik Boyaların ve Pigmentlerin İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar (06 11 dışındaki)","07 04 Organik Bitki Koruma Ürünlerinin (02 01 08 ve 02 01 09 hariç), Ahşap Koruyucu Olarak Kullanılan Maddelerin ( Ajanlarının) (03 02 Hariç) ve Diğer Biyositlerin İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar","07 05 İlaçların İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar","07 06 Yağ, Gres, Sabun, Deterjan, Dezenfektan ve Kozmetiklerin İmalat, Formülasyon, Tedarik ve Kullanımından İFTK Kaynaklanan Atıklar ","07 07 Başka Bir Şekilde Tanımlanmamış Kimyasal ve Kimyasal Ürünlerinin İmalat, Formülasyon, Tedarik ve Kullanımmdan (İFTK) Kaynaklanan Atıklar"],
    ["08 01 Boya ve Verniğin İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) ve Sökülmesinden Kaynaklanan Atıklar","08 02 Diğer Kaplama Maddelerinin (Seramik Kaplama Dahil) İmalat, Formülas on, Tedarik ve Kullanımından İFTK Kaynaklanan Atıklar","08 03 Baskı Mürekkeplerinin İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar","08 04 Yapışkanlar ve Yalıtıcıların İmalat, Formülasyon, Tedarik ve Kullanımından (İFTK) Kaynaklanan Atıklar (Su Geçirmeyen Ürünler Dahil)","08 05 08'de Başka Şekilde Tanımlanmamış Atıklar"],
    ["09 01 Fotoğraf Endüstrisi Atıkları"],
    ["10 01 Enerji Santrallerinden ve Diğer Yakma Tesislerinden Kaynaklanan Atıklar (19 Hariç)","10 02 Demir ve Çelik Endüstrisinden Kaynaklanan Atıklar","10 03 Alüminyum Isıl Metalurjisinden Kaynaklanan Atıklar","10 04 Kurşun Isıl Metalurjisinden Kaynaklanan Atıklar","10 05 Çinko Isıl Metalurjisinden Kaynklanan Atıklar","10 06 Bakır Isıl Metalurjisinden Kaynaklanan Atıklar","10 07 Gümüş, Altın ve Platin Isıl Metalurjisinden Kaynaklanan Atıklar","10 08 Demir Dışı Isıl Metalurjisinden Kaynaklanan Atıklar ","10 09 Demir Döküm İşleminden Kaynaklanan Atıklar","10 10 Demir Dışı Döküm Atıkları","10 11 Cam ve Cam Ürünleri Üretim Atıkları","10 12 Seramik Ürünler, Tuğlalar, Fayanslar ve İnşaat Malzemelerinin Üretiminden Kaynaklanan Atıklar","10 13 Çimento, Kireç ve Alçı ve Bunlardan Yapılan Ürünlerin Üretim Atıkları","10 14 Krematoryum Atıkları"],
    ["11 01 Metal ve Diğer Malzemelerin Kimyasal Yüzey İşlemi ve Kaplanmasından Kaynaklanan Atıklar (Örn: Galvanizleme, Çinko Kaplama, Dekapaj, Asitle Sıyırma, Fosfatlama, Alkalin Degradasyonu, Anotlama)","11 02 Demir Dışındaki Madenlerin Hidrometalurjik İşlenmesinin Atıkları","11 03 Tavlama İşlemleri Çamurları ve Katı Maddeleri","11 05 Sıcak Galvanizleme İşlemleri Atıkları"],
    ["12 01 Metallerin ve Plastiklerin Fiziki ve Mekanik Yüzey İşlemlerinden ve Biçimlendirilmesinden Kaynaklanan Atıklar","12 03 Su ve Buhar Yağ Alma İşlemlerinden Kaynaklanan Atıklar (11 Hariç)"],
    ["13 01 Atık Hidrolik Yağlar","13 02 Atık Motor, Şanzıman ve Yağlama Yağları","13 03 Atık Yalıtım ve Isı iletim Yağları","13 04 Sintine Yağları","13 05 Yağ/Su Ayırıcısı İçerikleri","13 07 Sıvı Yakıtların Atıkları","13 08 Başka bir şekilde tanımlanmamış yağ atıkları",],
    ["14 06 Atık Organik Çözücüler, Soğutucular ve Köpük/AerosoI İtici Gazlar"],
    ["15 01 Ambalaj (Belediyenin Ayrı Toplanmış Ambalaj Atıkları Dahil)","15 02 Emiciler, Filtre Malzemeleri, Temizleme Bezleri ve Koruyucu Giysiler"],
    ["16 01 Çeşitli Taşıma Türlerindeki (İş Makineleri Dahil) Ömrünü Tamamlamış Araçlar ve Ömrünü Tamamlamış Araçların Sökülmesi ile Araç Bakımından (13, 14, 16 06 ve 16 08 hariç) Kaynaklanan Atıklar","16 02 Elektrikli ve Elektronik Ekipman Atıkları","16 03 Standart Dışı Gruplar ve Kullanılmamış Ürünler","16 04 Patlayıcı Atıklar ","16 05 Patlayıcı Atıklar ","16 06 Patlayıcı Atıklar ","16 07 Nakliye Tankı, Depolama Tankı ve Varil Temizleme işlemlerinden Kaynaklanan Atıklar (05 ve 13 hariç)","16 08 Bitik Katalizörler","16 09 Oksitleyici Maddeler","16 10 Saha Dışı Arıtmaya Gönderilecek Sulu Sıvı Atıklar","16 11 Atık Astarlar ve Refraktörler"],
    ["17 01 Beton, Tuğla, Kiremit ve Seramik","17 02 Ahşap, Cam ve Plastik","17 03 Bitümlü Karışımlar, Kömür Katranı ve Katranlı Ürünler ","17 04 Metaller (Alaşımları Dahil)","17 05 Toprak (Kirlenmiş Yerlerde Yapılan Hafriyat Dahil), Taşlar ve Dip Tarama Çamurları ","17 06 Yalıtım Malzemeleri ve Asbest İçeren İnşaat Malzemeleri ","17 08 Alçı Bazlı İnşaat Malzemeleri ","17 09 Diğer İnşaat ve Yıkım Atıkları "],
    ["18 01 İnsanlarda Doğum, Teşhis, Tedavi ya da Hastalık Önleme Çalışmalanndan Kaynaklanan Atıklar","18 02 Hayvanlarla İlgili Araştırma, Teşhis, Tedavi ya da Hastahk Önleme Çalışmalarından Kaynaklanan Atıklar"],
    ["19 01 Atık Yakma veya Piroliz'den Kaynaklanan Atıklar","19 02 Atıkların Fiziki/Kimyasal Arıtımından Kaynaklanan Atıklar (Krom Giderme, Siyanür Giderme, Nötralizasyon Dahil) ","19 03 Stabilize Edilmiş/Katılaştırılmış Atıklar (5)","19 04 Vitrifiye Edilmiş Atık ve Vitrifikasyon İşleminden Kaynaklanan Atıklar","19 05 Katı Atıkların Aerobik Arıtımından Kaynaklanan Atıklar","19 06 Atığın Anaerobik Arıtımından Kaynaklanan Atıklar","19 07 Düzenli Depolama Sahası Sızıntı Suları","19 08 Başka Bir Şekilde Tanımlanmamış Atıksu Arıtma Tesisi Atıkları","19 09 İnsan Tüketimi ve Endüstriyel Kullanım İçin Gereken Suyun Hazırlanmasından Kaynaklanan Atıklar","19 10 Metal İçeren Atıkların Parçalanmasından Kaynaklanan Atıklar","19 11 Yağın Yeniden Üretiminden Kaynaklanan Atıklar","19 12 Başka Bir Şekilde Tanımlanmamış Atıkların Mekanik Arıtımından (Örneğin Ayrıştırılması, Ezilmesi, Sıkıştırılması, Topak Haline Getirilmesi) Kaynaklanan Atıklar","19 13 Toprak ve Yeraltı Suyu Islahından Kaynaklanan Atıklar",],
    ["20 01 Ayrı Toplanan Fraksiyonlar (15 01 Hariç)","20 02 Bahçe ve Park Atıkları (Mezarlık Atıkları Dahil)","20 03 Diğer Belediye Atıkları"]
];
var select3Array =[
    [["01 01 01 - Metalik maden kazılarından kaynaklanan atıklar","01 01 02 - Metalik olmayan maden kazılarından kaynaklanan atıklar"],["01 03 04 - Sülfürlü cevherlerin işlenmesinden kaynaklanan asit üretici maden atıkları","01 03 05 - Tehlikeli madde içeren diğer maden atıkları","01 03 06 - 01 03 04 ve 01 03 05 dışındaki diğer maden atıkları","01 03 07 - Metalik minerallerin fiziki ve kimyasal işlenmesinden kaynaklanan tehlikeli maddeler içeren diğer atıklar","01 03 08 - 01 03 07 dışındaki diğer tozumsu ve pudramsı atıklar","01 03 09 - 01 03 07 dışındaki alüminyum oksit üretiminden çıkan kırmızı çamur" ,"01 03 99 - Başka bir şekilde tanımlanmamış atıklar"],["01 04 07 - Metalik olmayan minerallerin fiziki ve kimyasal işlenmesinden kaynaklanan tehlikeli maddeler içeren atıklar","01 04 08 01 04 07 dışındaki atık kaya ve çakıl taşı atıkları - ","01 04 09 Atık kum ve killer- ","01 04 10 - 01 04 07 dışındaki tozumsu ve pudramsı atıklar","01 04 11 - 01 04 07 dışındaki potas ve kaya tuzu işlemesinden kaynaklanan atıklar","01 04 12 - 01 04 07 ve 01 04 11 dışındaki minerallerin yıkanması ve temizlenmesinden kaynaklanan ince taneli atıklar ve diğer atıklar","01 04 13 - 01 04 07 dışındaki taş yontma ve kesme işlemlerinden kaynaklanan atıklar","01 04 99 - Başka bir şekilde tanımlanmamış atıklar"],["01 05 04 - Tatlı su sondaj çamurları ve atıkları","01 05 05 - Yağ içeren sondaj çamurları ve atıkları","01 05 06 - Tehlikeli maddeler içeren sondaj çamurları ve diğer sondaj atıkları","01 05 07 - 01 05 05 ve 01 05 06 dışındaki barit içeren sondaj çamurları ve atıkları","01 05 08 - 01 05 05 ve 01 05 06 dışındaki klorür içeren sondaj çamurları ve atıkları","01 05 99 - Başka bir şekilde tanımlanmamış atıklar"]],
    [["02 01 01 - Yıkama ve temizleme işlemlerinden kaynaklanan çamurlar", "02 01 02 - Hayvan dokusu atıkları", "02 01 03 -Bitki dokusu atıkları ", "02 01 04 - Atık lastikler (ambalajlar hariç)", "02 01 06 - Ayrı toplanmış ve saha dışında işlem görecek hayvan dışkısı, idrar ve tezek (ve bunlarla temas etmiş saman dahil), akan sıvılar", "02 01 07 - Ormancılık atıkları", "02 01 08 - Tehlikeli maddeler içeren zirai kimyasal atıklar","02 01 09 - 02 01 08 dışındaki zirai kimyasal atıkları","02 01 10 - Atık metal","02 01 99 - Başka bir şekilde tanımlanmamış atıklar"],["02 02 01 - Yıkama ve temizlemeden kaynaklanan çamurlar","02 02 02 - Hayvan dokusu atığı","02 02 03 - Tüketime ya da işlenmeye uygun olmayan maddeler","02 02 04 - İşletme sahası içerisindeki atıksu arıtımından kaynaklanan çamurlar","02 02 99 - Başka bir şekilde tanımlanmamış atıklar"],["02 03 01 - Yıkama, temizleme, soyma, santrifüj ve ayırma işlemlerinden kaynaklanan çamurlar","02 03 02 - Koruyucu katkı maddelerinden kaynaklanan atıklar","02 03 03 - Çözücü ekstraksiyonundan kaynaklanan atıklar","02 03 04 - Tüketime ya da işlenmeye uygun olmayan maddeler","02 03 05 - İşletme sahası içerisindeki atıksu arıtımından kaynaklanan atıklar","02 03 99 - Başka bir şekilde tanımlanmamış atıklar"],["02 04 01 - Şeker pancarının temizlenmesinden ve yıkanmasından kaynaklanan toprak","02 04 02 - Standart dışı kalsiyum karbonat","02 04 03 - İşletme sahası içerisindeki atıksu arıtımından kaynaklanan çamurlar","02 04 99 - Başka bir şekilde tanımlanmamış atıklar"],["02 05 01 - Tüketime ya da işlenmeye uygun olmayan maddeler","02 05 02 - İşletme sahası içerisindeki atıksu arıtımından kaynaklanan çamurlar","02 05 99 - Başka bir şekilde tanımlanmamış atıklar"],["02 06 01 - Tüketime ve işlenme uygun olmayan maddeler","02 06 02 -Koruyucu katkı maddelerinden kaynaklanan atıklar ","02 06 03 - İşletme sahası içerisindeki atıksu arıtımından kaynaklanan çamurlar","02 06 99 - Başka bir şekilde tanımlanmamış atıklar"],["02 07 01 - Hammaddelerin yıkanmasından, temizlenmesinden ve mekanik olarak sıkılmasından kaynaklanan atıklar","02 07 02 - Alkol damıtılmasından kaynaklanan atıklar","02 07 03 - Kimyasal işlem atıkları","02 07 04 - Tüketime ya da işlenmeye uygun olmayan maddeler","02 07 05 - İşletme sahası içerisindeki atıksu arıtımından kaynaklanan çamurlar","02 07 99 - Başka bir şekilde tanımlanmayan atıklar",]],
    [["03 01 01 -	Ağaç kabuğu ve mantar atıkları (1)" ,"03 01 04*	- Tehlikeli maddeler içeren talaş, yonga, kıymık, ahşap, kontraplak ve kaplamalar","03 01 05 -	03 01 04 dışındaki talaş, yonga, kıymık, ahşap , kontraplak ve kaplamalar (1)","03 01 99 -	Başka bir şekilde tanımlanmamış atıklar"],["03 02 01* -	Halojenlenmemiş organik ahşap koruyucu maddeler","03 02 02* -	Organoklorlu ahşap koruyucu maddeler","03 02 03* -	Organometal içeren ahşa koruyucu maddeler","03 02 04* -	Anorganik ahşap koruyucu maddeler","03 02 05* -	Tehlikeli maddeler içeren diğer ahşap koruyucuları","03 02 99 -	Başka bir şekilde tanımlanmamış ahşap koruyucuları"],["03 03 01 -	Ağaç kabuğu ve odun atıkları (1)", "03 03 02 -	Yeşil sıvı çamuru (pişirme sıvısı geri kazanımından)","03 03 05 -	Kâğıt geri kazanım işleminden kaynaklanan mürekkep giderme çamurları", "03 03 07 -	Atık kâğıt ve kartonun hamur haline getirilmesi sırasında mekanik olarak ayrılan ıskartalar", "03 03 08 -	Geri dönüşüme gitmek üzere sınıflandırılan kağıt ve kartondan kaynaklanan atıklar","03 03 09 -	Kireç çamuru atığı","03 03 10 -	Mekanik ayırma sonucu oluşan elyaf ıskartaları, elyaf, dolgu ve yüzey kaplama maddesi çamuru", "03 03 11 -	03 03 10 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar","03 03 99 -	Başka bir şekilde tanımlanmamış atıklar"]],
    [["04 01 01 -	Sıyırma ve kireçleme ile deriden et sıyırma işleminden kaynaklanan atıklar","04 01 02 - Kireçleme atıkları","04 01 03* -	Sıvı halde olmayan çözücüler içeren yağ giderme atıkları","04 01 04 -	Krom içeren sepi şerbeti","04 01 05 -	Krom içermeyen sepi şerbeti","04 01 06 -	Saha içi atıksu arıtımından kaynaklanan krom içeren çamurlar","04 01 07 -	Saha içi atıksu arıtımından kaynaklanan krom içermeyen çamurlar","04 01 08 -	Krom içeren tabaklanmış atık deri (çivitli parçalar, tıraşlamalar, kesmeler, parlatma tozu)","04 01 09 -	Perdah ve boyama atıkları","04 01 99 -	Başka bir şekilde tanımlanmamış atıklar"],["04 02 09 -	Kompozit malzeme atıkları (emprenye edilmiş tekstil, elastomer, lastomer)","04 02 10 -	Doğal ürünlerden oluşan organik maddeler (örneğin yağ, mum)","04 02 14* -	Organik çözücüler içeren perdah atıkları","04 02 15 -	04 02 14 dışındaki perdah atıkları","04 02 16* -	Tehlikeli maddeler içeren boya maddeleri ve pigmentler","04 02 17 -	04 02 16 dışındaki boya maddeleri ve pigmentler","04 02 19* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren çamurlar","04 02 20 -	04 02 19 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar","04 02 21 -	İşlenmemiş tekstil elyafı atıkları","04 02 22 -	İşlenmiş tekstil elyafı atıkları","04 02 99 -	Başka bir şekilde tanımlanmamış atıklar"]],
    [["05 01 02* -	Tuz arındıma (tuz giderici) çamurları","05 01 03* -	Tank dibi çamurları","05 01 04* -	Asit alkil çamurları","05 01 05* -	Petrol döküntüleri"," 05 01 06* -	İşletme ya da ekipman bakım çalışmalarından kaynaklanan yağlı çamurlar","05 01 07* -	Asit ziftleri","05 01 08* -	Diğer ziftler","05 01 09* - 	Saha içi atıksu arıtımından kaynaklanan tehlikeli madde içeren çamurlar","05 01 10 -	05 01 09 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar"," 05 01 11* -	Yakıtların bazlar ile temizlemesi sonucu oluşan atıklar"," 05 01 12* -	Yağ içeren asitler","05 01 13 - 	Kazan besleme suyu çamurları","05 01 14 -	Soğutma kolonlarından kaynaklanan atıklar","05 01 15* -	Kullanılmış filtre killeri","05 0l 16 -	Petrol desülfürizasyonu sonucu oluşan kükürt içeren atıklar","05 01 17 -	Bitüm","05 01 99 -	Başka bir şekilde tanımlanmamış atıklar"],["05 06 01* -	Asit ziftleri","05 06 03* -	Diğer ziftler","05 06 04 -	Soğutma kolonlarından kaynaklanan atıklar","05 06 99 -	Başka bir şekilde tanımlanmayan atıklar"],["05 07 01*	Cıva içeren atıklar","05 07 02	Kükürt içeren atıklar","05 07 99	Başka bir şekilde tanımlanmamış atıklar"]],
    [["06 01 01* -	Sülfürik asit ve sülfüröz asit","06 01 02* -	Hidroklorik asit", " 06 01 03* -	Hidroflorik asit","06 01 04* -	Fosforik ve fosforöz asit","06 01 05* -	Nitrik asit ve nitröz asit","06 01 06* -	Diğer asitler","06 01 99 -	Başka bir şekilde tanımlanmamış atıklar"],["06 02 01* -	Kalsiyum hidroksit","06 02 03* -	Amonyum hidroksit","06 02 04* -	Sodyum ve potasyum hidroksit","06 02 05* -	Diğer bazlar","06 02 99 -	Başka bir şekilde tanımlanmamış atıklar"],["06 03 11* -	Siyanür içeren katı tuzlar ve solüsyonlar","06 03 13* -	Ağır metal içeren katı tuzlar ve solüsyonlar","06 03 14 -	06 03 11 ve 06 03 13 dışındaki katı tuzlar ve solüsyonlar","06 03 15* -	Ağır metal içeren metal oksitler","06 03 16 -	06 03 15 dışındaki diğer metal oksitler","06 03 99 -	Başka bir şekilde tanımlanmamış atıklar"],["06 04 03* -	Arsenik içeren atıklar","06 04 04* -	Cıva içeren atıklar","06 04 05* -	Başka ağır metaller içeren atıklar","06 04 99 -	Başka bir şekilde tanımlanmamış atıklar"],["06 05 02* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren çamurlar","06 05 03 -	06 05 02 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar"],["06 06 02* -	Tehlikeli kükürt bileşenleri içeren atıklar","06 06 03 -	06 06 02 dışındaki kükürt bileşenlerini içeren atıklar","06 06 99 -	Başka bir şekilde tanımlanmamış atıklar"],["06 07 01* -	Elektrolizden kaynaklanan asbest içercn atıklar","06 07 02* -	Klor üretiminden kaynaklanan aktif karbon","06 07 03* -	Cıva içeren baryum sülfat çamuru","06 07 04* -	Çözeltiler ve asitler, örneğin kontakt asidi","06 07 99 -	Başka bir şekilde tanımlanmamış atıklar"],["06 08 02* -	Zararlı silikonlar içeren atıklar","06 08 99 -	Başka bir şekilde tanımlanmamış atıklar"],["06 09 02 -	Fosforlu cüruf","06 09 03* -	Tehlikeli maddeler içeren ya da tehlikeli maddelerle kontamine olmuş kalsiyum bazlı reaksiyon atıkları","06 09 04 -	06 09 03 dışındaki kalsiyum bazlı reaksiyon atıkları","06 09 99 -	Başka bir şekilde tanımlanmamış atıklar"],["06 10 02* -	Tehlikeli maddeler içeren atıklar","06 10 99 -	Başka bir şekilde tanımlanmamış atıklar"],["06 11 01 -	Titanyum dioksit üretiminden kaynaklanan kalsiyum bazlı reaksiyon atıkları","06 11 99 -	Başka bir şekilde tanımlanmamış atıklar"],["06 13 01* -	Anorganik bitki koruma ürünleri, ahşap koruma ürünleri ve diğer biyositler","06 13 02* -	Kullanılmış aktif karbon (06 07 02 hariç)","06 13 03 -	Karbon siyahı","06 13 04* -	Asbest işlenmesinden kaynaklanan atıklar","06 13 05* -	Kurum","06 13 99 -	Başka bir şekilde tanımlanmamış atıklar"],],
    [["07 01 01* -	Su bazlı yıkama sıvıları ve ana çözeltiler"," 07 01 03* -	Halojenli organik çözücüler, yıkama sıvıları ve ana çözeltiler "," 07 01 04* -	Diğer organik çözücüler, yıkama sıvıları ve ana çözeltiler", "07 01 07* -	Halojenli dip tortusu ve reaksiyon kalıntıları"," 07 01 08* -	Diğer dip tortusu ve reaksiyon kalıntıları ", "07 01 09* -	Halojenli filtre keki ve kullanılmış absorbanlar","07 01 10* -	Diğer filtre kekleri ve kullanılmış absorbanlar","07 01 11* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren çamurlar","07 01 12 -	07 01 11 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar"," 07 01 99 -	Başka şekilde tanımlanmayan atıklar"],["07 02 01* -	Su bazlı yıkama sıvıları ve ana çözeltiler","07 02 03* -	Halojenli organik çözücüler, yıkama sıvıları ve ana çözeltiler","07 02 04* -	Diğer organik çözücüler, yıkama sıvıları ve ana çözeltiler","07 02 07* -	Halojenli dip tortusu ve reaksiyon kalıntıları","07 02 08* -	Diğer dip tortusu ve reaksiyon kalıntıları","07 02 09* -	Halojenli filtre kekleri ve kullanılmış absorbanlar","07 02 10* -	Diğer filtre kekleri ve kullanılmış absorbanlar","07 02 11* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren çamurlar","07 02 12 -	07 02 11 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar","07 02 13 -	Atık plastik","07 02 14* -	Tehlikeli maddeler içeren katkı maddelerinin atıkları","07 02 15 -	07 02 14 dışındaki katkı maddelerinin atıkları","07 02 16* -	Zararlı silikonlar içeren atıklar","07 02 17 -	07 02 16 dışında silikon içeren atıklar","07 02 99 -	Başka bir şekilde tanımlanmamış atıklar"],["07 03 01* -	Su bazlı yıkama sıvıları ve ana çözeltiler","07 03 03* -	Halojenli organik çözücüler, yıkama sıvıları ve ana çözeltiler","07 03 04* -	Diğer organik çözücüler, yıkama sıvıları ve ana özeltiler","07 03 07* -	Halojenli dip tortusu ve reaksiyon kalıntıları","07 03 08* -	Diğer dip tortusu ve reaksiyon kalıntıları","07 03 09* -	Halojenli filtre kekleri ve kullanılmış absorbanlar","07 03 10* -	Diğer filtre kekleri ve kullanılmış absorbanlar","07 03 11* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren çamurlar","07 03 12 -	07 03 11 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar","07 03 99 -	Başka bir şekilde tanımlanmamış atıklar"],["07 04 01* -	Su bazlı yıkama sıvıları ve ana çözeltiler","07 04 03* -	Halojenli organik çözücüler, yıkama sıvıları ve ana çözeltiler","07 04 04* -	Diğer organik çözücüler, yıkama sıvıları ve ana çözeltiler","07 04 07* -	Halojenli dip tortusu ve reaksiyon kalıntıları","07 04 08* -	Diğer dip tortusu ve reaksiyon kalıntıları","07 04 09* -	Halojenli filtre kekleri ve kullanılmış absorbanlar","07 04 10* -	Diğer filtre kekleri ve kullanılmış absorbanlar","07 04 11* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren çamurlar","07 04 12 -	07 04 11 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar","07 04 13* -	Tehlikeli madde içeren katı atıklar","07 04 99 -	Başka bir şekilde tanımlanmamış atıklar"],["07 05 01* -	Su bazlı yıkama sıvıları ve ana çözeltiler","07 05 03* -	Halojenli organik çözücüler, yıkama sıvıları ve ana özeltiler","07 05 04 -	Diğer organik çözücüler, yıkama sıvıları ve ana çözeltiler","07 05 07* -	Halojenli dip tortusu ve reaksiyon kalıntıları","07 05 08* -	Diğer dip tortusu ve reaksiyon kalıntıları","07 05 09* -	Halojenli filtre kekleri ve kullanılmış absorbanlar","07 05 10* -	Diğer filtre tabakaları kekleri, kullanılmış absorbanlar","07 05 11* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren çamurlar","07 05 12 -	07 05 11 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar","07 05 13* -	Tehlikeli madde içeren katı atıklar","07 05 14 -	07 05 13 dışındaki katı atıklar","07 05 99 -	Başka bir şekilde tanımlanmamış atıklar"],["07 06 01* -	Su bazlı yıkama sıvıları ve ana çözeltiler","07 06 03* -	Halojenli organik çözücüler, yıkama sıvıları ve ana çözeltiler","07 06 04* -	Diğer organik çözücüler, yıkama sıvıları ve ana çözeltiler","07 06 07* -	Halojenli dip tortuları ve reaksiyon kalıntıları","07 06 08* -	Diğer dip tortuları ve reaksiyon kalıntıları","07 06 09* -	Halojenli filtre kekleri ve kullanılmış absorbanlar","07 06 10* -	Diğer filtre kekleri ve kullanılmış absorbanlar","07 06 11* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren çamurlar","07 06 12  -	07 06 11 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar","07 06 99 -	Başka bir şekilde tanımlanmamış atıklar"],["07 07 01* -	Su bazlı yıkama sıvıları ve ana çözeltiler","07 07 03* -	Halojenli organik çözücüler, yıkama sıvıları ve ana çözeltiler","07 07 04* -	Diğer organik çözücüler, yıkama sıvıları ve ana çözeltiler","07 07 07* -	Halojenli dip tortuları ve reaksiyon kalıntıları","07 07 08* -	Diğer dip tortuları ve reaksiyon kalıntıları","07 07 09* -	Halojenli filtre kekleri ve kullanılmış absorbanlar","07 07 10* -	Diğer filtre kekleri ve kullanılmış absorbanlar","07 07 11* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren çamurlar","07 07 12 -	07 07 11 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar","07 07 99 -	Başka bir şekilde tanımlanmamış atıklar"],],
    [["08 01 11* -	Organik çözücüler ya da diğer tehlikeli maddeler içeren atık boya ve vernikler","08 01 12 -	08 01 11 dışındaki atık boya ve vernikler","08 01 13* -	Organik çözücüler ya da diğer tehlikeli maddeler içeren boya ve vernik çamurları","08 01 14 -	08 01 13 dışındaki boya ve vernik çamurları","08 01 15* -	Organik çözücüler ya da diğer tehlikeli maddeler içeren boya ve vernikli sulu çamurlar","08 01 16 -	08 01 15 dışındaki boya ve vernik içeren sulu çamurlar","08 01 17* -	Organik çözücüler ya da diğer tehlikeli maddeler içeren boya ve verniğin sökülmesinden kaynaklanan atıklar","08 01 18 -	08 01 17 dışındaki boya ve vernik sökülmesinden kaynaklanan atıklar","08 01 19* -	Organik çözücüler ya da diğer tehlikeli maddeler içeren boya ve vernik sökülmesinden kaynaklanan sulu süspansiyonlar","08 01 20 -	08 01 19 dışındaki sulu boya ya da vernik içeren sulu süspansiyonlar","08 01 21* -	Boya ya da vernik sökücü atıkları","08 01 99 -	Başka bir şekilde tanımlanmamış atıklar"],["08 02 01 -	Atık kaplama tozları","08 02 02 -	Seramik malzemeler içeren sulu çamurlar","08 02 03 -	Seramik malzemeler içeren sulu süspansiyonlar","08 02 99 -	Başka bir şekilde tanımlanmamış atıklar"],["08 03 07 -	Mürekkep içeren sulu çamurlar","08 03 08 -	Mürekkep içeren sulu sıvı atıklar","08 03 12* -	Tehlikeli maddeler içeren mürekkep atıkları","08 03 13 -	08 03 12 dışındaki mürekkep atıkları","08 03 14* -	Tehlikeli maddeler içeren mürekkep çamurları","08 03 15 -	08 05 14 dışındaki mürekkep çamurları","08 03 16* -	Atık aşındıma solüsyonları","08 03 17* -	Tehlikeli maddeler içeren atık baskı tonerleri","08 03 18 -	08 03 17 dışındaki atık baskı tonerleri","08 03 19* -	Dağıtıcı yağ","08 03 99 -	Başka bir şekilde tanımlanmamış atıklar"],["08 04 09* -	Organik çözücüler ya da diğer tehlikeli maddeler içeren atık yapışkanlar ve dolgu macunları","08 04 10 -	08 04 09 dışındaki atık yapışkanlar ve dolgu macunları","08 04 11* -	Organik çözücüler ya da diğer tehlikeli maddeler içeren yapışkan ve dolgu macunu çamurları","08 04 12 -	08 04 11 dışındaki yapışkan ve dolgu macunu çamurları","08 04 13* -	Organik çözücüler ya da diğer tehlikeli maddeler içeren sulu yapışkan veya dolgu macunu çamurları","08 04 14 -	08 04 13 dışındaki sulu organik yapışkan veya dolgu macunu çamurları","08 04 15* -	Organik çözücüler ya da diğer tehlikeli maddeler içeren sulu yapışkan veya dolgu macunlarının sıvı atıkları","08 04 16 -	08 04 15 dışındaki yapışkan veya dolgu macunlarının sulu atıkları","08 04 17* -	Reçine yağı","08 04 99 -	Başka bir şekilde tanımlanmamış atıklar"],["08 05 01* -	Atık izosiyanatlar"]],
    [["09 01 01* -	Su bazlı banyo ve aktifleştirici solüsyonları","09 01 02* -	Su bazlı ofset plakası banyo solüsyonu"," 09 01 03* -	Çözücü bazlı banyo solüsyonları","09 01 04* -	Sabitleyici solüsyonlar","09 01 05* -	Ağartıcı solüsyonları ve ağartıcı sabitleyici solüsyonlar","09 01 06* -	Fotoğrafçılık atıklarının saha içi arıtılmasından oluşan gümüş içeren atıklar","09 01 07 -	Gümüş veya gümüş bileşenleri içeren fotoğraf filmi ve kâğıdı","09 01 08 -	Gümüş veya gümüş bileşenleri içermeyen fotoğraf filmi ve kâğıdı","09 01 10 -	Pilsiz çalışan tek kullanımlık fotoğraf makineleri","09 01 11* -	16 06 01, 16 06 02 ya da 16 06 03'ün altında geçen pillerle çalışan tek kullanımlık fotoğraf makineleri","09 01 12 -	09 01 11 dışındaki pille çalışan tek kullanımlık fotoğraf makineleri","09 01 13* -	09 01 06 dışındaki gümüş geri kazanımı için yapılan arıtmadan kalan sulu sıvı atıklar","09 01 99 -	Başka bir şekilde tanımlanmamış atıklar"],],
    [["10 01 01 -	(10 01 04'ün altındaki kazan tozu hariç) dip külü, cüruf ve kazan tozu","10 01 02 -	Uçucu kömür külü","10 01 03 -	Turba ve işlenmenmiş odundan kaynaklanan uçucu kül","10 01 04* -	Uçucu yağ külü ve kazan tozu","10 01 05 -	Baca gazı kükürt giderme işleminden (desülfürizasyon) çıkan kalsiyum bazlı katı atıklar","10 01 07 -	Baca gazı kükürt giderme işleminden (desülfürizasyon) çıkan kalsiyum bazlı çamurlar","10 01 09* -	Sülfürik asit","10 01 13* -	Yakıt olarak kullanılan emülsifiye hidrokarbonların uçucu külleri","10 01 14* -	Atıkların beraber yakılmasından kaynaklanan ve tehlikeli maddeler içeren dip külü, cüruf ve kazan tozu","10 01 15 - 	10 01 14 dışındaki beraber yakılmadan kaynaklanan dip külü, cüruf ve kazan tozu","10 01 16* - 	Atıkların beraber yakılmasından kaynaklanan ve tehlikeli maddeler içeren uçucu kül","10 01 17 - 	10 01 16 dışındaki beraber akmadan ka aklanan uçucu kül","10 01 18* -	Tehlikeli maddeler içeren gaz temizleme atıkları","10 01 19 -	10 01 05, 10 01 07 ve 10 01 18 dışındaki gaz temizleme atıkları","10 01 20* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren çamurlar","10 01 21 -	10 01 20 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar","10 01 22* -	Kazan temizlemesi sonucu çıkan tehlikeli maddeler içeren sulu çamurlar","10 01 23 -	10 01 22 dışındaki kazan temizlemesi sonucu çıkan sulu çamurlar","10 01 24 -	Akışkan yatak kumları","10 01 25 -	Termik santrallerin yakıt depolama ve hazırlama işlemlerinden çıkan atıklar","10 01 26 -	Soğutma suyunun arıtılmasından çıkan atıklar","10 01 99 -	Başka bir şekilde tanımlanmamış atıklar"],["10 02 01 -	Cüruf işleme atıkları","10 02 02 -	İşlenmemiş cüruf","10 02 07* -	Tehlikeli maddeler içeren gazların arıtımı sonucu ortaya çıkan katı atıklar","10 02 08 -	10 02 07 dışında gaz arıtımı sonucu ortaya çıkan katı atıklar","10 02 10 -	Haddehane tufalı","10 02 11* -	Soğutma suyunun arıtılmasından kaynaklanan yağ içerikli atıklar","10 02 12 -	10 02 11 dışındaki soğutma suyu arıtma atıkları","10 02 13* -	Gaz arıtımı sonucu oluşan ve tehlikeli maddeler içeren çamurlar ve filtre kekleri","10 02 14 -	10 02 13 dışındaki gaz arıtımı sonucu oluşan çamurlar ve filtre kekleri","10 02 15 -	Diğer çamurlar ve filtre kekleri","10 02 99 -	Başka bir şekilde tanımlanmamış atıklar"],["10 03 02 -	Anot hurdaları","10 03 04*  -	Birincil üretim cürufları","10 03 05 -	Atık alüminyum oksit","10 03 08* -	İkincil üretimden kaynaklanan tuz cürufları","10 03 09* -	İkincil üretimden kaynaklanan kara cüruflar","10 03 15* - Suyla temas halinde tehlikeli miktarlarda alevlenebilir gazlar çıkaran yanıcı veya yayılabilir köpükler","10 03 16 -	10 03 15 dışındaki köpükler","10 03 17* -	Anot üretiminden kaynaklanan katranlı atıklar","10 03 18 -	10 03 17 dışındaki anot üretiminden kaynaklanan karbon içerikli atıklar","10 03 19* -	Tehlikeli maddeler içeren baca gazı tozu","10 03 20 -	10 03 19 dışındaki baca gazı tozu","10 03 21* -	Tehlikeli maddeler içeren diğer partiküller ve tozlar (öğütücü değirmen tozu dâhil)","10 03 22 -	10 03 21 dışındaki partiküller ve tozlar (öğütücü değirmen tozu dâhil)","10 03 23* -	Tehlikeli maddeler içeren gaz arıtımı katı atıkları","10 03 24 -	10 03 23 dışındaki gaz arıtım katı atıkları","10 03 25* - 	Tehlikeli maddeler içeren gaz arıtımı çamurları ve filtre kekleri","10 03 26 -	10 03 25 dışındaki gaz arıtımı çamurları ve filtre kekleri","10 03 27* -	Soğutma suynun arıtılmasından kaynaklanan yağ içerikli atıklar","10 03 28 -	10 03 27 dışındaki soğutma suyu arıtma atıkları","10 03 29* -	Tehlikeli maddeler içeren tuz cürufları ve kara cürufların işlenmesinden çıkan atıklar","10 03 30 -	10 03 29 dışındaki tuz cürufları ve kara cürufların işlenmesinden çıkan atıklar","10 03 99 -	Başka bir şekilde tanımlanmamış atıklar"],["10 04 01* -	Birincil ve ikincil üretim cürufları","10 04 02* -	Birincil ve ikincil üretimden kaynaklanan cüruf ve köpükler","10 04 03* -	Kalsiyum arsenat","10 04 04* -	Baca gazı tozu","10 04 05* -	Diğer partiküller ve toz","10 04 06* -	Gaz arıtımından kaynaklanan katı atıklar","10 04 07* -	Gaz arıtım çamurları ve filtre kekleri","10 04 09* -	Soğutma suyunun arıtılmasından kaynaklanan yağ içerikli atıklar","10 04 10 -	10 04 09 dışındaki soğutma suyu arıtma atıkları","10 04 99 -	Başka bir şekilde tanımlanmamış atıklar",],["10 05 01 -	Birincil ve ikincil üretim cürufları","10 05 03* -	Baca gazı tozu","10 05 04 -	Diğer partiküller ve toz","10 05 05* -	Gaz arıtımından kaynaklanan katı atıklar","10 05 06* -	Gaz arıtım çamurları ve filtre kekleri","10 05 08* -	Soğutma suyunun arıtılmasından kaynaklanan yağ içerikli atıklar","10 05 09 -	10 05 08 dışındaki soğutma suyu arıtma atıkları","10 05 10* -	Suyla temas halinde tehlikeli miktarlarda alevlenebilir gazlar çıkaran yanıcı veya yayılabilir cüruf ve köpükler","10 05 11 -	10 05 10 dışındaki cüruf ve köpükler"],["10 06 01 -	Birincil ve ikincil üretim cürufları","10 06 02 -	Birincil ve ikincil üretimden kaynaklanan cüruf ve köpükler","10 06 03*  -	Baca gazı tozu","10 06 04 -	Diğer partiküller ve toz","10 06 06* -	Gaz arıtımından kaynaklanan katı atıklar","10 06 07* -	Gaz arıtımından kaynaklanan çamurlar ve filtre kekleri","10 06 09* -	Soğutma suyunun arıtılmasından kaynaklanan yağ içeren atıklar","10 06 10 -	10 06 09 dışındaki soğutma suyu arıtma atıkları","10 06 99 -	Başka bir şekilde tanımlanmamış atıklar"],["10 07 01 -	Birincil ve ikincil üretim cürufları","10 07 02 -	Birincil ve ikincil üretimden kaynaklanan cüruf ve köpükler","10 07 03 -	Gaz arıtımından kaynaklanan katı atıklar","10 07 04 -	Diğer partiküller ve toz","10 07 05 -	Gaz arıtımından kaynaklanan çamurlar ve filtre kekleri","10 07 07* -	Soğutma suyunun arıtılmasından kaynaklanan yağ içeren atıklar","10 07 08 -	10 07 07 dışındaki soğutma suyu arıtma atıkları","10 07 99 -	Başka bir şekilde tanımlanmamış atıklar"],["10 08 04 -	Partiküller ve toz","10 08 08* -	Birincil ve ikmcil üretimden kaynaklanan tuz cürufu","10 08 09 -	Diğer cüruflar","10 08 10* -	Suyla temas halinde tehlikeli miktarlarda alevlenebilir gazlar çıkaran yanıcı veya yayılabilir cüruf ve köpükler","10 08 11 -	10 08 10 dışındaki cüruf, toz ve kırpıntılar","10 08 12* -	Anot üretiminden kaynaklanan katran içeren atıklar","10 08 13 -	10 08 12 dışındaki anot üretiminden kaynaklanan karbon içerikli atıklar","10 08 14 -	Anot hurdası","10 08 15* -	Tehlikeli maddeler içeren baca gazı tozu","10 08 16 -	10 08 15 dışındaki baca gazı tozu","10 08 17* -	Baca gazı arıtımından kaynaklanan ve tehlikeli maddeler içeren çamurlar ve filtre kekleri","10 08 18 -	10 08 17 dışındaki gaz arıtma çamurları ve filtre kekleri","10 08 19* -	Soğutma suyunun arıtılmasından kaynaklanan yağ içeren atıklar","10 08 20 -	10 08 19 dışındaki soğutma suyu arıtma atıkları","10 08 99 -	Başka bir şekilde tanımlanmamış atıklar"],["10 09 03 -	Ocak cürufları","10 09 05* -	Henüz döküm yapılamamış, tehlikeli madde içeren maça ve kum döküm kalıpları","10 09 06 -	10 09 05 dışında henüz döküm yapılamamış maça ve kum döküm kalıpları","10 09 07* -	Döküm yapılmış tehlikeli madde içeren maça ve kum döküm kalıpları","10 09 08 -	10 09 07 dışında döküm yapılmış maça ve kum döküm kalıpları","10 09 09* -	Tehlikeli maddeler içeren baca gazı tozu","10 09 10 -	10 09 09 dışındaki baca gazı tozu","10 09 11* -	Tehlikeli maddeler içeren diğer partiküller","10 09 12 -	10 09 11 dışındaki diğer partiküller","10 09 13* -	Tehlikeli maddeler içeren atık bağlayıcılar","10 09 14 -	10 09 13 dışındaki atık bağlayıcılar","10 09 15* -	Tehlikeli madde içeren çatlak belirleme kimyasalları atığı","10 09 16 -	10 09 15 dışındaki çatlak belirleme kimyasalları atığı","10 09 99 -	Başka bir şekilde tanımlanmamış atıklar",],["10 10 03 -	Ocak cürufları","10 10 05* -	Henüz döküm yapılamamış, tehlikeli madde içeren maça ve kum döküm kalıpları","10 10 06 -	10 10 05 dışındaki henüz döküm yapılamamış maça ve kum döküm kalıpları","10 10 07* -	Döküm yapılmış tehlikeli madde içeren maça ve kum döküm kalıpları","10 10 08 -	10 10 07 dışındaki döküm yapılmış maça ve kum döküm kalıpları","10 10 09* -	Tehlikeli maddeler içeren baca gazı tozu","10 10 10 -	10 10 09 dışındaki baca gazı tozu","10 10 11* -	Tehlikeli maddeler İçeren diğer partiküller","10 10 12 -	10 10 11 dışındaki diğer partiküller","10 10 13* -	Tehlikeli maddeler içeren bağlayıcı atıkları","10 10 14 -	10 10 13 dışındaki bağlayıcı atıkları","10 10 15* -	Tehlikeli madde içeren çatlak belirleme kimyasalları atığı","10 10 16 -	10 10 15 dışındaki çatlak belirleme kimyasalları atığı","10 10 99 -	Başka bir şekilde tanımlanmamış atıklar",],["10 11 03 -	Cam elyaf atıkları","10 11 05 -	Partiküller ve toz","10 11 09* -	Isıl işlemden önce hazırlanan tehlikeli maddeler içeren harman atığı","10 11 10 -	10 11 09 dışında ısıl işlemden önce hazırlanan harman atı","10 11 11* -	Ağır metaller içeren küçük parçacıklar ve cam tozu halinde atık cam (ömeğin katot ışın tüplerinden)","10 11 12 -	10 11 11 dışındaki atık camlar","10 11 13* -	Tehlikeli maddeler içeren cam parlatma ve öğütme çamuru","10 11 14 -	10 11 13 dışındaki cam parlatma ve öğütme çamuru","10 11 15* -	Baca gazı arıtımından kaynaklanan tehlikeli maddeler içeren katı atıklar","10 11 16 -	10 11 15 dışında baca gazı arıtımından kaynaklanan katı atıklar","10 11 17* -	Baca gazı arıtımından kaynaklanan ve tehlikeli maddeler içeren çamurlar ve filtre kekleri","10 11 18 -	10 11 17 dışındaki baca gazı arıtımından kaynaklanan çamurlar ve filtre kekleri","10 11 19* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren katı atıklar","10 11 20 -	10 11 19 dışındaki saha içi atıksu arıtımından kaynaklanan katı atıklar","10 11 99 -	Başka bir şekilde tanımlanmamış atıklar",],
    ["10 12 01 -	Isıl işlem öncesi karışım hazırlama atıkları","10 12 03 -	Partiküller ve toz","10 12 05 -	Gaz arıtımından kaynaklanan çamurlar ve filtre kekleri","10 12 06 -	Iskarta kalıplar","10 12 08 -	Atık seramikler, tuğlalar, fayanslar ve inşaat malzemeleri (ısıl işlem sonrası)","10 12 09* -	Gaz arıtımından kaynaklanan tehlikeli maddeler içeren katı atıklar","10 12 10 -	10 12 09 dışındaki gaz arıtma katı atıkları","10 12 11* -	Ağır metaller içeren sırlama atıkları","10 12 12 -	10 12 11 dışındaki sırlama atıkları","10 12 13 -	Saha içi atıksu arıtımından kaynaklanan çamur","10 12 99 -	Başka bir şekilde tanımlanmamış atıklar",],["10 13 01 -	Isıl işlem öncesi karışım hazırlama atıkları","10 13 04 - 	Kirecin kalsinasyon ve hidratasyonundan kaynaklanan atıklar","10 13 06 -	Partiküller ve toz (10 13 12 ve 10 13 13 hariç)","10 13 07 -	Gaz arıtma çamuru ve filtre kekleri","10 13 09* -	Asbestli çimento üretiminden kaynaklanan asbest içeeren atıklar","10 13 10 -	10 13 09 dışındaki asbestli çimento üretimi atıkları","10 13 11 -	10 13 09 ve 10 13 10 dışındaki çimento bazlı kompozit malzeme üretim atıkları","10 13 12* -	Gaz arıtımından kaynaklanan tehlikeli maddeler içeren katı atıklar","10 13 13 -	10 13 12 dışındaki gaz arıtma katı atıkları","10 13 14 -	Atık beton ve beton çamurları","10 13 99 -	Başka bir şekilde tanımlanmamış atıklar",],["10 14 01* -	Gaz temizlemeden kaynaklanan cıva içeren atıklar"]],
    // özel indi
    [["11 01 05* -	Sıyırma asitleri (parlatma asitleri)",
       " 11 01 06* -	Başka bir şekilde tanımlanmamış asitler",
       " 11 01 07* -	Sıyırma bazları",
       " 11 01 08* -	Fosfatlama çamurları",
       " 11 01 09* -	Tehlikeli maddeler içeren çamurlar ve filtre kekleri",
       " 11 01 10 -	11 01 09 dışındaki çamurlar ve filtre kekleri",
        "11 01 11* -	Tehlikeli maddeler içeren sulu durulama sıvıları",
      " 11 01 12 -	11 01 11 dışındaki sulu durulama sıvıları",
       " 11 01 13* -	Tehlikeli maddeler içeren yağ alma atıkları",
        "11 01 14 -	11 01 13 dışındaki yağ alma atıkları",
      " 11 01 15* -	Membran ya da iyon değişim sistemlerinden kaynaklanan tehlikeli maddeler içeren sıvı ve çamurlar",
        "11 01 16* -	Doymuş ya da bitik iyon değişim reçineleri",
       " 11 01 98* -	Tehlikeli maddeler içeren diğer atıklar",
       " 11 01 99 -	Başka bir şekilde tanımlanmamış atıklar"],
    ["11 02 02* -	Çinko hidrometalurjisi (jarosid ve jeotid dahil) çamurları",
       " 11 02 03	Sulu elektrolitik işlemleri için üretilen anot üretim atıkları",
       " 11 02 05* -	Bakır hidrometalurjisi işlemlerinden kaynaklanan tehlikeli maddeler içeren atıklar",
       " 11 02 06 -	11 02 05 dışındaki bakır hidrometalurjisi atıkları",
       " 11 02 07* -	Tehlikeli maddeler içeren diğer atıklar",
        "11 02 99 -	Başka bir şekilde tanımlanmamış atıklar]"
    
    
    ], 


    ["11 - 03 01*	Siyanür içeren atıklar",
    "11 03 02* -	Diğer atıklar"],



    ["11 05 01 -	Katı çinko",
    "11 05 02 -	Çinko külü",
    "11 05 03* -	Gaz arıtımından kaynaklanan katı atıklar",
    "11 05 04* -	Iskarta flaks malzemeler",
    "11 05 99 -	Başka bir şekilde tanımlanmamış atıklar",]


    ],


    [["12 01 01 -	Demir metal çapakları ve talaşları",
    "12 01 02 -	Demir metal toz ve parçacıklar",
    "12 01 03 -	Demir dışı metal çapakları ve talaşları",
    "12 01 04 -	Demir dışı metal toz ve parçacıklar",
    "12 01 05 -	Plastik yongalar ve çapaklar",
    "12 01 06* - 	Halojen içeren madeni bazlı işleme yağları (emülsiyon ve solüsyonlar hariç)",
    "12 01 07* -	Halojen içermeyen madeni bazlı işleme yağları (emülsiyon ve solüsyonlar hariç)",
    "12 01 08* -	Halojen içeren işleme emülsiyon ve solüsyonları",
    "12 01 09* -	Halojen içermeyen işleme emülsiyon ve solüsyonları",
    "12 01 10* -	Sentetik işleme yağları",
    "12 01 12* -	Kullanılmış (mum) parafin ve yağlar",
    "12 01 13 -	Kaynak atıkları",
    "12 01 14* -	Tehlikeli maddeler içeren işleme çamurları",
    "12 01 15 -	12 01 14 dışındaki işleme çamurları",
    "12 01 16* -	Tehlikeli maddeler içeren kumlama maddeleri atıkları",
    "12 01 17 -	12 01 16 dışındaki kumlama maddeleri atıkları",
    "12 01 18* -	Yağ içeren metalik çamurlar (öğütme, bileme ve freze tortuları)",
    "12 01 19* -	Biyolojik olarak kolay bozunur işleme yağı",
    "12 01 20* -	Tehlikeli maddeler içeren öğütme parçaları ve öğütme maddeleri",
    "12 01 21 -	12 01 20 dışındaki öğütme parçaları ve öğütme maddeleri",
    "12 01 99 -	Başka bir şekilde tanımlanmamış atıklar,"],


    ["12 03 01* -	Sulu yıkama sıvıları",
    "12 03 02* -	Buhar yağ alma atıkları",],
    
    





    ],
[["13 01 01* -	PCB (2) içeren hidrolik yağlar","13 01 04* -	Klor içeren emülsiyonlar",
"13 01 05* -	Klor içermeyen emülsiyonlar",
"13 01 09* -	Mineral esaslı klor içeren hidrolik yağlar",
"13 01 10* -	Mineral esaslı klor içermeyen hidrolik yağlar",
"13 01 11* -	Sentetik hidrolik yağlar",
"13 01 12* -	Kolayca biyolojik olarak bozunabilir hidrolik yağlar",
"13 01 13* -	Diğer hidrolik yağlar",],

["13 02 04* -	Mineral esaslı klor içeren motor, şanzıman ve yağlama yağları",
"13 02 05* -	Mineral esaslı klor içermeyen motor, şanzıman ve yağlama yağları",
"13 02 06* -	Sentetik motor, şanzıman ve yağlama yağları",
"13 02 07* -	Kolayca biyolojik olarak bozunabilir motor, şanzıman ve yağlama yağları",
"13 02 08* -	Diğer motor, şanzıman ve yağlama yağları",],

["13 03 01* -	PCB'ler içeren yalıtım ya da ısı iletim yağları",
"13 03 06* -	13 03 01 dışındaki mineral esaslı klor içeren yalıtım ve ısı iletim yağları",
"13 03 07* -	Mineral esaslı klor içermeyen ahtım ve ısı iletim yağları",
"13 03 08* -	Sentetik yalıtım ve ısı iletim yağları",
"13 03 09* -	Kolayca biyolojik olarak bozunabilir yalıtım ve ısı iletim yağları",
"13 03 10* -	Diğer yalıtım ve ısı iletim yağları",],

["13 04 01* -	Nehir ve göl seyrüseferinden (iç su yolu denizciliğinden) kaynaklanan sintine yağları",
"13 04 02* -	İskele kanalizasyonlarından(mendirekten) kaynaklanan sintine yağları",
"13 04 03* -	Diğer denizcilik seyrüseferinden kaynaklanan sintine yağları",],

["13 05 01* -	Kum odacığından ve yağ/su ayırıcısından çıkan katılar",
"13 05 02* -	Yağ/su ayırıcısından çıkan çamurlar",
"13 05 03* -	Yakalayıcı (interseptör) çamurları",
"13 05 06* -	Yağ/su ayırıcılarından çıkan yağ ",
"13 05 07* -	Yağ/su ayırıcılarından çıkan yağlı su",
"13 05 08* -	Kum odacığından ve yağ/su ayırıcılarından çıkan karışık atıklar",],

["13 07 01* -	Fuel-oil ve mazot",
"13 07 02* -	Benzin",
"13 07 03* -	Diğer yakıtlar (karışımlar dahil)",],

["13 08 01* -	Tuz giderim çamurları ya da emülsiyonları",
"13 08 02* -	Diğer emülsiyonlar",
"13 08 99 -	Başka bir şekilde tanımlanmamış atıklar",]



],
/* 13 */


/* 14  */
[
["14 06 01* -	Kloroflorokarbonlar, HCFC, HFC",
"14 06 02* -	Diğer halojenli çözücüler ve çözücü karışımları",
"14 06 03* -	Diğer çözücüler ve çözücü karışımları",
"14 06 04* -	Halojenli çözücüler içeren çamurlar veya katı atıklar",
"14 06 05* -	Diğer çözücüleri içeren çamurlar veya katı atıklar",]
],

/* 15 */
[
    ["15 01 01 -	Kağıt ve karton ambalaj",
    "15 01 02 -	Plastik ambalaj",
    "15 01 03 -	Ahşap ambalaj",
    "15 01 04 -	Metalik ambalaj",
    "15 01 05 -	Kompozit ambalaj",
    "15 01 06 -	Karışık ambalaj",
    "15 01 07 -	Cam ambalaj",
    "15 01 09 -	Tekstil ambalaj",
    "15 01 10* -	Tehlikeli maddelerin kalıntılarını içeren ya da tehlikeli maddelerle kontamine olmuş ambalajlar",
    "15 01 11* -	Boş basınçlı konteynerler dahil olmak üzere tehlikeli gözenekli katı yapı (örneğin asbest) içeren metalik ambalajlar",],

    ["15 02 02* -	Tehlikeli maddelerle kirletilmiş emiciler, filtre malzemeleri (başka şekilde tanımlanmamış ise yağ filtreleri), temizleme bezleri, koruyucu giysiler",
    "15 02 03 -	15 02 02 dışındaki emiciler, filtre malzemeleri, temizleme bezleri, koruyucu giysiler",],

    
],

/* 16 */

[
    ["16 01 03 -	Ömrünü tamamlamış lastikler",
    "16 01 04* -	Ömrünü tamamlamış araçlar",
    "16 01 06 -	Sıvı ya da tehlikeli maddeler içermeyen ömrünü tamamlamış araçlar",
    "16 01 07* -	Yağ filtreleri",
    "16 01 08* -	Cıva içeren parçalar",
    "16 01 09* -	PCB içeren parçalar",
    "16 01 10* -	Patlayıcı parçalar (örneğin hava yastıkları)",
    "16 01 11* -	Asbest içeren fren balataları",
    "16 01 12 -	16 01 11 dışındaki fren balataları",
    "16 01 13* -	Fren sıvıları",
    "16 01 14* -	Tehlikeli maddeler içeren antifriz sıvıları",
    "16 01 15 -	16 01 14 dışındaki antifriz sıvıları",
    "16 01 16 -	Sıvılaştırılmış gaz tankları",
    "16 01 17 -	Demir metaller",
    "16 01 18 -	Demir olmayan metaller",
    "16 01 19 -	Plastik",
    "16 01 20 -	Cam",
    "16 01 21* -	16 01 07'den 16 01 11'e ve 16 01 13 ile 16 01 14 dışındaki tehlikeli parçalar",
    "16 01 22 -	Başka bir şekilde tanımlanmamış parçalar",
    "16 01 99 -	Başka bir şekilde tanımlanmamış atıklar",],


    ["16 02 09* -	PCB'ler içeren transformatörler ve kapasitörler",
    "16 02 10* -	16 02 09 dışındaki PCB içeren ya da PCB ile kontamine olmuş ıskarta ekipmanlar",
    "16 02 11* -	Kloroflorokarbon, HCFC, HFC içeren ıskarta ekipmanlar",
    "16 02 12* -	Serbest asbest içeren ıskarta ekipman",
    "16 02 13* -	16 02 09'dan 16 02 12'ye kadar olanların dışındaki tehlikeli parçalar (3) içeren ıskarta ekipmanlar",
    "16 02 14 -	16 02 09'dan 16 02 13'e kadar olanların dışındaki ıskarta ekipmanlar",
    "16 02 15* -	Iskarta ekipmanlardan çıkartılmış tehlikeli parçalar",
    "16 02 16 -	16 02 15 dışındaki ıskarta ekipmanlardan çıkartılmış parçalar",],

    ["16 03 03* -	Tehlikeli maddeler içeren anorganik atıklar",
    "16 03 04 -	16 03 03 dışındaki anorganik atıklar",
    "16 03 05* -	Tehlikeli maddeler içeren organik atıklar",
    "16 03 06 -	16 03 05 dışındaki organik atıklar",],

    ["16 04 01* -	Mühimmat Atığı",
    "16 04 02* -	Havai fişek atıkları",
    "16 04 03* -	Diğer patlayıcı atıklar",],

    ["16 05 04* -	Basınçlı tanklar içinde tehlikeli maddeler içeren gazlar (halonlar dahil)",
    "16 05 05 -	16 05 04 dışında basınçlı tanklar içindeki gazlar",
    "16 05 06* -	Laboratuvar kimyasalları karışımları dahil tehlikeli maddelerden oluşan ya da tehlikeli maddeler içeren laboratuvar kimyasalları",
    "16 05 07* -	Tehlikeli maddeler içeren ya da bunlardan oluşan ıskarta anorganik kimyasallar",
    "16 05 08* -	Tehlikeli maddeler içeren ya da bunlardan oluşan ıskarta organik kimyasallar",
    "16 05 09 -	16 05 06, 16 05 07 ya da 16 05 08 dışında tehlikeli maddeler içeren ıskarta organik kimyasallar",],

    ["16 06 01* -	Kurşunlu piller ve akümülatörler",
    "16 06 02* -	Nikel kadmiyum piller",
    "16 06 03* -	Cıva içeren piller",
    "16 06 04 -	Alkali piller (16 06 03 hariç)",
    "16 06 05 -	Diğer piller ve akümülatörler",
    "16 06 06*	Piller ve akümülatörlerden ayrı toplanmış elektrolitler",


],


["16 07 08* -	Yağ içeren atıklar",
"16 07 09* -	Diğer tehlikeli maddeler içeren atıklar",
"16 07 99 -	Başka bir şekilde tanımlanmamış atıklar",],


["16 08 01 -	Altın, gümüş, renyum, rodyum, paladyum, iridyum ya da platin içeren bitik katalizörler (16 08 07 hariç)",
"16 08 02* -	Tehlikeli geçiş metalleri (4) ya da tehlikeli geçiş metal bileşenlerini içeren bitik katalizörler",
"16 08 03 -	Başka bir şekilde tanımlanmamış ara metaller ve ara metal bileşenleri içeren bitik katalizörler",
"16 08 04 -	Bitik katalitik 'cracking' katalizör sıvısı (16 08 07 hariç)",
"16 08 05* -	Fosforik asit içeren bitik katalizörler",
"16 08 06* -	Katalizör olarak bitik sıvılar",
"16 08 07* -	Tehlikeli maddelerle kontamine olmuş bitik katalizörler",],

["16 09 01* -	Permanganatlar (örneğin potasyum permanganat)",
"16 09 02* -	Kromatlar (örneğin potasyum kromat, potasyum veya sodyum dikromat)",
"16 09 03* -	Peroksitler(örneğin hidrojen peroksit)",
"16 09 04* -	Başka bir şekilde tanımlanmamış oksitleyici malzemeler",],

["16 10 01* -	Tehlikeli maddeler içeren sulu sıvı atıklar",
"16 10 02 -	16 10 01 dışındaki sulu sıvı atıkları",
"16 10 03* -	Tehlikeli madde içeren sulu derişik maddeler",
"16 10 04 -	16 10 03 dışındaki sulu derişik maddeler",],

["16 11 01* -	Metalürjik proseslerden kaynaklanan, tehlikeli maddeler içeren karbon bazlı astarlar ve refraktörler",
"16 11 02 -	16 11 01 dışındaki metalürjik proseslerden kaynaklanan karbon bazlı astar ve refraktörler",
"16 11 03* -	Metalürjik proseslerden kaynaklanan, tehlikeli maddeler içeren diğer astarlar ve refraktörler",
"16 11 04 -	16 11 03 dışındaki metalürjik proseslerden kaynaklanan diğer astar ve reflektörler",
"16 11 05* -	Metalürjik olmayan proseslerden kaynaklanan, tehlikeli maddeler içeren astarlar ve refraktörler",],




],

/* 17 */
[
    ["17 01 01 -	Beton",
    "17 01 02 -	Tuğlalar",
    "17 01 03 -	Kiremitler ve seramikler",
    "17 01 06* -	Tehlikeli maddeler içeren beton, tuğla, kiremit ve seramik karışımları ya da ayrılmış grupları",
    "17 01 07 -	17 01 06 dışındaki beton, tuğla kiremit ve seramik karışımları ya da ayrılmış grupları",],



    ["17 02 01 -	Ahşap",
    "17 02 02 -	Cam",
    "17 02 03 -	Plastik",
    "17 02 04* -	Tehlikeli maddeler içeren ya da tehlikeli maddelerle kontamine olmuş ahşap, cam ve plastik",],

    [
        "17 03 01* -	Kömür katranı içeren bitümlü karışımlar",
        "17 03 02 -	17 03 01 dışındaki bitümlü karışımlar",
        "17 03 03* -	Kömür katranı ve katranlı ürünler",
    ],

    ["17 04 01 -	Bakır, bronz, pirinç",
    "17 04 02 -	Alüminyum",
    "17 04 03 -	Kurşun",
    "17 04 04 -	Çinko",
    "17 04 05 -	Demir ve çelik ",
    "17 04 06 -	Kalay",
    "17 04 07 -	Karışık metaller",
    "17 04 09* -	Tehlikeli maddelerle kontamine olmuş metal atıkları",
    "17 04 10* -	Yağ, katran ve diğer tehlikeli maddeler içeren kablolar",
    "17 04 11 -	17 04 10 dışındaki kablolar",],


    [
        "17 05 03* -	Tehlikeli maddeler içeren toprak ve taşlar",
        "17 05 04 -	17 05 03 dışındaki toprak ve taşlar",
        "17 05 05* -	Tehlikeli maddeler içeren dip tarama çamuru",
        "17 05 06 -	17 05 05 dışındaki dip tarama çamuru",
        "17 05 07* -	Tehlikeli maddeler içeren demiryolu çakılı",
        "17 05 08 -	17 05 07 dışındaki demir yolu çakılı",
    ],

    [
        "17 06 01* -	Asbest içeren yalıtım malzemeleri",
        "17 06 03* -	Tehlikeli maddelerden oluşan ya da tehlikeli maddeler içeren diğer yalıtım malzemeleri",
        "17 06 04 -	17 06 01 ve 17 06 03 dışındaki yalıtım malzemeleri",
        "17 06 05* -	Asbest içeren inşaat malzemeleri",
    ],

    [
        "17 08 01* -	Tehlikeli maddeler ile kontamine olmuş alçı bazlı inşaat malzemeleri",
        "17 08 02 -	17 08 01 dışındaki alçı bazlı inşaat malzemeleri",

    ],
        ["17 09 01* -	Cıva içeren inşaat ve yıkım atıkları",
        "17 09 02* -	PCB içeren inşaat ve yıkım atıkları (örneğin PCB içeren dolgu macunları, PCB içeren reçine bazlı taban kaplama malzemeleri, PCB içeren kaplanmış sırlama birimleri, PCB içeren kapasitörler)",
        "17 09 03* -	Tehlikeli maddeler içeren diğer inşaat ve yıkım atıkları (karışık atıklar dahil)",
        "17 09 04 -	17 09 01, 17 09 02 ve 17 09 03 dışındaki karışık inşaat ve yıkım atıkları",
]

],


/* 18 */
[
    ["18 01 01 -	Kesiciler (18 01 03 hariç)",
    "18 01 02 -	Kan torbaları ve kan yedekleri dahil vücut parçaları ve organları (18 01 03 hariç)",
    "18 01 03* -	Enfeksiyonu önlemek amacı ile toplanmaları ve bertarafı özel işleme tabi olan atıklar",
    "18 01 04 -	Enfeksiyonu önlemek amacı ile toplanmaları ve bertarafı özel işleme tabi olmayan atıklar (örneğin sargılar, vücut alçıları, tek kullanımlık giysiler, alt bezleri)",
    "18 01 06* -	Tehlikeli maddeler içeren ya da tehlikeli maddelerden oluşan kimyasallar",
    "18 01 07 -	18 01 06 dışındaki kimyasallar",
    "18 01 08* -	Sitotoksik ve sitostatik ilaçlar",
    "18 01 09 -	18 01 08 dışındaki ilaçlar",
    "18 01 10* -	Diş tedavisinden kaynaklanan amalgam atıkları",],


    ["18 02 01 -	Kesiciler (18 02 02 hariç)",
        "18 02 02* -	Enfeksiyonu önlemek amacı ile toplanmaları ve bertarafı özel işleme tabi olan atıklar",
        "18 02 03 -	Enfeksiyonu önlemek amacı ile toplanmaları ve bertarafı özel işleme tabi olmayan atıklar",
        "18 02 05* -	Tehlikeli maddeler içeren ya da tehlikeli maddelerden oluşan kimyasallar",
        "18 02 06 -	18 02 05 dışındaki kimyasallar",
        "18 02 07* -	Sitotoksik ve sitostatik ilaçlar",
        "18 02 08 -	18 02 07 dışındaki ilaçlar",],




],

/* 19 */
[ 
    ["19 01 02 -	Taban külünden ayrılan demir içerikli maddeler",
    "19 01 05* -	Gaz arıtımından kaynaklanan filtre kekleri",
    "19 01 06* -	Gaz arıtımından kaynaklanan sulu sıvı atıklar ile diğer sulu sıvı atıkları",
    "19 01 07* -	Gaz arıtımından kaynaklanan katı atıklar",
    "19 01 10*  -	Baca gazı arıtımından kaynaklanan kullanılmış aktif karbon",
    "19 01 11* -	Tehlikeli maddeler içeren taban külü ve cüruf",
    "19 01 12 -	19 01 11 dışındaki taban külü ve cüruf",
    "19 01 13* -	Tehlikeli maddeler içeren uçucu kül",
    "19 01 14 -	19 01 13 dışındaki uçucu kül",
    "19 01 15* -	Tehlikeli maddeler içeren kazan tozu",
    "19 01 16 -	19 01 15 dışındaki kazan tozu",
    "19 01 17* -	Tehlikeli maddeler içeren piroliz atıkları",
    "19 01 18 -	19 01 17 dışındaki piroliz atıkları",
    "19 01 19 -	Akışkan yatak kumları",
    "19 01 99 -	Başka bir şekilde tanımlanmamış atıklar",],

    [

        "19 02 03 -	Tehlikeli olmayan atıkların önceden karıştırılması ile oluşmuş atıklar",
        "19 02 04* -	En az bir tehlikeli atık ile önceden karıştırılması ilc oluşmuş atıklar",
        "19 02 05* -	Fiziksel ve kim asal işlemlerden kaynaklanan tehlikeli maddeler içeren çamurları",
        "19 02 06 -	19 02 05 dışındaki fiziksel ve kimyasal işlemlerden kaynaklanan çamurları",
        "19 02 07* -	Ayrışmadan oluşan yağ ve konsantrasyonlar",
        "19 02 08* -	Tehlikeli maddeler içeren sıvı yanabilir atıklar",
        "19 02 09* -	Tehlikeli maddeler içeren katı yanabilir atıklar",
        "19 02 10 -	19 02 08 ve 19 02 09 dışında yanabilir atıklar",
        "19 02 11* -	Tehlikeli maddeler içeren diğer atıklar",
        "19 02 99 -	Başka bir şekilde tanımlanmamış atıklar",
    ],
    [
        "19 03 04* -	Tehlikeli olarak işaretlenmiş kısmen (6) stabilize olmuş atıklar",
        "19 03 05 -	19 03 04 dışındaki stabilize olmuş atıklar",
        "19 03 06* -	Tehlikeli olarak sınıflandırılmış, katılaştırılmış atıklar",
        "19 03 07 -	 19 03 06 dışındaki katılaştırılmış atıklar",





    ],

    [


        "19 04 01 -	Vitrifiye edilmiş atıklar",
        "19 04 02* -	Uçucu kül ve diğer baca gazı arıtma atıkları",
        "19 04 03* -	Vitrifiye olmamış katılar",
        "19 04 04 -	Vitrifiye atık tavlanmasından çıkan sulu sıvı",

    ],

    [
        "19 05 01 -	Belediye ve benzeri atıklarının kompostlanmamış fraksiyonları",
        "19 05 02 -	Hayvansal ve bitkisel atıklarının kompostlanmamış fraksiyonları",
        "19 05 03 -	Standart dışı kompost",
        "19 05 99 -	Başka bir şekilde tanımlanmamış atıklar",
    ],

    [
        "19 06 03 -	Belediye atıklarının anaerobik arıtımından kaynaklanan sıvılar",
        "19 06 04 -	Belediye atıklarının anaerobik arıtımından kaynaklanan posalar",
        "19 06 05 -	Hayvansal ve bitkisel atıkların anaerobik arıtımından kaynaklanan sıvılar",
        "19 06 06 -	Hayvansal ve bitkisel atıklarını anaerobik arıtımından kaynaklanan posalar",
        "19 06 99 -	Başka bir şekilde tanımlanmamış atıklar",

    ],

    [
        "19 07 02* -	Tehlikeli maddeler içeren düzenli depolama sahası sızıntı suları",
        "19 07 03 -	19 07 02 dışındaki düzenli depolama sahası sızıntı suları",
    ],
    [
        "19 08 01 -	Elek üstü maddeler",
        "19 08 02 -	Kum ayırma işleminden kaynaklanan atıkları",
        "19 08 05 -	Kentsel atıksuyun arıtılmasından kaynaklanan çamurlar",
        "19 08 06* -	Doymuş ya da kullanılmış iyon değiştirici reçineler",
        "19 08 07* -	İyon değiştiricilerinin rejenerasyonundan kaynaklanan solüsyonlar ve çamurlar",
        "19 08 08* -	Ağır metaller içeren membran sistemi atıkları",
        "19 08 09 -	Yağ ve su ayrışmasından kaynaklanan sadece yenilebilir yağlar içeren yağ karışımları ve gres",
        "19 08 10* -	19 08 09 dışındaki yağ ve su  ayrışmasından çıkan yağ karışımları ve gres",
        "19 08 11* -	Endüstriyel atıksuyun biyolojik arıtılmasından kaynaklanan tehlikeli maddeler içeren çamurlar",
        "19 08 12 -	19 08 11 dışındaki endüstriyel atıksuyun biyolojik arıtılmasından kaynaklanan çamurlar",
        "19 08 13* -	Endüstriyel atıksuyun diğer yöntemlerle arıtılmasından kaynaklanan tehlikeli maddeler içeren çamurlar",
        "19 08 14 -	19 08 13 dışındaki endüstriyel atıksuyun diğer yöntemlerle arıtılmasından kaynaklanan çamurlar",
        "19 08 99 -	Başka bir şekilde tanımlanmamış atıklar",
    ],
    [

        "19 09 01 -	İlk filtreleme ve süzme işlemlerinden kaynaklanan katı atıklar",
        "19 09 02 -	Su berraklaştırılmasından kaynaklanan çamurlar",
        "19 09 03 -	Karbonat gidermeden kaynaklanan çamurlar",
        "19 09 04 -	Kullanılmış aktif karbon",
        "19 09 05 -	Doymuş ya da kullanılmış iyon değiştirme reçinesi",
        "19 09 06 -	İyon değiştiricilerinin rejenerasyonundan kaynaklanan solüsyonlar ve çamurlar",
        "19 09 99 -	Başka bir şekilde tanımlanmamış atıklar",
            ],

    [
        "19 10 01 -	Demir ve çelik atıkları",
        "19 10 02 -	Demir olmayan atıklar",
        "19 10 03* -	Tehlikeli maddeler içeren uçucu atık parçacıkları ve tozlar",
        "19 10 04 -	19 10 03 dışındaki uçucu atık parçacıkları ve tozlar",
        "19 10 05* -	Tehlikeli maddeler içeren diğer kalıntılar ve tozlar",
        "19 10 06 -	19 10 05 dışındaki diğer kalıntılar ve tozlar",
    ],

    ["19 11 01* -	Kullanılmış filtre killeri",
    "19 11 02* -	Asit katranları",
    "19 11 03* -	Sulu sıvı atıklar",
    "19 11 04* -	Yakıtların bazlarla temizlenmesinden kaynaklanan atıklar",
    "19 11 05* -	Saha içi atıksu arıtımından kaynaklanan tehlikeli maddeler içeren amurlar",
    "19 11 06 -	19 11 05 dışındaki saha içi atıksu arıtımından kaynaklanan çamurlar",
    "19 11 07* -	Baca gazı temizleme atıkları",
    "19 11 99 -	Başka bir şekilde tanımlanmamış atıklar",],

    ["19 12 01 -	Kağıt ve karton",
    "19 12 02 -	Demir metali",
    "19 12 03 -	Demir dışı metal",
    "19 12 04 -	Plastik ve lastik",
    "19 12 05 -	Cam",
    "19 12 06* -	Tehlikeli maddeler içeren ahşap",
    "19 12 07 -	19 12 06 dışındaki ahşap",
    "19 12 08 -	Tekstil malzemeleri",
    "19 12 09 -	Mineraller (örneğin kum, taşlar)",
    "19 12 10 -	Yanabilir atıklar (atıktan türetilmiş yakıt)",
    "19 12 11* -	Atıkların mekanik işlenmesinden kaynaklanan tehlikeli maddeler içeren diğer atıklar (karışık malzemeler dahil)",
    "19 12 12 -	19 12 11 dışında atıkların mekanik işlenmesinden kaynaklanan diğer atıklar (karışık malzemeler dahil)",],

    ["19 13 01* -	Toprak ıslahından kaynaklanan tehlikeli maddeler içeren atıklar",
    "19 13 02 -	19 13 01 dışındaki toprak ıslahından kaynaklanan atıklar",
    "19 13 03* -	Toprak ıslahından kaynaklanan tehlikeli maddeler içeren çamurlar",
    "19 13 04 -	19 13 03 dışındaki toprak ıslahından kaynaklanan çamurlar",
    "19 13 05* -	Yeraltı suyunun ıslahından kaynaklanan tehlikeli maddeler içeren çamurlar",
    "19 13 06 -	19 13 05 dışındaki yeraltı suyunun ıslahından kaynaklanan çamurlar",
    "19 13 07* -	Yeraltı suyunun ıslahından kaynaklanan tehlikeli maddeler içeren sulu sıvı atıklar ve sulu konsantrasyonlar",
    "19 13 08 -	19 13 07 dışındaki yeraltı suyunun ıslahından kaynaklanan sulu sıvı atıklar ve sulu konsantrasyonlar",],




],
/* 20 */
[
    ["20 01 01 -	Kağıt ve karton",
    "20 01 02 -	Cam",
    "20 01 08 -	Biyolojik olarak bozunabilir mutfak ve kantin atıkları",
    "20 01 10 -	Giysiler",
    "20 01 11 -	Tekstil ürünleri",
    "20 01 13* -	Çözücüler",
    "20 01 14* -	Asitler",
    "20 01 15* -	Alkalinler",
    "20 01 17* -	Foto kimyasallar",
    "20 01 19* -	Pestisitler",
    "20 01 21* -	Flüoresan lambalar ve diğer cıva içeren atıklar",
    "20 01 23* -	Kloroflorokarbonlar içeren ıskartaya çıkartılmış ekipmanlar",
    "20 01 25 -	Yenilebilir sıvı ve katı yağlar",
    "20 01 26* -	20 01 25 dışındaki sıvı ve katı yağlar",
    "20 01 27* -	Tehlikeli maddeler içeren boya, mürekkepler, yapıştırıcılar ve reçineler",
    "20 01 28 -	20 01 27 dışındaki boya, mürekkepler, yapıştırıcılar ve reçineler",
    "20 01 29* -	Tehlikeli maddeler içeren deterjanlar",
    "20 01 30 -	20 01 29 dışındaki deterjanlar",
    "20 01 31* -	Sitotoksik ve sitostatik ilaçlar",
    "20 01 32 -	20 01 31 dışındaki ilaçlar",
    "20 01 33* -	16 06 01, 16 06 02 veya 16 06 03'un altında geçen pil ve akümülatörler ve bu pilleri içeren sınıflandırılmamış karışık pil ve akümülatörler",
    "20 01 34 -	20 01 33 dışındaki pil ve akümülatörler",
    "20 01 35* -	20 01 21 ve 20 01 23 dışındaki tehlikeli parçalar (7) içeren ve ıskartaya çıkmış elektrikli ve elektronik ekipmanlar",
    "20 01 36 -	20 01 21, 20 01 23 ve 20 01 35 dışındaki ıskarta elektrikli ve elektronik ekipmanlar",
    "20 01 37* -	Tehlikeli maddeler içeren ahşap",
    "20 01 38 -	20 01 37 dışındaki ahşap",
    "20 01 39 -	Plastikler",
    "20 01 40 -	Metaller",
    "20 01 41 -	Baca temizliğinden kaynaklanan atıklar",
    "20 01 99 -	Başka bir şekilde tanımlanmamış fraksiyonlar",],

    ["20 02 01 -	Biyolojik olarak bozunabilir atıklar",
    "20 02 02 -	Toprak ve taşlar",
    "20 02 03 -	Biyolojik olarak bozunamayan diğer atıklar",],

    ["20 03 01 -	Karışık  belediye atıkları",
    "20 03 02 -	Pazarlardan kaynaklanan atıklar",
    "20 03 03 -	Sokak temizleme kalıntıları",
    "20 03 04 -	Foseptik çamurları",
    "20 03 06 -	Kanalizasyon temizliğinde kaynaklanan atıklar",
    "20 03 07 -	Hacimli atıklar",
    "20 03 99 -	Başka bir şekilde tanımlanmamış belediye atıkları",]
],
        ];







var selectId =[
    [["1","2"],["3","4","5","6","7","8","9"],["10","11","12","13","14","15","16","17"],["18","19","20","21","22","23"]],
    [["24","25","26","27","28","29","30","31","32","33"],["34","35","36","37","38"],["39","40","41","42","43","44"],["45","46","47","48"],["49","50","51"],["52","53","54","55"],["56","57","58","59","60","61"],],
    [["62","63","64","65"],["66","67","68","68","70","71"],["72","73","74","75","76","77","78","79","80"],],
    [["81","82","83","84","85","86","87","88","89","90"],["91","92","93","94","95","96","97","98","99","100","101"]],
    [["102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118"],["119","120","121","122"],["123","124","125"]],
    [["126","127","128","129","130","131","132"],["133","134","135","136","137"],["138","139","140","141","142","143"],["144","145","146","147"],["148","149"],["150","151","152"],["153","154","155","156","157"],["158","159"],["160","161","162","163"],["164","165"],["166","167"],["168","169","170","171","172","173"],],
    [["174","175","176","177","178","179","180",181,182,183],[184,185,186,187,188,189,190,191,192,193,194,195,196,197,198],[199,200,201,202,203,204,205,206,207,208],[209,210,211,212,213,214,215,216,217,218,219],[220,221,222,223,224,225,226,227,228,229,230,231],[232,233,234,235,236,237,238,239,240,241],[242,243,244,245,246,247,248,249,250,251],],
    [[252,253,254,255,256,257,258,259,260,261,262,263],[264,265,266,267],[268,269,270,271,272,273,274,275,276,277,278],[279,280,281,282,283,284,285,286,287,288],[289]],
    [[299,300,301,302,303,304,305,306,307,308,309,310,311]],
    [[312,313,314,315,316,317,318,329,320,321,322,323,324,325,326,327,328,329,330,331,332,333],[334,335,336,337,338,339,340,341,342,343,344],[345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366],[367,368,369,370,371,372,373,374,375,376],[377,378,379,380,381,382,383,384,385,386],[387,388,389,391,392,393,394,395,396],[397,398,399,400,401,402,403,404],[405,406,407,408,409,410,411,412,413,414,415,416,417,418,419],[420,421,422,423,424,425,426,427,428,429,430,431,432,433],[434,435,436,437,438,439,440,441,442,443,444,445,446,447],[448,449,450,451,452,453,454,455,456,457,458,459,460,461,462],[463,464,465,466,467,468,469,470,471,472,473],[474,475,476,477,478,479,480,481,482,483,485],[486]],
    [[487,488,489,490,491,492,493,494,495,496,497,498,499,500],[501,502,503,504,505,506],[507,508],[509,510,511,512,513]],
    [[514,515,516,517,518,519,520,521,523,524,525,526,527,528,529,530,531,532,533,534,535,],[536,537]],
    [[538,539,540,541,542,543,544,545],[546,547,548,549,550],[551,552,553,554,555,556],[557,558,559],[560,561,562,563,564,565],[566,567,568],[569,570,571]],
    [[572,573,574,575,576],],
    [[577,578,579,580,581,582,583,584,999,9999],[585,901]],
    [[902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,586,587,588],[589,590,591,592,593,594,595,596],[597,598,599,600],[601,602,603],[604,605,606,607,608,609],[610,611,612,613,614,615],[616,617,618],[619,620,623,624,625,626,627],[628,629,630,631],[632,633,634,635],[636,637,638,639,640],],
    [[641,642,643,644,645],[646,647,648,649],[650,651,652],[653,654,655,656,657,658,659,660,661,662],[663,664,665,666,667,668],[669,670,671,672],[673,674],[675,676,677,678]],
    [[679,680,681,682,683,684,685,686,687],[688,689,690,691,692,693,694]],
    [[695,696,697,698,699,700,701,702,703,704,705,706,707,708,709],[710,711,712,713,714,715,716,717,718,719],[720,721,722,723],[724,725,726,727],[728,729,730,731],[732,733,734,735,736],[737,738],[739,740,741,742,743,744,745,746,747,748,749,750,751],[756,757,758,759,760,761,762],[ 763,764,765,766,767,768],[769,770,771,772,773,774,775,776],[777,778,779,780,781,782,783,784,785,786,787,788],[789,790,791,792,793,794,795,796]],
    [[797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829],[830,831,832],[833,834,835,836,837,838,839]]

];
console.log(select3Array);
    


    

// option maker 
function optionMaker(array,select){
    array.forEach(function(item,index){
        let newOption = document.createElement("option");
        newOption.value = index;
        newOption.innerText = item;
        select.appendChild(newOption);

    });
}

optionMaker(select1Array,select1);


function changeFunc(index){
    ;
    select1.addEventListener("change",function(){
        
        
        select1Array.forEach(function(item,index1){
            
            
            if(select1.value == index1){
                select2.innerHTML = "";
                let newoption2 = document.createElement("option");
                    
                    newoption2.innerText = "Seçiniz";
                    select2.appendChild(newoption2);

                
               select2Array[index1].forEach(function(item,index){

                    let newoption2 = document.createElement("option");
                    newoption2.value = index;
                    newoption2.innerText = item;
                    select2.appendChild(newoption2);

                    // when first opened its important

                     theUl.innerHTML = "";
                   /* select3Array[select1.value][select2.value].forEach(function(element,index){

                        let newLi = document.createElement("li");
                        let newA = document.createElement("a");
                        newA.innerHTML = element;
                        newA.setAttribute("href",`http://127.0.0.1:8000/atikkod/${selectId[select1.value][select2.value][index]}`)
                        newLi.appendChild(newA);
                        newHr = document.createElement("hr");
                        
                        theUl.appendChild(newLi);
                        theUl.appendChild(newHr);
                        
                    }) */
            
                    
                    
                    
                


               })
                
                
                

            }
            
            

        });
        
        
    })
   
}
// the last code change in drop down menu
function lastcode(){
   

    
    select2.addEventListener("change",function(){
        theUl.innerHTML = "";
       
        select3Array[select1.value][select2.value].forEach(function(element,index){
            /* let newLi = document.createElement("li");
            newLi.className = "list-group-item bg-light"; */
            let newA = document.createElement("a");
            newA.className ="list-group-item list-group-item-action";
            newA.innerHTML = element;
            newA.setAttribute("href",`https://www.atikkutuphanesi.com/atikkod/${selectId[select1.value][select2.value][index]}`)
            /* newLi.appendChild(newA); */
            

            
            theUl.appendChild(newA);
            
            
        })

       
    })


}
lastcode();
changeFunc();