function concatArr()
    {
        let a = [];
        let b = [];
        let c;

        for (i = 0; i < 10; i++)
            {
                a[i] = +prompt ("Nhập phần tử thứ " + i + " của mảng a");
            };
        for (i = 0; i < 10; i++)
            {
                b[i] = +prompt ("Nhập phần tử thứ " + i + " của mảng b");
            };
        
        c = b.concat(a);
        document.getElementById('result9').innerText = c;
    };

function arr2Dim()
    {
        let str ="";
        let arr = [];
        let len = +prompt("Nhập độ lớn của mảng");
        for (i = 0; i < len; i++)
            {
                str += "row" + i + "<br>";
                arr[i] = [];
                let leni = +prompt("Nhập độ lớn mảng phần tử thứ " + i);
                for (j = 0; j < leni; j++)
                    {      
                        arr[i][j] = +prompt("Nhập phần tử thứ " + i + ", " + j);
                        str += arr[i][j] + "<br>";
                    };
            };
        document.getElementById('result1').innerHTML = str;
    };

function printReverse()
    {
        let n = +prompt ("Nhập độ dài của mảng muốn tạo:");
        let firstArr = [];
        let lastArr = [];

        for (i = 0; i <= n - 1; i++)
            {
                firstArr[i] = prompt ("Nhập vào phần tử thứ " + i);
            }

        lastArr = firstArr.reverse();
        document.getElementById('result2').innerText = lastArr.join("");
    };

function countNums()
    {
        let n = +prompt ("Nhập độ dài của mảng muốn tạo:");
        let arrStr = [];
        let count = 0;
        let t;

        for (i = 0; i <= n - 1; i++)
            {
                arrStr[i] = prompt ("Nhập vào phần tử thứ " + i);
            }

        for (i = 0; i <= n - 1; i++)
            {
                t = parseFloat (arrStr[i]);
                if (t || t === 0) count += 1;
            }
        document.getElementById('result3').innerText = "Số phần tử là số trong mảng là: " + count;
    };

function countWords()
    {
        let str = document.getElementById('sentence').value;
        document.getElementById('result4').innerText = "Số từ có trong chuỗi là: " + str.split(" ").length;
    };

function testArr()
    {
        let str1 = prompt ("Nhập vào chuỗi thứ nhất");
        let str2 = prompt ("Nhập vào chuỗi thứ hai");

        if (str1 === str2) document.getElementById('result5').innerText = "Hai chuỗi giống nhau"
        else document.getElementById('result5').innerText = "Hai chuỗi không giống nhau"
    };

function repDash()
    {
        let firstArr = [];
        let lastArr = [];
        let n = +prompt("Nhập độ lớn của chuỗi");
        for (i = 0; i < n; i++)
            {
                firstArr[i] = prompt("Nhập phần tử thứ " + i);
            }

        for (i = 0; i < n; i++)
            {
                if (firstArr[i] === "-") lastArr[i] = "_";
                else lastArr[i] = firstArr[i];
            }
        document.getElementById('result6_1').innerText = firstArr.join(", ");
        document.getElementById('result6_2').innerText = lastArr.join(", ");
    }

