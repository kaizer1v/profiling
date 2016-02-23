<?php require "header.php"; ?>

	<table class="infa-table static">
		<tbody><tr>
			<td width="20px"><span class="icon icon-pie-chart"></span></td>
			<td class="title"><b>Profile_Customer</b> - Details</td>
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
	
	<table id="page2-table-info" class="infa-table static">
		<tr>
			<td width="100px"><a href="index.php">Back to Overview</a></td>
			<td width="150px">
				<select id="select_filters"></select>
			</td>
			<td width="80px" class="dropdown">
				<a href="#" class="dropdown-link"><span id="selected_column"></span><span class="icon icon-carat"></span></a>
				<ul id="select_filter_colRules" class="dropdown-menu" style="display: none; max-height: 200px; overflow-y: auto;"></ul>
			</td>
			<td width="50px"><button class="btn-prev"></button>&nbsp;&nbsp;<button class="btn-next"></button></td>
			<td></td>
			<td width="150px" style="text-align: right">
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
	
	
	<div class="scrollable">
	
		<div class="container">
		
			<div class="col col-3" style="border:1px solid #ccc;height: 730px;">
				
				<div class="box" style="border-width:0">
					<table class="infa-table panel">
						<tbody>
							<tr>
								<td class="dropdown title"><img src="images/arrow-open.png" class="arrow-open" /><img src="images/arrow-closed.png" class="arrow-closed" style="display: none;" />General</td>
							</tr>
						</tbody>
					</table>
					<div id="box_general" class="box-content">
						<table>
							<tr>
								<td width="150px"><h3>Total Rows</h3></td>
								<td><h3 id="total_rows"></h3></td>
								<td><svg id="svg_details_nunu"></svg></td>
							</tr>
						</table>
						<table>
							<tr>
								<td width="150px"><span style="display: inline-block; width: 10px; height: 10px; background: red; margin-right: 5px"></span>Nulls</td>
								<td width="80px" style="color: red"><span id="nulls_freq"></span></td>
								<td width="5px">|</td>
								<td width="80px"><span id="nulls_perc"></span></td>
								<td><img src="images/sparkline1.jpg" /></td>
							</tr>
							<tr>
								<td width="150px"><span style="display: inline-block; width: 10px; height: 10px; background: #2cabe0; margin-right: 5px"></span>Uniques</td>
								<td width="80px"><span id="uniques_freq"></span></td>
								<td width="5px">|</td>
								<td width="80px"><span id="uniques_perc"></span></td>
								<td><img src="images/sparkline2.jpg" /></td>
							</tr>
							<tr>
								<td width="150px"><span style="display: inline-block; width: 10px; height: 10px; background: #ccc; margin-right: 5px"></span>Non Uniques</td>
								<td width="80px"><span id="non_uniques_freq"></span></td>
								<td width="5px">|</td>
								<td width="80px"><span id="non_uniques_perc"></span></td>
								<td><img src="images/sparkline3.jpg" /></td>
							</tr>
						</table>
					</div>
				</div>
				
				<div id="datatype_box" class="box" style="border-width:0">
					<table class="infa-table panel">
						<tbody>
							<tr>
								<td class="title"><img src="images/arrow-open.png" class="arrow-open" /><img src="images/arrow-closed.png" class="arrow-closed" style="display: none;" />Data Types</td>
								<td class="dropdown" width="20px">
									<a href="#" class="dropdown-link"><span class="icon icon-action"></span></a>
									<ul class="dropdown-menu" style="display: none;">
										<li><a href="#">Drilldown</a></li>
										<hr class="divider">
										<li><a href="#">Approve</a></li>
										<li><a href="#">Reject</a></li>
										<li><a href="#">Reset</a></li>
										<hr class="divider">
										<li><a href="#">Show Rejected</a></li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="box-content">
						<table width="100%">
							<tr>
								<td id="documented_dt" width="150px"></td>
								<td>Documented</td>
							</tr>
						</table>
						<svg id="inferred_dt" style="width: 100%;"></svg>
					</div>
				</div>
				
				<div id="patterns_box" class="box"  style="border-width:0">
					<table class="infa-table panel">
						<tbody>
							<tr>
								<td class="dropdown title"><img src="images/arrow-open.png" class="arrow-open" /><img src="images/arrow-closed.png" class="arrow-closed" style="display: none;" />Patterns</td>
								<td class="dropdown" width="20px">
									<a href="#" class="dropdown-link"><span class="icon icon-action"></span></a>
									<ul class="dropdown-menu" style="display: none;">
										<li><a href="#">Drilldown</a></li>
										<hr class="divider">
										<li><a href="#">Add Reference Table</a></li>
										<li><a href="#">Create Data Domain</a></li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="box-content">
						<svg id="patterns_graph_box" style="width: 100%"></svg>
					</div>
				</div>
				
				<div id="data_domain_box" class="box"  style="border-width:0">
					<table class="infa-table panel">
						<tbody>
							<tr>
								<td class="dropdown title"><img src="images/arrow-open.png" class="arrow-open" /><img src="images/arrow-closed.png" class="arrow-closed" style="display: none;" />Data Domains</td>
								<td class="dropdown" width="20px">
									<a href="#" class="dropdown-link"><span class="icon icon-action"></span></a>
									<ul class="dropdown-menu" style="display: none;">
										<li><a href="#">Drilldown</a></li>
										<hr class="divider">
										<li><a href="#">Approve</a></li>
										<li><a href="#">Reject</a></li>
										<li><a href="#">Reset</a></li>
										<hr class="divider">
										<li><a href="#">Show Rejected</a></li>
										<hr class="divider">
										<li><a href="#">Verify</a></li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="box-content">
						<svg id="dd_data" style="width: 100%"></svg>
						<!--ul style="list-style: none;">
							<li id="dd_data"></li>
						</ul -->
					</div>
				</div>
				
				<div id="business_term_box" class="box" style="border-width:0">
					<table class="infa-table panel">
						<tbody>
							<tr>
								<td class="dropdown title"><img src="images/arrow-open.png" class="arrow-open" /><img src="images/arrow-closed.png" class="arrow-closed" style="display: none;" />Business Terms</td>
								<td class="dropdown" width="20px">
									<a href="#" class="dropdown-link"><span class="icon icon-action"></span></a>
									<ul class="dropdown-menu" style="display: none;">
										<li><a href="#">Assign Business Term</a></li>
										<li><a href="#">Unassign Business Term</a></li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="box-content">
						<ul style="list-style: none;">
							<li id="bt_data"></li>
						</ul>
					</div>
				</div>
				
			</div><!-- END .col-3 -->
			
			<div class="col col-7">
			
				<table class="infa-table static panel">
					<tbody><tr><td class="dropdown title"><img src="images/arrow-open.png" class="panel-values arrow-open" /><img src="images/arrow-closed.png" class="arrow-closed" style="display: none;" />Values</td></tr></tbody>
				</table>
				<div class="box-content" style="border: 1px solid #ccc; border-top-width:0; border-left-width:0;">
				<table class="infa-table no-borders">
					<tbody><tr>
						<td id="vf_header"></td>
						<td width="50px">Sort By</td>
						<td width="100px">
							<select id="sort_graph">
								<option value="frequency" data-type="desc">Frequency</option>
								<option value="name" data-type="asc">Value</option>
								<option value="length" data-type="asc">Length</option>
								<option value="" disabled>----------</option>
								<option value="" disabled>Settings</option>
							</select>
						</td>
					</tr>
				</tbody></table>
				<div style="position: relative; margin: 0 10px; overflow: hidden;">
					
					<div id="graph_viewport"></div>
					<svg id="fq_dist_full" style="border:1px solid #ccc"></svg>
					
					
					<div class="slider-range"></div>
					<div class="fq_dist_zoomed_wrapper">
						<table class="infa-table">
							<tr>
								<td class="slider-content"></td>
								<td width="100px">Show:&nbsp;
									<select id="change_vp_width">
										<option>50</option>
										<option>75</option>
										<option>100</option>
									</select>
								</td>
							</tr>
						</table>
						<svg id="fq_dist_zoomed"></svg>
						
						<div class="" style="height: 150px; overflow-y: scroll">
							<table id="fq_dist_zoomed_table" class="infa-table">
								<thead>
									<tr>
										<th>Value</th>
										<th>Frequency</th>
										<th>Percent</th>
										<th>Length</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
					</div>
					<table border="0">
						<tr><td id="col-stats" style="padding: 5px"></td></tr>
					</table>
				</div>	
				</div>
					<!-- Drilldown table -->
					<table class="infa-table panel" style="margin-top: 5px;">
						<tr>
							<td class="dropdown title"><img src="images/arrow-open.png" class="arrow-open" /><img src="images/arrow-closed.png" class="arrow-closed" style="display: none;" />Data Preview</td>
							<td class="dropdown dropdown-right" width="20px">
								<a href="#" class="dropdown-link"><span class="icon icon-action"></span></a>
								<ul class="dropdown-menu" style="display: none;">
									<li><a href="#">Add Filter</a></li>
									<li><a href="#">Save Filter</a></li>
									<hr class="divider">
									<li><a href="#">Refresh</a></li>
									<hr class="divider">
									<li><a href="#">Export Data Preview</a></li>
								</ul>
							</td>
						</tr>
					</table>
					<div class="drill-down box-content" style="overflow-y: scroll; height: 200px">
						<table id="drill-down-table" class="infa-table">
							<thead>
								<tr>
									<th> AA1001 </th>
									<th> AA1002 </th>
									<th> AA1003 </th>
									<th> AA1004 </th>
									<th> AA1005 </th>
									<th> AA1006 </th>
									<th> AA1007 </th>
									<th> AA1008 </th>
									<th> AA1009 </th>
									<th> AA1010 </th>
									<th> AA1011 </th>
									<th> AA1012 </th>
									<th> AA1013 </th>
									<th> AA1014 </th>
									<th> AA1015 </th>
									<th> AA1016 </th>
									<th> AA1017 </th>
									<th> AA1018 </th>
									<th> AA1019 </th>
									<th> AA1020 </th>
									<th> AA1021 </th>
									<th> AA1022 </th>
									<th> AA1023 </th>
									<th> AA1024 </th>
									<th> AA1025 </th>
									<th> AA1026 </th>
									<th> AA1027 </th>
									<th> AA1028 </th>
									<th> AA1029 </th>
									<th> AA1030 </th>
									<th> AA1031 </th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>

				
				<!-- context menus -->
				<ul id="fq_dist_full_cm" class="dropdown-menu" style="display: none; width: 80px">
					<li class="dropdown-menu-header text-infa-orange">Sort By</li>
					<li><a href="javascript:;" data-action="sort" data-value="frequency" data-type="desc">Frequency</a></li>
					<li><a href="javascript:;" data-action="sort" data-value="name" data-type="asc">Value</a></li>
					<li><a href="javascript:;" data-action="sort" data-value="length" data-type="asc">Length</a></li>
					<hr class="divider">
					<li><a href="#">Settings</a></li>
				</ul>
				
				<ul id="fq_dist_zoomed_cm" class="dropdown-menu" style="display: none;">
					<li><a href="javascript:;">Drilldown</a></li>
					<hr class="divider">
					<li><a href="javascript:;">Add to Reference Table</a></li>
					<li><a href="javascript:;">Create Value Frequency Rule</a></li>
					<li><a href="javascript:;">Create Data Domain</a></li>
					<hr class="divider">
					<li class="dropdown-menu-header text-infa-orange">Show</li>
					<li><a href="javascript:;" data-value="50">50 Values</a></li>
					<li><a href="javascript:;" data-value="75">75 Values</a></li>
					<li><a href="javascript:;" data-value="100">100 Values</a></li>
				</ul>
				
				<ul id="box_dt_cm" class="dropdown-menu" style="display: none; width: 100px;">
					<li><a href="javascript:;">Drilldown</a></li>
					<hr class="divider">
					<li><a href="javascript:;">Approve</a></li>
					<li><a href="javascript:;">Reject</a></li>
					<li><a href="javascript:;">Reset</a></li>
					<hr class="divider">
					<li><a href="#">Show Settings</a></li>
				</ul>
				
				<ul id="box_patterns_cm" class="dropdown-menu" style="display: none;">
					<li><a href="javascript:;">Drilldown</a></li>
					<hr class="divider">
					<li><a href="javascript:;">Add to Reference Table</a></li>
					<li><a href="javascript:;">Create Data Domain</a></li>
				</ul>
				
				<ul id="fq_dist_zoomed_table_cm" class="dropdown-menu" style="display: none;">
					<li><a href="javascript:;">Drilldown</a></li>
					<hr class="divider">
					<li><a href="javascript:;">Add to Reference Table</a></li>
					<li><a href="javascript:;">Create Value Frequency Rule</a></li>
					<li><a href="javascript:;">Create Data Domain</a></li>
				</ul>
				
			</div><!-- END .col-7 -->
	
		</div><!-- END .container -->
		
	</div><!-- END .scrollable -->

<?php require "footer.php"; ?>