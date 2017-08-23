<?php
/**
 * The template for displaying the home/index page.
 * This template will also be called in any case where the Wordpress engine 
 * doesn't know which template to use (e.g. 404 error)
 */

get_header(); // This fxn gets the header.php file and renders it ?>
	<section class="hero-wrap js_hero-wrap">
		<div class="container">
			<div class="hero">
			  <h1 class="hero__h1 typewrite">
			  	<span class="js_typewrite">We are creative partners with design-driven solutions for businesses, products &amp; services</span>
			  </h1>
			  <div class="hero__arrow-down">
			  	<a href="#primary">
			  		<img class="img-responsive" alt="Scroll Down" src="<?php echo get_template_directory_uri(); ?>/img/arrow.png" >
			  	</a>
			  </div>
			</div>
		</div>
	</section>
	<section id="primary" class="portfolio" role="main">
		<div class="container">
			<div class="row">

		  <?php 
				$args = array(
					'cat' => 1,
					// 'posts_per_page' => 3
				);
				$the_query = new WP_Query( $args );
			?>
			<?php if ( have_posts() ) : 
			// Do we have any posts in the databse that match our query?
			// In the case of the home page, this will call for the most recent posts 
			?>

				<?php
				$i = 0; //set our counter to zero
				while (have_posts() && $i < 20) : the_post(); 
				// If we have some posts to show, start a loop that will display each one the same way. top 20 posts only
				?>


				<!-- <?php if ($i === 0): //the alternating masonry rows ?>
					<div class="portfolio__row port-row-2-1">
				<?php elseif ($i === 2): ?>
					</div>
					<div class="portfolio__row port-row-1-1-1">
				<?php elseif ($i === 5): ?>
					</div>
					<div class="portfolio__row port-row-1-2">
				<?php elseif ($i === 7): ?>
					</div>
					<div class="portfolio__row port-row-1-1-1">
				<?php elseif ($i === 10): ?>
					</div>
					<div class="portfolio__row port-row-2-1">
				<?php elseif ($i === 12): ?>
					</div>
					<div class="portfolio__row port-row-1-1-1">
				<?php elseif ($i === 15): ?>
					</div>
					<div class="portfolio__row port-row-1-2">
				<?php elseif ($i === 17): ?>
					</div>
					<div class="portfolio__row port-row-1-1-1">
				<?php endif; ?> -->
					
						<a href="<?php the_permalink(); // Get the link to this post ?>" title="<?php the_title(); ?>" class="portfolio__item portfolio-item" style="background-image:url(<?php the_post_thumbnail_url('large'); ?>)">
							<h1 class="portfolio-item__title">
								<span><?php the_title(); // Show the title of the posts as a link ?></span>
							</h1>
						</a> <!-- .portfolio-item -->

					<!-- <?php if ($i === 19): ?>
						</div>
					<?php endif; ?> -->

				<?php $i++; endwhile; // OK, let's stop the posts loop once we've exhausted our query/number of posts ?>
			<?php else : // Well, if there are no posts to display and loop through, let's apologize to the reader (also your 404 error) ?>
				
				<article class="post error">
					<h1 class="404">Nothing has been posted like that yet</h1>
				</article>

			<?php endif; // OK, I think that takes care of both scenarios (having posts or not having any posts) ?>
			<?php wp_reset_query(); //reset the query, since we did some stuff on line 26 ?> 
			</div> <!-- .row -->
		</div><!-- .container -->
	</section><!-- .portfolio -->
<?php get_footer(); // This fxn gets the footer.php file and renders it ?>