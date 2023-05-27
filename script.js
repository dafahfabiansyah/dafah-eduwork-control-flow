let printGrade = true;

while (printGrade) {
  printGrade = prompt('Input Nilai:');
  if (printGrade < 50) {
    alert('Nilai Anda C');
    printGrade = confirm('Lanjutkan?');
  }
  if ((printGrade = 50)) {
    alert('Nilai Anda B');
    printGrade = confirm('Lanjutkan?');
  }
  if (printGrade > 50) {
    alert('Nilai Anda A');
    printGrade = confirm('Lanjutkan?');
  }
}
