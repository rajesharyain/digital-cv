import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const printToPDF = async (elementId: string, fileName: string) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error('Element not found');
    return;
  }
  
  // Capture the element as an image
  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL('image/png');

  // Create a PDF document
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [canvas.width, canvas.height]
  });

  // Add the captured image to the PDF
  pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

  // Save the PDF
  pdf.save(fileName);
};
