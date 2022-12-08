<?= snippet('header') ?>
<h1>this is otherworks</h1>
<h1><?= $page->title()?></h1>
<p><?= $page->text()?></p>
<p>Projects go here</p>

<section class="other-works-section cfixed">
  <div class="container">
    <ul class="other-works-projects">
      <?php foreach ($page->children()->listed() as $otherworks_project): ?>
      <li>
        <a href="<?= $otherworks_project->url() ?>">
          <div class="info">
            <h3><?= $otherworks_project->title() ?></h3>
            <?php if($otherworks_project->description()->isNotEmpty()): ?>
            <span><?= $otherworks_project->description() ?></span>
            <?php endif ?>
          </div>
          <?php foreach ($otherworks_project->thumbnail()->toFiles() as $coverImage): ?>
          <img src="<?= $coverImage->url() ?>" alt="<?= $coverImage->alt() ?>">
          <?php endforeach ?>
        </a>
      </li>
      <?php endforeach ?>
    </ul>
  </div>
</section>



</body>

</html>