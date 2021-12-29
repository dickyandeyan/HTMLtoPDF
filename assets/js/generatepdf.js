const generatePDF = async () => {
   const quality = 1
    html2canvas(document.querySelector('#contentToPrint'), {
       scale: 0.7
   }).then(
       (canvas) => {
           const pdf = new jsPDF('p', 'mm', 'a4')
           pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 298) //210 to 298
           pdf.save('doc/pdf')
       }
   )
}