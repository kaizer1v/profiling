var globalVars = {
	currentSrNo: 0,
	windowWidth: 1200,
	
	smallSvgWidth: 100,
	smallSvgHeight: 50,
	
	red: "red",
	blue: "#2cabe0",
	grey: "#aaa",
	filters: [
		{
			name:	"Column &amp; Rules",
			fnc:		"getAll",
		},
		{
			name:	"Columns",
			fnc:		"getColumns",
		},
		{
			name:	"Rules",
			fnc:		"getRules",
		},
		{
			name:	"100% Nulls",
			fnc:		"getNullColumns",
		},
		{
			name:	"100% Uniques",
			fnc:		"getUniqueColumns",
		},
		{
			name:	"100% Constants",
			fnc:		"getConstantColumns",
		},
		{
			name:	"Conflicting Data Types",
			fnc:		"getConflictingDataTypeColumns",
		},
		{
			name:	"Pattern Outliers",
			fnc:		"getPatternOutliers",
		},
		{
			name:	"Value Frequency Outlier",
			fnc:		"getValueFrequencyOutlier",
		},
		{
			name:	"Inferred Data Domains",
			fnc:		"getInferredDataDomains",
		},
	]
}

var profiling = (function() {
	
	var cols = pdata.data,
		returnVals = [],
		i = 0,
		j = 0
	;
	
	/* ===================
	 * Get Column Details by SrNo
	 * ===================
	 */
	function _getColumn(srNo) {
		for(i = 0; i != cols.length; i++) {
			if(cols[i].serialNumber == srNo) {
				return cols[i];
			}
		}
		return false;
	}
	/* Returns Columns as well as Rules */
	function _getAll() {
		return cols;
	}
	/* Returns Rules only */
	function _getRulesOnly() {
		returnVals = []
		for(i = 0; i != cols.length; i++) {
			if(!!cols[i].rules && typeof cols[i].rules == "object") {
				returnVals.push(cols[i]);
			}
		}
		return returnVals;
	}
	
	/* Returns Columns only */
	function _getColumnsOnly() {
		returnVals = []
		for(i = 0; i != cols.length; i++) {
			if(!cols[i].rules) {
				returnVals.push(cols[i]);
			}
		}
		return returnVals;
	}
	
	
	/* Returns all 100% Unique Columns */
	function _get100PercUniqueColumns() {
		returnVals = [];
		for(i = 0; i != cols.length; i++) {
			if(cols[i].globalFilters.hundredPercentUnique === true) {
				returnVals.push(cols[i]);
			}
		}
		return returnVals;
	}
	
	/* Returns all 100% Null Columns */
	function _get100PercNullColumns() {
		returnVals = [];
		for(i = 0; i != cols.length; i++) {
			if(cols[i].globalFilters.hundredPercentNull === true) {
				returnVals.push(cols[i]);
			}
		}
		return returnVals;
	}
	
	/* Returns all 100% Constant Columns */
	function _get100PercConstantColumns() {
		returnVals = [];
		for(i = 0; i != cols.length; i++) {
			if(cols[i].globalFilters.hundredPercentConstant === true) {
				returnVals.push(cols[i]);
			}
		}
		return returnVals;
	}
	
	
	
	
	/* ===================
	 * Patterns
	 * ===================
	 */ 
	/* Returns array of pattern frequencies for a column */
	function _getPatternFrequencies(srNo) {
		returnVals = []
		col = _getColumn(srNo)
		if(col.patterns instanceof Array) {
			for(i = 0; i != col.patterns.length; i++) {
				returnVals.push(col.patterns[i].frequency);
			}
		}
		return returnVals;
	}
	/* Returns array of pattern outliers */
	function _getPatternOutliers() {}
	
	
	
	/* ===================
	 * Data Types
	 * ===================
	 */ 
	/* Returns array of inferred datatypes for a column */
	function _getInferredDTs(srNo) {
		returnVals = [];
		col = _getColumn(srNo);
		if(col.inferredDatatypes instanceof Array) {
			for(i = 0; i != col.inferredDatatypes.length; i++) {
				returnVals.push(col.inferredDatatypes[i]);
			}
		}
		return returnVals;
	}
	/* Returns Documented Datatype for a column */
	function _getDocumentedDT(srNo) {
		col = _getColumn(srNo);
		return col.documentedDatatype;
	}
	function _isConflictingDT(srNo) {
		col = _getColumn(srNo);
		if(!col.globalFilters.conflictingDatatypes) {
			return col.globalFilters.conflictingDatatypes;
		}
	}
	/* Returns all Columns that have conflicting Datatypes */
	function _getConflictingDTColumns() {
		returnVals = [];
		for(i = 0; i != cols.length; i++) {
			if(cols[i].globalFilters.conflictingDatatypes === true) {
				returnVals.push(cols[i]);
			}
		}
		return returnVals;
	}
	
	
	
	
	
	
	
	
	/* ===================
	 * Value Frequencies
	 * ===================
	 */
	function _getVFOutliers() { return []; }
	
	
	
	
	
	/* ===================
	 * Data Domains
	 * ===================
	 */ 
	function _getInferredDD() {
		returnVals = [];
		for(i = 0; i != cols.length; i++) {
			if(!!cols[i].data_domain && typeof cols[i].data_domain == "object") {
				returnVals.push(cols[i]);
			}
		}
		return returnVals;
	}
	
	
	
	
	
	
	/* ===================
	 * Graph Related Functions
	 * ===================
	 */ 
	function _stackedBarGraph(svgId, srNo, nulls, uniques, nonUniques) {
	
		svgWidth = 100
		svgHeight = 15
		barHeight = 15
		
		if(nulls && uniques && nonUniques) {
			// convert it to positive int
			nulls.percentage = (nulls.percentage < 0) ? 0 : parseInt(nulls.percentage);
			uniques.percentage = (uniques.percentage < 0) ? 0 : parseInt(uniques.percentage);
			nonUniques.percentage = (nonUniques.percentage < 0) ? 0 : parseInt(nonUniques.percentage);
			
			var nunu = [{
				"x": nulls.percentage,
				"y": uniques.percentage,
				"z": nonUniques.percentage
			}]
			
			svg = d3.select(svgId)
					.attr("width", svgWidth)
					.attr("height", svgHeight)
					
			g = svg.selectAll("g")
					.data(nunu)
					.enter()
					.append("g")

			g
				.append("rect")
				.attr("x", 0)
				.attr("width", function(d) { return +d.x })
				.attr("height", barHeight - 1)
				.style("fill", globalVars.red)
			
			g
				.append("rect")
				.attr("x", function(d, i) { return +d.x })
				.attr("width", function(d) { return +d.y })
				.attr("height", barHeight - 1)
				.style("fill", globalVars.blue)
				
			g
				.append("rect")
				.attr("x", function(d, i) { return +d.x + +d.y })
				.attr("width", function(d) { return +d.z })
				.attr("height", barHeight - 1)
				.style("fill", globalVars.grey)
		}
		return true;
	}
	
	
	function _verticalBarGraph(svgId, srNo, patterns) {

		svgWidth = globalVars.smallSvgWidth
		svgHeight = globalVars.smallSvgHeight
		
		// get array of frequencies (sorted descending order)
		pattern_frequencies = profiling.getPatternFrequencies(srNo).sort(function(a, b) { return b - a; })
		
		var scale = d3.scale.linear()
				.domain([0, d3.max(pattern_frequencies)])
				.range([0, svgWidth]);
		
		var graph_patterns = d3.select(svgId)
			.attr("width", svgWidth)
			.attr("height", svgHeight)

		barHeight = 5
		
		var bar = graph_patterns.selectAll("g")
			.data(pattern_frequencies)
			.enter()
			.append("g")
			.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
		
		bar.append("rect")
			.attr("width", function(d) { return scale(d); })
			.attr("height", function(d) {
				barHeight = (d == 0) ? 0 : barHeight
				return barHeight - 1;
			})
			.style("fill", globalVars.grey)
	}
	
	
	
	function _getPatternOutliers() { return []; }
	function _getValueFrequencyOutlier() { return []; }
	
	function _getFirstSlNo() {
		return cols[0].serialNumber;
	}
	function _getLastSlNo() {
		return cols[cols.length-1].serialNumber;
	}
	function _getNextSlNo(currentSlNo) {
		for(i = 0; i != cols.length; i++) {
			if(cols[i].serialNumber == srNo) {
				if (cols[i+1]) {
					return cols[i+1].serialNumber;
				} else {
					return '';
				}
			}
		}
		return '';
	}
	function _getPrevSlNo() {
		for(i = 0; i != cols.length; i++) {
			if(cols[i].serialNumber == srNo) {
				if (cols[i-1]) {
					return cols[i-1].serialNumber;
				} else {
					return '';
				}
			}
		}
		return '';
	}
	
	// return profiling
	return {
		getFirstSlNo: _getFirstSlNo,
		getLastSlNo: _getLastSlNo,
		getNextSlNo: _getNextSlNo,
		getPrevSlNo: _getPrevSlNo,
		
		// variables
		cols: pdata.data,
		
		// functions
		getAll:							_getAll,
		getColumn: 						_getColumn,
		getColumns:						_getColumnsOnly,
		getUniqueColumns:				_get100PercUniqueColumns,
		getNullColumns:					_get100PercNullColumns,
		getConstantColumns:				_get100PercConstantColumns,
		
		// pattern related functions
		getPatternFrequencies:			_getPatternFrequencies,
		getPatternOutliers:				_getPatternOutliers,
		
		// value frequency related functions
		getValueFrequencyOutlier:		_getVFOutliers,
		
		
		// data type related functions
		getInferredDataTypes:			_getInferredDTs,
		getDocumentedDataType:			_getDocumentedDT,
		isConflictingDatatype:			_isConflictingDT,
		getConflictingDataTypeColumns:	_getConflictingDTColumns,
		
		// data domain related functions
		getInferredDataDomains:			_getInferredDD,
		
		// rules related functions
		getRules:						_getRulesOnly,
		
		
		// graph related functions
		generateNunuG:					_stackedBarGraph,
		generatePatternG:				_verticalBarGraph,
	
		// WRITE FUns for these
		getPatternOutliers:				_getPatternOutliers,
		getValueFrequencyOutlier:		_getValueFrequencyOutlier
	
	}
})()