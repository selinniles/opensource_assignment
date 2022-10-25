function sum(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) s += numbers[i];
    return s;
}
function avg(numbers) {
    return sum(numbers) / numbers.length;
}
function max(numbers) {
    let m = numbers[0];
    for (let i = 1; i < numbers.length; i++) if (m < numbers[i]) m = numbers[i];
    return m;
}
function med(numbers) {
    var len = numbers.length;
    numbers.sort(function(num_1,num_2){return num_1-num_2});
    if (len % 2 === 1) {
        var middle = Math.floor(len / 2);
        return numbers[middle];
    }
    else{
        var middle = len / 2;
        var after = numbers[middle];
        var before = numbers[middle - 1];
        var s = (before + after) / 2;
        return s;
    }
}
function iqr(numbers){
    var len = numbers.length;
    numbers.sort(function(num_1,num_2){return num_1-num_2});
    if (len % 2 === 1) {
        var middle_index = Math.floor(len / 2);
        var first_half = numbers.slice(0,middle_index);
        var second_half = numbers.slice(middle_index+1,len);
    }
    else{
        var middle_index = len / 2;
        var first_half = numbers.slice(0,middle_index);
        var second_half = numbers.slice(middle_index,len);
    }
    var q1 = first_half[Math.floor(first_half.length / 2)];
    var q3 = second_half[Math.floor(second_half.length / 2)]
    return Math.abs(q1-q3);
}
function outlier(numbers){
    var len = numbers.length;
    numbers.sort(function(num_1,num_2){return num_1-num_2});
    if (len % 2 === 1) {
        var middle_index = Math.floor(len / 2);
        var first_half = numbers.slice(0,middle_index);
        var second_half = numbers.slice(middle_index+1,len);
    }
    else{
        var middle_index = len / 2;
        var first_half = numbers.slice(0,middle_index);
        var second_half = numbers.slice(middle_index,len);
    }
    var q1 = first_half[Math.floor(first_half.length / 2)];
    var q3 = second_half[Math.floor(second_half.length / 2)]
    var interquartile = Math.abs(q1-q3);
    var all_outliers = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] < (q1 - (1.5 * interquartile))){
            all_outliers.push(numbers[i]);
        }
        else if(numbers[i] > (q3 + (1.5 * interquartile))){
            all_outliers.push(numbers[i]);
        }
    }
    return all_outliers;
}

exports.sum = sum;
exports.avg = avg;
exports.max = max;
exports.med = med;
exports.iqr = iqr;
exports.outlier = outlier;