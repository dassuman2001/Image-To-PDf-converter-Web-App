document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector("button");
  const input = document.querySelector("input");
  const img = document.querySelector("img");

  button.addEventListener("click", function() {
    console.log('Button clicked');
    let a = input.value;
    if (a !== "") {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      
      doc.addImage(img, 'JPEG', 55, 90, 100,100);
      doc.save('Image(Convereted).pdf');
      var pdfUrl = URL.createObjectURL(pdfData);
    } else {
      alert("Please select an image..!");
    }
  });

  input.addEventListener("change", function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function() {
      img.src = reader.result;
    }
    reader.readAsDataURL(file);
  });
});

