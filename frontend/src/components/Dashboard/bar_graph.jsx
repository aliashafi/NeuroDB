import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import '../../css/deethree.scss';

function BarGraph(props) {

    const data = props.data;

    useEffect(() => {
    renderBarGraph();

    }, []);

    function renderBarGraph(){
        const svg = d3.select('.bar-graph');
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        
        const render = data => {
            //value accessors
            const xValue = d => d.value;
            const yValue = d => d.label;
            const margin = { top: 80, right:150, bottom: 40, left: 80 };
            const innerWidth = width - margin.left - margin.right;
            const innerHeight = height - margin.top - margin.bottom;
            const color = d3.scaleOrdinal(d3.schemePaired);
            
            //horizontal scale --- each scale need domain and range defined
            const xScale = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.value)])
                .range([0, innerWidth]);
                    
            //vertical scale --- band scale for ordinal elements
            //bandwidth: computed width of a single bar
            const yScale = d3.scaleBand()
                .domain(data.map(d => d.label))
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
                .attr('class', 'bar-graph-xlabel')
                .attr('y', 30)
                .attr('x', innerWidth/2)
                .text('Number of patients');
           
            const yAxisGroup = g.append('g')
                .call(d3.axisLeft(yScale))
                .attr('fill', 'black')
                .attr('class', 'bar-graph-ylabel')
                .selectAll('.domain, .tick line') 
                .remove();  // remove the y-axis domain line and the ticks

            // all bars are now in the above grouping    
            g.selectAll('rect').data(data)
                .enter().append('rect')
                    .attr('y', d => yScale(yValue(d)))
                    .attr('width', d => xScale(xValue(d)))
                    .attr('height', yScale.bandwidth())
                    .style('fill', (d, i) => color(i));

            //add title and label
            g.append('text')
                .attr('class', 'title')
                .attr('transform', `translate(${(innerWidth-50)/2}, -40)`)
                .text('Number of Patients Per Study');
        }

        data.forEach(d => {
            d.population = +d.population * 1000;
        });
        render(data);
    }

    return (
        <div>
            <svg className='bar-graph' width='700' height='400'></svg>
        </div>
    );

}

export default BarGraph;