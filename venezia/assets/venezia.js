/* ═══════════════════════════════════════════════════════════════════════════
   VENEZIA ICE — socle commun aux trois pages (liens · menu · avis)

   ⚙️  LES COORDONNÉES ET LES LIENS SE MODIFIENT ICI, DANS « CONFIG ».
       Les produits et les prix sont dans index.html (bloc « MENU »).
   ═══════════════════════════════════════════════════════════════════════════ */

const CONFIG = {
  nom:        'Venezia Ice',
  metier:     'Glacier · Café · Restaurant',
  depuis:     '1999',
  societe:    'Ste F Corner',
  ville:      'Larache',
  adresse:    'Avenue Mohammed V, Larache',            // À CONFIRMER
  telephone:  '+212 5 39 00 00 00',                    // À CONFIRMER
  whatsapp:   '212600000000',                          // À CONFIRMER — format international, sans +
  maps:       'https://maps.google.com/?q=Venezia+Ice+Larache',
  avisGoogle: 'https://search.google.com/local/writereview?placeid=VOTRE_PLACE_ID', // À CONFIRMER
  devise:     'MAD',

  // Horaires : 0 = dimanche … 6 = samedi. null = fermé ce jour-là.
  horaires: {
    0:['09:00','23:30'], 1:['09:00','23:30'], 2:['09:00','23:30'], 3:['09:00','23:30'],
    4:['09:00','00:30'], 5:['09:00','00:30'], 6:['09:00','00:30']
  },

  // Réseaux affichés sur la page de liens et en bas du menu.
  // Retirer une ligne suffit à faire disparaître le bouton.
  reseaux: [
    {id:'instagram', nom:'Instagram', handle:'@venezia.ice',        url:'https://instagram.com/venezia.ice'},
    {id:'facebook',  nom:'Facebook',  handle:'Venezia Ice Larache', url:'https://facebook.com/veneziaice'},
    {id:'tiktok',    nom:'TikTok',    handle:'@venezia.ice',        url:'https://tiktok.com/@venezia.ice'},
    {id:'glovo',     nom:'Glovo',     handle:'Livraison à domicile',url:'https://glovoapp.com'}
  ],

  majLe: '2026-09-16'
};

