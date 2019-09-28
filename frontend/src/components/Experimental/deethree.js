import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';

function DeeThree(props) {
    useEffect(() => {
        renderSvg();
    }, []);

    function renderSvg(){
        const svg = d3.select('svg');
        const svgWidth = +svg.attr('width');
        const svgHeight = +svg.attr('height');
        
        const circle = svg.append('circle')
            .attr('r', svgHeight/2)
            .attr('cx', svgWidth/2)
            .attr('cy', svgHeight/2)
            .attr('fill', 'yellow')
            .attr('stroke', 'black');
        const eyeSpacing = 50;
        const leftEye = svg.append('circle')
            .attr('r', 30)
            .attr('cx', svgWidth/2 - eyeSpacing)
            .attr('cy', svgWidth/2 + eyeSpacing);
        
        const g = svg.append('g')
            .attr('transform', `translate(${svgWidth/2}, ${svgHeight/2})`);
        const mouth = g.append('path')
            .attr('d', d3.arc()({
                innerRadius: 80,
                outerRadius: 100,
                startAngle: Math.PI/2,
                endAngle: Math.PI * 3/2
            }));
    }

    return (
        <div>
            
            <svg width='400' height='400'></svg>
        </div>
    );
}

export default DeeThree;