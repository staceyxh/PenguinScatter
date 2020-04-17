

var getHWmean = function(student){
    return d3.mean(student.homework.map(function(homework){return homework.grade}))
}

var getFianl = function(student){
    return student.final[0].grade
}

var getQuizMean = function(student){
    return d3.mean(student.quizes.map(function(quize){return quize.grade}))
}

var gettestMean = function(student){
    return d3.mean(student.test.map(function(test){return test.grade}))
}


var setTitle = function(msg)
{
    d3.select("#spread h2")
    .text(msg);
}

var displaySpreadFinal_HW = function(students)
{
    var width = 550;
    var height= 300;
    
    //set height and width of svg
    var svg = d3.select("#spread svg")
            .attr("width",width)
            .attr("height",height)
            .attr("id","graph")
    
        
    //create Scales for each dimension of data
    
    var xScale = d3.scaleLinear()
                .domain([d3.min(students,getFianl),
                          d3.max(students,getFianl)])
                .range([0,width])
    
    var yScale = d3.scaleLinear()
                .domain([
                          d3.min(students,getHWmean),
                          d3.max(students,getHWmean)
                        ])
                .range([height,0]);
    var div = d3.select("body").append("div")
    .attr("class", "tooltip")        
    .style("opacity", 0);  
    
                        
    //draw the dots     
    svg.selectAll("circle")
        .data(students)
        .enter()
        .append("circle")
        .attr("cx",function(student,index)
        {
            return xScale(getFianl(student));    
        })
        .attr("cy",function(student)
        {
            return yScale(getHWmean(student));  
        })
        .attr("r",3)
        .on("mouseover", function(student) {
    //Get this bar's x/y values, then augment for the tooltip
        var xPosition =d3.event.pageX;
        var yPosition = d3.event.pageY;
    //Update the tooltip position and value
        d3.select("#tooltip") 
        .style("left", xPosition + "px") 
        .style("top", yPosition + "px") 
        .select("#image")
        .attr("src","imgs/"+ student.picture);
    //Show the tooltip
        d3.select("#tooltip").classed("hidden", false);
        })
        .on("mouseout", function() {
        //Hide the tooltip
        d3.select("#tooltip").classed("hidden", true); })

    
    

    
    svg.append("line")
        .attr("x1",xScale(0))
        .attr("x2",xScale(width))
        .attr("y1",yScale(0))
        .attr("y2",yScale(0))
        .attr("stroke","red")
    
    
}



var displaySpreadHW_Quiz = function(students)
{
    var width = 550;
    var height= 300;
    
    //set height and width of svg
    var svg = d3.select("#spread svg")
            .attr("width",width)
            .attr("height",height)
            .attr("id","graph")
    
        
    //create Scales for each dimension of data
    
    var xScale = d3.scaleLinear()
                .domain([d3.min(students,getHWmean),
                          d3.max(students,getHWmean)])
                .range([0,width])
    
    var yScale = d3.scaleLinear()
                .domain([
                          d3.min(students,getQuizMean),
                          d3.max(students,getQuizMean)
                        ])
                .range([height,0]);
    
                        
    //draw the dots     
    svg.selectAll("circle")
        .data(students)
        .enter()
        .append("circle")
        .attr("cx",function(student)
        {
            return xScale(getHWmean(student));    
        })
        .attr("cy",function(student)
        {
            return yScale(getQuizMean(student));  
        })
        .attr("r",3)

    
    svg.append("line")
        .attr("x1",xScale(0))
        .attr("x2",xScale(width))
        .attr("y1",yScale(0))
        .attr("y2",yScale(0))
        .attr("stroke","red")
    
    
}

var displaySpreadTest_Final = function(students)
{
    var width = 550;
    var height= 300;
    
    //set height and width of svg
    var svg = d3.select("#spread svg")
            .attr("width",width)
            .attr("height",height)
            .attr("id","graph")
    
        
    //create Scales for each dimension of data
    
    var xScale = d3.scaleLinear()
                .domain([d3.min(students,gettestMean),
                          d3.max(students,gettestMean)])
                .range([0,width])
    
    var yScale = d3.scaleLinear()
                .domain([
                          d3.min(students,getFianl),
                          d3.max(students,getFianl)
                        ])
                .range([height,0]);
    
                        
    //draw the dots     
    svg.selectAll("circle")
        .data(students)
        .enter()
        .append("circle")
        .attr("cx",function(student)
        {
            return xScale(gettestMean(student));    
        })
        .attr("cy",function(student)
        {
            return yScale(getFianl(student));  
        })
        .attr("r",3)

    
    svg.append("line")
        .attr("x1",xScale(0))
        .attr("x2",xScale(width))
        .attr("y1",yScale(0))
        .attr("y2",yScale(0))
        .attr("stroke","red")
    
    
}

var displaySpreadTest_Quiz = function(students)
{
    var width = 550;
    var height= 300;
    
    //set height and width of svg
    var svg = d3.select("#spread svg")
            .attr("width",width)
            .attr("height",height)
            .attr("id","graph")
    
        
    //create Scales for each dimension of data
    
    var xScale = d3.scaleLinear()
                .domain([d3.min(students,gettestMean),
                          d3.max(students,gettestMean)])
                .range([0,width])
    
    var yScale = d3.scaleLinear()
                .domain([
                          d3.min(students,getQuizMean),
                          d3.max(students,getQuizMean)
                        ])
                .range([height,0]);
    
                        
    //draw the dots     
    svg.selectAll("circle")
        .data(students)
        .enter()
        .append("circle")
        .attr("cx",function(student)
        {
            return xScale(gettestMean(student));    
        })
        .attr("cy",function(student)
        {
            return yScale(getQuizMean(student));  
        })
        .attr("r",3)

    
    svg.append("line")
        .attr("x1",xScale(0))
        .attr("x2",xScale(width))
        .attr("y1",yScale(0))
        .attr("y2",yScale(0))
        .attr("stroke","red")
    
    
}

var clearScatter = function()
{
    d3.selectAll("#spread svg circle")
        .remove();
}

var initButtons = function(students)
{
    
    d3.select("#clear")
        .on("click",function()
        {
            clearScatter()
            displaySpreadFinal_HW(students)
            setTitle("Scatter on Grade");
        });
    
    d3.select("#Final_HW")
        .on("click",function()
        {
            clearScatter()
            displaySpreadFinal_HW(students)
            setTitle("Fianl Grade VS Homework Mean Grade");
        });
    
    d3.select("#HW_Quiz")
        .on("click",function()
        {
            clearScatter()
            displaySpreadHW_Quiz(students)
            setTitle("Homework Mean Grade VS Quiz Mean Grade");
        });
    
    d3.select("#Test_Final")
        .on("click",function()
        {
            clearScatter()
            displaySpreadTest_Final(students)
            setTitle("Test Mean Grade VS Final Grade");
        });
    
    d3.select("#Test_Quiz")
        .on("click",function()
        {
            clearScatter()
            displaySpreadTest_Quiz(students)
            setTitle("Test Mean Grade VS Quiz Mean Grade");
        });
    
}

var studentPromise = d3.json("classData.json");

studentPromise.then(
function(students){
console.log("student data",students);
displaySpreadFinal_HW(students)
initButtons(students)},
function(err){console.log("failed:",err)});
