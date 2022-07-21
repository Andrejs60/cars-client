const createChartData = (data) => {
  let datasetData = [];
  for (const property in data) {
    const dataItem = { x: property, y: data[property] };
    datasetData.push(dataItem);
  }
  return datasetData;
};

export default createChartData;
