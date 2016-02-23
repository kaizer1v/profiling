function getDataTypes(srNo) {
	var ddt = profiling.getDocumentedDataType(srNo) + " (Documented)",
		idt = profiling.getInferredDataTypes(srNo),
		idtt = ""
	;
	
	if(idt.length > 1) {
		// idt1 = idt[0].datatype +" | "+ idt[0].percentage +",</p><p>"+ idt[1].datatype +" | "+ idt[1].percentage +"% <p><a href='#'>"+ (idt.length-2) +" more...</a>";
		idt1 = idt[0].datatype +" | "+ idt[0].percentage +"%,</p><p><a href='#'>"+ (idt.length-1) +" more...</a>";
		dt = "<p>"+ ddt +"</p><p>"+ idt1 +"</p>";
	} else {
		for(i = 0; i!= idt.length; i++) {
			idtt += "<p>"+ idt[i].datatype +" | "+ idt[i].percentage +"%</p>";
			dt = "<p>"+ ddt +"</p><p>"+ idtt +"</p>";
		}
	}
	
	return dt;
}


function loadFilters() {
	var arr = [
		'getAll',
		'getColumns',
		'getRules',
		'getNullColumns',
		'getUniqueColumns',
		'getConstantColumns',
		'getConflictingDataTypeColumns' ,
		'getPatternOutliers', 
		'getValueFrequencyOutlier', 
		'getInferredDataDomains' 
	];
	$.each(arr, function(index, item) {
		$('#filter_' + item + ' span.number').text(profiling[item]().length);
	})
}




function getColumnByName(name, data){ 
	for(var i = 0; i < data.length; i++) {
		if(data[i].name == name) {
			return data[i];
		}
	}
	return 0;
}
function loadMainTable(data) {

	$("#main-table tbody").html("")
	if(data) {
	
	
		// load tables
		var row;
		$.each(data, function(k, v) {
			if(v.rules) {
				var colNames = v.rules.inputColumnList;
				for(var i = 0; i < colNames.length; i++) {
					var colName = colNames[i];
					var col = getColumnByName(colName, data);
					if(col) {
						col.associated_rule_name = v.rules.ruleName;
					}
				}
			}
		});
		$.each(data, function(k) {
			// check if is rule
			if(!!this.rules && typeof this.rules == "object") {
				ruleHeader = "<tr>"+
					"<td colspan='8' class='has-tt'><!--span class='icon icon-carat'></span --><span class='icon icon-function'></span>&nbsp;&nbsp;<b>"+ this.rules.ruleName +"</b><ul class='dropdown-menu tt' style='display: none;'><li>Rule Description will appear here...</li></ul><span style='color:#aaa'> &nbsp; &nbsp; &nbsp;| Input Column: "+ this.rules.inputColumnList[0] +"</span></td>"+
					/*"<td style='color: #aaa'> | Input Column: "+ this.rules.inputColumnList[0] +"</td>"+
					"<td>"+"</td>"+
					"<td>"+"</td>"+
					"<td>"+"</td>"+
					"<td>"+"</td>"+
					"<td>"+"</td>"+
					"<td>"+"</td>"
				+*/"</tr>"
			} else {
				ruleHeader = ""
			}
			
			ass_rules = (this.associated_rule_name) ? "<span style='color:#aaa'><b>Associated Rules: </b>"+ this.associated_rule_name + '</span>': "";
			
			svg_nunu = "<svg id='svg_nunu_"+ this.serialNumber +"'></svg>";
			
			nunu = "<p><span style='color: "+ globalVars.red +"'>"+ this.nulls.percentage +"</span> | <span style='color: "+ globalVars.blue +"'>"+ this.uniques.percentage +"</span> | <span style='color: "+ globalVars.gray +"'>"+ this.nonUniques.percentage +"</span></p>"
			nunutt = "<div class='tt dropdown-menu' style='display: none; width: 100px'>"+ "<p><span style='color: "+ globalVars.red +"'>"+ this.nulls.rows +"</span> | <span style='color: "+ globalVars.blue +"'>"+ this.uniques.rows +"</span> | <span style='color: "+ globalVars.gray +"'>"+ this.nonUniques.rows +"</span> rows</p>" +"</div>";
			bt = (this.business_term) ? this.business_term : "";
			
			dd = (this.data_domain) ? this.data_domain.name+" | "+this.data_domain.percentage +"%" : "";
			
			svg_patterns = "<svg id='svg_patterns_"+ this.serialNumber +"'></svg>";
			var patterns_lis = "";
			$.each(this.patterns, function(k, v) {
				patterns_lis += "<li><a href='#'>"+ v.patternString +": "+ v.percentage +"%</a></li>"
			})
			patterns_tt = "<ul class='dropdown-menu tt' style='display: none; min-height: 50px; overflow-y: auto; min-width: 100px'>"+ patterns_lis +"</ul>"
			
			data_types = getDataTypes(this.serialNumber)
			var lis = "";
			$.each(profiling.getInferredDataTypes(this.serialNumber), function(k, v) {
				lis += "<li>"+ v.datatype +" | "+ v.percentage +"</li>";
			})
			data_types_tt = "<ul class='tt dropdown-menu' style='display: none; width: 200px'><li><b>Inferred Datatypes</b></li>"+ lis +"</ul>"
			
			color =  (this.globalFilters.conflictingDatatypes) ? "red" : "#000";
			
			row
			+= ruleHeader+"<tr id='srNo_"+ this.serialNumber +"'>"
/*				+"<td>"+
	// Sr No.
					this.serialNumber
*/
				+"</td><td>"+
	// Name
					this.name+"<br /><p style='color: #ccc'>"+ ass_rules +"</p>"
				+"</td><td class='has-tt'>"+
	// Null | Unique | Non Uniques %
					svg_nunu + nunu + nunutt
				+"</td><td class='has-tt'>"+
	// Pattern Graph
					svg_patterns + patterns_tt
				+"</td><td>"+
	// Value (Min -> Max)
					this.minimumValue.name+ "<span class='icon icon-arrow' style='margin: -3px 3px;'></span>"+ this.maximumValue.name
				+"</td><td>"+
	// Length (Min -> Max)
					this.minimumValue.length+ " <span class='icon icon-arrow' style='margin: -3px 3px;'></span> "+ this.maximumValue.length
				+"</td><td class='has-tt' style='color: "+ color +"'>"+
	// Data Types
					data_types + data_types_tt
				+"</td><td>"+
	// Data Domain
					dd
	// Business Term
				+"</td><td>"+
					bt
				+"</td>"

			+"</tr>"	
			
			
			// load left side filter sidebar
		
		
		}) // end of looping through profiling.cols
		
	} else {
		row = "<p>No Results to display</p>"
	}
	


	$("#main-table tbody").append(row)

// FIX-THIS
	// how to avoid running a 2nd loop??
	// figure out a way to create and get elements in the same loop
	
	// 2nd loop for generating the graphs in the table
	$.each(data, function(k, col) {
		profiling.generateNunuG("#svg_nunu_"+this.serialNumber, this.serialNumber, this.nulls, this.uniques, this.nonUniques)
		profiling.generatePatternG("#svg_patterns_"+this.serialNumber, this.serialNumber, this.patterns)
	})
	
}

