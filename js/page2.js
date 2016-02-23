col = profiling.getColumn(globalVars.currentSrNo)

function loadGeneralBox() {
	profiling.generateNunuG("#svg_details_nunu", col.serialNumber, col.nulls, col.uniques, col.nonUniques)
	$("#nulls_freq").text(col.nulls.rows+" rows")
	$("#nulls_perc").text(col.nulls.percentage+"%")
	
	$("#uniques_freq").text(col.uniques.rows+" rows")
	$("#uniques_perc").text(col.uniques.percentage+"%")
	
	$("#non_uniques_freq").text(col.nonUniques.rows+" rows")
	$("#non_uniques_perc").text(col.nonUniques.percentage+"%")
	
	$("#box_general #total_rows").text(col.nulls.rows + col.uniques.rows + col.nonUniques.rows)
	
	
	if(!!col.rules && typeof col.rules == "object") {
		var rule_info = '<div id="general_rules" style="border-top: 1px solid #ccc; margin-top: 10px; min-height: 50px; padding-top: 10px;">\
						<table><tr><td><span class="icon icon-function"></span></td><td>Rules Used: <b>'+ col.rules.ruleName +'</b></td></tr><tr><td></td><td>Input Column: '+ col.rules.inputColumnList[0] +'</td></tr></table>\
					</div>';
		$("#box_general").append(rule_info)
	}
}

function loadDataTypeBox() {
	$("#documented_dt").text(col.documentedDatatype)
	
	var barHeight = 17;
	var paddingLeft = 50;
	var scaleGraph = d3.scale.linear()
			.domain([0, 3000])
			.range([0, $("#documented_dt").width()-10]);
	var scaleGraph2 = d3.scale.linear()
		.domain([0, 100])
		.range([0, 35]);
	var svgHeight = (col.inferredDatatypes.length < 3) ? 54 : col.inferredDatatypes.length * 18;
	maxValue = d3.max(col.inferredDatatypes, function(d) { return d.frequency })
			
	svg = d3.select("#inferred_dt")
			.attr("height", svgHeight + 'px')
			
	bar = svg.selectAll("g")
			.data(col.inferredDatatypes)
			.enter()
			.append("g")
			.attr("transform", function(d, i) { return "translate(0, "+ i * barHeight +")"; })
			
	bar.append("text")
			.attr("x", '50%')
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d.percentage+"%"; })

	bar.append("rect")
			//.attr("width", function(d) { return scaleGraph(d.percentage) })
			.attr("width", function(d) { return scaleGraph2(d.percentage) +'%'; })
			.attr("height", barHeight - 7)
			//.attr("x", function(d) { return scaleGraph(d.frequency)+ 20; })
			.attr("x", '62%').attr('y', 4)
			.style("fill", globalVars.grey
			/*
			function(d) {
				
				if(+d.frequency == maxValue)
					color = "#222";
				else
					color = globalVars.grey
					
				return color;
			}*/)
			

	bar.append("text")
			.attr("x", 0)
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d.datatype; })
			.style("font-weight", 'normal')
			/*.style("font-weight", function(d) {
				if(+d.frequency == maxValue)
					fw = "bold"
				else
					fw = "normal"
				return fw
			})*/
}

function loadDataDomainBox() {
	if(!col.data_domain) return;
	var barHeight = 17;
	var paddingLeft = 60;
	var scaleGraph2 = d3.scale.linear()
		.domain([0, 100])
		.range([0, 35]);
	
	var svgHeight = 30;
	svg = d3.select("#dd_data")
			.attr("height", svgHeight + 'px')
			
	bar = svg.selectAll("g")
			.data([col.data_domain])
			.enter()
			.append("g")
			.attr("transform", function(d, i) { return "translate(0, "+ i * barHeight +")"; })

			
	bar.append("text")
			.attr("x", '50%')
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d.percentage+"%"; })
			
	bar.append("text")
			.attr("x", 0)
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d.name; })
			.style("font-weight", 'normal')
			
	bar.append("rect")
			.attr("width", function(d) { return scaleGraph2(d.percentage) + '%' })
			.attr("height", barHeight - 7)
			.attr("x", '62%').attr('y', 4)
			.style("fill", globalVars.grey)

}

