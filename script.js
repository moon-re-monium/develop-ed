<!DOCTYPE html>
<html lang="jp">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>計算サイト</title>
</head>

<body>
    <div class="container mt-5">
        <h1 class="mt-4">傷あり価格計算</h1>
        <input type="number" id="inputNumber" class="form-control mb-3" placeholder="傷なし価格">
        <div>

            <div class="result text-center">
                <p class="ver">ver:1.3</p>
                <div class="chuuko">中古精算：<span id="workResult">0</span></div>
            </div>
        </div>


        <div class="row">
            <div class="col-md-4">
                <div class="result text-center">
                    <div class="circle green"></div>
                    <p><span id="greenResult">0</span></p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="result text-center">
                    <div class="circle yellow"></div>
                    <p><span id="yellowResult">0</span></p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="result text-center">
                    <div class="circle red"></div>
                    <p><span id="redResult">0</span></p>
                </div>
            </div>
        </div>

        <div class="result-keypad">
            <div class="row">
                <button class="key btn btn-light col-4" data-value="1">1</button>
                <button class="key btn btn-light col-4" data-value="2">2</button>
                <button class="key btn btn-light col-4" data-value="3">3</button>
                <button class="key btn btn-light col-4" data-value="4">4</button>
                <button class="key btn btn-light col-4" data-value="5">5</button>
                <button class="key btn btn-light col-4" data-value="6">6</button>
                <button class="key btn btn-light col-4" data-value="7">7</button>
                <button class="key btn btn-light col-4" data-value="8">8</button>
                <button class="key btn btn-light col-4" data-value="9">9</button>
                <button class="key btn btn-light col-4" data-value="0">0</button>
                <button class="key btn btn-primary col-4" data-value="C">C</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>
