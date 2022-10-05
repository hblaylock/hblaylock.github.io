function init()
{
    var data = [
        {
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16]
        }
    ];
    Plotly.newPlot("plot", data);
}

function update()
{
    var dropdown = d3.select("#selDataset");

    var value = dropdown.property("value");

    var x = [];
    var y = [];

    if(value === 'dataset1')
    {
        x = [1, 2, 3, 4, 5];
        y = [1, 2, 4, 8, 16];
    }
    else if(value === 'dataset2')
    {
        x = [1, 2, 3, 4, 5];
        y = [1, 10, 100, 1000, 10000];
    }

    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
}

d3.selectAll("#selDataset").on("change", update);

init();