function loadBusinessTermBox() {
	bt = (col.business_term) ? col.business_term : "";
	$("#bt_data").text(bt)
}

function loadPatternsBox() {
	
	var barHeight = 17;
	var paddingLeft = 60;
	var maxValue = d3.max(col.patterns, function(d) { return d.frequency })
	var scaleGraph = d3.scale.linear()
			.domain([0, 10000])
			.range([0, $("#patterns_graph_box").width()-10]);
	var scaleGraph2 = d3.scale.linear()
		.domain([0, 100])
		.range([0, 35]);
	
	var svgHeight = (col.patterns.length < 3) ? 54 : col.patterns.length * 18;
	svg = d3.select("#patterns_graph_box")
			.attr("height", svgHeight + 'px')
			
	bar = svg.selectAll("g")
			.data(col.patterns)
			.enter()
			.append("g")
			.attr("transform", function(d, i) { return "translate(0, "+ i * barHeight +")"; })

			
	bar.append("text")
			.attr("x", '50%')
			//.attr("x", paddingLeft+20)
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d.percentage+"%"; })
			
	bar.append("text")
			.attr("x", 0)
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d.patternString; })
			.style("font-weight", 'normal')
			/*.style("font-weight", function(d) {
				if(+d.frequency == maxValue)
					fw = "bold"
				else
					fw = "normal"
				return fw
			})*/
			
	bar.append("rect")
			.attr("width", function(d) { return scaleGraph2(d.percentage) + '%' })
			.attr("height", barHeight - 7)
			// .attr("x", function(d) { return scaleGraph(d.frequency) + paddingLeft+60; })
			.attr("x", '62%').attr('y', 4)
			.style("fill", globalVars.grey
			/*
			function(d) {
				if(+d.frequency == maxValue)
					color = "#222";
				else
					color = globalVars.grey
					
				return color;
			}*/)

}


function loadDropdownFilters(filters) {
	$("#select_filters").html("")
	var options;
	for(i = 0; i != filters.length; i++) {
		options += "<option id='filter_"+ filters[i].fnc +"'>"+ filters[i].name +"  ("+ profiling[filters[i].fnc]().length +")</option>";
	}
	$("#select_filters").append(options)
}


function loadDropdownColumns(cnrs) {
	var crs = '';
	$("#select_filter_colRules").html("")
	if(typeof cnrs != "undefined") {
		for(i = 0; i != cnrs.length; i++) {
			if(cnrs[i].rules) {
				crs += '<li><span class="icon icon-function"></span> &nbsp;&nbsp; ';
			} else {
				crs += '<li>';
			}
			var businessTerm = cnrs[i].business_term;
			var name = cnrs[i].name;
			if(businessTerm) {
				businessTerm = businessTerm.split(',')[0];
				name = name + ' ('+ businessTerm + ') ';
			}
			if(cnrs[i].serialNumber == globalVars.currentSrNo) {
				crs += "<b><a href='#' id='srNo_"+ cnrs[i].serialNumber +"'>"+ name +"</a></b></li>"
			} else {
				crs += "<a href='#' id='srNo_"+ cnrs[i].serialNumber +"'>"+ name +"</a></li>"
			}
		}
	} else {
		crs = "<li>No Results</li>";
	}
	$("#select_filter_colRules").append(crs)
}



$("#select_filters").on("change", function() {
	selectedFilter = $("#select_filters :selected").attr("id").substr(7)
	results = profiling[selectedFilter]()
	loadDropdownColumns(results)
});

$("#select_filter_colRules").on("click", "li > a", function(e) {
	e.preventDefault();
	srNo = $(this).attr("id").substr(5)
	window.location.href = "page2.php?srNo="+srNo
});












function getZdata(start, end) {
	var fullData = col.distinctValues.values;
	// TODO Clean not to trigger, if the data not changed.
	var filteredRecords = $.grep(fullData, function(record, recordIndex) {
		return (recordIndex >= start && recordIndex <= end) ? true: false;
	});
	return filteredRecords;
}

