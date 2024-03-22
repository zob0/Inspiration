document
  .getElementsByTagName("button")[0]
  .addEventListener("click", validacija);
let vrste = ["Inspirativni", "Motivacioni", "Ljubavni"];
let izabraneVrste = [];
function validacija() {
  let j = 0;
  if (document.getElementById("ime").value == "") {
    alert("Morate uneti ime :(");
    return;
  }
  let eMail = document.getElementById("mail").value;
  if (!eMail.includes("@") || eMail.endsWith("@") || eMail.startsWith("@")) {
    alert("Pogrešno unet email :(");
    return;
  }
  if (document.getElementById("user").value == "") {
    alert("Morate uneti korisničko ime :(");
    return;
  }
  if (document.getElementById("pass").value.length < 8) {
    alert("Šifra ima manje od 8 karaktera :(");
    return;
  }
  let prazno = true;
  let checkboxovi = document.getElementsByClassName("cb");
  for (let i = 0; i < checkboxovi.length; i++) {
    if (checkboxovi[i].checked) {
      prazno = false;
      izabraneVrste[j++] = vrste[i];
    }
  }
  if (prazno) {
    alert("Morate da izaberete bar jednu vrstu citata :(");
    return;
  }
  if (!document.getElementsByClassName("radio")[0].checked) {
    alert("Morate prihvatiti uslove korišćenja :(");
    return;
  }
  alertajSve(
    document.getElementById("ime").value,
    document.getElementById("mail").value,
    document.getElementById("user").value,
    document.getElementById("pass").value,
    izabraneVrste
  );
}
function alertajSve(ime, email, username, pass, izabraneVrste) {
  let josJedanString = izabraneVrste[0];
  for (i = 1; i < izabraneVrste.length; i++) {
    josJedanString += ", " + izabraneVrste[i];
  }
  alert(
    "Zdravo " +
      ime +
      "\nEmail: " +
      email +
      "\nUsername: " +
      username +
      "\nŠifra: " +
      pass +
      "\nIzabrane vrste citata: " +
      josJedanString +
      "\nUslovi prihvaćeni"
  );
}