$("#table-filters li").on("click", "a", function() {
	$("#table-filters li").removeClass("active")
	var count = $(this).find('.number').text();
	var str = $(this).find('.label').text();
	$("#filter_applied").text(str + ' ('+ count + ') ');

	$(this).parent("li").addClass("active")
	
	filterCalled = $(this).attr("id").substr(7)
	if(profiling.hasOwnProperty(filterCalled)) {
		returnedData = profiling[filterCalled]();
		if(returnedData !== "undefined") {
			loadMainTable(returnedData)
		} else {
			loadMainTable(false)
		}
	}

});


$("#main-table tbody").on("click", "tr", function() {
	srNo = $(this).attr("id").substr(5)
	window.location.href = "page2.php?srNo="+srNo
});

$("#main-table tbody").hover(
	function() {
		$(this).children().children(".dt-tt").hover(
			function() {
				$(this).children("div").show()
			},
			function() {
				$(this).children("div").hide()
			}
		)
	}
);


$("body").on('mouseover', '.has-tt', function(e) {
	$(this).children(".tt").show().css({
		left: e.clientX, top:e.clientY
	})
});
$("body").on('mouseout', '.has-tt', function(e) {
	$(this).children(".tt").hide().css({
		left: e.clientX, top:e.clientY
	})
});

/* Context Menus Actions */
function showContextMenu(cm_container_id, cm_id) {
	$('body').on('contextmenu', "#"+cm_container_id,  function(e) {
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

showContextMenu("main_table_cm_container th", "main_table_cm");

(function(profiling, $) {
	loadMainTable(profiling.cols)
	loadFilters();
	
})(profiling, jQuery)