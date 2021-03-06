var findNumberIn2DArray = function (matrix, target) {
    // 双指针,从右上开始如果大于当前值那么让i++,否则j--
    let rows = matrix.length;
    let cols = matrix[0].length - 1;
    let i = 0,
        j = cols;
    while (i < rows && j >= 0) {
        let num = matrix[i][j];
        if (num > target) {
            j--;
        } else if (num < target) {
            i++;
        } else {
            return num;
        }
    }
    return -1;
};

// console.log(findNumberIn2DArray([
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
//   ],7));

function isOverlap(rect1, rect2) {
    /*
        将rect1和rect2的x坐标投影到x轴上，
        将rect1和rect2的y坐标投影到y轴上
        1. 求出左上和右下的坐标点
        2. 题目中没有告诉x,y的坐标是中心还是左上，这里假设为左上顶点
    */
    let [r1_x1, r1_y1, r1_x2, r1_y2] = getPoints(rect1);
    let [r2_x1, r2_y1, r2_x2, r2_y2] = getPoints(rect2);
    console.log(r1_x1, r1_y1, r1_x2, r1_y2);
    console.log(r2_x1, r2_y1, r2_x2, r2_y2);
    let inter_x1 = Math.max(r1_x1, r2_x1);
    let inter_x2 = Math.min(r1_x2, r2_x2);
    let inter_y1 = Math.max(r1_y2, r2_y2);
    let inter_y2 = Math.min(r1_y1, r2_y1);
    console.log(inter_x1,inter_x2,inter_y1,inter_y2);
    if (inter_x2 < inter_x1 && inter_y2 > inter_y1) {
        // 有交叠，但是还应该判断y轴
        return true;
    }
    return false;
    function getPoints(rect) {
        let x1 = rect['x'];
        let y1 = rect['y'];
        let x2 = x1 + rect['width'];
        let y2 = y1 - rect['height'];
        return [x1, y1, x2, y2];
    }
}
console.log(isOverlap({x: 100, y: 100, width: 100, height: 100}, { x: 250, y: 250, width: 100, height: 100 }));