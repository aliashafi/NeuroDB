import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import '../../css/deethree.scss';

function RadarChart(props) {

    const data = [
        [ //CUSTOM SELECTED PATIENT POOL OR FOR A PROJECT
            {axis:"Amygdala",value:12.3/100},
            {axis:"Hippo- campus",value:20.5/100},
            {axis:"Insula",value:49.1/100},
            {axis:"Temporal pole",value:22.5/100},
            {axis:"Temporal lobe",value:30.1/100},
            {axis:"Fusiform gyrus",value:10.0/100},
            {axis:"Precuneus",value:19.3/100},
            {axis:"Occipital lobe",value:34.2/100},
            {axis:"Lingual gyrus",value:71.9/100},
            {axis:"Perical- carine cortex",value:73/100},
            {axis:"Cuneus cortex",value:25/100},
            {axis:"Posterior",value:20/100}
            ],
            [ //CUSTOM SELECTED PATIENT POOL OR FOR A PROJECT
                {axis:"Amygdala",value:39.0/100},
                {axis:"Hippo- campus",value:12.0/100},
                {axis:"Insula",value:59.0/100},
                {axis:"Temporal pole",value:60.2/100},
                {axis:"Temporal lobe",value:87.0/100},
                {axis:"Fusiform gyrus",value:44.5/100},
                {axis:"Precuneus",value:20.4/100},
                {axis:"Occipital lobe",value:17.4/100},
                {axis:"Lingual gyrus",value:87.3/100},
                {axis:"Perical- carine cortex",value:55.2/100},
                {axis:"Cuneus cortex",value:69.0/100},
                {axis:"Posterior",value:34.0/100}
                ]
        ];

    useEffect(() => {
        renderRadar();
    }, []);


    function renderRadar() {

        render(data);
        
        function render(data) {
            let svg = d3.select('.radarChart');
            const config = {
                margin: {top: 30, right: 20, bottom: 30, left: 20}, 
                w: +svg.attr('width') - 40,				
                h: +svg.attr('height'),				
                levels: 5,						
                maxValue: 1, 				
                labelFactor: 1.2, 	
                wrapWidth: 60, 		
                blobOpacity: 0.35, 	
                dotRadius: 2, 				
                opacityCircles: 0.5, 	
                strokeWidth: 2, 			
                roundStrokes: true,	
                color: d3.scaleOrdinal(d3.schemeSet2) 		
            };
        
            // brain region axis
            const allAxis = (data[0].map(d => d.axis));
            const radius = (config.w)/3; 	
            const format = d3.format(".0%");			 	
            const axisAngle = Math.PI * 2 / allAxis.length;		
            
            // radial scale
            const rScale = d3.scaleLinear()
                .range([0, radius])
                .domain([0, config.maxValue]);
                

            //Initiate the radar chart SVG
            svg = d3.select('.radarChart').append("svg")
                .attr("width",  config.w + config.margin.left + config.margin.right)
                .attr("height", config.h + config.margin.top + config.margin.bottom)
                .attr("class", "radarChartSvg");
            
            svg.append('text').text('Percent Brain Region Coverage by Studies')
                .attr("transform", `translate(${config.w/2 + config.margin.left}, 60)`)
                .attr('class', 'title');

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
                .call(wrap, 60);
        

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
            

            //Taken from http://bl.ocks.org/mbostock/7555321
            //Wraps SVG text	
            function wrap(text, width) {
                text.each(function() {
                var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    lineHeight = 1.4, // ems
                    y = text.attr("y"),
                    x = text.attr("x"),
                    dy = parseFloat(text.attr("dy")),
                    tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
                    
                while (word = words.pop()) {
                    line.push(word);
                    tspan.text(line.join(" "));
                    if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
      }//wrap
        }
    }

    return (
        <div>
            <svg className='radarChart' width='500' height='500'></svg>
        </div>
    );
}

export default RadarChart;