const pages = [
  {
    title: "Home",
    url: "index.html",
    text: "Archivio Genealogico Cardiello San Pietro al Tanagro Eboli"
  },
  {
    title: "Albero Genealogico",
    url: "albero.html",
    text: "Innocenzio Vito Domenico Antonio Nicola Cosimo Angelo linea genealogica Cardiello"
  },
  {
    title: "Storia della Famiglia",
    url: "storia.html",
    text: "storia famiglia Cardiello Casale San Pietro Eboli Vallo di Diano Piana del Sele"
  },
  {
    title: "Luoghi della Famiglia",
    url: "luoghi.html",
    text: "San Pietro al Tanagro Casale San Pietro Eboli Via Sant'Antonio Corso Umberto Pastificio Pezzullo"
  },
  {
    title: "Il Cognome Cardiello",
    url: "cognome.html",
    text: "origine cognome Cardiello Cardella San Pietro al Tanagro Vallo di Diano etimologia"
  },
  {
    title: "Ricerca e Curatela",
    url: "ricerca.html",
    text: "fonti registri parrocchiali Portale Antenati FamilySearch Archivio di Stato Salerno Catasto Onciario"
  },
  {
    title: "Contatti",
    url: "contatti.html",
    text: "contatti email Archivio Genealogico Cardiello"
  },

  {
    title: "Innocenzio Cardiello",
    url: "antenati/innocenzio.html",
    text: "Innocenzio Cardiello Agata Mangieri Casale San Pietro 1649"
  },
  {
    title: "Vito Cardiello 1674",
    url: "antenati/vito-1674.html",
    text: "Vito Cardiello Elisabetta Leopardo Angela Spenella 1674 1734"
  },
  {
    title: "Domenico Nicola Cardiello",
    url: "antenati/domenico-1717.html",
    text: "Domenico Nicola Cardiello Rosa Bracco bracciale Catasto Onciario 1717 1759"
  },
  {
    title: "Antonio Giuseppe Angelo Cardiello",
    url: "antenati/antonio-1753.html",
    text: "Antonio Giuseppe Angelo Cardiello Rachele De Como 1753 1785"
  },
  {
    title: "Domenico Giuseppe Cardiello",
    url: "antenati/domenico-1779.html",
    text: "Domenico Giuseppe Cardiello Chiara Pinto bufalaro trasferimento Eboli 1779 1822"
  },
  {
    title: "Nicola Giuseppe Vito Cardiello",
    url: "antenati/nicola-1807.html",
    text: "Nicola Giuseppe Vito Cardiello Anna Agnese D'Andrea calzolaio 1807 1857"
  },
  {
    title: "Vito Cardiello 1850",
    url: "antenati/vito-1850.html",
    text: "Vito Cardiello Sofia Gallotta Guardia Municipale 1850 1903"
  },
  {
    title: "Cosimo Cardiello",
    url: "antenati/cosimo-1882.html",
    text: "Cosimo Cardiello Angela Fresolone Concetta Marzullo barbiere Guardia Municipale 1882 1958"
  },
  {
    title: "Angelo Cardiello",
    url: "antenati/angelo-1922.html",
    text: "Angelo Cardiello Vincenza Ferrara Sindaco Eboli Pastificio Pezzullo diacono 1922 2006"
  },
  {
    title: "Nicola Cardiello",
    url: "antenati/nicola-1960.html",
    text: "Nicola Cardiello Anna Maria Albano Pastificio Pezzullo Battipaglia Eboli 1960 2007"
  },

{
  title: "Ramo di Innocenzio Cardiello",
  url: "ramo-innocenzio.html",
  text: "Innocenzio Cardiello Agata Mangieri ramo pubblicato Eboli Casale San Pietro discendenza"
},
{
  title: "Ramo di Andrea Cardiello",
  url: "ramo-andrea.html",
  text: "Andrea Cardiello Teresa Pecora Piecoro Martino Anna Chiara Bernardo Antonio Nicola Gerardo Nicola Bernardo Diodato Francesco Giuseppe Antonio"
},
{
  title: "Ramo di Giovanni Battista Cardiello",
  url: "ramo-giovanni-battista.html",
  text: "Giovanni Battista Cardiello Marta Di Giulio Anna Vittoria Carlo Antonio Camilla Catarina"
},
{
  title: "Ramo di Carlo Cardiello",
  url: "ramo-carlo.html",
  text: "Carlo Cardiello Genua Mangieri Olimpia Elisabetta Margarita Giovanni Maria Simone Angelo Antonio Giovanello"
},
{
  title: "Ramo di Francesco Cardiello",
  url: "ramo-francesco.html",
  text: "Francesco Cardiello Antonia Di Benedetto Olimpia Natale Cesare"
},
{
  title: "Ramo di Ercole Cardiello",
  url: "ramo-ercole.html",
  text: "Ercole Cardiello Maddalena Mele Elisabetta Faustina Giuseppe Antonio Brigitta Diego Antonio Aquila Caterina"
},
{
  title: "Ramo di Giuseppe Cardiello",
  url: "ramo-giuseppe.html",
  text: "Giuseppe Cardiello Maria Pisana Diego Margarita Donata Isabella"
},
{
  title: "Ramo di Domenico Cardiello",
  url: "ramo-domenico.html",
  text: "Domenico Cardiello Giovetta D'Alessio Andrea Angelo Carmine Carmosina Francesco Nicola Angela Antonia Pietro Matteo Brigitta Elisabetta Matteo Arsenio"
},
{
  title: "Ramo di Giovanni Cardiello",
  url: "ramo-giovanni.html",
  text: "Giovanni Cardiello Caterina Spinella Pisano Pifano Lucrezia Porzia Maria Giuseppe Domenico Andrea Angelo Nicola Agnese Maria Nicola Ercole Francesco Antonio Angela"
},
{
  title: "Ramo di Tomaso Cardiello",
  url: "ramo-tomaso.html",
  text: "Tomaso Cardiello Marta Spinella Margarita Faustina Antonia Caterina Marco Antonio Angelo Carmine Angela Giuditta"
}
  
];

function searchSite(){
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("results");

  results.innerHTML = "";

  if(input.length < 2){
    return;
  }

  const filtered = pages.filter(page =>
    page.title.toLowerCase().includes(input) ||
    page.text.toLowerCase().includes(input)
  );

  if(filtered.length === 0){
    results.innerHTML = "<p>Nessun risultato trovato.</p>";
    return;
  }

  filtered.forEach(page => {
    results.innerHTML += `
      <div class="card">
        <h3>${page.title}</h3>
        <p class="meta">${page.text}</p>
        <a href="${page.url}">Apri pagina</a>
      </div>
    `;
  });
}
