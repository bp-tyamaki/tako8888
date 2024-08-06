const margin = {top: 20, right: 20, bottom: 30, left: 60};  // Adjust left margin here

const svg = d3.select("svg"),
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;




const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
const tooltip = d3.select("#tooltip");

// Then proceed with your code to draw the axes and the rest of the chart


// CSV data loading
d3.csv("./files/csv/filtered_pivot_20240804_173926.csv").then(function(data) {
    var parseTime = d3.timeParse("%Y-%m");
    data.forEach(d => d.year_month = parseTime(d.year_month));

    const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.year_month))
        .range([0, width]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d3.sum(Object.keys(d).filter(k => k !== 'year_month'), k => +d[k]))])
        .range([height, 0]);

    const customOrder = ['BS実況(無料)','番組ch(フジ)','ニュース速報','番組ch(朝日)','番組ch(TBS)','番組ch(NHK)','芸スポ速報+','ニュース速報+','ニュー速VIP','なんでも実況G'];

    const keys = data.columns.slice(1).sort((a, b) => customOrder.indexOf(a) - customOrder.indexOf(b));
    const stack = d3.stack().keys(keys);
    const series = stack(data);
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    // const stack = d3.stack().keys(data.columns.slice(1));
    // const series = stack(data);

    const area = d3.area()
        .x(d => x(d.data.year_month))
        .y0(d => y(d[0]))
        .y1(d => y(d[1]));

    g.selectAll(".area")
        .data(series)
        .enter().append("path")
        .attr("class", "area")
        .attr("d", area)
        .attr("fill", (d, i) => color(i))
        .on("mouseover", function(event, d) {
            tooltip.transition()
                .duration(100)
                .style("opacity", .9);
            tooltip.html(`board: ${d.key}`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        // tooltip.html(`ita_name: ${d.key}<br/>Responses: ${d3.sum(d, item => item[1] - item[0])}<br/>Year-Month: ${d3.timeFormat("%Y-%m")(d[0].data.year_month)}`)
        //         .style("left", (event.pageX) + "px")
        //         .style("top", (event.pageY - 28) + "px");
        // })

        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y));
});