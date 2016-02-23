<?php require "header.php" ?>

	<table class="infa-table static">
		<tbody><tr>
			<td width="20px"><span class="icon icon-pie-chart"></span></td>
			<td class="title"><b>Profile_Customer</b> - Overview</td>
			<td width="20px"><img src="images/icon-profiling.png"></td>
			<td width="30px"><button>Edit</button></td>
			<td width="20px" class="border-left">
				<div class="dropdown dropdown-right">
					<a href="#" class="dropdown-link"><span class="icon icon-action"></span></a>
					<ul class="dropdown-menu" style="display: none;">
						<li><a href="#">Run Profile</a></li>
						<li><a href="#">Edit Profile</a></li>
						<hr class="divider">
						
						<li><a href="#">Add Rule</a></li>
						<li><a href="#">Add to Scorecard</a></li>
						<li><a href="#">Add to Reference Table</a></li>
						<hr class="divider">
						
						<li><a href="#">Select Profile Run</a></li>
						<li><a href="#">Compare Profile</a></li>
						<hr class="divider">
						
						<li><a href="#">Export Data</a></li>
						<hr class="divider">
						
						<li><a href="#">Show Comments</a></li>
						<li><a href="#">Show Tags</a></li>
					</ul>
				</div>
			</td>
		</tr>
	</tbody></table>
	
	<table id="table-info" class="infa-table static">
		<tr>
			<td style="">Profile Run <span class="number">31</span> of <span class="number">31</span> Columns <span span class="number" style="color: #ccc;">|</span> <span span class="number">6</span> of <span span class="number">6</span> Rules <span span class="number" style="color: #ccc;">|</span> <span span class="number">3000</span> rows (all rows)</td>
			<td width="150px;" style="text-align: right">
				Displaying profile run 5 of 5<br />
				<div class="dropdown dropdown-right">
					<a href="#" class="dropdown-link">more info...</a>
					<ul class="dropdown-menu" style="display: none; text-align: left;">
						<li><a href="#">Run On: May 29, 2014 7:28:44 PM</a></li>
						<li><a href="#">Run By: Administrator</a></li>
						<li><a href="#">Data Source: MRS1\Project1\CUSTOMER</a></li>
					</ul>
				</div>
			</td>
		</tr>
	</table>
	
	
	<div class="container scrollable">
	
		<div id="left-content" class="col col-1">
			<ul id="table-filters">
				<li class="active"><a id="filter_getAll" href="#"><span class="number"></span><span class="label">Columns &amp; Rules</span></a></li>
				<li><a id="filter_getColumns" href="#"><span class="number"></span><span class="label">Columns</span></a></li>
				<li><a id="filter_getRules" href="#"><span class="number"></span><span class="label">Rules</span></a></li>
				<li><a id="filter_getNullColumns" href="#"><span class="number"></span><span class="label">100% Null</span></a></li>
				<li><a id="filter_getUniqueColumns" href="#"><span class="number"></span><span class="label">100% Unique</span></a></li>
				<li><a id="filter_getConstantColumns" href="#"><span class="number"></span><span class="label">100% Constant</span></a></li>
				<li><a id="filter_getConflictingDataTypeColumns" href="#"><span class="number"></span><span class="label">Conflicting Data Types</span></a></li>
				<li><a id="filter_getPatternOutliers" href="#"><span class="number"></span><span class="label">Pattern Outlier</span></a></li>
				<li><a id="filter_getValueFrequencyOutlier" href="#"><span class="number"></span><span class="label">Value Frequency Outlier</span></a></li>
				<li><a id="filter_getInferredDataDomains" href="#"><span class="number"></span><span class="label">Inferred Data Domains</span></a></li>
			</ul>
		</div>
		
		<div id="right-content" class="col col-9">
			<table class="infa-table static">
				<tbody>
					<tr>
						<td><b id="filter_applied">Column and Rules (37)</b></td>
						<td width="150px">Sort By:
							<select>
								<option selected>Default</option>
								<option>Name</option>
								<option>Business Term</option>
								<option>Null %</option>
								<option>Unique %</option>
								<option>Non Unique %</option>
							</select>
						</td>
						<td width="100px">
							<select disabled>
								<option>Ascending</option>
								<option>Descending</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
			
			<div class="">
			
				<div id="main-table-wrapper">
				
					<table id="main-table" class="infa-table">
						<thead>
							<tr id="main_table_cm_container">
								<!--<th>No.</th>-->
								<th>Name</th>
								<th><nobr><span style="color: red">Null</span> | <span style="color: #2cabe0;">Unique</span> | <span style="color: #aaa">Non Unique</span> %</nobr></th>
								<th>Pattern</th>
								<th width="200px">Value(Min <span class='icon icon-arrow' style='margin: -3px 3px;'></span> Max)</th>
								<th width="150px">Length(Min <span class='icon icon-arrow' style='margin: -3px 3px;'></span> Max)</th>
								<th width="150px">Data Type &nbsp;
									<span class="icon icon-help has-tt">
										<ul class="tt dropdown-menu" style="display: none; width: 150px;">
											<li>Shows the documented datatype and inferred datatypes</li>
										</ul>
									</span>
								</th>
								<th>Data Domain</th>
								<th><nobr>Business Term</nobr></th>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
					
				</div>
				
			</div><!-- END .scrollable -->
		</div><!-- END #right-content -->

		<ul id="main_table_cm" class="dropdown-menu" style="display: none;">
			<li><a href="javascript:;">Hide Column</a></li>
			<li><a href="javascript:;">Select Column</a></li>
			<li><a href="javascript:;">Reorder Column</a></li>
		</ul>
		
	</div><!-- END .container -->
	
	
		
<?php require "footer.php" ?>