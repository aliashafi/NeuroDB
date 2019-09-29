import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import '../../css/deethree.scss';

function DeeThree(props) {

    const data = [
        {
          "country": "China",
          "population": 1415046
        },
        {
          "country": "India",
          "population": 1354052
        },
        {
          "country": "United States",
          "population": 326767
        },
        {
          "country": "Indonesia",
          "population": 266795
        },
        {
          "country": "Brazil",
          "population": 210868
        },
        {
          "country": "Pakistan",
          "population": 200814
        },
        {
          "country": "Nigeria",
          "population": 195875
        },
        {
          "country": "Bangladesh",
          "population": 166368
        },
        {
          "country": "Russia",
          "population": 143965
        },
        {
          "country": "Mexico",
          "population": 130759
        }
      ]
    useEffect(() => {
        renderPopGraph();
        renderPercentBar();
        renderPie();
        renderRadar();
    }, []);

    function renderPopGraph(){
        const svg = d3.select('.population-graph');
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        
        console.log(d3);
        const render = data => {
            //value accessors
            const xValue = d => d.population;
            const yValue = d => d.country;
            const margin = { top: 20, right: 90, bottom: 40, left: 20 };
            const innerWidth = width - margin.left - margin.right;
            const innerHeight = height - margin.top - margin.bottom;

            //horizontal scale --- each scale need domain and range defined
            const xScale = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.population)])
                .range([0, innerWidth]);
                    
            //vertical scale --- band scale for ordinal elements
            //bandwidth: computed width of a single bar
            const yScale = d3.scaleBand()
                .domain(data.map(d => d.country))
                .range([0, innerHeight])
                .padding(0.1);

            //d3.format 

            
            

            //render bar for each data set
            const g = svg.append('g') //create a grouping and move it to create margin space
                .attr('transform', `translate(${margin.right}, ${margin.top})`);
            
            //create and append axis
            const xAxisTickFormat = number => d3.format('.3s')(number)
                .replace('G', 'B'); //customize to rplace G with B
            const xAxis = d3.axisBottom(xScale)
                .tickFormat(xAxisTickFormat)
                .tickSize(-innerHeight);
            const xAxisGroup = g.append('g').call(xAxis)
                .attr('transform', `translate(0, ${innerHeight})`)
                .attr('fill', 'black');
            xAxisGroup.select('.domain').remove();
            xAxisGroup.append('text')
                .attr('class', 'label')
                .attr('y', 30)
                .attr('x', innerWidth/2)
                .text('x-axis label goes here');
           
            const yAxisGroup = g.append('g')
                .call(d3.axisLeft(yScale))
                .attr('fill', 'black')
                .attr('class', 'left-axis')
                .selectAll('.domain, .tick line') 
                .remove();  // remove the y-axis domain line and the ticks

             yAxisGroup.append('text')
                .attr('class', 'label')
                .attr('y', innerHeight/2)
                .attr('x', -30)
                .text('y-axis label goes here');

            // all bars are now in the above grouping    
            g.selectAll('rect').data(data)
                .enter().append('rect')
                    .attr('y', d => yScale(yValue(d)))
                    .attr('width', d => xScale(xValue(d)))
                    .attr('height', yScale.bandwidth());

            //add title and label
            g.append('text')
                .attr('class', 'title')
                .attr('transform', 'translate(0,0)')
                .text('Top 10 most populous countries');
        }

        data.forEach(d => {
            d.population = +d.population * 1000;
        });
        render(data);
    }

    const data2 = [{category: 'gender', leftVal: 30, rightVal: 70}, 
                    {category: 'dominant hand', leftVal: 15, rightVal: 85},
                    {category: 'language dominance', leftVal: 45, rightVal: 55}];


    function renderPercentBar() {
        const svg = d3.select('.percent-bar');
        const width = +svg.attr('width');
        const height = +svg.attr('height');


        const render = data => {
            //value accessors
            const xValue1 = d => d.leftVal;
            const xValue2 = d => d.rightVal;
            const yValue = d => d.category;
            const margin = { top: 40, right: 20, bottom: 20, left: 20 };
            const innerWidth = width - margin.left - margin.right;
            const innerHeight = height - margin.top - margin.bottom;

            //horizontal scale --- each scale need domain and range defined
            const xScale = d3.scaleLinear()
                .domain([0, 100])
                .range([0, innerWidth]);
                    
            //vertical scale --- band scale for ordinal elements
            //bandwidth: computed width of a single bar
            const yScale = d3.scaleBand()
                .domain(data.map(d => d.category))
                .range([0, innerHeight])
                .padding(0.3);
                console.log(yScale.bandwidth())

            const categoryG = svg.selectAll('.category-group')
                .data(data)
                .enter()
                .append('g')
                .attr('class', 'category-group')
                .attr('transform', d => `translate(${margin.left}, ${yScale(d.category) + margin.top})`);

            const leftRect = categoryG.append('rect')
                .attr('width', d => xScale(xValue1(d)))
                .attr('height', d => yScale.bandwidth())
                .attr('class', 'left-bar');
            categoryG.append('text')
                .text(d => `${d.leftVal}%`)
                .attr('class', 'percent-label');

            const rightRect = categoryG.append('rect')
                .attr('width', d => xScale(xValue2(d)))
                .attr('height', d => yScale.bandwidth())
                .attr('class', 'right-bar')
                .attr('transform', d => 'translate(' + xScale(xValue1(d)) + ', 0)');
            categoryG.append('text')
                .text(d => `${d.rightVal}%`)
                .attr('transform', `translate(${innerWidth-25}, 0)`)
                .attr('class', 'percent-label');
            categoryG.append('text')
                .text(d => `${d.category}`)
                .attr('text-anchor', 'middle')
                .attr('transform', d =>`translate(${innerWidth/2}, ${yScale.bandwidth()+20} )`);
            // svg.append('g') //create a grouping and move it to create margin space
            //     .attr('transform', `translate(${margin.right}, ${margin.top})`);
            

            
        }

        render(data2);
    }

    const nativeLanguage = [{language: 'English', percent: 70}, {language: 'Mandarin', percent: 5}, {language: 'Spanish', percent: 25}];
    function renderPie() {
        const svg = d3.select('.pie-chart');
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        const innerW = width - margin.right - margin.left;
        const innerH = height - margin.top - margin.bottom;
        const radius = innerW/2;
        const innerRadius = 80;
        const padAngle = 0.03;
        const cornerRadius = 3;

        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
        
        const render = (data) => {
            //arc accessor
            const g = svg.append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`);
                // .append('text')
                //     .text('Native Language')
            g.append('text')
                .text('Native Language')
                .attr('transform', `translate(${radius+margin.left},${radius+margin.top})`)
                .attr('text-anchor', 'middle')
                .attr('class', 'title');

            const innerG = g.append('g')
                .attr('transform', `translate(${width/2}, ${height/2})`);
                
            const pieGenerator = d3.pie()
                .value(d => d.percent);
            const arcData = pieGenerator(data);

            const drawArc = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(radius)
                .padAngle(padAngle)
                .cornerRadius(cornerRadius);
            
            // data binding
            const arcs = innerG.selectAll('path')
                .data(arcData)
                .join('path')
                    .attr('class', 'arcs')
                    .attr('d', drawArc)

            const arcLabel = () => {
                const radius = 200;
                return d3.arc().innerRadius(radius/3).outerRadius(radius);
              }
            const labelG = innerG.append('g')
            .selectAll('text')
            .attr('text-anchor', 'middle')
            .data(arcData)
            .join('text')
                .attr('transform', d => `translate(${arcLabel().centroid(d)})`)
                    .text(d => `${d.data.language}`)
                    .attr("x", -20)
                    .attr("y", 10)
                    .call(text => text.append("tspan")
                        .attr("y", -5)
                        .attr("x", -10)
                        .attr("font-weight", "bold")
                        .text(d => `${d.data.percent}%`));
        }
        render(nativeLanguage);
    }
    

///////////////////////////////////////////////////////////

    const data4 = [
        [ //CUSTOM SELECTED PATIENT POOL OR FOR A PROJECT
            {axis:"Region A",value:12.3/100},
            {axis:"Region B",value:20.5/100},
            {axis:"Region C",value:49.1/100},
            {axis:"Region D",value:22.5/100},
            {axis:"Region E",value:30.1/100},
            {axis:"Region F",value:10.0/100},
            {axis:"Region G",value:19.3/100},
            {axis:"Region H",value:34.2/100},
            {axis:"Region I",value:71.9/100},
            {axis:"Region J",value:73/100},
            {axis:"Region K",value:25/100},
            {axis:"Region L",value:20/100}
            ],
            [ //CUSTOM SELECTED PATIENT POOL OR FOR A PROJECT
                {axis:"Region A",value:39.0/100},
                {axis:"Region B",value:12.0/100},
                {axis:"Region C",value:59.0/100},
                {axis:"Region D",value:60.2/100},
                {axis:"Region E",value:87.0/100},
                {axis:"Region F",value:44.5/100},
                {axis:"Region G",value:20.4/100},
                {axis:"Region H",value:17.4/100},
                {axis:"Region I",value:87.3/100},
                {axis:"Region J",value:55.2/100},
                {axis:"Region K",value:69.0/100},
                {axis:"Region L",value:34.0/100}
                ]
        ];


    function renderRadar() {

        render(data4);
        
        function render(data) {
            let svg = d3.select('.radarChart');
            const config = {
                w: +svg.attr('width'),				//Width of the circle
                h: +svg.attr('height'),				//Height of the circle
                margin: {top: 30, right: 20, bottom: 30, left: 20}, //The margins of the SVG
                levels: 5,						//How many levels or inner circles should there be drawn
                maxValue: 1, 				//What is the value that the biggest circle will represent
                labelFactor: 1.2, 	//How much farther than the radius of the outer circle should the labels be placed
                wrapWidth: 60, 			//The number of pixels after which a label needs to be given a new line
                blobOpacity: 0.35, 	//The opacity of the area of the blob
                dotRadius: 2, 				//The size of the colored circles of each blog
                opacityCircles: 0.5, 	//The opacity of the circles of each blob
                strokeWidth: 2, 			//The width of the stroke around each blob
                roundStrokes: true,	//If true the area and stroke will follow a round path (cardinal-closed)
                color: d3.scaleOrdinal(d3.schemeSet2) 		//d3.scaleOrdinal().range(schemeCategory10)	//Color function
            };
        
            
            const allAxis = (data[0].map(d => d.axis));	//Names of each axis
            const radius = (config.w)/3; 	
            const format = d3.format(".0%");			 	
            const axisAngle = Math.PI * 2 / allAxis.length;		
            
            //Scale for the radius
            const rScale = d3.scaleLinear()
                .range([0, radius])
                .domain([0, config.maxValue]);
                

            //Remove whatever chart with the same id/class was present before
            d3.select('.radarChart').select("svg").remove();
        
            //Initiate the radar chart SVG
            svg = d3.select('.radarChart').append("svg")
                .attr("width",  config.w + config.margin.left + config.margin.right)
                .attr("height", config.h + config.margin.top + config.margin.bottom)
                .attr("class", "radarChartSvg");
            //Append a g element		
            const g = svg.append("g")
                .attr("transform", `translate(${config.w/2 + config.margin.left}, ${config.h/2 + config.margin.top})`)
                .attr('class', 'chartContainerG');
            
            //Wrapper for the grid & axes
            const gridG = g.append("g")
                .attr("class", "gridWrapper");
        
            //Draw the background circles
            gridG.selectAll(".levels")
                .data(d3.range(1,(config.levels+1)).reverse())
                .join('circle')
                .attr("class", "gridRings")
                .attr("r", d => radius/config.levels*d)
                .style("fill", "#ffffff")
                .style("stroke", "#cccccc")
                .style("fill-opacity", config.opacityCircles)


            //Text indicating at what % each level is
            gridG.selectAll(".gridLabel")
                .data(d3.range(1,(config.levels+1)).reverse())
                .enter().append("text")
                .attr("class", "gridLabel")
                .attr("x", 4)
                .attr("y", d => (-d/config.levels) * radius)
                .text(d => format(config.maxValue * d/config.levels));

            //Create the straight lines radiating outward from the center
            const axis = gridG.selectAll(".axis")
                .data(allAxis)
                .join("g")
                .attr("class", "axis");
            //Append the lines
            axis.append("line")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", (d, i) => rScale(config.maxValue*1.05) * Math.cos(axisAngle*i - Math.PI/2))
                .attr("y2", (d, i) => rScale(config.maxValue*1.05) * Math.sin(axisAngle*i - Math.PI/2))
                .attr("class", "axisLine");
            

            //Append the labels at each axis
            axis.append("text")
                .attr("class", "axisLabel")
                .attr("dy", "0.35em")
                .attr("x", (d, i) => rScale(config.maxValue * config.labelFactor) * Math.cos(axisAngle*i - Math.PI/2))
                .attr("y", (d, i) => rScale(config.maxValue * config.labelFactor) * Math.sin(axisAngle*i - Math.PI/2))
                .text(d => d)
        

            //The radial line function
            const radarLine = d3.radialLine()
                .radius(d => rScale(d.value))
                .angle((d, i) => i*axisAngle)
                .curve(d3.curveCardinalClosed);
                
            
            //Create a wrapper for the blobs	
            const blobWrapper = g.selectAll(".dataBlobWrapper")
                .data(data)
                .join("g")
                .attr("class", "dataBlobWrapper");
                
            const onBlobHover = (i) => {
                d3.selectAll(".blobArea")
                    .transition().duration(200)
                    .style("fill-opacity", 0.1); 
                    //Bring back the hovered over blob
                d3.select(`.blob-${i}`)
                    .transition().duration(200)
                    .style("fill-opacity", 0.7);
            }
            const onHoverExit = () => {
                d3.selectAll(".blobArea")
                    .transition().duration(200)
                    .style("fill-opacity", config.blobOpacity);
            }
            //Append the backgrounds	
            blobWrapper
                .append("path")
                .attr("class", (d, i) => `blobArea blob-${i}`)
                .attr("d", d => radarLine(d))
                .style("fill", (d, i) => config.color(i))
                .style("fill-opacity", config.blobOpacity)
                .on('mouseover', (d, i) => onBlobHover(i))
                .on('mouseout', onHoverExit);

            
            //Create the outlines	
            blobWrapper.append("path")
                .attr("class", "radarStroke")
                .attr("d", d => radarLine(d))
                .style("stroke-width", config.strokeWidth)
                .style("stroke", (d, i) => config.color(i))
                .style("fill", "none")

        
            //Append the circles
            blobWrapper.selectAll(".radarCircle")
                .data(d => d)
                .join("circle")
                .attr("class", "radarCircle")
                .attr("r", config.dotRadius)
                .attr("cx", (d, i) => rScale(d.value) * Math.cos(axisAngle*i - Math.PI/2))
                .attr("cy", (d, i) => rScale(d.value) * Math.sin(axisAngle*i - Math.PI/2))
                .style("fill", (d,i,j) => config.color(j));
            
        }
    }

    return (
        <div>
            {/* <div className='graph-buffer'> */}
                <svg className='population-graph' width='800' height='400'></svg>

                <svg className='percent-bar' width='400' height='400'></svg>

                <svg className='pie-chart' width='400' height='400'></svg>

                <svg className='radarChart' width='500' height='500'></svg>

            {/* </div> */}
        </div>
    );
}

export default DeeThree;