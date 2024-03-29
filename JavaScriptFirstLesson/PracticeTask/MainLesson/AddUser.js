function AddName() {
    let ism = document.getElementById("kirit").value;
    let nameList = document.getElementById("nameList").innerHTML;
    nameList += `<li>${ism}</li>`;
    document.getElementById("nameList").innerHTML = nameList;
  }