function getMinAndMaxFrequency(selRecords) {
	var lowest = Number.POSITIVE_INFINITY;
	var highest = Number.NEGATIVE_INFINITY;
	var tmp;
	for (var i=selRecords.length-1; i>=0; i--) {
		tmp = selRecords[i].frequency;
		if (tmp < lowest) lowest = tmp;
		if (tmp > highest) highest = tmp;
	}
	var delta = Math.ceil((highest - lowest) * 5 / 100);
	var min = (lowest - delta) > 0 ? (lowest - delta) : 0;
	return {
		min: min,
		max: highest + delta 
	};
}

function renderVFChart(data, id, isMiniature) {
	
	$("#"+id).show()
	$("#"+id).empty()
	var svgWidth = $("#"+id).width();
	var barAndSpaceWidth = svgWidth / data.length; 
	var barWidth = barAndSpaceWidth * .75;
	margin = {
		"top": 2,
		"right": 0,
		"bottom": 10,
		"left": 0
	}
	graphHeight = isMiniature ? 70 : 130
	
	graph_dv = d3.select("#"+id)
		.attr("width", "100%")
		.attr("height", graphHeight)
		.style("margin-left", margin.left)
		.style("margin-top", margin.top)
	var maxYDomain = d3.max(data, function(d) { return +d.frequency });

	if(maxYDomain < 10) {
		maxYDomain = 10;
	}
		scaleDV = d3.scale.linear()
				.domain([0, maxYDomain])
				.range([3, graphHeight]);
				
		yScale = d3.scale.linear()
				.domain([0, maxYDomain])
				.range([graphHeight, 0]);

		yAxis = d3.svg.axis()
				.scale(yScale)
				.orient("right")
				.ticks(4)
				//.tickSize(6, 0)

		bar = graph_dv.selectAll("g")
				.data(data)
				.enter()
				.append("g")
				.attr("transform", function(d, i) { return "translate("+ ((i * barAndSpaceWidth) + margin.left) +", 0)" })

			
		bar
				.append("rect")
				.attr("width", barWidth)
				.attr("y", function(d) { return graphHeight - scaleDV(+d.frequency) })
				.attr('data-index', function(d, i) { return i; })
				.attr("height", function(d) { return scaleDV(+d.frequency) })
				.style("fill", function(d) {
					if(d.name.toLowerCase() === "null")
						color = globalVars.red;
					else if(+d.frequency == 1)
						color = globalVars.blue;
					else
						color = globalVars.grey
						
					return color;
				})
				
		if(! isMiniature)	 {
			$("#"+ id +" rect").tipsy({
				gravity: 'e',
				html: true,
				title: function() {
					return "<div style='margin-bottom: 8px; text-align: left;'>\
								<p>Name:"+ this.__data__.name +"</p>\
								<p>Frequency: "+ this.__data__.frequency +"</p>\
								<p>Length: "+ this.__data__.length +"</p>\
							</div>";
				}
			});
			$("#"+ id +" rect").on('click', function(e) {
				var $ele = $(e.target);
				$("#"+ id +" rect").css('stroke-width', 0);
				$ele.attr('stroke', 'black').css("stroke-width", 1);
				$('#fq_dist_zoomed_table tr').removeClass('selected');
				$('#fq_dist_zoomed_table').closest('div').scrollTop($ele.attr('data-index') * 23)
				$('#fq_dist_zoomed_table tr[data-index="'+ $ele.attr('data-index') + '"]').addClass('selected')
				/*d3.select(e.target)
					.attr("stroke-width", 2)
					.attr("stroke", "black");*/
			});
		}
	
	
}
function renderSlider(selectSize, sliderValue) {
	var widget = $(".slider-range").data('ui-slider');
	if(widget) widget.destroy();
	var min = (selectSize / 2) ; // minus side 10, plus side 9.
	var max = col.distinctValues.values.length - (selectSize / 2);
	//alert(min +' :' + max);
	sliderValue = parseInt(sliderValue, 10);
	$(".slider-range").slider({
		min: min,
		max: max,
		value: sliderValue,
		slide : function(e, ui) {
			var value = ui.value;
			var start = Math.floor(value - (selectSize / 2));
			var end = Math.floor(value + (selectSize / 2) - 1);
			generateGraphViewport(start, selectSize);
			// Show text message for the selected range.
			$('.slider-content').html('Showing the range from ' + (start + 1) + ' to ' + (end + 1) + ' of total ' + col.distinctValues.values.length + ' values.');
		},
		stop: function(e, ui) {
			var value = ui.value;
			var start = Math.floor(value - (selectSize / 2));
			var end = Math.floor(value + (selectSize / 2) - 1);
			// Set the new start and end.	
			var zData = getZdata(start, end);
			renderVFChart(zData, 'fq_dist_zoomed');
			renderVFTable(zData, 'fq_dist_zoomed_table');
		},
		create: function( e, ui ) {
			var value = ui.value || sliderValue;
			var start = Math.floor(value - (selectSize / 2));
			var end = Math.floor(value + (selectSize / 2) - 1);
			var zData = getZdata(start, end);
			renderVFChart(zData, 'fq_dist_zoomed');
			renderVFTable(zData, 'fq_dist_zoomed_table');
			$('.slider-content').html('Showing the range from ' + (start + 1) + ' to ' + (end + 1) + ' of total ' + col.distinctValues.values.length + ' values.');
			generateGraphViewport(start, selectSize);
		}
	});
	
}


