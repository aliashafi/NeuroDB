import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import '../../css/deethree.scss';

function DemographicsPercentBarGraph(props) {
    const dominantHandArr = props.patients.map(patient => patient.demographics.dominantHand);
    const genderArr = props.patients.map(patient => patient.demographics.gender);
    const languageDominanceArr = props.patients.map(patient => patient.demographics.languageDominance);

    const total = props.patients.length;
    const leftHandCount = dominantHandArr.filter(el => el === 'L').length;
    const rightHandCount = dominantHandArr.filter(el => el === 'R').length;
    const maleCount = genderArr.filter(el => el === 'M').length;
    const femaleCount = genderArr.filter(el => el === 'F').length;
    const leftLangDom = languageDominanceArr.filter(el => el === 'L').length;
    const rightLangDom = languageDominanceArr.filter(el => el === 'R').length;

    const data = [
        {category: 'gender', leftVal: (maleCount/total), rightVal: (femaleCount/total)}, 
        {category: 'dominant hand', leftVal: (leftHandCount/total), rightVal: (rightHandCount/total)},
        {category: 'language dominance', leftVal: (leftLangDom/total), rightVal: (rightLangDom/total)}];
    

    useEffect(() => {
        renderPercentBar();
    }, []);


    function renderPercentBar() {
        const svg = d3.select('.percent-bar');
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        const format = d3.format(".0%");
        
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
                .domain([0, 1])
                .range([0, innerWidth]);
                    
            //vertical scale --- band scale for ordinal elements
            //bandwidth: computed width of a single bar
            const yScale = d3.scaleBand()
                .domain(data.map(d => d.category))
                .range([0, innerHeight])
                .padding(0.4);
                console.log(yScale.bandwidth())

            const categoryG = svg.selectAll('.category-group')
                .data(data)
                .enter()
                .append('g')
                .attr('class', 'category-group')
                .attr('transform', d => `translate(${margin.left}, ${yScale(d.category) + margin.top})`);
            svg.append('text')
                .attr('class', 'title')
                .text('General Demographics')
                .attr('transform', `translate(${width/2}, 40)`);
            const leftRect = categoryG.append('rect')
                .attr('width', d => xScale(xValue1(d)))
                .attr('height', d => yScale.bandwidth())
                .attr('class', 'left-bar');
            categoryG.append('text')
                .text(d => format(d.leftVal))
                .attr('class', 'bar-percent-label')
                .attr('transform', `translate(5, ${yScale.bandwidth()/2})`);

            const rightRect = categoryG.append('rect')
                .attr('width', d => xScale(xValue2(d)))
                .attr('height', d => yScale.bandwidth())
                .attr('class', 'right-bar')
                .attr('transform', d => 'translate(' + xScale(xValue1(d)) + ', 0)');

            categoryG.append('text')
                .text(d => format(d.rightVal))
                .attr('transform', `translate(${innerWidth-70}, ${yScale.bandwidth()/2})`)
                .attr('class', 'bar-percent-label');
            
            categoryG.append('text')
                .text(d => `${d.category}`)
                .attr('class', 'percent-bar-name')
                .attr('transform', d =>`translate(${innerWidth/2}, ${yScale.bandwidth()+20} )`);
        }

        render(data);
    }


    return (
        <div>
            <svg className='percent-bar' width='400' height='400'></svg>
        </div>
    );
}

export default DemographicsPercentBarGraph;