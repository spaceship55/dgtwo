<?php
	/*-----------------------------------------------------------------------------------*/
	/* This template will be called by all other template files to finish 
	/* rendering the page and display the footer area/content
	/*-----------------------------------------------------------------------------------*/
?>

</main><!-- / end page container, begun in the header -->

<footer class="site-footer">
	<div class="container">
    <!-- <a class="site-footer__logo" href="<?php //echo esc_url( home_url( '/' ) ); // Link to the home page ?>" title="<?php //echo esc_attr( get_bloginfo( 'name', 'display' ) ); // Title it with the blog name ?>" rel="home">
      <img class="img-responsive site-footer__logo__img" src="<?php //echo get_template_directory_uri(); ?>/img/DG_Logo_102816.svg" alt="Donovan/Green">
    </a> -->
    <p>footer stuff will go down here</p>
		<nav class="site-footer__site-nav">
			<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); // Display the user-defined menu in Appearance > Menus ?>
		</nav>

	</div><!-- .container -->
</footer><!-- .site-footer -->

<?php wp_footer(); 
// This fxn allows plugins to insert themselves/scripts/css/files (right here) into the footer of your website. 
// Removing this fxn call will disable all kinds of plugins. 
// Move it if you like, but keep it around.
?>

</body>
</html>
