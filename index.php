<!-- Begin global header section -->
<?php
$pageTitle = 'GV Health';
include("includes/_global-Head.php");
?>
<?php
    include("includes/_header.php");
?>
<div class="clearfix"></div>
<div class="getForm__wrapper">
    <div class="container-fluid">
        <div class="row justify-content-between align-items-center">
            <div class="col-12 col-md-6 px-0 flex-last">
                <aside class="getForm__wrapper-image">
                    <img src="static/images/preview.png" class="img-fluid" alt="Laptop image" />
                </aside>
            </div>
            <div class="col-12 col-md-6 px-0 flex-first">
                <aside class="getForm__wrapper-form containerFluid-content containerFluid-content-margin100">
                    <h1 class="title">Subscribe</h1>
                    <p>Stay up to date with all the Goulbourn Valley Health updates and news.</p>
                    <div class="form-fields">
                        <div class="form-group">
                            <label for="username" class="sr-only">Name</label>
                            <input type="text" class="form-control" id="username" name="username" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label for="email" class="sr-only">Email</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Email address" />
                        </div>
                        <button onclick="window.location.href='home.php'" class="button upper button--radius button--blue">let's go</button>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</div>
<div class="clearfix"></div>
<?php
    include("includes/_footer.php");
?>
<div class="clearfix"></div>
<!-- Begin Script section -->
<?php
include("includes/_scripts.php");
?>
<!-- Begin Script section -->

</body>
</html>