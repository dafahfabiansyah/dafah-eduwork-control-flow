let printGrade = true;

while (printGrade) {
  printGrade = prompt('Input Nilai:');
  if (printGrade < 50) {
    alert('Nilai Anda C');
  }
  if (printGrade == 50) {
    alert('Nilai Anda B');
  }
  if (printGrade > 60) {
    alert('Nilai Anda A');
  } else {
    printGrade = confirm('Lanjutkan?');
  }
}
