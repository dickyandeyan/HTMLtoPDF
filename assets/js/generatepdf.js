const generatePDF = async () => {
   var quality = 1
   html2canvas(document.querySelector('#contentToPrint'), {
      scale: 0.7
   }).then(
      (canvas) => {
          var pdf = new jsPDF('p', 'mm', 'a4', true)
           pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, 210, 298, 'FAST') //210 to 298
           pdf.save('doc/pdf')
       }
   )
}