const I18N = {
  fr:{dir:'ltr',
    tagline:'Petits déjeuners, cuisine, coupes glacées et pâtisseries',
    hero:'La maison des <em>glaces</em> de Larache',
    appeler:'Appeler',whatsapp:'WhatsApp',itineraire:'Itinéraire',partager:'Partager',
    ouvert:'Ouvert maintenant',ferme:'Fermé actuellement',ferme_ouvre:'Ouvre à',jusqua:'jusqu’à',
    ferme_jour:'Fermé',jours:['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    infos:'Informations pratiques',adresse:'Adresse',tel:'Téléphone',horaires:'Horaires',
    commander:'Commander',maj:'Menu mis à jour le',prix:'Prix en dirhams, taxes comprises.',
    recherche:'Rechercher un produit…',aucun:'Aucun produit ne correspond à votre recherche.',
    star:'Best-seller',new:'Nouveau',veg:'Végétarien',haut:'Revenir en haut',
    // page de liens
    voirMenu:'Voir le menu',voirMenuSous:'{n} produits · 4 langues · prix à jour',
    suivez:'Suivez-nous',liensTitre:'Tout Venezia Ice',
    avisTitre:'Laisser un avis',avisSous:'Une étoile fait plaisir, cinq font vivre le quartier',
    souciTitre:'Un souci ? Dites-le nous',souciSous:'Message privé au responsable, réponse rapide',
    commandeSous:'Commande à emporter par message',itineraireSous:'Nous trouver à Larache',
    appelerSous:'Parler à l’équipe',tousLiens:'Tous nos liens',
    // page avis
    avisH1:'Votre avis compte',
    avisIntro:'Comment s’est passé votre passage chez nous ?',
    notes:['','Très déçu','Décevant','Correct','Très bien','Excellent'],
    merciHaut:'Merci ! Voulez-vous le partager sur Google ?',
    merciHautSous:'Un avis public aide beaucoup un commerce de quartier — cela prend 30 secondes.',
    googleCta:'Écrire mon avis Google',
    merciBas:'Nous sommes désolés. Dites-nous ce qui s’est passé.',
    merciBasSous:'Votre message part directement au responsable, en privé.',
    champMessage:'Ce qui n’a pas été…',champNom:'Votre prénom (facultatif)',
    champTable:'N° de table ou date (facultatif)',
    envoyer:'Envoyer au responsable',
    aussiGoogle:'Vous pouvez aussi laisser un avis public sur Google',
    retourMenu:'← Revenir au menu',manqueMessage:'Merci d’écrire quelques mots avant d’envoyer.'},

  ar:{dir:'rtl',
    tagline:'فطور الصباح، مأكولات، كؤوس المثلجات وحلويات',
    hero:'بيت <em>المثلجات</em> بالعرائش',
    appeler:'اتصل',whatsapp:'واتساب',itineraire:'الطريق',partager:'مشاركة',
    ouvert:'مفتوح الآن',ferme:'مغلق حاليا',ferme_ouvre:'يفتح على',jusqua:'حتى',
    ferme_jour:'مغلق',jours:['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
    infos:'معلومات عملية',adresse:'العنوان',tel:'الهاتف',horaires:'أوقات العمل',
    commander:'اطلب الآن',maj:'آخر تحديث للقائمة',prix:'الأسعار بالدرهم، الضرائب مضمّنة.',
    recherche:'ابحث عن منتج…',aucun:'لا يوجد منتج مطابق لبحثك.',
    star:'الأكثر طلبا',new:'جديد',veg:'نباتي',haut:'العودة إلى الأعلى',
    voirMenu:'عرض القائمة',voirMenuSous:'{n} منتجا · 4 لغات · أسعار محدّثة',
    suivez:'تابعونا',liensTitre:'كل روابط فينيسيا آيس',
    avisTitre:'اترك تقييما',avisSous:'تقييمك يساعدنا كثيرا',
    souciTitre:'واجهتك مشكلة؟ أخبرنا',souciSous:'رسالة خاصة إلى المسؤول، رد سريع',
    commandeSous:'اطلب للأخذ عبر رسالة',itineraireSous:'كيف تصل إلينا في العرائش',
    appelerSous:'تحدث مع الفريق',tousLiens:'جميع روابطنا',
    avisH1:'رأيك يهمنا',
    avisIntro:'كيف كانت زيارتك لنا؟',
    notes:['','سيئ جدا','مخيب','مقبول','جيد جدا','ممتاز'],
    merciHaut:'شكرا لك! هل تشاركه على غوغل؟',
    merciHautSous:'التقييم العلني يساعد محلا صغيرا كثيرا — لا يستغرق سوى 30 ثانية.',
    googleCta:'كتابة تقييم على غوغل',
    merciBas:'نعتذر لك. أخبرنا بما حدث.',
    merciBasSous:'رسالتك تصل مباشرة إلى المسؤول، بشكل خاص.',
    champMessage:'ما الذي لم يكن على ما يرام…',champNom:'اسمك (اختياري)',
    champTable:'رقم الطاولة أو التاريخ (اختياري)',
    envoyer:'إرسال إلى المسؤول',
    aussiGoogle:'يمكنك أيضا ترك تقييم علني على غوغل',
    retourMenu:'← العودة إلى القائمة',manqueMessage:'المرجو كتابة بضع كلمات قبل الإرسال.'},

  en:{dir:'ltr',
    tagline:'Breakfast, food, ice cream sundaes and pastries',
    hero:'Larache’s home of <em>ice cream</em>',
    appeler:'Call',whatsapp:'WhatsApp',itineraire:'Directions',partager:'Share',
    ouvert:'Open now',ferme:'Currently closed',ferme_ouvre:'Opens at',jusqua:'until',
    ferme_jour:'Closed',jours:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    infos:'Useful information',adresse:'Address',tel:'Phone',horaires:'Opening hours',
    commander:'Order',maj:'Menu updated on',prix:'Prices in dirhams, taxes included.',
    recherche:'Search the menu…',aucun:'No item matches your search.',
    star:'Best-seller',new:'New',veg:'Vegetarian',haut:'Back to top',
    voirMenu:'See the menu',voirMenuSous:'{n} items · 4 languages · live prices',
    suivez:'Follow us',liensTitre:'All of Venezia Ice',
    avisTitre:'Leave a review',avisSous:'It takes 30 seconds and means a lot',
    souciTitre:'Something wrong? Tell us',souciSous:'Private message to the manager, quick reply',
    commandeSous:'Takeaway order by message',itineraireSous:'Find us in Larache',
    appelerSous:'Talk to the team',tousLiens:'All our links',
    avisH1:'Your opinion matters',
    avisIntro:'How was your visit?',
    notes:['','Very disappointed','Disappointing','Fine','Very good','Excellent'],
    merciHaut:'Thank you! Would you share it on Google?',
    merciHautSous:'A public review helps a neighbourhood business enormously — it takes 30 seconds.',
    googleCta:'Write my Google review',
    merciBas:'We are sorry. Tell us what happened.',
    merciBasSous:'Your message goes straight to the manager, privately.',
    champMessage:'What went wrong…',champNom:'Your first name (optional)',
    champTable:'Table number or date (optional)',
    envoyer:'Send to the manager',
    aussiGoogle:'You can also leave a public review on Google',
    retourMenu:'← Back to the menu',manqueMessage:'Please write a few words before sending.'},

  es:{dir:'ltr',
    tagline:'Desayunos, cocina, copas heladas y pastelería',
    hero:'La casa de los <em>helados</em> de Larache',
    appeler:'Llamar',whatsapp:'WhatsApp',itineraire:'Cómo llegar',partager:'Compartir',
    ouvert:'Abierto ahora',ferme:'Cerrado ahora',ferme_ouvre:'Abre a las',jusqua:'hasta',
    ferme_jour:'Cerrado',jours:['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    infos:'Información práctica',adresse:'Dirección',tel:'Teléfono',horaires:'Horario',
    commander:'Pedir',maj:'Carta actualizada el',prix:'Precios en dírhams, impuestos incluidos.',
    recherche:'Buscar en la carta…',aucun:'Ningún producto coincide con la búsqueda.',
    star:'Más vendido',new:'Nuevo',veg:'Vegetariano',haut:'Volver arriba',
    voirMenu:'Ver la carta',voirMenuSous:'{n} productos · 4 idiomas · precios al día',
    suivez:'Síguenos',liensTitre:'Todo Venezia Ice',
    avisTitre:'Dejar una reseña',avisSous:'30 segundos que nos ayudan mucho',
    souciTitre:'¿Algún problema? Dínoslo',souciSous:'Mensaje privado al responsable, respuesta rápida',
    commandeSous:'Pedido para llevar por mensaje',itineraireSous:'Encuéntranos en Larache',
    appelerSous:'Hablar con el equipo',tousLiens:'Todos nuestros enlaces',
    avisH1:'Tu opinión cuenta',
    avisIntro:'¿Qué tal ha ido tu visita?',
    notes:['','Muy decepcionado','Decepcionante','Correcto','Muy bien','Excelente'],
    merciHaut:'¡Gracias! ¿Quieres compartirlo en Google?',
    merciHautSous:'Una reseña pública ayuda muchísimo a un negocio de barrio — son 30 segundos.',
    googleCta:'Escribir mi reseña en Google',
    merciBas:'Lo sentimos. Cuéntanos qué ha pasado.',
    merciBasSous:'Tu mensaje llega directamente al responsable, en privado.',
    champMessage:'Lo que no ha ido bien…',champNom:'Tu nombre (opcional)',
    champTable:'N.º de mesa o fecha (opcional)',
    envoyer:'Enviar al responsable',
    aussiGoogle:'También puedes dejar una reseña pública en Google',
    retourMenu:'← Volver a la carta',manqueMessage:'Escribe unas palabras antes de enviar.'}
};

/* ═══════════════════════════════════════════════════════════════════════════
   Socle technique commun — rien à modifier au quotidien.
   ═══════════════════════════════════════════════════════════════════════════ */
const V = (function(){
  'use strict';
  const LANGS = ['fr','ar','en','es'];
  let lang = 'fr';
  try {
    const memo = localStorage.getItem('venezia.lang');
    if (memo && LANGS.includes(memo)) lang = memo;
    else {
      const nav = (navigator.language || 'fr').slice(0,2);
      if (LANGS.includes(nav)) lang = nav;
    }
  } catch (e) { /* navigation privée : on reste en français */ }

  const ecouteurs = [];
  const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const t  = () => I18N[lang];
  const tr = o => (o && (o[lang] || o.fr)) || '';
  const $  = id => document.getElementById(id);

  const ICONES = {
    appeler:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z"/>',
    whatsapp:'<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z"/><path d="M8.5 8.5c.4 2.6 2.4 4.6 5 5"/>',
    itineraire:'<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
    partager:'<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="M12 15V3m0 0 4 4m-4-4-4 4"/>',
    haut:'<path d="M12 19V5m0 0-6 6m6-6 6 6"/>'
  };

  // Pictogrammes pleins (boutons de liens)
  const MARQUES = {
    menu:'M4 5h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm3 4h10v1.6H7zm0 4h10v1.6H7zm0 4h6v1.6H7z',
    instagram:'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9s.7.8.9 1.4c.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4s-.8.7-1.4.9c-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4s.8-.7 1.4-.9c.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.8-.1zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 2.2a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm6.6-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
    facebook:'M14 9V7.3c0-.8.2-1.3 1.4-1.3H17V3.1A20 20 0 0 0 14.8 3C12.3 3 10.6 4.5 10.6 7v2H8v3.3h2.6V21H14v-8.7h2.6l.4-3.3z',
    tiktok:'M16.5 3c.4 2.2 1.7 3.6 3.9 3.8v2.6c-1.4.1-2.7-.3-4-1v5.9c0 5-4.1 7.4-8 5.6-2.4-1.1-3.4-4.2-2.5-6.8.8-2.2 3-3.5 5.6-3.2v2.9c-.4-.1-.8-.2-1.2-.2-1.3.1-2.3 1.1-2.3 2.4 0 1.4 1.2 2.5 2.6 2.4 1.4-.1 2.3-1.2 2.3-2.7V3h3.6z',
    glovo:'M12 2a7 7 0 0 0-7 7c0 4.5 5.4 11.6 6.3 12.7.4.5 1 .5 1.4 0C13.6 20.6 19 13.5 19 9a7 7 0 0 0-7-7zm0 4.3a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4z',
    maps:'M12 2a7.5 7.5 0 0 0-7.5 7.5c0 5.3 6.6 11.9 6.9 12.2.3.3.9.3 1.2 0 .3-.3 6.9-6.9 6.9-12.2A7.5 7.5 0 0 0 12 2zm0 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z',
    etoile:'M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z',
    message:'M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1zm3 4.4h10V10H7zm0 3.4h7v1.6H7z',
    telephone:'M6.5 3h3.2l1.8 4.4-2.2 1.4a12 12 0 0 0 5.9 5.9l1.4-2.2 4.4 1.8v3.2a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z',
    whatsappPlein:'M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2m5.8 14.3c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.5-1.2-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.3.3c-.1.1-.3.3-.1.6.1.3.6 1.1 1.4 1.8 1 .9 1.8 1.1 2 1.2.3.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l2 1c.2.1.4.2.4.3.1.1.1.6-.1 1.3',
    lien:'M10.6 13.4a4 4 0 0 0 5.7 0l2.8-2.8a4 4 0 1 0-5.7-5.7l-1.6 1.6 1.4 1.4 1.6-1.6a2 2 0 1 1 2.9 2.9l-2.9 2.8a2 2 0 0 1-2.8 0zm2.8-2.8a4 4 0 0 0-5.7 0l-2.8 2.8a4 4 0 1 0 5.7 5.7l1.6-1.6-1.4-1.4-1.6 1.6a2 2 0 1 1-2.9-2.9l2.9-2.8a2 2 0 0 1 2.8 0z'
  };

  const minutes = hm => { const [h,m] = hm.split(':').map(Number); return h*60+m; };

  /** État d'ouverture, en tenant compte des services qui finissent après minuit. */
  function ouverture(now){
    now = now || new Date();
    const j = now.getDay(), min = now.getHours()*60 + now.getMinutes();
    const veille = CONFIG.horaires[(j+6)%7];
    if (veille){
      const [o,f] = veille.map(minutes);
      if (f < o && min < f) return {ouvert:true, ferme:veille[1]};
    }
    const jour = CONFIG.horaires[j];
    if (!jour) return {ouvert:false, ouvre:null};
    const [o,f] = jour.map(minutes);
    const fin = f < o ? f + 1440 : f;
    if (min >= o && min < fin) return {ouvert:true, ferme:jour[1]};
    return {ouvert:false, ouvre:min < o ? jour[0] : null};
  }

  function waLink(message){
    const txt = message !== undefined ? message :
      (lang === 'ar' ? 'السلام عليكم، بغيت نطلب من فينيسيا آيس' :
       lang === 'en' ? 'Hello Venezia Ice, I would like to order:' :
       lang === 'es' ? 'Hola Venezia Ice, quisiera pedir:' :
       'Bonjour Venezia Ice, je souhaite commander :');
    return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(txt);
  }

  function partager(){
    const data = {title:CONFIG.nom + ' — ' + CONFIG.ville, text:t().tagline, url:location.href};
    if (navigator.share) { navigator.share(data).catch(()=>{}); return; }
    if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(
      () => alert(location.href), () => {});
  }

  function setLang(l){
    if (!LANGS.includes(l)) return;
    lang = l;
    try { localStorage.setItem('venezia.lang', l); } catch (e) { /* stockage indisponible */ }
    appliquer();
  }

  function appliquer(){
    document.documentElement.lang = lang;
    document.documentElement.dir = t().dir;
    ecouteurs.forEach(fn => fn());
  }

  /* ─── Fragments d'interface partagés ─── */

  function langs(el){
    if (!el) return;
    el.innerHTML = LANGS.map(l =>
      `<button type="button" data-l="${l}" aria-pressed="${l===lang}" lang="${l}">${l.toUpperCase()}</button>`).join('');
    el.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.l)));
  }

  function statut(el){
    if (!el) return;
    const st = ouverture(), T = t();
    el.className = 'statut' + (st.ouvert ? '' : ' ferme');
    el.innerHTML = '<span class="pastille"></span><span>' +
      (st.ouvert ? esc(T.ouvert + ' · ' + T.jusqua + ' ' + st.ferme)
                 : esc(st.ouvre ? T.ferme + ' · ' + T.ferme_ouvre + ' ' + st.ouvre : T.ferme)) +
      '</span>';
  }

  function actions(el){
    if (!el) return;
    const T = t();
    const liste = [
      {k:'appeler',    href:'tel:' + CONFIG.telephone.replace(/\s/g,'')},
      {k:'whatsapp',   href:waLink()},
      {k:'itineraire', href:CONFIG.maps},
      {k:'partager',   href:'#', partage:true}
    ];
    el.innerHTML = liste.map(a =>
      `<a class="action" href="${esc(a.href)}"${a.partage ? ' data-partage="1"' : ' target="_blank" rel="noopener"'}>
         <svg viewBox="0 0 24 24" aria-hidden="true">${ICONES[a.k]}</svg><span>${esc(T[a.k])}</span></a>`).join('');
    const p = el.querySelector('[data-partage]');
    if (p) p.addEventListener('click', e => { e.preventDefault(); partager(); });
  }

  function horaires(el){
    if (!el) return;
    const T = t(), auj = new Date().getDay();
    el.innerHTML = [1,2,3,4,5,6,0].map(j => {
      const h = CONFIG.horaires[j];
      return `<li class="${j === auj ? 'today' : ''}"><span>${esc(T.jours[j])}</span><span>${
        h ? esc(h[0] + ' – ' + h[1]) : esc(T.ferme_jour)}</span></li>`;
    }).join('');
  }

  /** Bouton « revenir en haut », affiché après 400 px de défilement. */
  function retourHaut(){
    const b = document.createElement('button');
    b.className = 'haut'; b.type = 'button';
    b.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONES.haut}</svg>`;
    b.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
    document.body.appendChild(b);
    const maj = () => {
      b.classList.toggle('visible', window.scrollY > 400);
      b.setAttribute('aria-label', t().haut);
    };
    window.addEventListener('scroll', maj, {passive:true});
    ecouteurs.push(maj); maj();
  }

  /** Construit un gros bouton de lien. */
  function boutonLien({href, icone, titre, sous, majeur, cible}){
    return `<a class="lien${majeur ? ' majeur' : ''}" href="${esc(href)}"${
      cible ? ' target="_blank" rel="noopener"' : ''}>
        <span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="${MARQUES[icone] || MARQUES.lien}"/></svg></span>
        <span class="txt"><span class="titre">${esc(titre)}</span>${
          sous ? `<span class="sous">${esc(sous)}</span>` : ''}</span>
        <span class="fleche" aria-hidden="true">›</span></a>`;
  }

  function surChangement(fn){ ecouteurs.push(fn); }

  /** Nombre de produits réellement proposés (hors ruptures), pour les textes. */
  function nbProduits(){
    if (typeof MENU === 'undefined') return 0;
    return MENU.reduce((n,c) => n + c.items.filter(i => !i.off).length, 0);
  }

  return {
    get lang(){ return lang; }, LANGS, setLang, t, tr, esc, $, ICONES, MARQUES,
    ouverture, waLink, partager, langs, statut, actions, horaires, retourHaut, nbProduits,
    boutonLien, surChangement, appliquer
  };
})();
