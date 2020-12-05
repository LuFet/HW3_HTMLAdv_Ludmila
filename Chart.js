function createBarChart(data, width, height, color) {

    // создаем контейнер для диаграммы 
    // createElementNS первый параметр определяет пространство имен для элемента <svg xmlns="http://www.w3.org/2000/svg">
    let chart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chart.style.width = width;
    chart.style.height = height;

    // находим максимальное значение в массиве данных
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    let scale = height / max;
    let barWidth = Math.floor(width / data.length);

    // создаем отдельный элемент диаграммы
    for (let i = 0; i < data.length; i++) {
        let bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        let barHeight = data[i] * scale;
        bar.setAttribute("height", barHeight + "px");
        bar.setAttribute("width", barWidth - 4 + "px");

        bar.setAttribute("y", height - barHeight);
        bar.setAttribute("x", barWidth * i );

        bar.style.fill = color;

        bar.addEventListener("mouseover", onOver);
        bar.addEventListener("mouseout", onOut);

        chart.append(bar);
    }

    function onOver() { this.style.fill = "red"; }
    function onOut() { this.style.fill = color; }

    return chart;
}