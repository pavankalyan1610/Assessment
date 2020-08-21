let inputData = {
    "dimensions": [{
        "id": "dimension_re",
        "values": ["East", "East", "West", "West", "South"]
    }, {
        "id": "dimension_cnt",
        "values": ["London", "Italy", "Germany", "Germany", "Russia"]
    }, {
        "id": "measure_sales",
        "values": [100, 156, 432, 462, 25]
    }, {
        "id": "measure_qty",
        "values": [85, 34, 153, 434, 52]
    }, {
        "id": "measure_profit",
        "values": [123, 45, 421, 465, 451]
    }],
    "metadata": [{
        "id": "dimension_re",
        "label": "Region"
    }, {
        "id": "dimension_cnt",
        "label": "County"
    }, {
        "id": "measure_sales",
        "label": "Sales"
    }, {
        "id": "measure_qty",
        "label": "Quantity"
    }, {
        "id": "measure_profit",
        "label": "Profit"
    }]
}
let expectedOutput = [], keys = [];
inputData.metadata.forEach((data) => {
    keys.push(data.label);
});
for (let i = 0; i < inputData.dimensions[0].values.length; i++) {
    let obj = {};
    for (let j = 0; j < inputData.dimensions.length; j++) {
        obj[keys[j]] = inputData.dimensions[j].values[i];
    }
    expectedOutput.push(obj);
}
console.log(expectedOutput);
