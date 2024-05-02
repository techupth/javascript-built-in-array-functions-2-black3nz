const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  carBrand = carBrand.toLowerCase();
  const index = carCollection.indexOf(carBrand);
  if (index !== -1) {
    return `${carBrand} already exists in position ${index + 1} of the car collection.`;
  } else {
    carCollection.push(carBrand);
    return `New car collection is: ${carCollection.join(', ')}.`;
}
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi"));

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota"));