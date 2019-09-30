import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import '../../css/deethree.scss';

function PieChart(props) {
    useEffect(() => {
        renderPie();
    }, []);

    const data = props.data;
    
    
    function renderPie() {
        const svg = d3.select(`.pie-chart-${props.classSelector}`);
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        const width = +svg.attr('width') - margin.right - margin.left;
        const height = +svg.attr('height') - margin.top - margin.bottom;
        const innerW = width - margin.right - margin.left;
        const innerH = height - margin.top - margin.bottom;
        const radius = innerW/2;
        const innerRadius = 80;
        const padAngle = 0.03;
        const cornerRadius = 3;
        const format = d3.format(".0%");
        const color = d3.scaleOrdinal(d3.schemePaired);
        
        const render = (data) => {
            //arc accessor
            const g = svg.append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`);

            g.append('text')
                .text(`${props.title}`)
                .attr('transform', `translate(${radius+margin.left},${radius+margin.top})`)
                .attr('text-anchor', 'middle')
                .attr('class', 'title');

            const innerG = g.append('g')
                .attr('transform', `translate(${width/2}, ${height/2})`);
                
            const pieGenerator = d3.pie()
                .value(d => d.value);
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
                    .style("fill", (d, i) => color(i));

            const arcLabel = () => {
                const radius = 200;
                return d3.arc().innerRadius(radius/4).outerRadius(radius);
              }
            innerG.append('g')
                .selectAll('text')
                .attr('text-anchor', 'middle')
                .data(arcData)
                .join('text')
                    .attr('transform', d => `translate(${arcLabel().centroid(d)})`)
                    .text(d => `${d.data.label}`)
                    .attr("x", -20)
                    .attr("y", 10)
                    .call(text => text.append("tspan")
                        .attr("y", -5)
                        .attr("x", -5)
                        .attr("font-weight", "bold")
                        .text(d => format(d.data.value)));
        }
        render(data);
    }


    return (
        <div>
            <svg className={`pie-chart-${props.classSelector}`} width='400' height='400'></svg>
        </div>
    );
}

export default PieChart;