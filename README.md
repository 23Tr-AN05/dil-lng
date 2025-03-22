<html>
 <title>Mathématiques</title>
 <head>
    <meta charset="utf-8"/>
    <link href="style.css" rel="stylesheet" type="text/css"/>
    <link href="mps.css" rel="stylesheet" type="text/css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <script src="s.js" data-import=""></script>
    <script src="mps.js" data-import=""></script>
 </head>
 <body onload="body()">
 <center><h1 id="h1">Türkçe / Français </h1></center>
 <br>
 <div class="w3-container">
  
 </div>

 <div class="w3-bar w3-black">
  <button class="w3-bar-item w3-button" onclick="openCity('Ac')">Acceuil</button>
  <button class="w3-bar-item w3-button" onclick="showTab(1, 'w3-container-1')">Turc</button>
  <button class="w3-bar-item w3-button" onclick="showTab(2, 'w3-container-2')">Fransızca</button>
  <!-- <button class="w3-bar-item w3-button" onclick="openCity('Info')">Informatique</button>
  <button class="w3-bar-item w3-button" onclick="openCity('Forum')">Forum</button>-->
 </div>
 <div id="Ac" class="w3-container city">
 <div style="border: 1px solid black; padding: 10px;">
  <p id="para2">Bienvenue</p>
  <p id="para3">Ce est destiné aux gens qui apprennent le turc avec moi, ainsi sur ce site, vous trouverez les cours de turc et leur correction.</p>
    <div id="center">
      <p id="para33">Si vous avez des questions vous pouvez envoyer un mail en choissisant la langue sur laquelle votre question se porte. Je vous réponderai plutôt possible par mail ou vous pouvez consulter l'onglet "forum", où je mettrais certaines questions avec leur réponse. 
       <br>&nbsp;&nbsp;&nbsp;⯑ &nbsp;<a title="Question" href="mailto:ozcelebialican2005@gmail.com?subject=J'ai une question%5BMat%5D&body=J'ai%20une%20question%20sur%20le%20turc%20(ne%20changez%20pas%20l'objet%20du%20mail).">Turc / Türkçe</a>
       <br>&nbsp;&nbsp;&nbsp;⯑&nbsp;<a title="Question" href="mailto:ozcelebialican2005@gmail.com?subject=J'ai une question%5BFR%5D&body=Ma%20question%20se%20porte%20sur%20le%20français%20 (ne%20changez%20pas%20l'objet%20du%20mail).">Français / Fransızca</a>
       <br> &nbsp;&nbsp;&nbsp; ‼‽ &nbsp;<a title="Signaler une erreur" href="mailto:ozcelebialican2005@gmail.com?subject=%5BErreur%5D&body=Ma%20question%20se%20porte%20sur%20le%20français%20 (ne%20changez%20pas%20l'objet%20du%20mail).%0ADans%20l'onglet:%0ANom%20du%20fichier:%0AErreur:">Je signale une erreur!</a>
     </p></div>
     <p><font style="color:red"><b>L'onglet Forum</b> est actuellement <b>vide</b>, donc l'onglet est désactivé temporairement (je l'activerai dès lors que j'aurais une question posée)</font></p>
     </div>
  <div style="border: 1px solid black; padding: 10px;">
  <p id="para2">Hoşgeldiniz!</p>
  <p id="para3">Bu site, fransızca öğrenenlere yardım amaçlı yapılmıştır. Bu sayfada,  kullanbileceğiniz fransızca üzerine bazı dersler ve alıştırmalar bulunmaktadır.</p>
    <div id="center">
      <p id="para33">Herhangi bir sorunuz varsa, sorunuzun ilgili olduğu dili seçerek bana bir e-posta gönderebilirsiniz. Mümkün olan en kısa sürede e-posta ile cevap vereceğim veya bazı soruları cevaplarıyla birlikte  “forum” sekmesine koyacağım. 
       <br>&nbsp;&nbsp;&nbsp;⯑ &nbsp;<a title="Question" href="mailto:ozcelebialican2005@gmail.com?subject=J'ai une question%5BMat%5D&body=J'ai%20une%20question%20sur%20le%20turc%20(ne%20changez%20pas%20l'objet%20du%20mail).">Turc / Türkçe</a>
       <br>&nbsp;&nbsp;&nbsp;⯑&nbsp;<a title="Question" href="mailto:ozcelebialican2005@gmail.com?subject=J'ai une question%5BFR%5D&body=Ma%20question%20se%20porte%20sur%20le%20français%20 (ne%20changez%20pas%20l'objet%20du%20mail).">Français / Fransızca</a>
       <br> &nbsp;&nbsp;&nbsp; ‼‽ &nbsp;<a title="Signaler une erreur" href="mailto:ozcelebialican2005@gmail.com?subject=%5BErreur%5D&body=Ma%20question%20se%20porte%20sur%20le%20français%20 (ne%20changez%20pas%20l'objet%20du%20mail).%0ADans%20l'onglet:%0ANom%20du%20fichier:%0AErreur:">Je signale une erreur!</a>
     </p></div>
     <p><font style="color:red"><b>Forum sekmesi şu anda boş, bu nedenle geçici olarak devre dışı bırakıldı (bir soru sorulduğunda olduğunda etkinleştireceğim).</b></font></p>
     </div>
     <p>--</p> 
    <hr>
   </div>

<div id="content-1" class="w3-container city" style="display:none">
 <div class="password-box" id="password-box-1">
                <label for="password-1">Mot de passe:</label>
                <input type="password" id="password-1">
                <button onclick="checkPassword(1)">Valider</button>
                <div id="error-message-1" style="color: red; display: none;">Mot de passe incorrect.</div>
            </div>
      <div class="tab-content-content" id="content-1" style="display: none;">  <div class="tab-content-content" id="content-1" style="display: none;">
   <p id="para1">Turc / Türkçe </p>
   <p id="para3"><a href="tr/cdt.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u>Cahier de Texte</u></font> </a>et<a href="tr/proverbe.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u>Proverbes</u></font></a>  . </p>
    <p id="para6">📁 Se présenter / kendini tanıtma</p>
      <ul>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   Correction-TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
    </ul>
    <p id="para6">📁 Kahvaltı</p>
     <ul>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   Correction-TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
    </ul>
    <p id="para6"> Günlük aktiviteler ve hobiler</p>
     <ul>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   Correction-TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
    </ul>
    <p id="para6"> Mevsimler ; Meyve ve sebzeler</p>
     <ul>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   Correction-TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
    </ul>
   <hr> 
  </div>

<div id="content-2" class="w3-container city" style="display:none">
   <p id="para1">Fransızca / Français </p>
   <p id="para3"><a href="fr/ctd.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u> Ajanda</u></font> </a>ve<a href="fr/proverbe.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u> deyimler</u></font></a>  . </p>
    <p id="para6">📁 Chapitre 1:</p>
      <ul>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   Correction-TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
    </ul>
    <p id="para6">📁 Chapitre 2:</p>
     <ul>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   Correction-TD-</p></a></li>
        <li><a href="mat/6e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
    </ul>
   <hr> 
  </div>



















 <script>
 function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
 }
 </script>
  <script>
 function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-white", "w3-yellow");
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-yellow", "w3-white");
  }
 }
 </script>