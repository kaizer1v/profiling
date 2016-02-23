<!doctype html>
<html>
<head>
	<meta charset="utf-8" />
	
	<title>Profiling - Prototype</title>
	
	<link rel="stylesheet" type="text/css" href="css/informatica.css" />
	<link rel="stylesheet" type="text/css" href="css/profiling.css" />
	<link rel="stylesheet" type="text/css" href="plugins/nvd3/jquery.ui.min.css" />
	<link rel="stylesheet" type="text/css" href="plugins/tipsy/jq_tipsy.css" />
</head>
<body style="margin-top: 50px">

	<header>
		<table class="headerbar fixed-top">
			<tbody><tr>
				<td width="140px"><img src="./images/infa-logo.png" alt="Informatica"></td>
				<td width="50px" class="dropdown"><!-- Here the td itself can act as .dropdown -->
					<a class="dropdown-link" href="#">New<span class="icon icon-carat"></span></a>
					<ul class="dropdown-menu">
						<li class="dropdown-menu-header text-infa-green">Glossary</li>
						<li><a href="#"><span class="icon icon-asset"></span>Business Term</a></li>
						<li><a href="#"><span class="icon icon-category"></span>Category</a></li>
						<li><a href="#"><span class="icon icon-asset"></span>Glossary</a></li>
						<li><a href="#"><span class="icon icon-asset"></span>Policy</a></li>
						
						<hr class="divider">
						<li class="dropdown-menu-header text-infa-dblue">Discovery</li>
						<li><a href="#"><span class="icon icon-pie-chart"></span>Data Object Profile</a></li>
						<li><a href="#"><span class="icon icon-discovery-profile"></span>Enterprise Discovery Profile</a></li>
						<li><a href="#"><span class="icon icon-columns"></span>Flat Table Data Object</a></li>
						<li><a href="#"><span class="icon icon-columns"></span>Table Data Objects</a></li>
						
						<hr class="divider">
						<li class="dropdown-menu-header text-infa-orange">Design</li>
						<li><a href="#"><span class="icon icon-mapping-spec"></span>Mapping Specifications</a></li>
						<li><a href="#"><span class="icon icon-reference-table"></span>Reference Table</a></li>
						<li><a href="#"><span class="icon icon-rule-definition"></span>Rule Specifications</a></li>
						<li></li>
					</ul>
				</td>
				<td width="100px"><a href="#">Open</a></td>
				<td><input type="search" placeholder="Search All" style="width: 40%"></td>
				<td width="20px"><span class="icon icon-flag"></span></td>
				<td width="80px" class="dropdown">
					<a href="#" class="dropdown-link">Manage<span class="icon icon-carat"></span></a>
					<ul class="dropdown-menu">
						<li><a href="#">Connections</a></li>
						<li><a href="#">Data Glossary</a></li>
						<li><a href="#">Glossary Security</a></li>
						<li><a href="#">Job Status</a></li>
						<li><a href="#">Notifications</a></li>
						<li><a href="#">Projects</a></li>
					</ul>
				</td>
				<td width="120px" class="dropdown dropdown-right">
					<a href="#" class="dropdown-link">Administrator<span class="icon icon-carat"></span></a>
					<ul class="dropdown-menu">
						<li><a href="#">Change Password</a></li>
						<li><a href="#">Logout</a></li>
					</ul>
				</td>
				<td width="30px"><span class="icon icon-help"></span></td>
				<td width="50px" class="dropdown dropdown-right">
					<a href="#" class="dropdown-link"><span class="icon icon-carat"></span></a>
					<ul class="dropdown-menu">
						<li><a href="#">Help Content</a></li>
						<hr class="divider" />
						<li><a href="#">About</a></li>
					</ul>
				</td>
			</tr>
		</tbody></table>
	</header>
	
	<div class="main-content">