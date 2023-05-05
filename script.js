$(document).ready(function () {
    $('button').click(function () {
        console.log('Button clicked')
        let a = $('input').val()
        if (a !== "") {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            var img = $('img')[0];
            doc.addImage(img, 'JPEG', 55, 90, 100, 100);
            doc.save('Image(Convereted).pdf');
            var pdfData = doc.output('blob');
            var pdfUrl = URL.createObjectURL(pdfData);
        }
        else {
            alert("Please select an Imgae..!")
        }
    });
    $('input').change(function () {
        var file = $(this)[0].files[0];
        var reader = new FileReader();
        reader.onload = function () {
            $('img').attr('src', reader.result);
        }
        reader.readAsDataURL(file);
    });
});