function renderVFTable(data, tableId) {
	var tableContent = $("#"+tableId+" tbody"),
		rows ="";

	tableContent.html("")
	
	$.each(data, function(k, v) {
		rows +=
			"<tr data-index='" + k + "'>"
				+"<td>"+ v.name +"</td>"
				+"<td>"+ v.frequency +"</td>"
				+"<td>"+ v.percentage +"%</td>"
				+"<td>"+ v.length +"</td>"
			+"</tr>"	
	})
	tableContent.append(rows)
	
	tableContent.on('click', 'td', function(e) {
		var index = $(e.target).closest('tr').attr('data-index');
		$('#fq_dist_zoomed rect[data-index="' + index + '"]').trigger('click');
	});
}

function generateGraphViewport(start, selectSize) {
	var totalWidth = $('#fq_dist_full').width();
	var totalCount = col.distinctValues.values.length;
	var viewPortWidth = totalWidth * selectSize / totalCount;
	var viewPortLeft = Math.floor(totalWidth * start / totalCount);
	$('#graph_viewport').css({
		width : viewPortWidth + 'px',
		left: viewPortLeft + 'px'
	});
	var marginLeft = viewPortWidth/2;
	var marginRight = marginLeft + 10;
	$('.slider-range').css('margin-left', marginLeft + 'px').css('margin-right', marginRight + 'px');
}

