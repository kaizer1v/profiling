
	</div><!-- END .main-content -->

	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="plugins/nvd3/jquery.ui.min.js"></script>
	<!--
	<script type="text/javascript" src="plugins/nvd3/jquery.ui.slider.js"></script>
	-->
	<script type="text/javascript" src="js/d3.min.js"></script>
	<script type="text/javascript" src="js/informatica.js"></script>
	
	<!-- Plugins -->
	<script type="text/javascript" src="plugins/tipsy/jq_tipsy.js"></script>
	<!-- END Plugins -->
	
	<script type="text/javascript" src="js/profiling_data.js"></script>
	<script type="text/javascript" src="js/profiling.js"></script>
	
	<?php
		# PAGE 2
		$url = explode("/", $_SERVER["SCRIPT_FILENAME"]);
		if($url[count($url)-1] != "index.php") {
	?>
			<script type="text/javascript">
				var srNo = <?php echo $_GET['srNo']; ?>;
				globalVars.currentSrNo = srNo;
			</script>
			<script type="text/javascript" src="js/page2.js"></script>
	<?php
		# PAGE 1 (index.php)
		} else {
	?>
			<script type="text/javascript" src="js/profiling_graphs.js"></script>
	<?php
		}
	?>
</body>
</html>