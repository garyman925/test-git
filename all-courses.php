<?php include('header.php') ?>
<?php include('main-nav.php'); ?>

<picture>
    <source media="(min-width: 750px)" 
            srcset="images/top-banner/smile-girl-lg.png" />
    <source media="(min-width: 350px)" 
            srcset="images/top-banner/smile-girl-sm@2x.png 2x,
                    images/top-banner/smile-girl-sm.png" />
    <img src="images/top-banner/smile-girl-lg.png" width="100%">
</picture>


<?php include('course-spotlight.php') ?>
<hr class="divider">
<?php include('course-shining.php') ?>
<hr class="divider">
<?php include('course-excel.php') ?>



<?php include('footer.php') ?>