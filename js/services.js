services = (function() {
    var arr = [[],[],[],[]];
    var uniqueRandoms = [];
    var numRandoms = 16;

    function init() {
        uniqueRandoms = [];
        var $container = $(".container");
        $container.empty();
        var values = [];

        for (i = 0; i < 15; i++) {
            var d = document.createElement('div');
            var n = makeUniqueRandom();
            values.push(n);

            $(d).addClass("myDiv")
            .html(n)
            .appendTo($container);

            if ((i+1) % 4 == 0) {
                $container.append("<br/>");
            };
        }

        values.push(0);
        arr = listToMatrix(values, 4);
    }

    function moveCell(n) {
        var x;
        var y;
        for (var i = 0; i < 4; i++) {
            if (arr[i].indexOf(n) != (-1)) {
                x = i;
                y = arr[i].indexOf(n);
            }
        };

        if (x !== 0 && arr[x-1][y] === 0) {
            changePos(x, y, x-1, y);
            return 'up';
        }
        if (y != 3 && arr[x][y+1] === 0) {
            changePos(x, y, x, y+1);
            return 'right';
        }
        if (x != 3 && arr[x+1][y] === 0) {
            changePos(x, y, x+1, y);
            return 'down';
        }
        if (y !== 0 && arr[x][y-1] === 0) {
            changePos(x, y, x, y-1);
            return 'left';
        } else 
            return 'none';
    }

    function changePos(a, b, c, d) {
        var temp = arr[a][b];
        arr[a][b] = arr[c][d];
        arr[c][d] = temp;
    }

    function makeUniqueRandom() {
        var rsh = 1;

        if (!uniqueRandoms.length) {
            while (rsh % 2) {
                uniqueRandoms = [];
                for (var i = 1; i < numRandoms; i++) {
                    uniqueRandoms.push(i);
                }
                uniqueRandoms.sort(new Function ('x, y', 'return Math.random () - Math.random ()'));
                for (var rsh = j = 0; j < 14; rsh += s, j++)
                    for (var s = 0, k = j + 1; k < 15; k++) 
                        if (uniqueRandoms[k] < uniqueRandoms[j]) {
                            s++;
                        }
            }
        }

        var val = uniqueRandoms[0];
        uniqueRandoms.splice(0, 1);
        return val;
    }

    function listToMatrix(list, elementsPerSubArray) {
        var matrix = [], i, k;

        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }
            matrix[k].push(list[i]);
        }
        return matrix;
    }

    function checkWin(str) {
        var good = 0;
        var matrix2arr = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                matrix2arr.push(arr[i][j]);
            };
        };

        for(var i = 1; i <= 15; i++) {
            if(matrix2arr[i-1] == i)
                good++;
        }
        if (good == 15 && str === undefined)
            alert('Congratulations!');
        else if (good != 15 && str == 1)
            alert('Nope!');
        else if (good == 15 && str == 1)
            alert('Yep!');            
    }

    return {
        init: init,
        moveCell: moveCell,
        checkWin: checkWin
    }
}());