function init() {

	$("#selected_column").text(col.name)

	var currentZoomRecordSize = $("#change_vp_width option:selected").val();
	var midZoomRecordSize = Math.floor(col.distinctValues.values.length/2);

	if(currentZoomRecordSize > col.distinctValues.values.length) {
		currentZoomRecordSize = col.distinctValues.values.length;
		midZoomRecordSize = Math.ceil(currentZoomRecordSize/2)
	}
	if(col.distinctValues.values.length > 50) {
		renderVFChart(col.distinctValues.values, 'fq_dist_full', true);
		renderSlider(currentZoomRecordSize, Math.min(+currentZoomRecordSize/2, +midZoomRecordSize));
	} else {
		$('#graph_viewport, #fq_dist_full, .slider-range').hide();
		var value = midZoomRecordSize,
			selectSize = currentZoomRecordSize;
		var start = Math.floor(value - (selectSize / 2));
		var end = Math.floor(value + (selectSize / 2) - 1);
		var zData = getZdata(start, end);
		renderVFChart(zData, 'fq_dist_zoomed');
		renderVFTable(zData, 'fq_dist_zoomed_table');
		$('.slider-content').html('Showing the range from ' + (start + 1) + ' to ' + (end + 1) + ' of total ' + col.distinctValues.values.length + ' values.');
			
	}
	
	/* Load Filters */
	loadDropdownFilters(globalVars.filters)
	loadDropdownColumns(pdata.data)
	
	/* Load Left Boxes */
	loadGeneralBox()
	loadPatternsBox()
	loadDataTypeBox()
	loadBusinessTermBox()
	loadDataDomainBox()
	
	$("#change_vp_width").on("change", function(e) {
		var size = $(this).val();
		var midZoomRecordSize = Math.floor(col.distinctValues.values.length/2);

		if(size > col.distinctValues.values.length) {
			size = col.distinctValues.values.length;
			midZoomRecordSize = Math.ceil(size/2)
		}
		renderSlider(size, Math.min(parseInt(size/2, 10), +midZoomRecordSize));
		
	});
	var statsHtml = [
		'Length (Min <span class="icon icon-arrow" style="margin: -3px 3px;"></span> Max) ',
		col.minimumValue.length,
		' <span class="icon icon-arrow" style="margin: -3px 3px;"></span> ',
		col.maximumValue.length,
		' | Average: ',
		col.statistics.average,
		' | Standard Deviation: ',
		col.statistics.standardDeviation,
		'<br/>',
		'Values (Min <span class="icon icon-arrow" style="margin: -3px 3px;"></span> Max): ',
		col.minimumValue.name,
		' <span class="icon icon-arrow" style="margin: -3px 3px;"></span> ',
		col.maximumValue.name
	].join('');
	$("#col-stats").html(statsHtml);

	$("#sort_graph").on("change", function() {
		var sortBy = $(this).val();
		var asc= false;
		if($('#sort_graph option:selected').attr("data-type") == "asc") asc = true
		sortTheData(sortBy, asc);
		renderVFChart(col.distinctValues.values, 'fq_dist_full', true);
		renderSlider(currentZoomRecordSize, Math.min(parseInt(currentZoomRecordSize/2, 10), parseInt(col.distinctValues.values.length/2, 10)));
	})
	
	
	showContextMenu("fq_dist_full", "fq_dist_full_cm");
	showContextMenu("fq_dist_zoomed g rect", "fq_dist_zoomed_cm");
	showContextMenu("fq_dist_zoomed_table tr", "fq_dist_zoomed_table_cm");
	showContextMenu("inferred_dt g", "box_dt_cm");
	showContextMenu("patterns_graph_box g", "box_patterns_cm");
	
	$('#fq_dist_full_cm').on('click', 'a', function(e) {
		var $ele = $(this);
		var sortBy = $ele.attr('data-value');
		if(sortBy) {
			$("#sort_graph").val(sortBy).trigger('change');

		}
		/*var asc =false;
		if($(this).attr("data-type") == "asc")  asc = true
		sortTheData(sortBy, asc);
		renderVFChart(col.distinctValues.values, 'fq_dist_full', true);
		renderSlider(currentZoomRecordSize, Math.min(parseInt(size/2, 10), parseInt(col.distinctValues.values.length/2, 10)));
		*/
		$ele.closest('.dropdown-menu').hide();
	});
	
	$("#fq_dist_zoomed_cm").on("click", "a", function(e) {
		var $ele = $(this)
		if($ele.attr("data-value")) {
			renderVFChart(col.distinctValues.values, 'fq_dist_full', true);
			renderSlider($ele.attr("data-value"), Math.min(parseInt(size/2, 10), parseInt(col.distinctValues.values.length/2, 10)));
		}
		$ele.closest('.dropdown-menu').hide();
	})
	
	$("#box_dt_cm").on("click", "a", function() {
		$(this).closest('.dropdown-menu').hide();
	})
	$("#box_patterns_cm").on("click", "a", function() {
		$(this).closest('.dropdown-menu').hide();
	})
	
	//$("#vf_header").text((col.nonUniques.rows + col.uniques.rows) +" distinct values ("+ col.nonUniques.rows +" non uniques | "+ col.uniques.rows +" uniques)")

	if(col.serialNumber == profiling.getFirstSlNo()) {
		$(".btn-prev").addClass("disabled").unbind("click")
	} else if(col.serialNumber == profiling.getLastSlNo()) {
		$(".btn-next").addClass("disabled").unbind("click")
	}
	$(".btn-prev").on("click", function() {
		var sn = profiling.getPrevSlNo(col.serialNumber);
		if(sn) {
			window.location.href = "page2.php?srNo="+sn
		}
	})
	$(".btn-next").on("click", function() {
		var sn = profiling.getNextSlNo(col.serialNumber);
		if(sn) {
			window.location.href = "page2.php?srNo="+sn
		}
	})
	
	
	$(".panel img").on("click", function() {
		//$(this).siblings(".box-content").toggle()
		var $panel = $(this).closest('.panel');
		
		/* for values panel only */
		if($(this).hasClass("panel-values")) {
			if(!$panel.next().is(":hidden")) {
				$("div.drill-down").css("height", "450px")
			} else {
				$("div.drill-down").css("height", "200px")
			}
		}
		
		$panel.next().toggle();
		$panel.find(".arrow-open").toggle()
		$panel.find(".arrow-closed").toggle()
	})
	
	$(".panel-values img").on("click", function() {
	})
	
	
	d3.tsv("js/data_view.tsv", function(data) {
		console.log(data.length)
		$.each(data, function(k, v) {
			console.log(v)
			console.log(v.AA1001)
			$("#drill-down-table tbody").append(
				"<tr>"
				+"<td>"+ v.AA1001 +"</td>"
				+"<td>"+ v.AA1002 +"</td>"
				+"<td>"+ v.AA1003 +"</td>"
				+"<td>"+ v.AA1004 +"</td>"
				+"<td>"+ v.AA1005 +"</td>"
				+"<td>"+ v.AA1006 +"</td>"
				+"<td>"+ v.AA1007 +"</td>"
				+"<td>"+ v.AA1008 +"</td>"
				+"<td>"+ v.AA1009 +"</td>"
				+"<td>"+ v.AA1010 +"</td>"
				+"<td>"+ v.AA1011 +"</td>"
				+"<td>"+ v.AA1012 +"</td>"
				+"<td>"+ v.AA1013 +"</td>"
				+"<td>"+ v.AA1014 +"</td>"
				+"<td>"+ v.AA1015 +"</td>"
				+"<td>"+ v.AA1016 +"</td>"
				+"<td>"+ v.AA1017 +"</td>"
				+"<td>"+ v.AA1018 +"</td>"
				+"<td>"+ v.AA1019 +"</td>"
				+"<td>"+ v.AA1020 +"</td>"
				+"<td>"+ v.AA1021 +"</td>"
				+"<td>"+ v.AA1022 +"</td>"
				+"<td>"+ v.AA1023 +"</td>"
				+"<td>"+ v.AA1024 +"</td>"
				+"<td>"+ v.AA1025 +"</td>"
				+"<td>"+ v.AA1026 +"</td>"
				+"<td>"+ v.AA1027 +"</td>"
				+"<td>"+ v.AA1028 +"</td>"
				+"<td>"+ v.AA1029 +"</td>"
				+"<td>"+ v.AA1030 +"</td>"
				+"<td>"+ v.AA1031 +"</td>"
			+"</tr>"
			)
		})
	})
	
}

function sortTheData(sortBy, asc) {
	col.distinctValues.values.sort(function(a, b) {
		var aSortBy = a[sortBy];
		var bSortBy = b[sortBy];
		if(!asc) {
			// desc
			return aSortBy > bSortBy ? -1 : ((aSortBy < bSortBy) ? 1 : 0);
		} else {
			// asc
			return aSortBy < bSortBy ? -1 : ((aSortBy > bSortBy) ? 1 : 0);
		}
	});
}


/* Context Menus Actions */
function showContextMenu(cm_container_id, cm_id) {
	$('body').on('contextmenu', "#"+cm_container_id,  function(e) {
	//$("#"+cm_container_id).on("contextmenu", function(e) {
		e.preventDefault()
		$("#"+cm_id).show().css({
			left: e.clientX + 10,
			top: e.clientY
		});
	});
	
	$(".dropdown-menu li").on("click", "a", function() {
		$(this).closest('.dropdown-menu').hide();
	})
}

$(init);